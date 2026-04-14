import type { Locale } from "@/lib/i18n";

export type BuyerPageCard = { title: string; description: string };

export type BuyerPageCopy = {
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  valueEyebrow: string;
  valueTitle: string;
  valueCards: BuyerPageCard[];
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

export const buyerPageByLocale: Record<Locale, BuyerPageCopy> = {
  ru: {
    metaDescription:
      "ADL Trade: стабильные поставки для ритейла, опта и HoReCa в Молдове и Румынии, релевантный портфель и поддержка дистрибьютора.",
    heroEyebrow: "Покупателям",
    heroTitle: "Надёжный партнёр по ассортименту для сетей, опта и HoReCa в Молдове и Румынии",
    heroSubtitle:
      "Согласованные поставки, портфель под ваш канал и сопровождение со стороны дистрибьютора.",
    valueEyebrow: "Преимущества",
    valueTitle: "Что вы получаете, работая с нами",
    valueCards: [
      {
        title: "Стабильность на полке",
        description:
          "Планирование наличия и пополнение; меньше обрывов и лишней нагрузки на закупку и операции."
      },
      {
        title: "Ассортимент под ваш канал",
        description:
          "Подбор брендов и SKU под формат точки; новинки и развитие категории без десятка отдельных поставщиков."
      },
      {
        title: "Логистика и одно окно",
        description:
          "Понятные поставки и сроки; один дистрибьютор вместо множества прямых контактов с производителями."
      },
      {
        title: "Коммерция и сопровождение",
        description:
          "Условия сотрудничества в рамках согласованной модели; закреплённый контакт и быстрее решения по ценам, промо и запуску SKU."
      }
    ],
    categoriesTitle: "Категории, с которыми работаем",
    categoriesFootnote:
      "Ключевые категории нашего портфеля, в которых мы усиливаем присутствие брендов и дистрибуцию.",
    partnersTitle: "Партнёры-покупатели, с которыми мы работаем",
    partnersDescription: "",
    formTitle: "Форма для покупателей",
    formIntro:
      "Укажите формат сети или точки, интересующие категории и ожидания по объёмам — так мы быстрее предложим релевантный портфель и условия.",
    formToggleExpand: "Открыть форму",
    formToggleCollapse: "Свернуть",
    formSubmit: "Отправить запрос",
    uploadLabel: "Материалы к заявке (по желанию)",
    uploadHint:
      "После подключения обмена файлами можно будет прикрепить спецификацию полки, перечень SKU или другие документы.",
    ctaTitle: "Усильте ассортимент вместе с ADL Trade",
    ctaDescription: "Сообщите приоритеты по каналам и категориям — предложим понятный следующий шаг сотрудничества."
  },
  ro: {
    metaDescription:
      "ADL Trade: aprovizionare stabilă pentru retail, en-gros și HoReCa în Moldova și România, portofoliu relevant și suport.",
    heroEyebrow: "Cumpărători",
    heroTitle: "Partener de încredere pentru asortiment: retail, en-gros și HoReCa în Moldova și România",
    heroSubtitle:
      "Livrări coordonate, portofoliu adaptat canalului dvs. și suport din partea distribuitorului.",
    valueEyebrow: "Valoare",
    valueTitle: "Ce primiți lucrând cu noi",
    valueCards: [
      {
        title: "Stabilitate la raft",
        description:
          "Planificare a disponibilității și realimentare; mai puține rupturi de stoc și presiune operațională pe achiziții."
      },
      {
        title: "Asortiment pentru canalul dvs.",
        description:
          "Selecție de branduri și SKU pentru formatul punctului; noutăți și dezvoltare de categorie fără zeci de furnizori separați."
      },
      {
        title: "Logistică și un singur punct de contact",
        description:
          "Livrări și termeni clari; un distribuitor în locul multor contacte directe cu producătorii."
      },
      {
        title: "Comercial și suport cont",
        description:
          "Condiții în cadrul modelului agreat; persoană de contact dedicată și răspunsuri mai rapide la prețuri, promoții și lansări SKU."
      }
    ],
    categoriesTitle: "Categorii cu care lucrăm",
    categoriesFootnote:
      "Categoriile cheie din portofoliul nostru, în care întărim prezența brandurilor și distribuția.",
    partnersTitle: "Parteneri-cumpărători cu care colaborăm",
    partnersDescription: "",
    formTitle: "Formular cumpărător",
    formIntro:
      "Indicați formatul rețelei sau al punctului, categoriile de interes și așteptările privind volumele — propunem mai rapid un portofoliu și condiții relevante.",
    formToggleExpand: "Deschide formularul",
    formToggleCollapse: "Restrânge",
    formSubmit: "Trimite cererea",
    uploadLabel: "Materiale pentru cerere (opțional)",
    uploadHint:
      "După integrarea încărcării fișierelor veți putea atașa specificații de raft, listă SKU sau alte documente.",
    ctaTitle: "Consolidați asortimentul cu ADL Trade",
    ctaDescription: "Trimiteți prioritățile pe canale și categorii — propunem un pas următor clar de cooperare."
  },
  en: {
    metaDescription:
      "ADL Trade: reliable supply for retail, wholesale, and HoReCa in Moldova and Romania, relevant assortment, and distributor support.",
    heroEyebrow: "Buyers",
    heroTitle: "A trusted assortment partner for retail, wholesale, and HoReCa in Moldova and Romania",
    heroSubtitle: "Coordinated supply, a portfolio shaped to your channel, and hands-on distributor support.",
    valueEyebrow: "Value",
    valueTitle: "What you get when you work with us",
    valueCards: [
      {
        title: "On-shelf stability",
        description:
          "Availability planning and replenishment; fewer stock-outs and less operational load on procurement."
      },
      {
        title: "Assortment for your channel",
        description:
          "Brand and SKU selection for your store or outlet format; new launches and category growth without juggling many suppliers."
      },
      {
        title: "Logistics & single point of contact",
        description: "Clear delivery cadence and lead times; one distributor instead of many direct manufacturer relationships."
      },
      {
        title: "Commercial & account support",
        description:
          "Terms within an agreed partnership model; a dedicated contact and faster answers on pricing, promos, and SKU launches."
      }
    ],
    categoriesTitle: "Categories we work with",
    categoriesFootnote:
      "Key categories in our portfolio where we strengthen brand presence and distribution.",
    partnersTitle: "Buyer partners we work with",
    partnersDescription: "",
    formTitle: "Buyer inquiry form",
    formIntro:
      "Share your chain or outlet format, category focus, and volume expectations — we can respond faster with a relevant portfolio and terms.",
    formToggleExpand: "Open form",
    formToggleCollapse: "Collapse",
    formSubmit: "Send buyer inquiry",
    uploadLabel: "Materials with your inquiry (optional)",
    uploadHint:
      "Once file upload is connected, you can attach planograms, SKU lists, or other supporting documents here.",
    ctaTitle: "Strengthen your assortment with ADL Trade",
    ctaDescription: "Tell us your channel and category priorities — we will suggest a clear next step for cooperation."
  }
};
