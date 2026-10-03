import { createFileRoute } from "@tanstack/react-router";
import { Bell, Globe, Lock, Mail, Save, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type Tab = "profile" | "business" | "notifications" | "security";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "profile",       label: "Profile",       icon: <User className="size-4" /> },
  { id: "business",      label: "Business",      icon: <Globe className="size-4" /> },
  { id: "notifications", label: "Notifications", icon: <Bell className="size-4" /> },
  { id: "security",      label: "Security",      icon: <Lock className="size-4" /> },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
      <h3 className="mb-5 text-sm font-bold" style={{ color: NAVY }}>{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium" style={{ color: MUTED }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, type = "text", placeholder }: { value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-colors"
      style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
    />
  );
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <div className="flex items-center justify-between py-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
      <span className="text-sm" style={{ color: NAVY }}>{label}</span>
      <button
        onClick={() => onChange(!checked)}
        className="relative h-5 w-9 rounded-full transition-colors"
        style={{ background: checked ? NAVY : BORDER }}
      >
        <span
          className="absolute top-0.5 size-4 rounded-full bg-white transition-transform shadow-sm"
          style={{ transform: checked ? "translateX(16px)" : "translateX(2px)" }}
        />
      </button>
    </div>
  );
}

function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex justify-end pt-2">
      <button onClick={onClick} className="flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>
        <Save className="size-4" /> Save Changes
      </button>
    </div>
  );
}

