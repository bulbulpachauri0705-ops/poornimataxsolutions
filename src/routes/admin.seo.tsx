import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ExternalLink, Globe, Shield, Zap } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/seo")({
  component: AdminSEO,
});

// ── Design tokens ──────────────────────────────────────────────
const NAVY   = "#062B49";
const GOLD   = "#D9A928";
const CARD   = "#ffffff";
const BORDER = "#E8ECF0";
const BG     = "#F4F6F9";
const MUTED  = "#8A94A6";
const SHADOW = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";

type Tab = "general" | "page" | "blog" | "technical" | "aeo";

const tabs: { id: Tab; label: string }[] = [
  { id: "general",   label: "General SEO" },
  { id: "page",      label: "Page SEO" },
  { id: "blog",      label: "Blog SEO" },
  { id: "technical", label: "Technical SEO" },
  { id: "aeo",       label: "AEO / GEO" },
];

const healthItems = [
  { label: "Meta Titles",       score: 90, status: "good" },
  { label: "Meta Descriptions", score: 85, status: "good" },
  { label: "Canonical URLs",    score: 100, status: "good" },
  { label: "Schema Markup",     score: 65, status: "warning" },
  { label: "Sitemap",           score: 100, status: "good" },
  { label: "Broken Links",      score: 80, status: "warning" },
  { label: "Page Speed",        score: 72, status: "warning" },
  { label: "Mobile Friendly",   score: 95, status: "good" },
];

type PageSeo = { path: string; title: string; desc: string; canonical: string; schema: boolean };

const pagesSeo: PageSeo[] = [
  { path: "/",        title: "Income Tax & GST Services in Mathura | Poornima Tax Solution", desc: "Poornima Tax Solution provides income tax return filing, GST, accounting…", canonical: "https://poornimataxsolutions.com/",        schema: true  },
  { path: "/about",   title: "About Poornima Tax Solution",                                  desc: "Learn about Poornima Tax Solution, a trusted tax and compliance firm…",  canonical: "https://poornimataxsolutions.com/about",   schema: false },
  { path: "/services",title: "Tax & Compliance Services | Poornima Tax Solution",            desc: "Explore our full range of tax, GST, accounting and registration services…",canonical: "https://poornimataxsolutions.com/services",schema: true  },
  { path: "/contact", title: "Contact Poornima Tax Solution",                                desc: "Get in touch with Poornima Tax Solution for tax and compliance queries…",  canonical: "https://poornimataxsolutions.com/contact", schema: false },
  { path: "/blog",    title: "Tax Insights & Guides | Poornima Tax Solution",                desc: "Read practical tax guides, GST updates and compliance tips…",              canonical: "https://poornimataxsolutions.com/blog",    schema: false },
];

const defaultPage = pagesSeo[0] as PageSeo;

// ── Shared field ───────────────────────────────────────────────
function Field({
  label, value, onChange, multiline, hint,
}: {
  label: string; value: string; onChange: (v: string) => void;
  multiline?: boolean; hint?: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-semibold" style={{ color: NAVY }}>{label}</label>
        {hint && (
          <span className="text-[10px]" style={{ color: MUTED }}>
            {value.length} / {hint}
          </span>
        )}
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full rounded-lg px-3 py-2 text-sm outline-none"
          style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg px-3 py-2 text-sm outline-none"
          style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
        />
      )}
    </div>
  );
}

function SaveBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
      style={{ background: NAVY, color: "#fff" }}
    >
      Save Changes
    </button>
  );
}

function ProgressBar({ value, color = GOLD }: { value: number; color?: string }) {
  return (
    <div className="h-1.5 w-full rounded-full" style={{ background: "#F0F2F5" }}>
      <div className="h-1.5 rounded-full" style={{ width: `${value}%`, background: color }} />
    </div>
  );
}

