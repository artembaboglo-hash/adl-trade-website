import type { Locale } from "@/lib/i18n";

/**
 * Site photography slots. Replace files under `public/photos/` (same filenames)
 * or change extensions here (e.g. `.webp`) after you add assets.
 *
 * Image `src` paths are shared for all locales (en / ru / ro); only `alt` text differs.
 */
const paths = {
  hero: "/photos/home-hero.png",
  intro: "/photos/home-intro.png",
  careerHero: "/photos/career-hero.png",
  contactsHero: "/photos/contacts-hero.png",
  splitSuppliers: "/photos/home-split-suppliers.png",
  splitBuyers: "/photos/home-split-buyers.png",
  categories: "/photos/home-categories.png"
} as const;

const alts: Record<Locale, Record<keyof typeof paths, string>> = {
  en: {
    hero:
      "ADL Trade team in front of the company logistics hub — building signage, delivery trucks, and mixed office and field staff",
    intro:
      "Field team with tablet and scanner in a supermarket aisle — shelf execution and retail operations",
    careerHero:
      "Warehouse team collaborating with a tablet and barcode scanner beside stocked shelves; ADL Trade delivery truck visible at the loading bay",
    contactsHero:
      "Team member on a call at a desk with a laptop showing the ADL Trade contacts page; bright office with ADL Trade branding in the background",
    splitSuppliers:
      "Food production facility — staff at a control panel beside an automated confectionery line with conveyors and stainless equipment",
    splitBuyers:
      "Large grocery store interior — bright aisles, freezer cases, and fully stocked shelves in a modern supermarket",
    categories:
      "Panoramic showroom display with six category bays — confectionery, beverages, household cleaning, snacks, private label, and FMCG daily mix"
  },
  ru: {
    hero:
      "Команда ADL Trade у логистического центра — вывеска, грузовики и сотрудники офиса и полевой команды",
    intro:
      "Сотрудник с планшетом и сканером в торговом зале — работа с полкой и розничная операция",
    careerHero:
      "Команда на складе: планшет, сканер, стеллажи с товаром; у ворот грузовик ADL Trade",
    contactsHero:
      "Сотрудник в офисе на звонке, на ноутбуке страница контактов ADL Trade; светлый офис с фирменным оформлением",
    splitSuppliers:
      "Производственная линия кондитерских изделий — сотрудники у пульта управления, конвейеры и нержавеющее оборудование",
    splitBuyers:
      "Современный супермаркет — яркий зал, морозильные витрины и заполненные полки",
    categories:
      "Панорамный шоурум с шестью нишами категорий — кондитерские изделия, напитки, бытовая химия, снеки, private label и FMCG"
  },
  ro: {
    hero:
      "Echipa ADL Trade în fața hub-ului logistic — semnalistică pe clădire, camioane de livrare și personal de birou și teren",
    intro:
      "Echipă în magazin cu tabletă și scanner — execuție la raft și operațiuni retail",
    careerHero:
      "Echipă în depozit cu tabletă și scanner lângă rafturi încărcate; camion ADL Trade la rampă",
    contactsHero:
      "Specialist la birou la telefon, laptop cu pagina de contacte ADL Trade; birou luminos cu branding ADL Trade",
    splitSuppliers:
      "Facilitate de producție alimentară — personal la panoul de control, linie automată de confiserie cu benzi transportoare",
    splitBuyers:
      "Interior de supermarket modern — culoare luminoasă, vitrine frigorifice și rafturi încărcate",
    categories:
      "Showroom panoramic cu șase nișe — confiserie, băuturi, curățenie, snacks, private label și mix FMCG zilnic"
  }
};

export type HomePhotoSlot = keyof typeof paths;

export function getHomePhotos(locale: Locale) {
  const a = alts[locale];
  return {
    hero: { src: paths.hero, alt: a.hero },
    intro: { src: paths.intro, alt: a.intro },
    careerHero: { src: paths.careerHero, alt: a.careerHero },
    contactsHero: { src: paths.contactsHero, alt: a.contactsHero },
    splitSuppliers: { src: paths.splitSuppliers, alt: a.splitSuppliers },
    splitBuyers: { src: paths.splitBuyers, alt: a.splitBuyers },
    categories: { src: paths.categories, alt: a.categories }
  };
}
