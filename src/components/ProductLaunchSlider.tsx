"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LAUNCH_PRODUCTS } from "@/lib/launches";

const AUTOPLAY_MS = 7000;

export default function ProductLaunchSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = LAUNCH_PRODUCTS.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Autoplay — paused on hover, focus or touch interaction
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, paused, index]);

  // Keyboard navigation (left/right arrows) while the slider is focused
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPaused(true);
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPaused(true);
      next();
    }
  };

  // Swipe support (touch devices)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const product = LAUNCH_PRODUCTS[index];
  const detailHref = `/products/${product.catalogSlug}`;

  return (
    <section
      className="section"
      aria-label="New product launches"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="container-x">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">New additions</p>
            <h2 className="h-section !text-2xl sm:!text-3xl 2xl:!text-4xl">
              Recently launched brands
            </h2>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/products">
              View all products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Editorial panel: product list left, packshot stage right */}
        <div className="mt-8 rounded-lg border bg-secondary">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* ——— Packshot stage (right on desktop, first on mobile) ——— */}
            <div className="order-1 p-4 sm:p-6 lg:order-2 lg:py-8 lg:pl-0 lg:pr-8 2xl:py-10 2xl:pl-0 2xl:pr-10">
              <div
                key={index}
                className="animate-fade-in relative overflow-hidden rounded-lg border border-border/60 bg-background lg:h-[400px] 2xl:h-[460px]"
              >
                <Link
                  href={detailHref}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute inset-0 z-0 block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-contain p-8 drop-shadow-[0_24px_28px_rgba(10,19,48,0.16)] sm:p-12"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </Link>

                {/* New-launch stamp */}
                <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-[4px] border border-border/70 bg-background px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary shadow-[0_1px_2px_rgba(10,19,48,0.08)]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                  New launch
                </div>

                {/* Floating thumbnail rail — click or hover to preview */}
                <div className="absolute right-3 top-3 z-10 flex gap-1.5 rounded-[6px] border border-border/60 bg-background/95 p-1.5 shadow-[0_1px_2px_rgba(10,19,48,0.08)]">
                  {LAUNCH_PRODUCTS.map((p, i) => (
                    <button
                      key={p.catalogSlug}
                      type="button"
                      onClick={() => {
                        setPaused(true);
                        setIndex(i);
                      }}
                      onMouseEnter={() => {
                        setPaused(true);
                        setIndex(i);
                      }}
                      aria-label={`Show ${p.name}`}
                      aria-current={i === index ? "true" : undefined}
                      className={cn(
                        "h-9 w-9 overflow-hidden rounded-[4px] border-2 bg-background transition-all sm:h-10 sm:w-10",
                        i === index
                          ? "border-tertiary"
                          : "border-transparent opacity-55 hover:opacity-100 focus-visible:opacity-100"
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ——— Product list (left) ——— */}
            <div className="order-2 flex flex-col px-6 pb-6 sm:px-8 lg:order-1 lg:py-8 lg:pl-8 lg:pr-10 2xl:py-10 2xl:pl-10 2xl:pr-12">
              <ul role="tablist" aria-label="Launch products" className="border-t border-border/80">
                {LAUNCH_PRODUCTS.map((p, i) => {
                  const active = i === index;
                  return (
                    <li key={p.catalogSlug} className="border-b border-border/80">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={active}
                        aria-label={`Show ${p.name}`}
                        onClick={() => {
                          setPaused(true);
                          setIndex(i);
                        }}
                        className={cn(
                          "group flex w-full items-center justify-between gap-4 py-4 text-left transition-colors 2xl:py-5",
                          active ? "text-tertiary" : "text-foreground hover:text-tertiary"
                        )}
                      >
                        <span
                          className={cn(
                            "text-2xl font-bold tracking-tight sm:text-3xl 2xl:text-4xl",
                            active && "italic"
                          )}
                        >
                          {p.name}
                          <sup
                            aria-hidden="true"
                            className="ml-1.5 align-super text-[10px] font-semibold tracking-widest text-muted-foreground sm:text-[11px]"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </sup>
                        </span>
                        {active ? (
                          <span
                            aria-hidden="true"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-tertiary text-tertiary sm:h-10 sm:w-10"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        ) : (
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-tertiary"
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Active product summary + CTAs */}
              <div key={`details-${index}`} className="animate-fade-up mt-5">
                <p className="text-sm font-semibold text-foreground 2xl:text-base">
                  {product.generic}
                  <span className="font-normal text-muted-foreground"> · {product.category}</span>
                </p>
                <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {product.tagline}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button asChild>
                    <Link href={detailHref}>
                      View Product Details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href={`/contact?category=product&product=${encodeURIComponent(product.name)}`}
                    >
                      Request Product Info
                    </Link>
                  </Button>
                </div>

                {/* Prev / next */}
                <div className="mt-5 flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => {
                      setPaused(true);
                      prev();
                    }}
                    aria-label="Previous product"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => {
                      setPaused(true);
                      next();
                    }}
                    aria-label="Next product"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <span className="sr-only" aria-live="polite">
                    Showing {product.name}, {product.generic}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
