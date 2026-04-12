import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { resolveLocale, withLocalePath } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) return {};
  return {
    title: locale === "ro" ? "Multumim" : locale === "ru" ? "Spasibo" : "Thank You",
    description:
      locale === "ro"
        ? "Pagina de confirmare dupa trimiterea formularului."
        : locale === "ru"
          ? "Stranitsa podtverzhdeniya posle otpravki formy."
          : "Thank - you confirmation page after form submission."
  };
}

export default async function ThankYouPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();
  return (
    <section className="section-space">
      <div className="container-main max-w-2xl text-center">
        <div className="rounded-2xl bg-secondary p-10">
          <h1 className="text-3xl font-bold text-body">
            {locale === "ro" ? "Multumim pentru solicitare" : locale === "ru" ? "Spasibo za zapros" : "Thank you for your request"}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {locale === "ro"
              ? "Mesajul a fost primit. Echipa noastra va reveni in scurt timp."
              : locale === "ru"
                ? "Vashe soobshchenie polucheno. Nasha komanda svyazhetsya s vami vskore."
                : "Your message has been received. Our team will contact you shortly."}
          </p>
          <Button href={withLocalePath(locale, "/")} className="mt-8">
            {locale === "ro" ? "Inapoi la Acasa" : locale === "ru" ? "Na Glavnuyu" : "Back to Home"}
          </Button>
        </div>
      </div>
    </section>
  );
}
