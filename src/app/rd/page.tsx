import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { RD_FOCUS_AREAS, PIPELINE, PIPELINE_STAGES } from "@/lib/rd";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "Popular Pharmaceuticals R&D — formulation science, biologics readiness, first-to-market molecules and a growing pipeline across diabetes, cardiology and oncology.",
  alternates: { canonical: "/rd" },
};

const STAGE_VARIANT: Record<string, "muted" | "default" | "tertiary" | "solid"> = {
  Development: "muted",
  "Bio-equivalence": "default",
  Registration: "solid",
  "Launch Ready": "tertiary",
};
export default function RDPage() {
  return (
    <>
      <PageHero
        title="Research & Development"
        subtitle="A heritage of Bangladesh firsts — from Human Insulin to lyophilized fertility hormones — now extending into biologics and high-value molecules."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "R&D" }]}
      />

      {/* Focus areas */}
      <section className="section" aria-label="R&D focus areas">
        <div className="container-x">
          <p className="eyebrow">Focus Areas</p>
          <h2 className="h-section">Where our science is heading</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {RD_FOCUS_AREAS.map((area, i) => (
              <Card key={area.title} className="transition-shadow hover:shadow-md">
                <CardContent className="flex gap-5 p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-base font-extrabold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="Product pipeline">
        <div className="container-x">
          <p className="eyebrow">Pipeline</p>
          <h2 className="h-section">Molecules in development</h2>

          <div className="mt-6 flex flex-wrap gap-2" aria-label="Pipeline stages legend">
            {PIPELINE_STAGES.map((stage) => (
              <Badge key={stage} variant={STAGE_VARIANT[stage]}>
                {stage}
              </Badge>
            ))}
          </div>

          <Card className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3.5 font-bold">Molecule</th>
                  <th className="px-5 py-3.5 font-bold">Therapeutic Area</th>
                  <th className="px-5 py-3.5 font-bold">Stage</th>
                  <th className="px-5 py-3.5 font-bold">Target Market</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {PIPELINE.map((item) => (
                  <tr key={item.molecule} className="transition-colors hover:bg-accent/50">
                    <td className="px-5 py-3.5 font-bold text-foreground">{item.molecule}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{item.area}</td>
                    <td className="px-5 py-3.5">
                      <Badge variant={STAGE_VARIANT[item.stage]}>{item.stage}</Badge>
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground">{item.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <p className="mt-3 text-xs text-muted-foreground">
            Pipeline information is representative prototype data for demonstration purposes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-label="R&D collaboration">
        <div className="container-x">
          <Card className="border-0 bg-gradient-to-r from-primary to-tertiary/80 text-primary-foreground">
            <CardContent className="p-8 text-center sm:p-12">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Interested in R&D or contract manufacturing collaboration?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/75">
                Leverage our cGMP facilities and development expertise for your portfolio — local and
                overseas sponsors welcome.
              </p>
              <Button variant="tertiary" size="lg" className="mt-6" asChild>
                <Link href="/contact?category=export">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
