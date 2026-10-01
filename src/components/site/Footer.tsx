import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { mailHref, services, site, telHref, waHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl">{site.name}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">{site.tagline}</p>
          <span className="gold-rule mt-4" />
          <p className="mt-4 text-sm text-primary-foreground/70">
            Tax, compliance and advisory support for individuals, professionals and businesses
            across India.
          </p>
        </div>

        <nav aria-label="Services" className="text-sm">
          <p className="eyebrow">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-primary-foreground/75 hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="text-sm">
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2">
            {[
              { to: "/about", label: "About" },
              { to: "/why-us", label: "Why Poornima" },
              { to: "/blog", label: "Insights" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Disclaimer" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/75 hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={telHref} className="flex items-center gap-2 hover:text-accent">
                <Phone className="size-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailHref} className="flex items-center gap-2 break-all hover:text-accent">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp enquiry
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Information on this site is general in nature and not a substitute for advice.</p>
        </div>
      </div>
    </footer>
  );
}
