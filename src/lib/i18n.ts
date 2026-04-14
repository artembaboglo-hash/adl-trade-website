export const locales = ["ro", "en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ro";
export const localeCookieName = "NEXT_LOCALE";

/** Returns canonical `en` | `ro` | `ru` regardless of input casing. */
export function resolveLocale(raw: unknown): Locale | undefined {
  if (typeof raw !== "string" || raw.length === 0) return undefined;
  const lower = raw.toLowerCase();
  return locales.includes(lower as Locale) ? (lower as Locale) : undefined;
}

export function isValidLocale(value: string): boolean {
  return resolveLocale(value) !== undefined;
}

/** Collapses trailing slashes so `/en/about/` and `/en/about` compare equal. */
export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  if (trimmed === "") return "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const normalized = normalizePathname(pathname);
  const parts = normalized.split("/");
  const maybeLocale = parts[1];
  const resolved = maybeLocale ? resolveLocale(maybeLocale) : undefined;
  if (resolved) {
    const next = "/" + parts.slice(2).join("/");
    return next === "/" ? "/" : next.replace(/\/+$/, "") || "/";
  }
  return normalized === "" ? "/" : normalized;
}

export function withLocalePath(locale: Locale, pathname: string): string {
  const clean = stripLocaleFromPath(pathname);
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/** Primary CTA label linking to contacts (used in CTASection across pages). */
export function contactCtaLabel(locale: Locale): string {
  if (locale === "ru") return "Связаться";
  if (locale === "ro") return "Contactează-ne";
  return "Contact Us";
}
