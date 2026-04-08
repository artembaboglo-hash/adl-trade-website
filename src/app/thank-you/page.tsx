import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank-you confirmation page after form submission."
};

export default function ThankYouPage() {
  return (
    <section className="section-space">
      <div className="container-main max-w-2xl text-center">
        <div className="rounded-2xl bg-secondary p-10">
          <h1 className="text-3xl font-bold text-body">Thank you for your request</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Your message has been received. Our team will contact you shortly.
          </p>
          <Button href="/" className="mt-8">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
