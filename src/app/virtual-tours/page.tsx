import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VirtualTours from "@/components/VirtualTours";

export const metadata: Metadata = {
  title: "Virtual Tours",
  description:
    "Take an interactive virtual tour of the Popular Pharmaceuticals manufacturing facilities — production blocks, quality control laboratories and the Dhamrai campus, in a drag-to-look panoramic view.",
  alternates: { canonical: "/virtual-tours" },
};

export default function VirtualToursPage() {
  return (
    <>
      <PageHero
        title="Virtual Tours"
        subtitle="Step inside our facilities — drag to look around the production blocks, laboratories and campus in an interactive panoramic view."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Virtual Tours" }]}
        image="/images/about/facility-1.webp"
        imageAlt="Aerial view of the Popular Pharmaceuticals Dhamrai manufacturing campus"
        lightText
      />

      <section className="section" aria-label="Facilities virtual tours">
        <div className="container-x">
          <p className="eyebrow">Facilities Tour Gallery</p>
          <h2 className="h-section">Explore the plant</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Select a location to open its panoramic viewer — pan with your mouse or
            finger to explore the space as if you were standing in it.
          </p>
          <VirtualTours />
        </div>
      </section>
    </>
  );
}
