import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { defaultLocale, locales, type Locale, withLocalePath } from "@/lib/i18n";

function siteOrigin(): string {
  return siteConfig.url.replace(/\/$/, "");
}

/** Absolute URL for a path starting with `/` (e.g. `/ro/about`). */
export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin()}${p}`;
}

function ogLocale(locale: Locale): string {
  if (locale === "ro") return "ro_RO";
  if (locale === "ru") return "ru_RU";
  return "en_US";
}

/**
 * Canonical URL, hreflang alternates, Open Graph and Twitter cards for a locale-prefixed route.
 * `pathWithoutLocale` is the path after the locale segment: `"/"` for home, `"/about"`, etc.
 */
export function pageMetadata(
  locale: Locale,
  pathWithoutLocale: string,
  opts: {
    title: string;
    description: string;
    /** If set, overrides `title` for Open Graph / Twitter (e.g. shorter brand suffix). */
    ogTitle?: string;
    robots?: Metadata["robots"];
  }
): Metadata {
  const canonicalPath = withLocalePath(locale, pathWithoutLocale);
  const url = absoluteUrl(canonicalPath);
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = absoluteUrl(withLocalePath(loc, pathWithoutLocale));
  }
  languages["x-default"] = absoluteUrl(withLocalePath(defaultLocale, pathWithoutLocale));

  const ogTitle = opts.ogTitle ?? opts.title;

  return {
    title: opts.title,
    description: opts.description,
    ...(opts.robots !== undefined ? { robots: opts.robots } : {}),
    alternates: {
      canonical: url,
      languages
    },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url,
      type: "website",
      siteName: siteConfig.companyName,
      locale: ogLocale(locale)
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description
    }
  };
}
