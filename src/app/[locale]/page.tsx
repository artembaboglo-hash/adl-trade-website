import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompanyIntroSection, type IntroPillar } from "@/components/sections/CompanyIntroSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StrengthsSection, type StrengthCard } from "@/components/sections/StrengthsSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CategoryCard } from "@/components/ui/Cards";
import { PartnerLogoGrid } from "@/components/sections/PartnerLogoGrid";
import { SplitAudienceSection } from "@/components/sections/SplitAudienceSection";
import { categories } from "@/data/categories";
import { StatsBlock } from "@/components/ui/Stats";
import { stats } from "@/data/stats";
import { CTASection } from "@/components/sections/CTASection";
import { isValidLocale, type Locale, withLocalePath } from "@/lib/i18n";

type HomeCopy = {
  meta: { title: string; description: string };
  hero: { title: string; subtitle: string; ctaSuppliers: string; ctaBuyers: string };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: [IntroPillar, IntroPillar, IntroPillar];
    aboutLink: string;
  };
  advantages: {
    eyebrow: string;
    title: string;
    featured: StrengthCard;
    supporting: [StrengthCard, StrengthCard, StrengthCard, StrengthCard];
  };
  partners: { eyebrow: string; title: string };
  split: {
    suppliers: { title: string; description: string; cta: string };
    buyers: { title: string; description: string; cta: string };
  };
  categories: { eyebrow: string; title: string };
  stats: { eyebrow: string; title: string };
  cta: { title: string; description: string; label: string };
};

