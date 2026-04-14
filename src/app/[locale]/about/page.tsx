import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutAsidePanel,
  AboutOverviewPanel,
  AboutPillarCard,
  AboutSectionGlow
} from "@/components/about/AboutPillarCard";
import { AboutPageNav } from "@/components/about/AboutPageNav";
import { DistributionFlowDiagram } from "@/components/about/DistributionFlowDiagram";
import { WidePhotoBanner } from "@/components/sections/WidePhotoBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatsBlock } from "@/components/ui/Stats";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { PartnerMarqueeSection } from "@/components/sections/PartnerMarqueeSection";
import { getAboutContent } from "@/data/about";
import { getAboutPhotos } from "@/data/about-photos";
import { getHomePhotos } from "@/data/home-photos";
import { partnersMarqueeCopy } from "@/data/partners-marquee";
import { buyerChannelLogos, supplierBrandLogos } from "@/data/partner-logos";
import { dictionaries } from "@/data/dictionaries";
import { contactCtaLabel, resolveLocale, withLocalePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo-metadata";

const SECTION_SCROLL = "scroll-mt-[148px]";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  const { meta } = getAboutContent(locale);
  return pageMetadata(locale, "/about", {
    title: meta.title,
    description: meta.description
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();

  const c = getAboutContent(locale);
  const photos = getHomePhotos(locale);
  const aboutPhotos = getAboutPhotos(locale);
  const dict = dictionaries[locale];
  const partnersMarquee = partnersMarqueeCopy[locale];
  const contactsHref = withLocalePath(locale, "/contacts");
  const suppliersHref = withLocalePath(locale, "/suppliers");

  const aboutNavItems = [
    { href: "#about-overview", label: dict.ui.aboutNavOverview },
    { href: "#about-foundation", label: dict.ui.aboutNavFoundation },
    { href: "#about-what", label: dict.ui.aboutNavWhat },
    { href: "#about-market", label: dict.ui.aboutNavMarket },
    { href: "#about-why", label: dict.ui.aboutNavWhy },
    { href: "#about-partners", label: dict.ui.aboutNavPartners }
  ];

  return (
    <>
      <HeroSection
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        primaryCta={{ label: c.hero.primaryCta.label, href: contactsHref }}
        secondaryCta={{ label: c.hero.secondaryCta.label, href: suppliersHref }}
        media={photos.hero}
      />

      <AboutPageNav items={aboutNavItems} ariaLabel={dict.ui.aboutNavAriaLabel} />

      <RevealOnScroll>
        <section
          id="about-overview"
          className={`section-space relative section-rhythm-top ${SECTION_SCROLL}`}
          aria-labelledby="about-overview-heading"
        >
          <AboutSectionGlow variant="light" />
          <div className="container-main relative">
            <SectionHeader eyebrow={c.overview.eyebrow} title={c.overview.title} headingId="about-overview-heading" />
            <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(17.5rem,22rem)] lg:items-start lg:gap-12 xl:gap-16">
              <AboutOverviewPanel className="min-w-0 lg:max-w-none">
                <p className="text-lg font-medium leading-relaxed text-body md:text-xl">{c.overview.lead}</p>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600 md:text-[1.0625rem] lg:max-w-[65ch]">
                  {c.overview.paragraphs.map((p, i) => (
                    <p key={`overview-p-${i}`}>{p}</p>
                  ))}
                </div>
              </AboutOverviewPanel>
              <AboutAsidePanel aria-label={c.overview.bulletsTitle}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{c.overview.bulletsTitle}</p>
                <ul className="mt-5 space-y-3.5 text-base leading-snug text-slate-700 md:text-[1.0625rem]">
                  {c.overview.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AboutAsidePanel>
            </div>
            <WidePhotoBanner media={aboutPhotos.overviewBanner} className="mt-12 lg:mt-14" />
            <div className="mt-12 lg:mt-14">
              <DistributionFlowDiagram title={c.distributionFlow.title} steps={c.distributionFlow.steps} />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="about-foundation" className={`section-space relative bg-secondary ${SECTION_SCROLL}`} aria-labelledby="about-foundation-heading">
          <AboutSectionGlow variant="muted" />
          <div className="container-main relative">
            <SectionHeader
              eyebrow={c.foundation.eyebrow}
              title={c.foundation.title}
              center
              headingId="about-foundation-heading"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {c.mission.map((value, i) => (
                <AboutPillarCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  foundationIndex={i}
                  featured={i === 1}
                />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="about-what" className={`section-space relative ${SECTION_SCROLL}`} aria-labelledby="about-what-heading">
          <AboutSectionGlow variant="light" />
          <div className="container-main relative">
            <SectionHeader
              eyebrow={c.whatWeDo.eyebrow}
              title={c.whatWeDo.title}
              center
              headingId="about-what-heading"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.whatWeDo.items.map((item, i) => (
                <AboutPillarCard key={item.title} title={item.title} description={item.description} index={i} />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="about-market" className={`section-space relative bg-secondary ${SECTION_SCROLL}`} aria-labelledby="about-market-heading">
          <AboutSectionGlow variant="muted" />
          <div className="container-main relative">
            <SectionHeader
              eyebrow={c.market.eyebrow}
              title={c.market.title}
              description={c.market.description}
              center
              headingId="about-market-heading"
            />
            <div className="mt-10">
              <StatsBlock items={c.market.stats} elevated />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="about-why" className={`section-space relative ${SECTION_SCROLL}`} aria-labelledby="about-why-heading">
          <AboutSectionGlow variant="light" />
          <div className="container-main relative">
            <SectionHeader eyebrow={c.why.eyebrow} title={c.why.title} center headingId="about-why-heading" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.why.items.map((item, i) => (
                <AboutPillarCard key={item.title} title={item.title} description={item.description} index={i} />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <PartnerMarqueeSection
          sectionId="about-partners"
          eyebrow={partnersMarquee.eyebrow}
          title={partnersMarquee.title}
          description={partnersMarquee.description}
          suppliersTitle={partnersMarquee.suppliersTitle}
          buyersTitle={partnersMarquee.buyersTitle}
          supplierLogos={supplierBrandLogos}
          buyerLogos={buyerChannelLogos}
        />
      </RevealOnScroll>

      <CTASection
        variant="emphasis"
        title={
          locale === "ro"
            ? "Construim următoarea etapă de creștere împreună"
            : locale === "ru"
              ? "Строим следующий этап роста вместе"
              : "Build your next growth phase with ADL Trade"
        }
        description={
          locale === "ro"
            ? "Suntem deschiși pentru parteneriate strategice cu furnizori, cumpărători și parteneri de business."
            : locale === "ru"
              ? "Мы открыты к стратегическим партнерствам с поставщиками и покупателями."
              : "Our team is open to strategic partnerships with suppliers, buyers, and institutional business partners."
        }
        ctaHref={contactsHref}
        ctaLabel={contactCtaLabel(locale)}
      />
    </>
  );
}
