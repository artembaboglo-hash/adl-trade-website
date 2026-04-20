import type { Locale } from "@/lib/i18n";

export type CareerPageCard = { title: string; description: string };

export type CareerPageCopy = {
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  valueEyebrow: string;
  valueTitle: string;
  valueCards: CareerPageCard[];
  formTitle: string;
  formIntro: string;
  formToggleExpand: string;
  formToggleCollapse: string;
  formSubmit: string;
  uploadLabel: string;
  uploadHint: string;
  ctaTitle: string;
  ctaDescription: string;
  /** `{count}` placeholder for number of open roles */
  vacanciesStripOpen: string;
  vacanciesStripLink: string;
  vacanciesStripEmpty: string;
  vacanciesStripEmptyLink: string;
  vacanciesEyebrow: string;
  vacanciesTitle: string;
  vacanciesOpenBadge: string;
  vacanciesApplyCta: string;
  vacanciesEmptyTitle: string;
  vacanciesEmptyBody: string;
};

export const careerPageByLocale: Record<Locale, CareerPageCopy> = {
  ru: {
    metaDescription:
      "Карьера в ADL Trade: дистрибуция в Молдове и Румынии, рост в коммерции, операциях и работе с брендами и сетями.",
    heroEyebrow: "Карьера",
    heroTitle: "Карьера в дистрибуции: бренды, сети и измеримый результат",
    heroSubtitle:
      "Ищем людей с ответственностью за результат, готовых учиться и работать в команде на стыке продаж, логистики и развития категорий.",
    valueEyebrow: "Для сотрудников",
    valueTitle: "Что вы получаете, работая с нами",
    valueCards: [
      {
        title: "Реальный бизнес, не «бумаги»",
        description:
          "Дистрибуция и работа с ритейлом: поставки, полка, партнёры — вклад в работу компании виден в операционных и коммерческих задачах."
      },
      {
        title: "Рост компетенций",
        description:
          "Продажи, переговоры, категории, процессы и полевое исполнение — навыки, которые усиливают вас на рынке FMCG и торгового маркетинга."
      },
      {
        title: "Команда и ясность",
        description:
          "Совместная работа, понятные ожидания и обратная связь — без лишней бюрократии ради отчёта."
      },
      {
        title: "Два рынка — один опыт",
        description:
          "Молдова и Румыния, масштаб дистрибьютора: вы сталкиваетесь с разными каналами и форматами в рамках одной профессиональной среды."
      }
    ],
    formTitle: "Форма отклика",
    formIntro:
      "Кратко расскажите о себе и направлении, в котором хотите развиваться. Резюме или портфолио помогут быстрее оценить совпадение.",
    formToggleExpand: "Открыть форму",
    formToggleCollapse: "Свернуть",
    formSubmit: "Отправить заявку",
    uploadLabel: "Резюме или файлы (по желанию)",
    uploadHint:
      "Резюме, портфолио, сопроводительное — PDF, изображения, Office, ZIP. До 5 файлов, до ~5 МБ каждый.",
    ctaTitle: "Присоединяйтесь к ADL Trade",
    ctaDescription: "Хотите обсудить роль или стажировку — напишите нам напрямую через контакты.",
    vacanciesStripOpen: "Открытых позиций: {count}",
    vacanciesStripLink: "Смотреть вакансии",
    vacanciesStripEmpty:
      "Сейчас нет открытых вакансий в списке — мы всё равно рады получить ваше резюме и рассмотреть спонтанный отклик.",
    vacanciesStripEmptyLink: "Перейти к форме отклика",
    vacanciesEyebrow: "Вакансии",
    vacanciesTitle: "Кого мы ищем сейчас",
    vacanciesOpenBadge: "Открыто",
    vacanciesApplyCta: "Откликнуться",
    vacanciesEmptyTitle: "Открытых позиций нет",
    vacanciesEmptyBody:
      "Оставьте заявку через форму ниже — мы свяжемся, когда появится подходящая роль или стажировка."
  },
  ro: {
    metaDescription:
      "Carieră la ADL Trade: distribuție în Moldova și România, creștere în comerț, operațiuni și lucru cu branduri și rețele.",
    heroEyebrow: "Carieră",
    heroTitle: "Carieră în distribuție: branduri, rețele și rezultate măsurabile",
    heroSubtitle:
      "Căutăm oameni responsabili față de rezultat, deschiși să învețe și să lucreze în echipă la intersecția vânzărilor, logisticii și categoriei.",
    valueEyebrow: "Pentru angajați",
    valueTitle: "Ce primiți lucrând cu noi",
    valueCards: [
      {
        title: "Business real, nu doar hârtii",
        description:
          "Distribuție și retail: livrări, raft, parteneri — contribuția se vede în sarcini operaționale și comerciale concrete."
      },
      {
        title: "Dezvoltarea competențelor",
        description:
          "Vânzări, negocieri, categorii, procese și execuție în teren — abilități valoroase în FMCG și trade marketing."
      },
      {
        title: "Echipă și claritate",
        description:
          "Lucru împreună, așteptări clare și feedback — fără birocrație inutilă doar pentru raport."
      },
      {
        title: "Două piețe, o experiență",
        description:
          "Moldova și România, amploarea unui distribuitor: canale și formate diferite într-un singur mediu profesional."
      }
    ],
    formTitle: "Formular de aplicare",
    formIntro:
      "Descrieți pe scurt profilul și direcția în care vreți să creșteți. CV-ul sau portofoliul ne ajută să evaluăm mai rapid potrivirea.",
    formToggleExpand: "Deschide formularul",
    formToggleCollapse: "Restrânge",
    formSubmit: "Trimite aplicația",
    uploadLabel: "CV sau fișiere (opțional)",
    uploadHint:
      "CV, portofoliu, scrisoare de intenție — PDF, imagini, Office, ZIP. Până la 5 fișiere, ~5 MB fiecare.",
    ctaTitle: "Alătură-te ADL Trade",
    ctaDescription: "Vreți să discutați un rol sau un stagiu — scrieți-ne direct prin pagina de contact.",
    vacanciesStripOpen: "Posturi deschise: {count}",
    vacanciesStripLink: "Vezi posturile",
    vacanciesStripEmpty:
      "Momentan nu avem posturi listate — acceptăm totuși candidaturi spontane și CV-uri prin formular.",
    vacanciesStripEmptyLink: "Către formularul de aplicare",
    vacanciesEyebrow: "Posturi",
    vacanciesTitle: "Căutăm acum",
    vacanciesOpenBadge: "Deschis",
    vacanciesApplyCta: "Aplică",
    vacanciesEmptyTitle: "Nu există posturi deschise",
    vacanciesEmptyBody:
      "Trimiteți o aplicație prin formularul de mai jos — revenim când apare un rol sau un stagiu potrivit."
  },
  en: {
    metaDescription:
      "Careers at ADL Trade: distribution in Moldova and Romania, growth in commercial roles, operations, and work with brands and retail partners.",
    heroEyebrow: "Careers",
    heroTitle: "A distribution career built on brands, retail partners, and measurable outcomes",
    heroSubtitle:
      "We look for people who own results, like to learn, and collaborate where sales, logistics, and category work meet.",
    valueEyebrow: "For team members",
    valueTitle: "What you get when you work with us",
    valueCards: [
      {
        title: "Real business, not paperwork only",
        description:
          "Distribution and retail execution — supply, shelf, partners. Your contribution shows up in live commercial and operational work."
      },
      {
        title: "Skill growth",
        description:
          "Sales, negotiation, categories, processes, and field execution — skills that matter in FMCG and trade marketing."
      },
      {
        title: "Team & clarity",
        description:
          "Collaboration, clear expectations, and feedback — without bureaucracy for its own sake."
      },
      {
        title: "Two markets, one playground",
        description:
          "Moldova and Romania under one distributor — exposure to different channels and formats in a single professional setting."
      }
    ],
    formTitle: "Application form",
    formIntro:
      "Tell us briefly who you are and where you want to grow. A CV or portfolio helps us assess fit faster.",
    formToggleExpand: "Open form",
    formToggleCollapse: "Collapse",
    formSubmit: "Submit application",
    uploadLabel: "CV or attachments (optional)",
    uploadHint:
      "CV, portfolio, cover letter — PDF, images, Office, or ZIP. Up to 5 files, about 5 MB each.",
    ctaTitle: "Join ADL Trade",
    ctaDescription: "Prefer to discuss a role or internship first — reach out via our contact page.",
    vacanciesStripOpen: "Open roles: {count}",
    vacanciesStripLink: "View openings",
    vacanciesStripEmpty:
      "We have no roles listed right now — we still welcome spontaneous applications via the form below.",
    vacanciesStripEmptyLink: "Go to application form",
    vacanciesEyebrow: "Openings",
    vacanciesTitle: "Roles we are hiring for",
    vacanciesOpenBadge: "Open",
    vacanciesApplyCta: "Apply",
    vacanciesEmptyTitle: "No open positions listed",
    vacanciesEmptyBody:
      "Send an application through the form below — we will get in touch when a matching role or internship opens up."
  }
};
