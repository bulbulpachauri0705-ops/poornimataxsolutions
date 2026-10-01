import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { posts } from "@/data/posts";
import { canonical, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: pageMeta({
      title: "Tax Insights & Guides for India | Poornima Tax Solution",
      description: "Plain-language guides on ITR filing, GST, TDS and tax planning in India, written by the Poornima Tax Solution team.",
      path: "/blog",
    }),
    links: canonical("/blog"),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Tax guides & insights" intro="Practical, plain-language explanations of the filings and deadlines that matter to Indian taxpayers." crumbs={[{ label: "Home", to: "/" }]} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="flex flex-col rounded-sm border border-border bg-card p-6">
              <p className="text-xs tracking-widest text-accent uppercase">{p.category} · {p.readingTime}</p>
              <h2 className="mt-2 text-xl text-primary">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-accent">{p.title}</Link>
              </h2>
              <p className="mt-3 flex-1 text-sm/6 text-muted-foreground">{p.excerpt}</p>
              <time dateTime={p.publishedAt} className="mt-4 text-xs text-muted-foreground">
                {new Date(p.publishedAt).toLocaleDateString("en-IN", { dateStyle: "long" })}
              </time>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
