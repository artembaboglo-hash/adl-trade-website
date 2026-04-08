export function StatsBlock({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-card transition-all duration-300 ease-out hover:border-accent-teal/20 hover:shadow-md"
        >
          <p className="bg-gradient-to-r from-accent-tealDark to-accent-teal bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
            {item.value}
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
