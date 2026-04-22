import type { Locale } from "@/lib/i18n";

export type PartnersMarqueeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  /** Short trust line under the main description */
  trustTagline: string;
  suppliersTitle: string;
  buyersTitle: string;
};

/** Shared copy for `PartnerMarqueeSection` (home, about, etc.) */
export const partnersMarqueeCopy: Record<Locale, PartnersMarqueeCopy> = {
  en: {
    eyebrow: "Network",
    title: "Partners",
    description:
      "ADL Trade connects brands and suppliers with retail networks and sales channels - ensuring import, distribution, and in - market execution work as one coordinated process.",
    trustTagline: "Trusted by leading retail networks and partners",
    suppliersTitle: "Suppliers & Brands",
    buyersTitle: "Buyers & Sales Channels"
  },
  ro: {
    eyebrow: "Rețea",
    title: "Parteneri",
    description:
      "ADL Trade leagă brandurile și furnizorii de rețele de retail și canale de vânzare - astfel încât importul, distribuția și execuția pe piață să funcționeze ca un singur proces coordonat.",
    trustTagline: "Recunoscuți de rețele de retail de top și de parteneri de încredere",
    suppliersTitle: "Furnizori și branduri",
    buyersTitle: "Cumpărători și canale de vânzare"
  },
  ru: {
    eyebrow: "Сеть",
    title: "Партнёры",
    description:
      "ADL Trade связывает бренды и поставщиков с розничными сетями и каналами сбыта - чтобы импорт, дистрибуция и работа на рынке шли как один согласованный процесс.",
    trustTagline: "Нам доверяют ведущие розничные сети и партнёры",
    suppliersTitle: "Поставщики и бренды",
    buyersTitle: "Покупатели и каналы сбыта"
  }
};
