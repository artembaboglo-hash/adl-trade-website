/**
 * Generates docs/site-visible-copy.md — user-visible strings (ro / en / ru) for translation review.
 * Run: npx tsx scripts/export-visible-copy.ts
 */
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { aboutContent } from "../src/data/about/index";
import { buyerPageByLocale } from "../src/data/buyers-page";
import { careerPageByLocale } from "../src/data/career-page";
import { careerVacanciesByLocale } from "../src/data/career-vacancies";
import { categorySectionByLocale } from "../src/data/category-portfolio";
import { contactsPageByLocale } from "../src/data/contacts-page";
import { distributionChannelsByLocale } from "../src/data/distribution-channels";
import { dictionaries } from "../src/data/dictionaries";
import { homeCopy } from "../src/data/home-page";
import { getHomePhotos } from "../src/data/home-photos";
import { partnersMarqueeCopy } from "../src/data/partners-marquee";
import { buyerChannelLogos, supplierBrandLogos } from "../src/data/partner-logos";
import { supplierPageByLocale } from "../src/data/suppliers-page";
import { siteConfig } from "../src/data/site";
import { locales } from "../src/lib/i18n";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "docs", "site-visible-copy.md");

/** Strings embedded in TSX (not in src/data) — keep in sync with pages when copy changes */
const INLINE = {
  privacy: {
    ro: {
      heading: "Politica de Confidențialitate",
      body: "ADL Trade tratează datele personale și comerciale în mod responsabil. Acesta este un text placeholder juridic."
    },
    ru: {
      heading: "Политика конфиденциальности",
      body: "ADL Trade ответственно обрабатывает персональные и бизнес - данные. Это юридический placeholder - текст."
    },
    en: {
      heading: "Privacy Policy",
      body: "ADL Trade is committed to responsible handling of personal and business information. This page is a placeholder for the full legal privacy text."
    }
  },
  terms: {
    ro: {
      heading: "Termeni / Notă legală",
      body: "Aceasta pagina este un placeholder pentru termenii finali si conditiile de utilizare."
    },
    ru: {
      heading: "Условия и правовая информация",
      body: "Eta stranitsa yavlyaetsya placeholder dlya finalnykh usloviy i pravovoy informatsii."
    },
    en: {
      heading: "Terms / Legal Notice",
      body: "This legal page is a placeholder for final terms and conditions, website use policy, and liability disclaimers."
    }
  },
  thankYou: {
    ro: {
      h1: "Multumim pentru solicitare",
      p: "Mesajul a fost primit. Echipa noastra va reveni in scurt timp.",
      button: "Inapoi la Acasa"
    },
    ru: {
      h1: "Spasibo za zapros",
      p: "Vashe soobshchenie polucheno. Nasha komanda svyazhetsya s vami vskore.",
      button: "Na Glavnuyu"
    },
    en: {
      h1: "Thank you for your request",
      p: "Your message has been received. Our team will contact you shortly.",
      button: "Back to Home"
    }
  },
  aboutCta: {
    ro: {
      title: "Construim următoarea etapă de creștere împreună",
      description:
        "Suntem deschiși pentru parteneriate strategice cu furnizori, cumpărători și parteneri de business."
    },
    ru: {
      title: "Строим следующий этап роста вместе",
      description: "Мы открыты к стратегическим партнерствам с поставщиками и покупателями."
    },
    en: {
      title: "Build your next growth phase with ADL Trade",
      description:
        "Our team is open to strategic partnerships with suppliers, buyers, and institutional business partners."
    }
  },
  formLabels: {
    contacts: {
      ro: ["Nume", "Companie", "Email", "Telefon", "Oficiu (opț.)", "Subiect", "Mesaj"],
      ru: ["Имя", "Компания", "Email", "Телефон", "Офис (необяз.)", "Тема", "Сообщение"],
      en: ["Name", "Company", "Email", "Phone", "Office (opt.)", "Subject", "Message"]
    },
    buyers: {
      ro: [
        "Nume companie",
        "Persoană de contact",
        "Funcție",
        "Email",
        "Telefon",
        "Tip business",
        "Categorie de interes",
        "Mesaj"
      ],
      ru: [
        "Название компании",
        "Контактное лицо",
        "Должность",
        "Email",
        "Телефон",
        "Тип бизнеса",
        "Интересующая категория",
        "Сообщение"
      ],
      en: [
        "Company name",
        "Contact person",
        "Position",
        "Email",
        "Phone",
        "Business type",
        "Category of interest",
        "Message"
      ]
    },
    suppliers: {
      ro: [
        "Nume companie",
        "Țara",
        "Persoană de contact",
        "Email",
        "Telefon",
        "Brand / produs",
        "Categorie produs",
        "Website",
        "Mesaj"
      ],
      ru: [
        "Название компании",
        "Страна",
        "Контактное лицо",
        "Email",
        "Телефон",
        "Бренд / продукт",
        "Категория продукта",
        "Сайт",
        "Сообщение"
      ],
      en: [
        "Company name",
        "Country",
        "Contact person",
        "Email",
        "Phone",
        "Brand / product",
        "Product category",
        "Website",
        "Message"
      ]
    },
    career: {
      ro: ["Nume complet", "Email", "Telefon", "Domeniu / departament de interes", "Mesaj"],
      ru: ["Полное имя", "Email", "Телефон", "Направление или отдел", "Сообщение"],
      en: ["Full name", "Email", "Phone", "Area / department of interest", "Message"]
    }
  },
  inquiryFormDefaults: {
    submit: "Submit Inquiry",
    emailError: "Please enter a valid email address."
  }
} as const;

