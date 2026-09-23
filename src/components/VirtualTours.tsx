"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Compass, Move, Move3d } from "lucide-react";
import { TOURS, type Tour } from "@/lib/tours";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

/**
 * Facilities virtual tours, modeled on Incepta's facilities-tour gallery:
 * thumbnail cards open a lightbox with a drag-to-look panoramic viewer.
 * Popular theme: sage tiles, green chrome, blue interaction accents.
 */

function PanoramaViewer({ tour }: { tour: Tour }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const [resetCount, setResetCount] = useState(0);

  const clampAndApply = useCallback(() => {
    const vp = viewportRef.current;
    const img = vp?.querySelector("img");
    if (!vp || !img) return;
    const maxX = Math.max(0, img.clientWidth - vp.clientWidth);
    const maxY = Math.max(0, img.clientHeight - vp.clientHeight);
    const x = Math.min(Math.max(posRef.current.x, 0), maxX);
    const y = Math.min(Math.max(posRef.current.y, 0), maxY);
    posRef.current = { x, y };
    img.style.transform = `translate(${-x}px, ${-y}px)`;
  }, []);

  // Centre the panorama when the tour opens or is reset
  useEffect(() => {
    const t = setTimeout(() => {
      const vp = viewportRef.current;
      const img = vp?.querySelector("img");
      if (!vp || !img) return;
      posRef.current = { x: (img.clientWidth - vp.clientWidth) / 2, y: 0 };
      clampAndApply();
    }, 80);
    return () => clearTimeout(t);
  }, [tour.id, resetCount, clampAndApply]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { dragging: true, lastX: e.clientX, lastY: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.dragging) return;
    posRef.current.x -= e.clientX - dragRef.current.lastX;
    posRef.current.y -= e.clientY - dragRef.current.lastY;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    clampAndApply();
  };

  const endDrag = () => {
    dragRef.current.dragging = false;
  };

  return (
    <div>
      <div
        ref={viewportRef}
        className="relative aspect-video w-full cursor-grab touch-none select-none overflow-hidden rounded-lg border bg-secondary active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={tour.id}
          src={tour.image}
          alt={`${tour.title} — panoramic view of a Popular Pharmaceuticals facility`}
          className="absolute left-0 top-0 h-auto w-[240%] max-w-none"
          style={{ height: "100%", objectFit: "cover" }}
          draggable={false}
        />
        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full border bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur">
          <Compass className="h-3.5 w-3.5" aria-hidden="true" />
          Drag to look around
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          Pan the view with your mouse or finger — explore the facility.
        </p>
        <Button variant="outline" size="sm" onClick={() => setResetCount((c) => c + 1)}>
          <Move className="h-3.5 w-3.5" aria-hidden="true" />
          Recentre
        </Button>
      </div>
    </div>
  );
}

export default function VirtualTours() {
  const [active, setActive] = useState<Tour | null>(null);

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
        {TOURS.map((tour) => (
          <button
            key={tour.id}
            type="button"
            onClick={() => setActive(tour)}
            aria-label={`Open virtual tour: ${tour.title}`}
            className="group overflow-hidden rounded-lg border bg-card text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tour.thumb}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-primary/85 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Move3d className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <Badge className="absolute left-3 top-3 bg-background/90 text-primary backdrop-blur">
                360° Tour
              </Badge>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">
                {tour.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {tour.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl p-4 sm:p-5">
          {active && (
            <>
              <DialogTitle className="text-lg font-extrabold text-foreground">
                {active.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Interactive panoramic tour — drag to look around.
              </DialogDescription>
              <PanoramaViewer tour={active} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
