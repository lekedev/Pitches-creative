# Home Page Redesign — Y-Vision-Inspired Visual System

## Context

Pitches Creative's current site (React 19 + Vite + Tailwind 4, `client/`) is a
dark, single-tone marketing site. The goal is a full visual reskin of the
**Home page** inspired by [y-vision.co.kr](https://y-vision.co.kr/), a Korean
marketing agency site with a bold, high-contrast, black-and-white design
language. This is exploratory: the work happens on an isolated branch that is
never merged to `main` (which auto-deploys to the live Netlify site). If the
direction is liked, it gets deployed separately to a new Netlify site or
Vercel project from that branch.

Reference site sections observed (via live browser walkthrough):
floating pill navbar → black hero with fanned/rotated photo stack and
rotating tag pills → white "WHY" statement section with oversized type and a
mirrored/reflected shadow effect → black stats section with animated dotted
orbit/network graphic behind big numbers → numbered (01–04) services list →
white grayscale-photography insights/blog grid → black closing CTA band with
big arrow → footer.

## Decisions (confirmed with user)

1. **Palette**: full monochrome — pure black/white plus a gray scale for
   secondary text and borders. No accent color anywhere (the current
   `#FFC24F` gold accent is dropped in this redesign).
2. **Content/IA**: reskin only. Keep `Home.tsx`'s existing section order and
   copy as-is:
   `Hero → AboutIntro → StatsCarousel → ApproachSection → LogoMarquee →
   ServicesIntro → PortfolioShowcase → TestimonialsIntro → TestimonialsGrid →
   InsightsTeaser → ContactHero`. Do not introduce a new dedicated "WHY"
   section or reorder content — Y-Vision's *visual patterns* (numbered lists,
   orbit graphic, reflected type, grayscale photography) get applied onto the
   existing sections instead.
3. **Scope**: Home page only for this pass (navbar, footer, and every
   section rendered on `/`). Other routes (`/about`, `/insights`,
   `/technology`, `/branding`, `/contact`, `/projects/:slug`) are out of
   scope until this direction is reviewed and approved.

## Branch & deployment

- Branch: `redesign/y-vision-inspired`, created off current `main`.
- No changes are merged back into `main` as part of this work.
- `client/netlify.toml` is not modified — the existing Netlify site keeps
  building from `main` untouched.
- When the user wants to preview the branch externally, they connect a new
  Netlify site or Vercel project to this branch themselves (outside the
  scope of this implementation).

## Design system

**Color tokens** (new, additive — do not remove tokens other routes rely
on):
- `--color-ink: #000000` / `#0a0a0a` — primary black backgrounds and text
- `--color-paper: #ffffff` — white backgrounds and text-on-black
- Gray scale for secondary content: `#666666` (secondary text on white),
  `#a3a3a3` (secondary text on black), `#e5e5e5` (hairline borders on white),
  `#262626` (hairline borders on black)
- Remove the `#FFC24F` accent usage from Home-page components being
  restyled; it may remain elsewhere in the codebase (other pages) untouched.

**Typography**:
- Display/headline: existing `Aspekta` variable font (already loaded,
  weights 100–900) pushed to 700–900 weight, large `clamp()`-based sizes
  (roughly `clamp(2.5rem, 8vw, 7rem)` depending on section), tight leading
  (~0.95), tight/negative tracking.
- Eyebrow/label text: small, uppercase, letter-spaced (e.g. "SERVICE",
  "INSIGHTS" style labels seen on the reference site).
- Body copy: existing lighter-weight Aspekta/Inter, unchanged sizes.

**Buttons**: full-pill (`rounded-full`) shape site-wide on Home. Two
variants:
- On black sections: white fill, black text, inverts to black fill/white
  text + border on hover.
- On white sections: black fill, white text, inverts to white fill/black
  text + border on hover.
Both reuse the slide/arrow-circle interaction already present in
`Hero.tsx`'s "Start Your Project" button rather than inventing a new pattern.

**Section rhythm**: sections alternate black and white backgrounds (no
sections in between tones) to produce the high-contrast pacing seen on the
reference site.

## Navbar (`components/Navbar/Navbar.tsx`)

Replace the current edge-to-edge fixed bar with a floating pill:
- `rounded-full`, inset ~16–24px from the viewport edges (not flush), black
  background, white text, same scroll-aware backdrop-blur behavior it has
  today.
