import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { getAllNews, getNewsBySlug } from "@/lib/news";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NewsCard from "@/components/NewsCard";

export function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return { title: "News not found" };
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news/${item.slug}` },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const related = getAllNews()
    .filter((n) => n.slug !== item.slug)
    .sort((a, b) => {
      const catA = a.category === item.category ? 1 : 0;
      const catB = b.category === item.category ? 1 : 0;
      return catB - catA || b.date.localeCompare(a.date);
    })
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: item.title,
            datePublished: item.date,
            image: item.image ? [item.image] : undefined,
            articleSection: item.category,
          }),
        }}
      />

      <article>
        {/* Article header band */}
        <header className="border-b bg-secondary/60">
          <div className="container-x py-12 sm:py-16 2xl:py-20">
            <nav aria-label="Breadcrumb" className="animate-heroup">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
                </li>
                <li aria-hidden="true">
                  <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                </li>
                <li>
                  <Link href="/news" className="transition-colors hover:text-foreground">News</Link>
                </li>
                <li aria-hidden="true">
                  <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                </li>
                <li>
                  <span aria-current="page" className="line-clamp-1 max-w-[28rem] font-semibold text-foreground">
                    {item.title}
                  </span>
 </li>
              </ol>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge variant="tertiary" className="gap-1.5 text-xs">
                <Tag className="h-3 w-3" aria-hidden="true" />
                {item.category}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </span>
            </div>

            <h1 className="animate-heroup mt-4 max-w-4xl text-balance text-3xl font-extrabold tracking-tight [animation-delay:90ms] sm:text-4xl 2xl:text-5xl">
              {item.title}
            </h1>
            <p className="animate-heroup mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground [animation-delay:180ms] sm:text-lg">
              {item.excerpt}
            </p>
          </div>
        </header>

        {/* Lead image + body */}
        <div className="container-x grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_320px] 2xl:gap-14">
          <div>
            {item.image && (
              <figure className="overflow-hidden rounded-xl border shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageCaption ?? item.title}
                  className="aspect-[16/9] w-full object-cover"
                />
                {item.imageCaption && (
                  <figcaption className="border-t bg-secondary/60 px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
                    {item.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            <div className="space-y-5 pt-8 text-[15px] leading-7 text-foreground/85 sm:text-base sm:text-lg sm:leading-8">
              {(item.body ?? [item.excerpt]).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Button variant="ghost" size="sm" asChild className="-ml-2">
                <Link href="/news">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back to all news
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Published by Popular Pharmaceuticals PLC · Media &amp; Investors
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:pt-2">
            <Card className="sticky top-28">
              <CardContent className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  In this story
                </p>
                <Separator className="my-4" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Category</dt>
                    <dd className="mt-1 font-semibold text-foreground">{item.category}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Published</dt>
                    <dd className="mt-1 font-semibold text-foreground">{formatDate(item.date)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Reading time</dt>
                    <dd className="mt-1 font-semibold text-foreground">
                      {Math.max(1, Math.round((item.body ?? []).join(" ").split(/\s+/).length / 200))} min
                    </dd>
                  </div>
                </dl>
                <Separator className="my-5" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For media queries, reach the communications desk through the{" "}
                  <Link href="/contact" className="font-semibold text-tertiary hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Related stories */}
        <section className="border-t bg-secondary/60 py-14 sm:py-16" aria-label="Related stories">
          <div className="container-x">
            <p className="eyebrow">Related stories</p>
            <h2 className="h-section">More from the newsroom</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
              {related.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
