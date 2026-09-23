import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { href?: string; label: string }[];
  /** Optional real photograph (e.g. medicines, production line) filling the right half. */
  image?: string;
  imageAlt?: string;
  /** Force white text even when a photo is present (for darker photos). */
  lightText?: boolean;
  /** How the photo fills the banner: cover crops, contain shows the full image. */
  imageFit?: "cover" | "contain";
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image,
  imageAlt,
  lightText,
  imageFit = "cover",
  className,
}: PageHeroProps) {
  const darkText = Boolean(image) && !lightText; // bright photo backgrounds need dark ink, not white
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b bg-gradient-to-br from-primary via-primary to-tertiary/70 text-primary-foreground",
        className
      )}
    >
      {/* Optional real photograph — full-bleed, with a light neutral veil on the
          text side only (dark-text heroes) so headlines stay legible on busy photos */}
      {image && (
        <div aria-hidden="true" className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt ?? ""}
            className={cn(
              "h-full w-full",
              imageFit === "contain" ? "object-contain object-right" : "object-cover object-center"
            )}
            loading="eager"
          />
          {darkText && (
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/10" />
          )}
        </div>
      )}

      {/* Decorative ring pattern — only on pages without a photo */}
      {!image && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[30px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-32 h-80 w-80 rounded-full border-[24px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 85% 30%, hsl(147 60% 38% / 0.18) 0, transparent 45%)",
            }}
          />
        </>
      )}

      <div className="container-x relative z-10 py-12 sm:py-16 2xl:py-20">
        <nav aria-label="Breadcrumb" className="animate-heroup">
          <ol
            className={cn(
              "flex flex-wrap items-center gap-1.5 text-sm",
              darkText ? "text-foreground" : "text-primary-foreground/70"
            )}
          >
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className={cn(
                      "transition-colors",
                      darkText ? "hover:text-foreground" : "hover:text-primary-foreground"
                    )}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className={cn("font-semibold", darkText ? "text-foreground" : "text-primary-foreground")}
                  >
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1
          className={cn(
            "animate-heroup mt-5 max-w-3xl text-balance text-3xl font-extrabold tracking-tight [animation-delay:90ms] sm:text-5xl 2xl:max-w-4xl 2xl:text-6xl",
            darkText && "text-foreground"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "animate-heroup mt-4 max-w-3xl text-base leading-relaxed [animation-delay:180ms] sm:text-lg 2xl:max-w-4xl 2xl:text-xl",
              darkText ? "text-foreground/90" : "text-primary-foreground/80"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
