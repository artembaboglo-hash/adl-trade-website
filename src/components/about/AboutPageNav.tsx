"use client";

import { cn } from "@/lib/utils";

export type AboutNavItem = { href: string; label: string };

const HEADER_OFFSET = "104px";

export function AboutPageNav({ items, ariaLabel }: { items: AboutNavItem[]; ariaLabel: string }) {
  return (
    <nav
      className={cn(
        "sticky z-40 border-b border-slate-200/80 bg-white/90 py-2.5 backdrop-blur-md supports-[backdrop-filter]:bg-white/78",
        "shadow-[0_8px_24px_-18px_rgba(15,23,42,0.12)]"
      )}
      style={{ top: HEADER_OFFSET }}
      aria-label={ariaLabel}
    >
      <div className="container-main flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full border border-slate-200/90 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600",
              "transition-colors duration-200 hover:border-accent-teal/35 hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/35 focus-visible:ring-offset-2"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
