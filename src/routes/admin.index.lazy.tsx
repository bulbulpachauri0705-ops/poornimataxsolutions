import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Plus,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import {
  dashboardStats,
  leads,
  monthlyLeads,
  recentActivity,
  topServices,
} from "@/data/admin";

export const Route = createLazyFileRoute("/admin/")({
  component: AdminDashboard,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const BG = "#F4F6F9";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const TEXT_MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

const statusColors: Record<string, { bg: string; text: string }> = {
  New:           { bg: "#FFF8E6", text: "#B07D0A" },
  "In Progress": { bg: "#EFF6FF", text: "#1D4ED8" },
  Converted:     { bg: "#F0FDF4", text: "#15803D" },
  Lost:          { bg: "#FFF1F2", text: "#BE123C" },
};

function Card({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, boxShadow: SHADOW, padding: "1.25rem", ...style }}>
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm font-semibold" style={{ color: NAVY }}>{children}</p>;
}

function StatCard({ label, value, icon: Icon, sub, accent }: { label: string; value: string | number; icon: React.ElementType; sub?: string; accent?: string }) {
  const color = accent ?? GOLD;
  return (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, boxShadow: SHADOW, padding: "1.1rem 1.25rem" }}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-xs font-medium" style={{ color: TEXT_MUTED }}>{label}</p>
          <p className="mt-1.5 text-2xl font-bold leading-none" style={{ color: NAVY }}>{value}</p>
          {sub && <p className="mt-1 text-[11px]" style={{ color: TEXT_MUTED }}>{sub}</p>}
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ background: `${color}18` }}>
          <Icon className="size-5" style={{ color }} />
        </span>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const c = statusColors[status] ?? { bg: "#F4F6F9", text: TEXT_MUTED };
  return <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style={{ background: c.bg, color: c.text }}>{status}</span>;
}

function ProgressBar({ value, color = GOLD }: { value: number; color?: string }) {
  return (
    <div className="h-1.5 w-full rounded-full" style={{ background: "#F0F2F5" }}>
      <div className="h-1.5 rounded-full transition-all" style={{ width: `${value}%`, background: color }} />
    </div>
  );
}

