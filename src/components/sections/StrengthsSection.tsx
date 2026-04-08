import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

export type StrengthCard = {
  title: string;
  description: string;
  icon: string;
};

type StrengthsSectionProps = {
  eyebrow: string;
  title: string;
  featured: StrengthCard;
  supporting: [StrengthCard, StrengthCard, StrengthCard, StrengthCard];
};

function IconWrap({ src, large }: { src: string; large?: boolean }) {
  return (
    <div
      className={
        large
          ? "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.04] text-primary ring-1 ring-primary/[0.06]"
          : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100/90 text-primary ring-1 ring-slate-200/80"
      }
    >
      <Image
        src={src}
        alt=""
        width={large ? 26 : 20}
        height={large ? 26 : 20}
        className={large ? "h-[1.35rem] w-[1.35rem] opacity-[0.92]" : "h-5 w-5 opacity-90"}
        aria-hidden
      />
    </div>
  );
}

export function StrengthsSection({ eyebrow, title, featured, supporting }: StrengthsSectionProps) {
  return (
    <section className="section-space border-t border-slate-200/60 bg-gradient-to-b from-slate-50/40 via-white to-white">
      <div className="container-main">
        <SectionHeader eyebrow={eyebrow} title={title} center />

        <div className="mx-auto mt-12 max-w-5xl lg:mt-14">
          {/* Featured — одна горизонтальная плашка, акцент слева */}
          <article className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_2px_24px_-12px_rgba(15,23,42,0.08)]">
            <div
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-teal via-accent-teal to-accent-tealDark"
              aria-hidden
            />
            <div className="flex flex-col gap-6 p-7 pl-8 sm:flex-row sm:items-start sm:gap-8 sm:p-8 sm:pl-10">
              <IconWrap src={featured.icon} large />
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold leading-snug tracking-[-0.02em] text-body sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600 sm:text-base">
                  {featured.description}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Четыре равные карточки — одна сетка, без «тяжёлого» асимметричного блока */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:mt-10 xl:grid-cols-4">
          {supporting.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_8px_28px_-16px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow] duration-200 hover:border-accent-teal/25 hover:shadow-[0_12px_36px_-20px_rgba(15,23,42,0.1)]"
            >
              <IconWrap src={item.icon} />
              <h3 className="mt-4 text-[0.9375rem] font-semibold leading-snug text-body">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
