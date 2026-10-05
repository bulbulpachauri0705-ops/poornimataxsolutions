import { createLazyFileRoute } from "@tanstack/react-router";
import { Edit2, Eye, RefreshCw, Search, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";

import { deleteLead, getLeads, updateLead } from "@/lib/leads.server";
import type { LeadStatus } from "@/integrations/supabase/types";

export const Route = createLazyFileRoute("/admin/leads")({
  component: AdminLeads,
});

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  city: string | null;
  contact_method: string | null;
  status: LeadStatus;
  source: string;
  created_at: string;
  updated_at: string;
};

const NAVY  = "#062B49";
const GOLD  = "#D9A928";
const CARD  = "#ffffff";
const BORDER = "#E8ECF0";
const BG    = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

const statusColors: Record<LeadStatus, { bg: string; text: string }> = {
  New:           { bg: "#FFF8E6", text: "#B07D0A" },
  "In Progress": { bg: "#EFF6FF", text: "#1D4ED8" },
  Converted:     { bg: "#F0FDF4", text: "#15803D" },
  Lost:          { bg: "#FFF1F2", text: "#BE123C" },
};

const allStatuses: LeadStatus[] = ["New", "In Progress", "Converted", "Lost"];

function StatusBadge({ status }: { status: LeadStatus }) {
  const c = statusColors[status];
  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={{ background: c.bg, color: c.text }}
    >
      {status}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<LeadStatus | "All">("All");
  const [viewLead, setViewLead] = useState<Lead | null>(null);
  const [editLead, setEditLead] = useState<Lead | null>(null);
  const [editForm, setEditForm] = useState<Partial<Lead>>({});
  const [saving, setSaving] = useState(false);

  async function fetchLeads() {
    setLoading(true);
    setError("");
    try {
      const data = await getLeads();
      setLeads(data as Lead[]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load leads.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchLeads(); }, []);

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase();
    const matchSearch =
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.service.toLowerCase().includes(q) ||
      l.phone.includes(search);
    const matchStatus = filterStatus === "All" || l.status === filterStatus;
    return matchSearch && matchStatus;
  });

  async function handleDelete(id: string) {
    if (!confirm("Delete this lead? This cannot be undone.")) return;
    try {
      await deleteLead({ data: { id } });
      setLeads((prev) => prev.filter((l) => l.id !== id));
    } catch {
      alert("Failed to delete lead.");
    }
  }

  function openEdit(lead: Lead) {
    setEditLead(lead);
    setEditForm({ ...lead });
  }

  async function saveEdit() {
    if (!editLead) return;
    setSaving(true);
    try {
      await updateLead({
        data: {
          id: editLead.id,
          name: editForm.name,
          phone: editForm.phone,
          email: editForm.email,
          service: editForm.service,
          message: editForm.message,
          status: editForm.status,
        },
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === editLead.id ? ({ ...l, ...editForm } as Lead) : l)),
      );
      setEditLead(null);
    } catch {
      alert("Failed to save changes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Leads</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{leads.length} total leads</p>
        </div>
        <button
          onClick={fetchLeads}
          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors hover:bg-gray-100"
          style={{ color: MUTED, border: `1px solid ${BORDER}`, background: CARD }}
        >
          <RefreshCw className="size-3.5" />
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div
        className="flex flex-wrap items-center gap-3 rounded-xl p-4"
        style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}
      >
        <div className="relative flex-1" style={{ minWidth: 200 }}>
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2" style={{ color: MUTED }} />
          <input
            type="text"
            placeholder="Search by name, email, phone, service…"
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
              style={
                filterStatus === s
                  ? { background: NAVY, color: "#fff" }
                  : { background: BG, color: MUTED, border: `1px solid ${BORDER}` }
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div
        className="overflow-hidden rounded-xl"
        style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}
      >
        {loading ? (
          <div className="px-4 py-16 text-center text-sm" style={{ color: MUTED }}>
            Loading leads…
          </div>
        ) : error ? (
          <div className="px-4 py-16 text-center text-sm text-red-600">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}`, background: BG }}>
                  {["Name", "Phone", "Email", "Service", "Date", "Status", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: MUTED }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-sm" style={{ color: MUTED }}>
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((lead) => (
                    <tr
                      key={lead.id}
                      className="transition-colors hover:bg-gray-50"
                      style={{ borderBottom: `1px solid ${BORDER}` }}
                    >
                      <td className="px-4 py-3 font-semibold" style={{ color: NAVY }}>{lead.name}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{lead.phone}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>{lead.email}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: MUTED, maxWidth: 160 }}>
                        <span className="block truncate">{lead.service}</span>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: MUTED }}>
                        {formatDate(lead.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={lead.status} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setViewLead(lead)}
                            className="rounded-lg p-1.5 transition-colors hover:bg-amber-50"
                            title="View"
                            style={{ color: GOLD }}
                          >
                            <Eye className="size-3.5" />
                          </button>
                          <button
                            onClick={() => openEdit(lead)}
                            className="rounded-lg p-1.5 transition-colors hover:bg-blue-50"
                            title="Edit"
                            style={{ color: "#1D4ED8" }}
                          >
                            <Edit2 className="size-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="rounded-lg p-1.5 transition-colors hover:bg-red-50"
                            title="Delete"
                            style={{ color: "#BE123C" }}
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Modal */}
      {viewLead && (
        <Modal title="Lead Details" onClose={() => setViewLead(null)}>
          <dl className="space-y-3 text-sm">
            {[
              ["Name", viewLead.name],
              ["Phone", viewLead.phone],
              ["Email", viewLead.email],
              ["Service", viewLead.service],
              ["City", viewLead.city ?? "—"],
              ["Contact Method", viewLead.contact_method ?? "—"],
              ["Source", viewLead.source],
              ["Submitted", formatDate(viewLead.created_at)],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <dt className="w-32 shrink-0 text-xs font-medium" style={{ color: MUTED }}>{k}</dt>
                <dd className="text-sm font-medium" style={{ color: NAVY }}>{v}</dd>
              </div>
            ))}
            <div className="flex gap-3">
              <dt className="w-32 shrink-0 text-xs font-medium" style={{ color: MUTED }}>Status</dt>
              <dd><StatusBadge status={viewLead.status} /></dd>
            </div>
            <div>
              <dt className="mb-1.5 text-xs font-medium" style={{ color: MUTED }}>Message</dt>
              <dd
                className="rounded-lg p-3 text-sm"
                style={{ background: BG, color: NAVY, border: `1px solid ${BORDER}` }}
              >
                {viewLead.message}
              </dd>
            </div>
          </dl>
        </Modal>
      )}

      {/* Edit Modal */}
      {editLead && (
        <Modal title="Edit Lead" onClose={() => setEditLead(null)}>
          <div className="space-y-3">
            {(["name", "phone", "email", "service"] as const).map((field) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-medium capitalize" style={{ color: MUTED }}>
                  {field}
                </label>
                <input
                  value={(editForm[field] as string) ?? ""}
                  onChange={(e) => setEditForm((p) => ({ ...p, [field]: e.target.value }))}
                  className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                  style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Status</label>
              <select
                value={editForm.status ?? editLead.status}
                onChange={(e) => setEditForm((p) => ({ ...p, status: e.target.value as LeadStatus }))}
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
              >
                {allStatuses.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Message</label>
              <textarea
                value={(editForm.message as string) ?? ""}
                onChange={(e) => setEditForm((p) => ({ ...p, message: e.target.value }))}
                rows={3}
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }}
              />
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={() => setEditLead(null)}
                className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                disabled={saving}
                className="rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: NAVY, color: "#fff" }}
              >
                {saving ? "Saving…" : "Save Changes"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(6,43,73,0.45)", backdropFilter: "blur(2px)" }}
    >
      <div
        className="w-full max-w-lg rounded-2xl p-6"
        style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-base font-bold" style={{ color: NAVY }}>{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-100"
            style={{ color: MUTED }}
          >
            <X className="size-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
