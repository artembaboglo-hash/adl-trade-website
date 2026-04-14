import type { Locale } from "@/lib/i18n";

export type HomeStrengthItem = { title: string; description: string };

export type HomeCopy = {
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
    items: [HomeStrengthItem, HomeStrengthItem, HomeStrengthItem, HomeStrengthItem];
  };
  split: {
    suppliers: { title: string; description: string; cta: string };
    buyers: { title: string; description: string; cta: string };
  };
  stats: { eyebrow: string; title: string; items: { label: string; value: string }[] };
  cta: { title: string; description: string; label: string };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: "FMCG distribution partner — Moldova & Romania",
      description:
        "ADL Trade — FMCG distribution, import, and retail execution in Moldova and Romania. Structured support for suppliers and retail partners."
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
      title: "Partener de distribuție FMCG — Moldova și România",
      description:
        "ADL Trade — distribuție FMCG, import și execuție la raft în Moldova și România. Suport structurat pentru furnizori și retail."
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
      title: "Партнёр по дистрибуции FMCG — Молдова и Румыния",
      description:
        "ADL Trade — дистрибуция FMCG, импорт и работа с розницей в Молдове и Румынии. Поддержка поставщиков и торговых сетей."
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
