import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { LeadForm } from "@/components/site/LeadForm";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Toaster } from "@/components/ui/sonner";
import { mailHref, site, telHref, waHref } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({
      title: "Contact Poornima Tax Solution | Book a Tax Consultation",
      description: `Book a tax consultation with Poornima Tax Solution. Call ${site.phoneDisplay}, WhatsApp us or email ${site.email} for ITR, GST, TDS and PAN support.`,
      path: "/contact",
    }),
    links: canonical("/contact"),
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Phone, label: "Call", value: site.phoneDisplay, href: telHref },
    { icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: waHref },
    { icon: Mail, label: "Email", value: site.email, href: mailHref },
  ];

  return (
    <>
      <Toaster />

      <PageHero
        eyebrow="Contact"
        title="Book a consultation"
        intro="Share your requirement and we will reply with the next step, documents needed and an honest timeline."
        crumbs={[{ label: "Home", to: "/" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl">Send an enquiry</h2>

            <div className="mt-6">
              <LeadForm />
            </div>
          </div>

          <aside className="space-y-4">
            {items.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-sm border border-border bg-card p-5 hover:border-accent"
              >
                <Icon className="size-6 text-accent" aria-hidden="true" />

                <span>
                  <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                    {label}
                  </span>
                  <span className="text-primary">{value}</span>
                </span>
              </a>
            ))}

            <p className="text-sm text-muted-foreground">
              Serving clients across {site.areaServed}. Consultations available
              by call, WhatsApp or in person.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}