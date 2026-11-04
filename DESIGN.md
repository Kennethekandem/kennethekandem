# Design

## Theme

A printed engineer's CV: single text column, hairline rules, one monospaced
family, one green ink. Light is the primary theme (daylight, desk, paper);
dark is the evening reading mode.

## Color

Strategy: **restrained**. Tinted neutrals plus one accent used for links, the
terminal period of the name, and active navigation.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | `#ffffff` | `#111110` | page |
| `--surface` | `#fbfaf8` | `#191917` | portrait card |
| `--text` | `#111110` | `#ffffff` | body ink |
| `--muted` | `#888580` | `#6b6965` | metadata, labels |
| `--accent` | `#1a6b3c` | `#4ade80` | links, active state, period |
| `--border` | `#e8e5e0` | `#2a2824` | hairlines |

List body text sits at `#555` in light and `#a0a0a0` in dark.

## Typography

One family: **IBM Plex Mono** (300/400/500 + italics), self-hosted via
`@font-face` from Google's CDN. Chosen and committed before this document;
identity preservation applies.

- Name: `clamp(2rem, 6.2vw, 3rem)`, weight 500, tracking `-0.02em`, balanced
  wrapping.
- Lead paragraph: 1.125rem, weight 400, `max-width: 34rem`, line-height 1.65.
- Body: 1rem / 1.75; supporting: 0.8125rem, `--muted`.
- Eyebrow ("my name is"): 0.75rem, lowercase, tracking `0.08em`.
- Column: `80ch`, padded 2rem. Body line length stays under 75ch.

## Layout

Single column, `max-width: 80ch`. Header block holds the eyebrow, the name, a
metadata row, and two short paragraphs. Sections are separated by a
label + hairline rule. On touch widths the bottom tab bar replaces the top nav.

## Components

- **Name card** — a portrait print anchored to the right of the name on
  `≥900px`, rotating in from `-6px / 0.97` with a `-2deg` tilt. Below 900px it
  becomes an inline block under the name, opened by tap. Hidden at rest,
  revealed by hover, focus-visible, or explicit toggle. Caption strip at 0.625rem.
- **Section rule** — small lowercase label, flexible hairline, 1.5rem gap.
- **Pill** — availability status, 1px border, 0.75rem, green dot with a slow ping.

## Motion

Ease-out exponential only: `cubic-bezier(0.16, 1, 0.3, 1)`. Card reveals at
260ms opacity / 420ms transform. No entrance animations on text; no scroll
reveals. Reduced motion collapses transform and tilt to a 160ms crossfade.

## Imagery

One photograph, used once: a portrait print of Kenneth. Delivered through
`next/image` with a static import (automatic AVIF/WebP, blur placeholder), sized
for a 190px slot. No decorative illustration, no logo marquee.
