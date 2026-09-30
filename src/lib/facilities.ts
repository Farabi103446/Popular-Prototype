export interface Facility {
  name: string;
  short: string;
  description: string;
  /** Real photograph of the unit (harvested from popular-pharma.com). */
  image?: string;
  imageAlt?: string;
  /** Short factual chips rendered under the description. */
  facts?: string[];
}

/**
 * General (site-wide) facilities from popular-pharma.com/facilities —
 * master plan, utilities, fire safety, waste management.
 */
export interface GeneralFacilityEntry {
  no: string;
  title: string;
  description: string;
  source?: string;
}

export const GENERAL_FACILITIES: GeneralFacilityEntry[] = [
  {
    no: "01",
    title: "Master Plan",
    description:
      "The master plan for Popular Pharmaceuticals PLC was developed by renowned pharmaceutical consultants from Australia (Asia Pacific Consultants) for a long-term business horizon, with plants erected in line with US FDA, UK MHRA and TGA guidelines.",
    source: "Asia Pacific Consultants, Australia",
  },
  {
    no: "02",
    title: "Purified Water & WFI System",
    description:
      "Separate Purified Water and Water-for-Injection systems of European origin serve the non-beta-lactam and beta-lactam blocks, with captive electricity generation guaranteeing an uninterrupted power supply to the plant.",
    source: "European origin, dual loop",
  },
  {
    no: "03",
    title: "Equipment Sourcing",
    description:
      "Most production equipment is sourced from Europe, USA, Korea and Taiwan with provisions for proper validation — guaranteeing consistent performance and reliability across every line.",
    source: "Europe · USA · Korea · Taiwan",
  },
  {
    no: "04",
    title: "Fire Fighting & Detection",
    description:
      "The whole facility carries an early fire-detection system: a hydrant network across the site, hose reels and portable extinguishers in every building, all orchestrated by smoke and heat detectors and a danger-management system.",
    source: "Supplied & commissioned by Siemens, Germany & Bangladesh",
  },
  {
    no: "05",
    title: "Waste Management System",
    description:
      "A solid-waste management system handles disposal of solid waste and trash materials under a well-defined policy — in-house segregation with provision for incineration to protect the environment.",
    source: "Segregation + incinerator",
  },
  {
    no: "06",
    title: "Modern Manufacturing Process",
    description:
      "Latest manufacturing facilities for oral solids & liquids, cream & ointments, ophthalmics, small volume parenterals (injectables) and large volume parenterals (IV fluids) — with separate, dedicated blocks for penicillins and cephalosporins that are unique of their kind in Bangladesh.",
    source: "Five dosage-form platforms",
  },
];

/**
 * Cleanroom environment classifications used across the plant, per the
 * official facilities page: class 100 (A), 100 (B), 10,000 (C),
 * 100,000 (D) and 100,000 (E) depending on the activities performed.
 */
export const CLEANROOM_CLASSES = [
  {
    id: "A",
    label: "Class 100 (A)",
    use: "Aseptic filling zones",
    detail: "Laminar-airflow workstations where sterile product meets the open environment.",
  },
  {
    id: "B",
    label: "Class 100 (B)",
    use: "Aseptic background areas",
    detail: "The surrounding room for Grade A operations, entered only through airlocks and gowning.",
  },
  {
    id: "C",
    label: "Class 10,000 (C)",
    use: "Sterile preparation",
    detail: "Solution preparation and component preparation ahead of final filtration.",
  },
  {
    id: "D",
    label: "Class 100,000 (D)",
    use: "General production",
    detail: "Oral solids, creams and packaging halls with controlled gowning discipline.",
  },
  {
    id: "E",
    label: "Class 100,000 (E)",
    use: "Support & ancillary",
    detail: "Coring, weighing and material staging areas supporting the production core.",
  },
] as const;

