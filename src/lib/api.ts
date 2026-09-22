import "server-only";
import { PRODUCTS, type Product } from "./products";
import { EXPORT_COUNTRIES } from "./global";
import { JOBS } from "./jobs";
import { NEWS } from "./news";

export const CATALOG_PDF = "/catalog.pdf";

export function productPdfPath(product: Product): string {
  return `/pdf/${product.slug}.pdf`;
}

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.therapeuticClass === product.therapeuticClass && p.slug !== product.slug
  ).slice(0, limit);
}

export function getExportCountries() {
  return EXPORT_COUNTRIES;
}

export function getAllJobs() {
  return JOBS;
}

export function getJobBySlug(slug: string) {
  return JOBS.find((j) => j.slug === slug);
}

export function getLatestNews(count: number) {
  return [...NEWS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, count);
}

export function getAllNews() {
  return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
