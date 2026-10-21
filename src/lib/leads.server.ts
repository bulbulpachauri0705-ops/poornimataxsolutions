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

/**
 * Public (anonymous) Supabase client.
 *
 * Used ONLY by the public "submit a lead" endpoint. The RLS policy
 * "Anyone can submit a lead" (supabase/migrations/…_create_leads.sql) allows
 * anonymous INSERTs, so no service-role key is required here and no
 * privileged credential has to be present in the runtime environment.
 */
function getPublicClient(): AnyClient {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) {
    throw new Error(
      "Server is missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY. Add both to the server environment.",
    );
  }
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
  .validator((data: unknown) => {
    const parsed = LeadInsertSchema.safeParse(data);
    if (!parsed.success) {
      // Never leak the raw Zod payload to the browser; the form already
      // highlights individual fields client-side.
      throw new Error("Some details look invalid. Please check the form and try again.");
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    const supabase = getPublicClient();
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
    if (error) {
      console.error("[leads] insert failed:", error.message, error.code);
      throw new Error("We could not save your enquiry. Please try again.");
    }
    return { success: true };
  });

// ── ADMIN: fetch all leads ──────────────────────────────────────
// Uses the signed-in admin's own JWT (supplied by requireSupabaseAuth), so the
// RLS policies "Authenticated users can view/update/delete leads" apply and no
// service-role key is needed.
export const getLeads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<LeadRow[]> => {
    const { data, error } = await context.supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("[leads] select failed:", error.message, error.code);
      throw new Error("Could not load leads.");
    }
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
  .handler(async ({ data, context }) => {
    const { id, ...fields } = data;
    // Strip undefined values to satisfy exactOptionalPropertyTypes
    const update: LeadUpdate = Object.fromEntries(
      Object.entries(fields).filter(([, v]) => v !== undefined),
    ) as LeadUpdate;
    const { error } = await context.supabase.from("leads").update(update).eq("id", id);
    if (error) {
      console.error("[leads] update failed:", error.message, error.code);
      throw new Error("Could not save the lead.");
    }
    return { success: true };
  });

// ── ADMIN: delete a lead ────────────────────────────────────────
export const deleteLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: unknown) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("leads").delete().eq("id", data.id);
    if (error) {
      console.error("[leads] delete failed:", error.message, error.code);
      throw new Error("Could not delete the lead.");
    }
    return { success: true };
  });

// ── ADMIN: dashboard stats ──────────────────────────────────────
export const getLeadStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

    const { data, error } = await context.supabase
      .from("leads")
      .select("id, status, created_at, service");
    if (error) {
      console.error("[leads] stats failed:", error.message, error.code);
      throw new Error("Could not load dashboard stats.");
    }

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
