"use client";

import { useEffect, useRef, useState } from "react";
import { CLEANROOM_CLASSES } from "@/lib/facilities";
import { cn } from "@/lib/utils";

/**
 * Animated cleanroom-classification ladder.
 *
 * Five horizontal bars fill from Class A (strictest, shortest) to Class E
 * (broadest) when the section scrolls into view; each bar carries its use
 * case. Widths encode the population limit of each class (log-ish scale)
 * rather than literal particle counts, so the strictest reads as the
 * most controlled.
 */
export default function CleanroomLadder() {
  const ref = useRef<HTMLDivElement>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGrown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setGrown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const widths = [22, 34, 52, 76, 100];

  return (
    <div ref={ref} className="space-y-4">
      {CLEANROOM_CLASSES.map((c, i) => (
        <div key={c.id} className="group">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-sm font-bold text-foreground">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-extrabold text-primary">
                {c.id}
              </span>
              {c.label}
              <span className="ml-3 hidden text-xs font-medium text-muted-foreground sm:inline">{c.use}</span>
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">{c.use}</p>
          </div>
          <div className="mt-1.5 h-8 w-full overflow-hidden rounded-md border bg-secondary/60">
            <div
              className={cn(
                "flex h-full items-center rounded-r-md bg-gradient-to-l from-primary/85 to-primary transition-[width] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                i < 2 ? "bg-[length:200%_100%]" : ""
              )}
              style={{
                width: grown ? `${widths[i]}%` : "0%",
                transitionDelay: `${i * 110}ms`,
              }}
            >
              <span className="whitespace-nowrap px-3 text-[11px] font-semibold text-primary-foreground/95">
                {c.detail}
              </span>
            </div>
          </div>
        </div>
      ))}
      <p className="pt-1 text-xs text-muted-foreground">
        Environment classifications per the plant design: Class 100 (A/B), 10,000 (C) and 100,000 (D/E), applied by
        activity. HVAC designed by APC to meet US FDA, EU GMP and ASHRAE requirements.
      </p>
    </div>
  );
}
