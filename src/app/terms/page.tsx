import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms / Legal Notice",
  description: "Legal notice and terms of use for ADL Trade website."
};

export default function TermsPage() {
  return (
    <section className="section-space">
      <div className="container-main max-w-4xl">
        <SectionHeader title="Terms / Legal Notice" />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600">
          <p>
            This legal page is a placeholder for final terms and conditions, website use policy, and liability
            disclaimers.
          </p>
          <p>
            The final version should be reviewed by legal counsel and aligned with Moldova and relevant international
            regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
