import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompanyIntroSection, type IntroPillar } from "@/components/sections/CompanyIntroSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { DistributionChannelsSection } from "@/components/sections/DistributionChannelsSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PartnerMarqueeSection } from "@/components/sections/PartnerMarqueeSection";
import { partnersMarqueeCopy } from "@/data/partners-marquee";
import { buyerChannelLogos, supplierBrandLogos } from "@/data/partner-logos";
import { SplitAudienceSection } from "@/components/sections/SplitAudienceSection";
import { CategoryPortfolioSection } from "@/components/sections/CategoryPortfolioSection";
import { categorySectionByLocale } from "@/data/category-portfolio";
import { distributionChannelsByLocale } from "@/data/distribution-channels";
import { StatsBlock } from "@/components/ui/Stats";
import { CTASection } from "@/components/sections/CTASection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getAboutContent } from "@/data/about";
import { homeCopy } from "@/data/home-page";
import { getHomePhotos } from "@/data/home-photos";
import { resolveLocale, withLocalePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo-metadata";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  const m = homeCopy[locale].meta;
  return pageMetadata(locale, "/", {
    title: m.title,
    description: m.description
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();
  const c = homeCopy[locale];
  const photos = getHomePhotos(locale);
  const partnersMarquee = partnersMarqueeCopy[locale];
  const aboutMission = getAboutContent(locale).mission as [IntroPillar, IntroPillar, IntroPillar];

  return (
    <>
      <HeroSection
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        primaryCta={{ label: c.hero.ctaSuppliers, href: withLocalePath(locale, "/suppliers") }}
        secondaryCta={{ label: c.hero.ctaBuyers, href: withLocalePath(locale, "/buyers") }}
        media={photos.hero}
      />

      <RevealOnScroll>
        <CompanyIntroSection
          eyebrow={c.intro.eyebrow}
          title={c.intro.title}
          description={c.intro.description}
          mission={aboutMission[0]}
          visionValues={[aboutMission[1], aboutMission[2]]}
          aboutLink={c.intro.aboutLink}
          aboutHref={withLocalePath(locale, "/about")}
          media={photos.intro}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <StrengthsSection
          eyebrow={c.advantages.eyebrow}
          title={c.advantages.title}
          items={c.advantages.items}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <DistributionChannelsSection
          headingId="home-distribution-channels-heading"
          eyebrow={distributionChannelsByLocale[locale].eyebrow}
          title={distributionChannelsByLocale[locale].title}
          description={distributionChannelsByLocale[locale].lead}
          cards={distributionChannelsByLocale[locale].cards}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <PartnerMarqueeSection
          eyebrow={partnersMarquee.eyebrow}
          title={partnersMarquee.title}
          description={partnersMarquee.description}
          suppliersTitle={partnersMarquee.suppliersTitle}
          buyersTitle={partnersMarquee.buyersTitle}
          supplierLogos={supplierBrandLogos}
          buyerLogos={buyerChannelLogos}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <SplitAudienceSection
          suppliers={{
            title: c.split.suppliers.title,
            description: c.split.suppliers.description,
            cta: c.split.suppliers.cta,
            href: withLocalePath(locale, "/suppliers")
          }}
          buyers={{
            title: c.split.buyers.title,
            description: c.split.buyers.description,
            cta: c.split.buyers.cta,
            href: withLocalePath(locale, "/buyers")
          }}
          suppliersMedia={photos.splitSuppliers}
          buyersMedia={photos.splitBuyers}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <CategoryPortfolioSection
          eyebrow={categorySectionByLocale[locale].eyebrow}
          title={categorySectionByLocale[locale].title}
          lead={categorySectionByLocale[locale].lead}
          items={categorySectionByLocale[locale].items}
          bannerMedia={photos.categories}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="section-space bg-white section-rhythm-top">
          <div className="container-main">
            <SectionHeader eyebrow={c.stats.eyebrow} title={c.stats.title} center />
            <div className="mt-10">
              <StatsBlock items={c.stats.items} />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <CTASection
        variant="emphasis"
        title={c.cta.title}
        description={c.cta.description}
        ctaLabel={c.cta.label}
        ctaHref={withLocalePath(locale, "/contacts")}
      />
    </>
  );
}
