/**
 * Real product packshots harvested from popular-pharma.com.
 * Keyed by catalog slug — used by the homepage "Explore Our Products" grid
 * and product detail pages to show authentic product photography.
 */
export interface Packshot {
  image: string;
  alt: string;
}

export const PACKSHOTS: Record<string, Packshot> = {
  "jakloc-5": {
    image: "/images/products/jakloc-5.jpg",
    alt: "Jakloc 5 (Tofacitinib) tablet pack by Popular Pharmaceuticals",
  },
  "cefobac-250": {
    image: "/images/products/cefobac-250.jpg",
    alt: "Cefobac 250 (Cefuroxime) tablet pack by Popular Pharmaceuticals",
  },
  gemiflox: {
    image: "/images/products/gemiflox.jpg",
    alt: "Gemiflox (Gemifloxacin) tablet pack by Popular Pharmaceuticals",
  },
  fexoral: {
    image: "/images/products/fexoral.jpg",
    alt: "Fexoral (Fexofenadine) tablet pack by Popular Pharmaceuticals",
  },
  ambrosol: {
    image: "/images/products/ambrosol.jpg",
    alt: "Ambrosol (Ambroxol) syrup bottle by Popular Pharmaceuticals",
  },
  "aquacal-d": {
    image: "/images/products/aquacal-d.jpg",
    alt: "Aquacal-D (Calcium + Vitamin D3) tablet pack by Popular Pharmaceuticals",
  },
  astamax: {
    image: "/images/products/astamax.jpg",
    alt: "Astamax (Astaxanthin) capsule pack by Popular Pharmaceuticals",
  },
  bilastin: {
    image: "/images/products/bilastin.jpg",
    alt: "Bilastin (Bilastine) tablet pack by Popular Pharmaceuticals",
  },
  candicon: {
    image: "/images/products/candicon.jpg",
    alt: "Candicon (Itraconazole) capsule pack by Popular Pharmaceuticals",
  },
  "cox-e": {
    image: "/images/products/cox-e.jpg",
  alt: "Cox-E (Etoricoxib) tablet pack by Popular Pharmaceuticals",
  },
  doxofyl: {
    image: "/images/products/doxofyl.jpg",
    alt: "Doxofyl (Doxofylline) tablet pack by Popular Pharmaceuticals",
  },
  nabumax: {
    image: "/images/products/nabumax.jpg",
    alt: "Nabumax (Nabumetone) tablet pack by Popular Pharmaceuticals",
  },
};

export function getPackshot(slug: string): Packshot | undefined {
  return PACKSHOTS[slug];
}
