import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { contactTopicChannels } from "@/data/contact-topics";
import { contactsPageByLocale } from "@/data/contacts-page";
import { getHomePhotos } from "@/data/home-photos";
import { siteConfig } from "@/data/site";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo-metadata";

function officeTitle(officeId: "moldova" | "romania", t: (typeof contactsPageByLocale)["ru"]) {
  return officeId === "moldova" ? t.moldovaOfficeTitle : t.romaniaOfficeTitle;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  const t = contactsPageByLocale[locale];
  return pageMetadata(locale, "/contacts", {
    title: locale === "ro" ? "Contacte" : locale === "ru" ? "Контакты" : "Contacts",
    description: t.metaDescription
  });
}

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();
  const t = contactsPageByLocale[locale];
  const photos = getHomePhotos(locale);

  return (
    <>
      <HeroSection
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        eyebrow={t.heroEyebrow}
        size="compact"
        media={photos.contactsHero}
      />

      <section className="relative overflow-hidden border-t border-slate-200/80 bg-secondary py-10 md:py-14">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-gradient-to-br from-accent-teal/[0.12] via-cyan-200/25 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr from-accent-teal/[0.08] to-cyan-100/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-teal/15 to-transparent"
          aria-hidden
        />

        <div className="container-main relative">
          <SectionHeader
            eyebrow={t.officesEyebrow}
            title={t.officesSectionTitle}
            description={t.officesMapLabel}
            eyebrowAccent="teal"
            maxWidthClass="max-w-2xl"
            descriptionClassName="mt-3 max-w-[60ch] text-xs leading-relaxed text-slate-600 md:text-sm"
          />

          <div className="mt-6 flex flex-col gap-8 lg:mt-8 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-12">
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 sm:gap-6 lg:min-h-0 lg:grid-cols-2 lg:grid-rows-1 lg:items-stretch">
              {siteConfig.contact.offices.map((office) => {
                const isMd = office.id === "moldova";
                return (
                    <article
                      key={office.id}
                      className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card transition-all duration-300 ease-out hover:border-accent-teal/30 hover:shadow-md"
                    >
                      <div className="relative shrink-0 border-b border-slate-100 bg-gradient-to-r from-accent-teal/[0.07] via-white to-cyan-50/50 px-4 py-3">
                        <div
                          className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-gradient-to-b from-accent-tealDark to-accent-teal"
                          aria-hidden
                        />
                        <h3 className="pl-2 text-base font-semibold text-body">{officeTitle(office.id, t)}</h3>
                      </div>

                      <div className="flex min-h-0 flex-1 flex-col">
                        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wide text-accent-teal">
                              {t.labelAddress}
                            </p>
                            <address className="mt-1 not-italic text-xs leading-relaxed text-slate-700">
                              {office.addressLines.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </address>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wide text-accent-teal">
                                {t.labelEmail}
                              </p>
                              <a
                                href={`mailto:${office.email}`}
                                className="mt-0.5 inline-block text-xs font-medium text-primary hover:text-accent-teal hover:underline"
                              >
                                {office.email}
                              </a>
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wide text-accent-teal">
                                {t.labelPhone}
                              </p>
                              <a
                                href={`tel:${office.phone.replace(/\s/g, "")}`}
                                className="mt-0.5 inline-block text-xs font-medium text-body hover:text-accent-teal"
                              >
                                {office.phone}
                              </a>
                            </div>
                          </div>

                          <div className="border-t border-slate-100 pt-3">
                            <p className="text-[10px] font-semibold uppercase tracking-wide text-accent-teal">
                              {t.topicsInlineTitle}
                            </p>
                            <div className="mt-2 overflow-x-auto rounded-lg border border-slate-100/80 bg-slate-50/40">
                              <table className="w-full min-w-[220px] border-collapse text-left text-xs">
                                <tbody>
                                  {contactTopicChannels.map((row, i) => {
                                    const ch = isMd ? row.moldova : row.romania;
                                    return (
                                      <tr
                                        key={row.id}
                                        className={
                                          i % 2 === 0
                                            ? "bg-white/80"
                                            : "bg-accent-teal/[0.04]"
                                        }
                                      >
                                        <th
                                          scope="row"
                                          className="py-2 pl-3 pr-2 align-top font-semibold text-slate-800"
                                        >
                                          {t.topicTitles[row.id]}
                                        </th>
                                        <td className="py-2 pr-3 align-top">
                                          <a
                                            href={`mailto:${ch.email}`}
                                            className="block font-medium text-primary hover:text-accent-teal hover:underline"
                                          >
                                            {ch.email}
                                          </a>
                                          <a
                                            href={`tel:${ch.phone.replace(/\s/g, "")}`}
                                            className="mt-0.5 block text-slate-600 hover:text-accent-teal"
                                          >
                                            {ch.phone}
                                          </a>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="shrink-0 border-t border-slate-100 bg-gradient-to-t from-slate-50/60 to-transparent px-4 pb-4 pt-3">
                          <iframe
                            title={`${officeTitle(office.id, t)} — map`}
                            src={office.mapEmbedUrl}
                            className="h-40 w-full rounded-lg border border-slate-200/90 bg-slate-100 shadow-sm sm:h-44"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                    </article>
                );
              })}
            </div>

            <aside className="flex w-full shrink-0 flex-col lg:w-[min(100%,22rem)] xl:w-96">
              <InquiryForm
                fillHeight
                className="border-t-[3px] border-t-accent-teal p-5 shadow-card md:p-6"
                title={t.formTitle}
                intro={t.formIntro}
                submitLabel={t.formSubmit}
                formSource="contacts"
                locale={locale}
                fields={[
                  { name: "name", label: locale === "ro" ? "Nume" : locale === "ru" ? "Имя" : "Name", required: true },
                  {
                    name: "company",
                    label: locale === "ro" ? "Companie" : locale === "ru" ? "Компания" : "Company",
                    required: true
                  },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone", type: "tel" },
                  {
                    name: "officePreference",
                    label:
                      locale === "ro"
                        ? "Oficiu (opț.)"
                        : locale === "ru"
                          ? "Офис (необяз.)"
                          : "Office (opt.)"
                  },
                  {
                    name: "subject",
                    label: locale === "ro" ? "Subiect" : locale === "ru" ? "Тема" : "Subject",
                    required: true
                  },
                  {
                    name: "message",
                    label: locale === "ro" ? "Mesaj" : locale === "ru" ? "Сообщение" : "Message",
                    textarea: true,
                    required: true
                  }
                ]}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
