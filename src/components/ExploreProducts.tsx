import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, type Product } from "@/lib/products";

/**
 * Homepage "Explore Our Products" section — reference-style product cards
 * with real packshots from popular-pharma.com, each linking to the
 * product's detail page.
 */
const FEATURED_SLUGS = [
  "ambrosol",
  "aquacal-d",
  "astamax",
  "bilastin",
  "candicon",
  "cox-e",
  "doxofyl",
  "nabumax",
];

function featuredProducts(): Product[] {
  return FEATURED_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(
    (p): p is Product => Boolean(p)
  );
}

export default function ExploreProducts() {
  const items = featuredProducts();

  return (
    <section className="section" aria-label="Explore our products">
      <div className="container-x">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Portfolio selection</p>
            <h2 className="h-section !text-2xl sm:!text-3xl 2xl:!text-4xl">
              Explore our products
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A glimpse of the Popular portfolio — 362 brands across 14 therapeutic classes. Every
              pack is manufactured to WHO cGMP standards.
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/products">
              View all products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Reference-style packshot grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 md:grid-cols-3 xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-10">
          {items.map((p) => (
            <ProductCard
              key={p.slug}
              slug={p.slug}
              brandName={p.brandName}
              genericName={p.genericName}
              dosageForm={p.dosageForm}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
