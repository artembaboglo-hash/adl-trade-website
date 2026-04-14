import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompanyIntroSection, type IntroPillar } from "@/components/sections/CompanyIntroSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StrengthsSection, type StrengthItem } from "@/components/sections/StrengthsSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PartnerMarqueeSection } from "@/components/sections/PartnerMarqueeSection";
import { partnersMarqueeCopy } from "@/data/partners-marquee";
import { buyerChannelLogos, supplierBrandLogos } from "@/data/partner-logos";
import { SplitAudienceSection } from "@/components/sections/SplitAudienceSection";
import { CategoryPortfolioSection } from "@/components/sections/CategoryPortfolioSection";
import { categorySectionByLocale } from "@/data/category-portfolio";
import { StatsBlock } from "@/components/ui/Stats";
import { CTASection } from "@/components/sections/CTASection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getAboutContent } from "@/data/about";
import { getHomePhotos } from "@/data/home-photos";
import { resolveLocale, type Locale, withLocalePath } from "@/lib/i18n";

type HomeCopy = {
  meta: { title: string; description: string };
  hero: { title: string; subtitle: string; ctaSuppliers: string; ctaBuyers: string };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    aboutLink: string;
  };
  advantages: {
    eyebrow: string;
    title: string;
    items: [StrengthItem, StrengthItem, StrengthItem, StrengthItem];
  };
  split: {
    suppliers: { title: string; description: string; cta: string };
    buyers: { title: string; description: string; cta: string };
  };
  stats: { eyebrow: string; title: string; items: { label: string; value: string }[] };
  cta: { title: string; description: string; label: string };
};

