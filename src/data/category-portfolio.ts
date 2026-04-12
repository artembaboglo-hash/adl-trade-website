import type { Locale } from "@/lib/i18n";

export type CategoryIconId =
  | "confectionery"
  | "beverages"
  | "household"
  | "snacks"
  | "privateLabel"
  | "fmcgEssentials";

export type CategoryPortfolioItem = {
  id: CategoryIconId;
  title: string;
  description: string;
};

export type CategorySectionCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  items: [CategoryPortfolioItem, CategoryPortfolioItem, CategoryPortfolioItem, CategoryPortfolioItem, CategoryPortfolioItem, CategoryPortfolioItem];
};

export const categorySectionByLocale: Record<Locale, CategorySectionCopy> = {
  en: {
    eyebrow: "Categories",
    title: "Key categories in our portfolio",
    lead: "We work across product categories through import, distribution, and sales development in retail and alternative channels.",
    items: [
      {
        id: "confectionery",
        title: "Confectionery",
        description: "Chocolate, sweets, and seasonal confectionery for modern retail."
      },
      {
        id: "beverages",
        title: "Beverages",
        description: "Soft drinks, juices, water, and functional beverages."
      },
      {
        id: "household",
        title: "Household care",
        description: "Cleaning agents, detergents, and home - care categories."
      },
      {
        id: "snacks",
        title: "Snacks",
        description: "Salty and sweet snacks, nuts, and on - the - go formats."
      },
      {
        id: "privateLabel",
        title: "Private Label",
        description: "Retail - owned brands and tailored assortment programmes."
      },
      {
        id: "fmcgEssentials",
        title: "Fast - moving consumer essentials",
        description: "Daily staples and high - rotation FMCG across core channels."
      }
    ]
  },
  ro: {
    eyebrow: "Categorii",
    title: "Categorii cheie din portofoliul nostru",
    lead: "Lucrăm cu categorii de produse prin import, distribuție și dezvoltarea vânzărilor în retail și canale alternative.",
    items: [
      {
        id: "confectionery",
        title: "Produse de patiserie și confiserie",
        description: "Ciocolată, dulciuri și colecții sezoniere pentru retail modern."
      },
      {
        id: "beverages",
        title: "Băuturi",
        description: "Răcoritoare, sucuri, apă și băuturi funcționale."
      },
      {
        id: "household",
        title: "Produse de curățenie",
        description: "Detergenți, soluții de curățenie și îngrijire a locuinței."
      },
      {
        id: "snacks",
        title: "Snack-uri",
        description: "Snack-uri sărate și dulci, nuci și formate convenabile."
      },
      {
        id: "privateLabel",
        title: "Private Label",
        description: "Mărci proprii ale retailului și programe de asortiment adaptate."
      },
      {
        id: "fmcgEssentials",
        title: "Bunuri de larg consum",
        description: "Produse de zi cu zi cu rotație ridicată pe canalele principale."
      }
    ]
  },
  ru: {
    eyebrow: "Категории",
    title: "Ключевые категории в нашем портфеле",
    lead: "Работаем с товарными категориями через импорт, дистрибуцию и развитие продаж в розничных и альтернативных каналах.",
    items: [
      {
        id: "confectionery",
        title: "Кондитерские изделия",
        description: "Шоколад, конфеты, сахарные изделия и сезонные коллекции."
      },
      {
        id: "beverages",
        title: "Напитки",
        description: "Безалкогольные напитки, соки, вода и функциональные напитки."
      },
      {
        id: "household",
        title: "Бытовая химия",
        description: "Моющие средства, чистящие составы и средства для дома."
      },
      {
        id: "snacks",
        title: "Снэки",
        description: "Солёные и сладкие снэки, орехи, форматы «на вынос»."
      },
      {
        id: "privateLabel",
        title: "Private Label",
        description: "Собственные торговые марки и программы под ассортимент ритейла."
      },
      {
        id: "fmcgEssentials",
        title: "Товары повседневного спроса",
        description: "Скорооборачиваемые товары повседневного спроса по ключевым каналам."
      }
    ]
  }
};
