import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  dashboardStats,
  leads,
  monthlyLeads,
  topServices,
} from "@/data/admin";

export const Route = createFileRoute("/admin/reports")({
  component: AdminReports,
});

const NAVY   = "#062B49";
const GOLD   = "#D9A928";
const CARD   = "#ffffff";
const BORDER = "#E8ECF0";
const BG     = "#F4F6F9";
const MUTED  = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

const PIE_COLORS = ["#D9A928", "#1D4ED8", "#15803D", "#BE123C"];

const statusCounts = {
  New:           leads.filter((l) => l.status === "New").length,
  "In Progress": leads.filter((l) => l.status === "In Progress").length,
  Converted:     leads.filter((l) => l.status === "Converted").length,
  Lost:          leads.filter((l) => l.status === "Lost").length,
};

const pieData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

const conversionRate = Math.round((statusCounts.Converted / leads.length) * 100);

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        boxShadow: SHADOW,
        padding: "1.25rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-semibold" style={{ color: NAVY }}>
      {children}
    </p>
  );
}

function StatBox({
  label,
  value,
  sub,
  color = GOLD,
}: {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: BG, border: `1px solid ${BORDER}` }}
    >
      <p className="text-xs font-medium" style={{ color: MUTED }}>{label}</p>
      <p className="mt-1.5 text-2xl font-bold" style={{ color }}>{value}</p>
      {sub && <p className="mt-0.5 text-[11px]" style={{ color: MUTED }}>{sub}</p>}
    </div>
  );
}