const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: "Distribution and market entry in Moldova and Romania",
      description:
        "ADL Trade — distribution, import, and market-entry partner in Moldova and Romania. Structured cooperation for suppliers and buyers."
    },
    hero: {
      title: "A Reliable Partner for Distribution and Market Entry in Moldova and Romania",
      subtitle:
        "We connect brands, manufacturers, and retail partners through structured import, nationwide distribution across Moldova and Romania, and strong local execution.",
      ctaSuppliers: "For Suppliers",
      ctaBuyers: "For Buyers"
    },
    intro: {
      eyebrow: "Company",
      title: "Market access built on reliability, transparency, and execution",
      description:
        "ADL Trade operates as a long-term partner: clear processes, accountable operations, and category-focused teams that support sustainable growth.",
      aboutLink: "Learn more about ADL Trade →"
    },
    advantages: {
      eyebrow: "Strengths",
      title: "Why partners work with ADL Trade",
      items: [
        {
          title: "Logistics & supply chain discipline",
          description:
            "Coordinated fulfillment, inventory control, and delivery rhythms aligned with retail replenishment."
        },
        {
          title: "Nationwide delivery across Moldova and Romania",
          description: "Regular supply to retail chains and points of sale in both markets."
        },
        {
          title: "Field teams and retail audit",
          description: "Monitoring availability, on-shelf execution, and product condition."
        },
        {
          title: "Sales support and shelf presence",
          description: "Merchandising, visibility, and focus on sell-through."
        }
      ]
    },
    split: {
      suppliers: {
        title: "For suppliers & brand owners",
        description:
          "Enter Moldova and Romania with a clear route-to-market, disciplined listing, and operational support you can audit.",
        cta: "Supplier solutions"
      },
      buyers: {
        title: "For buyers & retail partners",
        description:
          "Strengthen assortment and supply stability with coordinated planning, transparent terms, and responsive account support.",
        cta: "Buyer solutions"
      }
    },
    stats: {
      eyebrow: "Trust",
      title: "Execution you can plan around",
      items: [
        { label: "Years of experience", value: "12+" },
        { label: "Markets served", value: "4+" },
        { label: "Retail reach (outlets)", value: "10000+" },
        { label: "Represented brands", value: "35+" }
      ]
    },
    cta: {
      title: "Discuss your product's entry and growth in the market",
      description:
        "We define the right distribution model, channels, and commercial approach based on your product, category, and objectives.",
      label: "Contact us"
    }
  },
  ro: {
    meta: {
      title: "Distribuție și intrare pe piață în Moldova și România",
      description:
        "ADL Trade — partener pentru distribuție, import și intrare pe piață în Moldova și România. Cooperare structurată pentru furnizori și cumpărători."
    },
    hero: {
      title: "Partener de încredere pentru distribuție și intrare pe piață în Moldova și România",
      subtitle:
        "Conectăm branduri, producători și parteneri retail prin import structurat, distribuție națională în Moldova și România și execuție locală puternică.",
      ctaSuppliers: "Pentru furnizori",
      ctaBuyers: "Pentru cumpărători"
    },
    intro: {
      eyebrow: "Companie",
      title: "Acces pe piață bazat pe fiabilitate, transparență și execuție",
      description:
        "ADL Trade funcționează ca partener pe termen lung: procese clare, operațiuni responsabile și echipe orientate pe categorii care susțin creștere sustenabilă.",
      aboutLink: "Află mai multe despre ADL Trade →"
    },
    advantages: {
      eyebrow: "Avantaje",
      title: "De ce partenerii aleg ADL Trade",
      items: [
        {
          title: "Logistică și lanț de aprovizionare disciplinat",
          description:
            "Livrări coordonate, gestionare stocuri și ritm de reaprovizionare aliniat cu retailul."
        },
        {
          title: "Livrare națională în Moldova și România",
          description: "Livrări regulate către rețele și puncte de vânzare în ambele piețe."
        },
        {
          title: "Echipe de teren și audit retail",
          description: "Controlul disponibilității, expunerii și stării produsului."
        },
        {
          title: "Suport vânzări și prezență la raft",
          description: "Merchandising, vizibilitate și focus pe realizarea vânzărilor."
        }
      ]
    },
    split: {
      suppliers: {
        title: "Pentru furnizori și deținători de brand",
        description:
          "Intrare clară pe piețele din Moldova și România, cu listing disciplinat și suport operațional verificabil.",
        cta: "Soluții pentru furnizori"
      },
      buyers: {
        title: "Pentru cumpărători și retail",
        description:
          "Consolidați asortimentul și stabilitatea aprovizionării cu planificare coordonată, termeni transparenți și suport reactiv.",
        cta: "Soluții pentru cumpărători"
      }
    },
    stats: {
      eyebrow: "Încredere",
      title: "Execuție pe care vă puteți baza",
      items: [
        { label: "Ani de experiență", value: "12+" },
        { label: "Piețe acoperite", value: "4+" },
        { label: "Acoperire retail (puncte)", value: "10000+" },
        { label: "Mărci reprezentate", value: "35+" }
      ]
    },
    cta: {
      title: "Discutați intrarea produsului și creșterea pe piață",
      description:
        "Definim modelul potrivit de distribuție, canalele și abordarea comercială în funcție de produsul dvs., categorie și obiective.",
      label: "Contactați-ne"
    }
  },
  ru: {
    meta: {
      title: "Дистрибуция и выход на рынки Молдовы и Румынии",
      description:
        "ADL Trade — партнёр по дистрибуции, импорту и выходу на рынки Молдовы и Румынии. Сотрудничество для поставщиков и покупателей."
    },
    hero: {
      title: "Надёжный партнёр по дистрибуции и выходу на рынки Молдовы и Румынии",
      subtitle:
        "Связываем бренды, производителей и розницу через импорт, национальную дистрибуцию в Молдове и Румынии и сильную локальную реализацию.",
      ctaSuppliers: "Для поставщиков",
      ctaBuyers: "Для покупателей"
    },
    intro: {
      eyebrow: "Компания",
      title: "Доступ к рынку на основе надёжности, прозрачности и исполнения",
      description:
        "ADL Trade работает как долгосрочный партнёр: прозрачные процессы, ответственные операции и команды, сфокусированные на категориях, для устойчивого роста. Импорт, логистика, полка и развитие продаж — в рамках одной дисциплины исполнения.",
      aboutLink: "Подробнее о ADL Trade →"
    },
    advantages: {
      eyebrow: "Сильные стороны",
      title: "Почему партнёры выбирают ADL Trade",
      items: [
        {
          title: "Логистика и дисциплина цепочки поставок",
          description: "Согласованная отгрузка, контроль запасов и ритм поставок в такт с розницей."
        },
        {
          title: "Доставка по Молдове и Румынии",
          description: "Регулярные поставки в сети и торговые точки в обеих странах."
        },
        {
          title: "Полевые команды и аудит розницы",
          description: "Контроль наличия, выкладки и состояния товара"
        },
        {
          title: "Поддержка продаж и присутствие на полке",
          description: "Мерчандайзинг, видимость и фокус на реализации"
        }
      ]
    },
    split: {
      suppliers: {
        title: "Для поставщиков и владельцев брендов",
        description:
          "Выход на рынки Молдовы и Румынии с понятной моделью route-to-market, дисциплиной листинга и проверяемой операционной поддержкой.",
        cta: "Решения для поставщиков"
      },
      buyers: {
        title: "Для покупателей и розничных партнёров",
        description:
          "Укрепляйте ассортимент и стабильность поставок за счёт согласованного планирования, прозрачных условий и отзывчивой поддержки.",
        cta: "Решения для покупателей"
      }
    },
    stats: {
      eyebrow: "Доверие",
      title: "Исполнение, на которое можно опереться в планировании",
      items: [
        { label: "Лет опыта", value: "12+" },
        { label: "Рынков", value: "4+" },
        { label: "Охват розницы (точки)", value: "10000+" },
        { label: "Представленных брендов", value: "35+" }
      ]
    },
    cta: {
      title: "Обсудим выход вашего продукта и рост на рынке",
      description:
        "Определяем подходящую модель дистрибуции, каналы и коммерческий подход с учётом продукта, категории и ваших целей.",
      label: "Связаться"
    }
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  const m = homeCopy[locale].meta;
  return { title: m.title, description: m.description };
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
