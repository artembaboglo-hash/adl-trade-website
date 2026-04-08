import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ValueCard } from "@/components/ui/Cards";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Career",
  description: "Explore career opportunities at ADL Trade and submit your application."
};

const departments = ["Sales", "Trade Marketing", "Logistics", "Finance", "Business Development", "Operations"];
const positions = ["Key Account Manager", "Trade Marketing Specialist", "Logistics Coordinator"];

export default function CareerPage() {
  return (
    <>
      <HeroSection
        title="Build your career in a dynamic B2B trade environment"
        subtitle="ADL Trade values responsible professionals who want to contribute to meaningful long-term partnerships."
      />

      <section className="section-space">
        <div className="container-main grid gap-5 md:grid-cols-3">
          <ValueCard title="Why Work With Us" description="Professional environment, growth opportunities, and clear responsibilities." />
          <ValueCard title="Team Culture" description="Collaborative mindset with practical execution and ownership." />
          <ValueCard title="Development Focus" description="Career path support through real market projects and mentorship." />
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-main grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeader title="Departments / Areas" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {departments.map((department) => (
                <div key={department} className="rounded-lg bg-white p-4 text-sm shadow-sm">
                  {department}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Open Positions" />
            <div className="mt-6 space-y-3">
              {positions.map((position) => (
                <div key={position} className="rounded-lg bg-white p-4 text-sm shadow-sm">
                  {position}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-main">
          <InquiryForm
            title="Career Application Form"
            submitLabel="Submit Application"
            showUploadPlaceholder
            fields={[
              { name: "fullName", label: "Full Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "department", label: "Department of Interest", required: true },
              { name: "message", label: "Message", textarea: true, required: true }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Join ADL Trade"
        description="If you are motivated by structured growth and business impact, we would like to hear from you."
      />
    </>
  );
}
