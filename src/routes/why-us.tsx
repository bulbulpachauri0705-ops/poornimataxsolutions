import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { whyUs } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: pageMeta({
      title: "Why Choose Poornima Tax Solution | Reliable, Transparent Tax Experts",
      description: "Why clients choose Poornima Tax Solution: deadlines tracked, transparent fees, direct access to your tax professional and advice that looks ahead.",
      path: "/why-us",
    }),
    links: canonical("/why-us"),
  }),
  component: WhyUs,
});

function WhyUs() {
  return (
    <>
      <PageHero eyebrow="Why us" title="Why clients choose Poornima" intro="Four commitments shape how every return, registration and compliance file is handled." crumbs={[{ label: "Home", to: "/" }]} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-sm border border-border bg-card p-7">
              <CheckCircle2 className="size-7 text-accent" aria-hidden="true" />
              <h2 className="mt-3 text-2xl text-primary">{w.title}</h2>
              <p className="mt-3 text-base/7 text-muted-foreground">{w.detail}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
