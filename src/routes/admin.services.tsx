import { createFileRoute } from "@tanstack/react-router";
import { Edit2, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/services")({
  component: AdminServices,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type ServiceStatus = "Active" | "Inactive";

type Service = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  status: ServiceStatus;
  leads: number;
};

const initialServices: Service[] = [
  { id: "S001", name: "Income Tax Return Filing",  category: "Income Tax", price: 2500,  description: "Complete ITR filing for individuals and businesses.", status: "Active",   leads: 14 },
  { id: "S002", name: "GST Registration & Filing", category: "GST",        price: 5000,  description: "GST registration and monthly/quarterly return filing.", status: "Active",   leads: 9 },
  { id: "S003", name: "Firm Registration",         category: "Business",   price: 8000,  description: "Partnership and LLP firm registration services.", status: "Active",   leads: 6 },
  { id: "S004", name: "Tax Planning & Advisory",   category: "Income Tax", price: 3500,  description: "Strategic tax planning to minimise liability.", status: "Active",   leads: 5 },
  { id: "S005", name: "TDS Compliance & Refunds",  category: "Income Tax", price: 1800,  description: "TDS filing, reconciliation and refund claims.", status: "Active",   leads: 4 },
  { id: "S006", name: "MSME (Udyam) Registration", category: "Business",   price: 1500,  description: "Udyam registration for small and medium enterprises.", status: "Active",   leads: 3 },
  { id: "S007", name: "Trademark Registration",    category: "Legal",      price: 12000, description: "Brand trademark filing and registration.", status: "Active",   leads: 2 },
  { id: "S008", name: "Accounting & Bookkeeping",  category: "Accounting", price: 3000,  description: "Monthly bookkeeping and financial statement preparation.", status: "Active",   leads: 4 },
  { id: "S009", name: "Company Incorporation",     category: "Business",   price: 15000, description: "Private limited company registration end-to-end.", status: "Inactive", leads: 1 },
];

const categories = ["All", "Income Tax", "GST", "Business", "Legal", "Accounting"];

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

function ServiceForm({
  form,
  onChange,
  onSave,
  onCancel,
  saveLabel,
}: {
  form: Partial<Service>;
  onChange: (f: Partial<Service>) => void;
  onSave: () => void;
  onCancel: () => void;
  saveLabel: string;
}) {
  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Service Name</label>
        <input value={form.name ?? ""} onChange={(e) => onChange({ ...form, name: e.target.value })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Category</label>
          <select value={form.category ?? ""} onChange={(e) => onChange({ ...form, category: e.target.value })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
            {["Income Tax", "GST", "Business", "Legal", "Accounting"].map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Price (₹)</label>
          <input type="number" value={form.price ?? ""} onChange={(e) => onChange({ ...form, price: Number(e.target.value) })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Description</label>
        <textarea value={form.description ?? ""} onChange={(e) => onChange({ ...form, description: e.target.value })} rows={3} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }} />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Status</label>
        <select value={form.status ?? "Active"} onChange={(e) => onChange({ ...form, status: e.target.value as ServiceStatus })} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="flex justify-end gap-2 pt-1">
        <button onClick={onCancel} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
        <button onClick={onSave} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>{saveLabel}</button>
      </div>
    </div>
  );
}

function AdminServices() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [filterCat, setFilterCat] = useState("All");
  const [editService, setEditService] = useState<Service | null>(null);
  const [editForm, setEditForm] = useState<Partial<Service>>({});
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState<Partial<Service>>({ category: "Income Tax", status: "Active" });

  const filtered = services.filter((s) => filterCat === "All" || s.category === filterCat);

  function handleDelete(id: string) {
    if (confirm("Delete this service?")) setServices((p) => p.filter((s) => s.id !== id));
  }

  function openEdit(s: Service) { setEditService(s); setEditForm({ ...s }); }

  function saveEdit() {
    if (!editService) return;
    setServices((p) => p.map((s) => (s.id === editService.id ? ({ ...s, ...editForm } as Service) : s)));
    setEditService(null);
  }

  function saveAdd() {
    const newS: Service = {
      id: `S${String(services.length + 1).padStart(3, "0")}`,
      name: addForm.name ?? "",
      category: addForm.category ?? "Income Tax",
      price: Number(addForm.price ?? 0),
      description: addForm.description ?? "",
      status: (addForm.status as ServiceStatus) ?? "Active",
      leads: 0,
    };
    setServices((p) => [...p, newS]);
    setShowAdd(false);
    setAddForm({ category: "Income Tax", status: "Active" });
  }

  const active = services.filter((s) => s.status === "Active").length;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Services</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{services.length} services · {active} active</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>
          <Plus className="size-4" /> Add Service
        </button>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setFilterCat(c)} className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all" style={filterCat === c ? { background: NAVY, color: "#fff" } : { background: CARD, color: MUTED, border: `1px solid ${BORDER}` }}>{c}</button>
        ))}
      </div>

      {/* Service cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <div key={s.id} className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
            <div className="mb-3 flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold leading-snug" style={{ color: NAVY }}>{s.name}</p>
                <span className="mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: "#EFF6FF", color: "#1D4ED8" }}>{s.category}</span>
              </div>
              <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold shrink-0" style={s.status === "Active" ? { background: "#F0FDF4", color: "#15803D" } : { background: "#F1F5F9", color: "#475569" }}>{s.status}</span>
            </div>
            <p className="mb-4 text-xs leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold" style={{ color: GOLD }}>₹{s.price.toLocaleString()}</p>
                <p className="text-[11px]" style={{ color: MUTED }}>{s.leads} leads</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openEdit(s)} className="rounded-lg p-1.5 hover:bg-blue-50" style={{ color: "#1D4ED8" }}><Edit2 className="size-3.5" /></button>
                <button onClick={() => handleDelete(s.id)} className="rounded-lg p-1.5 hover:bg-red-50" style={{ color: "#BE123C" }}><Trash2 className="size-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editService && (
        <Modal title="Edit Service" onClose={() => setEditService(null)}>
          <ServiceForm form={editForm} onChange={setEditForm} onSave={saveEdit} onCancel={() => setEditService(null)} saveLabel="Save Changes" />
        </Modal>
      )}

      {showAdd && (
        <Modal title="Add Service" onClose={() => setShowAdd(false)}>
          <ServiceForm form={addForm} onChange={setAddForm} onSave={saveAdd} onCancel={() => setShowAdd(false)} saveLabel="Add Service" />
        </Modal>
      )}
    </div>
  );
}
