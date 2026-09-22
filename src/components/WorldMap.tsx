"use client";

import { useMemo, useState } from "react";
import {
  COUNTRY_PATHS,
  BORDERS_PATH,
  COAST_PATH,
  MAP_VIEWBOX,
  EQUIRECT,
} from "@/lib/worldMap";
import {
  EXPORT_COUNTRIES,
  REGIONS,
  MARKET_COUNTRY_IDS,
  type ExportCountry,
} from "@/lib/global";
import { cn } from "@/lib/utils";

/**
 * Popular export network map — blue water, green land: the ocean sits in the
 * royal indigo family so water reads as water, while land, export markets,
 * routes and markers all live in the Popular green family. Real geography,
 * brand colors, no decorative glow filters.
 *
 * Interaction model:
 *  - Region chips filter markers + arcs and highlight matching market polygons
 *  - Clicking a marker (or list row) selects a market: its arc brightens,
 *    others dim, and a detail readout appears under the map
 */

const HQ = { x: EQUIRECT.x(90.4), y: EQUIRECT.y(23.8) }; // Dhaka

/** Great-circle-ish quadratic arc Dhaka → market, bulging toward the poles. */
function arcTo(c: { x: number; y: number }) {
  const mx = (HQ.x + c.x) / 2;
  const my = (HQ.y + c.y) / 2 - Math.abs(c.x - HQ.x) * 0.16 - 8;
  return `M${HQ.x.toFixed(1)},${HQ.y.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${c.x.toFixed(1)},${c.y.toFixed(1)}`;
}

/**
 * Palette: blue water (royal indigo family, per brand), lighter green land
 * with vivid green export markets. All connecting elements — routes, market
 * markers, the Dhaka hub — are white so the network reads instantly.
 */
const MAP = {
  oceanLight: "#16306b", // radial center — royal indigo, lit
  oceanDark: "#0a1330", // radial edge — deep ink blue
  landLight: "#47806a", // land gradient start — soft sage green
  landDark: "#2e5c4a", // land gradient end
  marketLight: "#3e8f6e", // export-market gradient start (soft green, lit)
  marketDark: "#2a6b52", // export-market gradient end
  border: "#6da08c", // interior borders (on soft green land)
  coast: "#93b8a8", // coastline — light sage edge against blue water
  grid: "#3d5384", // graticule (blue-tinted, sits on water)
  arc: "#ffffff", // route lines — white connections
  arcSelected: "#ffffff", // selected route
  marker: "#ffffff", // market markers — white connecting points
  markerStroke: "#0a1330", // dark outline so white dots read on land & water
  pulse: "#7d95ff", // Dhaka ripple — stays network blue per the nav accent
  ink: "#e6f7ee", // light text on the dark map
};

