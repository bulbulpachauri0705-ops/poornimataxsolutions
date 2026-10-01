import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { site, telHref } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/why-us", label: "Why Us" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-sm bg-primary font-display text-lg text-primary-foreground">
            P
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base text-primary sm:text-lg">
              {site.name}
            </span>
            <span className="block text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
              {site.positioning}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:underline data-[status=active]:decoration-accent data-[status=active]:decoration-2 data-[status=active]:underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Button asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-foreground/85"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={telHref}>Call {site.phoneDisplay}</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
