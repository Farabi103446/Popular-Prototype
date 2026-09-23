import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { getAllNews } from "@/lib/api";

export const metadata: Metadata = {
  title: "News",
  description:
    "Press releases and announcements from Popular Pharmaceuticals PLC — new launches, recognitions and company updates.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <h1 className="sr-only">News — Popular Pharmaceuticals Press Releases</h1>

      <section className="section" aria-label="Press releases">
        <div className="container-x">
          <p className="eyebrow">Press Releases</p>
          <h2 className="h-section">News at Popular Pharmaceuticals</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
