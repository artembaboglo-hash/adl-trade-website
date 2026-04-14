import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  const title =
    locale === "ro"
      ? "Politica de Confidențialitate"
      : locale === "ru"
        ? "Политика конфиденциальности"
        : "Privacy Policy";
  const description =
    locale === "ro"
      ? "Politica de confidențialitate ADL Trade."
      : locale === "ru"
        ? "Политика конфиденциальности ADL Trade."
        : "Privacy policy and personal data handling statement for ADL Trade.";
  return pageMetadata(locale, "/privacy", { title, description });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();
  return (
    <section className="section-space">
      <div className="container-main max-w-4xl">
        <SectionHeader
          title={
            locale === "ro"
              ? "Politica de Confidențialitate"
              : locale === "ru"
                ? "Политика конфиденциальности"
                : "Privacy Policy"
          }
        />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600">
          <p>{locale === "ro" ? "ADL Trade tratează datele personale și comerciale în mod responsabil. Acesta este un text placeholder juridic." : locale === "ru" ? "ADL Trade ответственно обрабатывает персональные и бизнес - данные. Это юридический placeholder - текст." : "ADL Trade is committed to responsible handling of personal and business information. This page is a placeholder for the full legal privacy text."}</p>
        </div>
      </div>
    </section>
  );
}
