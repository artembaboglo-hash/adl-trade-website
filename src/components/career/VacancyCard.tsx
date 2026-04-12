import type { CareerVacancy } from "@/data/career-vacancies";

type VacancyCardProps = {
  vacancy: CareerVacancy;
  openBadge: string;
  applyLabel: string;
  applicationSectionId?: string;
};

export function VacancyCard({
  vacancy,
  openBadge,
  applyLabel,
  applicationSectionId = "career-application"
}: VacancyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-teal/25 hover:shadow-md md:p-7">
      <span className="inline-flex w-fit items-center rounded-full border border-accent-teal/30 bg-gradient-to-r from-accent-teal/[0.1] to-cyan-50/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-tealDark">
        {openBadge}
      </span>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-body">{vacancy.title}</h3>
      <p className="mt-2 text-xs font-medium text-slate-500">
        {vacancy.location}
        <span className="mx-2 text-slate-300" aria-hidden>
          ·
        </span>
        {vacancy.employmentType}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{vacancy.summary}</p>
      <a
        href={`#${applicationSectionId}`}
        className="mt-5 inline-flex text-sm font-semibold text-accent-teal hover:text-accent-tealDark hover:underline"
      >
        {applyLabel}
      </a>
    </article>
  );
}
