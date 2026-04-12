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
};

export const contactsPageByLocale: Record<Locale, ContactsPageCopy> = {
  ru: {
    metaDescription:
      "Контакты ADL Trade: офисы в Молдове и Румынии, телефоны и email по направлениям. Тестовые адреса — замените на рабочие.",
    heroEyebrow: "Контакты",
    heroTitle: "Свяжитесь с ADL Trade",
    heroSubtitle: "Выберите удобный канал или напишите через форму — ответит соответствующая команда.",
    officesEyebrow: "Локации",
    officesSectionTitle: "Наши офисы",
    officesMapLabel: "Тестовая точка на карте — замените embed при смене адреса.",
    moldovaOfficeTitle: "Офис в Молдове",
    romaniaOfficeTitle: "Офис в Румынии",
    labelEmail: "Email",
    labelPhone: "Телефон",
    labelAddress: "Адрес",
    topicsInlineTitle: "По направлениям",
    topicTitles: {
      general: "Общие вопросы",
      suppliers: "Поставщикам",
      buyers: "Покупателям",
      career: "Карьера"
    },
    formTitle: "Форма обратной связи",
    formIntro: "Кратко опишите запрос; при желании укажите офис или тему.",
    formSubmit: "Отправить сообщение"
  },
  ro: {
    metaDescription:
      "Contacte ADL Trade: birouri în Moldova și România, telefoane și e-mail pe direcții. Adrese de test — înlocuiți cu cele reale.",
    heroEyebrow: "Contacte",
    heroTitle: "Contactați ADL Trade",
    heroSubtitle: "Alegeți canalul potrivit sau scrieți prin formular — vă răspunde echipa corespunzătoare.",
    officesEyebrow: "Locații",
    officesSectionTitle: "Birourile noastre",
    officesMapLabel: "Punct de test pe hartă — actualizați embed-ul la schimbarea adresei.",
    moldovaOfficeTitle: "Biroul din Moldova",
    romaniaOfficeTitle: "Biroul din România",
    labelEmail: "Email",
    labelPhone: "Telefon",
    labelAddress: "Adresă",
    topicsInlineTitle: "Pe direcții",
    topicTitles: {
      general: "Întrebări generale",
      suppliers: "Furnizori",
      buyers: "Cumpărători",
      career: "Carieră"
    },
    formTitle: "Formular de contact",
    formIntro: "Descrieți pe scurt; opțional, biroul sau tema.",
    formSubmit: "Trimite mesajul"
  },
  en: {
    metaDescription:
      "Contact ADL Trade: offices in Moldova and Romania, phones and emails by topic. Test addresses — replace with live details.",
    heroEyebrow: "Contacts",
    heroTitle: "Contact ADL Trade",
    heroSubtitle: "Pick the channel that fits, or use the form and the right team will respond.",
    officesEyebrow: "Locations",
    officesSectionTitle: "Our offices",
    officesMapLabel: "Test map pin — replace the embed when the address changes.",
    moldovaOfficeTitle: "Moldova office",
    romaniaOfficeTitle: "Romania office",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelAddress: "Address",
    topicsInlineTitle: "By topic",
    topicTitles: {
      general: "General inquiries",
      suppliers: "Suppliers",
      buyers: "Buyers",
      career: "Careers"
    },
    formTitle: "Contact form",
    formIntro: "Briefly describe your request; optionally note office or topic.",
    formSubmit: "Send message"
  }
};
