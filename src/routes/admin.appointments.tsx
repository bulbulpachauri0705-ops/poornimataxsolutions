import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, Edit2, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/appointments")({
  component: AdminAppointments,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type ApptStatus = "Scheduled" | "Completed" | "Cancelled" | "Rescheduled";

type Appointment = {
  id: string;
  client: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  mode: "In-Person" | "Online";
  status: ApptStatus;
  notes: string;
};

const statusColors: Record<ApptStatus, { bg: string; text: string }> = {
  Scheduled:   { bg: "#EFF6FF", text: "#1D4ED8" },
  Completed:   { bg: "#F0FDF4", text: "#15803D" },
  Cancelled:   { bg: "#FFF1F2", text: "#BE123C" },
  Rescheduled: { bg: "#FFF8E6", text: "#B07D0A" },
};

const allStatuses: ApptStatus[] = ["Scheduled", "Completed", "Cancelled", "Rescheduled"];

const initialAppointments: Appointment[] = [
  { id: "A001", client: "Rajesh Kumar",   phone: "+91 98765 43210", email: "rajesh.kumar@email.com",   service: "Income Tax Return Filing",  date: "2025-07-15", time: "10:00 AM", mode: "In-Person", status: "Scheduled",   notes: "Bring Form 16 and bank statements." },
  { id: "A002", client: "Priya Sharma",   phone: "+91 87654 32109", email: "priya.sharma@email.com",   service: "GST Registration & Filing", date: "2025-07-14", time: "11:30 AM", mode: "Online",    status: "Completed",   notes: "GST registration documents verified." },
  { id: "A003", client: "Amit Verma",     phone: "+91 76543 21098", email: "amit.verma@email.com",     service: "Firm Registration",         date: "2025-07-16", time: "02:00 PM", mode: "In-Person", status: "Scheduled",   notes: "Partnership deed to be discussed." },
  { id: "A004", client: "Sunita Agarwal", phone: "+91 65432 10987", email: "sunita.agarwal@email.com", service: "Tax Planning & Advisory",   date: "2025-07-13", time: "03:30 PM", mode: "Online",    status: "Cancelled",   notes: "Client requested cancellation." },
  { id: "A005", client: "Vikram Singh",   phone: "+91 54321 09876", email: "vikram.singh@email.com",   service: "TDS Compliance & Refunds",  date: "2025-07-17", time: "09:30 AM", mode: "In-Person", status: "Rescheduled", notes: "Rescheduled from July 12." },
  { id: "A006", client: "Meena Gupta",    phone: "+91 43210 98765", email: "meena.gupta@email.com",    service: "MSME Registration",         date: "2025-07-18", time: "12:00 PM", mode: "Online",    status: "Scheduled",   notes: "Udyam registration documents ready." },
  { id: "A007", client: "Kavita Yadav",   phone: "+91 21098 76543", email: "kavita.yadav@email.com",   service: "Accounting & Bookkeeping",  date: "2025-07-10", time: "04:00 PM", mode: "In-Person", status: "Completed",   notes: "Monthly accounts reviewed." },
];

