"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { MILESTONES } from "@/lib/about";
import { cn } from "@/lib/utils";

const VH_PER_YEAR = 85; // scroll distance per milestone, in viewport heights

/** Real facility photography, rotating per era. */
function eraPhoto(i: number) {
  return `/images/about/facility-${(i % 6) + 1}.webp`;
}

/** Photo caption + achievement title + description for each era. */
const ERA_META = [
  {
    caption: "Popular corporate office, Shukrabad, Dhaka",
    title: "The beginning",
    description:
      "Popular Pharmaceuticals PLC began its journey as part of the Popular Group, one of Bangladesh's most trusted healthcare names since 1982. It was founded with a single ambition: to manufacture world-class medicines at home rather than import them.",
  },
  {
    caption: "Cephalosporin production line, Dhamrai plant",
    title: "Production begins",
    description:
      "Commercial production started with a dedicated cephalosporin facility, a rarity in the region at the time. Segregated, contamination-controlled antibiotic manufacturing gave Popular a quality foundation few new entrants could match.",
  },
  {
    caption: "Sterile injectable manufacturing, Dhamrai",
    title: "Going international",
    description:
      "Popular became the first company in Bangladesh to manufacture PPI injections, cutting dependence on imported gastric-care therapies. The same year, the first consignment of Popular medicines left for international markets.",
  },
  {
    caption: "Human Insulin & IV fluids facility, Dhamrai",
    title: "The insulin landmark",
    description:
      "A landmark year: Bangladesh's first Human Insulin rolled off Popular's lines, followed by the country's first IV fluid in an environment-friendly PP bag. Dialysis fluid production also began, expanding affordable care for chronic patients.",
  },
  {
    caption: "Quality control laboratory, Dhamrai campus",
    title: "Certified quality",
    description:
      "The Animal Health business was launched, and the company's quality management system earned ISO 9001:2008 certification — independent validation of the processes standing behind every batch.",
  },
  {
    caption: "Parenteral nutrition production, Dhamrai",
    title: "Feeding the nation intravenously",
    description:
      "Popular became the first in Bangladesh to manufacture Intravenous Fat Emulsions, among the most technically demanding sterile formulations, giving hospitals a domestic source of complete parenteral nutrition.",
  },
  {
    caption: "Dedicated hormone facility, Dhamrai",
    title: "Saving heart-attack lives",
    description:
      "Streptokinase, the life-saving clot-buster for heart-attack emergencies, was manufactured in Bangladesh for the first time. A dedicated, state-of-the-art hormone facility was introduced the same year.",
  },
  {
    caption: "Vaccine facility, Dhamrai campus",
    title: "Building for immunization",
    description:
      "A dedicated vaccine facility was established, laying the industrial groundwork for national immunization support and the company's future expansion into biological products.",
  },
  {
    caption: "Lyophilization suite, hormone facility",
    title: "Fertility care at home",
    description:
      "Lyophilized fertility hormones were manufactured in Bangladesh for the first time, giving couples access to advanced fertility treatment at a fraction of the imported cost.",
  },
];

/**
 * Milestones as scroll-driven storytelling in the alternating-timeline
 * layout: the stage pins to the viewport, scroll progress advances through
 * the years, and each year's card — photo above, content below — fades in
 * on alternating sides of a center line while the big year sits opposite.
 * The year rail is clickable and tracks overall progress. Falls back to a
 * static stacked list for prefers-reduced-motion.
 */
