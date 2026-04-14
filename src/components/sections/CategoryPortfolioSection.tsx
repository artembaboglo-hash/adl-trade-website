import Image from "next/image";
import { NEXT_PHOTO_IMAGE_QUALITY } from "@/lib/next-image-defaults";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import type {
  CategoryIconId,
  CategoryPortfolioItem,
  CategorySectionCopy
} from "@/data/category-portfolio";

function CategoryIcon({ id, className }: { id: CategoryIconId; className?: string }) {
  const stroke = "stroke-current";
  const common = cn("h-7 w-7 shrink-0 md:h-8 md:w-8", className);
  switch (id) {
    case "confectionery":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            className={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v4M9 7h6M8 21h8l1-9H7l1 9zM9 12h6"
          />
          <path className={stroke} strokeWidth={1.5} strokeLinecap="round" d="M10 15h4" />
        </svg>
      );
    case "beverages":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            className={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3h6l1 5v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V8l1-5zM9 8h6"
          />
          <path className={stroke} strokeWidth={1.5} strokeLinecap="round" d="M10 12h4" />
        </svg>
      );
    case "household":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            className={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h8l-1 11H9L8 10zM10 10V7a2 2 0 114 0v3"
          />
          <path className={stroke} strokeWidth={1.5} strokeLinecap="round" d="M11 14h2" />
        </svg>
      );
    case "snacks":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            className={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10c2-3 5-4 8-4s6 1 8 4-2 6-8 8-6-5-8-8z"
          />
          <path className={stroke} strokeWidth={1.5} strokeLinecap="round" d="M8 9h.01M12 8h.01M16 9h.01" />
        </svg>
      );
    case "privateLabel":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            className={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8l8-4 8 4v8l-8 4-8-4V8z"
          />
          <path className={stroke} strokeWidth={1.5} strokeLinecap="round" d="M9 10h4M9 13h2" />
        </svg>
      );
    case "fmcgEssentials":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            className={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 9h14v10a1 1 0 01-1 1H6a1 1 0 01-1-1V9zM9 9V7a3 3 0 016 0v2"
          />
          <path className={stroke} strokeWidth={1.5} strokeLinecap="round" d="M9 14h6" />
        </svg>
      );
    default:
      return null;
  }
}

export function CategoryPortfolioCard({ item }: { item: CategoryPortfolioItem }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/70 p-7 shadow-[0_2px_16px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out md:p-8",
        "even:to-teal-50/25",
        "hover:-translate-y-1 hover:border-accent-teal/25 hover:bg-gradient-to-br hover:from-white hover:to-[rgba(0,128,128,0.04)] hover:shadow-soft"
      )}
    >
      <span
        className="mb-5 block h-0.5 w-12 shrink-0 rounded-full bg-gradient-to-r from-accent-tealDark to-accent-teal"
        aria-hidden
      />
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100/90 text-slate-600 ring-1 ring-slate-200/80 transition-all duration-300 group-hover:bg-[rgba(0,128,128,0.1)] group-hover:text-accent-teal group-hover:ring-accent-teal/25"
        aria-hidden
      >
        <CategoryIcon id={item.id} />
      </div>
      <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight text-body">{item.title}</h3>
      <p className="mt-3 text-balance text-sm leading-relaxed text-slate-600 line-clamp-3 md:mt-3.5 md:line-clamp-none md:text-[0.9375rem] md:leading-relaxed">
        {item.description}
      </p>
    </article>
  );
}

type CategoryPortfolioSectionProps = {
  eyebrow: string;
  title: string;
  lead: string;
  items: CategorySectionCopy["items"];
  /** Optional wide photo between header and category cards */
  bannerMedia?: { src: string; alt: string };
};

export function CategoryPortfolioSection({ eyebrow, title, lead, items, bannerMedia }: CategoryPortfolioSectionProps) {
  const bannerUnoptimized = bannerMedia?.src.endsWith(".svg") ?? false;

  return (
    <section className="relative overflow-hidden section-space bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,128,128,0.06),transparent_55%)]" aria-hidden />
      <div className="container-main relative">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={lead}
          center
          maxWidthClass="max-w-3xl lg:max-w-[40rem]"
          descriptionClassName="mx-auto mt-5 max-w-[min(100%,42rem)] text-balance text-slate-600"
        />
        {bannerMedia ? (
          <div className="relative mx-auto mt-10 max-w-6xl lg:mt-12">
            <div className="relative aspect-[21/9] w-full max-h-[min(70vw,320px)] overflow-hidden rounded-2xl shadow-[0_16px_48px_-28px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/70 sm:max-h-[360px] lg:max-h-[400px]">
              <Image
                src={bannerMedia.src}
                alt={bannerMedia.alt}
                fill
                quality={NEXT_PHOTO_IMAGE_QUALITY}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 72rem"
                unoptimized={bannerUnoptimized}
              />
            </div>
          </div>
        ) : null}
        <div
          className={
            bannerMedia
              ? "mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9"
              : "mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-9"
          }
        >
          {items.map((item) => (
            <CategoryPortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
