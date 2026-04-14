"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[global-error]", error);
  }, [error]);

  return (
    <html lang="ro">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-slate-800">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Error</p>
        <h1 className="mt-3 text-2xl font-bold">Something went wrong</h1>
        <p className="mt-4 max-w-md text-sm text-slate-600">
          Run <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">npm run fix</code> then{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">npm run dev</code> from the project folder if this
          persists.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
