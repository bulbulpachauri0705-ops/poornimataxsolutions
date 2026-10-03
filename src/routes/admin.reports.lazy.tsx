import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { dashboardStats, leads, monthlyLeads, topServices } from "@/data/admin";

export const Route = createLazyFileRoute("/admin/reports")({
  component: AdminReports,
});

const NAVY = "#062B49"; const GOLD = "#D9A928"; const CARD = "#ffffff";
const BORDER = "#E8ECF0"; const BG = "#F4F6F9"; const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";
const PIE_COLORS = ["#D9A928", "#1D4ED8", "#15803D", "#BE123C"];

const statusCounts = {
  New: leads.filter((l) => l.status === "New").length,
  "In Progress": leads.filter((l) => l.status === "In Progress").length,
  Converted: leads.filter((l) => l.status === "Converted").length,
  Lost: leads.filter((l) => l.status === "Lost").length,
};
const pieData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
const conversionRate = Math.round((statusCounts.Converted / leads.length) * 100);

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
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Reports</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>Overview of leads, services and performance metrics.</p>
        </div>
        <Link to="/admin" className="rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: BG, color: NAVY, border: `1px solid ${BORDER}` }}>← Dashboard</Link>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
        <StatBox label="Total Leads"     value={dashboardStats.totalLeads}   sub="All time" />
        <StatBox label="Converted"       value={statusCounts.Converted}      sub="Closed won"       color="#15803D" />
        <StatBox label="Conversion Rate" value={`${conversionRate}%`}        sub="Leads → clients"  color="#1D4ED8" />
        <StatBox label="Total Clients"   value={dashboardStats.totalClients} sub="Active"            color="#7C3AED" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card style={{ gridColumn: "span 2" }}>
          <CardTitle>Monthly Lead Volume</CardTitle>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyLeads} barSize={32} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <XAxis dataKey="month" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: `${GOLD}10` }} contentStyle={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: NAVY, fontSize: 12 }} />
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
    </div>
  );
}
