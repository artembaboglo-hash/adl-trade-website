"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function LocaleRouteError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[locale error]", error);
  }, [error]);

  return (
    <section className="section-space bg-white">
      <div className="container-main max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">Error</p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-body md:text-3xl">Something went wrong</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          This page could not be loaded. If you are developing locally, stop the server, run{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">npm run fix</code>, then{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">npm run dev</code>.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button href="/" variant="outline">
            Home
          </Button>
        </div>
      </div>
    </section>
  );
}
