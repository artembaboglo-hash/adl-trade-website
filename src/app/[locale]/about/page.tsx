import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard } from "@/components/ui/Cards";
import { CTASection } from "@/components/sections/CTASection";
import { isValidLocale, withLocalePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: locale === "ro" ? "Despre Companie" : locale === "ru" ? "О Компании" : "About Company",
    description:
      locale === "ro"
        ? "Aflați despre misiunea, viziunea și valorile ADL Trade."
        : locale === "ru"
          ? "Узнайте о миссии, видении и ценностях ADL Trade."
          : "Learn about ADL Trade mission, vision, values, and market presence."
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const values = [
    {
      title: locale === "ro" ? "Misiune" : locale === "ru" ? "Миссия" : "Mission",
      description:
        locale === "ro"
          ? "Construim punți de încredere între furnizorii globali și cererea locală."
          : locale === "ru"
            ? "Создаем надежный мост между глобальными поставщиками и локальным спросом."
            : "Build dependable bridges between global suppliers and local market demand."
    },
    {
      title: locale === "ro" ? "Viziune" : locale === "ru" ? "Видение" : "Vision",
      description:
        locale === "ro"
          ? "Să fim cel mai de încredere partener de distribuție din regiune."
          : locale === "ru"
            ? "Быть самым надежным партнером по дистрибуции в регионе."
            : "Be the most trusted distribution and market-entry partner in the region."
    },
    {
      title: locale === "ro" ? "Valori" : locale === "ru" ? "Ценности" : "Values",
      description:
        locale === "ro"
          ? "Integritate, excelență în execuție și parteneriate pe termen lung."
          : locale === "ru"
            ? "Честность, качество исполнения и долгосрочное партнерство."
            : "Integrity, execution excellence, long-term cooperation, and accountability."
    }
  ];

  return (
    <>
      <HeroSection
        title={
          locale === "ro"
            ? "Companie structurată pentru parteneriate B2B pe termen lung"
            : locale === "ru"
              ? "Структурированная компания для долгосрочного B2B-партнерства"
              : "A structured company built for long-term B2B partnerships"
        }
        subtitle={
          locale === "ro"
            ? "ADL Trade combină expertiza locală cu execuția disciplinată pentru furnizori și cumpărători."
            : locale === "ru"
              ? "ADL Trade сочетает локальную экспертизу и дисциплину исполнения для поставщиков и покупателей."
              : "ADL Trade combines local market insight with disciplined execution to support suppliers, buyers, and retail partners."
        }
      />
      <section className="section-space">
        <div className="container-main">
          <SectionHeader
            title={locale === "ro" ? "Prezentare Companie" : locale === "ru" ? "Обзор Компании" : "Company Overview"}
            description={
              locale === "ro"
                ? "Operăm ca platformă B2B pentru import, distribuție și dezvoltare comercială."
                : locale === "ru"
                  ? "Мы работаем как B2B-платформа по импорту, дистрибуции и коммерческому развитию."
                  : "We operate as a professional B2B platform for import, distribution, and commercial development in Moldova and nearby markets."
            }
          />
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="container-main">
          <SectionHeader title={locale === "ro" ? "Misiune, Viziune, Valori" : locale === "ru" ? "Миссия, Видение, Ценности" : "Mission, Vision, Values"} center />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.title} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title={locale === "ro" ? "Construim următoarea etapă de creștere împreună" : locale === "ru" ? "Строим следующий этап роста вместе" : "Build your next growth phase with ADL Trade"}
        description={
          locale === "ro"
            ? "Suntem deschiși pentru parteneriate strategice cu furnizori, cumpărători și parteneri de business."
            : locale === "ru"
              ? "Мы открыты к стратегическим партнерствам с поставщиками и покупателями."
              : "Our team is open to strategic partnerships with suppliers, buyers, and institutional business partners."
        }
        ctaHref={withLocalePath(locale, "/contacts")}
      />
    </>
  );
}
