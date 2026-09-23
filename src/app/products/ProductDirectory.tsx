"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Search, Heart, Scale, X, Download, SlidersHorizontal } from "lucide-react";
import type { Product, TherapeuticClass, DosageForm } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { THERAPEUTIC_CLASSES, DOSAGE_FORMS } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function readParams(): URLSearchParams {
  if (typeof window === "undefined") return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("popular-favorites");
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
  }, []);

  const toggle = (slug: string) => {
    setFavorites((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem("popular-favorites", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return { favorites, toggle };
}

type SortKey = "brand" | "generic" | "class" | "recent";

export default function ProductDirectory({ products }: { products: Product[] }) {
  const { favorites, toggle: toggleFavorite } = useFavorites();
  const searchParams = useSearchParams();
  const classParam = searchParams.get("class");

  const [query, setQuery] = useState("");
  const [classes, setClasses] = useState<string[]>([]);
  const [forms, setForms] = useState<string[]>([]);
  const [letter, setLetter] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("brand");
  const [view, setView] = useState<"grid" | "table">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from URL once
  useEffect(() => {
    const params = readParams();
    const q = params.get("q");
    const c = params.get("class");
    const f = params.get("form");
    const l = params.get("letter");
    if (q) setQuery(q);
    if (c) setClasses(c.split(",").filter(Boolean));
    if (f) setForms(f.split(",").filter(Boolean));
    if (l) setLetter(l.toUpperCase());
    setHydrated(true);
  }, []);

  // React to ?class= changes from the navbar submenu while already on this page
  // (e.g. clicking "Antibiotics" or "All Products" in the Products dropdown).
  useEffect(() => {
    if (!hydrated) return;
    const c = readParams().get("class");
    setClasses(c ? c.split(",").filter(Boolean) : []);
  }, [classParam, hydrated]);

  // Sync URL
  useEffect(() => {
    if (!hydrated) return;
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (classes.length) params.set("class", classes.join(","));
    if (forms.length) params.set("form", forms.join(","));
    if (letter) params.set("letter", letter);
    const url = params.toString() ? `/products?${params.toString()}` : "/products";
    window.history.replaceState(null, "", url);
  }, [query, classes, forms, letter, hydrated]);

  // Debounced live search
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setQuery(searchInput), 200);
    return () => clearTimeout(t);
  }, [searchInput]);
  useEffect(() => setSearchInput(query), []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleIn = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
    setLetter(null);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      if (showFavoritesOnly && !favorites.includes(p.slug)) return false;
      if (letter && !p.brandName.toUpperCase().startsWith(letter)) return false;
      if (classes.length && !classes.some((c) => p.therapeuticClass.toLowerCase().includes(c.toLowerCase())))
        return false;
      if (forms.length && !forms.includes(p.dosageForm)) return false;
      if (q) {
        const hay = `${p.brandName} ${p.genericName} ${p.therapeuticClass}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    return [...list].sort((a, b) => {
      switch (sort) {
        case "generic":
          return a.genericName.localeCompare(b.genericName);
        case "class":
          return (
            a.therapeuticClass.localeCompare(b.therapeuticClass) ||
            a.brandName.localeCompare(b.brandName)
          );
        case "recent":
          return b.id.localeCompare(a.id);
        default:
          return a.brandName.localeCompare(b.brandName);
      }
    });
  }, [products, query, classes, forms, letter, sort, showFavoritesOnly, favorites]);

  const activeFilterCount =
    classes.length + forms.length + (letter ? 1 : 0) + (showFavoritesOnly ? 1 : 0);

  const clearAll = () => {
    setClasses([]);
    setForms([]);
    setLetter(null);
    setSearchInput("");
    setQuery("");
    setShowFavoritesOnly(false);
  };

  const toggleCompare = (slug: string) => {
    setCompare((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) return prev;
      return [...prev, slug];
    });
  };

  const compareProducts = compare
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as Product[];

  const alphabet = useMemo(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), []);
  const availableLetters = useMemo(
    () => new Set(products.map((p) => p.brandName[0].toUpperCase())),
    [products]
  );

  const filterPanel = (
    <div className="space-y-6">
      <fieldset>
        <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Therapeutic Class
        </legend>
        <div className="max-h-64 space-y-1 overflow-y-auto pr-1">
          {THERAPEUTIC_CLASSES.map((cls: TherapeuticClass) => (
            <label
              key={cls}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
            >
              <Checkbox
                checked={classes.includes(cls)}
                onCheckedChange={() => toggleIn(classes, setClasses, cls)}
                aria-label={`Filter by ${cls}`}
              />
              <span className="text-foreground">{cls}</span>
              <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                {products.filter((p) => p.therapeuticClass === cls).length}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Separator />

      <fieldset>
        <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Dosage Form
        </legend>
        <div className="flex flex-wrap gap-1.5">
          {DOSAGE_FORMS.map((form: DosageForm) => (
            <button
              key={form}
              type="button"
              aria-pressed={forms.includes(form)}
              onClick={() => toggleIn(forms, setForms, form)}
              className={cn(
                "cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                forms.includes(form)
                  ? "border-tertiary bg-tertiary text-white"
                  : "border-input bg-background text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {form}
            </button>
          ))}
        </div>
      </fieldset>

      {(activeFilterCount > 0 || query) && (
        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={clearAll}>
          <X className="h-4 w-4" aria-hidden="true" />
          Clear all filters
        </Button>
      )}
    </div>
  );

  const card = (p: Product) => (
    <ProductCard
      key={p.slug}
      slug={p.slug}
      brandName={p.brandName}
      genericName={p.genericName}
      dosageForm={p.dosageForm}
      actions={
        <div className="flex items-center justify-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => toggleFavorite(p.slug)}
            aria-label={
              favorites.includes(p.slug)
                ? `Remove ${p.brandName} from my list`
                : `Add ${p.brandName} to my list`
            }
          >
            <Heart
              className={cn(
                "h-4 w-4",
                favorites.includes(p.slug)
                  ? "fill-destructive text-destructive"
                  : "text-muted-foreground/50"
              )}
              aria-hidden="true"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => toggleCompare(p.slug)}
            disabled={!compare.includes(p.slug) && compare.length >= 3}
            aria-label={`Add ${p.brandName} to compare`}
          >
            <Scale
              className={cn(
                "h-4 w-4",
                compare.includes(p.slug) ? "text-primary" : "text-muted-foreground/50"
              )}
              aria-hidden="true"
            />
          </Button>
        </div>
      }
    />
  );

  const row = (p: Product) => (
    <tr key={p.slug} className="border-b border-border transition-colors hover:bg-accent/50">
      <td className="px-4 py-3">
        <Link href={`/products/${p.slug}`} className="font-bold text-primary hover:underline">
          {p.brandName}
        </Link>
      </td>
      <td className="px-4 py-3 text-muted-foreground">{p.genericName}</td>
      <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{p.therapeuticClass}</td>
      <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">{p.dosageForm}</td>
      <td className="hidden px-4 py-3 text-muted-foreground lg:table-cell">{p.strengths.join(", ")}</td>
      <td className="px-4 py-3 text-right">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => toggleFavorite(p.slug)}
          aria-label={`Toggle ${p.brandName} favorite`}
        >
          <Heart
            className={cn("h-4 w-4", favorites.includes(p.slug) ? "fill-destructive text-destructive" : "text-muted-foreground/50")}
            aria-hidden="true"
          />
        </Button>
      </td>
    </tr>
  );

  return (
    <div className="relative">
      {/* Search + toolbar */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by brand name or generic name (e.g. Insulin, Metformin)..."
            className="h-12 pl-11 text-base"
            aria-label="Search products by brand or generic name"
          />
        </div>

        {/* A–Z index */}
        <div className="no-scrollbar overflow-x-auto">
          <div className="flex min-w-max gap-1">
            <Button
              variant={letter === null ? "default" : "secondary"}
              size="sm"
              className="h-8 px-2.5"
              onClick={() => setLetter(null)}
            >
              All
            </Button>
            {alphabet.map((l) => {
              const has = availableLetters.has(l);
              return (
                <Button
                  key={l}
                  variant={letter === l ? "default" : has ? "secondary" : "ghost"}
                  size="sm"
                  disabled={!has}
                  aria-pressed={letter === l}
                  onClick={() => setLetter(letter === l ? null : l)}
                  className="h-8 w-8 px-0 tabular-nums"
                >
                  {l}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                Filters
                {activeFilterCount > 0 && ` (${activeFilterCount})`}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>Refine Results</SheetTitle>
                <SheetDescription>
                  {filtered.length} product{filtered.length !== 1 ? "s" : ""} match your filters
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              {filterPanel}
              <Button variant="tertiary" className="mt-6 w-full" onClick={() => setFiltersOpen(false)}>
                Show {filtered.length} Products
              </Button>
            </SheetContent>
          </Sheet>

          <Button
            variant={showFavoritesOnly ? "destructive" : "outline"}
            size="sm"
            aria-pressed={showFavoritesOnly}
            onClick={() => setShowFavoritesOnly((v) => !v)}
          >
            <Heart className={cn("h-4 w-4", showFavoritesOnly && "fill-current")} aria-hidden="true" />
            My List ({favorites.length})
          </Button>

          <div className="ml-auto flex items-center gap-2">
            <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
              <SelectTrigger className="h-9 w-[170px] text-xs font-semibold" aria-label="Sort products">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand">Brand A–Z</SelectItem>
                <SelectItem value="generic">Generic Name</SelectItem>
                <SelectItem value="class">Therapeutic Class</SelectItem>
                <SelectItem value="recent">Recently Added</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex overflow-hidden rounded-md border border-input" role="group" aria-label="View mode">
              <Button
                variant={view === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("grid")}
                aria-pressed={view === "grid"}
                className="h-9 rounded-none px-3"
              >
                Grid
              </Button>
              <Button
                variant={view === "table" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("table")}
                aria-pressed={view === "table"}
                className="h-9 rounded-none px-3"
              >
                Table
              </Button>
            </div>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="/catalog.pdf" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Full Catalog
              </a>
            </Button>
          </div>
        </div>

        {/* Result count + active chips */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <p className="font-semibold text-foreground" aria-live="polite">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          {query && (
            <Button
              variant="secondary"
              size="sm"
              className="h-7 rounded-full text-xs"
              onClick={() => {
                setSearchInput("");
                setQuery("");
              }}
            >
              Search: "{query}" <X className="ml-1 h-3 w-3" aria-hidden="true" />
            </Button>
          )}
          {classes.map((c) => (
            <Button
              key={c}
              variant="secondary"
              size="sm"
              className="h-7 rounded-full text-xs"
              onClick={() => toggleIn(classes, setClasses, c)}
            >
              {c} <X className="ml-1 h-3 w-3" aria-hidden="true" />
            </Button>
          ))}
          {forms.map((f) => (
            <Button
              key={f}
              variant="secondary"
              size="sm"
              className="h-7 rounded-full text-xs"
              onClick={() => toggleIn(forms, setForms, f)}
            >
              {f} <X className="ml-1 h-3 w-3" aria-hidden="true" />
            </Button>
          ))}
          {letter && (
            <Button
              variant="secondary"
              size="sm"
              className="h-7 rounded-full text-xs"
              onClick={() => setLetter(null)}
            >
              Starts with {letter} <X className="ml-1 h-3 w-3" aria-hidden="true" />
            </Button>
          )}
          {showFavoritesOnly && (
            <Button
              variant="secondary"
              size="sm"
              className="h-7 rounded-full text-xs"
              onClick={() => setShowFavoritesOnly(false)}
            >
              My List only <X className="ml-1 h-3 w-3" aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Desktop sidebar filters */}
        <aside className="no-print hidden lg:block">
          <Card className="sticky top-28 max-h-[calc(100vh-8.5rem)] overflow-y-auto">
            <CardContent className="p-5">
              <h2 className="mb-4 flex items-center gap-2 font-extrabold text-foreground">
                <SlidersHorizontal className="h-4 w-4 text-tertiary" aria-hidden="true" />
                Refine Results
              </h2>
              {filterPanel}
            </CardContent>
          </Card>
        </aside>

        {/* Results */}
        <div>
          {filtered.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center 2xl:p-16">
                <p className="text-lg font-bold text-foreground">No products found</p>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  Try a different search term or clear filters. The full portfolio has 362 brands —
                  this prototype shows a representative subset.
                </p>
                <Button className="mt-5" onClick={clearAll}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : view === "grid" ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-6 2xl:grid-cols-4">
              {filtered.map(card)}
            </div>
          ) : (
            <Card className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="px-4 py-3 font-bold">Brand</th>
                    <th className="px-4 py-3 font-bold">Generic</th>
                    <th className="hidden px-4 py-3 font-bold md:table-cell">Class</th>
                    <th className="hidden px-4 py-3 font-bold sm:table-cell">Form</th>
                    <th className="hidden px-4 py-3 font-bold lg:table-cell">Strengths</th>
                    <th className="px-4 py-3" aria-label="Favorite" />
                  </tr>
                </thead>
                <tbody>{filtered.map(row)}</tbody>
              </table>
            </Card>
          )}
        </div>
      </div>

      {/* Compare tray */}
      {compare.length > 0 && (
        <div className="no-print fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 shadow-2xl backdrop-blur">
          <div className="container-x flex flex-wrap items-center gap-3 py-3">
            <span className="text-sm font-bold text-foreground">
              Compare ({compare.length}/3):
            </span>
            {compareProducts.map((p) => (
              <Badge key={p.slug} className="pr-1">
                {p.brandName}
                <button
                  type="button"
                  onClick={() => toggleCompare(p.slug)}
                  aria-label={`Remove ${p.brandName} from compare`}
                  className="ml-1.5 rounded-full p-0.5 hover:bg-primary/15"
                >
                  <X className="h-3 w-3" aria-hidden="true" />
                </button>
              </Badge>
            ))}
            <div className="ml-auto flex gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setCompare([])}>
                Clear
              </Button>
              <Button variant="tertiary" size="sm" disabled={compare.length < 2} onClick={() => setShowCompare(true)}>
                Compare Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Compare modal */}
      {showCompare && compareProducts.length >= 2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Product comparison">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowCompare(false)} />
          <Card className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-foreground">Product Comparison</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowCompare(false)} aria-label="Close comparison">
                  <X className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="w-32 px-3 py-3 text-xs uppercase tracking-wider text-muted-foreground">
                        Attribute
                      </th>
                      {compareProducts.map((p) => (
                        <th key={p.slug} className="px-3 py-3">
                          <Link href={`/products/${p.slug}`} className="font-extrabold text-primary hover:underline">
                            {p.brandName}
                          </Link>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(
                      [
                        ["Generic Name", (p: Product) => p.genericName],
                        ["Therapeutic Class", (p: Product) => p.therapeuticClass],
                        ["Dosage Form", (p: Product) => p.dosageForm],
                        ["Strengths", (p: Product) => p.strengths.join(", ")],
                        ["Pack Size", (p: Product) => p.packSize],
                        ["Indications", (p: Product) => p.indications],
                      ] as const
                    ).map(([label, getter]) => (
                      <tr key={label}>
                        <td className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          {label}
                        </td>
                        {compareProducts.map((p) => (
                          <td key={p.slug} className="px-3 py-3 text-muted-foreground">
                            {getter(p)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
