import { createFileRoute } from "@tanstack/react-router";
import { Eye, MessageSquare, Search, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/inquiries")({
  component: AdminInquiries,
});

const NAVY = "#062B49";
const GOLD = "#D9A928";
const CARD = "#ffffff";
const BORDER = "#E8ECF0";
const BG = "#F4F6F9";
const MUTED = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type InquiryStatus = "New" | "Replied" | "Closed";

type Inquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: InquiryStatus;
  reply: string;
};

const statusColors: Record<InquiryStatus, { bg: string; text: string }> = {
  New:     { bg: "#FFF8E6", text: "#B07D0A" },
  Replied: { bg: "#F0FDF4", text: "#15803D" },
  Closed:  { bg: "#F1F5F9", text: "#475569" },
};

const allStatuses: InquiryStatus[] = ["New", "Replied", "Closed"];

const initialInquiries: Inquiry[] = [
  { id: "IQ001", name: "Rajesh Kumar",   phone: "+91 98765 43210", email: "rajesh.kumar@email.com",   subject: "ITR Filing Charges",          message: "What are your charges for filing ITR for a salaried employee with income from FD interest?", date: "2025-07-10", status: "New",     reply: "" },
  { id: "IQ002", name: "Priya Sharma",   phone: "+91 87654 32109", email: "priya.sharma@email.com",   subject: "GST Registration Process",    message: "I want to start a small online business. Do I need GST registration? What documents are required?", date: "2025-07-09", status: "Replied", reply: "Yes, GST registration is required if your turnover exceeds ₹20 lakhs. Documents needed: PAN, Aadhaar, bank statement, and address proof." },
  { id: "IQ003", name: "Amit Verma",     phone: "+91 76543 21098", email: "amit.verma@email.com",     subject: "Partnership Firm Registration", message: "We are 3 friends planning to start a business. What is the process for partnership firm registration?", date: "2025-07-08", status: "Replied", reply: "Partnership firm registration requires a partnership deed, PAN of all partners, and address proof. We can complete this in 7-10 working days." },
  { id: "IQ004", name: "Sunita Agarwal", phone: "+91 65432 10987", email: "sunita.agarwal@email.com", subject: "Tax Saving Options",           message: "I am in the 30% tax bracket. What are the best tax saving options available for me?", date: "2025-07-07", status: "New",     reply: "" },
  { id: "IQ005", name: "Vikram Singh",   phone: "+91 54321 09876", email: "vikram.singh@email.com",   subject: "TDS Refund Status",            message: "I filed my ITR 3 months ago but haven't received my TDS refund. How can I check the status?", date: "2025-07-06", status: "Replied", reply: "You can check refund status on the Income Tax e-filing portal under 'Refund/Demand Status'. If it's been more than 3 months, we can help raise a grievance." },
  { id: "IQ006", name: "Meena Gupta",    phone: "+91 43210 98765", email: "meena.gupta@email.com",    subject: "MSME Registration Benefits",   message: "What are the benefits of MSME registration for my small manufacturing unit?", date: "2025-07-05", status: "Closed",  reply: "MSME registration provides benefits like priority sector lending, lower interest rates, government subsidies, and protection against delayed payments." },
  { id: "IQ007", name: "Deepak Joshi",   phone: "+91 32109 87654", email: "deepak.joshi@email.com",   subject: "Trademark Registration Cost",  message: "How much does trademark registration cost and how long does it take?", date: "2025-07-04", status: "New",     reply: "" },
  { id: "IQ008", name: "Kavita Yadav",   phone: "+91 21098 76543", email: "kavita.yadav@email.com",   subject: "Monthly Bookkeeping Service",  message: "I run a retail shop. What does your monthly bookkeeping service include?", date: "2025-07-03", status: "Closed",  reply: "Our monthly bookkeeping service includes recording all transactions, bank reconciliation, GST computation, and monthly P&L statement." },
];

