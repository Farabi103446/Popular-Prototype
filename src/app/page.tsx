import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Check,
  Globe2,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import StatCounter from "@/components/StatCounter";
import ProductLaunchSlider from "@/components/ProductLaunchSlider";
import ExploreProducts from "@/components/ExploreProducts";
import VideoSection from "@/components/VideoSection";
import NewsCard from "@/components/NewsCard";
import WorldMap from "@/components/WorldMap";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";
import { getLatestNews } from "@/lib/api";
import { EXPORT_COUNTRIES, REGIONS } from "@/lib/global";

export default function HomePage() {
  const news = getLatestNews(3);

  return (
    <div className="page-canvas">
      <HeroCarousel />

      {/* Stats strip */}
      <section className="border-b bg-primary py-7 sm:py-8" aria-label="Company statistics">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          <StatCounter value={SITE.stats.brands} label="Brands" />
          <StatCounter value={SITE.stats.dosageForms} label="Dosage Forms" />
          <StatCounter value={SITE.stats.facilities} label="Dedicated Facilities" />
          <StatCounter value={SITE.stats.exportCountries} label="Export Destinations" />
          <StatCounter value={SITE.stats.depots} label="Depots Nationwide" />
        </div>
      </section>

      {/* About Us — reference structure: copy + stacked photos left, lead photo + vision/mission cards right */}
      <section className="section" aria-label="About Popular Pharmaceuticals">
        <div className="container-x grid gap-10 lg:grid-cols-2 2xl:gap-14">
          {/* Left: heading, copy, two stacked facility photos */}
          <div>
            <p className="eyebrow">Two decades of healthcare service</p>
            <h2 className="h-section max-w-xl">
              A company of the Popular Group, caring for life since 2002
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Popular Pharmaceuticals PLC (PPPLC) was established on 8 December 2002 with a vision to
              lead the branded generics market in Bangladesh with a high-quality, diversified range of
              life-saving and vital molecules. Today it is a vertically integrated formulation
              manufacturer, marketer, promoter and distributor operating state-of-the-art dedicated
              facilities — and the pioneer manufacturer of Human Insulin in the country.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Ranked among the top 15 pharmaceutical companies in Bangladesh, Popular serves the
              domestic market through its own nationwide distribution network and exports to 32
              countries across Asia, Africa, Latin America and Europe.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-lg border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/facility-2.webp"
                  alt="Popular Pharmaceuticals manufacturing facility exterior"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/facility-3.webp"
                  alt="Production area inside the Popular Pharmaceuticals plant"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Badge variant="outline" className="h-9 px-4 text-xs">
                WHO cGMP Certified
              </Badge>
            </div>
          </div>

          {/* Right: lead aerial photo + vision / mission cards */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/facility-1.webp"
                alt="Aerial view of the Popular Pharmaceuticals factory at Dhamrai"
                className="aspect-[16/10] w-full object-cover lg:aspect-auto lg:h-[340px] 2xl:h-[400px]"
              />
            </div>

            <Card className="bg-accent">
              <CardContent className="flex gap-4 p-6">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                >
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground">Our Vision</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    To become a leader and trusted contributor in ensuring the health and wellbeing of
                    society.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent">
              <CardContent className="flex gap-4 p-6">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                >
                  <Globe2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground">Our Mission</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    To make a significant contribution to the pharmaceutical sector in domestic and
                    global arenas by producing high-quality medicines in state-of-the-art facilities,
                    while ensuring environmental sustainability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New product launches */}
      <ProductLaunchSlider />

      {/* Corporate video */}
      <VideoSection />

      {/* Explore our products — real packshot grid */}
      <ExploreProducts />

      {/* Latest news — asymmetric lead + stack layout */}
      <section className="border-y bg-secondary/60 py-12 sm:py-16" aria-label="Latest news">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">From the newsroom</p>
              <h2 className="h-section">Recent stories at Popular</h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/news">All News</Link>
            </Button>
          </div>
          {news.length > 0 && (
            <div className="mt-10 space-y-6">
              {/* Featured story — full-width horizontal lead, content-height */}
              <NewsCard item={news[0]} featured />
              {/* Supporting stories — equal-height row beneath */}
              <div className="grid gap-6 md:grid-cols-2">
                {news.slice(1).map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Global operations — interactive export map */}
      <section className="section" aria-label="Global operations">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Export network</p>
              <h2 className="h-section !text-2xl sm:!text-3xl 2xl:!text-4xl">
                Exporting health to {SITE.stats.exportCountries} countries
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                From our Dhaka headquarters, WHO cGMP-certified medicines reach {EXPORT_COUNTRIES.length} export
                destinations across {REGIONS.length} regions — supplied through distribution
                partners, governments and NGOs.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/global-operations">
                <Globe2 className="h-4 w-4" aria-hidden="true" />
                Global Operations Details
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="section border-t border-border/60 bg-secondary/30" aria-label="Get in touch">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contact Popular</p>
            <h2 className="h-section">Let's start a conversation</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you are a healthcare professional, a potential international partner, or a
              candidate looking to build a career — we would love to hear from you.
            </p>
            <div className="mt-8 space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Head Office",
                  body: SITE.address,
                  href: undefined,
                },
                {
                  icon: Phone,
                  title: "Hotline",
                  body: SITE.phone,
                  href: `tel:${SITE.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Mail,
                  title: "Email",
                  body: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {c.body}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{c.body}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="tertiary">
                <Check className="mr-1 h-3 w-3" aria-hidden="true" />
                Response within 2 working days
              </Badge>
              <Badge variant="outline">WHO cGMP certified</Badge>
            </div>
          </div>
          <Card className="p-6 sm:p-8">
            <div className="mb-6 border-b border-border pb-5">
              <p className="text-lg font-extrabold tracking-tight text-foreground">
                Send an inquiry
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                We typically reply within two working days.
              </p>
            </div>
            <ContactForm />
          </Card>
        </div>
      </section>
    </div>
  );
}
