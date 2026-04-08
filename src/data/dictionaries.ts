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
    privacy: string;
    terms: string;
    allRights: string;
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
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms / Legal Notice",
      allRights: "All rights reserved."
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
      contact: "Contact",
      privacy: "Politica de Confidențialitate",
      terms: "Termeni / Notă Legală",
      allRights: "Toate drepturile rezervate."
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
      contact: "Контакт",
      privacy: "Политика Конфиденциальности",
      terms: "Условия / Правовая Информация",
      allRights: "Все права защищены."
    }
  }
};
