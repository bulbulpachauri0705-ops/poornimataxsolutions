import { createFileRoute } from "@tanstack/react-router";

import aboutImg from "@/assets/about-desk.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { StatsBand } from "@/components/site/StatsBand";
import { site } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({
      title: "About Poornima Tax Solution | Tax & Compliance Consultants",
      description: "Learn about Poornima Tax Solution, a tax and compliance practice helping individuals, professionals, startups and businesses across India file accurately and on time.",
      path: "/about",
    }),
    links: canonical("/about"),
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={`About ${site.name}`} intro={`${site.tagline} We are a tax and compliance practice built on accuracy, clear communication and filing on time.`} crumbs={[{ label: "Home", to: "/" }]} />
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={aboutImg} alt="Poornima Pachauri seated in her tax and legal consultancy office" width={768} height={1024} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover object-center" />
          <div>
            <SectionHeading eyebrow="Who we are" title="Tax support that stays with you" />
            <p className="mt-5 text-base/8 text-foreground/85">{site.description}</p>
            <p className="mt-4 text-base/8 text-foreground/85">
              Every file is handled by a professional you can speak to directly. We explain scope and fees before starting, keep records ready for future reference, and follow up until each filing is complete.
            </p>
          </div>
        </div>
      </Section>
      <StatsBand />
      <Section>
        <SectionHeading
          eyebrow="Qualifications"
          title="Education"
          intro="A foundation in the arts and law supporting practical, informed tax and compliance guidance."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10th Standard", "2013"],
            ["12th Standard", "2015"],
            ["B.A.", "2018"],
            ["LL.B.", "2022"],
          ].map(([qualification, year]) => (
            <li key={qualification} className="border-l-2 border-accent pl-5">
              <p className="font-display text-3xl text-accent">{year}</p>
              <h2 className="mt-2 text-xl text-primary">{qualification}</h2>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="white">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Our mission", "Make tax compliance simple and dependable for every client, regardless of size."],
            ["Who we serve", "Salaried individuals, freelancers, professionals, startups, SMEs and companies across India."],
            ["How we work", "Documents shared digitally or in person, consultations by call or WhatsApp, filings tracked to completion."],
          ].map(([t, d]) => (
            <div key={t}>
              <h2 className="text-xl text-primary">{t}</h2>
              <p className="mt-3 text-sm/6 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
