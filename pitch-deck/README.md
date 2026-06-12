# Sigamos Construyendo — Pitch Deck

A standalone, browser-based pitch deck (no build step, no dependencies) presented
at Demo Day. It tells the story of **Germán Hernández — Sigamos Construyendo**:
helping programmers land their first job in tech, moving *de creador a comunidad*.

## Structure

```
pitch-deck/
├── index.html        — markup: the 12 slides + navigation controls
├── styles.css        — all styles (design tokens, slide transitions, components)
├── script.js         — navigation logic (buttons, dots, keyboard, swipe)
├── assets/
│   └── images/       — optimized WebP images used by the deck
└── README.md
```

## How to Run

Open `index.html` in any modern browser — that's it. No server or build required.

When deployed, the deck is served from `germanhernandezmairal.com/pitch-deck/`
(the `index.html` filename makes the trailing-slash URL resolve automatically).

## Navigation

| Input | Action |
| --- | --- |
| `←` / `→`, `↑` / `↓`, `PageUp` / `PageDown` | Previous / next slide |
| `Home` / `End` | Jump to first / last slide |
| On-screen **Anterior** / **Siguiente** buttons | Previous / next slide |
| Progress dots (right edge) | Jump to a specific slide |
| Swipe left / right (touch) | Next / previous slide |

## Notes

- **Images** are served as WebP and carry explicit `width`/`height` attributes to
  prevent layout shift. Source originals live outside version control.
- **Design tokens** (colors, fonts, timings) are defined as CSS custom properties
  at the top of `styles.css` — change them in one place to restyle the whole deck.
- The deck is **desktop/projector-first**; its multi-column slides are tuned for
  wide screens.
