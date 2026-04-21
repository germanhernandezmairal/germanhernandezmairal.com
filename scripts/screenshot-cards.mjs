import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'stripe-images');
const BASE_URL = 'http://localhost:5174';

// Maps index → filename for each card group
const PACKAGE_NAMES    = ['fundamentos', 'autoridad', 'ecosistema'];
const COMMUNITY_NAMES  = ['fotografia', 'audiovisual', 'redes', 'diseno', 'copywriting', 'directos', 'autoridad-organica'];
const WEB_NAMES        = ['web-marca-personal', 'web-app'];

async function screenshotCards(page, selector, names, label) {
  const cards = await page.$$(selector);
  console.log(`📸 Found ${cards.length} ${label} cards`);
  for (let i = 0; i < cards.length; i++) {
    const name = names[i] ?? `${label}-${i + 1}`;
    const outPath = join(OUTPUT_DIR, `${name}.png`);
    await cards[i].screenshot({ path: outPath });
    console.log(`  ✅ ${name}.png`);
  }
}

(async () => {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  });
  const page = await browser.newPage();

  // Wide viewport so cards render at desktop size
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('\n🌐 Opening services page...');
  await page.goto(`${BASE_URL}/services`, { waitUntil: 'networkidle0' });

  // Wait for fonts & icons to settle
  await new Promise(r => setTimeout(r, 1500));

  // ── Package cards ──────────────────────────────────────────────
  await screenshotCards(page, '#paquetes .grid > div', PACKAGE_NAMES, 'package');

  // ── Community service cards ────────────────────────────────────
  await screenshotCards(page, '#servicios .grid > div', COMMUNITY_NAMES, 'community');

  // ── Web service cards (click tab first) ───────────────────────
  const tabs = await page.$$('#servicios button');
  if (tabs[1]) {
    await tabs[1].click();
    await new Promise(r => setTimeout(r, 600));
  }
  await screenshotCards(page, '#servicios .grid > div', WEB_NAMES, 'web');

  await browser.close();
  console.log(`\n🎉 All images saved to: stripe-images/`);
})();
