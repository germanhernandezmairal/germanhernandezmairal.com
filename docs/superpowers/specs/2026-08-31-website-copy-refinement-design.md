# Website Copy Refinement + Repositioning — Design Spec

**Status:** Approved 2026-08-31 (brainstormed with Germán). Implementation to follow.
**Source copy:** `Refinements August 31st/Refinements.txt`
**Scope:** ~14 files. In-place JSX copy edits, one new component, routing/metadata changes. No content-management refactor (YAGNI).

---

## 1. Goal & Positioning Change

Reposition the whole site from:

> *"Front-End Developer y Community Manager que ayuda a empresas y creadores a conseguir clientes con contenido y webs que convierten."*

to:

> *"Fullstack Developer consiguiendo su primer trabajo como programador desde cero, que comparte hábitos y habilidades prácticas para ayudarte a conseguir el tuyo."*

This applies to **visible copy AND all metadata** (`index.html` tags, every page `<Helmet>`, `sitemap.xml`, `robots.txt`).

Audience shifts from "empresas y creadores" → **estudiantes de programación y graduados buscando su primer trabajo en tech**.

---

## 2. Global Constraints

- **Language:** Spanish (es), same voice/register as current site (direct, warm, "tú").
- **Brand tokens unchanged:** `brand-blue #003366`, `brand-amber #ffc107`, fonts Montserrat/Inter.
- **Keep** existing component structure, animations (framer-motion variants), Tailwind v4 `@theme` setup, `ContactForm` component (untouched), `VideoGrid` + `CredibilityStrip` (untouched except where noted).
- **External YouTube URL:** `https://youtube.com/@germanhernandezmairal` (already used in codebase — keep exact).
- **Contact route** is `/contact`. All in-app CTAs that currently point to `/services` must be repointed.
- **Do not delete** `Services.jsx` or `TarragonaJove.jsx` or their routes — only de-index them.
- Verify with `npm run lint` && `npm run build` before done.

---

## 3. Assets

### Staged already (in working tree, untracked)
- `public/logo-german.svg` — raw copy of `pitch-deck/imgs/mvp logo title.svg` (~80KB, `viewBox="0 0 600 600"`, contains raster-shadow `<filter>` layers).
  **NEEDS PROCESSING before use:** tighten viewBox to artwork bounds and strip the raster-shadow `<filter>`/`<feColorMatrix>` layers so it renders as a clean amber vector on a transparent background (~4KB target). Artwork is the "Germán" wordmark with `< >` development brackets, in amber.
  **Fallback (pre-approved):** if the processed SVG still renders poorly on the dark header/footer, reproduce the mark as inline SVG/JSX inside `Logo.jsx` instead of loading the file.
- `public/imgs/brit-english-academy-preview.webp` (65KB)
- `public/imgs/hometown-homepage-preview.webp` (102KB)
- `public/imgs/blackjack-game-preview.webp` (39KB)
- `public/imgs/ai-fitness-trainer-preview.webp` (36KB)

### Reused
- `public/imgs/Imagen Página Web Editada.webp` — Home hero + About hero (keep).
- `public/imgs/WebMarcaPersonal-Preview-3.webp` — preview for the `germanhernandezmairal.com` project card.
- `public/imgs/Germán-Universidad.webp`, `ImagenCreandoContenidoEditada.webp`, `Germán Programando Buscando Trabajo Editada.webp` — About bio blocks (keep).

### Out of scope
- Favicon stays `public/firma-favicon.png` (old signature). Noted for a later pass; not changed here.

---

## 4. New Component: `src/components/Logo.jsx`

```jsx
import { Link } from 'react-router-dom';

/**
 * Site logo — Germán wordmark with development brackets, amber on dark.
 * Renders /logo-german.svg; falls back to inline SVG if the file renders badly on dark.
 */
const Logo = ({ className = 'h-7 md:h-8' }) => (
  <img
    src="/logo-german.svg"
    alt="Germán — Fullstack Developer"
    className={`${className} w-auto`}
  />
);

export default Logo;
```