export default function Timeline() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  // Track reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll progress → active year
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const measure = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(Math.min(Math.max(scrolled / total, 0), 1));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const count = MILESTONES.length;
  const active = Math.min(count - 1, Math.floor(progress * count));
  const m = MILESTONES[active];
  const firstInBd = m.items.some((item) => item.startsWith("First in Bangladesh"));
  const heading = m.items[0];
  const rest = m.items.slice(1);
  const cardLeft = active % 2 === 0;
  const meta = ERA_META[active] ?? { caption: "", title: "", description: "" };

  /** Scroll so the given year owns the pinned stage. */
  const scrollToYear = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const perYear = el.offsetHeight / count;
    window.scrollTo({ top: top + (i + 0.5) * perYear, behavior: "smooth" });
  };

  // Static stacked fallback (reduced motion / no-JS reading order)
  if (reduced) {
    return (
      <ol className="mt-14 space-y-10">
        {MILESTONES.map((ms, i) => (
          <li
            key={ms.year}
            className="grid gap-5 rounded-lg border bg-card p-6 sm:grid-cols-[200px_1fr] sm:gap-8"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border">
              <Image
                src={eraPhoto(i)}
                alt={`Popular Pharmaceuticals facility, ${ms.year}`}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-3xl font-bold tabular-nums text-tertiary">{ms.year}</p>
              {ms.items.some((it) => it.startsWith("First in Bangladesh")) && (
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  First in Bangladesh
                </p>
              )}
              <ul className="mt-3 space-y-2">
                {ms.items.map((item, j) => (
                  <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div ref={wrapRef} className="relative" style={{ height: `${count * VH_PER_YEAR}vh` }}>
      {/* Pinned stage — fills the screen edge to edge */}
      <div className="sticky top-0 flex h-dvh flex-col justify-center">
        {/* Year rail with progress */}
        <div className="relative z-10 mb-8 px-4 sm:px-6 lg:px-10">
          <div className="no-scrollbar mx-auto w-full max-w-[1720px] overflow-x-auto">
            <div className="relative mx-auto flex w-max items-center gap-1">
              {MILESTONES.map((ms, i) => (
                <button
                  key={ms.year}
                  type="button"
                  onClick={() => scrollToYear(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={cn(
                    "relative rounded px-3 py-2 tabular-nums transition-colors duration-200",
                    i === active
                      ? "text-xl font-bold text-tertiary"
                      : "text-sm font-semibold text-muted-foreground hover:text-tertiary"
                  )}
                >
                  {ms.year}
                </button>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-1 h-0.5 w-full max-w-[1720px] overflow-hidden rounded bg-border">
            <div
              className="h-full origin-left bg-tertiary"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>

        {/* Alternating timeline layout, driven by scroll — near full-bleed */}
        <div className="relative mx-auto w-full max-w-[1720px] px-4 sm:px-6 lg:px-10">
          {/* Center line (left rail on mobile) */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-border md:left-1/2 md:-translate-x-px"
          />
          <div
            key={active}
            className="animate-fade-up relative md:grid md:grid-cols-2 md:gap-20 2xl:gap-28"
            aria-live="polite"
          >
            {/* Card: photo above, content below — alternates sides per year */}
            <div
              className={cn(
                "ml-10 md:ml-0 md:row-start-1",
                cardLeft ? "md:col-start-1 md:pr-6" : "md:col-start-2 md:pl-6"
              )}
            >
              <article className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
                <div className="relative h-44 overflow-hidden sm:h-52 lg:h-[min(360px,36vh)] 2xl:h-[min(440px,40vh)]">
                  {MILESTONES.map((ms, i) => (
                    <Image
                      key={i}
                      src={eraPhoto(i)}
                      alt={`Popular Pharmaceuticals facility, ${ms.year}`}
                      fill
                      sizes="(min-width: 768px) 480px, 100vw"
                      className={cn(
                        "object-cover transition-opacity duration-500",
                        i === active ? "opacity-100" : "opacity-0"
                      )}
                    />
                  ))}
                  <span className="absolute left-4 top-4 text-2xl font-bold tabular-nums text-white drop-shadow-md md:hidden">
                    {m.year}
                  </span>
                </div>
                {/* Photo caption: place + context */}
                <p className="flex items-center gap-1.5 border-b border-border px-6 py-2.5 text-xs font-medium text-muted-foreground sm:px-8 lg:px-10">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-tertiary" aria-hidden="true" />
                  {meta.caption}
                </p>
                <div className="p-6 sm:p-8 lg:p-10">
                  <span
                    className={cn(
                      "inline-block rounded-[4px] border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
                      firstInBd
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border bg-muted text-muted-foreground"
                    )}
                  >
                    {firstInBd ? "First in Bangladesh" : "Milestone"}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground sm:text-xl">
                    {heading}
                  </h3>
                  {rest.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {rest.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-tertiary"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </div>

            {/* Blank-side story: title + description, always row 1, top-aligned */}
            <div
              className={cn(
                "hidden md:flex md:h-full md:flex-col md:justify-start md:row-start-1",
                cardLeft
                  ? "md:col-start-2 md:items-start md:pl-6"
                  : "md:col-start-1 md:items-end md:pr-6"
              )}
            >
              <div className={cn("max-w-xl", cardLeft ? "text-left" : "md:text-right")}>
                <p className="text-base font-extrabold uppercase tracking-[0.12em] text-primary sm:text-lg">
                  {meta.title}
                </p>
                <p className="mt-3 text-sm font-normal leading-relaxed text-muted-foreground sm:text-base lg:text-[1.05rem]">
                  {meta.description}
                </p>
              </div>
            </div>

            {/* Big year, anchored at the center line */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="animate-fade-up bg-accent px-8 py-4 text-center">
                <p className="text-7xl font-bold tabular-nums leading-none tracking-tight text-tertiary 2xl:text-8xl">
                  {m.year}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen-reader / SEO copy for the animated stage */}
      <div className="sr-only">
        <ol>
          {MILESTONES.map((ms) => (
            <li key={ms.year}>
              <h3>{ms.year}</h3>
              <ul>
                {ms.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
