export type SupplierPartner = {
  id: string;
  name: string;
  country: string;
  category: string;
  description: string;
  logo?: string;
  website?: string;
  featured?: boolean;
  active?: boolean;
};

export const supplierPartners: SupplierPartner[] = [
  {
    id: "beyoglu",
    name: "Beyoglu",
    country: "Turkey",
    category: "Confectionery",
    description: "Premium confectionery brand distributed by ADL Trade.",
    logo: "/logos/beyoglu.svg",
    website: "",
    featured: true,
    active: true
  },
  {
    id: "nordic-vita",
    name: "Nordic Vita",
    country: "Poland",
    category: "Vitamins & Supplements",
    description: "Science-backed wellness products for pharmacy and retail channels.",
    logo: "/logos/nordic-vita.svg",
    featured: true,
    active: true
  },
  {
    id: "purehome",
    name: "PureHome",
    country: "Romania",
    category: "Household",
    description: "Household solutions tailored for high-volume retail formats.",
    logo: "/logos/purehome.svg",
    active: true
  }
];
