type DistributionFlowDiagramProps = {
  title: string;
  steps: readonly [string, string, string, string];
};

export function DistributionFlowDiagram({ title, steps }: DistributionFlowDiagramProps) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/40 to-cyan-50/30 p-6 shadow-sm md:p-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">{title}</p>
      <div className="mt-6 flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-1 md:gap-y-3">
        {steps.map((label, i) => (
          <div key={label} className="flex w-full flex-col items-center gap-2 md:w-auto md:flex-row md:gap-1">
            <Step label={label} featured={i === 1} />
            {i < steps.length - 1 ? (
              <span
                className="select-none text-lg font-medium text-accent-teal/45 md:mx-1 md:text-base"
                aria-hidden
              >
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function Step({ label, featured }: { label: string; featured?: boolean }) {
  return (
    <div
      className={
        featured
          ? "w-full max-w-sm rounded-xl border border-accent-teal/35 bg-gradient-to-br from-accent-teal/[0.12] to-cyan-50/50 px-4 py-3 text-center shadow-sm md:w-[7.75rem] md:max-w-none"
          : "w-full max-w-sm rounded-xl border border-slate-200/70 bg-white/90 px-4 py-3 text-center md:w-[7rem] md:max-w-none"
      }
    >
      <p className={`text-sm font-semibold leading-snug ${featured ? "text-accent-tealDark" : "text-body"}`}>{label}</p>
    </div>
  );
}
