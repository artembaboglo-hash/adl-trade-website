import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard, CategoryCard, PartnerCard } from "@/components/ui/Cards";
import { buyerPartners } from "@/data/buyers";
import { categories } from "@/data/categories";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Buyers",
  description: "Partner with ADL Trade for reliable product supply and category growth."
};

export default function BuyersPage() {
  return (
    <>
      <HeroSection
        title="Reliable B2B cooperation for chains, wholesalers, local trade, and HoReCa"
        subtitle="ADL Trade supports buyer partners with dependable supply coordination, portfolio relevance, and practical market support."
      />

      <section className="section-space">
        <div className="container-main grid gap-5 md:grid-cols-3">
          <ValueCard title="Who We Work With" description="Retail chains, local trade, wholesalers, HoReCa, and gas station retail operators." />
          <ValueCard title="What Buyers Get" description="Stable product availability, tailored category direction, and responsive account support." />
          <ValueCard title="Cooperation Benefits" description="Efficiency in assortment planning with partnership-focused execution." />
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-main">
          <SectionHeader title="Product Directions" center />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <CategoryCard key={item} title={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <SectionHeader title="Current Buyer Partners" description="Cards support both logos and text-only partner representation." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {buyerPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                name={partner.name}
                subtitle={`${partner.type} · ${partner.category}`}
                description={partner.description}
                logo={partner.logo}
                featured={partner.featured}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-main">
          <InquiryForm
            title="Buyer Inquiry Form"
            submitLabel="Send Buyer Inquiry"
            fields={[
              { name: "companyName", label: "Company Name", required: true },
              { name: "contactPerson", label: "Contact Person", required: true },
              { name: "position", label: "Position" },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "businessType", label: "Business Type", required: true },
              { name: "categoryOfInterest", label: "Category of Interest", required: true },
              { name: "message", label: "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Strengthen your assortment with ADL Trade"
        description="Tell us your channel focus and category priorities to start a relevant cooperation conversation."
      />
    </>
  );
}
