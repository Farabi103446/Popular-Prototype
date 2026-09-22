export interface Milestone {
  year: string;
  items: string[];
}

export const MILESTONES: Milestone[] = [
  {
    year: "2002",
    items: ["Popular Pharmaceuticals PLC established on December 8"],
  },
  {
    year: "2005",
    items: [
      "Started commercial operation",
      "Started manufacturing in dedicated Cephalosporin facility",
    ],
  },
  {
    year: "2006",
    items: [
      "First in Bangladesh to manufacture PPI injections",
      "Started international operation by exporting medicines",
    ],
  },
  {
    year: "2007",
    items: [
      "First in Bangladesh to manufacture Human Insulin",
      "First company to manufacture IV fluid in environment-friendly PP bag in Bangladesh",
      "Started manufacturing dialysis fluid in Bangladesh",
    ],
  },
  {
    year: "2008",
    items: [
      "Started Animal Health business",
      "Achieved ISO 9001:2008 for quality management system",
    ],
  },
  {
    year: "2009",
    items: ["First in Bangladesh to manufacture Intravenous Fat Emulsions"],
  },
  {
    year: "2010",
    items: [
      "First in Bangladesh to manufacture Streptokinase Injection",
      "Introduced dedicated, state-of-the-art Hormone facility",
    ],
  },
  { year: "2011", items: ["Introduced dedicated, state-of-the-art Vaccine facility"] },
  {
    year: "2013",
    items: ["First in Bangladesh to manufacture Lyophilized fertility hormones"],
  },
];

export interface CoreValue {
  title: string;
  description: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Honesty and Integrity",
    description:
      "We uphold honesty, integrity, and dedication in all our endeavors. We cultivate a disciplined environment that promotes transparency throughout the organization.",
  },
  {
    title: "Ownership",
    description:
      "We take full ownership of our work, demonstrating accountability and commitment in every task. We proactively address challenges and drive results.",
  },
  {
    title: "Respect",
    description:
      "We treat all individuals with respect, regardless of race, religion, gender, or position. We value individual opinions, talents and creativity.",
  },
  {
    title: "Quality",
    description:
      "We are committed to maintain the highest standards of quality, safety and reliability in all our work, delivering the highest quality products and services.",
  },
  {
    title: "Environment",
    description:
      "We are dedicated to sustainable practices that conserve resources, optimize energy use and minimize environmental impact, fostering a healthier planet.",
  },
];

export const CSR = {
  intro:
    "Popular Pharmaceuticals PLC is committed to improve the quality of life and enhance the vitality of the communities in which we operate. We acknowledge our economic, social and environmental responsibility when providing solutions for the benefit of patients and society.",
  items: [
    {
      title: "Economic Responsibility",
      description:
        "Donation from the CSR fund for the Development & Research of 'The Dhaka University Fund' to strengthen the economic stability of the leading university of the country.",
    },
    {
      title: "Social Responsibility",
      description:
        "Scholarship fund for the postgraduate medical student fellowship program of Bangabandhu Sheikh Mujib Medical University (BSMMU) from 2023–2032.",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Sanitation and Healthcare Program with Casper Foundation, supporting community health and hygiene infrastructure.",
    },
  ],
};
