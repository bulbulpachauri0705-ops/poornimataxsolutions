import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { site } from "@/data/site";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: pageMeta({ title: "Terms & Disclaimer | Poornima Tax Solution", description: "Terms of use and disclaimer for the Poornima Tax Solution website and the general tax information published on it.", path: "/terms" }),
    links: canonical("/terms"),
  }),
  component: () => (
    <>
      <PageHero title="Terms & Disclaimer" intro="Please read these terms before using this website." crumbs={[{ label: "Home", to: "/" }]} />
      <Section>
        <div className="max-w-3xl space-y-5 text-base/8 text-foreground/85">
          <p>The content on this website is general information and does not constitute professional advice for your specific situation.</p>
          <p>Tax laws, rates and thresholds change frequently. Please consult {site.name} before acting on any information published here.</p>
          <p>Engagement for services begins only after scope and fees are confirmed with you in writing.</p>
          <p>{site.name} is not liable for decisions made solely on the basis of website content.</p>
        </div>
      </Section>
    </>
  ),
});
