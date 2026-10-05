import { createLazyFileRoute, Link, Outlet, useRouter, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  Calendar,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Receipt,
  Search,
  Settings,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/clients", label: "Clients", icon: Users },
  { to: "/admin/services", label: "Services", icon: FileText },
  { to: "/admin/appointments", label: "Appointments", icon: Calendar },
  { to: "/admin/documents", label: "Documents", icon: FileText },
  { to: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
  { to: "/admin/invoices", label: "Invoices", icon: Receipt },
  { to: "/admin/reports", label: "Reports", icon: BarChart3 },
  { to: "/admin/leads", label: "Leads", icon: TrendingUp },
  { to: "/admin/seo", label: "SEO", icon: Search },
  { to: "/admin/blogs", label: "Blogs", icon: BookOpen },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export const Route = createLazyFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const routerState = useRouterState();
  const router = useRouter();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const session = data.session;
      if (!session) {
        router.navigate({ to: "/admin/login" });
      } else {
        setUserEmail(session.user.email ?? null);
        setAuthChecked(true);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.navigate({ to: "/admin/login" });
      } else {
        setUserEmail(session.user.email ?? null);
        setAuthChecked(true);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.navigate({ to: "/admin/login" });
  }

  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#F4F6F9" }}>
        <div className="text-sm" style={{ color: "#8A94A6" }}>Checking authentication…</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#F4F6F9" }}>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex w-60 flex-col transition-transform duration-200 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ background: "#062B49" }}
      >
        <div
          className="flex h-16 items-center justify-between px-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Link to="/admin" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
            <span className="flex size-9 items-center justify-center rounded-lg text-sm font-bold" style={{ background: "#D9A928", color: "#062B49" }}>P</span>
            <div>
              <p className="text-sm font-semibold leading-tight" style={{ color: "#ffffff" }}>Poornima Tax</p>
              <p className="text-[10px] leading-tight" style={{ color: "rgba(255,255,255,0.45)" }}>Admin Panel</p>
            </div>
          </Link>
          <button className="lg:hidden rounded p-1" onClick={() => setSidebarOpen(false)} style={{ color: "rgba(255,255,255,0.5)" }}>
            <X className="size-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact ? currentPath === item.to : currentPath.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all", isActive ? "font-medium" : "hover:bg-white/5")}
                style={isActive ? { background: "#D9A928", color: "#062B49" } : { color: "rgba(255,255,255,0.65)" }}
              >
                <Icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 space-y-0.5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all hover:bg-white/5" style={{ color: "rgba(255,255,255,0.5)" }}>
            <FileText className="size-4" />
            Back to Website
          </Link>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <LogOut className="size-4" />
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between px-6" style={{ background: "#ffffff", borderBottom: "1px solid #E8ECF0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div className="flex items-center gap-4">
            <button className="lg:hidden rounded-lg p-2 transition-colors hover:bg-gray-100" onClick={() => setSidebarOpen(true)} style={{ color: "#062B49" }}>
              <Menu className="size-5" />
            </button>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#062B49" }}>Poornima Tax Solution</p>
              <p className="text-xs" style={{ color: "#8A94A6" }}>Admin Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full text-xs font-bold" style={{ background: "#D9A928", color: "#062B49" }}>
                {userEmail ? userEmail[0]?.toUpperCase() : "A"}
              </span>
              <div className="hidden sm:block">
                <p className="text-xs font-medium" style={{ color: "#062B49" }}>Admin</p>
                <p className="text-[10px] max-w-[120px] truncate" style={{ color: "#8A94A6" }}>{userEmail ?? "Administrator"}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-5 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
