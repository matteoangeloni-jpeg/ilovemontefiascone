// Semantic text-extraction QA for the events pages.
//
// This check was previously based on document.body.innerText, which is
// CSS/layout-aware: browsers insert line breaks for block-level elements
// (table cells, articles, divs) even when the raw HTML has zero whitespace
// between adjacent tags. That made it blind to a real bug that shipped to
// production: table cells and card/summary-list entries with no separating
// character at all in the DOM, which any CSS-agnostic extraction (raw
// textContent, naive tag-stripping, most AI/crawler text readers, or a
// simple "select all + copy") reads as words glued together, e.g.
// "19, 20 e 21 giugno 2026Apri scheda" or "...Vino Cinema Est Film...".
//
// This script now checks BOTH:
//   1. Structural boundaries in the raw source: every </td><td>, </th><th>,
//      </dd></div><div><dt> and </article> to <article> boundary in the
//      target files must be preceded by a real (if visually hidden) text
//      separator - not just whitespace, since whitespace-only separators
//      collapse away under normalisation and reproduce the same bug.
//   2. document.body.textContent (raw, and again after collapsing all
//      whitespace to single spaces) in a real browser, for the exact
//      known-bad patterns reported live, plus audit-toned copy.
//
// Run with: node scripts/check-semantic-text.mjs
// Requires: a local server serving the built (or source) HTML on PORT,
// and Playwright available at /opt/node22/lib/node_modules/playwright.

import { readFileSync } from "node:fs";
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

// Source files backing the pages above, for the structural boundary check.
// (build-time-generated files: check the source, since the build script
// regenerates the featured-event block from it on every run.)
const SOURCE_FILES = [
  "eventi.html",
  "calendario-eventi-montefiascone.html",
  "eventi-estate-montefiascone-2026.html",
  "en/montefiascone-summer-events-2026.html",
  "de/sommerveranstaltungen-montefiascone-2026.html",
];

const SEPARATOR_LOOKBEHIND = 'visually-hidden">\\s*—\\s*<\\/span>';

// Theme cards no longer rely on a generic "—" separator between </article>
// and the next <article class="card">: each card now ends its CTA with a
// real (visually-hidden) period, and the next card opens with a hidden
// "Tema:"/"Theme:"/"Thema:" prefix, so the boundary is self-disambiguating
// by real terminal punctuation instead. Accept either that pattern or the
// older dash separator (still used elsewhere) as a safe boundary.
const PERIOD_LOOKBEHIND = '<span class="visually-hidden">\\.<\\/span>\\n';
const DASH_LOOKBEHIND = 'visually-hidden">\\s*—\\s*<\\/span>\\n?';

const STRUCTURAL_BOUNDARIES = [
  { name: "table cell (td/td)", regex: new RegExp(`(?<!${SEPARATOR_LOOKBEHIND})</td><td`, "g") },
  { name: "table header (th/th)", regex: new RegExp(`(?<!${SEPARATOR_LOOKBEHIND})</th><th`, "g") },
  { name: "summary-list fact (dd/div/div/dt)", regex: new RegExp(`(?<!${SEPARATOR_LOOKBEHIND})</dd>(?=</div><div>)`, "g") },
  {
    name: "theme card (article/article)",
    regex: new RegExp(`(?<!${PERIOD_LOOKBEHIND})(?<!${DASH_LOOKBEHIND})</article>\\n<article class="card">`, "g"),
  },
];

// Known-bad patterns reported live, checked against rendered textContent
// (both raw and whitespace-collapsed) as a defense-in-depth layer on top
// of the structural check above.
const BAD_PATTERNS = [
  "2026Apri", "2026Open", "2026Öffnen", "2026Oeffnen", "2026Seite",
  "DateApri", "DateOpen", "ApprofondimentoEvento", "EventDate", "VeranstaltungDatum",
  "Fiera del Vino Cinema", "Cinema Lago", "Lago Tradizione",
  "Wine Cinema", "Cinema Lake", "Wein Kino", "Kino See",
  "Est Film Festival Lago", "Est-Lake Tradizione",
  "Zum Weinfest Kino", "Zum Est Film Festival See",
  "Fiera del Vino — Cinema", "Est Film Festival — Lago", "Est-Lake — Tradizione",
  "Wine Fair guide — Cinema", "Est Film Festival guide — Lake", "Est-Lake guide — Heritage",
  "Weinfest — Kino", "Est Film Festival — See", "Est-Lake — Tradition",
];

const AUDIT_TONE_PATTERNS = [
  /fonti pubbliche usate/i,
  /cosa è confermato/i,
  /cosa e confermato/i,
  /questa pagina conserva solo/i,
  /questa guida conserva solo/i,
  /conserva solo il quadro pubblico/i,
  /public sources used/i,
  /what is confirmed/i,
  /this page keeps only/i,
  /this guide keeps only/i,
  /cross-checked with official/i,
  /oeffentliche quellen/i,
  /bestaetigte daten/i,
];

function checkStructuralBoundaries() {
  let failures = 0;
  for (const file of SOURCE_FILES) {
    const html = readFileSync(file, "utf8");
    for (const { name, regex } of STRUCTURAL_BOUNDARIES) {
      const matches = html.match(regex);
      if (matches && matches.length > 0) {
        failures += matches.length;
        console.error(`FAIL ${file}: ${matches.length} unseparated ${name} boundary(ies) found in source`);
      }
    }
  }
  return failures;
}

async function checkRenderedText() {
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
      const raw = await page.evaluate(() => document.body.textContent);
      const collapsed = raw.replace(/\s+/g, " ");

      for (const pattern of BAD_PATTERNS) {
        if (raw.includes(pattern)) {
          failures += 1;
          console.error(`FAIL ${path}: raw textContent contains "${pattern}"`);
        } else if (collapsed.includes(pattern)) {
          failures += 1;
          console.error(`FAIL ${path}: whitespace-collapsed textContent contains "${pattern}"`);
        }
      }
      for (const pattern of AUDIT_TONE_PATTERNS) {
        if (pattern.test(raw)) {
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

      console.log(`checked ${path} (${raw.length} chars extracted)`);
    } catch (err) {
      failures += 1;
      console.error(`FAIL ${path}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  return failures;
}

async function main() {
  const structuralFailures = checkStructuralBoundaries();
  const renderedFailures = await checkRenderedText();
  const failures = structuralFailures + renderedFailures;

  if (failures > 0) {
    console.error(`\n${failures} semantic QA failure(s).`);
    process.exit(1);
  }
  console.log("\nSemantic text extraction QA: all pages clean (structural boundaries + rendered textContent, raw and whitespace-collapsed).");
}

main();
