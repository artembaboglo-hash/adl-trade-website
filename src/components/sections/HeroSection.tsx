import { Button } from "@/components/ui/Button";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function HeroSection({ title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-transparent pt-20 pb-24 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      {/* Hero-local layered depth (scoped to this section; sits above global AmbientBackdrop) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.65)_0%,rgba(248,250,252,0.15)_28%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_12%_8%,rgba(255,255,255,0.85),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_85%_at_0%_45%,rgba(241,245,249,0.55),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_0%,transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(226,232,240,0.2)_0%,transparent_38%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_-40px_rgba(13,42,82,0.04)]" />
      </div>
      {/* Soft turquoise ambient — right */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 z-[1] h-[min(560px,85vw)] w-[min(560px,85vw)] -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-100/80 via-accent-teal/25 to-accent-tealDark/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 top-8 z-[1] h-72 w-72 rounded-full bg-gradient-to-bl from-accent-teal/35 via-teal-200/25 to-transparent opacity-70 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 bottom-0 z-[1] h-96 w-96 rounded-full bg-gradient-to-tl from-accent-tealDark/15 to-transparent blur-[100px]"
        aria-hidden
      />
      {/* Main focal orb — soft turquoise gradient, blur + glow (no border / frame) */}
      <div
        className="pointer-events-none absolute right-[-5%] top-1/2 z-[1] hidden h-[min(420px,50vw)] max-h-[520px] w-[min(420px,50vw)] max-w-[520px] -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-200/50 via-accent-teal/35 to-accent-tealDark/30 opacity-95 blur-3xl md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[2%] top-1/2 z-[1] hidden h-[min(280px,38vw)] w-[min(280px,38vw)] -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent-teal/25 to-accent-tealDark/20 blur-2xl shadow-glow-teal md:block"
        aria-hidden
      />
      {/* Hairline depth at bottom — separates hero from next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent"
        aria-hidden
      />

      <div className="container-main relative z-10">
        <div className="max-w-4xl">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-teal">ADL Trade</p>
            <span
              className="h-0.5 w-16 rounded-full bg-gradient-to-r from-accent-tealDark via-accent-teal to-teal-300"
              aria-hidden
            />
          </div>
          <h1 className="mt-8 text-[2.125rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-body sm:text-5xl sm:leading-[1.1] md:mt-10 md:text-[2.75rem] md:leading-[1.08] lg:text-6xl lg:leading-[1.05] xl:text-[3.5rem] xl:leading-[1.03]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-slate-600 sm:text-xl sm:leading-[1.65] md:mt-10 lg:mt-12 lg:max-w-3xl lg:text-xl lg:leading-[1.7] xl:text-2xl xl:leading-[1.65]">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-4 sm:gap-5 md:mt-14 lg:mt-16">
            {primaryCta ? (
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
