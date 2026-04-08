import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { contactPoints } from "@/data/contactPoints";
import { isValidLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: locale === "ro" ? "Contacte" : locale === "ru" ? "Контакты" : "Contacts",
    description:
      locale === "ro"
        ? "Contactați ADL Trade pentru solicitări comerciale."
        : locale === "ru"
          ? "Свяжитесь с ADL Trade по коммерческим вопросам."
          : "Contact ADL Trade for supplier, buyer, career, and business inquiries."
  };
}

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <>
      <HeroSection
        title={locale === "ro" ? "Contactați ADL Trade" : locale === "ru" ? "Свяжитесь с ADL Trade" : "Contact ADL Trade"}
        subtitle={locale === "ro" ? "Ajungeți la echipa potrivită pentru furnizori, cumpărători sau carieră." : locale === "ru" ? "Свяжитесь с нужной командой: поставки, закупки или карьера." : "Reach the right team for supplier, buyer, career, and general partnership discussions."}
      />
      <section className="section-space">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader title={locale === "ro" ? "Detalii Principale" : locale === "ru" ? "Основные Контакты" : "Main Contact Details"} />
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">Email</p>
              <p className="text-base font-semibold text-body">info@adltrade.md</p>
              <p className="mt-4 text-sm text-slate-600">{locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone"}</p>
              <p className="text-base font-semibold text-body">+373 22 000 000</p>
            </div>
            <SectionHeader title={locale === "ro" ? "Contacte pe Departamente" : locale === "ru" ? "Контакты по Отделам" : "Departmental Contacts"} />
            <div className="mt-6 grid gap-4">
              {contactPoints.map((point) => (
                <article key={point.title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-body">{point.title}</p>
                  <p className="text-sm text-slate-600">{point.email}</p>
                  <p className="text-sm text-slate-600">{point.phone}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <InquiryForm
              title={locale === "ro" ? "Formular de Contact" : locale === "ru" ? "Контактная Форма" : "Contact Form"}
              submitLabel={locale === "ro" ? "Trimite Mesajul" : locale === "ru" ? "Отправить Сообщение" : "Send Message"}
              fields={[
                { name: "name", label: locale === "ro" ? "Nume" : locale === "ru" ? "Имя" : "Name", required: true },
                { name: "company", label: locale === "ro" ? "Companie" : locale === "ru" ? "Компания" : "Company", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: locale === "ro" ? "Telefon" : locale === "ru" ? "Телефон" : "Phone", type: "tel" },
                { name: "subject", label: locale === "ro" ? "Subiect" : locale === "ru" ? "Тема" : "Subject", required: true },
                { name: "message", label: locale === "ro" ? "Mesaj" : locale === "ru" ? "Сообщение" : "Message", textarea: true, required: true }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
