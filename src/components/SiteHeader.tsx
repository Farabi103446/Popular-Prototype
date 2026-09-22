"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type NavLink = (typeof NAV_LINKS)[number];

/** Animated blue underline: slides in on hover, persists on the active page. */
function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-3 bottom-0.5 h-0.5 origin-left rounded-sm bg-tertiary transition-transform duration-200 ease-out",
        active ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
      )}
    />
  )
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} — home`}>
      <Image
        src="/brand/logo-alt.webp"
        alt="Popular Pharmaceuticals PLC logo"
        width={139}
        height={38}
        priority
        className={cn("h-9 w-auto", light && "brightness-0 invert")}
      />
      {!light && (
        <span className="hidden border-l border-border pl-2.5 text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-muted-foreground sm:block">
          We care
          <br />
          for life
        </span>
      )}
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="no-print sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top utility bar */}
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="container-x flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              Hotline: {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100"
            >
              <Mail className="h-3 w-3" aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
          <p className="flex items-center gap-1.5 opacity-80">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            {SITE.address}
          </p>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-4 2xl:h-20">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden items-center xl:flex">
          <ul className="flex items-center gap-0.5">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "group/link relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-tertiary 2xl:text-[15px]",
                      isActive(pathname, link.href)
                        ? "text-tertiary"
                        : "text-foreground/80"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                    <NavUnderline active={isActive(pathname, link.href)} />
                  </Link>
                  {/* Mega dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-lg border bg-popover p-2 shadow-lg">
                      <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Product Directory
                      </p>
                      {(
                        link.children as readonly {
                          href: string;
                          label: string;
                          description: string;
                        }[]
                      ).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 transition-colors hover:bg-accent"
                        >
                          <span className="block text-sm font-semibold text-foreground transition-colors group-hover:text-tertiary">
                            {child.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={(link as NavLink).href}
                    aria-current={isActive(pathname, (link as NavLink).href) ? "page" : undefined}
                    className={cn(
                      "relative block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-tertiary 2xl:text-[15px]",
                      isActive(pathname, (link as NavLink).href)
                        ? "text-tertiary"
                        : "text-foreground/80"
                    )}
                  >
                    {link.label}
                    <NavUnderline active={isActive(pathname, (link as NavLink).href)} />
                  </Link>
                </li>
              )
            )}
          </ul>
          <Button variant="tertiary" size="sm" className="ml-3" asChild>
            <Link href="/products">Explore Products</Link>
          </Button>
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    {"children" in link && link.children ? (
                      <div>
                        <Link
                          href={link.href}
                          className="block rounded-md px-3 py-2.5 font-semibold text-foreground hover:bg-accent"
                        >
                          {link.label}
                        </Link>
                        <ul className="ml-3 border-l border-border pl-3">
                          {(
                            link.children as readonly { href: string; label: string }[]
                          ).map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm transition-colors",
                                  isActive(pathname, child.href)
                                    ? "font-medium text-tertiary"
                                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (                        <Link
                          href={(link as NavLink).href}
                          className={cn(
                            "block rounded-md px-3 py-2.5 font-semibold transition-colors hover:bg-accent",
                            isActive(pathname, (link as NavLink).href)
                              ? "bg-accent text-tertiary"
                              : "text-foreground"
                          )}
                        >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <Separator className="my-4" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-tertiary" aria-hidden="true" />
                {SITE.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-tertiary" aria-hidden="true" />
                {SITE.email}
              </p>
            </div>
            <Button variant="tertiary" className="mt-6 w-full" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
