export interface PipelineItem {
  molecule: string;
  area: string;
  stage: "Development" | "Bio-equivalence" | "Registration" | "Launch Ready";
  market: string;
}

export const RD_FOCUS_AREAS = [
  {
    title: "Formulation Science",
    description:
      "Advanced oral solid dosage, lyophilization, sustained-release and combination product development for high-value molecules.",
  },
  {
    title: "Biologics & Sterile Readiness",
    description:
      "Building on the pioneering Human Insulin heritage with sterile, peptide and biologic-compatible development capabilities.",
  },
  {
    title: "New Molecules & First-to-Market",
    description:
      "A track record of Bangladesh firsts — PPI injections, IV fat emulsions, streptokinase and lyophilized fertility hormones.",
  },
  {
    title: "Technology & Analytical Development",
    description:
      "Method development, validation and stability programs aligned with ICH guidelines, supported by European analytical instrumentation.",
  },
];

export const PIPELINE: PipelineItem[] = [
  { molecule: "Insulin Glargine", area: "Diabetes", stage: "Registration", market: "Bangladesh & exports" },
  { molecule: "Dapagliflozin", area: "Diabetes", stage: "Bio-equivalence", market: "Bangladesh" },
  { molecule: "Ticagrelor", area: "Cardiology", stage: "Development", market: "Bangladesh" },
  { molecule: "Sacubitril/Valsartan", area: "Cardiology", stage: "Bio-equivalence", market: "Bangladesh" },
  { molecule: "Rivaroxaban", area: "Cardiology", stage: "Development", market: "Bangladesh & exports" },
  { molecule: "Afatinib", area: "Oncology", stage: "Development", market: "Bangladesh" },
  { molecule: "Olaparib", area: "Oncology", stage: "Development", market: "Bangladesh" },
  { molecule: "Vildagliptin + Metformin", area: "Diabetes", stage: "Launch Ready", market: "Bangladesh" },
  { molecule: "Esomeprazole IV", area: "Gastroenterology", stage: "Launch Ready", market: "Bangladesh & exports" },
  { molecule: "Regorafenib", area: "Oncology", stage: "Registration", market: "Bangladesh" },
];

export const PIPELINE_STAGES: PipelineItem["stage"][] = [
  "Development",
  "Bio-equivalence",
  "Registration",
  "Launch Ready",
];

/**
 * The three working groups of the R&D division, modeled on how leading
 * regional manufacturers (Incepta, ACME, Beximco) present their labs:
 * Formulation, Analytical and Regulatory — each with real equipment and
 * clear responsibilities, ending in technical transfer to the plant.
 */
export interface RDGroup {
  id: string;
  name: string;
  mandate: string;
  responsibilities: string[];
  equipment: string[];
}

export const RD_GROUPS: RDGroup[] = [
  {
    id: "formulation",
    name: "Formulation Development",
    mandate:
      "Turns a molecule into a manufacturable, patient-ready dosage form — from first lab-scale trial batches to validated, transferable processes.",
    responsibilities: [
      "New product development across tablets, capsules, syrups, suspensions, creams and ointments",
      "Sterile and semi-solid development building on our insulin and IV heritage — small volume parenterals, lyophilized products and PP-bag infusions",
      "Difficult-to-copy formulations: modified-release, multi-layer, combination products",
      "Process scale-up and technical transfer packages executed jointly with Production and QA",
    ],
    equipment: [
      "Rapid mixer granulator",
      "Fluid bed processor",
      "Double cone & IBC blenders",
      "R&D tooling compression machine",
      "Tablet coater",
      "High-shear homogenizer",
      "Lyophilizer with dispensing isolator",
    ],
  },
  {
    id: "analytical",
    name: "Analytical Development",
    mandate:
      "Proves that every formulation is what it claims to be — method development, validation and the stability evidence behind each registration dossier.",
    responsibilities: [
      "Development and validation of analytical methods for finished products and active ingredients",
      "Comparative dissolution and equivalence studies against reference products",
      "Stability programs designed to ICH guidelines — zones IVb and long-term, interim and accelerated",
      "Ongoing support to QC for method troubleshooting and out-of-specification investigations",
    ],
    equipment: [
      "HPLC and UPLC systems",
      "Gas chromatography with headspace",
      "UV-Visible spectrophotometers",
      "Dissolution testing apparatus (USP)",
      "Potentiometric titration & Karl Fischer moisture analysis",
      "Stability chambers with continuous monitoring",
    ],
  },
  {
    id: "regulatory",
    name: "Regulatory Affairs",
    mandate:
      "Owns the dossier — preparing, defending and maintaining the technical documentation that gets every product registered, at home and abroad.",
    responsibilities: [
      "CTD and eCTD dossier preparation for the DGDA and export regulators",
      "Registration lifecycle management: variations, renewals and post-approval changes",
      "Regulatory intelligence for target export markets across Asia, Africa and Latin America",
      "Coordination with auditors and inspectorates during site inspections",
    ],
    equipment: [
      "eCTD publishing and document management platform",
      "Regulatory intelligence subscriptions for focus markets",
      "Pharmacopoeial reference library (BP, USP, Ph. Eur.)",
    ],
  },
];

/** Capabilities demonstrated across the development labs, ACME-style. */
export const RD_CAPABILITIES = [
  "Oral solids — immediate and modified release",
  "Lyophilized injectables",
  "Small volume parenterals",
  "PP-bag IV fluids",
  "Insulin & peptide handling",
  "Sachets & effervescent powders",
  "Creams & ointments",
  "Oral liquids & suspensions",
  "Ophthalmic preparations",
  "Method validation to ICH Q2",
];
