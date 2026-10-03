import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  FileBadge2,
  FileText,
  IdCard,
  Landmark,
  PiggyBank,
  Receipt,
  ShieldCheck,
  Store,
  Tags,
  Users,
} from "lucide-react";

import heroImg from "@/assets/img.webp";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqList } from "@/components/site/FaqList";
import { Section, SectionHeading } from "@/components/site/Section";
import { StatsBand } from "@/components/site/StatsBand";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { generalFaqs, services, site, whyUs } from "@/data/site";
import {
  BASE_URL,
  canonical,
  faqLd,
  ldScript,
  organizationLd,
  pageMeta,
} from "@/lib/seo";

const title =
  "Income Tax & GST Services in Mathura | Poornima Tax Solution";

const description =
  "Poornima Tax Solution provides income tax return filing, GST, accounting, FSSAI, business registration, trademark and MSME services in Mathura and across India.";

const serviceIcons = [
  FileText,
  PiggyBank,
  Receipt,
  Building2,
  Landmark,
  IdCard,
  FileBadge2,
  BookOpenCheck,
  Store,
  Tags,
  ShieldCheck,
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title,
      description,
      path: "/",
    }),

    links: canonical("/"),

    scripts: [
      // Business / Local SEO schema
      ldScript(organizationLd),

      // FAQ / Answer Engine schema
      ldScript(faqLd(generalFaqs)),

      // Website schema
      ldScript({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: site.name,
        url: BASE_URL,
        description: site.description,
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
        inLanguage: ["en", "hi"],
      }),
    ],
  }),

  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-card">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="eyebrow">
              Tax & Compliance Services in Mathura
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Income Tax, GST & Compliance Services
            </h1>

            <span className="gold-rule mt-6" />

            <p className="mt-6 max-w-xl text-lg/8 text-muted-foreground">
              {site.name} helps individuals, professionals, startups and
              businesses with income tax filing, GST, accounting,
              registrations and ongoing compliance in Mathura and across
              India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Book a Consultation</Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <ul className="mt-8 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
              {[
                "ITR filing & tax matters",
                "GST registration & filing",
                "Business registrations",
                "Accounting & compliance",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 text-accent"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <img
            src={heroImg}
            alt="Poornima Tax Solution tax and compliance consultant in Mathura"
            width={768}
            height={922}
            className="aspect-[4/3] w-full rounded-sm object-cover object-center shadow-lg"
          />
        </div>
      </section>

      <StatsBand />

      {/* SERVICES */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Tax and compliance services in Mathura"
          intro="Tax, accounting, licensing and registration support for individuals, professionals and businesses in Mathura and across India."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon =
              serviceIcons[i % serviceIcons.length] ?? FileText;

            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-sm border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <span className="flex size-10 items-center justify-center rounded-sm bg-secondary text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>

                <p className="mt-4 text-xs tracking-widest text-accent uppercase">
                  {s.tag}
                </p>

                <h2 className="mt-2 text-xl text-primary">
                  {s.title}
                </h2>

                <p className="mt-3 flex-1 text-sm/6 text-muted-foreground">
                  {s.short}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent">
                  Learn more
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* WHY US */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Why choose us"
          title="Reliable. Transparent. Client focused."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => {
            const Icon =
              [ShieldCheck, FileText, Users, CheckCircle2][i % 4] ??
              ShieldCheck;

            return (
              <div key={w.title}>
                <Icon
                  className="size-7 text-accent"
                  aria-hidden="true"
                />

                <h2 className="mt-3 text-lg text-primary">
                  {w.title}
                </h2>

                <p className="mt-2 text-sm/6 text-muted-foreground">
                  {w.detail}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* HOW IT WORKS - AEO FRIENDLY */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="How our tax and compliance services work"
        />

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Share your requirement",
              "Send documents over WhatsApp, email or in person.",
            ],
            [
              "Expert review",
              "We verify income, credits and eligible deductions.",
            ],
            [
              "Filing & support",
              "We file, share acknowledgement and handle follow-ups.",
            ],
          ].map(([t, d], i) => (
            <li
              key={t}
              className="rounded-sm border border-border bg-card p-6"
            >
              <span className="font-display text-3xl text-accent">
                0{i + 1}
              </span>

              <h2 className="mt-2 text-lg text-primary">{t}</h2>

              <p className="mt-2 text-sm/6 text-muted-foreground">
                {d}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* BLOG / ANSWER CONTENT */}
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Insights"
            title="Tax guides in plain language"
          />

          <Link
            to="/blog"
            className="text-sm font-medium text-primary hover:text-accent"
          >
            All articles →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-sm border border-border p-6 hover:border-accent"
            >
              <p className="text-xs tracking-widest text-accent uppercase">
                {p.category}
              </p>

              <h2 className="mt-2 text-lg text-primary">
                {p.title}
              </h2>

              <p className="mt-2 text-sm/6 text-muted-foreground">
                {p.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ / AEO */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions about tax and GST services"
        />

        <div className="mt-8 max-w-3xl">
          <FaqList faqs={generalFaqs} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}