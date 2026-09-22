import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { FOOTER_SITEMAP } from "@/lib/nav";
import { SITE } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.7v8h3Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.9 21H3.6V9.7h3.3V21ZM5.2 8.2a1.9 1.9 0 1 1 0-3.9 1.9 1.9 0 0 1 0 3.9ZM21 21h-3.3v-5.6c0-1.4-.5-2.3-1.8-2.3-1 0-1.5.6-1.8 1.3-.1.2-.1.6-.1.9V21h-3.3V9.7h3.3v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 4 1.4 4 4.5V21Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="no-print border-t bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <img
            src="/brand/logo-alt.webp"
            alt="Popular Pharmaceuticals PLC logo"
            className="h-8 w-auto brightness-0 invert"
            loading="lazy"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            The pioneer manufacturer of Human Insulin in Bangladesh — a WHO cGMP certified company
            of the Popular Group, exporting to {SITE.stats.exportCountries} countries.
          </p>
          <address className="mt-5 space-y-2.5 text-sm not-italic">
            <p className="flex items-start gap-2.5 text-primary-foreground/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" aria-hidden="true" />
              {SITE.address}
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-tertiary" aria-hidden="true" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="transition-opacity hover:opacity-80">
                {SITE.phone}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-tertiary" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="transition-opacity hover:opacity-80">
                {SITE.email}
              </a>
            </p>
          </address>
          <div className="mt-5 flex gap-2.5">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Popular Pharmaceuticals on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-tertiary"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Popular Pharmaceuticals on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-tertiary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Sitemap columns */}
        {FOOTER_SITEMAP.map((col) => (
          <nav key={col.title} aria-label={`Footer: ${col.title}`}>
            <p className="text-sm font-bold text-tertiary">{col.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <Separator className="bg-white/10" />
      <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Functional prototype — content sourced from
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline transition-opacity hover:opacity-80"
          >
            popular-pharma.com
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </p>
      </div>
    </footer>
  );
}