export default function WorldMap() {
  const [region, setRegion] = useState<string | null>(null);
  const [selected, setSelected] = useState<ExportCountry | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  /** Markets visible under the current region filter. */
  const visible = useMemo(
    () => (region ? EXPORT_COUNTRIES.filter((c) => c.region === region) : EXPORT_COUNTRIES),
    [region]
  );
  const visibleNames = useMemo(() => new Set(visible.map((c) => c.name)), [visible]);

  /** Map-dataset ids whose polygons should be tinted as active markets. */
  const marketIds = useMemo(() => {
    const ids = new Set<string>();
    for (const market of Array.from(visibleNames)) {
      const mapped = MARKET_COUNTRY_IDS[market] ?? [];
      for (const id of Array.from(mapped)) ids.add(id);
    }
    return ids;
  }, [visibleNames]);

  const arcDim = (name: string) =>
    (selected && selected.name !== name) || (hovered && hovered !== name ? true : false);

  return (
    <div>
      {/* ——— Region filter chips ——— */}
      <div
        className="mb-5 flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter export countries by region"
      >
        <FilterChip
          label={`All Regions (${EXPORT_COUNTRIES.length})`}
          active={region === null}
          onClick={() => {
            setRegion(null);
            setSelected(null);
          }}
        />
        {REGIONS.map((r) => {
          const count = EXPORT_COUNTRIES.filter((c) => c.region === r).length;
          return (
            <FilterChip
              key={r}
              label={`${r} (${count})`}
              active={region === r}
              onClick={() => {
                setRegion(region === r ? null : r);
                setSelected(null);
              }}
              ariaPressed={region === r}
            />
          );
        })}
      </div>

      {/* ——— Map panel ——— */}
      <div className="overflow-hidden rounded-lg border">
        <svg
          viewBox={MAP_VIEWBOX}
          className="h-auto w-full"
          role="img"
          aria-label={`World map of Popular Pharmaceuticals export network: ${visible.length} markets shown with routes from Dhaka, Bangladesh`}
        >
          <defs>
            {/* Land gradient: muted green, lighter top-left → deeper bottom-right */}
            <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={MAP.landLight} />
              <stop offset="1" stopColor={MAP.landDark} />
            </linearGradient>
            {/* Export markets: vivid brand-green gradient */}
            <linearGradient id="marketLand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={MAP.marketLight} />
              <stop offset="1" stopColor={MAP.marketDark} />
            </linearGradient>
            {/* Ocean: royal indigo blue, gently lit toward Asia-Pacific */}
            <radialGradient id="oceanGlow" cx="0.72" cy="0.35" r="0.95">
              <stop offset="0" stopColor={MAP.oceanLight} />
              <stop offset="1" stopColor={MAP.oceanDark} />
            </radialGradient>
          </defs>

          {/* Ocean */}
          <rect width="1000" height="500" fill="url(#oceanGlow)" />

          {/* Base land */}
          <g>
            {COUNTRY_PATHS.map((c) => (
              <path key={c.id} d={c.d} fill="url(#land)" stroke="none" />
            ))}
          </g>

          {/* Active export markets lit in brand green */}
          <g pointerEvents="none">
            {COUNTRY_PATHS.filter((c) => marketIds.has(c.name)).map((c) => (
              <path key={`mkt-${c.id}`} d={c.d} fill="url(#marketLand)" className="map-market" />
            ))}
          </g>

          {/* Shared interior borders (one thin mesh) + coastline */}
          <path
            d={BORDERS_PATH}
            fill="none"
            stroke={MAP.border}
            strokeWidth="0.5"
            opacity="0.55"
            pointerEvents="none"
          />
          <path
            d={COAST_PATH}
            fill="none"
            stroke={MAP.coast}
            strokeWidth="0.8"
            opacity="0.6"
            pointerEvents="none"
          />

          {/* Graticule hint: equator + tropics, very subtle */}
          <g stroke={MAP.grid} strokeWidth="0.5" strokeDasharray="3 5" opacity="0.55" pointerEvents="none">
            <line x1="0" y1={EQUIRECT.y(0)} x2="1000" y2={EQUIRECT.y(0)} />
            <line x1="0" y1={EQUIRECT.y(23.4)} x2="1000" y2={EQUIRECT.y(23.4)} />
            <line x1="0" y1={EQUIRECT.y(-23.4)} x2="1000" y2={EQUIRECT.y(-23.4)} />
          </g>

          {/* Export arcs — one per visible market */}
          <g fill="none" strokeLinecap="round">
            {visible.map((c) => {
              const dim = arcDim(c.name);
              const isSelected = selected?.name === c.name;
              return (
                <path
                  key={`arc-${c.name}`}
                  d={arcTo({ x: EQUIRECT.x(c.lon), y: EQUIRECT.y(c.lat) })}
                  stroke={isSelected ? MAP.arcSelected : MAP.arc}
                  strokeWidth={isSelected ? 2.2 : 1.1}
                  opacity={dim ? 0.12 : 0.6}
                  className="map-arc"
                  style={{ animationDelay: `${(c.lon % 12) * 0.18}s` }}
                />
              );
            })}
          </g>

          {/* HQ hub — Dhaka */}
          <g>
            <circle cx={HQ.x} cy={HQ.y} fill={MAP.pulse} opacity="0.3">
              <animate attributeName="r" values="5;17;5" dur="3.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0.03;0.35" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx={HQ.x} cy={HQ.y} r="3.2" fill={MAP.arc} stroke={MAP.pulse} strokeWidth="1.6" />
            <text
              x={HQ.x}
              y={HQ.y - 13}
              textAnchor="middle"
              fontSize="11"
              fontWeight="800"
              letterSpacing="1"
              fill={MAP.ink}
              stroke={MAP.oceanDark}
              strokeWidth="3"
              paintOrder="stroke"
            >
              DHAKA · HQ
            </text>
          </g>

          {/* Market markers */}
          {visible.map((c) => {
            const cx = EQUIRECT.x(c.lon);
            const cy = EQUIRECT.y(c.lat);
            const isSelected = selected?.name === c.name;
            const isHovered = hovered === c.name;
            const dim = Boolean(
              (selected && selected.name !== c.name) || (hovered && hovered !== c.name)
            );
            return (
              <g
                key={c.name}
                className="cursor-pointer focus:outline-none"
                onClick={() => setSelected(isSelected ? null : c)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(isSelected ? null : c);
                  }
                }}
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(c.name)}
                onBlur={() => setHovered(null)}
                role="button"
                tabIndex={0}
                aria-label={`${c.name} — ${c.region} export market`}
                aria-pressed={isSelected}
              >
                {/* halo */}
                <circle cx={cx} cy={cy} r="9" fill={MAP.marker} opacity="0.16" />
                {isSelected && (
                  <circle cx={cx} cy={cy} r="9" fill="none" stroke={MAP.arcSelected} strokeWidth="1.6">
                    <animate attributeName="r" values="8;15;8" dur="1.5s" repeatCount="indefinite" />
                    <animate
                      attributeName="opacity"
                      values="0.9;0.2;0.9"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 5.4 : isHovered ? 4.8 : 3.8}
                  fill={isSelected ? MAP.arcSelected : MAP.marker}
                  stroke={MAP.markerStroke}
                  strokeWidth="1.2"
                  opacity={dim ? 0.25 : 1}
                  className="transition-all duration-150"
                />
                {(isHovered || isSelected) && !dim && (
                  <g transform={`translate(${Math.min(cx + 9, 810)}, ${Math.max(cy - 30, 6)})`} pointerEvents="none">
                    <rect
                      width={Math.max(78, c.name.length * 6.4 + 40)}
                      height="22"
                      rx="4"
                      fill={MAP.oceanDark}
                      stroke={MAP.arc}
                      strokeWidth="0.8"
                      opacity="0.97"
                    />
                    <text x="8" y="15" fontSize="10.5" fontWeight="700" fill={MAP.ink}>
                      {c.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* ——— Region chip ——— */

function FilterChip({
  label,
  active,
  onClick,
  ariaPressed,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  ariaPressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ariaPressed ?? active}
      className={cn(
        "inline-flex min-h-[36px] items-center gap-2 rounded-md border px-4 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        active
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
