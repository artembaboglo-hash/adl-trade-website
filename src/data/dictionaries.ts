import type { Locale } from "@/lib/i18n";

type Dictionary = {
  nav: {
    home: string;
    about: string;
    suppliers: string;
    buyers: string;
    career: string;
    contacts: string;
  };
  ui: {
    becomePartner: string;
    navigation: string;
    contact: string;
    contactEmailGeneral: string;
    contactOfficesLead: string;
    contactOfficePhoneLabel: string;
    contactOfficeAddressLabel: string;
    contactOfficeMoldova: string;
    contactOfficeRomania: string;
    social: string;
    footerHoursTitle: string;
    footerHoursWeekdays: string;
    footerHoursWeekend: string;
    privacy: string;
    terms: string;
    allRights: string;
    aboutNavAriaLabel: string;
    aboutNavOverview: string;
    aboutNavFoundation: string;
    aboutNavWhat: string;
    aboutNavMarket: string;
    aboutNavWhy: string;
    aboutNavPartners: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About Company",
      suppliers: "Suppliers",
      buyers: "Buyers",
      career: "Career",
      contacts: "Contacts"
    },
    ui: {
      becomePartner: "Become a Partner",
      navigation: "Navigation",
      contact: "Contacts",
      contactEmailGeneral: "General email",
      contactOfficesLead: "Company office locations",
      contactOfficePhoneLabel: "Phone",
      contactOfficeAddressLabel: "Office address",
      contactOfficeMoldova: "Moldova office",
      contactOfficeRomania: "Romania office",
      social: "Follow us",
      footerHoursTitle: "Business hours",
      footerHoursWeekdays: "Mon–Fri: 09:00–18:00",
      footerHoursWeekend: "Sat–Sun: closed.",
      privacy: "Privacy Policy",
      terms: "Terms / Legal Notice",
      allRights: "All rights reserved.",
      aboutNavAriaLabel: "About page sections",
      aboutNavOverview: "Overview",
      aboutNavFoundation: "Foundation",
      aboutNavWhat: "What we do",
      aboutNavMarket: "Markets",
      aboutNavWhy: "Why us",
      aboutNavPartners: "Partners"
    }
  },
  ro: {
    nav: {
      home: "Acasă",
      about: "Despre Companie",
      suppliers: "Furnizori",
      buyers: "Cumpărători",
      career: "Carieră",
      contacts: "Contacte"
    },
    ui: {
      becomePartner: "Devino Partener",
      navigation: "Navigare",
      contact: "Contacte",
      contactEmailGeneral: "Email general",
      contactOfficesLead: "Oficii ale companiei",
      contactOfficePhoneLabel: "Telefon",
      contactOfficeAddressLabel: "Adresa oficiului",
      contactOfficeMoldova: "Oficiu – Republica Moldova",
      contactOfficeRomania: "Oficiu – România",
      social: "Rețele sociale",
      footerHoursTitle: "Program",
      footerHoursWeekdays: "Lun–Vin: 09:00–18:00",
      footerHoursWeekend: "Sâm–Dum: închis.",
      privacy: "Politica de Confidențialitate",
      terms: "Termeni / Notă Legală",
      allRights: "Toate drepturile rezervate.",
      aboutNavAriaLabel: "Secțiuni pagina Despre",
      aboutNavOverview: "Prezentare",
      aboutNavFoundation: "Bază",
      aboutNavWhat: "Ce facem",
      aboutNavMarket: "Piețe",
      aboutNavWhy: "De ce noi",
      aboutNavPartners: "Parteneri"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О Компании",
      suppliers: "Поставщикам",
      buyers: "Покупателям",
      career: "Карьера",
      contacts: "Контакты"
    },
    ui: {
      becomePartner: "Стать Партнером",
      navigation: "Навигация",
      contact: "Контакты",
      contactEmailGeneral: "Общий email",
      contactOfficesLead: "Офисы компании",
      contactOfficePhoneLabel: "Телефон",
      contactOfficeAddressLabel: "Адрес офиса",
      contactOfficeMoldova: "Офис в Молдове",
      contactOfficeRomania: "Офис в Румынии",
      social: "Соцсети",
      footerHoursTitle: "График работы",
      footerHoursWeekdays: "Пн–Пт: 09:00–18:00",
      footerHoursWeekend: "Сб, Вс — выходной.",
      privacy: "Политика Конфиденциальности",
      terms: "Условия / Правовая Информация",
      allRights: "Все права защищены.",
      aboutNavAriaLabel: "Разделы страницы «О компании»",
      aboutNavOverview: "Обзор",
      aboutNavFoundation: "Основа",
      aboutNavWhat: "Направления",
      aboutNavMarket: "Рынки",
      aboutNavWhy: "Почему мы",
      aboutNavPartners: "Партнёры"
    }
  }
};
