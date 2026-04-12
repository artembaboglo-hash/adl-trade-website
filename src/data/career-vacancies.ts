import type { Locale } from "@/lib/i18n";

export type CareerVacancy = {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  summary: string;
};

/** Replace with live openings; empty array shows the “no vacancies” state. */
export const careerVacanciesByLocale: Record<Locale, CareerVacancy[]> = {
  ru: [
    {
      id: "field-sales-chisinau",
      title: "Менеджер по продажам (полевой)",
      location: "Кишинэу, Молдова",
      employmentType: "Полная занятость",
      summary:
        "Работа с торговыми точками, выполнение планов по полке и дистрибуции, координация с логистикой и категорийной командой."
    },
    {
      id: "category-analyst",
      title: "Специалист по категориям / аналитике",
      location: "Бухарест или гибрид",
      employmentType: "Полная занятость",
      summary:
        "Аналитика ассортимента и ритейла, поддержка коммерческих решений, взаимодействие с брендами и сетями."
    }
  ],
  ro: [
    {
      id: "field-sales-chisinau",
      title: "Manager vânzări (teren)",
      location: "Chișinău, Moldova",
      employmentType: "Normă întreagă",
      summary:
        "Lucru cu punctele de vânzare, planuri de raft și distribuție, coordonare cu logistică și echipa de categorie."
    },
    {
      id: "category-analyst",
      title: "Specialist categorii / analist",
      location: "București sau hibrid",
      employmentType: "Normă întreagă",
      summary:
        "Analiză asortiment și retail, suport pentru decizii comerciale, colaborare cu branduri și rețele."
    }
  ],
  en: [
    {
      id: "field-sales-chisinau",
      title: "Field sales executive",
      location: "Chișinău, Moldova",
      employmentType: "Full-time",
      summary:
        "Own outlet relationships, shelf and distribution targets, and day-to-day coordination with logistics and category."
    },
    {
      id: "category-analyst",
      title: "Category / retail analyst",
      location: "Bucharest or hybrid",
      employmentType: "Full-time",
      summary:
        "Assortment and retail analytics, commercial decision support, collaboration with brands and key accounts."
    }
  ]
};