function AdminReports() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Reports</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>
            Overview of leads, services and performance metrics.
          </p>
        </div>
        <Link
          to="/admin"
          className="rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ background: BG, color: NAVY, border: `1px solid ${BORDER}` }}
        >
          ← Dashboard
        </Link>
      </div>

      {/* Summary stats */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
        <StatBox label="Total Leads"      value={dashboardStats.totalLeads}    sub="All time" />
        <StatBox label="Converted"        value={statusCounts.Converted}       sub="Closed won"  color="#15803D" />
        <StatBox label="Conversion Rate"  value={`${conversionRate}%`}         sub="Leads → clients" color="#1D4ED8" />
        <StatBox label="Total Clients"    value={dashboardStats.totalClients}  sub="Active" color="#7C3AED" />
      </div>

      {/* Monthly leads chart + Lead status pie */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card style={{ padding: "1.25rem" }} >
          <div className="lg:col-span-2" style={{ gridColumn: "span 2" }}>
            <CardTitle>Monthly Lead Volume</CardTitle>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={monthlyLeads}
                barSize={32}
                margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
              >
                <XAxis
                  dataKey="month"
                  tick={{ fill: MUTED, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: MUTED, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: `${GOLD}10` }}
                  contentStyle={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                    color: NAVY,
                    fontSize: 12,
                    boxShadow: SHADOW,
                  }}
                />
                <Bar dataKey="leads" fill={GOLD} radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardTitle>Lead Status Breakdown</CardTitle>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  fontSize: 12,
                  color: NAVY,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-1.5">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: PIE_COLORS[i % PIE_COLORS.length] }}
                  />
                  <span style={{ color: NAVY }}>{d.name}</span>
                </div>
                <span className="font-semibold" style={{ color: NAVY }}>{d.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top services table + Lead list summary */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Top services */}
        <Card>
          <CardTitle>Top Services by Leads</CardTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  {["Service", "Leads", "Share"].map((h) => (
                    <th
                      key={h}
                      className="pb-2.5 text-left text-xs font-semibold"
                      style={{ color: MUTED }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topServices.map((s, i) => (
                  <tr
                    key={s.name}
                    style={{ borderBottom: i < topServices.length - 1 ? `1px solid ${BORDER}` : "none" }}
                  >
                    <td className="py-2.5 pr-4 text-xs font-medium" style={{ color: NAVY }}>
                      {s.name}
                    </td>
                    <td className="py-2.5 pr-4 text-xs font-bold" style={{ color: GOLD }}>
                      {s.leads}
                    </td>
                    <td className="py-2.5 w-32">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 flex-1 rounded-full" style={{ background: "#F0F2F5" }}>
                          <div
                            className="h-1.5 rounded-full"
                            style={{ width: `${s.percentage}%`, background: GOLD }}
                          />
                        </div>
                        <span className="text-[11px] font-medium" style={{ color: MUTED }}>
                          {s.percentage}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* All leads summary */}
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>All Leads Summary</p>
            <Link
              to="/admin/leads"
              className="text-xs font-medium hover:underline"
              style={{ color: GOLD }}
            >
              Manage →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  {["Name", "Service", "Status"].map((h) => (
                    <th
                      key={h}
                      className="pb-2.5 text-left font-semibold"
                      style={{ color: MUTED }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => {
                  const statusStyle: Record<string, { bg: string; text: string }> = {
                    New:           { bg: "#FFF8E6", text: "#B07D0A" },
                    "In Progress": { bg: "#EFF6FF", text: "#1D4ED8" },
                    Converted:     { bg: "#F0FDF4", text: "#15803D" },
                    Lost:          { bg: "#FFF1F2", text: "#BE123C" },
                  };
                  const sc = statusStyle[lead.status] ?? { bg: BG, text: MUTED };
                  return (
                    <tr
                      key={lead.id}
                      style={{ borderBottom: i < leads.length - 1 ? `1px solid ${BORDER}` : "none" }}
                    >
                      <td className="py-2 pr-3 font-medium" style={{ color: NAVY }}>
                        {lead.name}
                      </td>
                      <td className="py-2 pr-3" style={{ color: MUTED, maxWidth: 120 }}>
                        <span className="block truncate">
                          {lead.service.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </td>
                      <td className="py-2">
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                          style={{ background: sc.bg, color: sc.text }}
                        >
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Performance summary cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardTitle>Blog Performance</CardTitle>
          <div className="space-y-2.5">
            {[
              { label: "Total Posts",  value: 4 },
              { label: "Published",    value: 3 },
              { label: "Drafts",       value: 1 },
            ].map((item) => (
              <div key={item.label} className="flex justify-between text-sm">
                <span style={{ color: MUTED }}>{item.label}</span>
                <span className="font-bold" style={{ color: NAVY }}>{item.value}</span>
              </div>
            ))}
          </div>
          <Link
            to="/admin/blogs"
            className="mt-4 block text-xs font-medium hover:underline"
            style={{ color: GOLD }}
          >
            Manage Blogs →
          </Link>
        </Card>

        <Card>
          <CardTitle>SEO Summary</CardTitle>
          <div className="space-y-2.5">
            {[
              { label: "Health Score", value: `${dashboardStats.seoHealth}%` },
              { label: "Meta Tags",    value: "90%" },
              { label: "Page Speed",   value: "72%" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between text-sm">
                <span style={{ color: MUTED }}>{item.label}</span>
                <span className="font-bold" style={{ color: NAVY }}>{item.value}</span>
              </div>
            ))}
          </div>
          <Link
            to="/admin/seo"
            className="mt-4 block text-xs font-medium hover:underline"
            style={{ color: GOLD }}
          >
            Manage SEO →
          </Link>
        </Card>

        <Card>
          <CardTitle>Inquiry Summary</CardTitle>
          <div className="space-y-2.5">
            {[
              { label: "New Inquiries",  value: dashboardStats.newInquiries },
              { label: "Appointments",   value: dashboardStats.appointments },
              { label: "Total Clients",  value: dashboardStats.totalClients },
            ].map((item) => (
              <div key={item.label} className="flex justify-between text-sm">
                <span style={{ color: MUTED }}>{item.label}</span>
                <span className="font-bold" style={{ color: NAVY }}>{item.value}</span>
              </div>
            ))}
          </div>
          <Link
            to="/admin"
            className="mt-4 block text-xs font-medium hover:underline"
            style={{ color: GOLD }}
          >
            View Dashboard →
          </Link>
        </Card>
      </div>
    </div>
  );
}
