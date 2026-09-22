"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
}

const SLIDES: Slide[] = [
  {
    eyebrow: "We care for life",
    title: "Pioneer of Human Insulin in Bangladesh",
    description:
      "362 brands & 600 dosage forms, manufactured to internationally accepted standards of quality, purity, efficacy and safety.",
    cta: { label: "Explore Products", href: "/products" },
    secondaryCta: { label: "About Popular", href: "/about" },
    image: "/images/hero/lab.jpg",
  },
  {
    eyebrow: "High-tech manufacturing",
    title: "12 Dedicated Manufacturing Facilities",
    description:
      "From cephalosporins to hormones and vaccines — state-of-the-art plants erected in line with US FDA, UK MHRA and TGA guidelines.",
    cta: { label: "Our Facilities", href: "/quality-manufacturing" },
    image: "/images/hero/production-line.jpg",
  },
  {
    eyebrow: "Overseas business operation",
    title: "Exporting to 32 Countries Worldwide",
    description:
      "More than 100 products registered across Asia, Africa, Latin America and Europe — official supplier to governments and NGOs.",
    cta: { label: "Global Reach", href: "/global-operations" },
    image: "/images/hero/global.jpg",
  },
  {
    eyebrow: "Own distribution channel",
    title: "Nationwide Network of 23 Depots",
    description:
      "A marketing-driven distribution network ensuring our products reach every single drug store throughout the country.",
    cta: { label: "Join Our Team", href: "/career" },
    image: "/images/hero/truck.jpg",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, index]);

  const slide = SLIDES[index];

  return (
    <section
      aria-label="Highlights"
      aria-roledescription="carousel"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Photo layer — all slides mounted & crossfaded (no remounts, no lazy:
          remounting used to flash a solid-blue hero between slides) */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-primary">
        {SLIDES.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt=""
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
              i === index ? "ken-burns opacity-100" : "opacity-0"
            )}
            loading="eager"
            decoding="async"
          />
        ))}
        {/* Readability gradients only (no mix-blend — Safari renders blend layers
            over CSS-animated images as opaque, hiding the photo) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-[420px] flex-col items-start justify-center py-14 sm:min-h-[480px] lg:min-h-[540px] 2xl:min-h-[600px]">
        <div key={index} className="max-w-2xl animate-fade-up">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-50/90 2xl:text-sm">
            {slide.eyebrow}
          </p>
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl 2xl:text-[3.25rem] 2xl:leading-[1.1]">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 2xl:text-lg">
            {slide.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="tertiary" size="lg" asChild>
              <Link href={slide.cta.href}>
                {slide.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {slide.secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href={slide.secondaryCta.href}>{slide.secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 right-6 z-10 flex items-center gap-3">
        <div className="flex gap-1.5" role="tablist" aria-label="Slide position">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 transition-all",
                i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          aria-label="Previous slide"
          className="h-8 w-8 rounded-md border-white/30 bg-primary/40 text-white hover:bg-primary/60 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          aria-label="Next slide"
          className="h-8 w-8 rounded-md border-white/30 bg-primary/40 text-white hover:bg-primary/60 hover:text-white"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
