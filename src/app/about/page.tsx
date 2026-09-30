import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import Accordion from "@/components/Accordion";
import { PEOPLE, FOUNDER, MD_MESSAGE } from "@/lib/people";
import { CORE_VALUES, CSR } from "@/lib/about";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Popular Pharmaceuticals PLC was established on December 8, 2002 — a vertically integrated generic pharmaceuticals manufacturer with 12 dedicated facilities, ranked among the top 15 pharma companies of Bangladesh.",
  alternates: { canonical: "/about" },
};

const VISION =
  "To become a leader and trusted contributor in ensuring the health and wellbeing of society.";

const MISSION =
  "Our aim is to make a significant contribution to the pharmaceutical sector both in domestic and global arena by producing high-quality medicines in state-of-the-art manufacturing facilities, while ensuring environmental sustainability and fostering a performance-driven culture that supports continuous improvement, innovation and operational excellence.";

/** The journey of a Popular medicine — pairs with the facility photo. */
const PROCESS = [
  {
    title: "Research & formulation development",
    text: "Our R&D teams develop and validate formulations for the domestic portfolio and international registries, with more than 100 products registered across export markets.",
  },
  {
    title: "cGMP manufacturing",
    text: "Twelve dedicated facilities — from oral solids to hormones and IV fluids — are built to US FDA, UK MHRA and TGA guidelines and operated under WHO cGMP.",
  },
  {
    title: "Multi-layer quality assurance",
    text: "Every batch passes documented in-process controls and finished-product testing in our quality control laboratories, under an ISO 9001:2015-certified QMS.",
  },
  {
    title: "Nationwide & global distribution",
    text: "23 depots and a central warehouse put medicines in every drug store of Bangladesh, while direct exports and agents serve 32 countries across four continents.",
  },
];

const IMPACT = [
  { value: "362", label: "Brands in the portfolio" },
  { value: "600", label: "Dosage forms manufactured" },
  { value: "32", label: "Export destinations" },
  { value: "23", label: "Depots nationwide" },
];

/** Initials avatar — honest placeholder for portraits we don't have. */
function Monogram({ name, className }: { name: string; className?: string }) {
  const initials = name
    .replace(/^(Dr\.|Md\.|Late|Mrs\.)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div
      aria-hidden="true"
      className={`flex select-none items-center justify-center bg-accent font-bold text-primary ${className ?? ""}`}
    >
      {initials}
    </div>
  );
}

