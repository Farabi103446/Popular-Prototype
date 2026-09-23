import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, FlaskConical, Microscope, FileCheck2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { RD_GROUPS, RD_CAPABILITIES, PIPELINE, PIPELINE_STAGES } from "@/lib/rd";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "Popular Pharmaceuticals R&D — formulation, analytical and regulatory teams developing generics, difficult-to-copy formulations and sterile products, with a track record of Bangladesh firsts from Human Insulin to lyophilized fertility hormones.",
  alternates: { canonical: "/rd" },
};

const GROUP_ICONS = [FlaskConical, Microscope, FileCheck2];

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
        subtitle="From the molecule to the transferable process — formulation, analytical and regulatory teams working side by side, building on a heritage of Bangladesh firsts."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "R&D" }]}
        image="/images/about/facility-3.webp"
        imageAlt="Popular Pharmaceuticals development laboratory"
      />

      {/* Intro — what R&D does here, grounded in the site's real history */}
      <section className="section" aria-label="R&D overview">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">The division</p>
            <h2 className="h-section">Science first, in everything we launch</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Since our first commercial batch in 2005, the R&amp;D division has been the
                engine behind every Bangladesh first on this campus — the country&apos;s first
                PPI injections, first IV fat emulsions, first streptokinase, first lyophilized
                fertility hormones and the first locally manufactured Human Insulin.
              </p>
              <p>
                The division works as three coordinated teams. Formulation turns a molecule
                into a process; Analytical proves the process is under control; Regulatory
                packages the evidence and defends it before regulators. Every new product
                reaches the plant only after all three have signed off.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-start">
            {[
              ["2005", "R&D alongside first commercial production"],
              ["362", "brands developed and registered"],
              ["600+", "dosage forms mastered"],
              ["6", "Bangladesh industry firsts"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-lg border bg-card p-5 shadow-card">
                <p className="text-2xl font-extrabold tabular-nums text-primary 2xl:text-3xl">{v}</p>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three teams — the core of the page */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="R&D teams">
        <div className="container-x">
          <p className="eyebrow">How we work</p>
          <h2 className="h-section">Three teams, one product</h2>

          <div className="mt-10 space-y-6">
            {RD_GROUPS.map((group, gi) => {
              const Icon = GROUP_ICONS[gi % GROUP_ICONS.length];
              return (
                <div
                  key={group.id}
                  className="grid overflow-hidden rounded-xl border bg-card shadow-card lg:grid-cols-[260px_1fr_300px]"
                >
                  {/* Identity column */}
                  <div className="border-b bg-card p-7 lg:border-b-0 lg:border-r">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold text-foreground">{group.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {group.mandate}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Responsibilities
                    </p>
                    <ul className="mt-4 space-y-3">
                      {group.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                          <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tertiary/15">
                            <Check className="h-2.5 w-2.5 text-tertiary" aria-hidden="true" />
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Equipment */}
                  <div className="border-t bg-accent/40 p-7 lg:border-l lg:border-t-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Key equipment
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-2.5">
                      {group.equipment.map((e) => (
                        <li
                          key={e}
                          className="rounded-md border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground/80"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities + pipeline side by side */}
      <section className="section" aria-label="Capabilities and pipeline">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
            {/* Dosage-form capabilities */}
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="h-section">What the labs can make</h2>
              <ul className="mt-6 space-y-2.5">
                {RD_CAPABILITIES.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pipeline table */}
            <div>
              <p className="eyebrow">Pipeline</p>
              <h2 className="h-section">Molecules in development</h2>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Pipeline stages legend">
                {PIPELINE_STAGES.map((stage) => (
                  <Badge key={stage} variant={STAGE_VARIANT[stage]}>
                    {stage}
                  </Badge>
                ))}
              </div>
              <div className="mt-5 overflow-x-auto rounded-xl border bg-card shadow-card">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="px-5 py-3.5 font-bold">Molecule</th>
                      <th className="px-5 py-3.5 font-bold">Area</th>
                      <th className="px-5 py-3.5 font-bold">Stage</th>
                      <th className="px-5 py-3.5 font-bold">Target market</th>
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
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Pipeline information is representative prototype data for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — quiet band, not a gradient billboard */}
      <section className="border-t bg-primary py-14 text-primary-foreground sm:py-16" aria-label="R&D collaboration">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">
              R&D or contract-manufacturing collaboration
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
              Our development teams and cGMP facilities are open to partners — domestic and
              overseas sponsors welcome.
            </p>
          </div>
          <Button variant="tertiary" size="lg" className="shrink-0" asChild>
            <Link href="/contact?category=export">
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
