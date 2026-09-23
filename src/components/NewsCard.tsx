import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsItem } from "@/lib/news";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function NewsCard({
  item,
  featured = false,
}: {
  item: NewsItem;
  featured?: boolean;
}) {
  return (
    <Card
      className={cn(
        "group flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-16px_hsl(230_30%_20%_/_0.18)]",
        featured
          ? "flex-col md:flex-row" /* content-height — never stretches to fill a tall grid track */
          : "h-full flex-col"
      )}
    >
      {/* Visual panel — real photo (with brand-tinted decorative fallback) */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-gradient-to-br from-primary/[0.06] via-tertiary/[0.07] to-secondary",
          featured ? "min-h-40 md:w-[38%] md:min-h-full" : "h-44"
        )}
      >
        {item.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Legibility scrim over the photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent"
            />
          </>
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(hsl(147_60%_38%_/_0.06)_1px,transparent_1px),linear-gradient(90deg,hsl(147_60%_38%_/_0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full border-[14px] border-tertiary/10" />
          </div>
        )}
        {featured && (
          <div className="absolute left-4 top-4">
            <Badge className="bg-background/95 text-tertiary shadow-sm backdrop-blur-sm">
              {item.category}
            </Badge>
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex flex-col p-5",
          featured ? "md:justify-center md:p-8" : "flex-1"
        )}
      >
        {!featured && (
          <div className="flex items-center gap-2 text-xs">
            <Badge variant="tertiary">{item.category}</Badge>
            <time dateTime={item.date} className="text-muted-foreground">
              {new Date(item.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        )}
        <h3
          className={cn(
            "mt-3 text-base font-bold leading-snug text-foreground group-hover:text-primary",
            featured && "mt-1 text-xl leading-snug 2xl:text-2xl"
          )}
        >
          <Link href={`/news/${item.slug}`}>{item.title}</Link>
        </h3>
        {featured && (
          <time
            dateTime={item.date}
            className="mt-2 text-xs text-muted-foreground"
          >
            {new Date(item.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        )}
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3",
            featured ? "line-clamp-4" : "flex-1" /* keeps Read More bottom-aligned in equal-height rows */
          )}
        >
          {item.excerpt}
        </p>
        <Link
          href={`/news/${item.slug}`}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold text-tertiary transition-colors hover:underline",
            featured ? "mt-5" : "mt-4"
          )}
          aria-label={`Read more: ${item.title}`}
        >
          Read More
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}