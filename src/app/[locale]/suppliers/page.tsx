import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard, CategoryCard, PartnerCard } from "@/components/ui/Cards";
import { supplierPartners } from "@/data/suppliers";
import { categories } from "@/data/categories";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { isValidLocale, withLocalePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: locale === "ro" ? "Furnizori" : locale === "ru" ? "Поставщикам" : "Suppliers",
    description:
      locale === "ro"
        ? "Colaborați cu ADL Trade pentru distribuție și intrare pe piața Moldovei."
        : locale === "ru"
          ? "Сотрудничайте с ADL Trade для дистрибуции и выхода на рынок Молдовы."
          : "Work with ADL Trade for distribution and market entry in Moldova."
  };
}

export default async function SuppliersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return (
    <>
      <HeroSection
        title={locale === "ro" ? "Dezvoltați brandul în Moldova cu un partener de încredere" : locale === "ru" ? "Развивайте бренд в Молдове с надежным партнером" : "Bring your brand to Moldova with a trusted distribution partner"}
        subtitle={locale === "ro" ? "Sprijinim producători și branduri cu lansare, scalare și execuție stabilă." : locale === "ru" ? "Помогаем производителям и брендам с запуском, масштабированием и стабильным исполнением." : "ADL Trade helps manufacturers and brands launch, scale, and sustain performance across relevant retail channels."}
      />
      <section className="section-space">
        <div className="container-main grid gap-5 md:grid-cols-3">
          <ValueCard title={locale === "ro" ? "De ce noi" : locale === "ru" ? "Почему мы" : "Why Work With Us"} description={locale === "ro" ? "Planificare structurată și responsabilitate clară de execuție." : locale === "ru" ? "Структурированный подход и прозрачная ответственность." : "Structured route-to-market planning and clear execution ownership."} />
          <ValueCard title={locale === "ro" ? "Ce oferim" : locale === "ru" ? "Что мы предлагаем" : "What We Offer"} description={locale === "ro" ? "Strategie comercială, distribuție și suport local de vânzări." : locale === "ru" ? "Коммерческая стратегия, дистрибуция и локальная поддержка продаж." : "Commercial strategy, channel onboarding, distribution, and local sales support."} />
          <ValueCard title={locale === "ro" ? "Model de cooperare" : locale === "ru" ? "Модель сотрудничества" : "Cooperation Model"} description={locale === "ro" ? "Modele flexibile aliniate cu obiectivele categoriei." : locale === "ru" ? "Гибкие модели под цели категории и бренда." : "Flexible models aligned with category maturity and growth objectives."} />
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="container-main">
          <SectionHeader title={locale === "ro" ? "Categorii cu care lucrăm" : locale === "ru" ? "Категории, с которыми работаем" : "Categories We Work With"} center />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <CategoryCard key={item} title={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-main">
          <SectionHeader title={locale === "ro" ? "Parteneri Furnizori Curenți" : locale === "ru" ? "Текущие Партнеры-Поставщики" : "Current Supplier Partners"} description={locale === "ro" ? "Secțiunea suportă carduri cu logo și carduri text." : locale === "ru" ? "Поддерживаются карточки с логотипом и без него." : "Logo cards and text-only cards are both supported."} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supplierPartners.map((partner) => (
              <PartnerCard key={partner.id} name={partner.name} subtitle={`${partner.country} · ${partner.category}`} description={partner.description} logo={partner.logo} featured={partner.featured} website={partner.website} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="container-main">
          <InquiryForm
            title={locale === "ro" ? "Formular Furnizor" : locale === "ru" ? "Форма для Поставщиков" : "Supplier Inquiry Form"}
            submitLabel={locale === "ro" ? "Trimite Cererea" : locale === "ru" ? "Отправить Запрос" : "Send Supplier Inquiry"}
            showUploadPlaceholder
            fields={[
              { name: "companyName", label: locale === "ro" ? "Nume Companie" : locale === "ru" ? "Название Компании" : "Company Name", required: true },
              { name: "country", label: locale === "ro" ? "Țara" : locale === "ru" ? "Страна" : "Country", required: true },
              { name: "contactPerson", label: locale === "ro" ? "Persoană de Contact" : locale === "ru" ? "Контактное Лицо" : "Contact Person", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone", type: "tel", required: true },
              { name: "brandName", label: locale === "ro" ? "Brand" : locale === "ru" ? "Бренд" : "Brand Name", required: true },
              { name: "productCategory", label: locale === "ro" ? "Categorie Produs" : locale === "ru" ? "Категория Продукта" : "Product Category", required: true },
              { name: "website", label: locale === "ro" ? "Website" : locale === "ru" ? "Сайт" : "Website", type: "url" },
              { name: "message", label: locale === "ro" ? "Mesaj" : locale === "ru" ? "Сообщение" : "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>
      <CTASection title={locale === "ro" ? "Discutați strategia de intrare pe piață" : locale === "ru" ? "Обсудим стратегию выхода на рынок" : "Discuss your Moldova market-entry strategy"} description={locale === "ro" ? "Trimiteți portofoliul și obiectivele pentru un plan practic de cooperare." : locale === "ru" ? "Поделитесь портфелем и целями для практичного плана сотрудничества." : "Share your portfolio and goals, and we will shape a practical cooperation plan."} ctaHref={withLocalePath(locale, "/contacts")} />
    </>
  );
}
