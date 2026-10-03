import { createFileRoute } from "@tanstack/react-router";
import { Edit2, Eye, Plus, Search, Trash2, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/clients")({
  component: AdminClients,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type ClientStatus = "Active" | "Inactive";

type Client = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  joinDate: string;
  status: ClientStatus;
  totalBilled: number;
};

const initialClients: Client[] = [
  { id: "C001", name: "Rajesh Kumar",   phone: "+91 98765 43210", email: "rajesh.kumar@email.com",   service: "Income Tax Return Filing",  joinDate: "2024-04-01", status: "Active",   totalBilled: 7500 },
  { id: "C002", name: "Priya Sharma",   phone: "+91 87654 32109", email: "priya.sharma@email.com",   service: "GST Registration & Filing", joinDate: "2024-05-15", status: "Active",   totalBilled: 15000 },
  { id: "C003", name: "Amit Verma",     phone: "+91 76543 21098", email: "amit.verma@email.com",     service: "Firm Registration",         joinDate: "2024-03-10", status: "Active",   totalBilled: 8000 },
  { id: "C004", name: "Sunita Agarwal", phone: "+91 65432 10987", email: "sunita.agarwal@email.com", service: "Tax Planning & Advisory",   joinDate: "2024-06-20", status: "Inactive", totalBilled: 3500 },
  { id: "C005", name: "Vikram Singh",   phone: "+91 54321 09876", email: "vikram.singh@email.com",   service: "TDS Compliance & Refunds",  joinDate: "2024-07-01", status: "Active",   totalBilled: 5400 },
  { id: "C006", name: "Meena Gupta",    phone: "+91 43210 98765", email: "meena.gupta@email.com",    service: "MSME Registration",         joinDate: "2024-08-12", status: "Active",   totalBilled: 4200 },
  { id: "C007", name: "Deepak Joshi",   phone: "+91 32109 87654", email: "deepak.joshi@email.com",   service: "Trademark Registration",    joinDate: "2024-09-05", status: "Inactive", totalBilled: 12000 },
  { id: "C008", name: "Kavita Yadav",   phone: "+91 21098 76543", email: "kavita.yadav@email.com",   service: "Accounting & Bookkeeping",  joinDate: "2024-10-18", status: "Active",   totalBilled: 18000 },
];

