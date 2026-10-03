import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, FileText, Plus, Search, Trash2, Upload, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/documents")({
  component: AdminDocuments,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type DocCategory = "ITR" | "GST" | "Registration" | "Accounting" | "Legal" | "Other";

type Document = {
  id: string;
  name: string;
  client: string;
  category: DocCategory;
  fileType: string;
  size: string;
  uploadedAt: string;
  notes: string;
};

const categories: DocCategory[] = ["ITR", "GST", "Registration", "Accounting", "Legal", "Other"];

const categoryColors: Record<DocCategory, { bg: string; text: string }> = {
  ITR:          { bg: "#EFF6FF", text: "#1D4ED8" },
  GST:          { bg: "#FFF8E6", text: "#B07D0A" },
  Registration: { bg: "#F0FDF4", text: "#15803D" },
  Accounting:   { bg: "#F5F3FF", text: "#6D28D9" },
  Legal:        { bg: "#FFF1F2", text: "#BE123C" },
  Other:        { bg: "#F1F5F9", text: "#475569" },
};

const fileIcons: Record<string, string> = {
  PDF: "📄", XLSX: "📊", DOCX: "📝", JPG: "🖼️", PNG: "🖼️", ZIP: "🗜️",
};

const initialDocs: Document[] = [
  { id: "D001", name: "Form 16 - FY 2024-25",          client: "Rajesh Kumar",   category: "ITR",          fileType: "PDF",  size: "245 KB", uploadedAt: "2025-07-10", notes: "Employer issued Form 16." },
  { id: "D002", name: "GST Registration Certificate",   client: "Priya Sharma",   category: "GST",          fileType: "PDF",  size: "180 KB", uploadedAt: "2025-07-09", notes: "GSTIN: 27XXXXX1234Z1." },
  { id: "D003", name: "Partnership Deed",               client: "Amit Verma",     category: "Registration", fileType: "DOCX", size: "320 KB", uploadedAt: "2025-07-08", notes: "Signed by all partners." },
  { id: "D004", name: "Balance Sheet FY 2024-25",       client: "Kavita Yadav",   category: "Accounting",   fileType: "XLSX", size: "512 KB", uploadedAt: "2025-07-07", notes: "Audited balance sheet." },
  { id: "D005", name: "Trademark Application",          client: "Deepak Joshi",   category: "Legal",        fileType: "PDF",  size: "890 KB", uploadedAt: "2025-07-06", notes: "TM application number filed." },
  { id: "D006", name: "Udyam Registration Certificate", client: "Meena Gupta",    category: "Registration", fileType: "PDF",  size: "150 KB", uploadedAt: "2025-07-05", notes: "MSME Udyam certificate." },
  { id: "D007", name: "Bank Statement Q1 2025",         client: "Vikram Singh",   category: "ITR",          fileType: "PDF",  size: "1.2 MB", uploadedAt: "2025-07-04", notes: "HDFC Bank statement." },
  { id: "D008", name: "GST GSTR-3B June 2025",         client: "Priya Sharma",   category: "GST",          fileType: "PDF",  size: "95 KB",  uploadedAt: "2025-07-03", notes: "Monthly GSTR-3B filing." },
];

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

