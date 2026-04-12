import Image from "next/image";
import { Button } from "@/components/ui/Button";

type SplitAudienceSectionProps = {
  suppliers: { title: string; description: string; cta: string; href: string };
  buyers: { title: string; description: string; cta: string; href: string };
  suppliersMedia?: { src: string; alt: string };
  buyersMedia?: { src: string; alt: string };
};

function SuppliersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuyersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SplitAudienceSection({ suppliers, buyers, suppliersMedia, buyersMedia }: SplitAudienceSectionProps) {
  const cardBase =
    "overflow-hidden rounded-2xl border shadow-card transition-all duration-300 ease-out hover:shadow-md";
  const cardPad = "p-9 md:p-11 lg:p-12";

  return (
    <section className="section-space bg-white">
      <div className="container-main grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
        <article
          className={`${cardBase} border-slate-200/80 bg-gradient-to-br from-white via-mono-50/50 to-teal-50/20 hover:border-accent-teal/30`}
        >
          {suppliersMedia ? (
            <div className="relative aspect-[16/10] w-full border-b border-slate-200/60">
              <Image
                src={suppliersMedia.src}
                alt={suppliersMedia.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized={suppliersMedia.src.endsWith(".svg")}
              />
            </div>
          ) : null}
          <div className={cardPad}>
          <span
            className="mb-6 block h-1 w-14 rounded-full bg-gradient-to-r from-accent-tealDark to-accent-teal"
            aria-hidden
          />
          <div className="flex gap-4 sm:gap-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-teal/12 text-accent-teal ring-1 ring-accent-teal/20"
              aria-hidden
            >
              <SuppliersIcon className="h-6 w-6" />
            </div>
            <h3 className="min-w-0 flex-1 text-xl font-semibold leading-snug tracking-tight text-body md:text-2xl">
              {suppliers.title}
            </h3>
          </div>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-slate-600 md:text-[0.9375rem] md:leading-relaxed">
            {suppliers.description}
          </p>
          <Button href={suppliers.href} variant="primary" className="mt-10">
            {suppliers.cta}
          </Button>
          </div>
        </article>
        <article
          className={`${cardBase} border-slate-200/80 bg-gradient-to-br from-white via-slate-50/70 to-white hover:border-accent-teal/25`}
        >
          {buyersMedia ? (
            <div className="relative aspect-[16/10] w-full border-b border-slate-200/60">
              <Image
                src={buyersMedia.src}
                alt={buyersMedia.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized={buyersMedia.src.endsWith(".svg")}
              />
            </div>
          ) : null}
          <div className={cardPad}>
          <span className="mb-6 block h-1 w-14 rounded-full bg-slate-200" aria-hidden />
          <div className="flex gap-4 sm:gap-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 ring-1 ring-slate-200/90"
              aria-hidden
            >
              <BuyersIcon className="h-6 w-6" />
            </div>
            <h3 className="min-w-0 flex-1 text-xl font-semibold leading-snug tracking-tight text-body md:text-2xl">
              {buyers.title}
            </h3>
          </div>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-slate-600 md:text-[0.9375rem] md:leading-relaxed">
            {buyers.description}
          </p>
          <Button href={buyers.href} variant="outline" className="mt-10">
            {buyers.cta}
          </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
