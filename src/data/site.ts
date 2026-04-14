export type SiteOffice = {
  id: "moldova" | "romania";
  /** Office-specific contact email shown next to this location. */
  email: string;
  phone: string;
  /** Physical address lines for display */
  addressLines: string[];
  /** OpenStreetMap embed URL (bbox + marker near the office). */
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
        email: "office.md@adltrade.com",
        phone: "+373 22 101 010",
        addressLines: [
          "Blvd. Grigore Vieru 22/1",
          "Chișinău, MD-2005",
          "Republic of Moldova"
        ],
        mapEmbedUrl:
          "https://www.openstreetmap.org/export/embed.html?bbox=28.8435%2C47.0317%2C28.8453%2C47.0328&layer=mapnik&marker=47.03232%2C28.84440"
      },
      {
        id: "romania" as const,
        email: "office.ro@adltrade.com",
        phone: "+40 21 202 0202",
        addressLines: [
          "Strada Vulcan Județul, Nr. 52-54, Etaj 1",
          "București, Sectorul 3",
          "Romania"
        ],
        mapEmbedUrl:
          "https://www.openstreetmap.org/export/embed.html?bbox=26.130%2C44.417%2C26.143%2C44.428&layer=mapnik&marker=44.4225%2C26.1362"
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
