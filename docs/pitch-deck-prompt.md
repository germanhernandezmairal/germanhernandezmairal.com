# Prompt — Pitch Deck "Sigamos Construyendo" (Demo Day · HTML)

## Context
I'm **Germán Hernández Mairal**. I need you to build a final version of my pitch deck for a **demo day** as a **single self-contained HTML page** (slide-by-slide presentation I can open in a browser and present full-screen). Use my existing deck as the content/source of truth, but the deliverable is **HTML, not `.pptx`**.

**HTML requirements:**
- One **standalone `.html` file** with all CSS (and any JS) inline — no external dependencies, so it works offline by just double-clicking it.
- A **slide-based layout**: one full-viewport section per slide, navigable with arrow keys (←/→) and on-screen controls.
- **16:9** slides, responsive, legible from a projector (large type, strong contrast).
- Embed all images as **base64 data URIs** so the single file is fully portable.
- **Branding — follow my style guide:** use the **`style-guide.html`** from my *german-hernandez-v2* project (attached) as the single source of truth for my personal brand — colors, typography/text fonts, and any other visual tokens it defines. Pull the exact color values and font families from it and apply them consistently across every slide. If the style guide loads webfonts, reproduce those (with the same `@font-face`/`<link>` references or embedded fonts) so the deck matches my brand. Don't invent off-brand colors or fonts.
- Clean, modern, presentation-grade design — not a generic template.

**Files I'm attaching (please confirm you can read each one before starting):**
- `MVP Logo (2)` — my logo (brand: **GHM**)
- `Sigamos-Construyendo (1)` — the existing Pitch Deck Presentation MVP (source content to rebuild in HTML)
- `style-guide.html` — my personal-brand style guide from the *german-hernandez-v2* project (colors, fonts, visual tokens) — **use this for all branding**
- Screenshots of my **YouTube channel** (channel page + branding)
- Screenshots of my **YouTube metrics**: lifetime (since I started) and the **last 30 days**

**Language:** the **entire HTML page must be in Spanish** — all section titles and body content. Translate any Catalan titles from the source deck into Spanish (e.g. *Portada, Problema, Solución, Producto, Modelo de Negocio, Mercado, Competencia, Tracción, Equipo, Finanzas y Proyecciones, Requisitos de Financiación, Visión y Hoja de Ruta*). Set `lang="es"` on the `<html>` element.

**Tone:** confident and forward-looking. Remove negativity (see edit #2).

---

## Specific edits to make

1. **Slide 1 — Portada (first HTML slide):** show **only my logo (GHM)**. Nothing else.

2. **Tone pass (whole deck):** rewrite any **negative expressions** into positive or neutral framing that doesn't dwell on the negative, while keeping the meaning.

3. **Slide 2 — image swap:** remove the current image. I'll generate a new one with **Ideogram** — **give me a ready-to-paste Ideogram prompt** for an image of *a programmer who is frustrated because he can't find a job*. Leave a clearly marked placeholder in the HTML where I'll drop the generated image, and tell me how to swap it in (i.e. which `src`/data-URI to replace).

4. **Solució:** use this text, **no image**:
   > *De Creador a Comunidad. Ayudo a Programadores a Conseguir su Primer Trabajo en el Sector Tecnológico mediante Hábitos y Habilidades Prácticas.*

5. **Producte:** insert a **screenshot of my YouTube channel** and **add the YouTube logo**.

6. **Tracció:** insert the **YouTube metrics screenshots** — both since I started **and** the last 30 days.

7. **Escalabilitat:** fit the **3–5 year projection** onto a **single slide**.

8. **Slide 6:**
   - Shift the emphasis toward **the audience I want to help** rather than the competition.
   - **Business model:** add **metrics & stats** to support it.

9. **Final image:** replace it with *a programmer working at his first job* (success/result). **Give me an Ideogram prompt** for this one too, and leave a marked placeholder in the HTML.

**Deliverables:** the finished **standalone `.html` pitch deck** + the **two Ideogram prompts** (frustrated programmer, and programmer at first job).

---

## Target deck structure (demo day)

- **Portada**
  - Nombre de la empresa: Germán Hernández Mairal
  - Logotipo: GHM
  - Eslogan: *Sigamos Construyendo*
- **Problema**
  - No conseguir el primer trabajo como desarrollador web en el sector tecnológico
  - *Contrástalo con datos*
- **Solución**
  - Contenido orgánico y de pago con una metodología para conseguir ese primer trabajo
- **Producto**
  - Mostrar un vídeo de YouTube (screenshot del canal + logo de YouTube)
- **Modelo de Negocio**
  1. **Segmentos de Clientes:** Programadores sin experiencia laboral que buscan su primer empleo en el sector tecnológico.
  2. **Proposición de Valor:** *Ayudo a Programadores a Conseguir su Primer Trabajo en el Sector Tecnológico mediante hábitos y habilidades prácticas.*
     - Hábitos: Saludables, Relacionales
     - Habilidades Prácticas: Desarrollo de Software, Marca Personal, Inglés, Aprendizaje
  3. **Relación con el Cliente:** De cercanía. De creador a comunidad.
  4. **Canales:** Contenido orgánico en redes sociales y comunidades privadas (membresía)
  5. **Fuentes de Ingresos:** Marketing de afiliados; Patrocinios; Productos digitales de pago.
  6. **Actividades Clave:** Crea contenido educacional e inspiracional para redes sociales y comunidad privada.
  7. **Recursos Clave:** Tiempo y dinero para desarrollar los productos orgánicos y las plataformas digitales para la comunidad.
  8. **Socios:** Empresas y marcas personales del sector tecnológico dedicadas a educar a programadores.
  9. **Coste de Estructura:** Delegación de partes del sistema de contenido orgánico y de pago; equipo de 3–5 personas (hasta 10 si el modelo escala).
- **Mercado**
  - Tecnológico *(usar métricas)*
- **Competencia**
  - Marcas personales en el sector tecnológico: Programador X, El Rincón del DEV, Alpaca Tech
- **Tracción**
  - Métricas clave de mi canal de YouTube
- **Equipo**
  - Freelancers con los que he trabajado
- **Finanzas y Proyecciones**
  - Actuales y proyecciones realistas a 3–5 años
- **Requisitos de Financiación**
  - ¿Cuántos y cómo?
- **Visión y Hoja de Ruta** *(opcional)*

---

## How I'd like you to work
1. First confirm every attached file opens and tell me what you see in each.
2. Flag anything missing (e.g., if a metric screenshot is unreadable) before building.
3. Build the edits above into the **single standalone `.html` file** and return it.
4. Give me the two Ideogram prompts separately so I can generate the images, plus quick instructions for swapping them into the HTML.
