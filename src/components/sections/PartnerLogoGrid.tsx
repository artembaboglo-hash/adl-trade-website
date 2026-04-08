export function PartnerLogoGrid({ names }: { names: string[] }) {
  return (
    <div className="mt-12 rounded-2xl border border-slate-200/70 bg-white p-8 shadow-card md:p-10">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {names.map((name) => (
          <div
            key={name}
            className="flex h-[4.5rem] items-center justify-center rounded-xl border border-slate-100 bg-mono-50/50 px-3 text-center text-sm font-medium text-slate-500 shadow-sm transition-all duration-300 ease-out [filter:grayscale(100%)] hover:[filter:grayscale(0%)] hover:border-accent-teal/25 hover:bg-white hover:text-accent-teal hover:shadow-md"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
