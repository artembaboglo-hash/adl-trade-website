import Image from "next/image";
import { NEXT_PHOTO_IMAGE_QUALITY } from "@/lib/next-image-defaults";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/logos/adl-trade-logo.png";
const INTRINSIC_W = 499;
const INTRINSIC_H = 215;

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority }: BrandLogoProps) {
  // Inline max height keeps the logo sane if global CSS chunks do not load (preview / cache / tooling).
  return (
    <Image
      src={LOGO_SRC}
      alt="ADL Trade"
      width={INTRINSIC_W}
      height={INTRINSIC_H}
      quality={NEXT_PHOTO_IMAGE_QUALITY}
      priority={priority}
      sizes="(max-width: 768px) 214px, 262px"
      style={{ maxHeight: "3rem", width: "auto", height: "auto" }}
      className={cn(
        "h-[2.625rem] w-auto object-contain object-left md:h-[3rem]",
        className
      )}
    />
  );
}
