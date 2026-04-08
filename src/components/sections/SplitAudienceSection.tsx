import { Button } from "@/components/ui/Button";

type SplitAudienceSectionProps = {
  suppliers: { title: string; description: string; cta: string; href: string };
  buyers: { title: string; description: string; cta: string; href: string };
};

export function SplitAudienceSection({ suppliers, buyers }: SplitAudienceSectionProps) {
  return (
    <section className="section-space bg-white">
      <div className="container-main grid gap-8 md:grid-cols-2 md:gap-10">
        <article className="rounded-2xl border border-slate-200/80 bg-mono-50/30 p-8 shadow-card transition-shadow duration-300 hover:shadow-md md:p-10">
          <span
            className="mb-5 block h-1 w-16 rounded-full bg-gradient-to-r from-accent-tealDark to-accent-teal"
            aria-hidden
          />
          <h3 className="text-xl font-semibold leading-snug tracking-tight text-body md:text-2xl">{suppliers.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">{suppliers.description}</p>
          <Button href={suppliers.href} variant="primary" className="mt-8">
            {suppliers.cta}
          </Button>
        </article>
        <article className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-md md:p-10">
          <span className="mb-5 block h-1 w-16 rounded-full bg-slate-200" aria-hidden />
          <h3 className="text-xl font-semibold leading-snug tracking-tight text-body md:text-2xl">{buyers.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">{buyers.description}</p>
          <Button href={buyers.href} variant="outline" className="mt-8">
            {buyers.cta}
          </Button>
        </article>
      </div>
    </section>
  );
}
