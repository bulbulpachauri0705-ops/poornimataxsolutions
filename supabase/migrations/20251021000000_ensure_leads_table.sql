-- =============================================================================
-- Ensure the public.leads table exists and is correctly protected.
--
-- WHY THIS FILE EXISTS
-- The public.leads table was never actually created in the Supabase project
-- (https://supxcggpyiuttjmzwjmhz.supabase.co -> qlxcggpyiuttjmzwjmhz).
-- PostgREST returned 404 for /rest/v1/leads, which is why website enquiries
-- were never saved and the Admin Dashboard could not list them.
--
-- This script is IDEMPOTENT and safe to run more than once:
--   - it never drops the table or any data
--   - it only adds the table if it is missing, and adds any missing columns
--   - policies are dropped and recreated so re-running cannot fail
--
-- HOW TO RUN
--   Supabase Dashboard -> SQL Editor -> New query -> paste -> Run
--   (or: supabase db push, if you link the CLI to this project)
-- =============================================================================

-- 1. Table -------------------------------------------------------------------------
create table if not exists public.leads (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  phone           text not null,
  email           text not null,
  service         text not null default '',
  message         text not null default '',
  city            text,
  contact_method  text,
  status          text not null default 'New'
                    check (status in ('New', 'In Progress', 'Converted', 'Lost')),
  source          text not null default 'Website',
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- 2. Add any columns that may be missing on a partially created table --------
alter table public.leads add column if not exists name            text not null default '';
alter table public.leads add column if not exists phone           text not null default '';
alter table public.leads add column if not exists email           text not null default '';
alter table public.leads add column if not exists service         text not null default '';
alter table public.leads add column if not exists message         text not null default '';
alter table public.leads add column if not exists city            text;
alter table public.leads add column if not exists contact_method  text;
alter table public.leads add column if not exists status          text not null default 'New';
alter table public.leads add column if not exists source          text not null default 'Website';
alter table public.leads add column if not exists created_at      timestamptz not null default now();
alter table public.leads add column if not exists updated_at      timestamptz not null default now();

-- 3. Keep the status CHECK constraint in sync --------------------------------
alter table public.leads drop constraint if exists leads_status_check;
alter table public.leads
  add constraint leads_status_check
  check (status in ('New', 'In Progress', 'Converted', 'Lost'));

-- 4. updated_at trigger --------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_updated_at on public.leads;
create trigger leads_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- 5. Row Level Security ---------------------------------------------------------
-- RLS is what makes the two different access paths safe:
--   * the public website inserts with the ANON/publishable key
--   * the Admin Dashboard reads/writes with the signed-in admin's own JWT
-- Neither path needs a service-role key.
alter table public.leads enable row level security;

drop policy if exists "Anyone can submit a lead"          on public.leads;
drop policy if exists "Authenticated users can view leads"  on public.leads;
drop policy if exists "Authenticated users can update leads" on public.leads;
drop policy if exists "Authenticated users can delete leads" on public.leads;

-- Public website form: anybody may submit a lead, but only these columns.
create policy "Anyone can submit a lead"
  on public.leads for insert
  with check (true);

-- Admin Dashboard: only a signed-in user may read the leads.
create policy "Authenticated users can view leads"
  on public.leads for select
  using (auth.role() = 'authenticated');

create policy "Authenticated users can update leads"
  on public.leads for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can delete leads"
  on public.leads for delete
  using (auth.role() = 'authenticated');

-- 6. Indexes for the admin list (newest first) and status filters -------------
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx    on public.leads (status);

-- 7. Verify ---------------------------------------------------------------------
-- Expected: one row per status, counts adding up to the total.
select status, count(*) from public.leads group by status order by status;
