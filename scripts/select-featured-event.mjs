// Build-time selector for the "evento in evidenza" spotlight on /eventi.
//
// Why build-time and not client-side: the site is a static export, so the
// featured event is computed once per build using the real clock at build
// time (new Date()), then baked into the HTML that ships to crawlers and
// browsers. There is no random rotation and no hardcoded "today" - running
// this script again (e.g. via `npm run build:cloudflare`, which now chains
// it automatically) re-reads the clock and re-evaluates the same rule.
//
// Trade-off (documented, not hidden): because the date check only runs at
// build time, the featured event will only advance when the site is rebuilt.
// A calendar event that starts "today" will not be promoted to featured
// until the next build after that date.
//
// Rule: pick the first event, in chronological order by startDate, whose
// window [startDate, endDate] contains "today" (an event "in corso"), or -
// if none is in progress - the first future event by startDate. If no
// current or future event exists, render an editorial fallback (links to
// the events calendar and the summer 2026 hub) without inventing any date.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { FEATURED_EVENT_CANDIDATES } from "./featured-events-data.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const HUB_FILE = "eventi.html";
const MARKER_START = "<!-- FEATURED_EVENT:START -->";
const MARKER_END = "<!-- FEATURED_EVENT:END -->";

function findEventNode(node) {
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = findEventNode(item);
      if (found) return found;
    }
    return null;
  }
  if (node && typeof node === "object") {
    if (node["@type"] === "Event" || node["@type"] === "MusicEvent") {
      return node;
    }
    for (const value of Object.values(node)) {
      const found = findEventNode(value);
      if (found) return found;
    }
  }
  return null;
}

function readEventDates(file) {
  const html = readFileSync(join(root, file), "utf8");
  const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const match of matches) {
    let data;
    try {
      data = JSON.parse(match[1]);
    } catch {
      continue;
    }
    const eventNode = findEventNode(data);
    if (eventNode?.startDate) {
      const startDate = String(eventNode.startDate).slice(0, 10);
      const endDate = eventNode.endDate ? String(eventNode.endDate).slice(0, 10) : startDate;
      return { startDate, endDate };
    }
  }
  throw new Error(`No Event/MusicEvent startDate found in ${file}`);
}

// Exported for direct unit testing (see scripts/select-featured-event.test.mjs).
export function pickFeaturedEvent(events, todayIso) {
  const current = events
    .filter((event) => event.startDate <= todayIso && todayIso <= event.endDate)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  if (current.length > 0) return current[0];

  const future = events
    .filter((event) => event.startDate > todayIso)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  if (future.length > 0) return future[0];

  return null;
}

function renderEventBlock(event) {
  const factsHtml = event.facts
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
  const teaserHtml = event.teaser.map((paragraph) => `<p>${paragraph}</p>`).join("");

  return `      <section class="section section--alt" id="evento-in-evidenza">
        <div class="container section-grid">
          <article class="card content-card">
            <p class="eyebrow eyebrow--dark">In evidenza &middot; ${event.dateLabel}</p>
            <h2>${event.name}</h2>
            ${teaserHtml}
            <dl class="summary-list">${factsHtml}</dl>
            <p style="margin-top: 1rem;">
              <a class="button" href="${event.url}">Apri la scheda evento</a>
            </p>
          </article>

          <aside class="card event-feature__media">
            <picture>
              <source type="image/webp" srcset="${event.image.webp}">
              <img alt="${event.image.alt}" decoding="async" height="${event.image.height}" loading="lazy" src="${event.image.jpg}" width="${event.image.width}">
            </picture>
          </aside>
        </div>
      </section>`;
}

function renderFallbackBlock() {
  return `      <section class="section section--alt" id="evento-in-evidenza">
        <div class="container section-grid">
          <article class="card content-card">
            <p class="eyebrow eyebrow--dark">Prossimi aggiornamenti</p>
            <h2>Il calendario si aggiorna nel corso della stagione</h2>
            <p>
              In questo momento non c'&egrave; un evento imminente da mettere in evidenza. Il modo pi&ugrave; affidabile per
              orientarsi resta il calendario completo, che raccoglie tutti gli appuntamenti confermati.
            </p>
            <p style="margin-top: 1rem;">
              <a class="button" href="/calendario-eventi-montefiascone">Apri il calendario eventi</a>
            </p>
          </article>

          <aside class="card">
            <h2 class="card__eyebrow">Nel frattempo</h2>
            <ul class="plain-list">
              <li><a href="/eventi-estate-montefiascone-2026">Estate 2026 a Montefiascone</a></li>
              <li><a href="/calendario-eventi-montefiascone">Calendario eventi</a></li>
            </ul>
          </aside>
        </div>
      </section>`;
}

export function buildFeaturedSection(todayIso) {
  const events = FEATURED_EVENT_CANDIDATES.map((event) => ({
    ...event,
    ...readEventDates(event.file),
  }));
  const winner = pickFeaturedEvent(events, todayIso);
  return winner ? renderEventBlock(winner) : renderFallbackBlock();
}

function updateHub() {
  const todayIso = new Date().toISOString().slice(0, 10);
  const section = buildFeaturedSection(todayIso);

  const hubPath = join(root, HUB_FILE);
  const html = readFileSync(hubPath, "utf8");
  const startIndex = html.indexOf(MARKER_START);
  const endIndex = html.indexOf(MARKER_END);
  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Featured event markers not found in ${HUB_FILE}`);
  }

  const updated =
    html.slice(0, startIndex + MARKER_START.length) +
    "\n" +
    section +
    "\n      " +
    html.slice(endIndex);

  writeFileSync(hubPath, updated, "utf8");
  console.log(`Featured event on ${HUB_FILE} refreshed for ${todayIso}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  updateHub();
}
