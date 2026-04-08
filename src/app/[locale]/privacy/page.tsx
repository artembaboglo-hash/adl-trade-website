import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { isValidLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: locale === "ro" ? "Politica de Confidențialitate" : locale === "ru" ? "Политика Конфиденциальности" : "Privacy Policy",
    description: locale === "ro" ? "Politica de confidențialitate ADL Trade." : locale === "ru" ? "Политика конфиденциальности ADL Trade." : "Privacy policy and personal data handling statement for ADL Trade."
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return (
    <section className="section-space">
      <div className="container-main max-w-4xl">
        <SectionHeader title={locale === "ro" ? "Politica de Confidențialitate" : locale === "ru" ? "Политика Конфиденциальности" : "Privacy Policy"} />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600">
          <p>{locale === "ro" ? "ADL Trade tratează datele personale și comerciale în mod responsabil. Acesta este un text placeholder juridic." : locale === "ru" ? "ADL Trade ответственно обрабатывает персональные и бизнес-данные. Это юридический placeholder-текст." : "ADL Trade is committed to responsible handling of personal and business information. This page is a placeholder for the full legal privacy text."}</p>
        </div>
      </div>
    </section>
  );
}
