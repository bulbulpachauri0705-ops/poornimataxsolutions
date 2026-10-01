import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { mailHref, site, telHref, waHref } from "@/data/site";

export function CtaBand({
  title = "Let's make your tax journey simpler.",
  intro = "Tell us what you need and we will respond with the next step, the documents required and an honest view of the timeline.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
          <span className="gold-rule mt-4" />
          <p className="mt-5 max-w-xl text-base/7 text-primary-foreground/75">{intro}</p>
        </div>
        <div className="grid gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
          <div className="grid gap-3 sm:grid-cols-3">
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={telHref}>
                <Phone className="size-4" aria-hidden="true" /> Call
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={mailHref}>
                <Mail className="size-4" aria-hidden="true" /> Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/60">
            {site.phoneDisplay} · {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
