import type { Metadata } from "next";
import { PlayCircle, FileText, Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import NewsCard from "@/components/NewsCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getAllNews } from "@/lib/api";
import { GALLERY, VIDEOS, REPORTS, FINANCIAL_HIGHLIGHTS } from "@/lib/media";
import { SITE } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Media & Investors",
  description:
    "Press releases, corporate videos and image gallery from Popular Pharmaceuticals PLC — plus annual reports, financial highlights and investor relations contact.",
  alternates: { canonical: "/media" },
};

const GALLERY_VARIANTS = ["accent", "tertiary", "primary", "warm"] as const;

export default function MediaPage() {
  const news = getAllNews();

  return (
    <>
      <PageHero
        title="Media & Investors"
        subtitle="Newsroom and investor relations — press releases, corporate videos, image gallery and financial reporting."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Media & Investors" }]}
      />

      {/* Press releases */}
      <section id="press" className="section scroll-mt-24" aria-label="Press releases">
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

      {/* Videos */}
      <section id="videos" className="scroll-mt-24 border-y bg-secondary/60 py-14 sm:py-20" aria-label="Corporate videos">
        <div className="container-x">
          <p className="eyebrow">Corporate Videos</p>
          <h2 className="h-section">Popular in motion</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VIDEOS.map((video) => (
              <Card key={video.videoId} className="group cursor-pointer overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative">
                  <PlaceholderImage label={video.title} variant="primary" height="h-48" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle
                      className="h-14 w-14 text-white/90 drop-shadow"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground">{video.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section scroll-mt-24" aria-label="Image gallery">
        <div className="container-x">
          <p className="eyebrow">Image Gallery</p>
          <h2 className="h-section">Facilities, people and events</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-6">
            {GALLERY.map((item, i) => (
              <figure key={item.title} className="group relative cursor-pointer overflow-hidden rounded-lg border transition-shadow hover:shadow-md">
                <PlaceholderImage
                  label={item.title}
                  variant={GALLERY_VARIANTS[i % GALLERY_VARIANTS.length]}
                  height="h-40"
                />
                <figcaption className="absolute left-3 top-3">
                  <Badge className="bg-background/90 text-primary backdrop-blur-sm">{item.tag}</Badge>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Investor relations */}
      <section id="investors" className="scroll-mt-24 border-t bg-secondary/60 py-14 sm:py-20" aria-label="Investor relations">
        <div className="container-x">
          <p className="eyebrow">Investor Relations</p>
          <h2 className="h-section">Financial reporting & disclosures</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-7">
            {FINANCIAL_HIGHLIGHTS.map((h) => (
              <Card key={h.label} className="text-center">
                <CardContent className="p-6">
                  <p className="text-3xl font-extrabold tabular-nums text-primary">{h.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {h.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="font-extrabold text-foreground">Downloadable Reports</h3>
                <Separator className="my-4" />
                <ul className="divide-y divide-border">
                  {REPORTS.map((r) => (
                    <li key={r.title} className="flex items-center justify-between gap-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                          <FileText className="h-5 w-5 text-destructive" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">{r.title}</p>
                          <p className="text-xs text-muted-foreground">{r.period}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/catalog.pdf" download aria-label={`Download ${r.title} (prototype placeholder)`}>
                          {r.size}
                          <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  Prototype placeholder — reports link to a sample PDF in this demo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-extrabold">Investor Relations Contact</h3>
                <p className="mt-2 text-sm text-white/75">
                  For investor queries, annual reports and shareholder information, contact:
                </p>
                <Separator className="my-4 bg-white/15" />
                <div className="space-y-1.5 text-sm">
                  <p className="font-semibold">Safiul Azam, FCMA</p>
                  <p className="text-white/70">Director, Finance & Accounts</p>
                  <a href={`mailto:${SITE.email}`} className="block text-emerald-50 hover:underline">
                    {SITE.email}
                  </a>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="block text-emerald-50 hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
