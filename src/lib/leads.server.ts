import { createServerFn } from "@tanstack/react-start";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database, LeadStatus } from "@/integrations/supabase/types";

type LeadRow = Database["public"]["Tables"]["leads"]["Row"];
type LeadInsert = Database["public"]["Tables"]["leads"]["Insert"];
type LeadUpdate = Database["public"]["Tables"]["leads"]["Update"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyClient = SupabaseClient<any>;

function getAdminClient(): AnyClient {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !key) throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

const LeadInsertSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  city: z.string().optional(),
  contact_method: z.string().optional(),
});

// ── PUBLIC: submit a lead from the website ──────────────────────
export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => LeadInsertSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = getAdminClient();
    const insert: LeadInsert = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      message: data.message,
      city: data.city ?? null,
      contact_method: data.contact_method ?? null,
      status: "New",
      source: "Website",
    };
    const { error } = await supabase.from("leads").insert(insert);
    if (error) throw new Error(error.message);
    return { success: true };
  });

// ── ADMIN: fetch all leads ──────────────────────────────────────
export const getLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async (): Promise<LeadRow[]> => {
    const supabase = getAdminClient();
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as LeadRow[];
  });

// ── ADMIN: update lead ──────────────────────────────────────────
export const updateLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        name: z.string().min(2).optional(),
        phone: z.string().optional(),
        email: z.string().email().optional(),
        service: z.string().optional(),
        message: z.string().optional(),
        status: z.enum(["New", "In Progress", "Converted", "Lost"]).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const supabase = getAdminClient();
    const { id, ...fields } = data;
    // Strip undefined values to satisfy exactOptionalPropertyTypes
    const update: LeadUpdate = Object.fromEntries(
      Object.entries(fields).filter(([, v]) => v !== undefined),
    ) as LeadUpdate;
    const { error } = await supabase.from("leads").update(update).eq("id", id);
    if (error) throw new Error(error.message);
    return { success: true };
  });

// ── ADMIN: delete a lead ────────────────────────────────────────
export const deleteLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: unknown) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data }) => {
    const supabase = getAdminClient();
    const { error } = await supabase.from("leads").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  });

// ── ADMIN: dashboard stats ──────────────────────────────────────
export const getLeadStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const supabase = getAdminClient();
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

    const { data, error } = await supabase
      .from("leads")
      .select("id, status, created_at, service");
    if (error) throw new Error(error.message);

    type Row = { id: string; status: LeadStatus; created_at: string; service: string };
    const all = (data ?? []) as Row[];

    const statusCount = (s: LeadStatus) => all.filter((l) => l.status === s).length;

    // Monthly chart — last 6 months
    const monthlyMap: Record<string, number> = {};
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.toLocaleString("en-IN", { month: "short" });
      monthlyMap[key] = 0;
    }
    all.forEach((l) => {
      const d = new Date(l.created_at);
      const diff =
        (now.getFullYear() - d.getFullYear()) * 12 +
        (now.getMonth() - d.getMonth());
      if (diff >= 0 && diff < 6) {
        const key = d.toLocaleString("en-IN", { month: "short" });
        if (key in monthlyMap) monthlyMap[key] = (monthlyMap[key] ?? 0) + 1;
      }
    });

    // Top services
    const serviceMap: Record<string, number> = {};
    all.forEach((l) => {
      serviceMap[l.service] = (serviceMap[l.service] ?? 0) + 1;
    });
    const topServices = Object.entries(serviceMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, leads]) => ({
        name,
        leads,
        percentage: all.length ? Math.round((leads / all.length) * 100) : 0,
      }));

    return {
      total: all.length,
      new: statusCount("New"),
      inProgress: statusCount("In Progress"),
      converted: statusCount("Converted"),
      lost: statusCount("Lost"),
      today: all.filter((l) => l.created_at >= todayStart).length,
      thisWeek: all.filter((l) => l.created_at >= weekStart).length,
      thisMonth: all.filter((l) => l.created_at >= monthStart).length,
      monthlyLeads: Object.entries(monthlyMap).map(([month, leads]) => ({
        month,
        leads: leads ?? 0,
      })),
      topServices,
    };
  });
