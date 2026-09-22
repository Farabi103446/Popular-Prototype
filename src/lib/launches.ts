export interface LaunchProduct {
  name: string;
  generic: string;
  category: string;
  tagline: string;
  image: string;
  /** Catalog slug — links the banner to the product detail page */
  catalogSlug: string;
}

export const LAUNCH_PRODUCTS: LaunchProduct[] = [
  {
    name: "Jakloc 5",
    generic: "Tofacitinib 5 mg",
    category: "Immunology",
    tagline:
      "Advanced JAK-inhibitor therapy for rheumatoid arthritis — bringing targeted treatment home.",
    image: "/images/products/jakloc-5.jpg",
    catalogSlug: "jakloc-5",
  },
  {
    name: "Cefobac 250",
    generic: "Cefuroxime 250 mg",
    category: "Cephalosporin Antibiotic",
    tagline:
      "Trusted second-generation cephalosporin for respiratory, ENT and urinary infections.",
    image: "/images/products/cefobac-250.jpg",
    catalogSlug: "cefobac-250",
  },
  {
    name: "Gemiflox",
    generic: "Gemifloxacin 320 mg",
    category: "Quinolone Antibiotic",
    tagline:
      "Potent once-daily fluoroquinolone for community-acquired pneumonia and bronchitis.",
    image: "/images/products/gemiflox.jpg",
    catalogSlug: "gemiflox",
  },
  {
    name: "Fexoral",
    generic: "Fexofenadine Hydrochloride",
    category: "Antihistamine",
    tagline:
      "Non-drowsy, second-generation relief for seasonal allergies and chronic urticaria.",
    image: "/images/products/fexoral.jpg",
    catalogSlug: "fexoral",
  },
];

export function getLaunchProducts() {
  return LAUNCH_PRODUCTS;
}
