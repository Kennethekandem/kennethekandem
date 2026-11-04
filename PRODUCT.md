# Product

## Register

brand

## Users

Two audiences, one page, in this order:

1. **Hiring managers and senior engineers** at remote-first fintech and web3
   companies, screening a candidate before a first call. They arrive from a
   message, a GitHub profile, or LinkedIn. They scan for roughly 20 seconds and
   decide whether the work is real.
2. **Founders and CTOs** at small fintech or web3 teams who need a backend or
   chain-integration engineer for a scoped contract. They arrive from a
   referral or a post, and want to know the niche and how to start.

Both are technical. Neither is impressed by adjectives, and both discount
numbers that cannot be defended in a conversation.

## Product Purpose

A one-page personal site for Kenneth Ekandem, a senior backend engineer working
on real-time, high-scale systems and blockchain infrastructure. Its job is to
convert a 20-second scan into either an interview or a scoped project
conversation. Success is a reply, not a visit.

## Brand Personality

Understated, precise, unhurried. The voice of an engineer who has run production
systems and does not need to sell hard. First person. Concrete nouns over
adjectives. Confidence shown through scope and mechanism, never through claims.

## Anti-references

- Personal sites that open with a stock hero photo and "passionate about
  building things."
- Résumé-in-a-browser: three identical bullet lists with no hierarchy.
- Credential inflation — claiming credit for a fundraise, an uptime figure, or a
  user count that would fall apart under one follow-up question.
- Template dev portfolios: gradient hero, glowing grid background, marquee of
  framework logos, cards in a 3×2 grid.
- Whimsy that costs the reader time. The one playful move on the page is the
  portrait card, and it must not obstruct the copy or the tap targets.

## Design Principles

1. **Print, not slide deck.** Ruled sections, a text column, and one deliberate
   image that behaves like a photo print. No cards unless a card is the honest
   form.
2. **Type carries the page.** One family, committed weight and size contrast;
   imagery is a single reward rather than decoration.
3. **Earn every number.** A metric appears only if it can survive a follow-up.
   Where a number is missing, use architectural specificity instead of a vague
   adjective.
4. **The reward is hidden but never unreachable.** Hover reveals on desktop;
   tap reveals on touch; keyboard focus reveals both.
5. **Identity is committed.** Preserve the IBM Plex Mono setting and the green
   accent. This is a refinement, not a rebrand.

## Accessibility & Inclusion

- WCAG 2.2 AA. Body text at ≥4.5:1; muted text used only for supporting lines.
- Every reveal has a keyboard path (`focus-visible` + `aria-expanded`) and works
  on touch as an explicit toggle.
- `prefers-reduced-motion` swaps the card's transform transition for a plain
  crossfade.
- The portrait keeps descriptive alt text even though it is visually hidden at
  rest.
