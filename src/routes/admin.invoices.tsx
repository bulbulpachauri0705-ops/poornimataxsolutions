import { createFileRoute } from "@tanstack/react-router";
import { Edit2, Eye, Plus, Search, Trash2, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/invoices")({
  component: AdminInvoices,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type InvoiceStatus = "Paid" | "Pending" | "Overdue" | "Draft";

type Invoice = {
  id: string;
  client: string;
  email: string;
  service: string;
  amount: number;
  date: string;
  dueDate: string;
  status: InvoiceStatus;
};

const statusColors: Record<InvoiceStatus, { bg: string; text: string }> = {
  Paid:    { bg: "#F0FDF4", text: "#15803D" },
  Pending: { bg: "#FFF8E6", text: "#B07D0A" },
  Overdue: { bg: "#FFF1F2", text: "#BE123C" },
  Draft:   { bg: "#F1F5F9", text: "#475569" },
};

const initialInvoices: Invoice[] = [
  { id: "INV-001", client: "Rajesh Kumar",   email: "rajesh.kumar@email.com",   service: "Income Tax Return Filing",  amount: 2500,  date: "2025-07-01", dueDate: "2025-07-15", status: "Paid" },
  { id: "INV-002", client: "Priya Sharma",   email: "priya.sharma@email.com",   service: "GST Registration & Filing", amount: 5000,  date: "2025-07-05", dueDate: "2025-07-20", status: "Pending" },
  { id: "INV-003", client: "Amit Verma",     email: "amit.verma@email.com",     service: "Firm Registration",         amount: 8000,  date: "2025-06-20", dueDate: "2025-07-05", status: "Overdue" },
  { id: "INV-004", client: "Sunita Agarwal", email: "sunita.agarwal@email.com", service: "Tax Planning & Advisory",   amount: 3500,  date: "2025-07-08", dueDate: "2025-07-22", status: "Draft" },
  { id: "INV-005", client: "Vikram Singh",   email: "vikram.singh@email.com",   service: "TDS Compliance & Refunds",  amount: 1800,  date: "2025-07-10", dueDate: "2025-07-25", status: "Paid" },
  { id: "INV-006", client: "Meena Gupta",    email: "meena.gupta@email.com",    service: "MSME Registration",         amount: 4200,  date: "2025-07-09", dueDate: "2025-07-23", status: "Pending" },
];

const allStatuses: InvoiceStatus[] = ["Paid", "Pending", "Overdue", "Draft"];

function StatusBadge({ status }: { status: InvoiceStatus }) {
  const c = statusColors[status];
  return (
    <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style={{ background: c.bg, color: c.text }}>
      {status}
    </span>
  );
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(6,43,73,0.45)", backdropFilter: "blur(2px)" }}>
      <div className="w-full max-w-lg rounded-2xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-base font-bold" style={{ color: NAVY }}>{title}</h2>
          <button onClick={onClose} className="rounded-lg p-1.5 transition-colors hover:bg-gray-100" style={{ color: MUTED }}>
            <X className="size-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function AdminInvoices() {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<InvoiceStatus | "All">("All");
  const [viewInvoice, setViewInvoice] = useState<Invoice | null>(null);
  const [editInvoice, setEditInvoice] = useState<Invoice | null>(null);
  const [editForm, setEditForm] = useState<Partial<Invoice>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState<Partial<Invoice>>({});

  const filtered = invoices.filter((inv) => {
    const q = search.toLowerCase();
    const matchSearch = inv.client.toLowerCase().includes(q) || inv.email.toLowerCase().includes(q) || inv.id.toLowerCase().includes(q);
    const matchStatus = filterStatus === "All" || inv.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalRevenue = invoices.filter((i) => i.status === "Paid").reduce((s, i) => s + i.amount, 0);
  const pending = invoices.filter((i) => i.status === "Pending").reduce((s, i) => s + i.amount, 0);
  const overdue = invoices.filter((i) => i.status === "Overdue").length;

  function handleDelete(id: string) {
    if (confirm("Delete this invoice?")) setInvoices((p) => p.filter((i) => i.id !== id));
  }

  function openEdit(inv: Invoice) { setEditInvoice(inv); setEditForm({ ...inv }); }

  function saveEdit() {
    if (!editInvoice) return;
    setInvoices((p) => p.map((i) => (i.id === editInvoice.id ? ({ ...i, ...editForm } as Invoice) : i)));
    setEditInvoice(null);
  }

  function saveAdd() {
    const newInv: Invoice = {
      id: `INV-${String(invoices.length + 1).padStart(3, "0")}`,
      client: addForm.client ?? "",
      email: addForm.email ?? "",
      service: addForm.service ?? "",
      amount: Number(addForm.amount ?? 0),
      date: addForm.date ?? new Date().toISOString().slice(0, 10),
      dueDate: addForm.dueDate ?? "",
      status: (addForm.status as InvoiceStatus) ?? "Draft",
    };
    setInvoices((p) => [newInv, ...p]);
    setShowAdd(false);
    setAddForm({});
  }

  const statCards = [
    { label: "Total Revenue", value: `₹${totalRevenue.toLocaleString()}`, color: "#15803D" },
    { label: "Pending Amount", value: `₹${pending.toLocaleString()}`, color: "#B07D0A" },
    { label: "Overdue Invoices", value: String(overdue), color: "#BE123C" },
    { label: "Total Invoices", value: String(invoices.length), color: NAVY },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Invoices</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{invoices.length} total invoices</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: NAVY, color: "#fff" }}
        >
          <Plus className="size-4" /> New Invoice
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map((s) => (
          <div key={s.label} className="rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
            <p className="text-xs font-medium" style={{ color: MUTED }}>{s.label}</p>
            <p className="mt-1 text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
        <div className="relative flex-1" style={{ minWidth: 200 }}>
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2" style={{ color: MUTED }} />
          <input
            type="text"
            placeholder="Search by client, email, invoice ID…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg py-2 pl-9 pr-3 text-sm outline-none"
            style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {(["All", ...allStatuses] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all"
              style={filterStatus === s ? { background: NAVY, color: "#fff" } : { background: BG, color: MUTED, border: `1px solid ${BORDER}` }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: `1px solid ${BORDER}`, background: BG }}>
                {["Invoice ID", "Client", "Service", "Amount", "Date", "Due Date", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: MUTED }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-10 text-center text-sm" style={{ color: MUTED }}>No invoices found.</td></tr>
              ) : (
                filtered.map((inv) => (
                  <tr key={inv.id} className="transition-colors hover:bg-gray-50" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <td className="px-4 py-3 font-mono text-xs font-semibold" style={{ color: GOLD }}>{inv.id}</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: NAVY }}>{inv.client}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED, maxWidth: 160 }}><span className="block truncate">{inv.service}</span></td>
                    <td className="px-4 py-3 font-semibold" style={{ color: NAVY }}>₹{inv.amount.toLocaleString()}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{inv.date}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{inv.dueDate}</td>
                    <td className="px-4 py-3"><StatusBadge status={inv.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button onClick={() => setViewInvoice(inv)} className="rounded-lg p-1.5 transition-colors hover:bg-amber-50" style={{ color: GOLD }}><Eye className="size-3.5" /></button>
                        <button onClick={() => openEdit(inv)} className="rounded-lg p-1.5 transition-colors hover:bg-blue-50" style={{ color: "#1D4ED8" }}><Edit2 className="size-3.5" /></button>
                        <button onClick={() => handleDelete(inv.id)} className="rounded-lg p-1.5 transition-colors hover:bg-red-50" style={{ color: "#BE123C" }}><Trash2 className="size-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {viewInvoice && (
        <Modal title="Invoice Details" onClose={() => setViewInvoice(null)}>
          <dl className="space-y-3 text-sm">
            {[["Invoice ID", viewInvoice.id], ["Client", viewInvoice.client], ["Email", viewInvoice.email], ["Service", viewInvoice.service], ["Amount", `₹${viewInvoice.amount.toLocaleString()}`], ["Date", viewInvoice.date], ["Due Date", viewInvoice.dueDate]].map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <dt className="w-24 shrink-0 text-xs font-medium" style={{ color: MUTED }}>{k}</dt>
                <dd className="text-sm font-medium" style={{ color: NAVY }}>{v}</dd>
              </div>
            ))}
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 text-xs font-medium" style={{ color: MUTED }}>Status</dt>
              <dd><StatusBadge status={viewInvoice.status} /></dd>
            </div>
          </dl>
        </Modal>
      )}

      {/* Edit Modal */}
      {editInvoice && (
        <Modal title="Edit Invoice" onClose={() => setEditInvoice(null)}>
          <div className="space-y-3">
            {(["client", "email", "service"] as const).map((field) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-medium capitalize" style={{ color: MUTED }}>{field}</label>
                <input value={(editForm[field] as string) ?? ""} onChange={(e) => setEditForm((p) => ({ ...p, [field]: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Amount (₹)</label>
                <input type="number" value={editForm.amount ?? ""} onChange={(e) => setEditForm((p) => ({ ...p, amount: Number(e.target.value) }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Status</label>
                <select value={editForm.status ?? editInvoice.status} onChange={(e) => setEditForm((p) => ({ ...p, status: e.target.value as InvoiceStatus }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
                  {allStatuses.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button onClick={() => setEditInvoice(null)} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
              <button onClick={saveEdit} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>Save Changes</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Modal */}
      {showAdd && (
        <Modal title="New Invoice" onClose={() => setShowAdd(false)}>
          <div className="space-y-3">
            {(["client", "email", "service"] as const).map((field) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-medium capitalize" style={{ color: MUTED }}>{field}</label>
                <input value={(addForm[field] as string) ?? ""} onChange={(e) => setAddForm((p) => ({ ...p, [field]: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Amount (₹)</label>
                <input type="number" value={addForm.amount ?? ""} onChange={(e) => setAddForm((p) => ({ ...p, amount: Number(e.target.value) }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Status</label>
                <select value={addForm.status ?? "Draft"} onChange={(e) => setAddForm((p) => ({ ...p, status: e.target.value as InvoiceStatus }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
                  {allStatuses.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Invoice Date</label>
                <input type="date" value={addForm.date ?? ""} onChange={(e) => setAddForm((p) => ({ ...p, date: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Due Date</label>
                <input type="date" value={addForm.dueDate ?? ""} onChange={(e) => setAddForm((p) => ({ ...p, dueDate: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button onClick={() => setShowAdd(false)} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
              <button onClick={saveAdd} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>Create Invoice</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
