import { createFileRoute } from "@tanstack/react-router";
import { Edit2, Eye, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

import { adminBlogs as initialBlogs, type BlogPost, type BlogStatus } from "@/data/admin";

export const Route = createFileRoute("/admin/blogs")({
  component: AdminBlogs,
});

// ── Design tokens ──────────────────────────────────────────────
const NAVY   = "#062B49";
const GOLD   = "#D9A928";
const CARD   = "#ffffff";
const BORDER = "#E8ECF0";
const BG     = "#F4F6F9";
const MUTED  = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

const statusColors: Record<BlogStatus, { bg: string; text: string }> = {
  Published: { bg: "#F0FDF4", text: "#15803D" },
  Draft:     { bg: "#FFFBEB", text: "#B45309" },
};

function StatusBadge({ status }: { status: BlogStatus }) {
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

const emptyBlog: Omit<BlogPost, "id"> = {
  title: "", slug: "", category: "", excerpt: "",
  seoTitle: "", metaDescription: "", featuredImage: "",
  status: "Draft",
  publishedAt: new Date().toISOString().split("T")[0] ?? "",
  author: "Poornima Tax Solution",
};

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

// ── Shared field ───────────────────────────────────────────────
function Field({
  label, value, onChange, multiline, hint, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void;
  multiline?: boolean; hint?: string; placeholder?: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-semibold" style={{ color: NAVY }}>{label}</label>
        {hint && (
          <span className="text-[10px]" style={{ color: MUTED }}>{value.length} / {hint}</span>
        )}
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          placeholder={placeholder}
          className="w-full rounded-lg px-3 py-2 text-sm outline-none"
          style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg px-3 py-2 text-sm outline-none"
          style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
        />
      )}
    </div>
  );
}

