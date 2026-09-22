export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "Press Release" | "Event" | "Award" | "Product Launch";
  excerpt: string;
  image?: string;
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
  },
  {
    id: "n3",
    slug: "insulin-exports-expand-south-asia",
    title: "Popular expands Human Insulin exports across South Asia",
    date: "2024-05-21",
    category: "Press Release",
    excerpt:
      "Building on its position as the pioneer manufacturer of Human Insulin in Bangladesh, Popular Pharmaceuticals PLC announced expanded registration and supply agreements for insulin products in regional markets.",
    image: "/images/news/insulin.jpg",
  },
  {
    id: "n4",
    slug: "new-cephalosporin-line-commissioned",
    title: "New high-speed cephalosporin line commissioned at Dhamrai plant",
    date: "2024-03-14",
    category: "Press Release",
    excerpt:
      "A new high-speed cephalosporin manufacturing line has been commissioned at the company's Dhamrai facility, increasing annual capacity and reinforcing Popular's leadership in dedicated beta-lactam production.",
    image: "/images/news/production.jpg",
  },
  {
    id: "n5",
    slug: "iso-9001-2015-recertification",
    title: "Popular recertified to ISO 9001:2015 quality management standard",
    date: "2024-01-30",
    category: "Award",
    excerpt:
      "Following a comprehensive external audit, Popular Pharmaceuticals PLC has successfully renewed its ISO 9001:2015 certification, covering the full scope of formulation manufacturing and quality operations.",
    image: "/images/news/quality.jpg",
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
  },
];

export function getAllNews(): NewsItem[] {
  return NEWS;
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}
