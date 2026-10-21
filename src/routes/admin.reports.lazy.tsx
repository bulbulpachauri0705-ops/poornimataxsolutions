import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

import { getLeadStats, getLeads } from "@/lib/leads.server";

export const Route = createLazyFileRoute("/admin/reports")({
  component: AdminReports,
});

const NAVY = "#062B49"; const GOLD = "#D9A928"; const CARD = "#ffffff";
const BORDER = "#E8ECF0"; const BG = "#F4F6F9"; const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";
const PIE_COLORS = ["#D9A928", "#1D4ED8", "#15803D", "#BE123C"];

type Stats = Awaited<ReturnType<typeof getLeadStats>>;

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, boxShadow: SHADOW, padding: "1.25rem", ...style }}>{children}</div>;
}
function CardTitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm font-semibold" style={{ color: NAVY }}>{children}</p>;
}
function StatBox({ label, value, sub, color = GOLD }: { label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div className="rounded-xl p-4" style={{ background: BG, border: `1px solid ${BORDER}` }}>
      <p className="text-xs font-medium" style={{ color: MUTED }}>{label}</p>
      <p className="mt-1.5 text-2xl font-bold" style={{ color }}>{value}</p>
      {sub && <p className="mt-0.5 text-[11px]" style={{ color: MUTED }}>{sub}</p>}
    </div>
  );
}

function AdminReports() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [s] = await Promise.all([getLeadStats(), getLeads()]);
        if (!cancelled) setStats(s);
      } catch (e) {
        console.error("[admin/reports] failed to load report data:", e);
        if (!cancelled) {
          setError(
            "We could not load report data from the database. Check your Supabase connection and RLS policies, then refresh.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const statusCounts = {
    New: stats?.new ?? 0,
    "In Progress": stats?.inProgress ?? 0,
    Converted: stats?.converted ?? 0,
    Lost: stats?.lost ?? 0,
  };
  const pieData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
  const totalLeads = stats?.total ?? 0;
  const conversionRate = totalLeads ? Math.round((statusCounts.Converted / totalLeads) * 100) : 0;
  const monthlyLeads = stats?.monthlyLeads ?? [];
  const topServices = stats?.topServices ?? [];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Reports</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>Overview of leads, services and performance metrics.</p>
        </div>
        <Link to="/admin" className="rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: BG, color: NAVY, border: `1px solid ${BORDER}` }}>← Dashboard</Link>
      </div>

      {error ? (
        <div className="rounded-xl px-4 py-8 text-center text-sm text-red-600" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
          {error}
        </div>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            <StatBox label="Total Leads"     value={loading ? "…" : totalLeads}          sub="All time" />
            <StatBox label="Converted"       value={loading ? "…" : statusCounts.Converted} sub="Closed won"  color="#15803D" />
            <StatBox label="Conversion Rate" value={loading ? "…" : `${conversionRate}%`}   sub="Leads → clients" color="#1D4ED8" />
            <StatBox label="Active Clients"  value={loading ? "…" : statusCounts.Converted} sub="Converted leads" color="#7C3AED" />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <Card style={{ gridColumn: "span 2" }}>
              <CardTitle>Monthly Lead Volume</CardTitle>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={monthlyLeads} barSize={32} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <XAxis dataKey="month" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: `${GOLD}10` }} contentStyle={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 12, color: NAVY }} />
                  <Bar dataKey="leads" fill={GOLD} radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            <Card>
              <CardTitle>Lead Status Breakdown</CardTitle>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                    {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 12, color: NAVY }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-2 space-y-1.5">
                {pieData.map((d, i) => (
                  <div key={d.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                      <span style={{ color: NAVY }}>{d.name}</span>
                    </div>
                    <span className="font-semibold" style={{ color: NAVY }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card>
            <CardTitle>Top Services by Lead Volume</CardTitle>
            {loading ? (
              <p className="text-xs" style={{ color: MUTED }}>Loading…</p>
            ) : topServices.length === 0 ? (
              <p className="text-xs" style={{ color: MUTED }}>No lead data yet. New enquiries from the website will appear here.</p>
            ) : (
              <div className="space-y-3">
                {topServices.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="truncate font-medium" style={{ color: NAVY }}>{s.name}</span>
                      <span className="font-semibold" style={{ color: GOLD }}>{s.leads}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: "#F0F2F5" }}>
                      <div className="h-full rounded-full" style={{ width: `${s.percentage}%`, background: GOLD }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </>
      )}
    </div>
  );
}
