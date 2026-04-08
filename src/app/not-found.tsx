import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-main max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-bold text-body">Page not found</h1>
        <p className="mt-4 text-sm text-slate-600">
          The page you are looking for may have been moved or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}
