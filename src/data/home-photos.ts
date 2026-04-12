import type { Locale } from "@/lib/i18n";

/**
 * Home page photography slots. Replace files under `public/photos/` (same filenames)
 * or change extensions here (e.g. `.webp`) after you add assets.
 */
const paths = {
  hero: "/photos/home-hero.png",
  intro: "/photos/home-intro.svg",
  splitSuppliers: "/photos/home-split-suppliers.svg",
  splitBuyers: "/photos/home-split-buyers.svg",
  categories: "/photos/home-categories.svg"
} as const;

const alts: Record<Locale, Record<keyof typeof paths, string>> = {
  en: {
    hero: "ADL Trade warehouse and loading docks with distribution trucks",
    intro: "ADL Trade — people and day-to-day operations",
    splitSuppliers: "Supplier and brand partnership — production and logistics",
    splitBuyers: "Retail and buyer channels — shelf and store execution",
    categories: "Product categories and portfolio across key FMCG segments"
  },
  ru: {
    hero: "Склад и рампы ADL Trade с грузовиками для доставки",
    intro: "ADL Trade — команда и операционная работа",
    splitSuppliers: "Поставщики и бренды — производство и логистика",
    splitBuyers: "Покупатели и розница — полка и торговые точки",
    categories: "Категории портфеля в ключевых сегментах FMCG"
  },
  ro: {
    hero: "Depozit ADL Trade și rampe de încărcare cu camioane de livrare",
    intro: "ADL Trade — echipă și activitate operațională",
    splitSuppliers: "Furnizori și branduri — producție și logistică",
    splitBuyers: "Cumpărători și retail — raft și puncte de vânzare",
    categories: "Categorii de portofoliu în segmente cheie FMCG"
  }
};

export type HomePhotoSlot = keyof typeof paths;

export function getHomePhotos(locale: Locale) {
  const a = alts[locale];
  return {
    hero: { src: paths.hero, alt: a.hero },
    intro: { src: paths.intro, alt: a.intro },
    splitSuppliers: { src: paths.splitSuppliers, alt: a.splitSuppliers },
    splitBuyers: { src: paths.splitBuyers, alt: a.splitBuyers },
    categories: { src: paths.categories, alt: a.categories }
  };
}
