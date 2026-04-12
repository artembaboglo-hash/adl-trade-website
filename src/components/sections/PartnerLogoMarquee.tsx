import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PartnerLogo } from "@/data/partner-logos";

/** Space between uniform logo slots */
export const LOGO_MARQUEE_GAP =
  "gap-6 pr-6 sm:gap-7 sm:pr-7 md:gap-8 md:pr-8 lg:gap-10 lg:pr-10";

const logoSlotClass =
  "group flex h-[52.8px] w-max max-w-[14.3rem] shrink-0 items-center justify-center px-3 sm:max-w-[15.4rem] sm:px-4 md:h-[61.6px] md:max-w-[16.5rem] md:px-5";

const logoImageClass =
  "h-auto w-auto max-h-[44px] max-w-full object-contain object-center opacity-100 grayscale-[32%] brightness-[0.97] contrast-[1.02] transition-[filter,opacity,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 md:max-h-[52.8px]";

function LogoSlot({ logo, labeled }: { logo: PartnerLogo; labeled: boolean }) {
  return (
    <div className={logoSlotClass}>
      <Image
        src={logo.src}
        alt={labeled ? logo.alt : ""}
        width={264}
        height={106}
        unoptimized
        sizes="(max-width: 768px) 176px, 220px"
        className={logoImageClass}
      />
    </div>
  );
}

type LogoMarqueeProps = {
  logos: PartnerLogo[];
  variant: "forward" | "reverse";
};

/** Infinite horizontal logo strip (CSS animation). */
export function LogoMarquee({ logos, variant }: LogoMarqueeProps) {
  const anim =
    variant === "forward"
      ? "motion-safe:animate-partner-marquee"
      : "motion-safe:animate-partner-marquee-rev-slow";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-b from-slate-100/90 via-slate-50/95 to-slate-100/85 py-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)] md:py-4">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-slate-100/95 to-transparent sm:w-12 md:w-14"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-slate-100/95 to-transparent sm:w-12 md:w-14"
        aria-hidden
      />
      <div
        className={cn(
          "relative z-0 flex w-max will-change-transform",
          anim,
          "hover:[animation-play-state:paused]"
        )}
      >
        <div className={cn("flex shrink-0 items-stretch", LOGO_MARQUEE_GAP)}>
          {logos.map((logo, i) => (
            <LogoSlot key={`${logo.src}-a-${i}`} logo={logo} labeled />
          ))}
        </div>
        <div className={cn("flex shrink-0 items-stretch", LOGO_MARQUEE_GAP)} aria-hidden>
          {logos.map((logo, i) => (
            <LogoSlot key={`${logo.src}-b-${i}`} logo={logo} labeled={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

type PartnerLogoMarqueeProps = {
  logos: PartnerLogo[];
  variant?: "forward" | "reverse";
  className?: string;
};

/** Logo marquee with full-bleed horizontal gutters (for use under a section header). */
export function PartnerLogoMarquee({ logos, variant = "forward", className }: PartnerLogoMarqueeProps) {
  return (
    <div className={cn("-mx-4 overflow-hidden sm:-mx-6 lg:-mx-8", className)}>
      <LogoMarquee logos={logos} variant={variant} />
    </div>
  );
}
