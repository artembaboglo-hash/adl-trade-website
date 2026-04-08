import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { dictionaries } from "@/data/dictionaries";
import { type Locale, withLocalePath } from "@/lib/i18n";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  return (
    <footer className="border-t border-slate-200/80 bg-gradient-to-b from-mono-50/60 via-white to-secondary/30">
      <div className="container-main grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link
            href={withLocalePath(locale, "/")}
            className="inline-block transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/25 focus-visible:ring-offset-2"
          >
            <BrandLogo className="h-[2.2rem] md:h-[2.475rem]" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">{siteConfig.description}</p>
          <p className="mt-5 text-xs uppercase tracking-wide text-slate-500">Business replies within 1 business day</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">{dict.ui.navigation}</p>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={withLocalePath(locale, item.href)}
                  className="text-sm text-slate-600 transition-colors hover:text-primary"
                >
                  {dict.nav[item.key as keyof typeof dict.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">{dict.ui.contact}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
          <div className="mt-4 flex gap-3 text-xs text-slate-500">
            <span>LinkedIn</span>
            <span>WhatsApp</span>
            <span>Telegram</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-5">
        <div className="container-main flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} ADL Trade. {dict.ui.allRights}
          </p>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-slate-600" href={withLocalePath(locale, "/privacy")}>
              {dict.ui.privacy}
            </Link>
            <Link className="transition-colors hover:text-slate-600" href={withLocalePath(locale, "/terms")}>
              {dict.ui.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
