import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  eyebrowAccent?: "default" | "teal";
};

export function SectionHeader({ eyebrow, title, description, center, eyebrowAccent = "teal" }: SectionHeaderProps) {
  const isTeal = eyebrowAccent === "teal";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <div className={cn("mb-4", center && "flex flex-col items-center")}>
          <p
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.28em]",
              isTeal ? "text-accent-teal" : "text-primary"
            )}
          >
            {eyebrow}
          </p>
          <span
            className={cn(
              "mt-3 block h-0.5 w-14 rounded-full",
              isTeal ? "bg-gradient-to-r from-accent-tealDark via-accent-teal to-teal-300" : "bg-gold/80",
              center && "mx-auto"
            )}
            aria-hidden
          />
        </div>
      ) : null}
      <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-body md:text-[2.125rem] md:leading-snug">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-slate-600 md:text-[1.0625rem] md:leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
