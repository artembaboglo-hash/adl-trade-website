import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "outlineLight" | "outlineMuted" | "accent";
  className?: string;
};

const baseClass =
  "inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/35 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-gradient-to-r from-accent-tealDark to-accent-teal text-white shadow-md shadow-accent-teal/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-teal/30",
  outline:
    "border border-primary/25 bg-white text-primary hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.04] hover:shadow-sm",
  ghost: "text-body hover:text-primary",
  outlineLight:
    "border border-white text-white hover:-translate-y-0.5 hover:bg-white hover:text-primary focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
  outlineMuted:
    "border border-white/25 text-white/70 hover:-translate-y-0.5 hover:border-white/50 hover:text-white focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
  accent:
    "bg-gradient-to-r from-accent-tealDark to-accent-teal px-8 text-white shadow-md shadow-accent-teal/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-teal/35"
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(baseClass, variants[variant], className)}>
        {children}
      </Link>
    );
  }
  return <button className={cn(baseClass, variants[variant], className)}>{children}</button>;
}
