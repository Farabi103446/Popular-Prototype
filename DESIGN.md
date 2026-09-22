# Design System: Popular Pharmaceuticals

Institutional-trust brand register. Calm, precise, credible. Reference lane: Novo Nordisk / GSK corporate sites.

## Theme

Light theme only. Scene: a pharmacist or partner reviewing the site on an office desktop in daylight; bright, clinical, paper-like surfaces.

## Color Palette

Strategy: Restrained. Tinted neutrals carry the surface; two brand colors used sparingly and semantically.

| Token | Value | Role |
|---|---|---|
| background | `hsl(148 24% 98%)` | Page ground, faint green-tinted off-white |
| foreground | `hsl(224 47% 15%)` | Body text, deep ink navy |
| primary | `hsl(147 26% 36%)` | Soft sage-pine green (logo green desaturated for eye comfort): bands, heading accents, footer, badges |
| tertiary | `hsl(230 60% 36%)` | Royal indigo: ALL buttons, links, small accents |
| secondary | `hsl(152 20% 96%)` | Soft sage tile surfaces (packshots), alternating bands |
| muted / muted-foreground | `hsl(210 24% 95%)` / `hsl(215 18% 42%)` | Secondary text, subtle fills |
| border | `hsl(150 18% 86%)` | Hairlines, 1px structure |

Rules: never pure `#000`/`#fff`. Gradients only inside photography scrims for text legibility, never on UI surfaces. One accent per view; buttons are always royal blue.

## Typography

Single family: **Manrope** (next/font, weights 400–800, `--font-manrope`, `display: swap`). Hierarchy by weight + scale, ≥1.25 ratio:

- Hero h1: 30–52px, bold (700), tight leading
- Section h2 (`.h-section`): 24–36px, bold
- Card h3: 16–18px, bold
- Body: 14–16px, regular, `leading-relaxed`
- Eyebrow labels: 12px, bold, uppercase, 0.14em tracking, green
- Data/labels: tabular-nums where numeric

No extrabold/black weights, no display-size type above 52px.

## Spacing & Layout

- `.container-x`: max-width 1280px (1440px at 2xl), 16/24/32px side gutters
- `.section` rhythm: 48px mobile / 64px sm / 80px 2xl, top and bottom
- Grid over cards wherever possible; cards only for grouped content (news, PDFs, forms)
- Left-aligned content; centered only for truly symmetric moments (stats strip)

## Elevation & Radius

- `--radius: 0.5rem` (8px) site-wide; cards `rounded-lg`, controls `rounded-md`
- One shadow only: `0 1px 2px hsl(150 20% 30% / 0.05)` on cards. No large soft shadows, no hover elevation
- Hover language: color transitions and underlines, never scale/zoom/lift

## Components

- **Button**: royal blue solid (primary + tertiary variants), outline, ghost. 36/40/48px heights. No press-scale
- **Card**: 1px border, hairline shadow, `rounded-lg`
- **NewsCard**: photo header (16:9 crop), category badge (solid white over photos), text below
- **ProductCard**: sage tile (`bg-secondary`) packshot, centered pill form badge, name, outlined pill CTA
- **Badges**: default green tint, tertiary blue tint, outline; solid white over photography

## Motion

150–250ms color/opacity transitions, `ease-out`. Ken Burns on hero photo (18s) is the single ambient animation; map arcs animate staggered and respect `prefers-reduced-motion`. No entrance animations beyond a single hero fade-up.

**Navigation motion**: the desktop nav underline animates in blue (`bg-tertiary`, royal indigo) — slides in on hover (200ms, ease-out, origin-left), persists on the active page. Hover color for nav links is blue (`text-tertiary`); no background fills on desktop nav items.

## Export Map Palette (WorldMap)

Blue water, green land: the ocean sits in the royal indigo family (water reads as water); land, export markets, routes and markers live in the Popular green family:

| Element | Value | Note |
|---|---|---|
| Ocean (water) | `#16306b → #0a1330` radial | Royal indigo, lit toward Asia-Pacific |
| Land | `#2e7d54 → #1c5a3c` linear gradient | Lighter Popular green |
| Export markets | `#00a551 → #046b36` linear gradient | Vivid Popular green |
| Connecting points | `#ffffff` (routes, markers, HQ dot) | White network over land & water |
| Dhaka pulse ring | `#7d95ff` | Network blue, the one animated element |
| Coast / borders | `#8ed0ab` / `#57a881` | Hairline strokes |

No blur/glow filters on the map; the HQ pulse and selected-marker ring are plain animated circles.

## Texture & Decoration

None. No rings, blobs, dotted grids, glass, gradient panels. Photography, real numbers, and the grid carry the design.