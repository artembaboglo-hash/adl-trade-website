import Image from "next/image";
import { NEXT_PHOTO_IMAGE_QUALITY } from "@/lib/next-image-defaults";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { DistributionChannelCard } from "@/data/distribution-channels";

type DistributionChannelsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: [
    DistributionChannelCard,
    DistributionChannelCard,
    DistributionChannelCard,
    DistributionChannelCard
  ];
  /** Unique id for the section h2 when the block appears on multiple routes. */
  headingId?: string;
};

function ChannelCard({ card }: { card: DistributionChannelCard }) {
  return (
    <article className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-md shadow-slate-900/8 ring-1 ring-slate-900/[0.06] transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-slate-900/12 hover:ring-slate-900/[0.08]">
      <div className="absolute inset-0">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          quality={NEXT_PHOTO_IMAGE_QUALITY}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
          style={card.imageObjectPosition ? { objectPosition: card.imageObjectPosition } : undefined}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/[0.92] via-slate-950/45 to-slate-950/10"
        aria-hidden
      />
      <div className="relative flex h-full min-h-0 flex-col justify-end p-6 md:p-7">
        <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">
          {card.title}
        </h3>
        <p className="mt-1.5 text-balance text-sm leading-relaxed text-white/[0.88] md:mt-2 md:text-[0.9375rem]">
          {card.subtitle}
        </p>
      </div>
    </article>
  );
}

export function DistributionChannelsSection({
  eyebrow,
  title,
  description,
  cards,
  headingId = "distribution-channels-heading"
}: DistributionChannelsSectionProps) {
  return (
    <section
      className="section-space border-t border-slate-200/60 bg-slate-50/40"
      aria-labelledby={headingId}
    >
      <div className="container-main">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          center
          headingId={headingId}
          maxWidthClass="max-w-3xl"
        />

        <div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-7"
          role="list"
          aria-label={title}
        >
          {cards.map((card) => (
            <div key={card.title} role="listitem" className="min-w-0">
              <ChannelCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