function StatusBadge({ status }: { status: InquiryStatus }) {
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

function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<InquiryStatus | "All">("All");
  const [viewInquiry, setViewInquiry] = useState<Inquiry | null>(null);
  const [replyText, setReplyText] = useState("");

  const filtered = inquiries.filter((i) => {
    const q = search.toLowerCase();
    const matchSearch = i.name.toLowerCase().includes(q) || i.subject.toLowerCase().includes(q) || i.email.toLowerCase().includes(q);
    const matchStatus = filterStatus === "All" || i.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const newCount = inquiries.filter((i) => i.status === "New").length;
  const repliedCount = inquiries.filter((i) => i.status === "Replied").length;

  function openView(inq: Inquiry) {
    setViewInquiry(inq);
    setReplyText(inq.reply);
  }

  function saveReply() {
    if (!viewInquiry) return;
    setInquiries((p) =>
      p.map((i) =>
        i.id === viewInquiry.id
          ? { ...i, reply: replyText, status: replyText.trim() ? "Replied" : i.status }
          : i
      )
    );
    setViewInquiry(null);
  }

  function markClosed(id: string) {
    setInquiries((p) => p.map((i) => (i.id === id ? { ...i, status: "Closed" } : i)));
    setViewInquiry(null);
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold" style={{ color: NAVY }}>Inquiries</h1>
        <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{inquiries.length} total inquiries</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total", value: String(inquiries.length), color: NAVY },
          { label: "New", value: String(newCount), color: "#B07D0A" },
          { label: "Replied", value: String(repliedCount), color: "#15803D" },
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
          <input type="text" placeholder="Search by name, email, subject…" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg py-2 pl-9 pr-3 text-sm outline-none" style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }} />
        </div>
        <div className="flex gap-2">
          {(["All", ...allStatuses] as const).map((s) => (
            <button key={s} onClick={() => setFilterStatus(s)} className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all" style={filterStatus === s ? { background: NAVY, color: "#fff" } : { background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>{s}</button>
          ))}
        </div>
      </div>

      {/* Inquiry list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="rounded-xl p-10 text-center text-sm" style={{ background: CARD, border: `1px solid ${BORDER}`, color: MUTED }}>No inquiries found.</div>
        ) : (
          filtered.map((inq) => (
            <div key={inq.id} className="rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold" style={{ color: NAVY }}>{inq.name}</p>
                    <StatusBadge status={inq.status} />
                  </div>
                  <p className="mt-0.5 text-sm font-medium" style={{ color: NAVY }}>{inq.subject}</p>
                  <p className="mt-1 text-xs line-clamp-2" style={{ color: MUTED }}>{inq.message}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs" style={{ color: MUTED }}>
                    <span>{inq.email}</span>
                    <span>{inq.phone}</span>
                    <span>{inq.date}</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openView(inq)} className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold hover:opacity-90" style={{ background: inq.status === "New" ? NAVY : BG, color: inq.status === "New" ? "#fff" : MUTED, border: inq.status !== "New" ? `1px solid ${BORDER}` : undefined }}>
                    {inq.status === "New" ? <><MessageSquare className="size-3.5" /> Reply</> : <><Eye className="size-3.5" /> View</>}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* View / Reply Modal */}
      {viewInquiry && (
        <Modal title="Inquiry Details" onClose={() => setViewInquiry(null)}>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold" style={{ color: NAVY }}>{viewInquiry.name}</p>
              <StatusBadge status={viewInquiry.status} />
            </div>
            <dl className="space-y-2">
              {[["Email", viewInquiry.email], ["Phone", viewInquiry.phone], ["Date", viewInquiry.date], ["Subject", viewInquiry.subject]].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-16 shrink-0 text-xs font-medium" style={{ color: MUTED }}>{k}</dt>
                  <dd className="text-sm font-medium" style={{ color: NAVY }}>{v}</dd>
                </div>
              ))}
            </dl>
            <div>
              <p className="mb-1.5 text-xs font-medium" style={{ color: MUTED }}>Message</p>
              <div className="rounded-lg p-3 text-sm" style={{ background: BG, color: NAVY, border: `1px solid ${BORDER}` }}>{viewInquiry.message}</div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium" style={{ color: MUTED }}>Reply</label>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={4}
                placeholder="Type your reply here…"
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }}
              />
            </div>
            <div className="flex justify-between gap-2">
              {viewInquiry.status !== "Closed" && (
                <button onClick={() => markClosed(viewInquiry.id)} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Mark Closed</button>
              )}
              <div className="ml-auto flex gap-2">
                <button onClick={() => setViewInquiry(null)} className="rounded-lg px-4 py-2 text-sm font-medium" style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}>Cancel</button>
                <button onClick={saveReply} className="rounded-lg px-4 py-2 text-sm font-semibold hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>Save Reply</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
