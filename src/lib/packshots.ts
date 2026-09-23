/**
 * Real product packshots harvested from popular-pharma.com (46 of 70 catalog
 * products matched by brand, slug, or molecule). Products without a real
 * packshot fall back to the monogram tile.
 */
export interface Packshot {
  image: string;
  alt: string;
}

export const PACKSHOTS: Record<string, Packshot> = {
  "ambrosol": {
    image: "/images/products/ambrosol.jpg",
    alt: "Ambrosol (Ambroxol Hydrochloride) product pack by Popular Pharmaceuticals",
  },
  "aquacal-d": {
    image: "/images/products/aquacal-d.jpg",
    alt: "Aquacal-D (Calcium Carbonate + Vitamin D3) product pack by Popular Pharmaceuticals",
  },
  "astamax": {
    image: "/images/products/astamax.jpg",
    alt: "Astamax (Astaxanthin) product pack by Popular Pharmaceuticals",
  },
  "bilastin": {
    image: "/images/products/bilastin.jpg",
    alt: "Bilastin (Bilastine) product pack by Popular Pharmaceuticals",
  },
  "candicon": {
    image: "/images/products/candicon.jpg",
    alt: "Candicon (Itraconazole) product pack by Popular Pharmaceuticals",
  },
  "cardivex": {
    image: "/images/products/cardivex.jpg",
    alt: "Cardivex (Atorvastatin Calcium) product pack by Popular Pharmaceuticals",
  },
  "cefobac-250": {
    image: "/images/products/cefobac-250.jpg",
    alt: "Cefobac 250 (Cefuroxime Axetil 250 mg) product pack by Popular Pharmaceuticals",
  },
  "cepotum": {
    image: "/images/products/cepotum.jpg",
    alt: "Cepotum (Ceftriaxone Sodium) product pack by Popular Pharmaceuticals",
  },
  "citalor": {
    image: "/images/products/citalor.jpg",
    alt: "Citalor (Escitalopram Oxalate) product pack by Popular Pharmaceuticals",
  },
  "clobefate": {
    image: "/images/products/clobefate.jpg",
    alt: "Clobefate (Clobetasol Propionate) product pack by Popular Pharmaceuticals",
  },
  "clopisan": {
    image: "/images/products/clopisan.jpg",
    alt: "Clopisan (Clopidogrel Bisulfate) product pack by Popular Pharmaceuticals",
  },
  "cox-e": {
    image: "/images/products/cox-e.jpg",
    alt: "Cox-E (Etoricoxib) product pack by Popular Pharmaceuticals",
  },
  "doxofyl": {
    image: "/images/products/doxofyl.jpg",
    alt: "Doxofyl (Doxofylline) product pack by Popular Pharmaceuticals",
  },
  "ferrovit": {
    image: "/images/products/ferrovit.jpg",
    alt: "Ferrovit (Ferrous Sulphate + Folic Acid) product pack by Popular Pharmaceuticals",
  },
  "fexoral": {
    image: "/images/products/fexoral.jpg",
    alt: "Fexoral (Fexofenadine Hydrochloride) product pack by Popular Pharmaceuticals",
  },
  "fluzol": {
    image: "/images/products/fluzol.jpg",
    alt: "Fluzol (Fluconazole) product pack by Popular Pharmaceuticals",
  },
  "gemiflox": {
    image: "/images/products/gemiflox.jpg",
    alt: "Gemiflox (Gemifloxacin Mesylate 320 mg) product pack by Popular Pharmaceuticals",
  },
  "jakloc-5": {
    image: "/images/products/jakloc-5.jpg",
    alt: "Jakloc 5 (Tofacitinib 5 mg) product pack by Popular Pharmaceuticals",
  },
  "ketolac-eye": {
    image: "/images/products/ketolac-eye.jpg",
    alt: "Ketolac-Eye (Ketorolac Tromethamine Ophthalmic) product pack by Popular Pharmaceuticals",
  },
  "levonix": {
    image: "/images/products/levonix.jpg",
    alt: "Levonix (Levofloxacin) product pack by Popular Pharmaceuticals",
  },
  "meronol": {
    image: "/images/products/meronol.jpg",
    alt: "Meronol (Meropenem Trihydrate) product pack by Popular Pharmaceuticals",
  },
  "micoderm": {
    image: "/images/products/micoderm.jpg",
    alt: "Micoderm (Clotrimazole) product pack by Popular Pharmaceuticals",
  },
  "motigut": {
    image: "/images/products/motigut.jpg",
    alt: "Motigut (Domperidone Maleate) product pack by Popular Pharmaceuticals",
  },
  "nabumax": {
    image: "/images/products/nabumax.jpg",
    alt: "Nabumax (Nabumetone) product pack by Popular Pharmaceuticals",
  },
  "neuronyl": {
    image: "/images/products/neuronyl.jpg",
    alt: "Neuronyl (Pregabalin) product pack by Popular Pharmaceuticals",
  },
  "nuberol-forte": {
    image: "/images/products/nuberol-forte.jpg",
    alt: "Nuberol-Forte (Paracetamol + Orphenadrine) product pack by Popular Pharmaceuticals",
  },
  "nutra-insulin": {
    image: "/images/products/nutra-insulin.jpg",
    alt: "Nutra-Insulin (Human Insulin) product pack by Popular Pharmaceuticals",
  },
  "nutralog": {
    image: "/images/products/nutralog.jpg",
    alt: "Nutralog (Metformin Hydrochloride) product pack by Popular Pharmaceuticals",
  },
  "omepra": {
    image: "/images/products/omepra.jpg",
    alt: "Omepra (Omeprazole) product pack by Popular Pharmaceuticals",
  },
  "optha-flo": {
    image: "/images/products/optha-flo.jpg",
    alt: "Optha-Flo (Moxifloxacin Ophthalmic) product pack by Popular Pharmaceuticals",
  },
  "ostecare-d": {
    image: "/images/products/ostecare-d.jpg",
    alt: "Ostecare-D (Calcium Carbonate + Vitamin D3) product pack by Popular Pharmaceuticals",
  },
  "pantopop-iv": {
    image: "/images/products/pantopop-iv.jpg",
    alt: "Pantopop-IV (Pantoprazole Sodium) product pack by Popular Pharmaceuticals",
  },
  "paracin-susp": {
    image: "/images/products/paracin-susp.jpg",
    alt: "Paracin-Susp (Paracetamol Suspension) product pack by Popular Pharmaceuticals",
  },
  "popular-g5": {
    image: "/images/products/popular-g5.jpg",
    alt: "Popular-G5 (Dextrose 5% IV) product pack by Popular Pharmaceuticals",
  },
  "popular-ns": {
    image: "/images/products/popular-ns.jpg",
    alt: "Popular-NS (Normal Saline) product pack by Popular Pharmaceuticals",
  },
  "popular-rl": {
    image: "/images/products/popular-rl.jpg",
    alt: "Popular-RL (Ringer's Lactate) product pack by Popular Pharmaceuticals",
  },
  "prelax-am": {
    image: "/images/products/prelax-am.jpg",
    alt: "Prelax-AM (Amlodipine Besylate) product pack by Popular Pharmaceuticals",
  },
  "rabekin": {
    image: "/images/products/rabekin.jpg",
    alt: "Rabekin (Rabeprazole Sodium) product pack by Popular Pharmaceuticals",
  },
  "rhonolol": {
    image: "/images/products/rhonolol.jpg",
    alt: "Rhonolol (Bisoprolol Fumarate) product pack by Popular Pharmaceuticals",
  },
  "rosuvex": {
    image: "/images/products/rosuvex.jpg",
    alt: "Rosuvex (Rosuvastatin Calcium) product pack by Popular Pharmaceuticals",
  },
  "solifen": {
    image: "/images/products/solifen.jpg",
    alt: "Solifen (Solifenacin Succinate) product pack by Popular Pharmaceuticals",
  },
  "thyroset": {
    image: "/images/products/thyroset.jpg",
    alt: "Thyroset (Levothyroxine Sodium) product pack by Popular Pharmaceuticals",
  },
  "timol-pop": {
    image: "/images/products/timol-pop.jpg",
    alt: "Timol-POP (Timolol Maleate Ophthalmic) product pack by Popular Pharmaceuticals",
  },
  "urisol": {
    image: "/images/products/urisol.jpg",
    alt: "Urisol (Tamsulosin Hydrochloride) product pack by Popular Pharmaceuticals",
  },
  "uroxa-cath": {
    image: "/images/products/uroxa-cath.jpg",
    alt: "Uroxa-Cath (Nitrofurantoin) product pack by Popular Pharmaceuticals",
  },
  "venticare": {
    image: "/images/products/venticare.jpg",
    alt: "Venticare (Montelukast Sodium) product pack by Popular Pharmaceuticals",
  },
};

export function getPackshot(slug: string): Packshot | undefined {
  return PACKSHOTS[slug];
}
