import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/data/posts";
import { services } from "@/data/site";
import { BASE_URL } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = ["/", "/services", "/about", "/why-us", "/blog", "/contact", "/privacy-policy", "/terms",
          ...services.map((s) => `/services/${s.slug}`), ...posts.map((p) => `/blog/${p.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc></url>`).join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
