# Hosanna Afghan Hounds — Concept Redesign

An **unofficial concept redesign** of [hosanna1.com](https://hosanna1.com), a long-running
Afghan Hound breeder website that still carries its original late-1990s look. This project
reimagines it as a calm, modern, mobile-friendly site — from low-fidelity wireframes through
to a high-fidelity, interactive prototype.

> ⚠️ **Disclaimer** — This is an independent design study for portfolio purposes. It is **not
> affiliated with, commissioned by, or endorsed by** Hosanna Afghan Hounds. All brand
> references remain the property of their owner. The original site lives at
> [hosanna1.com](https://hosanna1.com).

Designed & built by [**@nashirulwan**](https://github.com/nashirulwan).

---

## Before → After

| Original (1998-era) | Redesign concept |
| --- | --- |
| ![Original site](docs/before-original-site.png) | _Run locally — see below — or view the live demo._ |

---

## What's in here

| Stage | File | What it is |
| --- | --- | --- |
| **Hi-fi prototype** | [`index.html`](index.html) | The final interactive redesign — Home, Available Dogs, Dog Profile, Contact. |
| **Wireframes** | [`wireframes.html`](wireframes.html) | Low-fidelity exploration: layout directions, design tokens, mobile sketches. |
| Hi-fi source | `hi-fi/` | Components, page code, CSS design tokens, sample data. |
| Wireframe source | `wireframes/` | The sketch-style component library and page variants. |
| Reference | `docs/` | Screenshot of the original site. |
| Archive | `archive/` | Earlier intermediate exports — kept for history, not used by the live pages. |

## Design approach

The goal was the simplest, most trustworthy version of a small breeder's site, while keeping
everything **factually true to the original**:

- **Kept the real identity** — AKC registered, champion-sired hounds for show or pet, breeding
  online since 1998, the kennel's own Psalm 23 motto (*"I will fear no evil"*), and the real
  contact email.
- **Simplified the journey** — one clear inquiry path instead of several scattered forms; a
  single-step contact form instead of a multi-step flow.
- **Plain, human copy** — written the way a small family kennel actually speaks, not marketing
  filler.
- **A reusable design system** — navy / gold / off-white palette, an 8px spacing rhythm, and a
  Playfair Display + Inter type pairing, all defined as CSS tokens in `hi-fi/styles.css`.

> Dog names, photos, and litter details in the prototype are **illustrative placeholders** —
> meant to show the layout, ready to be swapped for the kennel's real content.

## Tech

No build step. Everything runs straight in the browser:

- **React 18** + **Babel Standalone** (loaded from CDN)
- Plain **CSS** with custom properties (design tokens)
- Fonts via Google Fonts

## Run it locally

```bash
npx serve .
```

Then open:

- **Hi-fi redesign** → http://localhost:3000/index.html
- **Wireframes** → http://localhost:3000/wireframes.html

(Any static file server works — the pages just need to be served over HTTP, not opened as
`file://`, because they fetch the `.jsx` sources.)

## Credits

- Original site & brand: Hosanna Afghan Hounds — [hosanna1.com](https://hosanna1.com)
- Redesign concept, UI & build: [@nashirulwan](https://github.com/nashirulwan)
- Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) &
  [Inter](https://fonts.google.com/specimen/Inter)
