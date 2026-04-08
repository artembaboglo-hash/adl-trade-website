/**
 * Sitewide layered neutral depth (same language as the hero).
 * Renders behind page content; sections with solid backgrounds still cover locally.
 */
export function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full min-h-screen w-full" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/60 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(255,255,255,1),rgba(248,250,252,0.4)_45%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_5%_15%,rgba(13,42,82,0.045),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_90%_at_18%_55%,rgba(248,250,252,0.95),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(226,232,240,0.35)_0%,rgba(248,250,252,0.2)_22%,transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_98%_85%_at_50%_48%,transparent_45%,rgba(226,232,240,0.45)_100%)] opacity-70" />
      {/* Very soft brand wash — visible on long pages / light sections */}
      <div className="absolute -right-32 top-[12%] h-[min(420px,75vw)] w-[min(420px,75vw)] rounded-full bg-gradient-to-br from-cyan-100/35 via-accent-teal/10 to-accent-tealDark/10 blur-3xl" />
      <div className="absolute -right-10 bottom-[8%] h-80 w-80 rounded-full bg-gradient-to-tl from-accent-tealDark/12 to-transparent blur-[100px]" />
    </div>
  );
}
