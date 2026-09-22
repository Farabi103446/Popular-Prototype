import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllProducts } from "@/lib/api";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/quality-manufacturing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/global-operations`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/rd`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/media`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/career`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const productPages: MetadataRoute.Sitemap = getAllProducts().map((p) => ({
    url: `${base}/products/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...productPages];
}
