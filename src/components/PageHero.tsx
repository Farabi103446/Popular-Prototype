import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { href?: string; label: string }[];
  className?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b bg-gradient-to-br from-primary via-primary to-tertiary/70 text-primary-foreground",
        className
      )}
    >
      {/* Decorative ring pattern */}
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

      <div className="container-x relative z-10 py-12 sm:py-16 2xl:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-primary-foreground/70">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-primary-foreground">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-semibold text-primary-foreground">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl text-balance text-3xl font-extrabold tracking-tight sm:text-5xl 2xl:max-w-4xl 2xl:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg 2xl:max-w-4xl 2xl:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
