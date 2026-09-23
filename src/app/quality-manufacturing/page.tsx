import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, ClipboardCheck, Radar, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { FACILITIES, QUALITY_INFRASTRUCTURE, ACCREDITATIONS, QA_QC_PRACTICES } from "@/lib/facilities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Quality & Manufacturing",
  description:
    "Inside the Popular Pharmaceuticals Dhamrai campus: dedicated cGMP manufacturing blocks, WHO-certified quality operations, and accreditations from regulators across three continents.",
  alternates: { canonical: "/quality-manufacturing" },
};

/** Photo per facility unit — the six real Dhamrai photographs. */
const UNIT_PHOTOS: Record<string, { src: string; alt: string }> = {
  "General Unit": {
    src: "/images/about/facility-2.webp",
    alt: "General production block at the Dhamrai plant",
  },
  "Cephalosporin Unit": {
    src: "/images/about/facility-4.webp",
    alt: "Dedicated cephalosporin manufacturing block",
  },
  "Sterile Product Unit": {
    src: "/images/about/facility-3.webp",
    alt: "Sterile manufacturing and laboratory areas",
  },
  "Hormone Unit": {
    src: "/images/about/facility-5.webp",
    alt: "Hormone and lyophilization facility",
  },
};

const QA_PILLAR_ICONS = [ShieldCheck, ClipboardCheck, Radar];

export default function QualityManufacturingPage() {
  return (
    <>
      <PageHero
        title="Quality & Manufacturing"
        subtitle="Twelve dedicated blocks on one cGMP campus — segregated penicillin and cephalosporin facilities, WHO-certified quality operations and equipment sourced from Europe, the US and Asia."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quality & Manufacturing" }]}
        image="/images/about/facility-1.webp"
        imageAlt="Aerial view of the Dhamrai manufacturing campus"
        lightText
      />

      {/* Campus intro — narrative + photo, Square-style */}
      <section className="section" aria-label="The Dhamrai campus">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">The campus</p>
            <h2 className="h-section">One campus, built to international code</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                The Dhamrai plant, about 35 kilometres north-west of Dhaka, was master-planned
                by pharmaceutical consultants from Australia (Asia Pacific Consultants) and
                erected in line with US FDA, UK MHRA and TGA guidelines. Production began in
                2005 with a deliberately unusual decision: dedicated, fully segregated
                penicillin and cephalosporin blocks from day one.
              </p>
              <p>
                Today the campus runs twelve manufacturing units — oral solids and liquids,
                creams and ointments, ophthalmics, small and large volume parenterals, insulin,
                hormones, vaccines and animal health — with cleanroom classifications from
                Class 100 (A/B) to Class 100,000 (D/E) and HVAC engineered to US FDA, EU GMP
                and ASHRAE requirements, all monitored by a central Siemens building management
                system.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                ["12", "dedicated units"],
                ["A–E", "cleanroom classes"],
                ["24/7", "BMS monitoring"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-lg border bg-card p-4 shadow-card">
                  <p className="text-xl font-extrabold tabular-nums text-primary 2xl:text-2xl">{v}</p>
                  <p className="mt-0.5 text-xs font-semibold text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="overflow-hidden rounded-xl border shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/facility-6.webp"
              alt="Production hall at the Popular Pharmaceuticals Dhamrai plant"
              className="h-full min-h-72 w-full object-cover"
              loading="lazy"
            />
            <figcaption className="border-t bg-secondary/60 px-4 py-2.5 text-xs text-muted-foreground">
              The Dhamrai manufacturing campus — master-planned by Asia Pacific Consultants, Australia.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Manufacturing units — accordion narrative + photos (Square-style) */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="Dedicated manufacturing units">
        <div className="container-x">
          <p className="eyebrow">Manufacturing units</p>
          <h2 className="h-section">Dedicated blocks, segregated by design</h2>

          {/* Masonry columns: photo cards and text-only cards pack compactly,
              so no card is stretched or leaves ragged holes */}
          <div className="mt-10 md:columns-2 md:gap-6 2xl:md:gap-8">
            {FACILITIES.map((f) => {
              const photo = UNIT_PHOTOS[f.name];
              return (
                <article
                  key={f.name}
                  className="mb-6 break-inside-avoid overflow-hidden rounded-xl border bg-card shadow-card"
                >
                  {photo && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="aspect-[16/7] w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-extrabold text-foreground">{f.name}</h3>
                      <Badge variant="tertiary">{f.short}</Badge>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality operations — the three QA pillars (Incepta-style) */}
      <section className="section" aria-label="Quality operations">
        <div className="container-x">
          <p className="eyebrow">Quality operations</p>
          <h2 className="h-section">One quality system, three lines of defence</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Our quality management system is written against WHO cGMP principles and runs as a
            single harmonized system across every unit on campus. Release authority for raw
            materials, packaging components and finished batches rests with the Head of Quality
            Assurance — no batch ships without it.
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-3 2xl:gap-8">
            {QA_QC_PRACTICES.map((pillar, i) => {
              const Icon = QA_PILLAR_ICONS[i % QA_PILLAR_ICONS.length];
              return (
                <Card key={pillar.title} className="flex flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-foreground">{pillar.title}</h3>
                  <Separator className="my-4" />
                  <ul className="flex-1 space-y-3">
                    {pillar.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance machinery — change control, self-inspection, suppliers */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="Compliance systems">
        <div className="container-x">
          <p className="eyebrow">Compliance systems</p>
          <h2 className="h-section">The machinery behind the certificate</h2>
          <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-7">
            {QUALITY_INFRASTRUCTURE.map((q) => (
              <div key={q.title} className="rounded-xl border bg-card p-6 shadow-card">
                <h3 className="font-bold text-foreground">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section" aria-label="Accreditations and certifications">
        <div className="container-x">
          <p className="eyebrow">Accreditations</p>
          <h2 className="h-section">Audited and approved by global regulators</h2>
          <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-7">
            {ACCREDITATIONS.map((a) => (
              <div key={a.name} className="rounded-xl border bg-card p-6 shadow-card">
                <Badge variant="tertiary">{a.authority}</Badge>
                <h3 className="mt-3 font-extrabold text-foreground">{a.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary py-14 text-primary-foreground sm:py-16" aria-label="Visit or collaborate">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">See the plant for yourself</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
              Take the virtual tour of the Dhamrai campus, or start a conversation about
              contract manufacturing and quality collaboration.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button variant="tertiary" size="lg" asChild>
              <Link href="/virtual-tours">
                Virtual tour
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/contact?category=export">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
