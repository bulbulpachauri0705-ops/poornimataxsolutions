import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { FaqList } from "@/components/site/FaqList";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { serviceBySlug, services } from "@/data/site";
import { abs, breadcrumbLd, canonical, faqLd, howToLd, ldScript, pageMeta, serviceLd } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    const path = `/services/${params.slug}`;
    const description = s.answer.length > 158 ? s.short : s.answer;
    return {
      meta: pageMeta({ title: `${s.title} in India | Poornima Tax Solution`, description, path }),
      links: canonical(path),
      scripts: [
        ldScript(serviceLd({ name: s.title, description: s.answer, path })),
        ldScript(faqLd(s.faqs)),
        ldScript(howToLd(s.process, s.title, s.answer, path)),
        ldScript(breadcrumbLd([
          { name: "Home", item: abs("/") },
          { name: "Services", item: abs("/services") },
          { name: s.title, item: abs(path) },
        ])),
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <Section>
      <h1 className="text-3xl">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary underline">View all services</Link>
    </Section>
  );
}

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={s.tag} title={s.title} intro={s.short} crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }]} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl">What is {s.title.toLowerCase()}?</h2>
            <p className="mt-4 text-base/8 text-foreground/85">{s.answer}</p>

            <h2 className="mt-12 text-2xl">What's included</h2>
            <ul className="mt-5 space-y-3">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-3 text-base/7">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" /> {i}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl">How the process works</h2>
            <ol className="mt-5 space-y-5">
              {s.process.map((p, i) => (
                <li key={p.step} className="flex gap-4">
                  <span className="font-display text-2xl text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg text-primary">{p.step}</h3>
                    <p className="text-sm/6 text-muted-foreground">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-2xl">Frequently asked questions</h2>
            <div className="mt-4"><FaqList faqs={s.faqs} /></div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-sm border border-border bg-card p-6">
              <h2 className="text-xl">Documents required</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm/6 text-muted-foreground">
                {s.documents.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <Button asChild className="mt-6 w-full"><Link to="/contact">Book a Consultation</Link></Button>
            </div>
            <div className="rounded-sm border border-border bg-card p-6">
              <h2 className="text-xl">Related services</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}><Link to="/services/$slug" params={{ slug: o.slug }} className="text-primary hover:text-accent">{o.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
