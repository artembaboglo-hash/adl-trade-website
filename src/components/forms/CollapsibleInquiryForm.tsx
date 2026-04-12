"use client";

import { useEffect, useId, useState } from "react";
import { InquiryForm, type InquiryFormProps } from "@/components/forms/InquiryForm";
import { cn } from "@/lib/utils";

export type CollapsibleInquiryFormProps = InquiryFormProps & {
  expandLabel: string;
  collapseLabel: string;
  /** When `window.location.hash` matches `#${openWhenHash}`, the form opens on load (e.g. career anchor). */
  openWhenHash?: string;
};

export function CollapsibleInquiryForm({
  expandLabel,
  collapseLabel,
  title,
  intro,
  openWhenHash,
  className,
  ...formProps
}: CollapsibleInquiryFormProps) {
  const headingId = useId();
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);

  useEffect(() => {
    if (!openWhenHash || typeof window === "undefined") return;
    if (window.location.hash === `#${openWhenHash}`) {
      setOpen(true);
      setEverOpened(true);
    }
  }, [openWhenHash]);

  const toggle = () => {
    setOpen((o) => !o);
    setEverOpened(true);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8">
        <div className="min-w-0 flex-1">
          <h3 id={headingId} className="text-2xl font-semibold text-body">
            {title}
          </h3>
          {intro ? (
            <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-slate-600 md:text-base">{intro}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "inline-flex h-fit shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm",
            "transition-all duration-200 hover:border-accent-teal/35 hover:bg-slate-50/90 hover:text-accent-teal",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/35 focus-visible:ring-offset-2"
          )}
        >
          {open ? collapseLabel : expandLabel}
        </button>
      </div>
      {everOpened ? (
        <div
          id={panelId}
          className={cn(
            "grid border-t border-slate-100 transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className={cn(
                "px-6 pb-6 pt-2 md:px-8 md:pb-8",
                "motion-safe:transition-opacity motion-safe:duration-300 motion-reduce:opacity-100",
                open ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              {...(!open ? { inert: true as const, "aria-hidden": true as const } : {})}
            >
              <InquiryForm
                {...formProps}
                title=""
                intro={undefined}
                embedded
                labelledBy={headingId}
                className={cn("shadow-none", className)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
