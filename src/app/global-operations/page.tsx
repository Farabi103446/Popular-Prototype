import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import WorldMap from "@/components/WorldMap";
import { REGIONS, PARTNER_MARKETS, EXPORT_COUNTRIES } from "@/lib/global";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Global Operations",
  description:
    "Popular Pharmaceuticals exports to 32 countries across Asia, Africa, Central & South America, Europe, CIS and Oceania. Partner with a WHO cGMP certified manufacturer.",
  alternates: { canonical: "/global-operations" },
};

const REGULATORY_APPROVALS = [
  "National Agency for Food and Drug Administration and Control (NAFDAC), Nigeria",
  "Food and Drug Administration, Philippines",
  "Pharmacy & Poisons Board (P&PB), Ministry of Health, Kenya",
  "Department of Drug Administration, Ministry of Health, Nepal",
  "Supreme Board of Drugs and Medical Appliances, Republic of Yemen",
];

export default function GlobalOperationsPage() {
  return (
    <>
      <PageHero
        title="Global Operations"
        subtitle="We are operating globally to make health accessible to all — more than 100 products registered across 32 export destinations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Global Operations" }]}
      />

      {/* Interactive map */}
      <section className="section" aria-label="Interactive export map">
        <div className="container-x">
          <p className="eyebrow">Global Market</p>
          <h2 className="h-section">Our export footprint</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Established in compliance with international regulatory norms to become a global company,
            Popular Pharmaceuticals supplies finished formulations through distribution partners,
            governments and NGOs across six regions.
          </p>
          <div className="mt-8">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* Region summary cards */}
      <section className="border-y bg-secondary/60 py-14" aria-label="Regional overview">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => {
              const list = EXPORT_COUNTRIES.filter((c) => c.region === region);
              return (
                <Card key={region}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-extrabold text-foreground">{region}</h3>
                      <Badge variant="tertiary">{list.length} markets</Badge>
                    </div>
                    <Separator className="my-3" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {list.map((c) => c.name).join(" · ")}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner info */}
      <section className="section" aria-label="International partners">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">For International Partners</p>
            <h2 className="h-section">Partner with a WHO cGMP manufacturer</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{PARTNER_MARKETS.intro}</p>
            <ul className="mt-6 space-y-3">
              {PARTNER_MARKETS.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <Button variant="tertiary" size="lg" className="mt-8" asChild>
              <Link href="/contact?category=export">
                Become a Distribution Partner
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <Card className="overflow-hidden">
            <div className="bg-primary p-7 text-primary-foreground">
              <h3 className="text-lg font-extrabold">Regulatory Approvals</h3>
              <p className="mt-1 text-sm text-white/75">
                Audited and approved by local and foreign MOH / DRA bodies including:
              </p>
            </div>
            <ul className="divide-y divide-border">
              {REGULATORY_APPROVALS.map((item) => (
                <li key={item} className="flex items-start gap-3 px-6 py-4 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