// ── Blog form modal ────────────────────────────────────────────
function BlogForm({
  form, onChange, onSave, onCancel, title,
}: {
  form: Partial<BlogPost>; onChange: (f: Partial<BlogPost>) => void;
  onSave: () => void; onCancel: () => void; title: string;
}) {
  function set(key: keyof BlogPost, value: string) {
    const update: Partial<BlogPost> = { [key]: value };
    if (key === "title" && !form.slug) update.slug = slugify(value);
    onChange({ ...form, ...update });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-8"
      style={{ background: "rgba(6,43,73,0.45)", backdropFilter: "blur(2px)" }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl p-6 mb-8"
        style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-base font-bold" style={{ color: NAVY }}>{title}</h2>
          <button
            onClick={onCancel}
            className="rounded-lg p-1.5 transition-colors hover:bg-gray-100"
            style={{ color: MUTED }}
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-4">
          <Field label="Title" value={form.title ?? ""} onChange={(v) => set("title", v)} placeholder="Blog post title" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Slug"     value={form.slug ?? ""}     onChange={(v) => set("slug", v)}     placeholder="url-friendly-slug" />
            <Field label="Category" value={form.category ?? ""} onChange={(v) => set("category", v)} placeholder="e.g. Income Tax, GST" />
          </div>
          <Field label="Excerpt" value={form.excerpt ?? ""} onChange={(v) => set("excerpt", v)} multiline placeholder="Short summary shown in listings" />
          <Field label="SEO Title"        value={form.seoTitle ?? ""}        onChange={(v) => set("seoTitle", v)}        hint="60"  placeholder="SEO-optimised title" />
          <Field label="Meta Description" value={form.metaDescription ?? ""} onChange={(v) => set("metaDescription", v)} hint="160" multiline placeholder="Meta description for search engines" />
          <Field label="Featured Image URL" value={form.featuredImage ?? ""} onChange={(v) => set("featuredImage", v)} placeholder="/image/blog-cover.jpg" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Published Date" value={form.publishedAt ?? ""} onChange={(v) => set("publishedAt", v)} placeholder="YYYY-MM-DD" />
            <div>
              <label className="mb-1.5 block text-xs font-semibold" style={{ color: NAVY }}>Status</label>
              <select
                value={form.status ?? "Draft"}
                onChange={(e) => set("status", e.target.value)}
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
          </div>

          {/* Search preview */}
          {(form.seoTitle || form.metaDescription) && (
            <div>
              <p className="mb-2 text-xs font-semibold" style={{ color: NAVY }}>Search Preview</p>
              <div className="rounded-xl p-4" style={{ background: BG, border: `1px solid ${BORDER}` }}>
                <p className="mb-1 text-xs" style={{ color: MUTED }}>
                  poornimataxsolutions.com/blog/{form.slug}
                </p>
                <p className="text-base font-medium" style={{ color: "#1558D6" }}>
                  {form.seoTitle || form.title}
                </p>
                <p className="mt-0.5 text-sm" style={{ color: MUTED }}>
                  {form.metaDescription || form.excerpt}
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-1">
            <button
              onClick={onCancel}
              className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
              style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: NAVY, color: "#fff" }}
            >
              Save Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
function AdminBlogs() {
  const [blogs, setBlogs]               = useState<BlogPost[]>(initialBlogs);
  const [showAdd, setShowAdd]           = useState(false);
  const [editBlog, setEditBlog]         = useState<BlogPost | null>(null);
  const [viewBlog, setViewBlog]         = useState<BlogPost | null>(null);
  const [addForm, setAddForm]           = useState<Partial<BlogPost>>({ ...emptyBlog });
  const [editForm, setEditForm]         = useState<Partial<BlogPost>>({});
  const [filterStatus, setFilterStatus] = useState<BlogStatus | "All">("All");

  const filtered = blogs.filter((b) => filterStatus === "All" || b.status === filterStatus);

  function handleAdd() {
    if (!addForm.title) return;
    const newBlog: BlogPost = {
      id: `B${String(blogs.length + 1).padStart(3, "0")}`,
      title: addForm.title ?? "",
      slug: addForm.slug ?? slugify(addForm.title ?? ""),
      category: addForm.category ?? "",
      excerpt: addForm.excerpt ?? "",
      seoTitle: addForm.seoTitle ?? addForm.title ?? "",
      metaDescription: addForm.metaDescription ?? "",
      featuredImage: addForm.featuredImage ?? "",
      status: (addForm.status as BlogStatus) ?? "Draft",
      publishedAt: addForm.publishedAt ?? (new Date().toISOString().split("T")[0] ?? ""),
      author: addForm.author ?? "Poornima Tax Solution",
    };
    setBlogs((prev) => [newBlog, ...prev]);
    setShowAdd(false);
    setAddForm({ ...emptyBlog });
  }

  function handleEdit() {
    if (!editBlog) return;
    setBlogs((prev) =>
      prev.map((b) => (b.id === editBlog.id ? ({ ...b, ...editForm } as BlogPost) : b)),
    );
    setEditBlog(null);
  }

  function handleDelete(id: string) {
    if (confirm("Delete this blog post?")) {
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    }
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold" style={{ color: NAVY }}>Blogs</h1>
          <p className="mt-0.5 text-sm" style={{ color: MUTED }}>
            {blogs.length} posts — {blogs.filter((b) => b.status === "Published").length} published
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: NAVY, color: "#fff" }}
        >
          <Plus className="size-4" />
          New Post
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {(["All", "Published", "Draft"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all"
            style={
              filterStatus === s
                ? { background: NAVY, color: "#fff" }
                : { background: CARD, color: MUTED, border: `1px solid ${BORDER}`, boxShadow: SHADOW }
            }
          >
            {s}
          </button>
        ))}
      </div>

      {/* Blog list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div
            className="rounded-2xl p-10 text-center text-sm"
            style={{ background: CARD, border: `1px solid ${BORDER}`, color: MUTED }}
          >
            No posts found.
          </div>
        ) : (
          filtered.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-wrap items-start justify-between gap-4 rounded-2xl p-5 transition-shadow hover:shadow-md"
              style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}
            >
              <div className="flex-1" style={{ minWidth: 200 }}>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={blog.status} />
                  <span className="text-[11px] font-medium" style={{ color: GOLD }}>{blog.category}</span>
                  <span className="text-[11px]" style={{ color: MUTED }}>{blog.publishedAt}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold leading-snug" style={{ color: NAVY }}>
                  {blog.title}
                </h3>
                <p className="mt-0.5 text-xs font-mono" style={{ color: MUTED }}>/{blog.slug}</p>
                <p className="mt-1.5 text-xs leading-relaxed line-clamp-2" style={{ color: MUTED }}>
                  {blog.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setViewBlog(blog)}
                  className="rounded-lg p-2 transition-colors hover:bg-amber-50"
                  title="View"
                  style={{ color: GOLD }}
                >
                  <Eye className="size-4" />
                </button>
                <button
                  onClick={() => { setEditBlog(blog); setEditForm({ ...blog }); }}
                  className="rounded-lg p-2 transition-colors hover:bg-blue-50"
                  title="Edit"
                  style={{ color: "#1D4ED8" }}
                >
                  <Edit2 className="size-4" />
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="rounded-lg p-2 transition-colors hover:bg-red-50"
                  title="Delete"
                  style={{ color: "#BE123C" }}
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showAdd && (
        <BlogForm
          title="New Blog Post"
          form={addForm}
          onChange={setAddForm}
          onSave={handleAdd}
          onCancel={() => { setShowAdd(false); setAddForm({ ...emptyBlog }); }}
        />
      )}

      {editBlog && (
        <BlogForm
          title="Edit Blog Post"
          form={editForm}
          onChange={setEditForm}
          onSave={handleEdit}
          onCancel={() => setEditBlog(null)}
        />
      )}

      {/* View modal */}
      {viewBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(6,43,73,0.45)", backdropFilter: "blur(2px)" }}
        >
          <div
            className="w-full max-w-lg rounded-2xl p-6"
            style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-bold" style={{ color: NAVY }}>Blog Details</h2>
              <button
                onClick={() => setViewBlog(null)}
                className="rounded-lg p-1.5 transition-colors hover:bg-gray-100"
                style={{ color: MUTED }}
              >
                <X className="size-4" />
              </button>
            </div>
            <dl className="space-y-3">
              {[
                ["Title",     viewBlog.title],
                ["Slug",      `/${viewBlog.slug}`],
                ["Category",  viewBlog.category],
                ["Author",    viewBlog.author],
                ["Published", viewBlog.publishedAt],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-24 shrink-0 text-xs font-medium" style={{ color: MUTED }}>{k}</dt>
                  <dd className="text-sm font-medium" style={{ color: NAVY }}>{v}</dd>
                </div>
              ))}
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-xs font-medium" style={{ color: MUTED }}>Status</dt>
                <dd><StatusBadge status={viewBlog.status} /></dd>
              </div>
              <div>
                <dt className="mb-1.5 text-xs font-medium" style={{ color: MUTED }}>SEO Title</dt>
                <dd className="text-sm" style={{ color: NAVY }}>{viewBlog.seoTitle}</dd>
              </div>
              <div>
                <dt className="mb-1.5 text-xs font-medium" style={{ color: MUTED }}>Meta Description</dt>
                <dd
                  className="rounded-xl p-3 text-xs leading-relaxed"
                  style={{ background: BG, color: NAVY, border: `1px solid ${BORDER}` }}
                >
                  {viewBlog.metaDescription}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
