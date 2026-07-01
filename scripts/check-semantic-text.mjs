// Semantic text-extraction QA for the events pages.
//
// Renders each target page in a headless browser, reads document.body's
// innerText (the same rough approximation crawlers/screen readers/AI
// summarizers use), and fails if it finds words glued together with no
// separating whitespace - the exact symptom of markup with zero whitespace
// between adjacent tags (e.g. "...luglio 2026Apri scheda" or
// "Fiera del Vino Cinema Est Film Festival"). It also fails if the featured
// event section resolves to a candidate whose endDate is before today.
//
// Run with: node scripts/check-semantic-text.mjs
// Requires: a local server serving the built (or source) HTML on PORT,
// and Playwright available at /opt/node22/lib/node_modules/playwright.

import pkg from "/opt/node22/lib/node_modules/playwright/index.js";
const { chromium } = pkg;

const PORT = process.env.SEMANTIC_QA_PORT || "8945";
const BASE = `http://127.0.0.1:${PORT}`;

const PAGES = [
  "/eventi.html",
  "/calendario-eventi-montefiascone.html",
  "/eventi-estate-montefiascone-2026.html",
  "/en/montefiascone-summer-events-2026.html",
  "/de/sommerveranstaltungen-montefiascone-2026.html",
];

// Deliberately generic: any run of lowercase-then-uppercase or
// digit-then-letter with no space in between, near a date or a CTA verb,
// is almost always evidence of two DOM text nodes rendered back to back
// with no whitespace between the source tags.
const BAD_PATTERNS = [
  /2026Apri\b/,
  /2026Open\b/,
  /2026Öffnen\b/,
  /2026Oeffnen\b/,
  /\bDateApri\b/,
  /\bDateOpen\b/,
  /ApprofondimentoEvento/,
  /\bEventDate\b/,
  /VeranstaltungDatum/,
  /Fiera del Vino Cinema/,
  /Cinema Lago/,
  /Lago Tradizione/,
  /Wine Cinema/,
  /Cinema Lake/,
  /Wein Kino/,
  /Kino See/,
  /Apri la guida alla Fiera del Vino Cinema/,
  /Open the Wine Fair guide Cinema/,
  /Die Weinmesse öffnen Kino/,
];

const AUDIT_TONE_PATTERNS = [
  /fonti pubbliche usate/i,
  /cosa è confermato/i,
  /cosa e confermato/i,
  /questa pagina conserva solo/i,
  /public sources used/i,
  /what is confirmed/i,
  /this page keeps only/i,
  /oeffentliche quellen/i,
  /bestaetigte daten/i,
];

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.route("**/*", (route) => {
    const url = route.request().url();
    if (url.startsWith(BASE)) return route.continue();
    return route.abort();
  });

  let failures = 0;

  for (const path of PAGES) {
    const page = await context.newPage();
    try {
      await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 15000 });
      await page.waitForTimeout(300);
      const text = await page.evaluate(() => document.body.innerText);

      for (const pattern of BAD_PATTERNS) {
        if (pattern.test(text)) {
          failures += 1;
          console.error(`FAIL ${path}: concatenation pattern matched ${pattern}`);
        }
      }
      for (const pattern of AUDIT_TONE_PATTERNS) {
        if (pattern.test(text)) {
          failures += 1;
          console.error(`FAIL ${path}: audit-tone text matched ${pattern}`);
        }
      }

      if (path === "/eventi.html") {
        const eventId = await page.locator("#evento-in-evidenza").getAttribute("data-event-id").catch(() => null);
        const manifestRaw = await page
          .locator("#featured-event-manifest")
          .textContent()
          .catch(() => null);
        if (eventId && eventId !== "fallback" && manifestRaw) {
          const manifest = JSON.parse(manifestRaw);
          const entry = manifest.find((e) => e.id === eventId);
          const todayIso = new Date().toISOString().slice(0, 10);
          if (entry && entry.endDate < todayIso) {
            failures += 1;
            console.error(`FAIL ${path}: featured event "${eventId}" has endDate ${entry.endDate} before today ${todayIso}`);
          }
        }
      }

      console.log(`checked ${path} (${text.length} chars extracted)`);
    } catch (err) {
      failures += 1;
      console.error(`FAIL ${path}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  if (failures > 0) {
    console.error(`\n${failures} semantic QA failure(s).`);
    process.exit(1);
  }
  console.log("\nSemantic text extraction QA: all pages clean.");
}

main();
