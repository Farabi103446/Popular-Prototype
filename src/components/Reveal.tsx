"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms — use 60–120ms steps within a group. */
  delay?: number;
  /** Entrance treatment. */
  variant?: "up" | "left" | "right" | "zoom" | "fade";
  /** Render as a different element (default div). */
  as?: ElementType;
  className?: string;
  id?: string;
}

const HIDDEN: Record<NonNullable<RevealProps["variant"]>, string> = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  zoom: "scale-[0.94]",
  fade: "",
};

/**
 * Scroll-reveal wrapper: children start slightly offset and transparent,
 * then ease into place with an exponential-out curve the first time they
 * enter the viewport. Fires once; honors prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  className = "",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        HIDDEN[variant]
      } opacity-0 data-[revealed=true]:translate-x-0 data-[revealed=true]:translate-y-0 data-[revealed=true]:scale-100 data-[revealed=true]:opacity-100 ${className}`}
    >
      {children}
    </Tag>
  );
}
