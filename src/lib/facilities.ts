export interface Facility {
  name: string;
  short: string;
  description: string;
}

export const FACILITIES: Facility[] = [
  {
    name: "General Unit",
    short: "Oral solids & liquids",
    description:
      "Latest manufacturing facilities for oral solids & liquids, cream & ointments, ophthalmics, small volume parenterals (injectables) and Large Volume Parenterals (IV Fluids), erected in line with US FDA, UK MHRA and TGA guidelines.",
  },
  {
    name: "Cephalosporin Unit",
    short: "Dedicated beta-lactam block",
    description:
      "A separate and dedicated cephalosporin facility — unique of its kind in Bangladesh — with segregated air handling and self-levelling epoxy flooring to eliminate cross-contamination.",
  },
  {
    name: "Penicillin Unit",
    short: "Fully isolated penicillin block",
    description:
      "Dedicated penicillin manufacturing facility with independent HVAC and pressure cascades, one of only a handful of its kind in the country.",
  },
  {
    name: "Sterile Product Unit",
    short: "Injectables & SVP",
    description:
      "Small volume parenteral production in Class 100 (A/B) environments with terminal sterilization and aseptic filling supported by validated sterilization cycles.",
  },
  {
    name: "Hormone Unit",
    short: "Dedicated hormone facility",
    description:
      "State-of-the-art, dedicated hormone facility introduced in 2010, including capability for lyophilized fertility hormones — a first in Bangladesh.",
  },
  {
    name: "Vaccine Unit",
    short: "Dedicated vaccine block",
    description:
      "Dedicated and state-of-the-art vaccine facility introduced in 2011 with cold-chain controlled storage and distribution.",
  },
  {
    name: "Animal Health Unit",
    short: "Veterinary products",
    description:
      "Dedicated manufacturing for animal health products serving the poultry, cattle and companion animal segments since 2008.",
  },
  {
    name: "Dialysis & IV Unit",
    short: "IV fluids in PP bags",
    description:
      "First company in Bangladesh to manufacture IV fluids in environment-friendly PP bags, plus dedicated dialysis fluid production for nephrology care.",
  },
  {
    name: "ORS Unit",
    short: "Oral rehydration salts",
    description:
      "Dedicated oral rehydration salt production supporting national public health programs and export markets.",
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
