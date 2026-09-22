import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPackshot } from "@/lib/packshots";

/**
 * Reference-style product card (per client feedback):
 * a soft sage tile with the real packshot, a centered dosage-form pill,
 * centered brand name + generic line, and a full-width pill CTA —
 * echoing the ecommerce-style card layout shared by the client.
 */

interface ProductCardProps {
  slug: string;
  brandName: string;
  genericName: string;
  dosageForm: string;
  ctaLabel?: string;
  /** Show favorite/compare controls (products directory). */
  actions?: React.ReactNode;
  className?: string;
}

export function PackshotTile({
  image,
  alt,
  fallbackText,
  className,
  imgClassName,
}: {
  image?: string;
  alt: string;
  fallbackText?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl bg-secondary",
        className
      )}
    >
      {image ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={image}
          alt={alt}
          className={cn("h-full w-full object-contain p-6", imgClassName)}
          loading="lazy"
        />
      ) : (
        <span
          aria-hidden="true"
          className="select-none text-5xl font-black tracking-tight text-primary/25"
        >
          {fallbackText}
        </span>
      )}
    </div>
  );
}

export default function ProductCard({
  slug,
  brandName,
  genericName,
  dosageForm,
  ctaLabel = "View details",
  actions,
  className,
}: ProductCardProps) {
  const shot = getPackshot(slug);

  return (
    <article
      className={cn(
        "group flex h-full flex-col items-center text-center",
        className
      )}
    >
      {/* Packshot tile */}
      <Link
        href={`/products/${slug}`}
        aria-label={`${brandName} — ${genericName}`}
        className="block w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        tabIndex={-1}
      >
        <PackshotTile
          image={shot?.image}
          alt={shot?.alt ?? `${brandName} (${genericName}) pack`}
          fallbackText={brandName.charAt(0)}
          className="aspect-[4/3] w-full transition-colors duration-200 group-hover:border-primary/40"
        />
      </Link>

      {/* Dosage-form pill */}
      <span className="mt-4 inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground 2xl:text-xs">
        {dosageForm}
      </span>

      {/* Name + generic */}
      <Link
        href={`/products/${slug}`}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
      >
        <h3 className="mt-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary 2xl:text-lg">
          {brandName}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground 2xl:text-sm">
          {genericName}
        </p>
      </Link>

      {actions && <div className="mt-2">{actions}</div>}

      {/* Pill CTA */}
      <Link
        href={`/products/${slug}`}
        aria-label={`View details for ${brandName}`}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-tertiary/60 bg-transparent px-5 py-2.5 text-sm font-semibold text-tertiary transition-colors hover:bg-tertiary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 2xl:py-3"
      >
        {ctaLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
