import { stats } from "@/data/site";

export function StatsBand() {
  return (
    <section aria-label="Our track record" className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-3 sm:py-14">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-accent pl-5">
            <p className="font-display text-4xl text-accent sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm/6 opacity-85">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
