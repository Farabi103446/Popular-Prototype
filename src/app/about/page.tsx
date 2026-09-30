import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Accordion from "@/components/Accordion";
import { PEOPLE, FOUNDER, MD_MESSAGE } from "@/lib/people";
import { CORE_VALUES, CSR } from "@/lib/about";
import { ACCREDITATIONS } from "@/lib/facilities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

/** Musemind-style "empowering" stats — numeral, label, description. */
const IMPACT = [
  {
    value: "362",
    label: "Brands in the portfolio",
    text: "A diversified range of life-saving and vital molecules, ranked among the top 15 pharmaceutical companies of Bangladesh.",
  },
  {
    value: "600",
    label: "Dosage forms manufactured",
    text: "From oral solids and ophthalmics to lyophilized hormones, injectables and IV fluids in environment-friendly PP bags.",
  },
  {
    value: "32",
    label: "Export destinations",
    text: "Direct exports and overseas agents across Asia, Africa, Latin America and Europe, with 100+ products registered internationally.",
  },
  {
    value: "23",
    label: "Depots nationwide",
    text: "An owned distribution network with a central warehouse and promo store, putting our products in every drug store of the country.",
  },
];

/** Musemind's "what makes us different" — six typographic differentiators. */
const DIFFERENTIATORS = [
  {
    title: "Vertically integrated",
    text: "One company carries a product from formulation development through cGMP manufacturing to the pharmacy shelf, with quality checkpoints at every stage.",
  },
  {
    title: "Dedicated-block architecture",
    text: "Eight separate and dedicated modern manufacturing facilities — including segregated penicillin and cephalosporin blocks unique of their kind in Bangladesh.",
  },
  {
    title: "Pioneering firsts",
    text: "First in Bangladesh to manufacture Human Insulin, PPI injections, IV fluids in PP bags, IV fat emulsions, streptokinase and lyophilized fertility hormones.",
  },
  {
    title: "Trusted by the industry",
    text: "High-capacity plants toll-manufacture specialty products for 18 leading pharmaceutical companies of Bangladesh under strict confidentiality.",
  },
  {
    title: "Knowledge-based marketing",
    text: "High-tech-high-science product launches powered by medico-marketing, training, seminars and close rapport with lead physicians nationwide.",
  },
  {
    title: "Owned distribution",
    text: "Our own network of 23 depots ensures timely supply of products and promotional materials to every corner of the country.",
  },
];

