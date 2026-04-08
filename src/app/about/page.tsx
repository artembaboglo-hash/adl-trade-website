import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard } from "@/components/ui/Cards";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Company",
  description: "Learn about ADL Trade mission, vision, values, and market presence."
};

const values = [
  { title: "Mission", description: "Build dependable bridges between global suppliers and local market demand." },
  { title: "Vision", description: "Be the most trusted distribution and market-entry partner in the region." },
  { title: "Values", description: "Integrity, execution excellence, long-term cooperation, and accountability." }
];

const services = [
  "Import",
  "Distribution",
  "Market Entry Support",
  "Retail Cooperation",
  "Trade Marketing",
  "Logistics Coordination"
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="A structured company built for long-term B2B partnerships"
        subtitle="ADL Trade combines local market insight with disciplined execution to support suppliers, buyers, and retail partners."
      />

      <section className="section-space">
        <div className="container-main">
          <SectionHeader
            title="Company Overview"
            description="We operate as a professional B2B platform for import, distribution, and commercial development in Moldova and nearby markets."
          />
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-main">
          <SectionHeader title="Mission, Vision, Values" center />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.title} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <SectionHeader title="What We Do" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-medium">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-main grid gap-6 md:grid-cols-2">
          <ValueCard
            title="Market Presence"
            description="ADL Trade supports category development across modern trade, local retail, wholesalers, HoReCa, and convenience channels."
          />
          <ValueCard
            title="Why ADL Trade"
            description="Partners choose us for transparent processes, local market understanding, and stable long-term execution."
          />
          <ValueCard
            title="Team & Leadership"
            description="Leadership and team profile section placeholder for future expansion with biographies and operational responsibilities."
          />
        </div>
      </section>

      <CTASection
        title="Build your next growth phase with ADL Trade"
        description="Our team is open to strategic partnerships with suppliers, buyers, and institutional business partners."
      />
    </>
  );
}