- Used inside existing `<Link to="/">` wrappers (Header, Footer) — component renders only the mark, parent keeps the link + hover.
- If inline-SVG fallback is needed, keep the same `className` prop contract and `alt`/`aria-label` semantics.

---

## 5. Navigation & Routing

### `src/components/Header.jsx`
- **`NAV_LINKS`** → new order, `Servicios` removed, `YouTube` first:
  ```js
  const NAV_LINKS = [
    { to: '/youtube', label: 'YouTube' },
    { to: '/portfolio', label: 'Portafolio' },
    { to: '/about', label: 'Quién Soy' },
    { to: '/contact', label: 'Contacto' },
  ];
  ```
- **Logo:** replace the `font-signature` `GHM` `<Link to="/">` (lines ~43-48) with `<Link to="/"><Logo /></Link>` (keep hover transition on the link).
- **Amber CTA button** (desktop, line ~69, AND mobile menu, line ~121): `Hablemos` → **`Habla conmigo`**.

### `src/components/Footer.jsx`
- **Brand block** (lines ~17-25): replace `font-signature` `GHM` with `<Logo />` inside the existing `<Link to="/">`. Tagline text → `Germán Hernández Mairal — Fullstack Developer`.
- **Navegación list** (lines ~32-38) → reorder, drop `Servicios`, `YouTube` before `Portafolio`:
  ```js
  [
    ['/', 'Inicio'],
    ['/youtube', 'YouTube'],
    ['/portfolio', 'Portafolio'],
    ['/about', 'Quién Soy'],
    ['/contact', 'Contacto'],
  ]
  ```
- "Conectemos" heading + social links (LinkedIn/YouTube/Instagram/Email) unchanged.

### `src/App.jsx`
- No route changes. `/services` and `/portfolio/tarragona-jove` stay registered (reachable by direct URL).

### De-indexing (keep live, hide from search + internal nav)
- **`src/pages/Services.jsx`** — add to `<Helmet>` (after the description meta):
  `<meta name="robots" content="noindex" />`
- **`src/pages/TarragonaJove.jsx`** — same addition to its `<Helmet>` (lines ~117-123).
- **`public/sitemap.xml`** — remove the `/services` and `/portfolio/tarragona-jove` `<url>` entries. Final list: `/`, `/portfolio`, `/youtube`, `/about`, `/contact`, `/pitch-deck/`.
- **`public/robots.txt`** — add before the `Sitemap:` line:
  ```
  Disallow: /services
  Disallow: /portfolio/tarragona-jove
  ```

### Repoint internal `/services` links
Only `src/pages/Home.jsx` still links to `/services`:
- `HeroSection` primary button (line ~34) — becomes the "Ver canal de YouTube" external link (see §6).
- `HELP_CARDS` array `link: '/services'` ×3 → the two surviving cards link to `/youtube` (see §6).
- `HowIHelpSection` bottom button (line ~151, "Explorar todos los servicios →") — **removed** (see §6).

`About.jsx` MissionSection and `Portfolio.jsx` CTA already point to `/contact` — no change needed there.

---

## 6. Page Copy — Full Rewrites

### 6.1 `src/pages/Home.jsx`

**`<Helmet>`**
- `<title>`: `Germán Hernández Mairal – Fullstack Developer`
- description: `Fullstack Developer consiguiendo mi primer trabajo como programador desde cero. Comparto hábitos y habilidades prácticas para ayudarte a conseguir el tuyo.`
- keywords: `fullstack developer, primer trabajo programador, desarrollador junior, hábitos programador, habilidades programador, React, Next.js, TypeScript`

**`HeroSection`**
- Heading (`<p class="font-montserrat font-bold ...">`):
  `Hola, soy Germán, Fullstack Developer.`
- Sub-paragraph:
  `Estoy consiguiendo mi primer trabajo como programador desde cero y en Internet comparto **hábitos y habilidades prácticas** con el fin de ayudarte a conseguir lo mismo.`
  (keep `<strong>` on "hábitos y habilidades prácticas")
