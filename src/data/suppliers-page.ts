import type { Locale } from "@/lib/i18n";

export type SupplierPageCard = { title: string; description: string };

export type SupplierPageCopy = {
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  valueEyebrow: string;
  valueTitle: string;
  valueCards: SupplierPageCard[];
  categoriesTitle: string;
  categoriesFootnote: string;
  partnersTitle: string;
  partnersDescription: string;
  formTitle: string;
  formIntro: string;
  formToggleExpand: string;
  formToggleCollapse: string;
  formSubmit: string;
  uploadLabel: string;
  uploadHint: string;
  ctaTitle: string;
  ctaDescription: string;
};

export const supplierPageByLocale: Record<Locale, SupplierPageCopy> = {
  ru: {
    metaDescription:
      "ADL Trade: дистрибуция в Молдове и Румынии, локальная команда, логистика и сопровождение брендов.",
    heroEyebrow: "Поставщикам",
    heroTitle:
      "Развивайте ваш продукт либо бренд в Молдове и Румынии с надёжным партнёром по дистрибуции",
    heroSubtitle:
      "Помогаем производителям и брендам с запуском, масштабированием и устойчивыми продажами в релевантных каналах розницы.",
    valueEyebrow: "Преимущества",
    valueTitle: "Что вы получаете, работая с нами",
    valueCards: [
      {
        title: "Каналы сбыта",
        description:
          "Доступ к рознице, HoReCa, аптекам, опту и другим релевантным форматам там, где мы ведём дистрибуцию."
      },
      {
        title: "Локальная команда",
        description: "Продажи, мерчендайзинг и повседневная работа с сетями и ключевыми клиентами на месте."
      },
      {
        title: "Логистика и склад",
        description: "Доставка, покрытие и выстроенное пополнение в соответствии со спросом и планом поставок."
      },
      {
        title: "Регуляторика и маркировка",
        description: "Сопровождение по требованиям рынков Молдовы и Румынии в рамках согласованной модели работы."
      }
    ],
    categoriesTitle: "Категории, с которыми работаем",
    categoriesFootnote:
      "Ключевые категории нашего портфеля, в которых мы усиливаем присутствие брендов и дистрибуцию.",
    partnersTitle: "Текущие партнёры-производители, которые нам доверяют",
    partnersDescription: "",
    formTitle: "Форма для поставщиков",
    formIntro:
      "Кратко опишите компанию, продукт и цели. Полезны прайс, образцы и сертификаты; при наличии приложите one-pager или каталог — так мы быстрее подготовим ответ.",
    formToggleExpand: "Открыть форму",
    formToggleCollapse: "Свернуть",
    formSubmit: "Отправить запрос",
    uploadLabel: "Материалы к заявке (по желанию)",
    uploadHint:
      "После подключения обмена файлами сюда можно будет прикрепить one-pager, каталог, сертификаты и другие документы.",
    ctaTitle: "Обсудим выход продукта или бренда на рынки Молдовы и Румынии",
    ctaDescription: "Поделитесь портфелем и целями — предложим понятный следующий шаг и формат сотрудничества."
  },
  ro: {
    metaDescription:
      "ADL Trade: distribuție în Moldova și România, echipă locală, logistică și suport pentru branduri.",
    heroEyebrow: "Furnizori",
    heroTitle:
      "Dezvoltați produsul sau brandul în Moldova și România cu un partener de distribuție de încredere",
    heroSubtitle:
      "Sprijinim producătorii și brandurile la lansare, scalare și vânzări sustenabile pe canalele de retail relevante.",
    valueEyebrow: "Valoare",
    valueTitle: "Ce primiți lucrând cu noi",
    valueCards: [
      {
        title: "Canale de vânzare",
        description:
          "Acces la retail, HoReCa, farmacie, en-gros și alte formate relevante unde activăm în distribuție."
      },
      {
        title: "Echipă locală",
        description: "Vânzări, merchandising și lucru operațional cu rețele și clienți cheie la fața locului."
      },
      {
        title: "Logistică și depozit",
        description: "Livrare, acoperire și realimentare disciplinată, aliniată cererii și planului de aprovizionare."
      },
      {
        title: "Reglementare și etichetare",
        description: "Suport privind cerințele piețelor din Moldova și România, în cadrul modelului agreat."
      }
    ],
    categoriesTitle: "Categorii cu care lucrăm",
    categoriesFootnote:
      "Categoriile cheie din portofoliul nostru, în care întărim prezența brandurilor și distribuția.",
    partnersTitle: "Parteneri-producători actuali care au încredere în noi",
    partnersDescription: "",
    formTitle: "Formular furnizor",
    formIntro:
      "Descrieți pe scurt compania, produsul și obiectivele. Ne ajută lista de prețuri, mostrele și certificatele; dacă aveți, atașați one-pager sau catalog — răspundem mai rapid.",
    formToggleExpand: "Deschide formularul",
    formToggleCollapse: "Restrânge",
    formSubmit: "Trimite cererea",
    uploadLabel: "Materiale pentru cerere (opțional)",
    uploadHint:
      "După integrarea încărcării fișierelor veți putea atașa aici one-pager, catalog, certificate și alte documente.",
    ctaTitle: "Discutăm intrarea produsului sau brandului în Moldova și România",
    ctaDescription: "Trimiteți portofoliul și obiectivele — propunem un pas următor clar și un format de cooperare."
  },
  en: {
    metaDescription:
      "Partner with ADL Trade for distribution in Moldova and Romania: local execution, logistics, and brand support.",
    heroEyebrow: "Suppliers",
    heroTitle: "Grow your product or brand in Moldova and Romania with a trusted distribution partner",
    heroSubtitle:
      "We help manufacturers and brands launch, scale, and sustain sales across the retail channels that matter for your category.",
    valueEyebrow: "Value",
    valueTitle: "What you get when you work with us",
    valueCards: [
      {
        title: "Sales channels",
        description:
          "Access to retail, HoReCa, pharmacy, wholesale, and other relevant formats where we run distribution."
      },
      {
        title: "Local team",
        description: "Sales, merchandising, and day-to-day engagement with chains and key accounts on the ground."
      },
      {
        title: "Logistics & warehouse",
        description: "Delivery, coverage, and replenishment aligned with demand and the agreed supply rhythm."
      },
      {
        title: "Regulation & labelling",
        description: "Support on Moldova and Romania market requirements within the cooperation model we agree."
      }
    ],
    categoriesTitle: "Categories we work with",
    categoriesFootnote:
      "Key categories in our portfolio where we strengthen brand presence and distribution.",
    partnersTitle: "Current manufacturer partners who trust us",
    partnersDescription: "",
    formTitle: "Supplier inquiry form",
    formIntro:
      "Briefly describe your company, product, and goals. A price list, samples, and certificates help us assess fit; attach a one-pager or catalog if you have one — we respond faster.",
    formToggleExpand: "Open form",
    formToggleCollapse: "Collapse",
    formSubmit: "Send supplier inquiry",
    uploadLabel: "Materials with your inquiry (optional)",
    uploadHint:
      "Once file upload is connected, you will be able to attach a one-pager, catalog, certificates, and other documents here.",
    ctaTitle: "Let's discuss bringing your product or brand to Moldova and Romania",
    ctaDescription: "Share your portfolio and objectives — we will suggest a clear next step and cooperation format."
  }
};