function AdminDashboard() {
  const recentLeads = leads.slice(0, 5);
  return (
    <div className="space-y-5" style={{ color: NAVY }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Dashboard</h1>
          <p className="mt-0.5 text-sm" style={{ color: TEXT_MUTED }}>Welcome back — here's what's happening today.</p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium" style={{ background: `${GOLD}18`, color: GOLD }}>
          <span className="size-1.5 rounded-full" style={{ background: GOLD }} />Live
        </span>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Total Clients"  value={dashboardStats.totalClients}  icon={Users}         sub="+4 this month" />
        <StatCard label="Total Leads"    value={dashboardStats.totalLeads}    icon={TrendingUp}    sub="+8 this week"  accent="#7C3AED" />
        <StatCard label="New Inquiries"  value={dashboardStats.newInquiries}  icon={MessageSquare} sub="Unread"        accent="#0EA5E9" />
        <StatCard label="Appointments"   value={dashboardStats.appointments}  icon={Calendar}      sub="This week"    accent="#10B981" />
        <StatCard label="Blog Posts"     value={dashboardStats.blogPosts}     icon={BookOpen}      sub="3 published"  accent="#F59E0B" />
        <StatCard label="SEO Health"     value={`${dashboardStats.seoHealth}%`} icon={Search}      sub="Good"         accent="#06B6D4" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardTitle>Lead Overview — Last 6 Months</CardTitle>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyLeads} barSize={32} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <XAxis dataKey="month" tick={{ fill: TEXT_MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: TEXT_MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: `${GOLD}10` }} contentStyle={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: NAVY, fontSize: 12, boxShadow: SHADOW }} />
              <Bar dataKey="leads" fill={GOLD} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <CardTitle>Lead Status</CardTitle>
          <div className="space-y-4">
            {(["New", "In Progress", "Converted", "Lost"] as const).map((status) => {
              const count = leads.filter((l) => l.status === status).length;
              const pct = Math.round((count / leads.length) * 100);
              const c = statusColors[status]!;
              return (
                <div key={status}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="font-medium" style={{ color: NAVY }}>{status}</span>
                    <span className="font-semibold" style={{ color: c.text }}>{count}</span>
                  </div>
                  <ProgressBar value={pct} color={c.text} />
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2" style={{ padding: "1.25rem 0" }}>
          <div className="mb-3 flex items-center justify-between px-5">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>Recent Leads</p>
            <Link to="/admin/leads" className="text-xs font-medium hover:underline" style={{ color: GOLD }}>View all →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  {["Name", "Service", "Date", "Status"].map((h) => (
                    <th key={h} className="px-5 pb-2.5 pt-0 text-left font-medium" style={{ color: TEXT_MUTED }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="transition-colors hover:bg-gray-50" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <td className="px-5 py-3 font-medium" style={{ color: NAVY }}>{lead.name}</td>
                    <td className="px-5 py-3" style={{ color: TEXT_MUTED, maxWidth: 140 }}><span className="block truncate">{lead.service.split(" ").slice(0, 3).join(" ")}</span></td>
                    <td className="px-5 py-3" style={{ color: TEXT_MUTED }}>{lead.date}</td>
                    <td className="px-5 py-3"><StatusBadge status={lead.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardTitle>Top Services</CardTitle>
            <div className="space-y-3">
              {topServices.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="truncate font-medium" style={{ color: NAVY, maxWidth: "72%" }}>{s.name}</span>
                    <span className="font-semibold" style={{ color: GOLD }}>{s.leads}</span>
                  </div>
                  <ProgressBar value={s.percentage} />
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardTitle>Recent Activity</CardTitle>
            <div className="space-y-3">
              {recentActivity.map((a) => (
                <div key={a.id} className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full" style={{ background: `${GOLD}18` }}>
                    <Activity className="size-3" style={{ color: GOLD }} />
                  </span>
                  <div>
                    <p className="text-xs font-medium leading-snug" style={{ color: NAVY }}>{a.action}</p>
                    <p className="mt-0.5 text-[11px]" style={{ color: TEXT_MUTED }}>{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>SEO Performance</p>
            <Link to="/admin/seo" className="text-xs font-medium hover:underline" style={{ color: GOLD }}>Manage →</Link>
          </div>
          <div className="space-y-3.5">
            {[{ label: "Overall Health", value: 78 }, { label: "Meta Tags", value: 90 }, { label: "Page Speed", value: 72 }, { label: "Schema Markup", value: 65 }].map((item) => (
              <div key={item.label}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="font-medium" style={{ color: NAVY }}>{item.label}</span>
                  <span className="font-semibold" style={{ color: GOLD }}>{item.value}%</span>
                </div>
                <ProgressBar value={item.value} />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>Blog Overview</p>
            <Link to="/admin/blogs" className="text-xs font-medium hover:underline" style={{ color: GOLD }}>Manage →</Link>
          </div>
          <div className="space-y-3">
            {[{ label: "Total Posts", value: 4, icon: BookOpen }, { label: "Published", value: 3, icon: FileText }, { label: "Drafts", value: 1, icon: FileText }, { label: "This Month", value: 1, icon: Calendar }].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center justify-between rounded-lg px-3 py-2.5" style={{ background: BG }}>
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-lg" style={{ background: `${GOLD}18` }}>
                      <Icon className="size-3.5" style={{ color: GOLD }} />
                    </span>
                    <span className="text-xs font-medium" style={{ color: NAVY }}>{item.label}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: NAVY }}>{item.value}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card>
        <CardTitle>Quick Actions</CardTitle>
        <div className="flex flex-wrap gap-3">
          {[{ label: "Add Lead", to: "/admin/leads", icon: TrendingUp }, { label: "New Blog Post", to: "/admin/blogs", icon: BookOpen }, { label: "Update SEO", to: "/admin/seo", icon: Search }, { label: "View Reports", to: "/admin/reports", icon: FileText }].map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} to={action.to} className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all hover:opacity-90 active:scale-95" style={{ background: NAVY, color: "#ffffff" }}>
                <span className="flex size-6 items-center justify-center rounded-lg" style={{ background: `${GOLD}30` }}>
                  <Icon className="size-3.5" style={{ color: GOLD }} />
                </span>
                {action.label}
                <Plus className="size-3.5 opacity-60" />
              </Link>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
