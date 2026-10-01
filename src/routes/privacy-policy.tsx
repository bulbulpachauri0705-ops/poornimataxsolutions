import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { site } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: pageMeta({ title: "Privacy Policy | Poornima Tax Solution", description: "How Poornima Tax Solution collects, uses and protects the personal and financial information you share with us.", path: "/privacy-policy" }),
    links: canonical("/privacy-policy"),
  }),
  component: () => (
    <>
      <PageHero title="Privacy Policy" intro="How we handle the information you share with us." crumbs={[{ label: "Home", to: "/" }]} />
      <Section>
        <div className="max-w-3xl space-y-5 text-base/8 text-foreground/85">
          <p>{site.name} collects only the details needed to respond to your enquiry and deliver the services you request, such as your name, contact details and tax documents.</p>
          <p>Your information is used solely to prepare filings, communicate with you and meet legal obligations. We do not sell or rent personal data to third parties.</p>
          <p>Documents are stored securely and shared only with government portals or authorities as required for your filings.</p>
          <p>You may request access to, correction of, or deletion of your data at any time by emailing {site.email}.</p>
        </div>
      </Section>
    </>
  ),
});
