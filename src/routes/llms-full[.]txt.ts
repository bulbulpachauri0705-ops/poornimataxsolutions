import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/data/posts";
import { generalFaqs, services, site } from "@/data/site";
import { BASE_URL } from "@/lib/seo";

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: () => {
        const lines: string[] = [];

        lines.push("# Poornima Tax Solution — Full Content for AI Agents");
        lines.push(`> ${site.description} Your tax. Our priority.`);
        lines.push(`> Phone: ${site.phoneDisplay} | Email: ${site.email} | WhatsApp: +${site.whatsapp}`);
        lines.push(`> Mathura, India | Serving individuals, professionals, startups and businesses across India.`);
        lines.push("");
        lines.push(`Base URL: ${BASE_URL}`);
        lines.push("");

        lines.push("## Services");
        lines.push("");
        for (const s of services) {
          lines.push(`### ${s.title}`);
          lines.push(`Category: ${s.tag}`);
          lines.push(`URL: ${BASE_URL}/services/${s.slug}`);
          lines.push("");
          lines.push("Short answer:");
          lines.push(s.short);
          lines.push("");
          lines.push("Detailed answer:");
          lines.push(s.answer);
          lines.push("");
          lines.push("What's included:");
          for (const i of s.includes) lines.push(`- ${i}`);
          lines.push("");
          lines.push("How the process works:");
          for (const p of s.process) {
            lines.push(`1. ${p.step}: ${p.detail}`);
          }
          lines.push("");
          lines.push("Documents required:");
          for (const d of s.documents) lines.push(`- ${d}`);
          lines.push("");
          lines.push("Frequently asked questions:");
          for (const f of s.faqs) {
            lines.push(`Q: ${f.q}`);
            lines.push(`A: ${f.a}`);
            lines.push("");
          }
          lines.push("");
        }

        lines.push("## General FAQs");
        lines.push("");
        for (const f of generalFaqs) {
          lines.push(`Q: ${f.q}`);
          lines.push(`A: ${f.a}`);
          lines.push("");
        }

        lines.push("## Insights / Blog");
        lines.push("");
        for (const p of posts) {
          lines.push(`### ${p.title}`);
          lines.push(`Category: ${p.category} | Published: ${p.publishedAt} | Reading time: ${p.readingTime}`);
          lines.push(`URL: ${BASE_URL}/blog/${p.slug}`);
          lines.push("");
          lines.push(`Excerpt: ${p.excerpt}`);
          lines.push("");
          for (const sec of p.sections) {
            lines.push(`### ${sec.heading}`);
            for (const b of sec.body) lines.push(b);
            lines.push("");
          }
          lines.push("");
        }

        lines.push("## Key Pages");
        lines.push(`- Home: ${BASE_URL}/`);
        lines.push(`- About: ${BASE_URL}/about`);
        lines.push(`- Services: ${BASE_URL}/services`);
        lines.push(`- Blog: ${BASE_URL}/blog`);
        lines.push(`- Contact: ${BASE_URL}/contact`);
        lines.push(`- Privacy policy: ${BASE_URL}/privacy-policy`);
        lines.push(`- Terms: ${BASE_URL}/terms`);
        lines.push(`- Why us: ${BASE_URL}/why-us`);
        lines.push("");

        const text = lines.join("\n");

        return new Response(text, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=300, s-maxage=600",
          },
        });
      },
    },
  },
});
