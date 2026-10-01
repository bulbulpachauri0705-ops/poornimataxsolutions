import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "white" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20",
        tone === "white" && "bg-card",
        tone === "navy" && "bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <As className="mt-3 text-3xl sm:text-4xl">{title}</As>
      <span className={cn("gold-rule mt-4", center && "mx-auto")} />
      {intro && <p className="mt-5 text-base/7 opacity-80">{intro}</p>}
    </div>
  );
}
