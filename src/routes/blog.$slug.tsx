import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { postBySlug } from "@/data/posts";
import { site } from "@/data/site";
import { abs, BASE_URL, breadcrumbLd, canonical, ldScript, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = postBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    const path = `/blog/${params.slug}`;
    return {
      meta: [
        ...pageMeta({ title: p.seoTitle, description: p.seoDescription, path, type: "article" }),
        { property: "article:published_time", content: p.publishedAt },
        { property: "article:section", content: p.category },
      ],
      links: canonical(path),
      scripts: [
        ldScript({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.seoDescription,
          datePublished: p.publishedAt,
          dateModified: p.publishedAt,
          mainEntityOfPage: abs(path),
          author: { "@type": "Organization", name: site.name, url: BASE_URL },
          publisher: { "@type": "Organization", name: site.name, url: BASE_URL },
        }),
        ldScript(breadcrumbLd([
          { name: "Home", item: abs("/") },
          { name: "Insights", item: abs("/blog") },
          { name: p.title, item: abs(path) },
        ])),
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <Section>
      <h1 className="text-3xl">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary underline">All articles</Link>
    </Section>
  );
}

function PostPage() {
  const { post: p } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${p.category} · ${p.readingTime}`} title={p.title} intro={p.excerpt} crumbs={[{ label: "Home", to: "/" }, { label: "Insights", to: "/blog" }]} />
      <Section>
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground">
            By {site.name} · <time dateTime={p.publishedAt}>{new Date(p.publishedAt).toLocaleDateString("en-IN", { dateStyle: "long" })}</time>
          </p>
          {p.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="text-2xl">{s.heading}</h2>
              {s.body.map((b) => <p key={b} className="mt-4 text-base/8 text-foreground/85">{b}</p>)}
            </section>
          ))}
          <p className="mt-12 rounded-sm border border-border bg-card p-5 text-sm text-muted-foreground">
            This article is general information, not advice for your specific case. Rules and thresholds change; contact us to confirm what applies to you.
          </p>
        </article>
      </Section>
      <CtaBand />
    </>
  );
}