- Layout unchanged in spirit: hamburger/menu trigger left, logo centered,
  "Let's Talk" pill CTA right.
- Mobile full-screen menu overlay keeps its current mechanics, restyled to
  match the new monochrome/pill visual language (this is the only non-Home
  UI touched, since it's shared chrome).

## Section-by-section plan

All components below stay functionally the same (same data, same routes,
same animation *library* choices) — only markup/styling and, where noted, a
new lightweight visual element change.

- **`components/Hero/Hero.tsx`** — black background. Replace the single
  Ken-Burns background photo with a fanned stack of 4–5 overlapping,
  slightly rotated project images (sourced from existing project/work
  imagery already in the codebase). Keep the existing giant headline
  ("Ideas Built to Stand Out") and "Start Your Project" / "Let's Talk" CTAs,
  restyled to the new button variants. Add small rotating tag pills (reusing
  existing service names) positioned near the image stack, animated with
  Framer Motion (already a dependency).

- **`components/About/AboutIntro.tsx`** — white background. Oversized bold
  statement headline with a mirrored/faded reflection duplicate under it
  (pure CSS: a duplicated, flipped, opacity/gradient-masked text node — no
  new dependency). Pill CTA below, black-on-white variant.

- **`components/Work/StatsCarousel.tsx`** — black background. Add a
  generative dotted orbit/network graphic (SVG + Framer Motion or a small
  canvas draw, matching the "connected platform names" look) positioned
  behind or beside the existing big stat numbers. Numbers/labels keep their
  current content, restyled to the new type scale.

- **`components/About/ApproachSection.tsx`** — restyle to new type scale
  and monochrome palette; no structural change.

- **`pages/LogoMarquee.tsx`** — black background, monochrome logos
  (existing marquee animation mechanic unchanged), restyled to sit
  consistently with the new stats section above it.

- **`components/Services/ServicesIntro.tsx`** — restructured into a
  numbered `01–04` list layout: large index numbers, service name, one-line
  description, with an active/hover state that reveals/emphasizes the
  selected row (mirrors the reference site's services list and menu
  overlay). Same four services, same copy.

- **`components/Services/PortfolioShowcase.tsx`** — keep existing
  grid/carousel mechanic and data; restyle cards to sharper corners,
  monochrome treatment, hover-reveal captions.

- **`components/Testimonials/TestimonialsIntro.tsx`** and
  **`TestimonialsGrid.tsx`** — restyle to new type scale and card style;
  content and data (`TestimonialData.ts`) unchanged.

- **`components/Insights/InsightsTeaser.tsx`** — white background.
  Grayscale/duotone treatment on thumbnail images (CSS `filter: grayscale()`
  or similar, no new asset processing needed), pill category tags, matching
  the reference site's blog grid look.

- **`components/Contact/ContactHero.tsx`** — becomes the closing black CTA
  band: big bold statement/question with an arrow icon, pill button
  (black-section variant), existing contact content restyled beneath it.

- **`components/Footer/Footer.tsx`** — restyle to monochrome, matching the
  small-print footer info block seen under the reference site's CTA band.

## Animation approach

No new dependencies. Reuse what's already installed:
- **Framer Motion** — entrance transitions, hover states, tag-pill
  rotation/float in the Hero, active-row emphasis in the services list.
- **GSAP** — the orbit/network graphic's continuous motion and any
  scroll-triggered reveals, consistent with how GSAP is already available in
  the project.

## Testing / verification plan

This is a visual redesign, so automated tests are not the primary
verification method:
- `tsc -b && vite build` must succeed (existing build script) with no new
  type errors.
- Run `npm run dev` and walk through the Home page in a real browser at
  desktop and mobile widths, comparing each section against the Y-Vision
  screenshots captured during design, before calling the work done.
- No new automated test suite is being introduced as part of this change
  (the project doesn't currently have one for UI components).

## Out of scope (this pass)

- Any route other than `/` (About, Insights, Technology, Branding, Contact,
  Project detail pages, and all `/admin/*` routes).
- Backend/`server/` changes.
- Actual deployment to a second Netlify site or Vercel — that's a manual
  step the user does once they approve the visual direction.
