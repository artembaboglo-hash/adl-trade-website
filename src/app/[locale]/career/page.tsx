import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard } from "@/components/ui/Cards";
import { VacancyCard } from "@/components/career/VacancyCard";
import { CollapsibleInquiryForm } from "@/components/forms/CollapsibleInquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { careerPageByLocale } from "@/data/career-page";
import { careerVacanciesByLocale } from "@/data/career-vacancies";
import { contactCtaLabel, resolveLocale, withLocalePath } from "@/lib/i18n";

const VACANCIES_SECTION_ID = "career-vacancies";
const APPLICATION_SECTION_ID = "career-application";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  const copy = careerPageByLocale[locale];
  return {
    title: locale === "ro" ? "Carieră" : locale === "ru" ? "Карьера" : "Career",
    description: copy.metaDescription
  };
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();
  const t = careerPageByLocale[locale];
  const vacancies = careerVacanciesByLocale[locale];
  const openCount = vacancies.length;

  const stripOpenText = t.vacanciesStripOpen.replace(/\{count\}/g, String(openCount));

  return (
    <>
      <HeroSection title={t.heroTitle} subtitle={t.heroSubtitle} eyebrow={t.heroEyebrow} size="compact" />

      <section
        id={VACANCIES_SECTION_ID}
        className="section-space-dense scroll-mt-24 border-t border-slate-200/80"
      >
        <div className="container-main">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="min-w-0 max-w-3xl">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-teal md:text-[11px] md:tracking-[0.26em]">
                  {t.vacanciesEyebrow}
                </p>
                <span
                  className="h-0.5 w-12 rounded-full bg-gradient-to-r from-accent-tealDark via-accent-teal to-teal-300 md:w-14"
                  aria-hidden
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-body md:text-3xl md:leading-snug">
                {t.vacanciesTitle}
              </h2>
              {openCount > 0 ? (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-accent-teal/35 bg-gradient-to-r from-accent-teal/[0.12] to-cyan-50/50 px-3 py-1 text-xs font-semibold text-accent-tealDark">
                    {stripOpenText}
                  </span>
                </div>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">
                  {t.vacanciesStripEmpty}
                </p>
              )}
            </div>
            <a
              href={`#${APPLICATION_SECTION_ID}`}
              className="inline-flex shrink-0 text-sm font-semibold text-accent-teal hover:text-accent-tealDark hover:underline sm:pt-1"
            >
              {t.vacanciesStripEmptyLink}
            </a>
          </div>

          {openCount > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {vacancies.map((v) => (
                <VacancyCard
                  key={v.id}
                  vacancy={v}
                  openBadge={t.vacanciesOpenBadge}
                  applyLabel={t.vacanciesApplyCta}
                  applicationSectionId={APPLICATION_SECTION_ID}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-accent-teal/25 bg-white/90 p-6 shadow-sm md:p-8">
              <h3 className="text-base font-semibold text-body md:text-lg">{t.vacanciesEmptyTitle}</h3>
              <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-slate-600">{t.vacanciesEmptyBody}</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-space-dense">
        <div className="container-main">
          <SectionHeader eyebrow={t.valueEyebrow} title={t.valueTitle} eyebrowAccent="teal" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
            {t.valueCards.map((card) => (
              <ValueCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      <section id={APPLICATION_SECTION_ID} className="section-space-dense scroll-mt-24 bg-secondary">
        <div className="container-main">
          <CollapsibleInquiryForm
            openWhenHash={APPLICATION_SECTION_ID}
            expandLabel={t.formToggleExpand}
            collapseLabel={t.formToggleCollapse}
            title={t.formTitle}
            intro={t.formIntro}
            submitLabel={t.formSubmit}
            showUploadPlaceholder
            uploadLabel={t.uploadLabel}
            uploadHint={t.uploadHint}
            fields={[
              { name: "fullName", label: locale === "ro" ? "Nume complet" : locale === "ru" ? "Полное имя" : "Full name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone", type: "tel", required: true },
              { name: "department", label: locale === "ro" ? "Domeniu / departament de interes" : locale === "ru" ? "Направление или отдел" : "Area / department of interest", required: true },
              { name: "message", label: locale === "ro" ? "Mesaj" : locale === "ru" ? "Сообщение" : "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>

      <CTASection
        variant="emphasis"
        title={t.ctaTitle}
        description={t.ctaDescription}
        ctaHref={withLocalePath(locale, "/contacts")}
        ctaLabel={contactCtaLabel(locale)}
        sectionClassName="section-space-dense"
      />
    </>
  );
}
