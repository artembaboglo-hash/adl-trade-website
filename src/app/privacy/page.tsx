import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and personal data handling statement for ADL Trade."
};

export default function PrivacyPage() {
  return (
    <section className="section-space">
      <div className="container-main max-w-4xl">
        <SectionHeader title="Privacy Policy" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600">
          <p>
            ADL Trade is committed to responsible handling of personal and business information. This page is a
            placeholder for the full legal privacy text.
          </p>
          <p>
            The final policy will include data categories, legal basis, data retention periods, user rights, and
            contact details for privacy inquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