function section(title: string, body: string): string {
  return `\n## ${title}\n\n${body.trim()}\n`;
}

function jsonBlock(label: string, data: unknown): string {
  return ["### " + label, "", "```json", JSON.stringify(data, null, 2), "```", ""].join("\n");
}

function run(): void {
  const lines: string[] = [];
  lines.push("# ADL Trade — видимые тексты сайта (экспорт для перевода)");
  lines.push("");
  lines.push(
    `Сгенерировано: **${new Date().toISOString().slice(0, 10)}** · локали: ${locales.join(", ")}`
  );
  lines.push("");
  lines.push(
    "Состав: данные из `src/data`, тексты главной (`home-page`), встроенные строки из страниц (privacy, terms, thank-you, формы, CTA About). **Не включено:** служебные страницы 404/error (только EN), внутренние meta для SEO в отдельном блоке минимально."
  );
  lines.push("");

  lines.push("## Бренд и контакты (footer / контакты)");
  lines.push("");
  lines.push(`- **companyName:** ${siteConfig.companyName}`);
  lines.push(`- **description (footer):** ${siteConfig.description}`);
  lines.push(`- **email общий:** ${siteConfig.contact.email}`);
  for (const office of siteConfig.contact.offices) {
    lines.push(`- **офис ${office.id}:** ${office.addressLines.join(" · ")} · ${office.phone} · ${office.email}`);
  }
  lines.push("");

  for (const locale of locales) {
    lines.push(`# Локаль: **${locale}**`);
    lines.push("");

    lines.push("## Навигация и UI (dictionaries)");
    lines.push("");
    lines.push(jsonBlock(`dictionaries.${locale}`, dictionaries[locale]));
    lines.push("");

    lines.push("## Главная страница (`home-page.ts`)");
    lines.push("");
    lines.push(jsonBlock(`homeCopy.${locale}`, homeCopy[locale]));
    lines.push("");

    lines.push("## Каналы дистрибуции (главная, `distribution-channels.ts`)");
    lines.push("");
    lines.push(jsonBlock(`distributionChannels.${locale}`, distributionChannelsByLocale[locale]));
    lines.push("");

    lines.push("## Бегущая строка партнёров");
    lines.push("");
    lines.push(jsonBlock(`partnersMarquee.${locale}`, partnersMarqueeCopy[locale]));
    lines.push("");

    lines.push("## Категории на главной");
    lines.push("");
    lines.push(jsonBlock(`categorySection.${locale}`, categorySectionByLocale[locale]));
    lines.push("");

    lines.push("## О компании (контент страницы About)");
    lines.push("");
    lines.push(jsonBlock(`about.${locale}`, aboutContent[locale]));
    lines.push("");

    lines.push("## Покупатели");
    lines.push("");
    lines.push(jsonBlock(`buyersPage.${locale}`, buyerPageByLocale[locale]));
    lines.push("");

    lines.push("## Поставщики");
    lines.push("");
    lines.push(jsonBlock(`suppliersPage.${locale}`, supplierPageByLocale[locale]));
    lines.push("");

    lines.push("## Карьера (страница)");
    lines.push("");
    lines.push(jsonBlock(`careerPage.${locale}`, careerPageByLocale[locale]));
    lines.push("");

    lines.push("## Вакансии (карточки)");
    lines.push("");
    lines.push(jsonBlock(`careerVacancies.${locale}`, careerVacanciesByLocale[locale]));
    lines.push("");

    lines.push("## Контакты (страница)");
    lines.push("");
    lines.push(jsonBlock(`contactsPage.${locale}`, contactsPageByLocale[locale]));
    lines.push("");

    const photos = getHomePhotos(locale);
    lines.push("## Подписи к изображениям (alt) — главная и др.");
    lines.push("");
    lines.push(jsonBlock(`homePhotos.${locale}`, photos));
    lines.push("");
  }

  lines.push("## Логотипы в бегущей строке (alt, без локализации)");
  lines.push("");
  lines.push("Поставщики (supplierBrandLogos):");
  supplierBrandLogos.forEach((l) => lines.push(`- ${l.alt}`));
  lines.push("");
  lines.push("Каналы / покупатели (buyerChannelLogos):");
  buyerChannelLogos.forEach((l) => lines.push(`- ${l.alt}`));
  lines.push("");

  lines.push("## Встроенные строки (TSX) — Privacy / Terms / Thank you / About CTA");
  lines.push("");
  for (const loc of ["ro", "ru", "en"] as const) {
    lines.push(`### ${loc}`);
    lines.push("");
    lines.push(jsonBlock("privacy", INLINE.privacy[loc]));
    lines.push(jsonBlock("terms", INLINE.terms[loc]));
    lines.push(jsonBlock("thankYou", INLINE.thankYou[loc]));
    lines.push(jsonBlock("aboutCta", INLINE.aboutCta[loc]));
  }
  lines.push("");

  lines.push("## Подписи полей форм (вынесены из страниц в экспорт)");
  lines.push("");
  lines.push(jsonBlock("formLabels", INLINE.formLabels));
  lines.push("");

  lines.push("## Значения по умолчанию в InquiryForm (англ.)");
  lines.push("");
  lines.push(jsonBlock("inquiryFormDefaults", INLINE.inquiryFormDefaults));
  lines.push("");

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, lines.join("\n"), "utf8");
  console.log("Wrote", OUT);
}

run();
