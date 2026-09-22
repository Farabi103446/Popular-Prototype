import type { Metadata } from "next";
import { Check, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import PlaceholderImage from "@/components/PlaceholderImage";
import { FACILITIES, QUALITY_INFRASTRUCTURE, ACCREDITATIONS, QA_QC_PRACTICES } from "@/lib/facilities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Quality & Manufacturing",
  description:
    "12 dedicated manufacturing facilities built to US FDA, UK MHRA and TGA guidelines. WHO cGMP certified, ISO 9001:2015 with QA/QC practices and international accreditations.",
  alternates: { canonical: "/quality-manufacturing" },
};

export default function QualityManufacturingPage() {
  return (
    <>
      <PageHero
        title="Quality & Manufacturing"
        subtitle="State-of-the-art facilities erected in line with US FDA, UK MHRA and TGA guidelines — certified to WHO cGMP with dedicated blocks for every critical category."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Quality & Manufacturing" }]}
      />

      {/* Facility overview */}
      <section className="section" aria-label="Manufacturing facilities">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Facilities</p>
            <h2 className="h-section">12 dedicated facilities, one cGMP campus</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The master plan was developed by renowned pharmaceutical consultants from Australia
              (Asia Pacific Consultants) for long-term operations. The plant manufactures oral solids
              & liquids, creams & ointments, ophthalmics, small volume parenterals and large volume
              parenterals — with separate, dedicated penicillin and cephalosporin facilities unique of
              their kind in Bangladesh.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Environment classifications range from Class 100 (A/B) to Class 100,000 (D/E), with HVAC
              designed to meet US FDA, EU GMP and ASHRAE requirements and monitored by a central
              Siemens Building Management System.
            </p>
          </div>
          <Card className="overflow-hidden">
            <PlaceholderImage
              label="Popular Pharmaceuticals manufacturing plant, Dhamrai"
              variant="primary"
              height="h-72"
            />
            <div className="grid grid-cols-3 divide-x divide-border text-center">
              <div className="p-4">
                <p className="text-xl font-extrabold text-primary tabular-nums">12</p>
                <p className="text-xs font-semibold text-muted-foreground">Dedicated units</p>
              </div>
              <div className="p-4">
                <p className="text-xl font-extrabold text-tertiary">A–E</p>
                <p className="text-xs font-semibold text-muted-foreground">Cleanroom classes</p>
              </div>
              <div className="p-4">
                <p className="text-xl font-extrabold text-primary">24/7</p>
                <p className="text-xs font-semibold text-muted-foreground">BMS monitoring</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Dedicated units accordion */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="Dedicated manufacturing units">
        <div className="container-x">
          <p className="eyebrow">Manufacturing Units</p>
          <h2 className="h-section">Dedicated facilities by category</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Card className="p-5">
              <Accordion
                items={FACILITIES.map((f) => ({
                  title: `${f.name} — ${f.short}`,
                  content: f.description,
                }))}
              />
            </Card>
            <div className="space-y-5">
              <PlaceholderImage label="Cephalosporin dedicated block" variant="accent" height="h-48" />
              <PlaceholderImage label="Sterile injectables filling suite" variant="tertiary" height="h-48" />
              <PlaceholderImage label="Quality control laboratory" variant="warm" height="h-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure highlights */}
      <section className="section" aria-label="Quality infrastructure">
        <div className="container-x">
          <p className="eyebrow">Infrastructure</p>
          <h2 className="h-section">Built for compliance and reliability</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-7">
            {QUALITY_INFRASTRUCTURE.map((q) => (
              <Card key={q.title} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary/10">
                    <Check className="h-5 w-5 text-tertiary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-foreground">{q.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QA / QC */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="Quality assurance and quality control">
        <div className="container-x">
          <p className="eyebrow">QA / QC</p>
          <h2 className="h-section">Two independent pillars of quality</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {QA_QC_PRACTICES.map((pillar) => (
              <Card key={pillar.title}>
                <CardContent className="p-7">
                  <h3 className="text-xl font-extrabold text-primary">{pillar.title}</h3>
                  <Separator className="my-5" />
                  <ul className="space-y-3">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tertiary/15">
                          <Check className="h-3.5 w-3.5 text-tertiary" aria-hidden="true" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section" aria-label="Accreditations and certifications">
        <div className="container-x">
          <p className="eyebrow">Accreditations</p>
          <h2 className="h-section">Certified and audited by global regulators</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-7">
            {ACCREDITATIONS.map((a) => (
              <Card key={a.name} className="text-center transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                    <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-extrabold text-foreground">{a.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-tertiary">{a.authority}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Badge>WHO cGMP Certified</Badge>
            <Badge variant="tertiary">ISO 9001:2015</Badge>
            <Badge variant="outline">US FDA / UK MHRA / TGA Guidelines</Badge>
          </div>
        </div>
      </section>
    </>
  );
}
