export interface GalleryItem {
  title: string;
  tag: "Facilities" | "Products" | "Events" | "People";
  svg: string;
}

export const GALLERY: GalleryItem[] = [
  { title: "IV fluid filling line", tag: "Facilities", svg: "iv-line" },
  { title: "Tablet compression hall", tag: "Facilities", svg: "compression" },
  { title: "Quality control laboratory", tag: "Facilities", svg: "qc-lab" },
  { title: "Product portfolio showcase", tag: "Products", svg: "portfolio" },
  { title: "Dedicated cephalosporin block", tag: "Facilities", svg: "cephalosporin" },
  { title: "Warehouse & logistics", tag: "Facilities", svg: "warehouse" },
  { title: "Annual sales conference", tag: "Events", svg: "conference" },
  { title: "Free health camp", tag: "Events", svg: "health-camp" },
  { title: "Team Popular at work", tag: "People", svg: "team" },
];

export const VIDEOS = [
  {
    title: "Modern Manufacturing Process",
    description:
      "Take a tour through our facilities in motion — from raw material to finished formulation.",
    videoId: "popular-manufacturing-tour",
  },
  {
    title: "We Care for Life",
    description:
      "The story of Popular Pharmaceuticals and the people behind three decades of healthcare service.",
    videoId: "we-care-for-life",
  },
  {
    title: "Quality Culture at Popular",
    description:
      "Inside our quality operations — QA, QC, stability and microbiology at work.",
    videoId: "quality-culture",
  },
];

export const REPORTS = [
  { title: "Annual Report 2023", size: "8.4 MB", period: "FY 2023" },
  { title: "Annual Report 2022", size: "7.1 MB", period: "FY 2022" },
  { title: "Annual Report 2021", size: "6.8 MB", period: "FY 2021" },
  { title: "Q1 2024 Quarterly Report", size: "1.9 MB", period: "Jan–Mar 2024" },
  { title: "Q4 2023 Quarterly Report", size: "2.1 MB", period: "Oct–Dec 2023" },
];

export const FINANCIAL_HIGHLIGHTS = [
  { label: "Revenue Growth (YoY)", value: "+18%" },
  { label: "Domestic Market Rank", value: "Top 15" },
  { label: "Export Markets", value: "32" },
  { label: "Manufacturing Units", value: "12" },
];