function StatusBadge({ status }: { status: ClientStatus }) {
  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={status === "Active" ? { background: "#F0FDF4", color: "#15803D" } : { background: "#F1F5F9", color: "#475569" }}
    >
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
          <button onClick={onClose} className="rounded-lg p-1.5 transition-colors hover:bg-gray-100" style={{ color: MUTED }}><X className="size-4" /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

function AdminClients() {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<ClientStatus | "All">("All");
  const [viewClient, setViewClient] = useState<Client | null>(null);
  const [editClient, setEditClient] = useState<Client | null>(null);
  const [editForm, setEditForm] = useState<Partial<Client>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState<Partial<Client>>({});

  const filtered = clients.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch = c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.phone.includes(search);
    const matchStatus = filterStatus === "All" || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  function handleDelete(id: string) {
    if (confirm("Delete this client?")) setClients((p) => p.filter((c) => c.id !== id));
  }

  function openEdit(c: Client) { setEditClient(c); setEditForm({ ...c }); }

  function saveEdit() {
    if (!editClient) return;
    setClients((p) => p.map((c) => (c.id === editClient.id ? ({ ...c, ...editForm } as Client) : c)));
    setEditClient(null);
  }

  function saveAdd() {
    const newClient: Client = {
      id: `C${String(clients.length + 1).padStart(3, "0")}`,
      name: addForm.name ?? "",
      phone: addForm.phone ?? "",
      email: addForm.email ?? "",
      service: addForm.service ?? "",
      joinDate: addForm.joinDate ?? new Date().toISOString().slice(0, 10),
      status: (addForm.status as ClientStatus) ?? "Active",
      totalBilled: Number(addForm.totalBilled ?? 0),
    };
    setClients((p) => [newClient, ...p]);
    setShowAdd(false);
    setAddForm({});
  }

  const active = clients.filter((c) => c.status === "Active").length;
  const totalBilled = clients.reduce((s, c) => s + c.totalBilled, 0);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Clients</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{clients.length} total clients</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>
          <Plus className="size-4" /> Add Client
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total Clients", value: String(clients.length), color: NAVY },
          { label: "Active", value: String(active), color: "#15803D" },
          { label: "Inactive", value: String(clients.length - active), color: "#475569" },
          { label: "Total Billed", value: `₹${totalBilled.toLocaleString()}`, color: GOLD },
        ].map((s) => (
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
          <input type="text" placeholder="Search by name, email, phone…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg py-2 pl-9 pr-3 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
        </div>
        <div className="flex gap-2">
          {(["All", "Active", "Inactive"] as const).map((s) => (
            <button key={s} onClick={() => setFilterStatus(s)} className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all" style={filterStatus === s ? { background: NAVY, color: "#fff" } : { background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>{s}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: `1px solid ${BORDER}`, background: BG }}>
                {["Name", "Phone", "Email", "Service", "Join Date", "Total Billed", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: MUTED }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-10 text-center text-sm" style={{ color: MUTED }}>No clients found.</td></tr>
              ) : (
                filtered.map((c) => (
                  <tr key={c.id} className="transition-colors hover:bg-gray-50" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <td className="px-4 py-3 font-semibold" style={{ color: NAVY }}>{c.name}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{c.phone}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{c.email}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED, maxWidth: 160 }}><span className="block truncate">{c.service}</span></td>
                    <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{c.joinDate}</td>
                    <td className="px-4 py-3 font-semibold text-sm" style={{ color: NAVY }}>₹{c.totalBilled.toLocaleString()}</td>
                    <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button onClick={() => setViewClient(c)} className="rounded-lg p-1.5 hover:bg-amber-50" style={{ color: GOLD }}><Eye className="size-3.5" /></button>
                        <button onClick={() => openEdit(c)} className="rounded-lg p-1.5 hover:bg-blue-50" style={{ color: "#1D4ED8" }}><Edit2 className="size-3.5" /></button>
                        <button onClick={() => handleDelete(c.id)} className="rounded-lg p-1.5 hover:bg-red-50" style={{ color: "#BE123C" }}><Trash2 className="size-3.5" /></button>
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
      {viewClient && (
        <Modal title="Client Details" onClose={() => setViewClient(null)}>
          <dl className="space-y-3">
            {[["ID", viewClient.id], ["Name", viewClient.name], ["Phone", viewClient.phone], ["Email", viewClient.email], ["Service", viewClient.service], ["Join Date", viewClient.joinDate], ["Total Billed", `₹${viewClient.totalBilled.toLocaleString()}`]].map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <dt className="w-24 shrink-0 text-xs font-medium" style={{ color: MUTED }}>{k}</dt>
                <dd className="text-sm font-medium" style={{ color: NAVY }}>{v}</dd>
              </div>
            ))}
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 text-xs font-medium" style={{ color: MUTED }}>Status</dt>
              <dd><StatusBadge status={viewClient.status} /></dd>
            </div>
          </dl>
        </Modal>
      )}

      {/* Edit Modal */}
      {editClient && (
        <Modal title="Edit Client" onClose={() => setEditClient(null)}>
          <div className="space-y-3">
            {(["name", "phone", "email", "service"] as const).map((field) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-medium capitalize" style={{ color: MUTED }}>{field}</label>
                <input value={(editForm[field] as string) ?? ""} onChange={(e) => setEditForm((p) => ({ ...p, [field]: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Status</label>
              <select value={editForm.status ?? editClient.status} onChange={(e) => setEditForm((p) => ({ ...p, status: e.target.value as ClientStatus }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button onClick={() => setEditClient(null)} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
              <button onClick={saveEdit} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>Save Changes</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Modal */}
      {showAdd && (
        <Modal title="Add Client" onClose={() => setShowAdd(false)}>
          <div className="space-y-3">
            {(["name", "phone", "email", "service"] as const).map((field) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-medium capitalize" style={{ color: MUTED }}>{field}</label>
                <input value={(addForm[field] as string) ?? ""} onChange={(e) => setAddForm((p) => ({ ...p, [field]: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
              </div>
            ))}
            <div className="flex justify-end gap-2 pt-1">
              <button onClick={() => setShowAdd(false)} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
              <button onClick={saveAdd} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>Add Client</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
