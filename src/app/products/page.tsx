import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ProductDirectory from "./ProductDirectory";
import { getAllProducts } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the Popular Pharmaceuticals product directory — search by brand name, generic name or therapeutic class. 362 brands & 600 dosage forms across antibiotics, cardiovascular, diabetes, CNS and more.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="A comprehensive directory of the Popular Pharmaceuticals portfolio — search by brand or generic name, filter by therapeutic class and dosage form, and download prescribing information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        image="/images/hero/medicine-shelf.webp"
        imageAlt="Pharmaceutical bottles, capsules and tablets arranged on a table"
      />

      <section className="section 2xl:pt-16" aria-label="Product directory">
        <div className="container-x">
          <div className="mb-8 grid gap-4 rounded-lg border bg-accent/60 p-5 text-sm text-primary sm:grid-cols-3">
            <p>
              <strong className="block text-base tabular-nums">{products.length}</strong>
              representative products in this prototype
            </p>
            <p>
              <strong className="block text-base tabular-nums">362 / 600</strong>
              total brands / dosage forms in the full portfolio
            </p>
            <p>
              <strong className="block text-base tabular-nums">100+</strong>
              products registered in export markets
            </p>
          </div>
          <Suspense fallback={null}>
            <ProductDirectory products={products} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
