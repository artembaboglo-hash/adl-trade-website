export type SiteOffice = {
  id: "moldova" | "romania";
  /** Office-specific inbox (test placeholders — replace in production). */
  email: string;
  phone: string;
  /** Physical address lines for display */
  addressLines: string[];
  /** OpenStreetMap embed URL (test — replace with Google embed or precise OSM bbox when ready). */
  mapEmbedUrl: string;
};

export const siteConfig = {
  companyName: "ADL Trade",
  description:
    "ADL Trade is a trusted distributor, importer, and market-entry partner in Moldova and Romania.",
  url: "https://adltrade.com",
  contact: {
    /** General mailbox shown in footer; replace or split per market if needed. */
    email: "info@adltrade.com",
    offices: [
      {
        id: "moldova" as const,
        email: "office.md@test.adltrade.com",
        phone: "+373 22 101 010",
        addressLines: [
          "Str. Exemplu 10, of. 201 (test)",
          "MD-2001 Chișinău",
          "Republica Moldova"
        ],
        mapEmbedUrl:
          "https://www.openstreetmap.org/export/embed.html?bbox=28.822%2C46.998%2C28.892%2C47.028&layer=mapnik&marker=47.0132%2C28.8573"
      },
      {
        id: "romania" as const,
        email: "office.ro@test.adltrade.com",
        phone: "+40 21 202 0202",
        addressLines: [
          "Str. Exemplu 25, et. 3 (test)",
          "Sector 1, 010101 București",
          "România"
        ],
        mapEmbedUrl:
          "https://www.openstreetmap.org/export/embed.html?bbox=26.08%2C44.42%2C26.12%2C44.455&layer=mapnik&marker=44.437%2C26.097"
      }
    ] satisfies SiteOffice[]
  },
  /** Public profile URLs — replace with your real handles when ready */
  social: {
    facebook: "https://www.facebook.com/adltrade",
    instagram: "https://www.instagram.com/adltrade",
    whatsapp: "https://wa.me/37322000000",
    telegram: "https://t.me/adltrade"
  }
};
