import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard, CategoryCard, PartnerCard } from "@/components/ui/Cards";
import { buyerPartners } from "@/data/buyers";
import { categories } from "@/data/categories";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { isValidLocale, withLocalePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: locale === "ro" ? "Cumpărători" : locale === "ru" ? "Покупателям" : "Buyers",
    description:
      locale === "ro"
        ? "Colaborați cu ADL Trade pentru aprovizionare stabilă și dezvoltarea categoriilor."
        : locale === "ru"
          ? "Сотрудничайте с ADL Trade для стабильных поставок и развития категорий."
          : "Partner with ADL Trade for reliable product supply and category growth."
  };
}

export default async function BuyersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return (
    <>
      <HeroSection
        title={locale === "ro" ? "Cooperare B2B fiabilă pentru retail, wholesale și HoReCa" : locale === "ru" ? "Надежное B2B-сотрудничество для ритейла, опта и HoReCa" : "Reliable B2B cooperation for chains, wholesalers, local trade, and HoReCa"}
        subtitle={locale === "ro" ? "ADL Trade oferă aprovizionare coordonată, portofoliu relevant și suport comercial." : locale === "ru" ? "ADL Trade обеспечивает координированные поставки, релевантный портфель и коммерческую поддержку." : "ADL Trade supports buyer partners with dependable supply coordination, portfolio relevance, and practical market support."}
      />
      <section className="section-space">
        <div className="container-main grid gap-5 md:grid-cols-3">
          <ValueCard title={locale === "ro" ? "Cu cine lucrăm" : locale === "ru" ? "С кем работаем" : "Who We Work With"} description={locale === "ro" ? "Rețele retail, comerț local, wholesale, HoReCa și retail benzinării." : locale === "ru" ? "Розничные сети, локальная торговля, опт, HoReCa и АЗС-ритейл." : "Retail chains, local trade, wholesalers, HoReCa, and gas station retail operators."} />
          <ValueCard title={locale === "ro" ? "Ce oferim" : locale === "ru" ? "Что получают покупатели" : "What Buyers Get"} description={locale === "ro" ? "Disponibilitate stabilă, direcție clară pe categorii și suport de cont." : locale === "ru" ? "Стабильная доступность, фокус по категориям и поддержка аккаунта." : "Stable product availability, tailored category direction, and responsive account support."} />
          <ValueCard title={locale === "ro" ? "Beneficii" : locale === "ru" ? "Преимущества" : "Cooperation Benefits"} description={locale === "ro" ? "Eficiență în portofoliu și execuție orientată pe parteneriat." : locale === "ru" ? "Эффективное управление ассортиментом и партнерская реализация." : "Efficiency in assortment planning with partnership-focused execution."} />
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="container-main">
          <SectionHeader title={locale === "ro" ? "Direcții de Produs" : locale === "ru" ? "Товарные Направления" : "Product Directions"} center />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <CategoryCard key={item} title={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-main">
          <SectionHeader title={locale === "ro" ? "Parteneri Cumpărători Curenți" : locale === "ru" ? "Текущие Партнеры-Покупатели" : "Current Buyer Partners"} description={locale === "ro" ? "Carduri cu logo sau doar text, după nevoie." : locale === "ru" ? "Поддержка карточек с логотипом и текстовых карточек." : "Cards support both logos and text-only partner representation."} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {buyerPartners.map((partner) => (
              <PartnerCard key={partner.id} name={partner.name} subtitle={`${partner.type} · ${partner.category}`} description={partner.description} logo={partner.logo} featured={partner.featured} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="container-main">
          <InquiryForm
            title={locale === "ro" ? "Formular Cumpărător" : locale === "ru" ? "Форма для Покупателей" : "Buyer Inquiry Form"}
            submitLabel={locale === "ro" ? "Trimite Cererea" : locale === "ru" ? "Отправить Запрос" : "Send Buyer Inquiry"}
            fields={[
              { name: "companyName", label: locale === "ro" ? "Nume Companie" : locale === "ru" ? "Название Компании" : "Company Name", required: true },
              { name: "contactPerson", label: locale === "ro" ? "Persoană de Contact" : locale === "ru" ? "Контактное Лицо" : "Contact Person", required: true },
              { name: "position", label: locale === "ro" ? "Poziție" : locale === "ru" ? "Должность" : "Position" },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone", type: "tel", required: true },
              { name: "businessType", label: locale === "ro" ? "Tip Business" : locale === "ru" ? "Тип Бизнеса" : "Business Type", required: true },
              { name: "categoryOfInterest", label: locale === "ro" ? "Categorie de Interes" : locale === "ru" ? "Интересующая Категория" : "Category of Interest", required: true },
              { name: "message", label: locale === "ro" ? "Mesaj" : locale === "ru" ? "Сообщение" : "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>
      <CTASection title={locale === "ro" ? "Consolidați portofoliul cu ADL Trade" : locale === "ru" ? "Усильте ассортимент вместе с ADL Trade" : "Strengthen your assortment with ADL Trade"} description={locale === "ro" ? "Trimiteți focusul pe canale și categorii pentru a începe cooperarea." : locale === "ru" ? "Сообщите приоритеты по каналам и категориям для старта сотрудничества." : "Tell us your channel focus and category priorities to start a relevant cooperation conversation."} ctaHref={withLocalePath(locale, "/contacts")} />
    </>
  );
}
