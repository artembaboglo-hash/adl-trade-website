import type { Locale } from "@/lib/i18n";

export type DistributionChannelCard = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  /** Optional focal point for `object-position` (e.g. `"50% 35%"`). */
  imageObjectPosition?: string;
};

export type DistributionChannelsCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  cards: [
    DistributionChannelCard,
    DistributionChannelCard,
    DistributionChannelCard,
    DistributionChannelCard
  ];
};

export const distributionChannelsByLocale: Record<Locale, DistributionChannelsCopy> = {
  en: {
    eyebrow: "DISTRIBUTION",
    title: "Multi-channel distribution",
    lead: "We operate across key retail and distribution channels, ensuring consistent market presence.",
    cards: [
      {
        imageSrc: "/photos/distribution-channel-modern-trade.png",
        imageAlt:
          "Premium grocery interior with wide aisles, category signage, and shoppers — national modern-trade retail",
        title: "Modern Trade",
        subtitle: "National retail chains",
        imageObjectPosition: "50% 42%"
      },
      {
        imageSrc: "/photos/distribution-channel-traditional-trade.png",
        imageAlt:
          "Traditional corner grocery with wooden shelving, full aisles, and service counter — independent stores",
        title: "Traditional Trade",
        subtitle: "Independent stores",
        imageObjectPosition: "50% 45%"
      },
      {
        imageSrc: "/photos/distribution-channel-horeca.png",
        imageAlt:
          "Upscale restaurant interior in Moldova with long wooden table, place settings, and warm lighting — HoReCa",
        title: "HoReCa",
        subtitle: "Hotels & restaurants",
        imageObjectPosition: "50% 40%"
      },
      {
        imageSrc: "/photos/distribution-channel-travel-retail.png",
        imageAlt:
          "Duty-free retail floor at Chișinău International Airport with spirits aisles and premium displays — travel retail",
        title: "Travel Retail",
        subtitle: "Duty free & airport",
        imageObjectPosition: "50% 35%"
      }
    ]
  },
  ro: {
    eyebrow: "DISTRIBUȚIE",
    title: "Distribuție pe mai multe canale",
    lead: "Operăm pe canale esențiale de retail și distribuție, menținând o prezență consecventă pe piață.",
    cards: [
      {
        imageSrc: "/photos/distribution-channel-modern-trade.png",
        imageAlt:
          "Magazin alimentar modern premium, culoar larg, semnalistică categorii și clienți cu coșuri — modern trade",
        title: "Modern Trade",
        subtitle: "Rețele naționale de retail",
        imageObjectPosition: "50% 42%"
      },
      {
        imageSrc: "/photos/distribution-channel-traditional-trade.png",
        imageAlt:
          "Alimentară de cartier cu rafturi din lemn, culoar central și tejghea de servire — comerț tradițional",
        title: "Traditional Trade",
        subtitle: "Magazine independente",
        imageObjectPosition: "50% 45%"
      },
      {
        imageSrc: "/photos/distribution-channel-horeca.png",
        imageAlt:
          "Restaurant elegant în Moldova — masă lungă, veselă aranjată, lumină caldă — canal HoReCa",
        title: "HoReCa",
        subtitle: "Hoteluri și restaurante",
        imageObjectPosition: "50% 40%"
      },
      {
        imageSrc: "/photos/distribution-channel-travel-retail.png",
        imageAlt:
          "Zonă duty-free la Aeroportul Internațional Chișinău, rafturi cu băuturi spirtoase și vitrine premium — travel retail",
        title: "Travel Retail",
        subtitle: "Duty free și aeroport",
        imageObjectPosition: "50% 35%"
      }
    ]
  },
  ru: {
    eyebrow: "ДИСТРИБУЦИЯ",
    title: "Мультиканальная дистрибуция",
    lead: "Работаем по ключевым каналам розницы и дистрибуции, обеспечивая устойчивое присутствие на рынке.",
    cards: [
      {
        imageSrc: "/photos/distribution-channel-modern-trade.png",
        imageAlt:
          "Современный премиальный супермаркет: широкий проход, вывески отделов, покупатели с тележками — modern trade",
        title: "Modern Trade",
        subtitle: "Национальные розничные сети",
        imageObjectPosition: "50% 42%"
      },
      {
        imageSrc: "/photos/distribution-channel-traditional-trade.png",
        imageAlt:
          "Продуктовый магазин у дома: деревянные стеллажи, полный ассортимент, прилавок — traditional trade",
        title: "Traditional Trade",
        subtitle: "Независимые магазины",
        imageObjectPosition: "50% 45%"
      },
      {
        imageSrc: "/photos/distribution-channel-horeca.png",
        imageAlt:
          "Интерьер ресторана в Молдове: длинный деревянный стол, сервировка, тёплый свет — канал HoReCa",
        title: "HoReCa",
        subtitle: "Отели и рестораны",
        imageObjectPosition: "50% 40%"
      },
      {
        imageSrc: "/photos/distribution-channel-travel-retail.png",
        imageAlt:
          "Зал duty free в международном аэропорту Кишинёва: крепкий алкоголь, витрины, премиальная розница",
        title: "Travel Retail",
        subtitle: "Duty free и аэропорты",
        imageObjectPosition: "50% 35%"
      }
    ]
  }
};