const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: "Home",
      description:
        "ADL Trade — B2B distribution, import, and market-entry partner in Moldova. Structured cooperation for suppliers and buyers."
    },
    hero: {
      title: "A Reliable B2B Partner for Distribution and Market-Entry in Moldova and Romania",
      subtitle:
        "We connect brands, manufacturers, and retail partners through structured import, nationwide distribution, and strong local execution.",
      ctaSuppliers: "For Suppliers",
      ctaBuyers: "For Buyers"
    },
    intro: {
      eyebrow: "Company",
      title: "Market access built on reliability, transparency, and execution",
      description:
        "ADL Trade operates as a long-term partner: clear processes, accountable operations, and category-focused teams that support sustainable growth.",
      pillars: [
        {
          title: "In-house warehousing infrastructure",
          description: "Storage control and inventory management"
        },
        {
          title: "In-house delivery",
          description: "Regular supply to retail chains and points of sale"
        },
        {
          title: "Field teams and retail audit",
          description: "Monitoring availability, on-shelf execution, and product condition in stores"
        }
      ],
      aboutLink: "Learn more about ADL Trade →"
    },
    advantages: {
      eyebrow: "Strengths",
      title: "Why partners work with ADL Trade",
      featured: {
        title: "Own warehouse infrastructure",
        description:
          "Controlled storage, stock accuracy, and handling standards—so supply stays predictable and auditable.",
        icon: "/icons/logistics.svg"
      },
      supporting: [
        {
          title: "Nationwide delivery across Moldova",
          description: "Scheduled routes to retail chains, independent stores, and regional trade partners.",
          icon: "/icons/network.svg"
        },
        {
          title: "Field teams and retail audit",
          description: "In-store checks on availability, shelf execution, and compliance with agreed standards.",
          icon: "/icons/analytics.svg"
        },
        {
          title: "Retail and channel execution",
          description: "Disciplined listing, planogram alignment, and coordinated activation across channels.",
          icon: "/icons/partnership.svg"
        },
        {
          title: "Sales support and shelf presence",
          description: "Visibility programs, merchandising support, and a clear focus on sell-through.",
          icon: "/icons/marketing.svg"
        }
      ]
    },
    partners: { eyebrow: "Network", title: "Brands and channels we cooperate with" },
    split: {
      suppliers: {
        title: "For suppliers & brand owners",
        description:
          "Enter Moldova and adjacent markets with a clear route-to-market, disciplined listing, and operational support you can audit.",
        cta: "Supplier solutions"
      },
      buyers: {
        title: "For buyers & retail partners",
        description:
          "Strengthen assortment and supply stability with coordinated planning, transparent terms, and responsive account support.",
        cta: "Buyer solutions"
      }
    },
    categories: { eyebrow: "Categories", title: "Product directions we develop with focus" },
    stats: { eyebrow: "Trust", title: "Execution you can plan around" },
    cta: {
      title: "Start a structured conversation with ADL Trade",
      description:
        "Share your goals—market entry, portfolio expansion, or channel growth—and we will propose a cooperation model that fits your stage.",
      label: "Contact us"
    }
  },
  ro: {
    meta: {
      title: "Acasă",
      description:
        "ADL Trade — partener B2B pentru distribuție, import și intrare pe piață în Moldova. Cooperare structurată pentru furnizori și cumpărători."
    },
    hero: {
      title: "Partener B2B de încredere pentru distribuție și intrare pe piață în Moldova și România",
      subtitle:
        "Conectăm branduri, producători și parteneri retail prin import structurat, distribuție națională și execuție locală puternică.",
      ctaSuppliers: "Pentru furnizori",
      ctaBuyers: "Pentru cumpărători"
    },
    intro: {
      eyebrow: "Companie",
      title: "Acces pe piață bazat pe fiabilitate, transparență și execuție",
      description:
        "ADL Trade funcționează ca partener pe termen lung: procese clare, operațiuni responsabile și echipe orientate pe categorii care susțin creștere sustenabilă.",
      pillars: [
        {
          title: "Infrastructură logistică proprie",
          description: "Controlul depozitării și gestionarea stocurilor"
        },
        {
          title: "Livrare proprie",
          description: "Livrări regulate către rețele de retail și puncte de vânzare"
        },
        {
          title: "Echipe de teren și audit retail",
          description: "Controlul disponibilității, expunerii și stării produsului în punctele de vânzare"
        }
      ],
      aboutLink: "Află mai multe despre ADL Trade →"
    },
    advantages: {
      eyebrow: "Avantaje",
      title: "De ce partenerii aleg ADL Trade",
      featured: {
        title: "Infrastructură logistică proprie",
        description:
          "Depozitare controlată, acuratețe a stocurilor și standarde de manipulare—pentru aprovizionare predictibilă și verificabilă.",
        icon: "/icons/logistics.svg"
      },
      supporting: [
        {
          title: "Livrare națională în Moldova",
          description: "Rute programate către rețele de retail, magazine independente și parteneri regionali.",
          icon: "/icons/network.svg"
        },
        {
          title: "Echipe de teren și audit retail",
          description: "Verificări în magazin: disponibilitate, execuție la raft și respectarea standardelor agreate.",
          icon: "/icons/analytics.svg"
        },
        {
          title: "Execuție retail și pe canale",
          description: "Listare disciplinată, aliniere planogramă și activare coordonată în canale.",
          icon: "/icons/partnership.svg"
        },
        {
          title: "Suport vânzări și prezență la raft",
          description: "Programe de vizibilitate, merchandising și focus clar pe sell-through.",
          icon: "/icons/marketing.svg"
        }
      ]
    },
    partners: { eyebrow: "Rețea", title: "Branduri și canale cu care cooperăm" },
    split: {
      suppliers: {
        title: "Pentru furnizori și deținători de brand",
        description:
          "Intrare clară pe piață în Moldova și piețe adiacente, cu listing disciplinat și suport operațional verificabil.",
        cta: "Soluții pentru furnizori"
      },
      buyers: {
        title: "Pentru cumpărători și retail",
        description:
          "Consolidați asortimentul și stabilitatea aprovizionării cu planificare coordonată, termeni transparenți și suport reactiv.",
        cta: "Soluții pentru cumpărători"
      }
    },
    categories: { eyebrow: "Categorii", title: "Direcții de produse dezvoltate cu focus" },
    stats: { eyebrow: "Încredere", title: "Execuție pe care vă puteți baza" },
    cta: {
      title: "Începeți o discuție structurată cu ADL Trade",
      description:
        "Spuneți-ne obiectivele—intrare pe piață, extindere portofoliu sau creștere pe canale—și propunem un model de cooperare adaptat etapei dvs.",
      label: "Contactați-ne"
    }
  },
  ru: {
    meta: {
      title: "Главная",
      description:
        "ADL Trade — B2B-партнёр по дистрибуции, импорту и выходу на рынок Молдовы. Структурированное сотрудничество для поставщиков и покупателей."
    },
    hero: {
      title: "Надёжный B2B-партнёр по дистрибуции и выходу на рынок Молдовы и Румынии",
      subtitle:
        "Связываем бренды, производителей и розницу через структурированный импорт, национальную дистрибуцию и сильную локальную реализацию.",
      ctaSuppliers: "Для поставщиков",
      ctaBuyers: "Для покупателей"
    },
    intro: {
      eyebrow: "Компания",
      title: "Доступ к рынку на основе надёжности, прозрачности и исполнения",
      description:
        "ADL Trade управляет полным циклом вывода продукции на рынок — от импорта и логистики до размещения на полке и роста продаж.",
      pillars: [
        {
          title: "Собственная складская инфраструктура",
          description: "Контроль хранения и управление товарными запасами"
        },
        {
          title: "Собственная доставка",
          description: "Регулярные поставки в розничные сети и торговые точки"
        },
        {
          title: "Полевые команды и аудит розницы",
          description: "Контроль наличия, выкладки и состояния товара в торговых точках"
        }
      ],
      aboutLink: "Подробнее о ADL Trade →"
    },
    advantages: {
      eyebrow: "Сильные стороны",
      title: "Почему партнёры выбирают ADL Trade",
      featured: {
        title: "Собственная складская инфраструктура",
        description:
          "Контролируемое хранение, точность запасов и стандарты обработки — чтобы поставки оставались прогнозируемыми и проверяемыми.",
        icon: "/icons/logistics.svg"
      },
      supporting: [
        {
          title: "Доставка по всей Молдове",
          description: "Регулярные маршруты к сетям, независимым точкам и региональным партнёрам.",
          icon: "/icons/network.svg"
        },
        {
          title: "Полевые команды и аудит розницы",
          description: "Проверки в торговых точках: наличие, выкладка и соблюдение согласованных стандартов.",
          icon: "/icons/analytics.svg"
        },
        {
          title: "Розница и исполнение по каналам",
          description: "Дисциплина листинга, планограммы и согласованная активация в каналах.",
          icon: "/icons/partnership.svg"
        },
        {
          title: "Поддержка продаж и присутствие на полке",
          description: "Программы видимости, мерчандайзинг и фокус на реализации.",
          icon: "/icons/marketing.svg"
        }
      ]
    },
    partners: { eyebrow: "Сеть", title: "Бренды и каналы, с которыми мы работаем" },
    split: {
      suppliers: {
        title: "Для поставщиков и владельцев брендов",
        description:
          "Выход на рынок Молдовы и соседних регионов с понятным route-to-market, дисциплиной листинга и проверяемой операционной поддержкой.",
        cta: "Решения для поставщиков"
      },
      buyers: {
        title: "Для покупателей и розничных партнёров",
        description:
          "Укрепляйте ассортимент и стабильность поставок за счёт согласованного планирования, прозрачных условий и отзывчивой поддержки.",
        cta: "Решения для покупателей"
      }
    },
    categories: { eyebrow: "Категории", title: "Товарные направления, которые мы развиваем целенаправленно" },
    stats: { eyebrow: "Доверие", title: "Исполнение, на которое можно опереться в планировании" },
    cta: {
      title: "Начните структурированный диалог с ADL Trade",
      description:
        "Опишите цели — выход на рынок, расширение портфеля или рост по каналам — и мы предложим модель сотрудничества под ваш этап.",
      label: "Связаться"
    }
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const m = homeCopy[locale].meta;
  return { title: m.title, description: m.description };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const c = homeCopy[locale];

  return (
    <>
      <HeroSection
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        primaryCta={{ label: c.hero.ctaSuppliers, href: withLocalePath(locale, "/suppliers") }}
        secondaryCta={{ label: c.hero.ctaBuyers, href: withLocalePath(locale, "/buyers") }}
      />

      <CompanyIntroSection
        eyebrow={c.intro.eyebrow}
        title={c.intro.title}
        description={c.intro.description}
        pillars={c.intro.pillars}
        aboutLink={c.intro.aboutLink}
        aboutHref={withLocalePath(locale, "/about")}
      />

      <StrengthsSection
        eyebrow={c.advantages.eyebrow}
        title={c.advantages.title}
        featured={c.advantages.featured}
        supporting={c.advantages.supporting}
      />

      <section className="section-space bg-mono-50/40">
        <div className="container-main">
          <SectionHeader eyebrow={c.partners.eyebrow} title={c.partners.title} center />
          <PartnerLogoGrid names={["Beyoglu", "Linella", "Nordic Vita", "PetroMart", "HoReCa One", "PureHome"]} />
        </div>
      </section>

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
      />

      <section className="section-space bg-mono-50/50">
        <div className="container-main">
          <SectionHeader
            eyebrow={c.categories.eyebrow}
            title={c.categories.title}
            center
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category} title={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-main">
          <SectionHeader eyebrow={c.stats.eyebrow} title={c.stats.title} center />
          <div className="mt-10">
            <StatsBlock items={stats} />
          </div>
        </div>
      </section>

      <CTASection
        title={c.cta.title}
        description={c.cta.description}
        ctaLabel={c.cta.label}
        ctaHref={withLocalePath(locale, "/contacts")}
      />
    </>
  );
}
