import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { ro } from "./ro";
import { ru } from "./ru";
import type { AboutContent, AboutContentSource } from "./types";

export type { AboutContent, AboutContentSource } from "./types";

export const aboutContent: Record<Locale, AboutContentSource> = {
  en,
  ro,
  ru
};

export function getAboutContent(locale: Locale): AboutContent {
  return aboutContent[locale];
}
