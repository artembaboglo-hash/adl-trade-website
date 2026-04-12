"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ARIA_LABEL: Record<Locale, string> = {
  en: "Back to top",
  ro: "Înapoi sus",
  ru: "Наверх"
};

const SHOW_AFTER_PX = 320;

export function ScrollToTopButton({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = useCallback(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label={ARIA_LABEL[locale]}
      className={cn(
        "fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full md:bottom-8 md:right-8",
        "border border-slate-200/70 bg-white/65 text-slate-500 shadow-md backdrop-blur-md",
        "transition-[opacity,transform,box-shadow] duration-300 ease-out",
        "hover:border-accent-teal/30 hover:bg-white/90 hover:text-accent-teal hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/30 focus-visible:ring-offset-2",
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          d="M12 19V5M12 5l-6 6M12 5l6 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
