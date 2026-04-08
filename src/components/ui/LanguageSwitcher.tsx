"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type LanguageCode = "en" | "ro" | "ru";

const languages: { code: LanguageCode; short: string; name: string }[] = [
  { code: "en", short: "EN", name: "English" },
  { code: "ro", short: "RO", name: "Română" },
  { code: "ru", short: "RU", name: "Русский" }
];

type LanguageSwitcherProps = {
  initialLanguage?: LanguageCode;
  onSelect?: (language: LanguageCode) => void;
  className?: string;
  fullWidth?: boolean;
  theme?: "light" | "dark";
};

export function LanguageSwitcher({ initialLanguage = "en", onSelect, className, fullWidth }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>(initialLanguage);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedLanguage(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (language: LanguageCode) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    onSelect?.(language);
  };

  const current = languages.find((o) => o.code === selectedLanguage) ?? languages[0];

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative inline-flex max-w-full shrink-0 justify-end",
        fullWidth ? "w-full" : "w-fit",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "inline-flex min-w-[2.75rem] items-center justify-center gap-0.5 rounded-md border border-slate-200/90 bg-white px-2 py-1 text-[13px] font-semibold tabular-nums tracking-[0.06em] text-slate-800",
          "shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[color,background-color,border-color,box-shadow] duration-200 ease-out",
          "outline-none hover:border-slate-300 hover:bg-white hover:text-primary hover:shadow-[0_2px_6px_-2px_rgba(15,23,42,0.07)]",
          "focus-visible:ring-2 focus-visible:ring-accent-teal/30 focus-visible:ring-offset-0",
          isOpen && "border-slate-300 bg-white text-primary shadow-[0_2px_8px_-4px_rgba(15,23,42,0.1)]",
          fullWidth && "w-full min-w-0 justify-between px-3 py-1.5"
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Language: ${current.name}`}
        aria-controls="language-menu"
      >
        <span>{current.short}</span>
        <span
          className={cn(
            "text-[9px] font-normal leading-none text-slate-400 transition-colors duration-200",
            isOpen && "text-accent-teal/80"
          )}
          aria-hidden
        >
          ▾
        </span>
      </button>

      <div
        id="language-menu"
        role="listbox"
        aria-label="Language"
        className={cn(
          "absolute left-0 right-0 top-full z-50 mt-1 w-full origin-top rounded-md border border-slate-200/85 bg-white py-0.5 shadow-[0_6px_24px_-8px_rgba(15,23,42,0.12),0_2px_8px_-4px_rgba(15,23,42,0.06)]",
          "transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.2,0.9,0.2,1)]",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-px opacity-0 pointer-events-none"
        )}
      >
        {languages.map((lang) => {
          const isSelected = selectedLanguage === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={isSelected}
              aria-label={lang.name}
              onClick={() => handleSelect(lang.code)}
              className={cn(
                "flex w-full items-center justify-center px-2.5 py-1 text-[12px] font-semibold tabular-nums tracking-[0.06em] transition-colors duration-150",
                isSelected
                  ? "bg-primary/[0.06] text-primary"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {lang.short}
            </button>
          );
        })}
      </div>
    </div>
  );
}
