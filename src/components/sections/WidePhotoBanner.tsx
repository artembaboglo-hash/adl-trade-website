import Image from "next/image";
import { NEXT_PHOTO_IMAGE_QUALITY } from "@/lib/next-image-defaults";
import { cn } from "@/lib/utils";

type WidePhotoBannerProps = {
  media: { src: string; alt: string };
  className?: string;
};

/** Full-width panoramic image (21:9), same treatment as the categories banner on the home page. */
export function WidePhotoBanner({ media, className }: WidePhotoBannerProps) {
  const unoptimized = media.src.endsWith(".svg");
  return (
    <div className={cn("relative mx-auto max-w-6xl", className)}>
      <div className="relative aspect-[21/9] w-full max-h-[min(70vw,320px)] overflow-hidden rounded-2xl shadow-[0_16px_48px_-28px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/70 sm:max-h-[360px] lg:max-h-[400px]">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          quality={NEXT_PHOTO_IMAGE_QUALITY}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 72rem"
          unoptimized={unoptimized}
        />
      </div>
    </div>
  );
}
