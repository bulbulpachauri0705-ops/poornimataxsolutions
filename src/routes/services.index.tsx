import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { services } from "@/data/site";
import { abs, breadcrumbLd, canonical, ldScript, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: pageMeta({
      title: "Tax Services: ITR, GST, TDS, PAN & Tax Planning | Poornima Tax Solution",
      description:
        "Explore our tax services in India: income tax return filing, tax planning, TDS compliance, business taxation, GST registration and filing, and PAN services.",
      path: "/services",
    }),
    links: canonical("/services"),
    scripts: [
      ldScript(breadcrumbLd([{ name: "Home", item: abs("/") }, { name: "Services", item: abs("/services") }])),
      ldScript({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title, url: abs(`/services/${s.slug}`) })),
      }),
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Tax & compliance services"
        intro="From yearly ITR filing to recurring GST and TDS compliance, each service is handled by a professional who explains the scope and fees before work starts."
        crumbs={[{ label: "Home", to: "/" }]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} className="rounded-sm border border-border bg-card p-7">
              <p className="text-xs tracking-widest text-accent uppercase">{s.tag}</p>
              <h2 className="mt-2 text-2xl text-primary">{s.title}</h2>
              <p className="mt-3 text-sm/6 text-muted-foreground">{s.answer}</p>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent">
                View details <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
