export interface Person {
  name: string;
  title: string;
  group: "board" | "management";
  note?: string;
  /** Portrait served from /images/people — sourced from popular-pharma.com */
  image?: string;
}

export const PEOPLE: Person[] = [
  {
    name: "Dr. Mostafizur Rahman",
    title: "Managing Director & CEO",
    group: "board",
    image: "/images/people/md-portrait.webp",
  },
  { name: "Murtuza Rahman", title: "Director", group: "board", image: "/images/people/murtuza-rahman.webp" },
  { name: "Sardin Rahman", title: "Deputy Managing Director", group: "board", image: "/images/people/sardin-rahman.jpg" },
  { name: "Sadia Rahman", title: "Director", group: "board", image: "/images/people/sadia-rahman.jpg" },
  {
    name: "Dr. Mostafizur Rahman",
    title: "Managing Director & CEO",
    group: "management",
    image: "/images/people/md-portrait.webp",
  },
  { name: "Sardin Rahman", title: "Deputy Managing Director", group: "management", image: "/images/people/sardin-rahman.jpg" },
  {
    name: "Ahmed Kamrul Alam",
    title: "Executive Director, Marketing & Sales",
    group: "management",
    image: "/images/people/ahmed-kamrul-alam.jpg",
  },
  {
    name: "Safiul Azam, FCMA",
    title: "Director, Finance & Accounts",
    group: "management",
    image: "/images/people/safiul-azam.webp",
  },
  {
    name: "Mohammad Abul Kalam Azad",
    title: "Director, Project & Plant Operations",
    group: "management",
    image: "/images/people/abul-kalam-azad.webp",
  },
  {
    name: "Dr. S.M. Rezaul Ahsan",
    title: "Director, HR and Admin",
    group: "management",
    image: "/images/people/rezaul-ahsan.jpg",
  },
  {
    name: "Md. Nezab Uddin",
    title: "Director, Quality Operations & IRA",
    group: "management",
    image: "/images/people/nezab-uddin.jpg",
  },
];

export const FOUNDER = {
  name: "Late Tahera Akhter",
  title: "Founder Chairman",
  image: "/images/people/founder-chairman.webp",
  message:
    "Our Founding Chairman, Mrs. Tahera Akhter, began her journey with Popular Diagnostic Ltd. in 1982. Under her visionary leadership, the organization expanded its footprint beyond diagnostic services into pharmaceuticals, hospitals, and medical education, establishing itself as a leading healthcare group.",
};

export const MD_MESSAGE = {
  name: "Dr. Mostafizur Rahman",
  title: "Managing Director & CEO",
  image: "/images/people/md-portrait.webp",
  paragraphs: [
    "Forty-one years ago, we embarked on a formidable journey with modest resources, but with many hopes and daring dreams. Today, Popular stands as a pioneer in Bangladesh's healthcare sector, offering comprehensive services through our Diagnostic Centers, Pharmaceuticals, Medical College, and Hospital.",
    "The pharmaceutical sector is the most technologically advanced manufacturing industry in Bangladesh and the second largest in terms of government revenue contribution. The pharmaceutical market is continuously growing, both domestically and internationally. To sustain this growth, Bangladeshi pharmaceutical companies must rethink their current business models and pursue global, innovation-led growth. This is our mission at Popular Pharmaceuticals PLC.",
    "In the domestic market, we are focused on maintaining and enhancing our leadership in key therapeutic areas through strong, prescription-driven sales. We will continue to invest significantly in technology to strengthen our pipeline of new products for both Bangladesh and international markets.",
    "Our international pharmaceutical markets now span 33 countries across Asia, Africa, Latin America, and Europe. We anticipate substantial growth in the international segment of our business in the coming years.",
    "The success of Popular Pharmaceuticals PLC is the result of dedicated efforts over time. Our competent employees, whom we consider our Human Capital, are the driving force behind our achievements. We value our employees as an intangible asset, recognizing their contributions through strong Human Capital Management, which includes hiring, managing, training, and retaining talented and high-performing individuals.",
    "Looking ahead, we are determined to achieve our goal of becoming a leader in affordable healthcare solutions. We will continue to build on our core values, our people, and our products by fostering innovation, entrepreneurship, and growth.",
  ],
};