/** The journey of a Popular medicine. */
const PROCESS = [
  {
    title: "Research & formulation development",
    text: "R&D teams develop and validate formulations for the domestic portfolio and international registries — 100+ products registered across export markets.",
  },
  {
    title: "cGMP manufacturing",
    text: "Twelve dedicated facilities — oral solids to hormones and IV fluids — built to US FDA, UK MHRA and TGA guidelines, operated under WHO cGMP.",
  },
  {
    title: "Multi-layer quality assurance",
    text: "Every batch passes documented in-process controls and finished-product testing, under an ISO 9001:2015-certified quality management system.",
  },
  {
    title: "Nationwide & global distribution",
    text: "23 depots put medicines in every drug store of Bangladesh, while direct exports and agents serve 32 countries across four continents.",
  },
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

/** Musemind-style giant display line: solid first phrase, brand-colored second. */
function DisplayLine({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <h2 className="text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl 2xl:text-6xl">
      {line1}
      <br />
      <span className="text-primary">{line2}</span>
    </h2>
  );
}

export default function AboutPage() {
  const board = PEOPLE.filter((p) => p.group === "board");
  const management = PEOPLE.filter((p) => p.group === "management");

  return (
    <>
      {/* ============================================================
          Statement hero — typographic, no banner
         ============================================================ */}
      <section className="pb-12 pt-14 sm:pt-20" aria-label="About Popular Pharmaceuticals">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Popular Pharmaceuticals PLC · Established December 8, 2002</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-7xl 2xl:text-8xl">
              We care
              <br />
              for <span className="text-primary">life.</span>
            </h1>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <Reveal delay={160}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our journey began in 1982 with Popular Diagnostic Centre and caught fire in 2002, when
                the group entered pharmaceutical manufacturing. Today Popular Pharmaceuticals PLC is a
                vertically integrated generic medicines company — manufacturer, marketer, promoter and
                distributor — ranked among the fastest-growing pharma companies in Bangladesh.
              </p>
            </Reveal>
            <Reveal delay={220} className="flex flex-wrap items-start gap-3 lg:justify-end">
              <Button size="lg" asChild>
                <a href="/products">
                  Explore our products
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/facilities">Tour the facilities</a>
              </Button>
            </Reveal>
          </div>

          {/* Cinematic aerial strip */}
          <Reveal delay={120} className="mt-14">
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl border shadow-card">
              <Image
                src="/images/about/facility-1.webp"
                alt="Aerial view of the Popular Pharmaceuticals factory at Dhamrai"
                fill
                sizes="100vw"
                className="ken-burns object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          Vision — one-liner, Musemind-style
         ============================================================ */}
      <section className="border-t py-16 sm:py-24" aria-label="Vision and mission">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our Vision</p>
            <p className="mt-6 max-w-md text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              {VISION}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:pt-1">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Our Mission</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{MISSION}</p>
            <div className="mt-8 grid gap-6 border-t pt-6 sm:grid-cols-3">
              {[
                { k: "Top 15", v: "pharma companies in Bangladesh by revenue" },
                { k: "8 + 4", v: "dedicated facilities on a single master-planned campus" },
                { k: "18", v: "leading companies trust our toll manufacturing" },
              ].map((f) => (
                <div key={f.k}>
                  <p className="text-xl font-extrabold tabular-nums text-primary">{f.k}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          Empowering better health — oversized numerals
         ============================================================ */}
      <section className="py-16 sm:py-24" aria-label="Popular in numbers">
        <div className="container-x">
          <Reveal>
            <DisplayLine line1="Empowering" line2="better health." />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Growth has come from product diversification, many high-tech-high-science firsts and
              knowledge-based medico-marketing — measured every day in the scale of what we produce
              and how far it travels.
            </p>
          </Reveal>
          <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="border-t pt-6">
                <dd className="text-6xl font-extrabold tabular-nums tracking-tight text-primary 2xl:text-7xl">
                  {s.value}
                </dd>
                <dt className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-foreground">{s.label}</dt>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================================
          Values that set us apart — numbered editorial rows
         ============================================================ */}
      <section className="border-y bg-secondary/60 py-16 sm:py-24" aria-label="Core values">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Core values</p>
            <DisplayLine line1="Values that" line2="set us apart." />
          </Reveal>
          <div className="grid gap-x-14 md:grid-cols-2">
            {CORE_VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="border-t border-border/80 py-7">
                <p className="text-xs font-bold tabular-nums text-primary/60">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          What makes us different — six typographic cells
         ============================================================ */}
      <section className="py-16 sm:py-24" aria-label="What makes us different">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The Popular difference</p>
            <DisplayLine line1="What makes us" line2="different from others." />
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={i * 70} className="border-t-2 border-primary/20 pt-6">
                <h3 className="text-base font-bold text-foreground sm:text-lg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          We are Popular — achieved. Accreditation ledger
         ============================================================ */}
      <section className="border-y bg-[hsl(150_25%_14%)] py-16 text-white sm:py-24" aria-label="Certifications and approvals">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Accreditations</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-5xl">
              We are Popular.
              <br />
              <span className="text-emerald-300">Achieved.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-emerald-50/80">
              Audited, certified and approved by regulators at home and across our export markets —
              the paperwork behind the promise.
            </p>
          </Reveal>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {ACCREDITATIONS.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 50}>
                <div className="group grid gap-1 py-5 transition-colors duration-300 hover:bg-white/[0.04] sm:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] sm:gap-6 sm:px-2">
                  <div>
                    <p className="text-lg font-bold leading-tight">{a.name}</p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-300/80">
                      {a.authority}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-emerald-50/75">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          From molecule to medicine — photo + four-step path
         ============================================================ */}
      <section className="py-16 sm:py-24" aria-label="How a Popular medicine reaches patients">
        <div className="container-x">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <Reveal>
              <p className="eyebrow">From molecule to medicine</p>
              <h2 className="h-section max-w-xl">Every medicine follows a documented path.</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border shadow-card">
                <Image
                  src="/images/about/facility-4.webp"
                  alt="Quality control laboratory at Popular Pharmaceuticals"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="border-t border-border pt-5">
                <p className="text-sm font-extrabold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-bold leading-snug text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          Milestones — two decades of firsts (scroll timeline)
         ============================================================ */}
      <section className="border-y bg-accent py-20 md:py-28" aria-label="Company milestones">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Milestones</p>
            <h2 className="h-section max-w-2xl">Two decades of pioneering firsts</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A timeline of the firsts, certifications and facilities that carried Popular from a
              single plant in 2002 to one of Bangladesh&apos;s leading pharmaceutical manufacturers.
            </p>
          </Reveal>
          <Timeline />
        </div>
      </section>

      {/* ============================================================
          Leadership messages — editorial quotes, no boxes
         ============================================================ */}
      <section className="py-16 sm:py-24" aria-label="Leadership messages">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Leadership messages</p>
            <h2 className="h-section">Words from our leadership</h2>
          </Reveal>

          {/* Founder Chairman */}
          <Reveal className="mt-12 border-t pt-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:gap-14">
              <div className="flex items-center gap-6">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-card shadow-card sm:h-36 sm:w-36">
                  <Image
                    src={FOUNDER.image}
                    alt={`Portrait of ${FOUNDER.name}, ${FOUNDER.title} of Popular Pharmaceuticals`}
                    fill
                    sizes="(min-width: 640px) 144px, 112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <Badge className="px-3 py-1 text-xs">Founder Chairman</Badge>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-foreground sm:text-2xl">{FOUNDER.name}</h3>
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  &ldquo;Our Founding Chairman, Mrs. Tahera Akhter, began her journey with Popular
                  Diagnostic Ltd. in 1982. Under her visionary leadership, the organization expanded
                  beyond diagnostic services into pharmaceuticals, hospitals and medical education,
                  establishing itself as a leading healthcare group.&rdquo;
                </p>
                <p className="mt-4 text-sm italic text-muted-foreground/80">
                  The founding story of the Popular group, in her memory.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Managing Director & CEO */}
          <Reveal className="mt-14 border-t pt-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:gap-14">
              <div className="flex items-center gap-6">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-card shadow-card sm:h-36 sm:w-36">
                  <Image
                    src={MD_MESSAGE.image}
                    alt={`Portrait of ${MD_MESSAGE.name}, ${MD_MESSAGE.title} of Popular Pharmaceuticals`}
                    fill
                    sizes="(min-width: 640px) 144px, 112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <Badge variant="tertiary" className="px-3 py-1 text-xs">Message from the MD</Badge>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-foreground sm:text-2xl">{MD_MESSAGE.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{MD_MESSAGE.title}</p>
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  {MD_MESSAGE.paragraphs[0]}
                </p>
                <AccordionRoot type="single" collapsible className="mt-6">
                  <AccordionItem value="md-full-message" className="border-b-0">
                    <AccordionTrigger className="text-sm font-semibold">
                      Read the full message
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                        {MD_MESSAGE.paragraphs.slice(1).map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AccordionRoot>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          Leadership — grouped grids with circular portraits
         ============================================================ */}
      <section
        id="leadership"
        className="border-y bg-secondary/60 py-16 sm:py-24"
        aria-label="Board of directors and management"
      >
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The people behind the promise</p>
            <h2 className="h-section">Board of Directors</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((p, i) => (
              <Reveal key={`${p.name}-${i}`} delay={i * 60} className="flex items-center gap-5">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Portrait of ${p.name}, ${p.title}`}
                    width={128}
                    height={128}
                    className="h-24 w-24 shrink-0 rounded-full border-2 border-card object-cover shadow-card sm:h-28 sm:w-28"
                  />
                ) : (
                  <Monogram name={p.name} className="h-24 w-24 shrink-0 rounded-full text-base shadow-card sm:h-28 sm:w-28 sm:text-xl" />
                )}
                <div>
                  <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">{p.name}</h3>
                  <p className="mt-1.5 text-[13px] font-semibold uppercase tracking-wide text-primary">{p.title}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Separator className="my-14" />

          <Reveal>
            <h2 className="h-section">Executive Management</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((p, i) => (
              <Reveal key={`${p.name}-${i}`} delay={i * 60} className="flex items-center gap-5">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Portrait of ${p.name}, ${p.title}`}
                    width={112}
                    height={112}
                    className="h-24 w-24 shrink-0 rounded-full border-2 border-card object-cover shadow-card"
                  />
                ) : (
                  <Monogram name={p.name} className="h-24 w-24 shrink-0 rounded-full text-base shadow-card" />
                )}
                <div>
                  <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">{p.name}</h3>
                  <p className="mt-1.5 text-[13px] font-semibold uppercase tracking-wide text-primary">{p.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CSR + Marketing & Distribution
         ============================================================ */}
      <section
        id="csr"
        className="py-16 sm:py-24"
        aria-label="Corporate social responsibility, marketing and distribution"
      >
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Corporate social responsibility</p>
            <h2 className="h-section max-w-2xl">Committed to the communities we serve</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{CSR.intro}</p>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-3">
            {CSR.items.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="border-t border-border pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
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
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          Career CTA — Musemind-style closing band
         ============================================================ */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20" aria-label="Career opportunities">
        <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
              Career opportunities
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Grow, create, and lead with Popular.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-emerald-50/85 sm:text-base">
              Choose Popular to embrace your skills and passion. We are your growth partner —
              encouraging ownership, continuous learning and individual development in a
              performance-driven culture.
            </p>
          </Reveal>
          <Reveal delay={120} className="shrink-0">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-white font-semibold text-primary hover:bg-emerald-50"
              asChild
            >
              <a href="/career">
                Join our team
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
