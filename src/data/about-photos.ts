import type { Locale } from "@/lib/i18n";

/**
 * Photography for the About page. Paths are shared across locales; `alt` is localized.
 */
const overviewBannerSrc = "/photos/about-overview.png";

const overviewBannerAlts: Record<Locale, string> = {
  en:
    "Illustration of the ADL Trade value chain — production, warehouse, logistics with truck, train and ship, and retail shelves; overlay text: we connect producers to retail shelves",
  ru:
    "Иллюстрация цепочки ADL Trade — производство, склад, логистика (фура, поезд, судно) и розничная полка; надпись о связи производителей с полкой",
  ro:
    "Ilustrație lanț ADL Trade — producție, depozit, logistică (camion, tren, navă) și raft retail; mesaj despre conectarea producătorilor la raft"
};

export function getAboutPhotos(locale: Locale) {
  return {
    overviewBanner: { src: overviewBannerSrc, alt: overviewBannerAlts[locale] }
  };
}
