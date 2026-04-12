import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type IntroPillar = { title: string; description?: string };

type CompanyIntroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  mission: IntroPillar;
  visionValues: [IntroPillar, IntroPillar];
  aboutLink: string;
  aboutHref: string;
  /** Wide banner between intro copy and pillars */
  media?: { src: string; alt: string };
};

function IntroPillarBlock({ pillar }: { pillar: IntroPillar }) {
  return (
    <div className="flex min-w-0 flex-col border-l-2 border-accent-teal/30 pl-5 sm:pl-6 md:border-accent-teal/35 md:pl-8">
      <h3
        className={`text-xl font-bold leading-[1.25] tracking-tight sm:text-[1.375rem] md:text-2xl md:leading-[1.2] ${
          pillar.description ? "text-accent-teal" : "text-primary"
        }`}
      >
        {pillar.title}
      </h3>
      {pillar.description ? (
        <p className="mt-4 max-w-prose text-[0.9375rem] leading-[1.82] text-slate-600 sm:mt-5 sm:text-base sm:leading-[1.8] md:leading-[1.78]">
          {pillar.description}
        </p>
      ) : null}
    </div>
  );
}

export function CompanyIntroSection({
  eyebrow,
  title,
  description,
  mission,
  visionValues,
  aboutLink,
  aboutHref,
  media
}: CompanyIntroSectionProps) {
  const [vision, values] = visionValues;
  const rightCol =
    "w-full lg:col-start-2 lg:max-w-xl lg:justify-self-end xl:max-w-lg";
  const mediaUnoptimized = media?.src.endsWith(".svg") ?? false;

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
        {/* Mobile: intro → [banner] → mission → vision → values → link. Desktop: intro|mission, banner row, vision|values, link */}
        <div className="grid grid-cols-1 gap-x-0 gap-y-8 lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-8 xl:gap-x-16">
          <div className="order-1 flex max-w-xl flex-col gap-4 lg:col-start-1 lg:row-start-1 lg:max-w-none lg:pt-1">
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
            <p className="text-[0.9375rem] leading-[1.7] text-slate-600 md:text-base md:leading-[1.68]">{description}</p>
          </div>

          {media ? (
            <div className="order-2 lg:col-span-2 lg:row-start-2">
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-2xl shadow-[0_16px_48px_-24px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/70",
                  "aspect-[21/9] max-h-[min(52vw,280px)] sm:max-h-[min(48vw,320px)] lg:max-h-[360px]"
                )}
              >
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, min(1200px, 90vw)"
                  unoptimized={mediaUnoptimized}
                />
              </div>
            </div>
          ) : null}

          <div
            className={cn(
              rightCol,
              media ? "order-3 lg:row-start-1" : "order-2 lg:row-start-1"
            )}
          >
            <IntroPillarBlock pillar={mission} />
          </div>

          <div
            className={cn(
              "w-full lg:col-start-1",
              media ? "order-4 lg:row-start-3" : "order-3 lg:row-start-2"
            )}
          >
            <div className="max-w-xl lg:max-w-none lg:pr-2">
              <IntroPillarBlock pillar={vision} />
            </div>
          </div>

          <div
            className={cn(
              rightCol,
              media ? "order-5 lg:row-start-3" : "order-4 lg:row-start-2"
            )}
          >
            <IntroPillarBlock pillar={values} />
          </div>

          <div
            className={cn(
              "lg:col-start-1",
              media ? "order-6 lg:row-start-4" : "order-5 lg:row-start-3"
            )}
          >
            <p className="pt-1 lg:pt-0">
              <Link
                href={aboutHref}
                className="inline-flex items-center text-sm font-semibold text-accent-teal transition-colors duration-200 hover:text-accent-tealDark hover:underline"
              >
                {aboutLink}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