export const FACILITIES: Facility[] = [
  {
    name: "General Unit",
    short: "Oral solids & liquids",
    description:
      "Latest manufacturing facilities for oral solids & liquids, cream & ointments, ophthalmics, small volume parenterals (injectables) and Large Volume Parenterals (IV Fluids), erected in line with US FDA, UK MHRA and TGA guidelines.",
    image: "/images/about/facility-2.webp",
    imageAlt: "Manufacturing facility exterior of the General Unit",
    facts: ["Tablets · Capsules · Liquids · Creams", "US FDA, UK MHRA & TGA guidelines"],
  },
  {
    name: "Cephalosporin Unit",
    short: "Dedicated beta-lactam block",
    description:
      "A separate and dedicated cephalosporin facility — unique of its kind in Bangladesh — with segregated air handling and self-levelling epoxy flooring to eliminate cross-contamination.",
    image: "/images/about/facility-6.webp",
    imageAlt: "Production hall serving the dedicated cephalosporin block",
    facts: ["Fully segregated air handling", "Self-levelling epoxy flooring"],
  },
  {
    name: "Penicillin Unit",
    short: "Fully isolated penicillin block",
    description:
      "Dedicated penicillin manufacturing facility with independent HVAC and pressure cascades, one of only a handful of its kind in the country.",
    facts: ["Independent HVAC & pressure cascades", "Complete cross-contamination isolation"],
  },
  {
    name: "Sterile Product Unit",
    short: "Injectables & SVP",
    description:
      "Small volume parenteral production in Class 100 (A/B) environments with terminal sterilization and aseptic filling supported by validated sterilization cycles.",
    image: "/images/about/facility-3.webp",
    imageAlt: "Sterile production area inside the plant",
    facts: ["Class 100 (A/B) aseptic filling", "Validated sterilization cycles"],
  },
  {
    name: "Hormone Unit",
    short: "Dedicated hormone facility",
    description:
      "State-of-the-art, dedicated hormone facility introduced in 2010, including capability for lyophilized fertility hormones — a first in Bangladesh.",
    image: "/images/about/facility-5.webp",
    imageAlt: "Hormone and lyophilization facility",
    facts: ["Commissioned 2010", "Lyophilized fertility hormones — a Bangladesh first"],
  },
  {
    name: "Vaccine Unit",
    short: "Dedicated vaccine block",
    description:
      "Dedicated and state-of-the-art vaccine facility introduced in 2011 with cold-chain controlled storage and distribution.",
    facts: ["Commissioned 2011", "Cold-chain controlled storage & distribution"],
  },
  {
    name: "Animal Health Unit",
    short: "Veterinary products",
    description:
      "Dedicated manufacturing for animal health products serving the poultry, cattle and companion animal segments since 2008.",
    facts: ["Serving veterinary care since 2008", "Poultry · cattle · companion animals"],
  },
  {
    name: "Dialysis & IV Unit",
    short: "IV fluids in PP bags",
    description:
      "First company in Bangladesh to manufacture IV fluids in environment-friendly PP bags, plus dedicated dialysis fluid production for nephrology care.",
    facts: ["First PP-bag IV fluids in Bangladesh", "Dedicated dialysis fluid line"],
  },
  {
    name: "ORS Unit",
    short: "Oral rehydration salts",
    description:
      "Dedicated oral rehydration salt production supporting national public health programs and export markets.",
    facts: ["National public-health programs", "ORS for export markets"],
  },
];

export const QUALITY_INFRASTRUCTURE = [
  {
    title: "Master Plan by Global Consultants",
    description:
      "The master plan was developed by renowned pharmaceutical consultants from Australia (Asia Pacific Consultants) for long-term, scalable operations.",
  },
  {
    title: "Purified Water & WFI Systems",
    description:
      "Separate Purified Water and Water-for-Injection systems of European origin serve non-beta-lactam and beta-lactam blocks, with captive power generation for uninterrupted supply.",
  },
  {
    title: "European, US & Asian Equipment",
    description:
      "Equipment sourced from Europe, USA, Korea and Taiwan with full validation provisions to guarantee consistent performance and reliability.",
  },
  {
    title: "Siemens Building Management System",
    description:
      "Central BMS from Siemens, Germany monitors and controls HVAC, chillers, pumps, boilers, firefighting and air compression across the site.",
  },
  {
    title: "Cleanroom Classifications",
    description:
      "Environment classifications from Class 100 (A/B) through Class 100,000 (D/E) depending on activity, with HVAC designed to meet US FDA, EU GMP and ASHRAE requirements.",
  },
  {
    title: "Fire Safety & Waste Management",
    description:
      "Early fire detection by Siemens with hydrant networks across the site, plus a defined solid-waste policy including segregation and incineration to protect the environment.",
  },
];

export const ACCREDITATIONS = [
  {
    name: "WHO cGMP",
    authority: "World Health Organization",
    description:
      "Certified manufacturer of pharmaceutical finished formulations under WHO current Good Manufacturing Practice.",
  },
  {
    name: "ISO 9001:2015",
    authority: "Quality Management System",
    description:
      "Certified quality management system covering formulation manufacturing and quality operations.",
  },
  {
    name: "NAFDAC",
    authority: "Federal Republic of Nigeria",
    description:
      "Approved by the National Agency for Food and Drug Administration and Control, Nigeria.",
  },
  {
    name: "Philippines FDA",
    authority: "Republic of the Philippines",
    description:
      "Audited and approved by the Philippine Food and Drug Administration.",
  },
  {
    name: "PPB, Kenya",
    authority: "Pharmacy & Poisons Board, MOH",
    description: "GMP compliance certification from the Pharmacy & Poisons Board of Kenya.",
  },
  {
    name: "Nepal DDA",
    authority: "Department of Drug Administration",
    description: "Approved by the Food and Drugs Administration, Ministry of Health, Nepal.",
  },
  {
    name: "Yemen SBDA",
    authority: "Supreme Board of Drugs & Medical Appliances",
    description:
      "Approved by the Supreme Board of Drugs and Medical Appliances, Republic of Yemen.",
  },
];

export const QA_QC_PRACTICES = [
  {
    title: "Quality Assurance",
    points: [
      "Documented cGMP compliance across all dedicated facilities",
      "Batch record review and product release by independent QA",
      "Deviation, change control and CAPA management systems",
      "Supplier qualification and incoming material control",
      "Regular self-inspection and mock audit programs",
    ],
  },
  {
    title: "Quality Control",
    points: [
      "Full analytical testing of raw materials, intermediates and finished products",
      "HPLC, GC, UV, dissolution and stability chambers of European origin",
      "Microbiology lab with sterility, endotoxin and environmental monitoring",
      "Ongoing stability program per ICH guidelines",
      "Reference standard management and method validation",
    ],
  },
];
