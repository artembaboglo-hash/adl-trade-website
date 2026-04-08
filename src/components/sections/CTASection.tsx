import { Button } from "@/components/ui/Button";

export function CTASection({
  title,
  description,
  ctaLabel = "Contact Us",
  ctaHref = "/contacts"
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section-space bg-mono-50/40">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-10 shadow-card md:p-14">
          <div
            className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-accent-teal via-accent-teal to-accent-tealDark"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full bg-gradient-to-br from-accent-teal/15 to-cyan-100/40 blur-3xl"
            aria-hidden
          />
          <div className="relative pl-6 md:pl-8">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-body md:text-4xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>
            <Button href={ctaHref} variant="primary" className="mt-8">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
