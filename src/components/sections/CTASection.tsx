import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function CTASection({
  title,
  description,
  ctaLabel = "Contact Us",
  ctaHref = "/contacts",
  secondaryCta,
  sectionClassName,
  variant = "default"
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCta?: { label: string; href: string };
  /** Override default `section-space` (e.g. `section-space-dense` on career). */
  sectionClassName?: string;
  /** `emphasis` — deep band for stronger end-of-page contrast. */
  variant?: "default" | "emphasis";
}) {
  const isEmphasis = variant === "emphasis";

  return (
    <section
      className={cn(
        sectionClassName ?? "section-space",
        isEmphasis
          ? "border-t border-slate-800/50 bg-gradient-to-b from-primary via-[#0c2245] to-[#0a1d3d]"
          : "bg-mono-50/40"
      )}
    >
      <div className="container-main">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border p-10 shadow-card md:p-14",
            isEmphasis
              ? "border-white/10 bg-white/[0.07] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.45)] backdrop-blur-[2px]"
              : "border-slate-200/80 bg-white"
          )}
        >
          <div
            className={cn(
              "absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-accent-teal via-accent-teal to-accent-tealDark",
              isEmphasis && "opacity-90"
            )}
            aria-hidden
          />
          <div
            className={cn(
              "pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full blur-3xl",
              isEmphasis ? "bg-accent-teal/25" : "bg-gradient-to-br from-accent-teal/15 to-cyan-100/40"
            )}
            aria-hidden
          />
          <div className="relative pl-6 md:pl-8">
            <h2
              className={cn(
                "max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl",
                isEmphasis ? "text-white" : "text-body"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
                isEmphasis ? "text-slate-300" : "text-slate-600"
              )}
            >
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Button href={ctaHref} variant="primary">
                {ctaLabel}
              </Button>
              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  variant={isEmphasis ? "outlineLight" : "outline"}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
