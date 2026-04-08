export type BuyerPartner = {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  logo?: string;
  featured?: boolean;
  active?: boolean;
};

export const buyerPartners: BuyerPartner[] = [
  {
    id: "linella",
    name: "Linella",
    type: "Retail Chain",
    category: "Modern Trade",
    description: "Retail cooperation partner within Moldova.",
    logo: "/logos/linella.svg",
    featured: true,
    active: true
  },
  {
    id: "horeca-one",
    name: "HoReCa One Group",
    type: "HoReCa",
    category: "Foodservice",
    description: "Portfolio supply for hospitality operations and chain restaurants.",
    logo: "/logos/horeca-one.svg",
    featured: true,
    active: true
  },
  {
    id: "petro-mart",
    name: "PetroMart",
    type: "Gas Station Retail",
    category: "Convenience",
    description: "Convenience assortment programs for fuel station stores.",
    logo: "/logos/petro-mart.svg",
    active: true
  }
];