function AdminDocuments() {
  const [docs, setDocs] = useState<Document[]>(initialDocs);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState<DocCategory | "All">("All");
  const [viewDoc, setViewDoc] = useState<Document | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadForm, setUploadForm] = useState<Partial<Document>>({ category: "ITR", fileType: "PDF" });

  const filtered = docs.filter((d) => {
    const q = search.toLowerCase();
    const matchSearch = d.name.toLowerCase().includes(q) || d.client.toLowerCase().includes(q);
    const matchCat = filterCat === "All" || d.category === filterCat;
    return matchSearch && matchCat;
  });

  function handleDelete(id: string) {
    if (confirm("Delete this document?")) setDocs((p) => p.filter((d) => d.id !== id));
  }

  function saveUpload() {
    const newDoc: Document = {
      id: `D${String(docs.length + 1).padStart(3, "0")}`,
      name: uploadForm.name ?? "",
      client: uploadForm.client ?? "",
      category: (uploadForm.category as DocCategory) ?? "Other",
      fileType: uploadForm.fileType ?? "PDF",
      size: "—",
      uploadedAt: new Date().toISOString().slice(0, 10),
      notes: uploadForm.notes ?? "",
    };
    setDocs((p) => [newDoc, ...p]);
    setShowUpload(false);
    setUploadForm({ category: "ITR", fileType: "PDF" });
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Documents</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{docs.length} documents stored</p>
        </div>
        <button onClick={() => setShowUpload(true)} className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>
          <Upload className="size-4" /> Upload Document
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
        {categories.map((cat) => {
          const count = docs.filter((d) => d.category === cat).length;
          const c = categoryColors[cat];
          return (
            <div key={cat} className="rounded-xl p-3 text-center" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
              <p className="text-lg font-bold" style={{ color: c.text }}>{count}</p>
              <p className="text-[11px] font-medium" style={{ color: MUTED }}>{cat}</p>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
        <div className="relative flex-1" style={{ minWidth: 200 }}>
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2" style={{ color: MUTED }} />
          <input type="text" placeholder="Search by document name or client…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg py-2 pl-9 pr-3 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
        </div>
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button key={c} onClick={() => setFilterCat(c)} className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all" style={filterCat === c ? { background: NAVY, color: "#fff" } : { background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>{c}</button>
          ))}
        </div>
      </div>

      {/* Document grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-xl p-10 text-center text-sm" style={{ background: CARD, border: `1px solid ${BORDER}`, color: MUTED }}>No documents found.</div>
        ) : (
          filtered.map((doc) => {
            const catColor = categoryColors[doc.category];
            return (
              <div key={doc.id} className="rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg text-xl" style={{ background: BG }}>
                    {fileIcons[doc.fileType] ?? "📄"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-sm" style={{ color: NAVY }}>{doc.name}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{doc.client}</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: catColor.bg, color: catColor.text }}>{doc.category}</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: BG, color: MUTED }}>{doc.fileType}</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: BG, color: MUTED }}>{doc.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[11px]" style={{ color: MUTED }}>{doc.uploadedAt}</p>
                  <div className="flex gap-1">
                    <button onClick={() => setViewDoc(doc)} className="rounded-lg p-1.5 hover:bg-amber-50" style={{ color: GOLD }} title="View"><Eye className="size-3.5" /></button>
                    <button className="rounded-lg p-1.5 hover:bg-green-50" style={{ color: "#15803D" }} title="Download"><Download className="size-3.5" /></button>
                    <button onClick={() => handleDelete(doc.id)} className="rounded-lg p-1.5 hover:bg-red-50" style={{ color: "#BE123C" }} title="Delete"><Trash2 className="size-3.5" /></button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* View Modal */}
      {viewDoc && (
        <Modal title="Document Details" onClose={() => setViewDoc(null)}>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-xl p-4" style={{ background: BG }}>
              <div className="flex size-12 items-center justify-center rounded-xl text-2xl" style={{ background: CARD }}>{fileIcons[viewDoc.fileType] ?? "📄"}</div>
              <div>
                <p className="font-semibold" style={{ color: NAVY }}>{viewDoc.name}</p>
                <p className="text-xs" style={{ color: MUTED }}>{viewDoc.fileType} · {viewDoc.size}</p>
              </div>
            </div>
            <dl className="space-y-3">
              {[["Client", viewDoc.client], ["Category", viewDoc.category], ["Uploaded", viewDoc.uploadedAt]].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-24 shrink-0 text-xs font-medium" style={{ color: MUTED }}>{k}</dt>
                  <dd className="text-sm font-medium" style={{ color: NAVY }}>{v}</dd>
                </div>
              ))}
              {viewDoc.notes && (
                <div>
                  <dt className="mb-1 text-xs font-medium" style={{ color: MUTED }}>Notes</dt>
                  <dd className="rounded-lg p-3 text-sm" style={{ background: BG, color: NAVY, border: `1px solid ${BORDER}` }}>{viewDoc.notes}</dd>
                </div>
              )}
            </dl>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>
              <Download className="size-4" /> Download Document
            </button>
          </div>
        </Modal>
      )}

      {/* Upload Modal */}
      {showUpload && (
        <Modal title="Upload Document" onClose={() => setShowUpload(false)}>
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Document Name</label>
              <input value={uploadForm.name ?? ""} onChange={(e) => setUploadForm((p) => ({ ...p, name: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Client Name</label>
              <input value={uploadForm.client ?? ""} onChange={(e) => setUploadForm((p) => ({ ...p, client: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Category</label>
                <select value={uploadForm.category ?? "ITR"} onChange={(e) => setUploadForm((p) => ({ ...p, category: e.target.value as DocCategory }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>File Type</label>
                <select value={uploadForm.fileType ?? "PDF"} onChange={(e) => setUploadForm((p) => ({ ...p, fileType: e.target.value }))} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}>
                  {["PDF", "DOCX", "XLSX", "JPG", "PNG", "ZIP"].map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium" style={{ color: MUTED }}>Notes</label>
              <textarea value={uploadForm.notes ?? ""} onChange={(e) => setUploadForm((p) => ({ ...p, notes: e.target.value }))} rows={2} className="w-full rounded-lg px-3 py-2 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }} />
            </div>
            {/* File picker placeholder */}
            <div className="flex items-center justify-center rounded-xl border-2 border-dashed py-6 text-sm" style={{ borderColor: BORDER, color: MUTED }}>
              <div className="text-center">
                <FileText className="mx-auto mb-2 size-8" style={{ color: BORDER }} />
                <p>Click to select file or drag & drop</p>
                <p className="text-xs mt-1">PDF, DOCX, XLSX, JPG, PNG, ZIP</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button onClick={() => setShowUpload(false)} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
              <button onClick={saveUpload} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>Upload</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
