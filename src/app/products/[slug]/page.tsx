import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductTabs from "./ProductTabs";
import ProductCard, { PackshotTile } from "@/components/ProductCard";
import { getAllProducts, getProductBySlug, getRelatedProducts, productPdfPath } from "@/lib/api";
import { getPackshot } from "@/lib/packshots";
import { LAUNCH_PRODUCTS } from "@/lib/launches";
import { SITE } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.brandName} (${product.genericName})`,
    description: `${product.brandName} — ${product.genericName}, ${product.dosageForm} by ${SITE.name}. Indications, dosage, contraindications and prescribing information.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.brandName} | ${SITE.name}`,
      description: `${product.genericName} · ${product.dosageForm} · ${product.therapeuticClass}`,
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const packshot = getPackshot(product.slug);
  const isNewLaunch = LAUNCH_PRODUCTS.some((l) => l.catalogSlug === product.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Drug",
    name: product.brandName,
    activeIngredient: product.genericName,
    dosageForm: product.dosageForm,
    manufacturer: { "@type": "Organization", name: SITE.name },
    description: product.indications,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        title={product.brandName}
        subtitle={`${product.genericName} · ${product.therapeuticClass}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.brandName },
        ]}
        image="/images/hero/medicine-shelf.webp"
        imageAlt="Pharmaceutical bottles, capsules and tablets arranged on a table"
      />

      <section className="section" aria-label={`${product.brandName} details`}>
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <Card className="overflow-hidden">
            {packshot && (
              <div className="border-b bg-gradient-to-b from-accent/60 to-background p-6 2xl:p-8">
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <PackshotTile
                    image={packshot.image}
                    alt={packshot.alt}
                    className="h-44 w-44 shrink-0 border bg-secondary p-3 shadow-sm 2xl:h-52 2xl:w-52"
                    imgClassName="p-2"
                  />
                  <div>
                    {isNewLaunch && (
                      <Badge variant="tertiary" className="gap-1.5">
                        New Launch
                      </Badge>
                    )}
                    <p className="text-lg font-bold text-foreground 2xl:text-xl">
                      {product.brandName} · {product.strengths[0]}
                    </p>
                    <p className="mt-1 max-w-md text-sm text-muted-foreground">
                      {isNewLaunch
                        ? "One of our recently launched brands — see the full prescribing information below."
                        : "Part of the Popular portfolio — see the full prescribing information below."}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <ProductTabs product={product} />
          </Card>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Product Summary
                </h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-muted-foreground">Generic Name</dt>
                    <dd className="font-bold text-foreground">{product.genericName}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">Therapeutic Class</dt>
                    <dd className="mt-1">
                      <Link href={`/products?class=${encodeURIComponent(product.therapeuticClass)}`}>
                        <Badge>{product.therapeuticClass}</Badge>
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">Dosage Form</dt>
                    <dd className="font-bold text-foreground">{product.dosageForm}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">Strength(s)</dt>
                    <dd className="font-bold text-foreground">{product.strengths.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-muted-foreground">Pack Size</dt>
                    <dd className="font-bold text-foreground">{product.packSize}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h2 className="flex items-center gap-2 font-extrabold">
                  <FileText className="h-5 w-5 text-emerald-50" aria-hidden="true" />
                  Prescribing Information
                </h2>
                <p className="mt-2 text-sm text-white/75">
                  Download the complete prescribing information PDF for clinical reference.
                </p>
                <Button variant="tertiary" className="mt-4 w-full" asChild>
                  <a
                    href={productPdfPath(product)}
                    download={`${product.slug}-prescribing-information.pdf`}
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download PDF
                  </a>
                </Button>
                <p className="mt-3 text-[11px] leading-relaxed text-white/55">
                  Prototype placeholder document — not for clinical use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Registered Markets
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {product.registeredMarkets.map((m) => (
                    <Badge key={m} variant="tertiary">
                      {m}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="container-x mt-16">
            <h2 className="h-section !text-2xl">More in {product.therapeuticClass}</h2>
            <div className="mt-6 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <ProductCard
                  key={r.slug}
                  slug={r.slug}
                  brandName={r.brandName}
                  genericName={r.genericName}
                  dosageForm={r.dosageForm}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
