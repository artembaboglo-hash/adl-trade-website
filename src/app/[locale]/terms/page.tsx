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
      ? "Termeni / Notă legală"
      : locale === "ru"
        ? "Условия и правовая информация"
        : "Terms / Legal Notice";
  const description =
    locale === "ro"
      ? "Termeni de utilizare ADL Trade."
      : locale === "ru"
        ? "Условия использования сайта ADL Trade."
        : "Legal notice and terms of use for ADL Trade website.";
  return pageMetadata(locale, "/terms", { title, description });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();
  return (
    <section className="section-space">
      <div className="container-main max-w-4xl">
        <SectionHeader
          title={
            locale === "ro"
              ? "Termeni / Notă legală"
              : locale === "ru"
                ? "Условия и правовая информация"
                : "Terms / Legal Notice"
          }
        />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600">
          <p>
            {locale === "ro"
              ? "Aceasta pagina este un placeholder pentru termenii finali si conditiile de utilizare."
              : locale === "ru"
                ? "Eta stranitsa yavlyaetsya placeholder dlya finalnykh usloviy i pravovoy informatsii."
                : "This legal page is a placeholder for final terms and conditions, website use policy, and liability disclaimers."}
          </p>
        </div>
      </div>
    </section>
  );
}
