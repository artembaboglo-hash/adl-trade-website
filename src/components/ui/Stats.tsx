import { cn } from "@/lib/utils";

type StatsBlockProps = {
  items: { label: string; value: string }[];
  /** Stronger framing to match about-page pillar cards */
  elevated?: boolean;
};

export function StatsBlock({ items, elevated = false }: StatsBlockProps) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
      {items.map((item) => (
        <article
          key={item.label}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-card transition-all duration-300 ease-out",
            elevated && "hover:-translate-y-1",
            "hover:border-accent-teal/20 hover:shadow-md"
          )}
        >
          {elevated ? (
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/70 via-accent-teal to-accent-tealDark"
              aria-hidden
            />
          ) : null}
          <p className="bg-gradient-to-r from-accent-tealDark to-accent-teal bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
            {item.value}
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
