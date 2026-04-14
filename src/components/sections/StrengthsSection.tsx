import { SectionHeader } from "@/components/ui/SectionHeader";

export type StrengthItem = {
  title: string;
  description: string;
};

type StrengthsSectionProps = {
  eyebrow: string;
  title: string;
  items: [StrengthItem, StrengthItem, StrengthItem, StrengthItem];
};

export function StrengthsSection({ eyebrow, title, items }: StrengthsSectionProps) {
  return (
    <section className="section-space border-t border-slate-200/60 bg-white">
      <div className="container-main">
        <SectionHeader eyebrow={eyebrow} title={title} center />

        <div
          className="mx-auto mt-12 max-w-5xl lg:mt-16"
          role="list"
          aria-label={title}
        >
          <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2 md:items-stretch md:gap-y-16 lg:gap-x-20">
            {items.map((item, index) => {
              const num = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={item.title}
                  role="listitem"
                  className="group relative isolate flex h-full min-h-0 flex-col pb-4 md:pb-6"
                >
                  {/* Soft background numerals — single flat tone, no shapes; stays behind copy */}
                  <span
                    className="pointer-events-none absolute -left-1.5 top-0 z-0 block -translate-x-0.5 -translate-y-3 select-none font-semibold tabular-nums leading-[0.72] tracking-[-0.07em] [font-variant-numeric:lining-nums] text-[clamp(5.625rem,10vw,6.875rem)] text-slate-900/[0.06] antialiased transition-[color] duration-300 ease-out sm:-left-2 sm:-translate-x-1 sm:-translate-y-4 group-hover:text-slate-900/[0.07]"
                    aria-hidden
                  >
                    {num}
                  </span>

                  {/* Foreground copy — always above the numeral */}
                  <div className="relative z-10 flex max-w-lg flex-1 flex-col pt-3 sm:pt-3.5">
                    <h3 className="text-balance text-lg font-bold leading-snug tracking-[-0.02em] text-body sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-balance text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-2 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
