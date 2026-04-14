import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { locales } from "@/lib/i18n";

const origin = siteConfig.url.replace(/\/$/, "");

/** Paths under each locale (home is ""). Thank-you is excluded (utility / noindex). */
const LOCALIZED_PATHS = ["", "/about", "/buyers", "/career", "/contacts", "/suppliers", "/privacy", "/terms"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of LOCALIZED_PATHS) {
      const path = route === "" ? `/${locale}` : `/${locale}${route}`;
      const isHome = route === "";
      entries.push({
        url: `${origin}${path}`,
        lastModified,
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1 : 0.85
      });
    }
  }

  return entries;
}