- Buttons (replace both):
  - Primary (blue) → external link: `<a href="https://youtube.com/@germanhernandezmairal" target="_blank" rel="noopener noreferrer">` text **`Ver canal de YouTube`**
  - Secondary (amber) → `<Link to="/contact">` text **`Habla conmigo`**
- Hero image unchanged (`Imagen Página Web Editada.webp`).
- Scroll indicator anchor `#how-i-help` unchanged.

**`HowIHelpSection`** (id stays `how-i-help`)
- H2: `¿Cómo puedo ayudarte a conseguir tu primer trabajo como programador?`
  (drop the amber `<span>` on "conseguir clientes"; may wrap "tu primer trabajo" in `underline-amber` for visual parity)
- Intro paragraph: `Creo contenido sobre hábitos y habilidades prácticas para conseguir tus primeras entrevistas.`
- **`HELP_CARDS` collapses from 3 → 2:**
  ```js
  const HELP_CARDS = [
    {
      icon: <FaHeartbeat className="text-5xl md:text-6xl text-brand-blue mb-4" />, // or keep an existing icon
      title: '',
      highlight: 'Hábitos',
      description: 'Las rutinas diarias que aplico para aprender, construir proyectos, crear relaciones en el sector y conseguir entrevistas.',
      link: '/youtube',
    },
    {
      icon: <FaLaptopCode className="text-5xl md:text-6xl text-brand-blue mb-4" />,
      title: '',
      highlight: 'Habilidades',
      description: 'Los lenguajes, técnicas y metodologías que más demandan las empresas — y cómo los aprendo en la práctica.',
      link: '/youtube',
    },
  ];
  ```
  - Grid: change `sm:grid-cols-3` → `sm:grid-cols-2` (and constrain width, e.g. `max-w-3xl mx-auto`, so two cards don't stretch).
  - Card title rendering: if `title` is empty, render just the `highlight` span.
  - Update icon imports as needed (`FaHeartbeat`, `FaRocket`, `FaLaptopCode` are available via `react-icons/fa`).
- **Bottom button:** replace "Explorar todos los servicios →" (`to="/services"`) with a single link to the channel:
  `<a href="https://youtube.com/@germanhernandezmairal" target="_blank" rel="noopener noreferrer">` text **`Ver canal de YouTube`**
  (keep the blue button styling)

**`CTABanner`**
- H2: `¿Listo para conseguir tu primer trabajo?`
- Paragraph: `Si quieres conseguir tus primeras entrevistas, crear un portafolio con proyectos de alto nivel y construir relaciones en el sector tecnológico.`
- Button (`to="/contact"`): **`Habla conmigo ahora`**

---

### 6.2 `src/pages/Portfolio.jsx`

**`<Helmet>`**
- `<title>`: `Proyectos Reales – Germán Hernández Mairal`
- description: `Proyectos reales de desarrollo web y fullstack — React, Next.js, TypeScript, Python/FastAPI. Construidos para diferenciarme y conseguir mi primer trabajo en tech.`

**Header section**
- H1: `Proyectos <span className="highlight-amber">Reales</span>` (unchanged markup)
- Intro paragraph (replace fully):
  `En 2024 me gradué como Desarrollador Web en la Universidad Rovira i Virgili y desde entonces trabajo en proyectos para diferenciarme de la competencia y adentrarme en el sector tecnológico como Desarrollador Fullstack Junior.`
  (drop the "+4 años / 500 piezas de contenido" framing)

**`CATEGORIES`**
```js
const CATEGORIES = [
  { key: 'all', label: 'Todos' },
  { key: 'educacion', label: 'Educación' },
  { key: 'salud', label: 'Salud' },
  { key: 'otros', label: 'Otros' },
];
```

**`PROJECTS`** — replace the whole array with these 5. Keep `ProjectCard` markup; `featured` optional (pick 1–2). Each card: image, title, description, tech tags, "Ver proyecto" (liveUrl, external), "GitHub" (githubUrl or null).

| # | title | category | image | tech | liveUrl | githubUrl |
|---|-------|----------|-------|------|---------|-----------|
| 1 | `germanhernandezmairal.com` | educacion | `/imgs/WebMarcaPersonal-Preview-3.webp` | React, Vite, Tailwind CSS, Vercel | `https://www.germanhernandezmairal.com` | `null` |
| 2 | `britenglishacademy.app` | educacion | `/imgs/brit-english-academy-preview.webp` | Next.js, TypeScript, Supabase, PostgreSQL, Tailwind CSS | `https://brit-english-academy.vercel.app/` | `https://github.com/germanhernandezmairal/britenglishacademy.app` |
| 3 | `AI Fitness Trainer` | salud | `/imgs/ai-fitness-trainer-preview.webp` | Python, FastAPI, Next.js, TypeScript, Computer Vision | `https://ai-fitness-trainer-three-rosy.vercel.app` | `https://github.com/germanhernandezmairal/ai-fitness-trainer` |
| 4 | `hometown-homepage` | otros | `/imgs/hometown-homepage-preview.webp` | HTML, CSS, JavaScript, Vercel | `https://hometown-homepage-tgn.vercel.app/` | `https://github.com/germanhernandezmairal/hometown-homepage` |
| 5 | `blackjack-game` | otros | `/imgs/blackjack-game-preview.webp` | JavaScript, HTML, CSS, Vercel | `https://blackjack-game-ghm.vercel.app/` | `https://github.com/germanhernandezmairal/blackjack-game` |

Descriptions (Spanish, 1–2 sentences each):
1. **germanhernandezmairal.com** — `Mi web personal: portafolio, canal y contacto en un mismo sitio. React + Vite, desplegada en Vercel, pensada para cargar rápido y ser fácil de mantener.`
2. **britenglishacademy.app** — `Aplicación web para una academia de inglés Cambridge en Tarragona: gestión de cursos, alumnos y contenido. Next.js + TypeScript con base de datos PostgreSQL en Supabase.`
3. **AI Fitness Trainer** — `Analiza la técnica de un ejercicio a partir de vídeo usando detección de poses. Backend en Python/FastAPI para la visión por computador, frontend en Next.js.`
4. **hometown-homepage** — `Web estática tipo "Visit Tarragona" para practicar maquetación y despliegue: HTML, CSS y JavaScript sin framework, publicada en Vercel.`
5. **blackjack-game** — `Blackjack jugable en el navegador, hecho con JavaScript puro para dominar lógica de estado, eventos y DOM. Desplegado en Vercel.`

- **Card links:** `germanhernandezmairal.com` has `githubUrl: null` → render only "Ver proyecto". Remove the `detailUrl`/internal-`Link` branch from `ProjectCard` (no project uses it anymore) — or leave it dead. Prefer removing for cleanliness.
- The old Tarragona Jove project drops off the list entirely (its detail page stays live but unlinked).

**CTA section**
- H2: `¿Necesitas conseguir tu primer trabajo como programador?`
- Paragraph: `Si quieres conseguir tus primeras entrevistas y construir un proyecto que refleje tus habilidades tecnológicas, cuéntame tu situación.`
- Button (`to="/contact"`): **`Hablemos de tu situación`**

---

### 6.3 `src/pages/YouTube.jsx`

**`<Helmet>`**
- `<title>`: `YouTube – Germán Hernández Mairal`
- description: `Comparto hábitos y habilidades prácticas para programadores que quieren conseguir su primer trabajo en el sector tecnológico.`

**`ChannelHeader`**
- H1: `YouTube como <span className="highlight-amber">Escaparate de Aprendizajes</span>`
- Paragraph (replace):
  `En mi canal comparto **hábitos** y **habilidades prácticas** para programadores que quieren conseguir su primer trabajo en el sector tecnológico. Es el espacio donde comparto mis aprendizajes como desarrollador de software.`
  (keep white `<span>` emphasis on "hábitos" / "habilidades prácticas")
- "Suscribirse al canal" button unchanged.

**`CredibilityStrip`** — `STATS` unchanged.

**`TopicsSection`** (`TOPICS` array)
- Section intro paragraph:
  `Dos pilares para crear una carrera en el sector tecnológico como desarrollador de software, de forma práctica, sostenible y realista.`
- `Hábitos` desc:
  `Prácticas diarias que aplico para aprender nuevas habilidades, construir proyectos, conectar con nuevas relaciones, mantenerme actualizado en el sector y conseguir entrevistas de trabajo.`
- `Habilidades` desc:
  `El resultado de los hábitos aplicados: los nuevos lenguajes, técnicas y metodologías que nacen en el sector y que más demandan las empresas.`
- Keep the two-card grid, icons, "Ver vídeos →", and the `onTopicClick` scroll behavior.

**Videos section** (`ref={videosRef}`) — heading/intro copy may stay ("Vídeos para tu Primer Trabajo" / "Hábitos y habilidades prácticas — filtra por el pilar…"). No change required.

**`Testimonials`** (`TESTIMONIALS` array) — rewrite the 3 quotes as **3 variants of the Q3 audience avatar** (see §7). Keep card markup, initials avatar, section heading "Resultados que genera el contenido".

**`FinalCTA`**
- H2: `Si estoy consiguiendo mi primer trabajo como programador desde cero, también puedo ayudarte a conseguir el tuyo.`
- Paragraph: `Más allá del canal, ayudo a estudiantes de programación y graduados a conseguir sus primeras entrevistas de trabajo.`
- Buttons:
  - Red (external, unchanged href) → text **`Ver el canal`**
  - Amber (`to="/contact"`) → text **`Hablemos de tu situación`**

---

### 6.4 `src/pages/About.jsx`

**`<Helmet>`**
- `<title>`: `Sobre mí – Germán Hernández Mairal`
- description: `Germán Hernández — Fullstack Developer. Graduado en la URV (2024), construyendo una metodología para conseguir mi primer trabajo en tech y ayudarte a conseguir el tuyo.`

**`AboutHero`**
- H1: `<span className="highlight-amber">Sobre Mí</span>` (unchanged)
- Paragraph 1 (replace):
  `Soy **Germán**, Fullstack Developer. Me gradué en la Universidad Rovira i Virgili en 2024 y desde entonces estoy creando una metodología para conseguir mi primer trabajo en el sector tecnológico y ayudarte a conseguir lo mismo.`
- Paragraph 2 (replace): shorten/align — e.g.
  `Combino formación técnica en desarrollo con experiencia real en **comunicación y comunidad**.`
  (keep some `underline-amber` emphasis spans for visual parity)
- Hero image unchanged.

**`BIO_ITEMS`** — 3 blocks, keep images/layout:
1. **La Base Técnica** (`Germán-Universidad.webp`):
   `Me gradué en Técnicas de Desarrollo de Aplicaciones Web y Móviles y desde entonces construyo webs y aplicaciones con criterio técnico: limpias, rápidas y preparadas para crecer.`
2. **Comunicación y Comunidad** (rename from "Comunicación & Comunidad"; `ImagenCreandoContenidoEditada.webp`):
   `He trabajado como **Community Manager** para instituciones y marcas: gestionando redes, produciendo contenido y cubriendo eventos. Ahí entendí que **comunicar con claridad** es tan importante como tus habilidades técnicas de software.`
3. **Camino hacia el primer trabajo** (rename from "Desarrollo Web Moderno"; `Germán Programando Buscando Trabajo Editada.webp`):
   `Hoy construyo proyectos web con **Next.js, React y TypeScript**. Estoy creando una metodología, Software Builder, para conseguir mi primer trabajo como programador desde cero. El resultado: **primeras entrevistas con empresas con miles de empleados**.`

**`SkillsSection`** — rebuild `SKILLS` from the 4 pinned GitHub repos; drop social-media tools from the visible render.
```js
const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & Deploy',
    items: ['Node.js', 'Python / FastAPI', 'PostgreSQL / Supabase', 'REST APIs', 'Git / GitHub', 'Vercel'],
  },
  {
    category: 'Contenido & Community',
    items: ['YouTube', 'Instagram', 'TikTok', 'Notion', 'Metricool'],
    hidden: true,
  },
];
```
- Render: `SKILLS.filter((s) => !s.hidden).map(...)`. Keep the 3rd entry in the array (data preserved, per Germán's request) but filtered out.
- Grid: `sm:grid-cols-3` → `sm:grid-cols-2`.
- Section intro paragraph → `Las tecnologías con las que construyo webs y aplicaciones fullstack.`
- Section H2 "Habilidades & Herramientas" may stay.

**`MissionSection`**
- Paragraph (replace):
  `Ayudo a programadores a conseguir su primer trabajo en el sector tecnológico mediante **hábitos y habilidades prácticas**.`
  (keep 1–2 emphasis spans)
- Button (`to="/contact"`): **`Hablemos de tu situación`**

---

### 6.5 `src/pages/Contact.jsx`

**`<Helmet>`**
- `<title>`: `Contacto – Germán Hernández Mairal`
- description: `¿Necesitas ayuda con tu búsqueda de trabajo? Cuéntame qué necesitas y te respondo en menos de 24 horas.`

**Header section**
- H1: `<span className="highlight-amber">Contacto</span>` (unchanged)
- Paragraph (replace):
  `¿Necesitas ayuda con tu búsqueda de trabajo? Este es el primer paso para conseguir tus primeras entrevistas. Cuéntame qué necesitas y te respondo en menos de 24 horas.`

**`LetsTalk`**
- H2: `<span className="highlight-amber">Hablemos</span>` (unchanged)
- Paragraph 1: `¿Quieres conseguir tus primeras entrevistas o construir un portafolio que llame la atención?`
- Paragraph 2: `Este es el primer paso para hacerlo realidad. Cuéntame qué necesitas. **Sin rodeos.**`
- Paragraph 3: `Te respondo en menos de 24 horas.`
- Social links block ("Encuéntrame también en:") unchanged.

**`ContactInfo`** ("¿Prefieres el correo directo?")
- Keep H2 + the `gerhm19@gmail.com` mailto line.
- Middle paragraph: `Si tienes dudas antes de decidir, **también puedo ayudarte**.` (may stay)
- "¿Empezamos?" + "Cuéntame tu proyecto" button → button text **`Cuéntame tu situación`** (scroll behavior unchanged).

**`ContactForm`** component — untouched.

---

## 7. Q3 Audience Avatar — YouTube Testimonials

**Source:** `/Volumes/Expansion/Community Builder/2026/Q3/Content/Content Strategy/Creator's Compass Q3/Creator's Compass Q3 ✅ 3963a6522d7b809e8f1ad6c5bec3f1cf.html`

**Core avatar:** 22–23, finishing a computer-science / web-dev degree, broke, nervous about landing the first job, impostor syndrome despite the degree, unsure about relationship-building, wants a meaningful tech career, wants to feel inspired/guided/motivated and leave with practical habits + skills, subscribes to keep improving in a fast-moving (AI) field.

**3 testimonial variants** (anonymized, first person, Spanish, ~2 sentences each, keep `author` as `Nombre A.` + `role`):

1. **CS student, impostor syndrome** — role `Estudiante de Ingeniería Informática`
   `Tengo el título casi terminado y aun así sentía que no valía para esto. El canal me ha ayudado a ver que conseguir el primer trabajo es un proceso con pasos concretos, no cuestión de suerte.`
2. **Recent DAW/CS grad, actively job-hunting** — role `Graduada en DAW, buscando trabajo`
   `Acabé el grado y me quedé bloqueada sin saber por dónde empezar a buscar. Ahora tengo hábitos semanales para construir portafolio y preparar entrevistas, y por fin siento que avanzo.`
3. **Self-taught / career-changer** — role `Programador autodidacta`
   `Vengo de otro sector y aprendo por mi cuenta. Ver a alguien conseguir su primer trabajo desde cero, contando lo que funciona y lo que no, me mantiene constante y con la motivación alta.`

---

## 8. Metadata Summary

| File | Change |
|------|--------|
| `index.html` | `<title>` → `Germán Hernández Mairal – Fullstack Developer`; `description`, `og:title`, `og:description`, `twitter` description → new positioning (§1). `og:image`/`twitter:image` may stay (`WebMarcaPersonal-Preview-3.png`). Canonical unchanged. Optionally drop `Great+Vibes` from the Google Fonts URL (see §9). |
| `public/sitemap.xml` | Keep: `/`, `/portfolio`, `/youtube`, `/about`, `/contact`, `/pitch-deck/`. Remove: `/services`, `/portfolio/tarragona-jove`. |
| `public/robots.txt` | Add `Disallow: /services` and `Disallow: /portfolio/tarragona-jove`. |
| `Home/Portfolio/YouTube/About/Contact` `<Helmet>` | Rewritten per §6. |
| `Services.jsx` / `TarragonaJove.jsx` `<Helmet>` | Add `<meta name="robots" content="noindex" />`. |

---

## 9. Cleanup (after logo swap)

Once no component uses `font-signature`:
- `src/index.css` — remove `--font-signature: 'Great Vibes', cursive;` from `@theme`.
- `index.html` — remove `Great+Vibes` from the `fonts.googleapis.com/css2?...` URL.
- Confirm no `font-signature` class remains: `grep -rn "font-signature" src/ index.html` → empty.

`Portfolio.jsx` line ~67 (`<span className="font-signature ...">GHM</span>` image fallback): since every new project has an `image`, this branch is effectively dead. Replace with a neutral fallback (small faded `<Logo />` or a plain amber `{ }` glyph) or remove the fallback branch.

---

## 10. File Change List (~14)

1. `src/components/Logo.jsx` — **new**
2. `src/components/Header.jsx` — logo, nav order, CTA text
3. `src/components/Footer.jsx` — logo, nav order, tagline
4. `src/pages/Home.jsx` — hero, help cards 3→2, CTA banner, Helmet, `/services` links
5. `src/pages/Portfolio.jsx` — intro, categories, 5 projects, CTA, Helmet, ProjectCard cleanup
6. `src/pages/YouTube.jsx` — header, topics, testimonials, final CTA, Helmet
7. `src/pages/About.jsx` — hero, 3 bio blocks, skills rebuild, mission, Helmet
8. `src/pages/Contact.jsx` — header, LetsTalk, ContactInfo, Helmet
9. `src/pages/Services.jsx` — add noindex meta
10. `src/pages/TarragonaJove.jsx` — add noindex meta
11. `index.html` — metadata + (optional) font URL
12. `public/sitemap.xml` — trim
13. `public/robots.txt` — disallow
14. `src/index.css` — remove `--font-signature` (cleanup)
15. `public/logo-german.svg` — process (tighten viewBox, strip raster shadow) — asset step

---

## 11. Testing / Acceptance

- `npm run lint` — passes.
- `npm run build` — passes.
- `npm run dev` manual check:
  - Logo renders crisp on the dark header + footer, mobile and desktop.
  - Nav order: `YouTube · Portafolio · Quién Soy · Contacto`; no `Servicios`.
  - `/services` and `/portfolio/tarragona-jove` still load via direct URL; both carry `<meta name="robots" content="noindex">` (check DOM head).
  - Home: 2 help cards, both routing to `/youtube`; hero primary button opens YouTube in a new tab; "Habla conmigo" → `/contact`.
  - Portfolio: filters `Todos · Educación · Salud · Otros` work; 5 cards; each live link opens; GitHub links present except `germanhernandezmairal.com`.
  - All CTA buttons route correctly; no `/services` links remain (`grep -rn 'to="/services"' src/` → empty).
  - No console errors; page transitions still animate.
- View-source / crawler check: `sitemap.xml` has 6 URLs; `robots.txt` has both `Disallow` lines.

---

## 12. Open Items

- ~~Header CTA rename `Hablemos` → `Habla conmigo`~~ — **confirmed by Germán 2026-09-01.**
- Favicon swap (signature → `{ }` bracket mark) — deferred, not in this spec.
- If the processed `logo-german.svg` still looks wrong on dark, switch `Logo.jsx` to the pre-approved inline-SVG fallback.
