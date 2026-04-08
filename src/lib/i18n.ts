export const locales = ["en", "ro", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookieName = "NEXT_LOCALE";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function stripLocaleFromPath(pathname: string): string {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];
  if (maybeLocale && isValidLocale(maybeLocale)) {
    const next = "/" + parts.slice(2).join("/");
    return next === "/" ? "/" : next.replace(/\/+$/, "");
  }
  return pathname === "" ? "/" : pathname;
}

export function withLocalePath(locale: Locale, pathname: string): string {
  const clean = stripLocaleFromPath(pathname);
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}
