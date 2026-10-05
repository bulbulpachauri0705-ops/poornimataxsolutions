-- Create leads table
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  email       text not null,
  service     text not null default '',
  message     text not null default '',
  city        text,
  contact_method text,
  status      text not null default 'New'
                check (status in ('New', 'In Progress', 'Converted', 'Lost')),
  source      text not null default 'Website',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger leads_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- RLS: public can INSERT (website form), only authenticated admins can SELECT/UPDATE/DELETE
alter table public.leads enable row level security;

create policy "Anyone can submit a lead"
  on public.leads for insert
  with check (true);

create policy "Authenticated users can view leads"
  on public.leads for select
  using (auth.role() = 'authenticated');

create policy "Authenticated users can update leads"
  on public.leads for update
  using (auth.role() = 'authenticated');

create policy "Authenticated users can delete leads"
  on public.leads for delete
  using (auth.role() = 'authenticated');
