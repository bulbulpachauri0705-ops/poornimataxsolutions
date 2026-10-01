import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  crumbs?: { label: string; to: string }[];
}) {
  return (
    <section className="border-b border-border bg-card py-14 sm:py-18">
      <div className="container-page">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.to} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <Link to={c.to} className="hover:text-primary">
                    {c.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-foreground">{title}</span>
              </li>
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        <span className="gold-rule mt-5" />
        <p className="mt-5 max-w-2xl text-lg/8 text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}
