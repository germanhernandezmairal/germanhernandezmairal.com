# German Hernandez — Personal Brand Website

A personal brand site built to do one thing well: turn a profile visit into a conversation. It covers who I am, what I do, the work I've shipped, and how to get in touch — all in one fast, animated, mobile-first experience.

**Live → [germanhernandezmairal.com](https://www.germanhernandezmairal.com)**

![Site preview](public/imgs/WebMarcaPersonal-Preview-1.png)

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 + React Router v7 | SPA with clean client-side routing and animated page transitions |
| Build | Vite 5 | Instant HMR in dev, fast optimized builds |
| Styling | Tailwind CSS v4 | Utility-first with custom design tokens for the brand palette |
| Animation | Framer Motion 12 | Scroll-triggered reveals, staggered lists, and page-exit transitions |
| SEO | react-helmet-async | Per-page `<title>` and meta descriptions without a full SSR setup |
| Data | YouTube Data API v3 | Dynamic video grid that pulls playlist content at runtime |
| Payments | Stripe Payment Links | Direct checkout for service packages — no backend needed |
| Forms | reCAPTCHA v3 + custom backend | Spam-protected contact form with email delivery |
| Deployment | Vercel | Zero-config deploys, preview URLs on every push |

---

## Pages

- **Home** — Hero, value proposition, CTA
- **Services** — Three content packages, à-la-carte add-ons, and web development offerings with direct Stripe checkout
- **Portfolio** — Filterable project grid (Web/App · YouTube · Community)
- **YouTube** — Channel positioning, testimonials, live video grid from the API
- **About** — Story, tech stack, mission
- **Contact** — reCAPTCHA-protected form
- **Case study** — Tarragona Jove: institutional brand management deep dive

---

## What I focused on

**Animations that don't get in the way.** Every page transition, card reveal, and list stagger uses Framer Motion presets from `src/lib/motion.js` — tuned to feel snappy rather than decorative.

**A real design system.** Navy `#003366` + amber `#FFC107`, three custom font families (Montserrat / Inter / Great Vibes), and a small set of Tailwind utilities that keep every page visually consistent without a component library.

**Integrated services.** YouTube API, Stripe, Calendly, and reCAPTCHA all wired together — the site functions as a lightweight business tool, not just a static brochure.

**Mobile-first throughout.** Custom breakpoints down to 320px, a slide-in hamburger menu, and touch-friendly tap targets everywhere.

---

## Local setup

```bash
git clone https://github.com/germanhernandezmairal/germanhernandezmairal.com.git
cd germanhernandezmairal.com
npm install
```

Create a `.env.local` file:

```env
VITE_YOUTUBE_API_KEY=your_youtube_data_api_v3_key
```

```bash
npm run dev      # Dev server with HMR → http://localhost:5173
npm run build    # Production build → /dist
npm run preview  # Preview the production build locally
npm run lint     # ESLint
```

---

## Contact

Looking for a front-end developer in Barcelona?

- **Web** → [germanhernandezmairal.com/contact](https://www.germanhernandezmairal.com/contact)
- **LinkedIn** → [linkedin.com/in/germán-hernández-mairal](https://www.linkedin.com/in/germán-hernández-mairal-7584741ab/)
- **Email** → gerhm19@gmail.com
