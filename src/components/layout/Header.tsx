"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { type Locale, normalizePathname, withLocalePath } from "@/lib/i18n";
import { dictionaries } from "@/data/dictionaries";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { LanguageSwitcher, type LanguageCode } from "@/components/ui/LanguageSwitcher";

const HEADER_H = "h-[104px]";

export function Header({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const pathname = usePathname();
  const router = useRouter();
  const pathNormalized = normalizePathname(pathname ?? "/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLanguageSelect = (language: LanguageCode) => {
    setIsMenuOpen(false);
    router.push(withLocalePath(language, pathNormalized));
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50",
          "border-b border-slate-200/30 bg-white/[0.72] backdrop-blur-xl backdrop-saturate-150",
          "shadow-[0_1px_0_rgba(15,23,42,0.04),0_16px_44px_-14px_rgba(15,23,42,0.1),0_6px_18px_-10px_rgba(15,23,42,0.06)]",
          "ring-1 ring-inset ring-white/20",
          "[@supports(backdrop-filter:blur(0))]:bg-white/[0.68]"
        )}
      >
        <div className={cn("container-main flex items-center justify-between gap-10 lg:gap-14", HEADER_H)}>
          <Link
            href={withLocalePath(locale, "/")}
            onClick={() => setIsMenuOpen(false)}
            className="shrink-0 rounded-md transition-opacity duration-200 hover:opacity-[0.88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/30 focus-visible:ring-offset-2"
          >
            <BrandLogo priority />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-10 md:flex lg:gap-[3.25rem]"
            aria-label="Main"
          >
            {navigation.map((item) => {
              const active = pathNormalized === withLocalePath(locale, item.href);
              return (
                <Link
                  key={item.href}
                  href={withLocalePath(locale, item.href)}
                  className={cn(
                    "group relative inline-flex items-center justify-center rounded-md px-0.5 py-4 text-[0.9375rem] font-medium tracking-[0.01em] transition-colors duration-300 ease-out",
                    "text-slate-600 hover:text-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/35 focus-visible:ring-offset-2",
                    active && "text-primary"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="relative z-0">{dict.nav[item.key as keyof typeof dict.nav]}</span>
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center bg-accent-teal transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-5 md:gap-6">
            <LanguageSwitcher initialLanguage={locale} onSelect={handleLanguageSelect} className="hidden md:inline-flex" />
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200/90 bg-white px-3.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-600 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/25 md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen ? (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 bg-slate-900/20 backdrop-blur-[1px] transition-opacity duration-200 md:hidden",
            "top-[104px]"
          )}
        />
      ) : null}
      <div
        id="mobile-menu"
        className={cn(
          "fixed right-0 top-0 h-full w-[85%] max-w-sm border-l border-slate-200/80 bg-white p-6 pt-[max(1.5rem,env(safe-area-inset-top))] shadow-[0_0_40px_-10px_rgba(15,23,42,0.12)] transition-transform duration-300 ease-out md:hidden",
          isMenuOpen ? "z-50 translate-x-0" : "z-30 translate-x-full pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        {isMenuOpen ? (
          <>
            <div className="mb-8 flex items-center justify-between">
              <BrandLogo className="h-[2.2rem]" />
              <button
                type="button"
                className="rounded-lg border border-slate-200/90 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/25"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                Close
              </button>
            </div>
            <nav className="grid gap-0.5" aria-label="Mobile">
              {navigation.map((item) => {
                const href = withLocalePath(locale, item.href);
                const isActive = pathNormalized === href;
                return (
                  <Link
                    key={item.href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-lg border-b border-transparent px-3 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/35 focus-visible:ring-offset-2",
                      isActive
                        ? "border-accent-teal bg-slate-50 text-primary"
                        : "text-slate-700 hover:border-accent-teal/40 hover:bg-slate-50/80 hover:text-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {dict.nav[item.key as keyof typeof dict.nav]}
                  </Link>
                );
              })}
            </nav>
            <LanguageSwitcher
              initialLanguage={locale}
              onSelect={handleLanguageSelect}
              fullWidth
              className="mt-8 w-full max-w-none"
            />
          </>
        ) : null}
      </div>
    </>
  );
}
