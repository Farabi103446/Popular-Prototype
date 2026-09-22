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
