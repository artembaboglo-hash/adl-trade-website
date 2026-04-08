import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueCard } from "@/components/ui/Cards";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { isValidLocale, withLocalePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: locale === "ro" ? "Carieră" : locale === "ru" ? "Карьера" : "Career",
    description:
      locale === "ro"
        ? "Explorați oportunitățile de carieră în ADL Trade."
        : locale === "ru"
          ? "Изучите карьерные возможности в ADL Trade."
          : "Explore career opportunities at ADL Trade and submit your application."
  };
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return (
    <>
      <HeroSection
        title={locale === "ro" ? "Construiește-ți cariera într-un mediu B2B dinamic" : locale === "ru" ? "Стройте карьеру в динамичной B2B-среде" : "Build your career in a dynamic B2B trade environment"}
        subtitle={locale === "ro" ? "Apreciem profesioniștii orientați spre responsabilitate și rezultate." : locale === "ru" ? "Мы ценим специалистов, ориентированных на ответственность и результат." : "ADL Trade values responsible professionals who want to contribute to meaningful long-term partnerships."}
      />
      <section className="section-space">
        <div className="container-main grid gap-5 md:grid-cols-3">
          <ValueCard title={locale === "ro" ? "De ce noi" : locale === "ru" ? "Почему мы" : "Why Work With Us"} description={locale === "ro" ? "Mediu profesionist, creștere și responsabilitate clară." : locale === "ru" ? "Профессиональная среда, рост и четкая зона ответственности." : "Professional environment, growth opportunities, and clear responsibilities."} />
          <ValueCard title={locale === "ro" ? "Cultură" : locale === "ru" ? "Культура" : "Team Culture"} description={locale === "ro" ? "Colaborare, inițiativă și execuție practică." : locale === "ru" ? "Сотрудничество, инициативность и практичная реализация." : "Collaborative mindset with practical execution and ownership."} />
          <ValueCard title={locale === "ro" ? "Dezvoltare" : locale === "ru" ? "Развитие" : "Development Focus"} description={locale === "ro" ? "Creștere profesională prin proiecte reale de piață." : locale === "ru" ? "Профессиональное развитие через реальные рыночные проекты." : "Career path support through real market projects and mentorship."} />
        </div>
      </section>
      <section className="section-space">
        <div className="container-main">
          <InquiryForm
            title={locale === "ro" ? "Formular de Aplicare" : locale === "ru" ? "Форма Отклика" : "Career Application Form"}
            submitLabel={locale === "ro" ? "Trimite Aplicația" : locale === "ru" ? "Отправить Заявку" : "Submit Application"}
            showUploadPlaceholder
            fields={[
              { name: "fullName", label: locale === "ro" ? "Nume Complet" : locale === "ru" ? "Полное Имя" : "Full Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone", type: "tel", required: true },
              { name: "department", label: locale === "ro" ? "Departament de Interes" : locale === "ru" ? "Интересующий Отдел" : "Department of Interest", required: true },
              { name: "message", label: locale === "ro" ? "Mesaj" : locale === "ru" ? "Сообщение" : "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>
      <CTASection title={locale === "ro" ? "Alătură-te ADL Trade" : locale === "ru" ? "Присоединяйтесь к ADL Trade" : "Join ADL Trade"} description={locale === "ro" ? "Dacă vrei impact real în business, vrem să te cunoaștem." : locale === "ru" ? "Если вы хотите реального бизнес-влияния, будем рады знакомству." : "If you are motivated by structured growth and business impact, we would like to hear from you."} ctaHref={withLocalePath(locale, "/contacts")} />
    </>
  );
}
