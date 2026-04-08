import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard, CategoryCard, PartnerCard } from "@/components/ui/Cards";
import { supplierPartners } from "@/data/suppliers";
import { categories } from "@/data/categories";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Suppliers",
  description: "Work with ADL Trade for distribution and market entry in Moldova."
};

export default function SuppliersPage() {
  return (
    <>
      <HeroSection
        title="Bring your brand to Moldova with a trusted distribution partner"
        subtitle="ADL Trade helps manufacturers and brands launch, scale, and sustain performance across relevant retail channels."
      />

      <section className="section-space">
        <div className="container-main grid gap-5 md:grid-cols-3">
          <ValueCard title="Why Work With Us" description="Structured route-to-market planning and clear execution ownership." />
          <ValueCard title="What We Offer" description="Commercial strategy, channel onboarding, distribution, and local sales support." />
          <ValueCard title="Cooperation Model" description="Flexible models aligned with category maturity and growth objectives." />
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-main">
          <SectionHeader title="Categories We Work With" center />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <CategoryCard key={item} title={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <SectionHeader title="Current Supplier Partners" description="Logo cards and text-only cards are both supported." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supplierPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                name={partner.name}
                subtitle={`${partner.country} · ${partner.category}`}
                description={partner.description}
                logo={partner.logo}
                featured={partner.featured}
                website={partner.website}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-main">
          <InquiryForm
            title="Supplier Inquiry Form"
            submitLabel="Send Supplier Inquiry"
            showUploadPlaceholder
            fields={[
              { name: "companyName", label: "Company Name", required: true },
              { name: "country", label: "Country", required: true },
              { name: "contactPerson", label: "Contact Person", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "brandName", label: "Brand Name", required: true },
              { name: "productCategory", label: "Product Category", required: true },
              { name: "website", label: "Website", type: "url" },
              { name: "message", label: "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Discuss your Moldova market-entry strategy"
        description="Share your portfolio and goals, and we will shape a practical cooperation plan."
      />
    </>
  );
}
