import Image from "next/image";
import { cn } from "@/lib/utils";

export function ValueCard({ title, description, icon }: { title: string; description: string; icon?: string }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-teal/25 hover:shadow-md">
      {icon ? (
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-teal/15 bg-gradient-to-br from-accent-teal/[0.07] to-cyan-50/50">
          <Image src={icon} alt="" aria-hidden="true" width={20} height={20} className="h-5 w-5" />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold leading-snug text-body">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}

export function CategoryCard({ title }: { title: string }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-mono-50/80 p-6 text-sm font-medium leading-snug text-slate-700 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-teal/30 hover:text-accent-teal hover:shadow-card">
      {title}
    </article>
  );
}

type PartnerCardProps = {
  name: string;
  subtitle: string;
  description: string;
  logo?: string;
  featured?: boolean;
  website?: string;
};

export function PartnerCard({ name, subtitle, description, logo, featured, website }: PartnerCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md",
        featured ? "border-primary/40" : "border-slate-200"
      )}
    >
      {featured ? <div className="absolute inset-x-0 top-0 h-1 bg-gold/80" /> : null}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex h-12 w-24 items-center justify-center rounded border border-primary/10 bg-primary/[0.04] px-2 text-xs font-semibold text-slate-500">
          {logo ? (
            <Image src={logo} alt={`${name} logo`} width={88} height={28} className="h-7 w-auto object-contain" />
          ) : (
            "Text"
          )}
        </div>
        {featured ? <span className="text-xs font-semibold uppercase tracking-wide text-primary">Featured</span> : null}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-primary">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      {website ? (
        <a href={website} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
          Visit website
        </a>
      ) : null}
    </article>
  );
}
