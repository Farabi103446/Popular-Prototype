export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: "Head Office, Dhaka" | "Factory, Dhamrai" | "Field (Nationwide)";
  type: "Full-time" | "Contract" | "Part-time";
  level: "Entry" | "Mid" | "Senior";
  posted: string;
  deadline: string;
  description: string;
  requirements: string[];
}

export const JOBS: Job[] = [
  {
    id: "j1",
    slug: "product-executive",
    title: "Product Executive",
    department: "Product Management",
    location: "Head Office, Dhaka",
    type: "Full-time",
    level: "Mid",
    posted: "2024-06-01",
    deadline: "2024-07-15",
    description:
      "Drive the brand performance of an assigned product portfolio through medico-marketing strategy, KOL engagement, sales-force training and campaign execution in close collaboration with the sales team.",
    requirements: [
      "Bachelor's/Master's in Pharmacy, Medicine or Life Sciences",
      "3–5 years of product management experience in pharma",
      "Strong presentation and analytical skills",
      "Willingness to travel nationwide",
    ],
  },
  {
    id: "j2",
    slug: "production-officer-oral-solids",
    title: "Production Officer — Oral Solids",
    department: "Manufacturing",
    location: "Factory, Dhamrai",
    type: "Full-time",
    level: "Entry",
    posted: "2024-06-10",
    deadline: "2024-07-20",
    description:
      "Supervise granulation, compression and coating operations in the general oral solids facility, ensuring cGMP compliance, line clearance discipline and achievement of daily production targets.",
    requirements: [
      "B.Pharm / B.Sc in Engineering or Chemistry",
      "0–2 years experience (fresh graduates may apply)",
      "Sound knowledge of cGMP and SOPs",
      "Shift-based availability",
    ],
  },
  {
    id: "j3",
    slug: "qa-executive",
    title: "Quality Assurance Executive",
    department: "Quality Operations",
    location: "Factory, Dhamrai",
    type: "Full-time",
    level: "Mid",
    posted: "2024-05-25",
    deadline: "2024-07-10",
    description:
      "Own in-process quality checks, batch documentation review, deviation and change-control management, and support regulatory audits across dedicated manufacturing facilities.",
    requirements: [
      "M.Pharm / B.Pharm with 3+ years QA experience",
      "Hands-on with ICH guidelines, validation and data integrity",
      "Experience with MOH/DRA audits preferred",
      "Strong documentation discipline",
    ],
  },
  {
    id: "j4",
    slug: "medical-officer",
    title: "Medical Officer",
    department: "Medical Services",
    location: "Head Office, Dhaka",
    type: "Full-time",
    level: "Senior",
    posted: "2024-05-18",
    deadline: "2024-07-05",
    description:
      "Provide scientific and clinical input to marketing teams, conduct CME sessions with clinicians, review promotional materials, and lead pharmacovigilance activities for assigned therapeutic areas.",
    requirements: [
      "MBBS with 5+ years pharma industry experience",
      "Excellent clinical communication skills",
      "Experience in pharmacovigilance systems",
      "Strong publication and CME track record",
    ],
  },
  {
    id: "j5",
    slug: "export-executive",
    title: "Export Executive — International Business",
    department: "International Business",
    location: "Head Office, Dhaka",
    type: "Full-time",
    level: "Mid",
    posted: "2024-06-05",
    deadline: "2024-07-25",
    description:
      "Coordinate export documentation, product registration pipelines and distributor relationships across 30+ international markets in Asia, Africa and Latin America.",
    requirements: [
      "Bachelor's degree in Business/Pharmacy",
      "2+ years in export operations or international pharma sales",
      "Familiarity with regulatory dossiers and LC/trade finance",
      "Excellent English communication",
    ],
  },
  {
    id: "j6",
    slug: "medical-representative-nationwide",
    title: "Medical Representative (Multiple Territories)",
    department: "Marketing & Sales",
    location: "Field (Nationwide)",
    type: "Full-time",
    level: "Entry",
    posted: "2024-06-12",
    deadline: "2024-07-31",
    description:
      "Promote Popular products to doctors, pharmacies and hospitals in assigned territories, achieve sales targets and build lasting relationships with healthcare professionals.",
    requirements: [
      "Graduate in any discipline (science background preferred)",
      "Fresh graduates are encouraged to apply",
      "Willing to be posted anywhere in Bangladesh",
      "Two-wheeler driving license",
    ],
  },
];

export function getAllJobs(): Job[] {
  return JOBS;
}

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}
