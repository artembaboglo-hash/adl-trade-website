import type { ReactNode } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { dictionaries } from "@/data/dictionaries";
import { type Locale, withLocalePath } from "@/lib/i18n";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconTelegram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-500",
        "transition-all duration-200 ease-out hover:border-accent-teal/35 hover:text-accent-teal hover:shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      )}
    >
      {children}
    </a>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const { social } = siteConfig;

  return (
    <footer className="relative border-t border-slate-200/80 bg-gradient-to-b from-mono-50/60 via-white to-secondary/30">
      <div
        className="h-1 bg-gradient-to-r from-accent-tealDark via-accent-teal to-gold"
        aria-hidden
      />
      <div className="container-main grid gap-6 py-10 text-center sm:gap-7 md:gap-8 md:py-12 lg:grid-cols-[minmax(0,1.22fr)_auto_minmax(0,1.2fr)] lg:items-start lg:gap-8 lg:py-14 lg:text-left">
        <div className="min-w-0 lg:max-w-none">
          <Link
            href={withLocalePath(locale, "/")}
            className="inline-block transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/25 focus-visible:ring-offset-2"
          >
            <BrandLogo className="h-[2.2rem] md:h-[2.475rem]" />
          </Link>
          <p className="mx-auto mt-3 max-w-prose text-sm leading-relaxed text-slate-600 lg:mx-0">
            {siteConfig.description}
          </p>
          <div className="mt-2 min-h-[1.125rem] shrink-0" aria-hidden />
          <div className="mt-2 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">{dict.ui.footerHoursTitle}</p>
            <p className="mt-1.5 text-[13px] leading-snug text-slate-600">{dict.ui.footerHoursWeekdays}</p>
            <p className="mt-0.5 text-[13px] leading-snug text-slate-600">{dict.ui.footerHoursWeekend}</p>
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">{dict.ui.navigation}</p>
          <ul className="mt-4 flex flex-col items-center space-y-2 lg:items-start">
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
        <div className="flex min-w-0 justify-center lg:justify-end">
          <div className="w-full max-w-md text-center lg:max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">{dict.ui.contact}</p>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {dict.ui.contactEmailGeneral}
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1.5 inline-block text-slate-600 transition-colors hover:text-accent-teal hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="border-t border-slate-200/80 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">{dict.ui.social}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <SocialLink href={social.facebook} label="Facebook">
                    <IconFacebook className="h-[1.15rem] w-[1.15rem]" />
                  </SocialLink>
                  <SocialLink href={social.instagram} label="Instagram">
                    <IconInstagram className="h-[1.15rem] w-[1.15rem]" />
                  </SocialLink>
                  <SocialLink href={social.whatsapp} label="WhatsApp">
                    <IconWhatsApp className="h-[1.15rem] w-[1.15rem]" />
                  </SocialLink>
                  <SocialLink href={social.telegram} label="Telegram">
                    <IconTelegram className="h-[1.15rem] w-[1.15rem]" />
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/70 bg-mono-50/80 py-5">
        <div className="container-main flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} ADL Trade. {dict.ui.allRights}
          </p>
          <div className="flex gap-5">
            <Link
              className="transition-colors hover:text-slate-800"
              href={withLocalePath(locale, "/privacy")}
            >
              {dict.ui.privacy}
            </Link>
            <Link
              className="transition-colors hover:text-slate-800"
              href={withLocalePath(locale, "/terms")}
            >
              {dict.ui.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
