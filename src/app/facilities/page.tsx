import type { Metadata } from "next";
import { ArrowDown, Droplets, Flame, Factory, PlayCircle, Recycle, ShieldCheck, Waves } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import UnitExplorer from "@/components/UnitExplorer";
import CleanroomLadder from "@/components/CleanroomLadder";
import { GENERAL_FACILITIES } from "@/lib/facilities";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Inside the Popular Pharmaceuticals campus at Dhamrai: nine dedicated manufacturing blocks, European water and WFI systems, Class 100 (A) through E cleanrooms, Siemens building management — engineered to US FDA, UK MHRA and TGA guidelines.",
};

const LEDGER_ICONS = [ShieldCheck, Droplets, Factory, Flame, Recycle, Waves];

const MARQUEE_ITEMS = [
  "Nine dedicated blocks",
  "Class 100 (A) aseptic filling",
  "European Water & WFI loops",
  "Segregated beta-lactam suites",
  "Siemens Building Management",
  "US FDA · UK MHRA · TGA guidelines",
  "Captive power generation",
  "Lyophilization capability",
];

const HERO_STATS = [
  { value: "9", label: "Dedicated units" },
  { value: "5", label: "Cleanroom classes" },
  { value: "24/7", label: "Captive power & BMS" },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* ============================================================
          Cinematic hero — full-bleed aerial photo, slow zoom, white ink
         ============================================================ */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[hsl(150_25%_12%)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about/facility-1.webp"
          alt="Aerial view of the Popular Pharmaceuticals factory at Dhamrai"
          className="ken-burns absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150_25%_10%/0.92)] via-[hsl(150_25%_10%/0.35)] to-[hsl(150_25%_10%/0.25)]" />

        <div className="container-x relative z-10 pb-14 pt-40 sm:pb-20">
          <nav aria-label="Breadcrumb" className="animate-heroup text-sm text-emerald-100/80">
            Home <span className="mx-1.5">/</span> Facilities
          </nav>
          <p
            className="animate-heroup mt-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300"
            style={{ animationDelay: "90ms" }}
          >
            The Dhamrai campus
          </p>
          <h1
            className="animate-heroup mt-2 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl 2xl:text-6xl"
            style={{ animationDelay: "180ms" }}
          >
            A plant built for the
            <br />
            world&apos;s strictest audits.
          </h1>
          <p
            className="animate-heroup mt-5 max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:text-lg"
            style={{ animationDelay: "270ms" }}
          >
            Master-planned by Asia Pacific Consultants, Australia. Erected in line with US FDA, UK MHRA and TGA
            guidelines. Equipment from Europe, the USA, Korea and Taiwan — validated before it ever runs a batch.
          </p>

          <div
            className="animate-heroup mt-9 flex flex-wrap items-center gap-x-10 gap-y-6"
            style={{ animationDelay: "360ms" }}
          >
            {HERO_STATS.map((s) => (
              <div key={s.label} className="border-l border-white/25 pl-4">
                <p className="text-3xl font-extrabold tabular-nums text-white">{s.value}</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-100/75">
                  {s.label}
                </p>
              </div>
            ))}
            <Button size="lg" asChild className="ml-auto hidden sm:inline-flex">
              <a href="#units">
                Explore the blocks
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-emerald-100/70 md:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em]">Scroll</span>
          <ArrowDown className="scroll-cue h-4 w-4" aria-hidden="true" />
        </div>
      </section>

      {/* ============================================================
          Capability marquee — continuous ticker, pauses on hover
         ============================================================ */}
      <div className="overflow-hidden border-y bg-secondary py-3.5" aria-hidden="true">
        <div className="facilities-marquee flex w-max items-center gap-10 pr-10">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold text-secondary-foreground"
            >
              {item}
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================
          Unit explorer — scroll-driven sticky showcase of the 9 blocks
         ============================================================ */}
      <section id="units" aria-label="The nine dedicated manufacturing units">
        <UnitExplorer />
      </section>

      {/* ============================================================
          General facilities — editorial numbered ledger, no cards
         ============================================================ */}
      <section className="section border-t bg-card" aria-label="General facilities">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Reveal>
                <p className="eyebrow">Site-wide infrastructure</p>
                <h2 className="h-section text-balance">General facilities that keep nine plants running.</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Utilities, safety and environmental systems are shared infrastructure — designed once, at the scale
                  of the whole campus, and monitored around the clock.
                </p>
              </Reveal>
            </div>

            <ol className="divide-y divide-border border-y">
              {GENERAL_FACILITIES.map((item, i) => {
                const Icon = LEDGER_ICONS[i % LEDGER_ICONS.length];
                return (
                  <Reveal as="li" key={item.no} delay={i * 60}>
                    <div className="group grid gap-3 py-7 transition-colors duration-300 hover:bg-secondary/50 sm:grid-cols-[auto_minmax(0,3fr)_minmax(0,6fr)] sm:gap-6 sm:px-2">
                      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:justify-center sm:gap-2">
                        <span className="text-2xl font-extrabold tabular-nums text-primary/25 transition-colors duration-300 group-hover:text-primary/60 sm:text-3xl">
                          {item.no}
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                        {item.source && (
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {item.source}
                          </p>
                        )}
                      </div>
                      <p className="max-w-[62ch] text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================================
          Cleanroom ladder — animated classification bars + BMS panel
         ============================================================ */}
      <section className="section" aria-label="Cleanroom classifications and building management">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Environment control</p>
              <h2 className="h-section text-balance">Five cleanroom classes, one air-handling doctrine.</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every production area is classified by the activity it hosts — from aseptic filling behind laminar
                airflow to support corridors. HVAC is designed by APC to meet US FDA, EU GMP and ASHRAE requirements.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-8">
              <CleanroomLadder />
            </Reveal>
          </div>

          <Reveal variant="right" className="lg:pt-14">
            <div className="overflow-hidden rounded-xl border bg-[hsl(150_25%_14%)] shadow-card">
              <div className="border-b border-white/10 px-6 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-300">
                  Central Building Management System
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">Siemens, Germany</h3>
              </div>
              <ul className="divide-y divide-white/10 px-6">
                {[
                  "HVAC — chillers, pumps, air handlers",
                  "Boilers and clean-steam generation",
                  "Fire detection and danger management",
                  "Air compressors and plant utilities",
                ].map((row) => (
                  <li key={row} className="flex items-center gap-3 py-3.5 text-sm text-emerald-50/90">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {row}
                  </li>
                ))}
              </ul>
              <p className="border-t border-white/10 px-6 py-4 text-xs leading-relaxed text-emerald-100/70">
                One control room monitors the environmental health of the entire campus — every differential pressure,
                temperature and humidity reading, logged continuously.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          Video band — the facilities film from popular-pharma.com
         ============================================================ */}
      <section className="relative overflow-hidden bg-[hsl(150_25%_12%)] py-16 sm:py-20" aria-label="Facilities in motion">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Facilities in motion</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl 2xl:text-4xl">
                Watch the plant at work.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-emerald-50/80 sm:text-base">
                The official facilities film from Popular Pharmaceuticals — corridors, cleanrooms and the people who
                run them.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="mx-auto mt-10 max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <div className="aspect-video w-full bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/SnBLI62lvIQ?autoplay=0&playsinline=1&rel=0&modestbranding=1"
                  title="Popular Pharmaceuticals facilities film"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={250} className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="sm" asChild className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="/virtual-tours">
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                Take the virtual tour
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-emerald-100 hover:bg-white/10 hover:text-white">
              <a href="/quality-manufacturing">Quality &amp; manufacturing systems</a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          Closing CTA — calm brand band
         ============================================================ */}
      <section className="border-t bg-secondary py-14" aria-label="Visit or contact">
        <div className="container-x flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="max-w-xl text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Want to see the blocks in person? Audits and partner visits are welcomed through the QA department.
            </h2>
          </Reveal>
          <Reveal delay={100} className="flex shrink-0 flex-wrap gap-3">
            <Button asChild>
              <a href="/contact">Contact us</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={SITE.url} target="_blank" rel="noopener noreferrer">
                popular-pharma.com
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
