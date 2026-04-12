import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { resolveLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ro" }, { locale: "ru" }];
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  if (!locale) notFound();

  return (
    <>
      <Header locale={locale} />
      <main className="relative isolate z-0">{children}</main>
      <Footer locale={locale} />
      <ScrollToTopButton locale={locale} />
    </>
  );
}
