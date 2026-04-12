import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const strokeIcon = "h-5 w-5 text-accent-teal";

function IconMission() {
  return (
    <svg className={strokeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
}

function IconVision() {
  return (
    <svg className={strokeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconValues() {
  return (
    <svg className={strokeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function FoundationIcon({ index }: { index: number }) {
  if (index === 0) return <IconMission />;
  if (index === 1) return <IconVision />;
  if (index === 2) return <IconValues />;
  return null;
}

export type AboutPillarCardProps = {
  title: string;
  description: string;
  /** Middle foundation card (vision): stronger emphasis */
  featured?: boolean;
  /** 0–2 for mission / vision / values — shows matching icon */
  foundationIndex?: number;
  /** Show 01, 02, … when set (grids without foundation icons) */
  index?: number;
};

export function AboutPillarCard({ title, description, featured, foundationIndex, index }: AboutPillarCardProps) {
  const showFoundationIcon =
    foundationIndex !== undefined && foundationIndex >= 0 && foundationIndex <= 2;
  const showIndexChip = index !== undefined && !showFoundationIcon;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white p-7 shadow-card transition-all duration-300 ease-out md:p-8",
        "hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-[0.99]",
        featured
          ? "border-accent-teal/25 ring-1 ring-accent-teal/10 shadow-soft hover:border-accent-teal/35"
          : "border-slate-200/80 hover:border-accent-teal/25"
      )}
    >
      {featured ? (
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/90 via-accent-teal to-accent-tealDark"
          aria-hidden
        />
      ) : (
        <div
          className="absolute bottom-0 left-0 top-0 w-1 rounded-l-2xl bg-gradient-to-b from-accent-teal/90 via-accent-teal/50 to-gold/70 opacity-90"
          aria-hidden
        />
      )}
      <div className={cn("relative", !featured && "pl-3 sm:pl-4")}>
        {showFoundationIcon ? (
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-teal/15 bg-gradient-to-br from-accent-teal/[0.07] to-cyan-50/50">
            <FoundationIcon index={foundationIndex} />
          </div>
        ) : null}
        {showIndexChip ? (
          <div className="mb-5 inline-flex h-11 min-w-[2.75rem] items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50/90 px-2.5 font-mono text-xs font-bold tabular-nums tracking-tight text-accent-teal">
            {String(index + 1).padStart(2, "0")}
          </div>
        ) : null}
        <h3 className="text-lg font-semibold leading-snug text-body md:text-xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem] md:leading-relaxed">{description}</p>
      </div>
    </article>
  );
}

/** Subtle radial wash for about page sections */
export function AboutSectionGlow({ variant = "muted" }: { variant?: "muted" | "light" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={cn(
          "absolute left-1/2 top-0 h-[min(22rem,55vw)] w-[min(56rem,100%)] -translate-x-1/2",
          variant === "muted"
            ? "bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,rgba(0,128,128,0.085),transparent_72%)]"
            : "bg-[radial-gradient(ellipse_75%_100%_at_50%_0%,rgba(0,128,128,0.045),transparent_70%)]"
        )}
      />
    </div>
  );
}

export function AboutOverviewPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card md:p-10",
        className
      )}
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-teal/40 via-accent-teal to-gold/80 opacity-90"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 top-8 w-1 rounded-tl-2xl bg-gradient-to-b from-accent-teal/85 to-gold/60 opacity-80"
        aria-hidden
      />
      <div className="relative pl-4 sm:pl-5">{children}</div>
    </div>
  );
}

export function AboutAsidePanel({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & ComponentPropsWithoutRef<"aside">) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card md:p-8 lg:shadow-soft",
        className
      )}
      {...rest}
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/70 via-accent-teal/80 to-accent-tealDark/70"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </aside>
  );
}