function StatusBadge({ status }: { status: ApptStatus }) {
  const c = statusColors[status];
  return <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style={{ background: c.bg, color: c.text }}>{status}</span>;
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(6,43,73,0.45)", backdropFilter: "blur(2px)" }}>
      <div className="w-full max-w-lg rounded-2xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-base font-bold" style={{ color: NAVY }}>{title}</h2>
          <button onClick={onClose} className="rounded-lg p-1.5 hover:bg-gray-100" style={{ color: MUTED }}><X className="size-4" /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [filterStatus, setFilterStatus] = useState<ApptStatus | "All">("All");
  const [editAppt, setEditAppt] = useState<Appointment | null>(null);
  const [editForm, setEditForm] = useState<Partial<Appointment>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState<Partial<Appointment>>({ mode: "In-Person", status: "Scheduled" });

  const filtered = appointments.filter((a) => filterStatus === "All" || a.status === filterStatus);

  const today = new Date().toISOString().slice(0, 10);
  const todayCount = appointments.filter((a) => a.date === today).length;
  const scheduled = appointments.filter((a) => a.status === "Scheduled").length;
  const completed = appointments.filter((a) => a.status === "Completed").length;

  function handleDelete(id: string) {
    if (confirm("Delete this appointment?")) setAppointments((p) => p.filter((a) => a.id !== id));
  }

  function openEdit(a: Appointment) { setEditAppt(a); setEditForm({ ...a }); }

  function saveEdit() {
    if (!editAppt) return;
    setAppointments((p) => p.map((a) => (a.id === editAppt.id ? ({ ...a, ...editForm } as Appointment) : a)));
    setEditAppt(null);
  }

  function saveAdd() {
    const newA: Appointment = {
      id: `A${String(appointments.length + 1).padStart(3, "0")}`,
      client: addForm.client ?? "",
      phone: addForm.phone ?? "",
      email: addForm.email ?? "",
      service: addForm.service ?? "",
      date: addForm.date ?? "",
      time: addForm.time ?? "",
      mode: addForm.mode ?? "In-Person",
      status: addForm.status ?? "Scheduled",
      notes: addForm.notes ?? "",
    };
    setAppointments((p) => [newA, ...p]);
    setShowAdd(false);
    setAddForm({ mode: "In-Person", status: "Scheduled" });
  }

  const ApptForm = ({ form, onChange, onSave, onCancel, saveLabel }: { form: Partial<Appointment>; onChange: (f: Partial<Appointment>) => void; onSave: () => void; onCancel: () => void; saveLabel: string }) => (
    <div className="space-y-3">
      {(["client", "phone", "email", "service"] as const).map((field) => (
        <div key={field}>
          <label className="mb-1 block text-xs font-medium capitalize" style={{ color: MUTED }}>{field}</label>
          <input value={(form[field] as string) ?? ""} onChange={(e) => onChange({ ...form, [field]: e.target.value })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
        </div>
      ))}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Date</label>
          <input type="date" value={form.date ?? ""} onChange={(e) => onChange({ ...form, date: e.target.value })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Time</label>
          <input value={form.time ?? ""} onChange={(e) => onChange({ ...form, time: e.target.value })} placeholder="e.g. 10:00 AM" className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Mode</label>
          <select value={form.mode ?? "In-Person"} onChange={(e) => onChange({ ...form, mode: e.target.value as Appointment["mode"] })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
            <option value="In-Person">In-Person</option>
            <option value="Online">Online</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Status</label>
          <select value={form.status ?? "Scheduled"} onChange={(e) => onChange({ ...form, status: e.target.value as ApptStatus })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
            {allStatuses.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Notes</label>
        <textarea value={form.notes ?? ""} onChange={(e) => onChange({ ...form, notes: e.target.value })} rows={2} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }} />
      </div>
      <div className="flex justify-end gap-2 pt-1">
        <button onClick={onCancel} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
        <button onClick={onSave} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>{saveLabel}</button>
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Appointments</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{appointments.length} total appointments</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>
          <Plus className="size-4" /> Book Appointment
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total", value: String(appointments.length), color: NAVY, icon: <Calendar className="size-4" /> },
          { label: "Today", value: String(todayCount), color: GOLD, icon: <Clock className="size-4" /> },
          { label: "Scheduled", value: String(scheduled), color: "#1D4ED8", icon: <Calendar className="size-4" /> },
          { label: "Completed", value: String(completed), color: "#15803D", icon: <Calendar className="size-4" /> },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
            <div className="rounded-lg p-2" style={{ background: BG, color: s.color }}>{s.icon}</div>
            <div>
              <p className="text-xs font-medium" style={{ color: MUTED }}>{s.label}</p>
              <p className="text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Status filter */}
      <div className="flex flex-wrap gap-2">
        {(["All", ...allStatuses] as const).map((s) => (
          <button key={s} onClick={() => setFilterStatus(s)} className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all" style={filterStatus === s ? { background: NAVY, color: "#fff" } : { background: CARD, color: MUTED, border: `1px solid ${BORDER}` }}>{s}</button>
        ))}
      </div>

      {/* Appointment cards */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="rounded-xl p-10 text-center text-sm" style={{ background: CARD, border: `1px solid ${BORDER}`, color: MUTED }}>No appointments found.</div>
        ) : (
          filtered.map((a) => (
            <div key={a.id} className="rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold" style={{ color: NAVY }}>{a.client}</p>
                    <StatusBadge status={a.status} />
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: a.mode === "Online" ? "#EFF6FF" : "#F0FDF4", color: a.mode === "Online" ? "#1D4ED8" : "#15803D" }}>{a.mode}</span>
                  </div>
                  <p className="mt-1 text-xs" style={{ color: MUTED }}>{a.service}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs" style={{ color: MUTED }}>
                    <span className="flex items-center gap-1"><Calendar className="size-3" />{a.date}</span>
                    <span className="flex items-center gap-1"><Clock className="size-3" />{a.time}</span>
                    <span>{a.phone}</span>
                  </div>
                  {a.notes && <p className="mt-2 text-xs italic" style={{ color: MUTED }}>{a.notes}</p>}
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openEdit(a)} className="rounded-lg p-1.5 hover:bg-blue-50" style={{ color: "#1D4ED8" }}><Edit2 className="size-3.5" /></button>
                  <button onClick={() => handleDelete(a.id)} className="rounded-lg p-1.5 hover:bg-red-50" style={{ color: "#BE123C" }}><Trash2 className="size-3.5" /></button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {editAppt && (
        <Modal title="Edit Appointment" onClose={() => setEditAppt(null)}>
          <ApptForm form={editForm} onChange={setEditForm} onSave={saveEdit} onCancel={() => setEditAppt(null)} saveLabel="Save Changes" />
        </Modal>
      )}

      {showAdd && (
        <Modal title="Book Appointment" onClose={() => setShowAdd(false)}>
          <ApptForm form={addForm} onChange={setAddForm} onSave={saveAdd} onCancel={() => setShowAdd(false)} saveLabel="Book Appointment" />
        </Modal>
      )}
    </div>
  );
}
