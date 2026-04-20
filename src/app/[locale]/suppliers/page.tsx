import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard } from "@/components/ui/Cards";
import { DistributionChannelsSection } from "@/components/sections/DistributionChannelsSection";
import { PartnerLogoMarquee } from "@/components/sections/PartnerLogoMarquee";
import { CategoryPortfolioCard } from "@/components/sections/CategoryPortfolioSection";
import { supplierBrandLogos } from "@/data/partner-logos";
import { distributionChannelsByLocale } from "@/data/distribution-channels";
import { supplierPageByLocale } from "@/data/suppliers-page";
import { categorySectionByLocale } from "@/data/category-portfolio";
import { CollapsibleInquiryForm } from "@/components/forms/CollapsibleInquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { WidePhotoBanner } from "@/components/sections/WidePhotoBanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getHomePhotos } from "@/data/home-photos";
import { contactCtaLabel, resolveLocale, withLocalePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  const copy = supplierPageByLocale[locale];
  return pageMetadata(locale, "/suppliers", {
    title: locale === "ro" ? "Furnizori" : locale === "ru" ? "Поставщикам" : "Suppliers",
    description: copy.metaDescription
  });
}

export default async function SuppliersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();
  const t = supplierPageByLocale[locale];
  const categoryItems = categorySectionByLocale[locale].items;
  const photos = getHomePhotos(locale);
  return (
    <>
      <HeroSection
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        eyebrow={t.heroEyebrow}
        media={photos.splitSuppliers}
      />
      <RevealOnScroll>
        <section className="section-space">
          <div className="container-main">
            <SectionHeader eyebrow={t.valueEyebrow} title={t.valueTitle} eyebrowAccent="teal" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.valueCards.map((card) => (
                <ValueCard key={card.title} title={card.title} description={card.description} />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className="section-space bg-secondary">
          <div className="container-main">
            <SectionHeader title={t.categoriesTitle} description={t.categoriesFootnote} center />
            <WidePhotoBanner media={photos.categories} className="mt-8 sm:mt-10" />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
              {categoryItems.map((item) => (
                <CategoryPortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <DistributionChannelsSection
          headingId="suppliers-distribution-channels-heading"
          eyebrow={distributionChannelsByLocale[locale].eyebrow}
          title={distributionChannelsByLocale[locale].title}
          description={distributionChannelsByLocale[locale].lead}
          cards={distributionChannelsByLocale[locale].cards}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <section className="section-space">
          <div className="container-main">
            <SectionHeader title={t.partnersTitle} description={t.partnersDescription || undefined} />
            <PartnerLogoMarquee logos={supplierBrandLogos} variant="forward" className="mt-8" />
          </div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <section className="section-space bg-secondary">
          <div className="container-main">
            <CollapsibleInquiryForm
              expandLabel={t.formToggleExpand}
              collapseLabel={t.formToggleCollapse}
              title={t.formTitle}
              intro={t.formIntro}
              submitLabel={t.formSubmit}
              formSource="suppliers"
              locale={locale}
              showUploadPlaceholder
              uploadLabel={t.uploadLabel}
              uploadHint={t.uploadHint}
              fields={[
                { name: "companyName", label: locale === "ro" ? "Nume companie" : locale === "ru" ? "Название компании" : "Company name", required: true },
                { name: "country", label: locale === "ro" ? "Țara" : locale === "ru" ? "Страна" : "Country", required: true },
                { name: "contactPerson", label: locale === "ro" ? "Persoană de contact" : locale === "ru" ? "Контактное лицо" : "Contact person", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone", type: "tel", required: true },
                { name: "brandName", label: locale === "ro" ? "Brand / produs" : locale === "ru" ? "Бренд / продукт" : "Brand / product", required: true },
                { name: "productCategory", label: locale === "ro" ? "Categorie produs" : locale === "ru" ? "Категория продукта" : "Product category", required: true },
                { name: "website", label: locale === "ro" ? "Website" : locale === "ru" ? "Сайт" : "Website", type: "url" },
                { name: "message", label: locale === "ro" ? "Mesaj" : locale === "ru" ? "Сообщение" : "Message", textarea: true, required: true }
              ]}
            />
          </div>
        </section>
      </RevealOnScroll>
      <CTASection
        variant="emphasis"
        title={t.ctaTitle}
        description={t.ctaDescription}
        ctaHref={withLocalePath(locale, "/contacts")}
        ctaLabel={contactCtaLabel(locale)}
      />
    </>
  );
}
