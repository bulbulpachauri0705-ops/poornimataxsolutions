import { site, telHref } from "@/data/site";

export const BASE_URL = "https://poornimataxsolutions.com";
export const abs = (path: string) => `${BASE_URL}${path}`;

type Meta = Record<string, string>;

/**
 * Builds a consistent, self-referencing meta set for a page.
 * Keeps title/description/og/twitter aligned for search engines,
 * answer engines and AI assistants.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  image = "/og-image.jpg",
  imageAlt = "Poornima Tax Solution — tax and compliance consultancy in Mathura, India",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
  imageAlt?: string;
}): Meta[] {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: abs(path) },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export const canonical = (path: string) => [{ rel: "canonical" as const, href: abs(path) }];

export const ldScript = (data: unknown) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  url: BASE_URL,
  name: site.name,
  description: site.description,
  slogan: site.tagline,
  telephone: telHref.replace("tel:", ""),
  email: site.email,
  areaServed: { "@type": "Country", name: site.areaServed },
  knowsAbout: [
    "Income tax return filing",
    "Tax planning",
    "TDS compliance",
    "GST registration and filing",
    "PAN services",
    "Corporate taxation",
    "FSSAI licensing",
    "Accounting and bookkeeping",
    "Firm registration",
    "Trademark registration",
    "MSME Udyam registration",
  ],
  availableLanguage: ["en", "hi"],
};

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbLd = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.item,
  })),
});

export const serviceLd = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  url: abs(path),
  provider: { "@type": "ProfessionalService", name: site.name, telephone: site.phone },
  areaServed: { "@type": "Country", name: site.areaServed },
});

/** HowTo schema built from a service's ordered process steps. */
export const howToLd = (
  steps: { step: string; detail: string }[],
  name: string,
  description: string,
  path: string,
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  totalTime: "PT1H",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.step,
    url: `${abs(path)}#step-${i + 1}`,
    text: s.detail,
  })),
});
