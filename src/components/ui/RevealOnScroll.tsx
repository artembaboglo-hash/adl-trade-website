"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Extra class when visible (e.g. section rhythm border). */
  visibleClassName?: string;
};

/**
 * Fade + slight rise when entering the viewport. Respects `prefers-reduced-motion`.
 */
export function RevealOnScroll({ children, className, visibleClassName }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      className={cn(
        reduceMotion || visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        !reduceMotion && "duration-700 ease-out motion-safe:transition-[opacity,transform]",
        visible ? visibleClassName : undefined,
        className
      )}
    >
      {children}
    </div>
  );
}
