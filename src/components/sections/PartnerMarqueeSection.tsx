import { SectionHeader } from "@/components/ui/SectionHeader";
import { LogoMarquee } from "@/components/sections/PartnerLogoMarquee";
import type { PartnerLogo } from "@/data/partner-logos";
import { cn } from "@/lib/utils";

type PartnerMarqueeSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  suppliersTitle: string;
  buyersTitle: string;
  supplierLogos: PartnerLogo[];
  buyerLogos: PartnerLogo[];
  /** In-page anchor (e.g. About subnav). */
  sectionId?: string;
};

export function PartnerMarqueeSection({
  eyebrow,
  title,
  description,
  suppliersTitle,
  buyersTitle,
  supplierLogos,
  buyerLogos,
  sectionId
}: PartnerMarqueeSectionProps) {
  return (
    <section
      id={sectionId}
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-[#f0faf8]/95 py-12 md:py-16 lg:py-20",
        sectionId && "scroll-mt-[148px]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(45,180,170,0.09),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(420px,70vw)] w-[min(420px,70vw)] rounded-full bg-gradient-to-br from-cyan-100/40 via-accent-teal/[0.11] to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[min(380px,65vw)] w-[min(380px,65vw)] rounded-full bg-gradient-to-tl from-accent-teal/[0.09] via-teal-50/25 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="container-main relative z-10">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          center
          maxWidthClass="max-w-4xl lg:max-w-[52rem]"
          descriptionClassName="mx-auto max-w-[min(100%,46rem)] text-balance leading-snug sm:max-w-[48rem] lg:max-w-[52rem] md:text-[1.0625rem] md:leading-snug"
        />

        <div className="mx-auto mt-8 max-w-6xl md:mt-9">
          <div>
            <p className="text-center text-base font-semibold tracking-[-0.02em] text-slate-800 md:text-lg">
              {suppliersTitle}
            </p>
            <div className="mt-3.5 md:mt-4">
              <div className="-mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
                <LogoMarquee logos={supplierLogos} variant="forward" />
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-14">
            <p className="text-center text-base font-semibold tracking-[-0.02em] text-slate-800 md:text-lg">
              {buyersTitle}
            </p>
            <div className="mt-3.5 md:mt-4">
              <div className="-mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
                <LogoMarquee logos={buyerLogos} variant="reverse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
