import Link from "next/link";

export type IntroPillar = { title: string; description?: string };

type CompanyIntroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  pillars: [IntroPillar, IntroPillar, IntroPillar];
  aboutLink: string;
  aboutHref: string;
};

export function CompanyIntroSection({
  eyebrow,
  title,
  description,
  pillars,
  aboutLink,
  aboutHref
}: CompanyIntroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-y border-slate-200/50 bg-gradient-to-b from-white via-slate-50/40 to-secondary/40 py-12 md:py-14 lg:py-16">
      {/* Turquoise wash — integrated, soft, not a floating orb */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 z-0 h-[min(420px,75vw)] w-[min(420px,75vw)] -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-50/90 via-accent-teal/[0.11] to-accent-tealDark/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-56 w-56 rounded-full bg-gradient-to-tl from-accent-teal/[0.14] via-teal-100/20 to-transparent blur-2xl md:h-72 md:w-72"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.97)_0%,rgba(248,250,252,0.5)_38%,rgba(240,253,250,0.28)_72%,rgba(236,254,255,0.15)_100%)]"
        aria-hidden
      />

      <div className="container-main relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex max-w-xl flex-col gap-4 lg:max-w-none lg:pt-1">
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-teal md:text-[0.8125rem]">{eyebrow}</p>
              <span
                className="h-0.5 w-14 rounded-full bg-gradient-to-r from-accent-tealDark via-accent-teal to-teal-300/90"
                aria-hidden
              />
            </div>
            <h2 className="text-[1.625rem] font-bold leading-[1.2] tracking-[-0.02em] text-body sm:text-3xl md:text-[2rem] lg:text-[2.125rem]">
              {title}
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-slate-600 md:text-base">{description}</p>
            <p className="pt-1">
              <Link
                href={aboutHref}
                className="inline-flex items-center text-sm font-semibold text-accent-teal transition-colors duration-200 hover:text-accent-tealDark hover:underline"
              >
                {aboutLink}
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-3.5 lg:max-w-xl lg:justify-self-end xl:max-w-md">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-xl border border-slate-200/85 bg-gradient-to-br from-white via-white to-slate-50/90 p-5 shadow-[0_10px_36px_-14px_rgba(15,23,42,0.14),0_4px_12px_-6px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/[0.035] transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-14px_rgba(15,23,42,0.16),0_6px_16px_-8px_rgba(15,23,42,0.09)]"
              >
                <div className="flex gap-3.5">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-accent-tealDark to-accent-teal shadow-[0_0_12px_rgba(0,128,128,0.35)]"
                    aria-hidden
                  />
                  <div className="min-w-0">
                    {pillar.description ? (
                      <>
                        <p className="text-sm font-semibold leading-snug text-slate-900 md:text-[0.9375rem]">{pillar.title}</p>
                        <p className="mt-1.5 text-sm font-normal leading-relaxed text-slate-600 md:text-[0.9375rem]">
                          {pillar.description}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm font-medium leading-relaxed text-slate-800 md:text-[0.9375rem]">{pillar.title}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
