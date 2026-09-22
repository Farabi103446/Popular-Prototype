import type { Metadata } from "next";
import { MapPin, Phone, Mail, ExternalLink, Globe2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactFormWrapper from "./ContactFormWrapper";
import { LOCATIONS } from "@/lib/contact";
import { SITE } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Popular Pharmaceuticals PLC — corporate head office at 17 Shukrabad, West Panthopath, Dhaka and manufacturing factory at Dhamrai. General, product and export inquiries welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you — reach out for general, product or export-related inquiries."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Location cards */}
      <section className="section" aria-label="Our locations">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <Card key={loc.name} className="overflow-hidden">
              <iframe
                src={loc.embed}
                title={`Google Map: ${loc.name}`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <CardContent className="p-6">
                <h2 className="text-lg font-extrabold text-foreground">{loc.name}</h2>
                <address className="mt-3 space-y-2 text-sm not-italic text-muted-foreground">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {loc.address}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                      {loc.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <a href={`mailto:${loc.email}`} className="transition-colors hover:text-primary">
                      {loc.email}
                    </a>
                  </p>
                </address>
                <Button variant="link" className="mt-3 h-auto p-0" asChild>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inquiry form */}
      <section className="border-t bg-secondary/60 py-14 sm:py-20" aria-label="Inquiry form">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Inquiry Form</p>
            <h2 className="h-section">Send us a message</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Choose an inquiry type — general, product or export — and our relevant team will
              respond within 2 working days. Fields marked with * are required.
            </p>
            <div className="mt-8 space-y-4">
              <Card>
                <CardContent className="p-5">
                  <p className="font-bold text-foreground">Hotline</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <p className="font-bold text-foreground">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-sm text-primary hover:underline">
                    {SITE.email}
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <p className="flex items-center gap-2 font-bold text-foreground">
                    <Globe2 className="h-4 w-4 text-tertiary" aria-hidden="true" />
                    Export & Partnership
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    International businesses: use the "Export / Partnership" category so your inquiry
                    reaches the International Business team directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <ContactFormWrapper />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
