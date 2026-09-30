"use client";

import { useEffect, useRef, useState } from "react";
import { FACILITIES } from "@/lib/facilities";
import { cn } from "@/lib/utils";

/**
 * Scroll-driven unit explorer — the showpiece of the facilities page.
 *
 * A tall scroll track (one segment per unit) drives a pinned showcase:
 * as the visitor scrolls, the active unit advances and the photo panel
 * crossfades to that block's real photograph while the caption swaps.
 * The index rail is clickable and scrolls to the matching segment.
 */
export default function UnitExplorer() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = track.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.999);
        setActive(Math.floor(progress * FACILITIES.length));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const jumpTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const segment = scrollable / FACILITIES.length;
    const top = window.scrollY + rect.top + segment * (index + 0.5);
    window.scrollTo({ top, behavior: "smooth" });
  };

  const unit = FACILITIES[active];
  const progress = ((active + 1) / FACILITIES.length) * 100;

  return (
    <div ref={trackRef} className="relative" style={{ height: `${FACILITIES.length * 90}vh` }}>
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] min-h-[620px] items-center overflow-hidden">
        <div className="container-x grid w-full items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          {/* Index rail */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Nine dedicated blocks</p>
            <h2 className="h-section text-balance">
              One campus,
              <br />
              <span className="text-primary">nine specialised plants.</span>
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-1 w-full max-w-56 overflow-hidden rounded-full bg-border">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-primary transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm font-bold tabular-nums text-muted-foreground">
                {String(active + 1).padStart(2, "0")}
                <span className="text-muted-foreground/60"> / {String(FACILITIES.length).padStart(2, "0")}</span>
              </p>
            </div>

            <ul className="mt-6 max-h-[42vh] space-y-0.5 overflow-y-auto pr-2 lg:max-h-[52vh]">
              {FACILITIES.map((f, i) => {
                const isActive = i === active;
                return (
                  <li key={f.name}>
                    <button
                      type="button"
                      onClick={() => jumpTo(i)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "group flex w-full items-baseline gap-3 rounded-md px-3 py-2 text-left transition-colors duration-200",
                        isActive ? "bg-secondary" : "hover:bg-secondary/60"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-bold tabular-nums transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-semibold transition-colors sm:text-base",
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        {f.name}
                      </span>
                      <span className="ml-auto hidden text-xs text-muted-foreground/70 sm:block">{f.short}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Photo showcase */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-card shadow-card sm:aspect-[16/10] lg:aspect-[16/11]">
              {FACILITIES.map(
                (f, i) =>
                  f.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={f.name}
                      src={f.image}
                      alt=""
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                      )}
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  )
              )}

              {/* Ink gradient for caption legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(150_25%_12%/0.82)] via-[hsl(150_25%_12%/0.1)] to-transparent" />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-200/90">
                  Unit {String(active + 1).padStart(2, "0")} — {unit.short}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{unit.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-emerald-50/90">{unit.description}</p>
                {unit.facts && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {unit.facts.map((fact) => (
                      <span
                        key={fact}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Keep scrolling — the showcase advances through all nine blocks. Click a name to jump.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
