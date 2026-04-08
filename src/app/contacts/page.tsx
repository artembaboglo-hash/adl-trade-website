import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { contactPoints } from "@/data/contactPoints";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contact ADL Trade for supplier, buyer, career, and business inquiries."
};

export default function ContactsPage() {
  return (
    <>
      <HeroSection
        title="Contact ADL Trade"
        subtitle="Reach the right team for supplier, buyer, career, and general partnership discussions."
      />

      <section className="section-space">
        <div className="container-main grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader title="Main Contact Details" />
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">Email</p>
              <p className="text-base font-semibold text-body">info@adltrade.md</p>
              <p className="mt-4 text-sm text-slate-600">Phone</p>
              <p className="text-base font-semibold text-body">+373 22 000 000</p>
              <p className="mt-4 text-sm text-slate-600">Address</p>
              <p className="text-base font-semibold text-body">Chisinau, Republic of Moldova</p>
            </div>

            <SectionHeader title="Departmental Contacts" />
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
              title="Contact Form"
              submitLabel="Send Message"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Company", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "subject", label: "Subject", required: true },
                { name: "message", label: "Message", textarea: true, required: true }
              ]}
            />
            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
              Map placeholder (Google Maps / Yandex / OpenStreetMap embed later)
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded bg-secondary px-3 py-2">WhatsApp</span>
              <span className="rounded bg-secondary px-3 py-2">Telegram</span>
              <span className="rounded bg-secondary px-3 py-2">LinkedIn</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
