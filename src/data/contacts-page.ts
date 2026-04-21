import type { Locale } from "@/lib/i18n";
import type { TopicChannelId } from "@/data/contact-topics";

export type ContactsPageCopy = {
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Small label above offices block (matches SectionHeader pattern). */
  officesEyebrow: string;
  officesSectionTitle: string;
  officesMapLabel: string;
  moldovaOfficeTitle: string;
  romaniaOfficeTitle: string;
  labelEmail: string;
  labelPhone: string;
  labelAddress: string;
  /** Heading above topic-specific contacts inside each office card */
  topicsInlineTitle: string;
  topicTitles: Record<TopicChannelId, string>;
  formTitle: string;
  formIntro: string;
  formSubmit: string;
  uploadLabel: string;
  uploadHint: string;
};

export const contactsPageByLocale: Record<Locale, ContactsPageCopy> = {
  ru: {
    metaDescription:
      "Контакты ADL Trade: офисы в Молдове и Румынии, телефоны и email по направлениям.",
    heroEyebrow: "Контакты",
    heroTitle: "Свяжитесь с ADL Trade",
    heroSubtitle: "Выберите удобный канал или напишите через форму — ответит соответствующая команда.",
    officesEyebrow: "Локации",
    officesSectionTitle: "Наши офисы",
    officesMapLabel: "Адреса офисов на карте OpenStreetMap.",
    moldovaOfficeTitle: "Офис в Молдове",
    romaniaOfficeTitle: "Офис в Румынии",
    labelEmail: "Email",
    labelPhone: "Телефон",
    labelAddress: "Адрес",
    topicsInlineTitle: "По направлениям",
    topicTitles: {
      orders: "Заказы",
      sales: "Отдел продаж",
      suppliers: "Поставщикам",
      buyers: "Покупателям",
      accounting: "Бухгалтерия",
      career: "Карьера"
    },
    formTitle: "Форма обратной связи",
    formIntro: "Кратко опишите запрос; при желании укажите офис или тему.",
    formSubmit: "Отправить сообщение",
    uploadLabel: "Вложения (по желанию)",
    uploadHint:
      "PDF, изображения, Office, ZIP — до 5 файлов, до ~25 МБ каждый, суммарно до ~50 МБ (лимиты почты могут отличаться)."
  },
  ro: {
    metaDescription:
      "Contacte ADL Trade: birouri în Moldova și România, telefoane și e-mail pe direcții.",
    heroEyebrow: "Contacte",
    heroTitle: "Contactați ADL Trade",
    heroSubtitle: "Alegeți canalul potrivit sau scrieți prin formular — vă răspunde echipa corespunzătoare.",
    officesEyebrow: "Locații",
    officesSectionTitle: "Birourile noastre",
    officesMapLabel: "Locațiile birourilor pe hartă (OpenStreetMap).",
    moldovaOfficeTitle: "Biroul din Moldova",
    romaniaOfficeTitle: "Biroul din România",
    labelEmail: "Email",
    labelPhone: "Telefon",
    labelAddress: "Adresă",
    topicsInlineTitle: "Pe direcții",
    topicTitles: {
      orders: "Comenzi",
      sales: "Departament vânzări",
      suppliers: "Furnizori",
      buyers: "Cumpărători",
      accounting: "Contabilitate",
      career: "Carieră"
    },
    formTitle: "Formular de contact",
    formIntro: "Descrieți pe scurt; opțional, biroul sau tema.",
    formSubmit: "Trimite mesajul",
    uploadLabel: "Atașamente (opțional)",
    uploadHint:
      "PDF, imagini, Office, ZIP — până la 5 fișiere, ~25 MB fiecare, ~50 MB în total (limitele e-mail pot varia)."
  },
  en: {
    metaDescription:
      "Contact ADL Trade: offices in Moldova and Romania, phones and emails by topic.",
    heroEyebrow: "Contacts",
    heroTitle: "Contact ADL Trade",
    heroSubtitle: "Pick the channel that fits, or use the form and the right team will respond.",
    officesEyebrow: "Locations",
    officesSectionTitle: "Our offices",
    officesMapLabel: "Office locations on the map (OpenStreetMap).",
    moldovaOfficeTitle: "Moldova office",
    romaniaOfficeTitle: "Romania office",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelAddress: "Address",
    topicsInlineTitle: "By topic",
    topicTitles: {
      orders: "Orders",
      sales: "Sales",
      suppliers: "Suppliers",
      buyers: "Buyers",
      accounting: "Accounting",
      career: "Careers"
    },
    formTitle: "Contact form",
    formIntro: "Briefly describe your request; optionally note office or topic.",
    formSubmit: "Send message",
    uploadLabel: "Attachments (optional)",
    uploadHint:
      "PDF, images, Office documents, or ZIP — up to 5 files, about 25 MB each, about 50 MB combined (mail provider limits may vary)."
  }
};