function ProfileTab() {
  const [form, setForm] = useState({ name: "Admin User", email: "admin@poornimatax.com", phone: "+91 98765 43210", role: "Administrator" });
  const set = (k: keyof typeof form) => (v: string) => setForm((p) => ({ ...p, [k]: v }));
  return (
    <div className="space-y-5">
      <Section title="Personal Information">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name"><Input value={form.name} onChange={set("name")} /></Field>
          <Field label="Email Address"><Input value={form.email} onChange={set("email")} type="email" /></Field>
          <Field label="Phone Number"><Input value={form.phone} onChange={set("phone")} /></Field>
          <Field label="Role">
            <input value={form.role} readOnly className="w-full rounded-lg px-3 py-2 text-sm" style={{ background: BG, border: `1px solid ${BORDER}`, color: MUTED }} />
          </Field>
        </div>
        <SaveButton onClick={() => alert("Profile saved!")} />
      </Section>
      <Section title="Profile Picture">
        <div className="flex items-center gap-4">
          <div className="flex size-16 items-center justify-center rounded-full text-2xl font-bold" style={{ background: NAVY, color: "#fff" }}>A</div>
          <div>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>Upload Photo</button>
            <p className="mt-1 text-xs" style={{ color: MUTED }}>JPG or PNG, max 2MB</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

function BusinessTab() {
  const [form, setForm] = useState({
    businessName: "Poornima Tax Solution",
    tagline: "Your Trusted Tax & Financial Partner",
    email: "info@poornimatax.com",
    phone: "+91 98765 43210",
    address: "123, Tax Bhavan, MG Road, Pune, Maharashtra - 411001",
    gstin: "27XXXXX1234Z1",
    website: "https://poornimatax.com",
  });
  const set = (k: keyof typeof form) => (v: string) => setForm((p) => ({ ...p, [k]: v }));
  return (
    <div className="space-y-5">
      <Section title="Business Information">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Business Name"><Input value={form.businessName} onChange={set("businessName")} /></Field>
          <Field label="Tagline"><Input value={form.tagline} onChange={set("tagline")} /></Field>
          <Field label="Contact Email"><Input value={form.email} onChange={set("email")} type="email" /></Field>
          <Field label="Contact Phone"><Input value={form.phone} onChange={set("phone")} /></Field>
          <Field label="GSTIN"><Input value={form.gstin} onChange={set("gstin")} /></Field>
          <Field label="Website"><Input value={form.website} onChange={set("website")} /></Field>
        </div>
        <div className="mt-4">
          <Field label="Business Address">
            <textarea value={form.address} onChange={(e) => set("address")(e.target.value)} rows={2} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }} />
          </Field>
        </div>
        <SaveButton onClick={() => alert("Business info saved!")} />
      </Section>
      <Section title="Working Hours">
        <div className="space-y-2">
          {[["Monday – Friday", "9:00 AM – 6:00 PM"], ["Saturday", "10:00 AM – 2:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => (
            <div key={day} className="flex items-center justify-between py-2" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <span className="text-sm font-medium" style={{ color: NAVY }}>{day}</span>
              <span className="text-sm" style={{ color: MUTED }}>{hours}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function NotificationsTab() {
  const [settings, setSettings] = useState({
    newLead: true, newInquiry: true, appointmentReminder: true,
    invoiceDue: true, blogPublished: false, weeklyReport: true,
    emailNotifications: true, smsNotifications: false,
  });
  const toggle = (k: keyof typeof settings) => (v: boolean) => setSettings((p) => ({ ...p, [k]: v }));
  return (
    <div className="space-y-5">
      <Section title="Email Notifications">
        <div>
          <Toggle checked={settings.newLead} onChange={toggle("newLead")} label="New lead received" />
          <Toggle checked={settings.newInquiry} onChange={toggle("newInquiry")} label="New inquiry received" />
          <Toggle checked={settings.appointmentReminder} onChange={toggle("appointmentReminder")} label="Appointment reminders" />
          <Toggle checked={settings.invoiceDue} onChange={toggle("invoiceDue")} label="Invoice due alerts" />
          <Toggle checked={settings.blogPublished} onChange={toggle("blogPublished")} label="Blog post published" />
          <Toggle checked={settings.weeklyReport} onChange={toggle("weeklyReport")} label="Weekly summary report" />
        </div>
        <SaveButton onClick={() => alert("Notification settings saved!")} />
      </Section>
      <Section title="Notification Channels">
        <div>
          <Toggle checked={settings.emailNotifications} onChange={toggle("emailNotifications")} label="Email notifications" />
          <Toggle checked={settings.smsNotifications} onChange={toggle("smsNotifications")} label="SMS notifications" />
        </div>
        <div className="mt-4 rounded-lg p-3 text-xs" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>
          <Mail className="mb-1 inline size-3.5" /> Notifications are sent to <strong style={{ color: NAVY }}>admin@poornimatax.com</strong>
        </div>
      </Section>
    </div>
  );
}

function SecurityTab() {
  const [pwForm, setPwForm] = useState({ current: "", newPw: "", confirm: "" });
  const [twoFA, setTwoFA] = useState(false);
  return (
    <div className="space-y-5">
      <Section title="Change Password">
        <div className="space-y-4">
          <Field label="Current Password"><Input value={pwForm.current} onChange={(v) => setPwForm((p) => ({ ...p, current: v }))} type="password" placeholder="Enter current password" /></Field>
          <Field label="New Password"><Input value={pwForm.newPw} onChange={(v) => setPwForm((p) => ({ ...p, newPw: v }))} type="password" placeholder="Enter new password" /></Field>
          <Field label="Confirm New Password"><Input value={pwForm.confirm} onChange={(v) => setPwForm((p) => ({ ...p, confirm: v }))} type="password" placeholder="Confirm new password" /></Field>
        </div>
        <div className="mt-2 text-xs" style={{ color: MUTED }}>Password must be at least 8 characters with uppercase, lowercase, and a number.</div>
        <SaveButton onClick={() => alert("Password updated!")} />
      </Section>
      <Section title="Two-Factor Authentication">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium" style={{ color: NAVY }}>Enable 2FA</p>
            <p className="mt-0.5 text-xs" style={{ color: MUTED }}>Add an extra layer of security to your account using an authenticator app.</p>
          </div>
          <button onClick={() => setTwoFA(!twoFA)} className="relative h-5 w-9 shrink-0 rounded-full transition-colors" style={{ background: twoFA ? NAVY : BORDER }}>
            <span className="absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform" style={{ transform: twoFA ? "translateX(16px)" : "translateX(2px)" }} />
          </button>
        </div>
      </Section>
      <Section title="Active Sessions">
        <div className="space-y-3">
          {[
            { device: "Chrome on Windows", location: "Pune, Maharashtra", time: "Current session", current: true },
            { device: "Safari on iPhone", location: "Mumbai, Maharashtra", time: "2 hours ago", current: false },
          ].map((s) => (
            <div key={s.device} className="flex items-center justify-between rounded-lg p-3" style={{ background: BG, border: `1px solid ${BORDER}` }}>
              <div>
                <p className="text-sm font-medium" style={{ color: NAVY }}>{s.device}</p>
                <p className="text-xs" style={{ color: MUTED }}>{s.location} · {s.time}</p>
              </div>
              {s.current ? (
                <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: "#F0FDF4", color: "#15803D" }}>Active</span>
              ) : (
                <button className="text-xs font-medium" style={{ color: "#BE123C" }}>Revoke</button>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function AdminSettings() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  const tabContent: Record<Tab, React.ReactNode> = {
    profile:       <ProfileTab />,
    business:      <BusinessTab />,
    notifications: <NotificationsTab />,
    security:      <SecurityTab />,
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold" style={{ color: NAVY }}>Settings</h1>
        <p className="mt-0.5 text-sm" style={{ color: MUTED }}>Manage your account and business preferences</p>
      </div>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all"
            style={activeTab === t.id ? { background: NAVY, color: "#fff" } : { background: CARD, color: MUTED, border: `1px solid ${BORDER}` }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {tabContent[activeTab]}
    </div>
  );
}
