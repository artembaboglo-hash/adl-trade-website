import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/logos/adl-trade-logo.png";
const INTRINSIC_W = 764;
const INTRINSIC_H = 314;

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
      priority={priority}
      sizes="(max-width: 768px) 198px, 242px"
      style={{ maxHeight: "2.75rem", width: "auto", height: "auto" }}
      className={cn(
        "h-[2.475rem] w-auto object-contain object-left md:h-[2.75rem]",
        className
      )}
    />
  );
}