export default function AboutPage() {
  const board = PEOPLE.filter((p) => p.group === "board");
  const management = PEOPLE.filter((p) => p.group === "management");

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Established December 8, 2002 with a vision to lead the branded generics market in Bangladesh with a high-quality, diversified range of life-saving and vital molecules."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* ——— Corporate profile: text + photo mosaic, vision/mission cards ——— */}
      <section className="section" aria-label="Corporate profile">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {/* Left: heading, profile copy, two stacked facility photos */}
          <div>
            <p className="eyebrow">Corporate Profile</p>
            <h2 className="h-section">
              Among Bangladesh&apos;s fastest-growing pharma companies
            </h2>
            <div className="prose-copy mt-6">
              <p>
                Popular Pharmaceuticals PLC (PPPLC) was established on 8 December 2002, with a vision
                to lead the branded generics market in Bangladesh with a high quality, diversified
                range of life saving and vital molecules.
              </p>
              <p>
                It is now a vertically integrated generic pharmaceuticals formulation products
                manufacturer, marketer, promoter and distributor. The company has a state-of-the-art
                factory in Bangladesh with eight separate and dedicated modern manufacturing
                facilities. High production capacity is utilized for its own portfolio as well as for
                toll manufacturing of specialty products for 18 leading pharmaceutical companies of
                Bangladesh.
              </p>
              <p>
                PPPLC has a strong presence in the domestic market with regards to prescription share
                &amp; sales — now among the top 15 pharmaceutical companies of Bangladesh by revenue
                and ranked as one of the most rapidly growing companies in the country. Growth has
                resulted mainly from product diversification coupled with many
                &quot;high-tech-high-science&quot; product launches, powered by knowledge-based
                medico-marketing promotional activities.
              </p>
              <p>
                The company has a strong focus on strengthening its international export business.
                More than 100 products have already been registered in different countries and the
                company exports products to 32 countries either directly or through overseas agents.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-card">
                <Image
                  src="/images/about/facility-2.webp"
                  alt="Popular Pharmaceuticals manufacturing facility exterior"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow-card">
                <Image
                  src="/images/about/facility-3.webp"
                  alt="Production area inside the Popular Pharmaceuticals plant"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: lead photo + vision / mission cards */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border shadow-card lg:aspect-auto lg:flex-1">
              <Image
                src="/images/about/facility-1.webp"
                alt="Aerial view of the Popular Pharmaceuticals factory at Dhamrai"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <Card className="bg-accent shadow-card">
              <CardContent className="flex gap-4 p-6">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="2.5" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-foreground">Our Vision</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{VISION}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent shadow-card">
              <CardContent className="flex gap-4 p-6">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-foreground">Our Mission</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{MISSION}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ——— Core values ——— */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="Core values">
        <div className="container-x">
          <h2 className="h-section text-center">Our Core Values</h2>
          <div className="mx-auto mt-3 h-px w-16 bg-primary/50" aria-hidden="true" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 2xl:gap-6">
            {CORE_VALUES.map((v) => (
              <Card key={v.title} className="bg-card shadow-card">
                <CardContent className="p-6 text-center">
                  <span
                    aria-hidden="true"
                    className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <h3 className="font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Impact numbers ——— */}
      <section className="bg-primary py-14 text-primary-foreground sm:py-16" aria-label="Popular in numbers">
        <div className="container-x">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl 2xl:text-4xl">
            Popular in Numbers
          </h2>
          <p className="mt-2 text-center text-sm text-primary-foreground/75">
            Real capacity, real reach, measured every day
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 text-center lg:grid-cols-4">
            {IMPACT.map((s) => (
              <div key={s.label}>
                <dd className="text-4xl font-bold tabular-nums tracking-tight 2xl:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/70">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ——— From molecule to medicine ——— */}
      <section className="section" aria-label="How a Popular medicine reaches patients">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">From Molecule to Medicine</p>
            <h2 className="h-section">Every medicine follows a documented path</h2>
            <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
              Popular&apos;s vertically integrated operation means one company carries a product from
              formulation development to the pharmacy shelf — with quality checkpoints at every
              stage and full traceability along the way.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg border">
              <Image
                src="/images/about/facility-4.webp"
                alt="Quality control laboratory at Popular Pharmaceuticals"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ol className="flex flex-col justify-center gap-7 lg:pl-6">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold tabular-nums text-primary"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Milestones — vertical alternating timeline ——— */}
      <section className="border-y bg-accent py-20 md:py-28" aria-label="Company milestones">
        <div className="container-x">
          <p className="eyebrow">Milestones</p>
          <h2 className="h-section max-w-2xl">Two decades of pioneering firsts</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A timeline of the firsts, certifications and facilities that carried Popular from a
            single plant in 2002 to one of Bangladesh&apos;s leading pharmaceutical manufacturers.
          </p>
          <Timeline />
        </div>
      </section>

      {/* ——— Leadership messages — shadcn: Card + Badge + Accordion ——— */}
      <section className="section" aria-label="Leadership messages">
        <div className="container-x">
          <p className="eyebrow">Leadership Messages</p>
          <h2 className="h-section">Words from our leadership</h2>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-5">
            {/* Founder Chairman */}
            <Card className="lg:col-span-2 shadow-card">
              <CardContent className="p-7 sm:p-8">
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/people/founder-chairman.webp"
                    alt={`Portrait of ${FOUNDER.name}, ${FOUNDER.title} of Popular Pharmaceuticals`}
                    width={160}
                    height={160}
                    className="h-32 w-32 shrink-0 rounded-full border-2 border-card object-cover shadow-sm sm:h-40 sm:w-40"
                  />
                  <div>
                    <Badge className="px-3.5 py-1.5 text-[13px]">Founder Chairman</Badge>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-foreground sm:text-2xl">
                      {FOUNDER.name}
                    </h3>
                  </div>
                </div>
                <Separator className="my-6" />
                <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {FOUNDER.message}
                </p>
              </CardContent>
            </Card>

            {/* Managing Director & CEO */}
            <Card className="lg:col-span-3 shadow-card">
              <CardContent className="p-7 sm:p-8">
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/people/md-portrait.webp"
                    alt={`Portrait of ${MD_MESSAGE.name}, ${MD_MESSAGE.title} of Popular Pharmaceuticals`}
                    width={160}
                    height={160}
                    className="h-32 w-32 shrink-0 rounded-full border-2 border-card object-cover shadow-sm sm:h-40 sm:w-40"
                  />
                  <div>
                    <Badge variant="tertiary" className="px-3.5 py-1.5 text-[13px]">Message from the Managing Director</Badge>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-foreground sm:text-2xl">
                      {MD_MESSAGE.name}
                    </h3>
                    <Badge className="mt-2 px-3.5 py-1.5 text-sm">{MD_MESSAGE.title}</Badge>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="prose-copy text-[15px] sm:text-base">
                  <p>{MD_MESSAGE.paragraphs[0]}</p>
                </div>
                <AccordionRoot type="single" collapsible className="mt-4">
                  <AccordionItem value="md-full-message">
                    <AccordionTrigger className="text-[15px]">Read the full message</AccordionTrigger>
                    <AccordionContent>
                      <div className="prose-copy space-y-3 text-[15px] sm:text-base">
                        {MD_MESSAGE.paragraphs.slice(1).map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionRoot>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ——— Leadership ——— */}
      <section
        id="leadership"
        className="border-y bg-secondary/60 py-14 sm:py-20"
        aria-label="Board of directors and management"
      >
        <div className="container-x">
          <p className="eyebrow">Leadership</p>
          <h2 className="h-section">Board of Directors</h2>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {board.map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-center gap-5">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Portrait of ${p.name}, ${p.title}`}
                    width={112}
                    height={112}
                    className="h-24 w-24 shrink-0 rounded-full border-2 border-card object-cover shadow-sm sm:h-28 sm:w-28"
                  />
                ) : (
                  <Monogram name={p.name} className="h-24 w-24 shrink-0 rounded-full text-base sm:h-28 sm:w-28 sm:text-xl" />
                )}
                <div>
                  <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">{p.name}</h3>
                  <Badge className="mt-1.5 px-3 py-1 text-[13px]">{p.title}</Badge>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-14" />

          <h2 className="h-section">Management Team</h2>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-center gap-5">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Portrait of ${p.name}, ${p.title}`}
                    width={96}
                    height={96}
                    className="h-24 w-24 shrink-0 rounded-full border-2 border-card object-cover shadow-sm"
                  />
                ) : (
                  <Monogram name={p.name} className="h-24 w-24 shrink-0 rounded-full text-base" />
                )}
                <div>
                  <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">{p.name}</h3>
                  <Badge className="mt-1.5 px-3 py-1 text-[13px]">{p.title}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CSR + Marketing & Distribution ——— */}
      <section
        id="csr"
        className="section"
        aria-label="Corporate social responsibility, marketing and distribution"
      >
        <div className="container-x">
          <p className="eyebrow">Corporate Social Responsibility</p>
          <h2 className="h-section">Committed to the communities we serve</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{CSR.intro}</p>
          <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-3">
            {CSR.items.map((c, i) => (
              <div key={c.title} className="border-t border-border pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Accordion
              items={[
                {
                  title: "Pharmaceutical Brand Management & Marketing",
                  content: (
                    <div className="space-y-3">
                      <p>
                        Due to our marketing-oriented philosophy, we enjoy a leading position in the
                        market. Our sophisticated network ensures strong representation around the
                        country, with business plans developed in accordance with corporate and market
                        objectives.
                      </p>
                      <p>
                        We organize training, seminars & conferences on medical issues, new product
                        launches and sales techniques — developing close rapport with lead physicians
                        and healthcare providers. We also offer contract manufacturing expertise for
                        local & overseas partners, allowing sponsors to focus on their core strengths
                        while leveraging our cGMP facilities.
                      </p>
                    </div>
                  ),
                },
                {
                  title: "Own Nationwide Distribution Network",
                  content: (
                    <p>
                      Popular Pharmaceuticals PLC operates its own distribution network with 23 depots
                      across the country, one Central Warehouse and one Promo Store — ensuring timely
                      supply of products and promotional materials, making our products available in
                      every single drug store throughout the country.
                    </p>
                  ),
                },
                {
                  title: "Global Business Operation",
                  content: (
                    <p>
                      More than 100 products registered across 32 export markets in Asia, Africa,
                      Latin America and Europe — including official supply to government bodies and
                      NGOs. Visit our{" "}
                      <a
                        href="/global-operations"
                        className="font-semibold text-tertiary underline-offset-2 hover:underline"
                      >
                        Global Operations
                      </a>{" "}
                      page for the full market list.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
