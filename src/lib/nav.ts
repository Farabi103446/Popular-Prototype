export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products", label: "All Products", description: "Search the full directory" },
      { href: "/products?class=Antibiotics", label: "Antibiotics", description: "Anti-infectives range" },
      { href: "/products?class=Cardiovascular", label: "Cardiovascular", description: "Heart & lipid care" },
      { href: "/products?class=Diabetes", label: "Diabetes & Insulin", description: "Including Human Insulin" },
      { href: "/products?class=IV", label: "IV Fluids", description: "PP-bag IV solutions" },
    ],
  },
  { href: "/quality-manufacturing", label: "Quality & Manufacturing" },
  { href: "/rd", label: "R&D" },
  {
    href: "/media",
    label: "Media & Investors",
    children: [
      { href: "/news", label: "News", description: "Press releases & announcements" },
      { href: "/virtual-tours", label: "Virtual Tours", description: "360° facilities tour gallery" },
      { href: "/media", label: "Corporate Videos & Investors", description: "Videos, gallery & IR reports" },
    ],
  },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const FOOTER_SITEMAP = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about#leadership", label: "Board of Directors" },
      { href: "/about#csr", label: "CSR" },
      { href: "/career", label: "Career" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/products", label: "Our Products" },
      { href: "/quality-manufacturing", label: "Facilities" },
      { href: "/global-operations", label: "Global Presence" },
      { href: "/rd", label: "Research & Development" },
      { href: "/media", label: "Media & Investors" },
    ],
  },
  {
    title: "Newsroom",
    links: [
      { href: "/news", label: "Press Releases" },
      { href: "/virtual-tours", label: "Virtual Tours" },
      { href: "/media#videos", label: "Corporate Videos" },
      { href: "/media#gallery", label: "Image Gallery" },
      { href: "/media#investors", label: "Investor Relations" },
    ],
  },
] as const;