function AdminSEO() {
  const [activeTab, setActiveTab] = useState<Tab>("general");
  const [saved, setSaved] = useState(false);

  const [siteName, setSiteName]   = useState("Poornima Tax Solution");
  const [siteDesc, setSiteDesc]   = useState("Poornima Tax Solution provides income tax return filing, GST, TDS, PAN, accounting and business registration services for individuals, professionals, startups and businesses in India.");
  const [siteUrl, setSiteUrl]     = useState("https://poornimataxsolutions.com");
  const [ogImage, setOgImage]     = useState("/og-image.jpg");

  const [selectedPagePath, setSelectedPagePath] = useState<string>(defaultPage.path);
  const [pageTitle, setPageTitle]               = useState<string>(defaultPage.title);
  const [pageDesc, setPageDesc]                 = useState<string>(defaultPage.desc);
  const [pageCanonical, setPageCanonical]       = useState<string>(defaultPage.canonical);

  const [sitemapUrl, setSitemapUrl] = useState("https://poornimataxsolutions.com/sitemap.xml");
  const [robotsTxt, setRobotsTxt]   = useState("User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: https://poornimataxsolutions.com/sitemap.xml");
  const [schemaOrg, setSchemaOrg]   = useState(JSON.stringify({ "@context": "https://schema.org", "@type": "AccountingService", name: "Poornima Tax Solution" }, null, 2));

  const [aeoFocus, setAeoFocus]   = useState("Answer-first content targeting featured snippets and AI-generated answers for tax and GST queries in India.");
  const [geoTarget, setGeoTarget] = useState("Mathura, Uttar Pradesh, India");

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handlePageChange(path: string) {
    const p = pagesSeo.find((pg) => pg.path === path);
    if (!p) return;
    setSelectedPagePath(p.path);
    setPageTitle(p.title);
    setPageDesc(p.desc);
    setPageCanonical(p.canonical);
  }

  const overallHealth = Math.round(healthItems.reduce((a, b) => a + b.score, 0) / healthItems.length);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold" style={{ color: NAVY }}>SEO Management</h1>
        <p className="mt-0.5 text-sm" style={{ color: MUTED }}>Manage meta tags, schema, sitemap and search optimisation.</p>
      </div>

      {/* SEO Health card */}
      <div
        className="rounded-2xl p-5"
        style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold" style={{ color: NAVY }}>SEO Health Score</p>
          <span
            className="rounded-xl px-3 py-1 text-sm font-bold"
            style={{ background: `${GOLD}18`, color: GOLD }}
          >
            {overallHealth}%
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {healthItems.map((item) => {
            const good = item.status === "good";
            const color = good ? "#15803D" : "#B45309";
            return (
              <div key={item.label} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 size-4 shrink-0" style={{ color }} />
                <div className="flex-1">
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium" style={{ color: NAVY }}>{item.label}</span>
                    <span className="font-semibold" style={{ color }}>{item.score}%</span>
                  </div>
                  <ProgressBar value={item.score} color={color} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="rounded-lg px-4 py-2 text-sm font-semibold transition-all"
            style={
              activeTab === tab.id
                ? { background: NAVY, color: "#fff" }
                : { background: CARD, color: MUTED, border: `1px solid ${BORDER}`, boxShadow: SHADOW }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <div
        className="rounded-2xl p-6"
        style={{ background: CARD, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}
      >
        {activeTab === "general" && (
          <div className="space-y-4">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>General SEO Settings</p>
            <Field label="Site Name"        value={siteName} onChange={setSiteName} />
            <Field label="Site Description" value={siteDesc} onChange={setSiteDesc} multiline hint="160" />
            <Field label="Site URL"         value={siteUrl}  onChange={setSiteUrl} />
            <Field label="OG Image Path"    value={ogImage}  onChange={setOgImage} />
            <div className="flex justify-end"><SaveBtn onClick={handleSave} /></div>
          </div>
        )}

        {activeTab === "page" && (
          <div className="space-y-4">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>Page SEO</p>
            <div>
              <label className="mb-1.5 block text-xs font-semibold" style={{ color: NAVY }}>Select Page</label>
              <select
                value={selectedPagePath}
                onChange={(e) => handlePageChange(e.target.value)}
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY }}
              >
                {pagesSeo.map((p) => (
                  <option key={p.path} value={p.path}>{p.path}</option>
                ))}
              </select>
            </div>
            <Field label="Meta Title"       value={pageTitle}     onChange={setPageTitle}     hint="60" />
            <Field label="Meta Description" value={pageDesc}      onChange={setPageDesc}      multiline hint="160" />
            <Field label="Canonical URL"    value={pageCanonical} onChange={setPageCanonical} />

            {/* Search preview */}
            <div>
              <p className="mb-2 text-xs font-semibold" style={{ color: NAVY }}>Search Preview</p>
              <div className="rounded-xl p-4" style={{ background: BG, border: `1px solid ${BORDER}` }}>
                <div className="mb-1 flex items-center gap-1.5 text-xs" style={{ color: MUTED }}>
                  <Globe className="size-3" />
                  <span>{pageCanonical}</span>
                </div>
                <p className="text-base font-medium" style={{ color: "#1558D6" }}>
                  {pageTitle || "Page Title"}
                </p>
                <p className="mt-0.5 text-sm" style={{ color: MUTED }}>
                  {pageDesc || "Meta description will appear here…"}
                </p>
              </div>
            </div>
            <div className="flex justify-end"><SaveBtn onClick={handleSave} /></div>
          </div>
        )}

        {activeTab === "blog" && (
          <div className="space-y-4">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>Blog SEO</p>
            <p className="text-sm" style={{ color: MUTED }}>
              Blog post SEO (title, meta description, slug) is managed per post in the{" "}
              <a href="/admin/blogs" style={{ color: GOLD }} className="font-medium hover:underline">
                Blogs section
              </a>.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Blog Index Title",       value: "Tax Insights & Guides | Poornima Tax Solution" },
                { label: "Blog Index Description", value: "Read practical tax guides, GST updates and compliance tips from Poornima Tax Solution." },
                { label: "Blog Canonical Base",    value: "https://poornimataxsolutions.com/blog" },
                { label: "Default Author",         value: "Poornima Tax Solution" },
              ].map((f) => (
                <Field key={f.label} label={f.label} value={f.value} onChange={() => {}} />
              ))}
            </div>
            <div className="flex justify-end"><SaveBtn onClick={handleSave} /></div>
          </div>
        )}

        {activeTab === "technical" && (
          <div className="space-y-4">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>Technical SEO</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Field label="Sitemap URL" value={sitemapUrl} onChange={setSitemapUrl} />
                <a
                  href={sitemapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium hover:underline"
                  style={{ color: GOLD }}
                >
                  <ExternalLink className="size-3" /> View Sitemap
                </a>
              </div>
              <div
                className="flex items-start gap-3 rounded-xl p-3"
                style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}
              >
                <Shield className="mt-0.5 size-4 shrink-0" style={{ color: "#15803D" }} />
                <div className="text-xs">
                  <p className="font-semibold" style={{ color: "#15803D" }}>SSL / HTTPS Active</p>
                  <p style={{ color: "#166534" }}>Site is served over HTTPS</p>
                </div>
              </div>
            </div>
            <Field label="robots.txt" value={robotsTxt} onChange={setRobotsTxt} multiline />
            <div>
              <label className="mb-1.5 block text-xs font-semibold" style={{ color: NAVY }}>
                Schema Markup (JSON-LD)
              </label>
              <textarea
                value={schemaOrg}
                onChange={(e) => setSchemaOrg(e.target.value)}
                rows={8}
                className="w-full rounded-lg px-3 py-2 font-mono text-xs outline-none"
                style={{ background: BG, border: `1px solid ${BORDER}`, color: NAVY, resize: "vertical" }}
              />
            </div>
            <div
              className="flex items-center gap-2 rounded-xl px-4 py-3"
              style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}
            >
              <Zap className="size-4" style={{ color: "#15803D" }} />
              <span className="text-sm font-medium" style={{ color: "#15803D" }}>
                No broken links detected (last checked: today)
              </span>
            </div>
            <div className="flex justify-end"><SaveBtn onClick={handleSave} /></div>
          </div>
        )}

        {activeTab === "aeo" && (
          <div className="space-y-4">
            <p className="text-sm font-semibold" style={{ color: NAVY }}>AEO / GEO — Answer Engine & Generative Engine Optimisation</p>
            <p className="text-sm" style={{ color: MUTED }}>
              Optimise content for AI-powered search engines, featured snippets and generative answers.
            </p>
            <Field label="AEO Strategy Notes" value={aeoFocus}   onChange={setAeoFocus}   multiline />
            <Field label="Geographic Target"  value={geoTarget}  onChange={setGeoTarget} />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "FAQ Schema",           status: "Active",  bg: "#F0FDF4", text: "#15803D" },
                { label: "HowTo Schema",         status: "Partial", bg: "#FFFBEB", text: "#B45309" },
                { label: "LocalBusiness Schema", status: "Active",  bg: "#F0FDF4", text: "#15803D" },
                { label: "Article Schema",       status: "Missing", bg: "#FFF1F2", text: "#BE123C" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{ background: item.bg, border: `1px solid ${BORDER}` }}
                >
                  <span className="text-sm font-medium" style={{ color: NAVY }}>{item.label}</span>
                  <span className="text-xs font-bold" style={{ color: item.text }}>{item.status}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end"><SaveBtn onClick={handleSave} /></div>
          </div>
        )}

        {saved && (
          <div
            className="mt-4 flex items-center gap-2 rounded-xl px-4 py-3"
            style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}
          >
            <CheckCircle className="size-4" style={{ color: "#15803D" }} />
            <span className="text-sm font-medium" style={{ color: "#15803D" }}>
              Changes saved successfully.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
