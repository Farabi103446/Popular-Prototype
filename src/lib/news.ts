export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "Press Release" | "Event" | "Award" | "Product Launch";
  excerpt: string;
  image?: string;
  /** Caption shown under the lead image on the detail page. */
  imageCaption?: string;
  /** Full article paragraphs for the detail page. */
  body?: string[];
}

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    slug: "dhaka-flow-health-checkup-vaccination",
    title: "Dhaka Flow with free Health Checkup and Vaccination",
    date: "2024-07-09",
    category: "Event",
    excerpt:
      "Popular Pharmaceuticals PLC partnered with Dhaka Flow to bring free health checkups and vaccination services to communities across the capital, reinforcing our commitment to accessible healthcare for all.",
    image: "/images/news/health-camp.jpg",
    body: [
      "Popular Pharmaceuticals PLC joined hands with Dhaka Flow, a community wellness initiative, to deliver free health checkups and vaccination services across neighbourhoods of the capital.",
      "Over the course of the campaign, physicians and trained volunteers screened hundreds of residents for blood pressure, blood glucose and body-mass index, while on-site nurses administered routine vaccinations against preventable diseases.",
      "Health-education sessions accompanied every camp, covering nutrition, hygiene and the importance of routine screening for early detection of non-communicable diseases.",
      "The initiative reflects the company's long-standing commitment to accessible healthcare beyond the pharmacy shelf, and further community health drives are planned through the rest of the year.",
    ],
  },
  {
    id: "n2",
    slug: "green-championship-award",
    title: "Green Championship Award",
    date: "2024-07-09",
    category: "Award",
    excerpt:
      "Popular Pharmaceuticals PLC received the Green Championship Award in recognition of outstanding environmental stewardship, sustainable manufacturing practices, and resource conservation across our facilities.",
    image: "/images/news/green-award.jpg",
    body: [
      "Popular Pharmaceuticals PLC has been honoured with the Green Championship Award in recognition of outstanding environmental stewardship across its manufacturing operations.",
      "The jury cited the company's effluent-treatment upgrades, energy-efficient utilities, and its transition toward greener solvent handling at the Dhamrai plant as decisive factors.",
      "Sustainable manufacturing has been a board-level priority since the campus was designed, with dedicated ETP capacity, rainwater harvesting and a zero-open-burn policy across the site.",
      "The award will fund a new tree-plantation and biodiversity program around the plant perimeter, to be executed jointly with local schools.",
    ],
  },
  {
    id: "n3",
    slug: "insulin-exports-expand-south-asia",
    title: "Popular expands Human Insulin exports across South Asia",
    date: "2024-05-21",
    category: "Press Release",
    excerpt:
      "Building on its position as the pioneer manufacturer of Human Insulin in Bangladesh, Popular Pharmaceuticals PLC announced expanded registration and supply agreements for insulin products in regional markets.",
    image: "/images/about/facility-2.webp",
    imageCaption:
      "Insulin and infusion production at the Dhamrai plant, the facility behind Popular's insulin export program.",
    body: [
      "Building on its position as the pioneer manufacturer of Human Insulin in Bangladesh, Popular Pharmaceuticals PLC announced expanded registration and supply agreements for its insulin portfolio across South Asian markets.",
      "The move establishes new distribution partnerships covering both vial and cartridge presentations, with country-specific registration dossiers progressing in parallel.",
      "Cold-chain integrity remains central to the program: every export consignment ships under validated 2-8°C packaging with continuous temperature logging.",
      "The expansion underlines the company's ambition to make affordable, WHO-standard insulin available to patients across the region.",
    ],
  },
  {
    id: "n4",
    slug: "new-cephalosporin-line-commissioned",
    title: "New high-speed cephalosporin line commissioned at Dhamrai plant",
    date: "2024-03-14",
    category: "Press Release",
    excerpt:
      "A new high-speed cephalosporin manufacturing line has been commissioned at the company's Dhamrai facility, increasing annual capacity and reinforcing Popular's leadership in dedicated beta-lactam production.",
    image: "/images/about/facility-4.webp",
    imageCaption:
      "The segregated cephalosporin block at Dhamrai, where the new high-speed line has been commissioned.",
    body: [
      "A new high-speed cephalosporin manufacturing line has been commissioned at the company's Dhamrai facility, increasing annual capacity and reinforcing Popular's leadership in dedicated beta-lactam production.",
      "The line is fully segregated from the general production block, in line with international GMP expectations for cephalosporin handling, and features isolator-based dispensing and automated washing lines.",
      "Commissioning included three consecutive validation batches, environmental-monitoring qualification and process-simulation media fills before routine production was approved.",
      "Capacity from the new line will serve both domestic demand and the company's growing export order book for oral cephalosporins.",
    ],
  },
  {
    id: "n5",
    slug: "iso-9001-2015-recertification",
    title: "Popular recertified to ISO 9001:2015 quality management standard",
    date: "2024-01-30",
    category: "Award",
    excerpt:
      "Following a comprehensive external audit, Popular Pharmaceuticals PLC has successfully renewed its ISO 9001:2015 certification, covering the full scope of formulation manufacturing and quality operations.",
    image: "/images/about/facility-3.webp",
    imageCaption:
      "The quality-control laboratory covered by the renewed ISO 9001:2015 scope.",
    body: [
      "Following a comprehensive external audit, Popular Pharmaceuticals PLC has successfully renewed its ISO 9001:2015 certification, covering the full scope of formulation manufacturing and quality operations.",
      "Auditors reviewed document control, supplier qualification, deviation management, training records and customer-feedback loops across the Dhaka corporate office and the Dhamrai plant.",
      "The audit concluded without any major non-conformance, and the certificate now carries the revised scope covering recent facility expansions.",
      "Management thanked the quality team, noting that recertification is an independent confirmation of a working quality culture rather than a paperwork exercise.",
    ],
  },
  {
    id: "n6",
    slug: "campus-recruitment-program-2024",
    title: "Popular launches 2024 campus recruitment program for young scientists",
    date: "2023-11-12",
    category: "Event",
    excerpt:
      "The company welcomed a new cohort of pharmacy, chemistry and engineering graduates through its structured campus recruitment and management trainee program.",
    image: "/images/news/graduates.jpg",
    body: [
      "The company welcomed a new cohort of pharmacy, chemistry and engineering graduates through its structured campus recruitment and management trainee program.",
      "Recruits complete a twelve-month rotation across production, quality assurance, quality control and regulatory affairs before confirmation into their home functions.",
      "Each trainee is paired with a senior mentor, and the cohort will present capstone improvement projects to the executive committee at the end of the rotation year.",
      "The program continues to be one of the company's primary pipelines for building tomorrow's technical leadership from within.",
    ],
  },
];

export function getAllNews(): NewsItem[] {
  return NEWS;
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}
