// =============================================================================
// SUITE COMPLETA DI TEST DI ACCURATEZZA — ilovemontefiascone.com
// Eseguire con: node scripts/algorithms.test.mjs
//
// Algoritmi testati:
//   1. pickFeaturedEvent        (select-featured-event.mjs)
//   2. getScenario              (js/main.js — reimplementato inline per Node)
//   3. isClusterCurrent / normalizePath (js/main.js — reimplementato inline)
//   4. toRelativeUrl            (js/main.js — reimplementato inline)
//   5. applyScenarioPriority    (logica DOM-free estratta)
//   6. weatherCache TTL         (logica estratta senza sessionStorage)
// =============================================================================

import { pickFeaturedEvent } from "./select-featured-event.mjs";

let total = 0;
let failures = 0;

function assert(label, actual, expected) {
  total++;
  const pass =
    JSON.stringify(actual) === JSON.stringify(expected);
  if (pass) {
    console.log(`  OK   ${label}`);
  } else {
    failures++;
    console.error(`  FAIL ${label}`);
    console.error(`       expected: ${JSON.stringify(expected)}`);
    console.error(`       got:      ${JSON.stringify(actual)}`);
  }
}

function section(title) {
  console.log(`\n── ${title} ──`);
}

// =============================================================================
// 1. pickFeaturedEvent
// =============================================================================
section("1. pickFeaturedEvent");

const events = [
  { id: "concerto-banda-rb-revue",     startDate: "2026-06-19", endDate: "2026-06-19" },
  { id: "cronoscalata",                startDate: "2026-06-19", endDate: "2026-06-21" },
  { id: "anno-domini-1074",            startDate: "2026-06-26", endDate: "2026-06-28" },
  { id: "festival-ecologia-integrale", startDate: "2026-07-02", endDate: "2026-07-05" },
  { id: "atb-festival",                startDate: "2026-07-09", endDate: "2026-07-12" },
  { id: "panorami-festival",           startDate: "2026-07-16", endDate: "2026-07-19" },
  { id: "festa-santa-margherita",      startDate: "2026-07-16", endDate: "2026-07-20" },
  { id: "est-film-festival",           startDate: "2026-07-20", endDate: "2026-07-26" },
  { id: "fiera-del-vino",             startDate: "2026-08-01", endDate: "2026-08-14" },
  { id: "est-lake-festival",          startDate: "2026-08-14", endDate: "2026-08-23" },
];

// 1a. Prima dell'inizio stagione → primo evento futuro
assert("before season: picks first future event",
  pickFeaturedEvent(events, "2026-06-01")?.id,
  "concerto-banda-rb-revue");

// 1b. Esattamente il giorno startDate → "in corso"
assert("exactly on startDate → in-progress",
  pickFeaturedEvent(events, "2026-06-19")?.id,
  "concerto-banda-rb-revue"); // cronologicamente primo tra i due il 19-06

// 1c. In pieno svolgimento cronoscalata (data intermedia)
assert("mid-event: cronoscalata day 2",
  pickFeaturedEvent(events, "2026-06-20")?.id,
  "cronoscalata");

// 1d. Esattamente ultimo giorno cronoscalata
assert("exactly on endDate of cronoscalata",
  pickFeaturedEvent(events, "2026-06-21")?.id,
  "cronoscalata");

// 1e. Gap tra eventi → prossimo futuro
assert("gap after cronoscalata → anno-domini-1074",
  pickFeaturedEvent(events, "2026-06-22")?.id,
  "anno-domini-1074");

// 1f. Gap after anno-domini → ecologia integrale
assert("gap after anno-domini → festival-ecologia-integrale",
  pickFeaturedEvent(events, "2026-06-29")?.id,
  "festival-ecologia-integrale");

// 1g. Giorno dopo fine ecologia → atb
assert("day after ecologia ends → atb-festival",
  pickFeaturedEvent(events, "2026-07-06")?.id,
  "atb-festival");

// 1h. Sovrapposizione panorami + santa margherita → primo alfabetico/cronologico
//     Entrambi iniziano il 16-07; panorami finisce il 19, margherita il 20.
//     La sort è per startDate, poi il primo dell'array wins.
assert("overlap panorami+margherita on 2026-07-17 → panorami (sort order)",
  pickFeaturedEvent(events, "2026-07-17")?.id,
  "panorami-festival");

// 1i. Il 20-07 panorami è finito, margherita ancora in corso; est-film inizia stesso giorno
//     in-progress: margherita (start 16) e est-film (start 20) → sort startDate → margherita
assert("2026-07-20: margherita still running, est-film starts → margherita (earlier start)",
  pickFeaturedEvent(events, "2026-07-20")?.id,
  "festa-santa-margherita");

// 1j. Dal 21-07: solo est-film in corso
assert("2026-07-21: only est-film-festival running",
  pickFeaturedEvent(events, "2026-07-21")?.id,
  "est-film-festival");

// 1k. Fiera del vino in corso
assert("2026-08-07: fiera-del-vino in progress",
  pickFeaturedEvent(events, "2026-08-07")?.id,
  "fiera-del-vino");

// 1l. Est-lake-festival (inizia stesso giorno che finisce fiera) → overlap
assert("2026-08-14: overlap fiera+est-lake → fiera (earlier start)",
  pickFeaturedEvent(events, "2026-08-14")?.id,
  "fiera-del-vino");

// 1m. Solo est-lake in corso
assert("2026-08-20: only est-lake-festival",
  pickFeaturedEvent(events, "2026-08-20")?.id,
  "est-lake-festival");

// 1n. Dopo la stagione → null (fallback)
assert("after last event → null (editorial fallback)",
  pickFeaturedEvent(events, "2026-09-01"),
  null);

// 1o. Lista vuota → null
assert("empty events list → null",
  pickFeaturedEvent([], "2026-07-01"),
  null);

// 1p. Evento single-day con endDate === startDate
const singleDay = [{ id: "one-day", startDate: "2026-10-15", endDate: "2026-10-15" }];
assert("single-day event: day before → future pick",
  pickFeaturedEvent(singleDay, "2026-10-14")?.id,
  "one-day");
assert("single-day event: exact day → in-progress",
  pickFeaturedEvent(singleDay, "2026-10-15")?.id,
  "one-day");
assert("single-day event: day after → null",
  pickFeaturedEvent(singleDay, "2026-10-16"),
  null);

// =============================================================================
// 2. getScenario (algoritmo meteo-contestuale, Node-reimplemented)
// =============================================================================
section("2. getScenario (Weather-to-Scenario routing)");

const RAIN_CODES  = new Set([51,53,55,56,57,61,63,65,66,67,80,81,82,95,96,99]);
const SUNNY_CODES = new Set([0, 1, 2]);

function getScenario(weatherCode, hour, dayOfWeek) {
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0;
  if (RAIN_CODES.has(weatherCode))                           return "indoor";
  if (SUNNY_CODES.has(weatherCode) && hour >= 7 && hour < 11)  return "walk";
  if (SUNNY_CODES.has(weatherCode) && hour >= 18 && hour < 21) return "sunset";
  if (isWeekend)                                             return "weekend";
  return "heritage";
}

// Rain overrides everything (also on Sunday morning)
assert("rain code 61 → indoor regardless of time",
  getScenario(61, 9, 0), "indoor");
assert("rain code 95 (thunderstorm) → indoor",
  getScenario(95, 19, 5), "indoor");
assert("rain code 82 (heavy showers) → indoor on weekday morning",
  getScenario(82, 8, 2), "indoor");

// Sunny walk window: 07:00–10:59 (inclusive)
assert("sunny code 0, hour 7 → walk",
  getScenario(0, 7, 1), "walk");
assert("sunny code 1, hour 10 → walk",
  getScenario(1, 10, 1), "walk");
assert("sunny code 2, hour 11 → NOT walk (boundary: hour=11 is ≥11)",
  getScenario(2, 11, 1), "heritage"); // weekday, no walk/sunset → heritage
assert("sunny code 0, hour 6 → NOT walk (too early)",
  getScenario(0, 6, 3), "heritage");

// Sunny sunset window: 18:00–20:59
assert("sunny code 0, hour 18 → sunset",
  getScenario(0, 18, 2), "sunset");
assert("sunny code 1, hour 20 → sunset",
  getScenario(1, 20, 4), "sunset");
assert("sunny code 2, hour 21 → NOT sunset (boundary)",
  getScenario(2, 21, 2), "heritage");
assert("sunny code 0, hour 17 → NOT sunset",
  getScenario(0, 17, 2), "heritage");

// Weekend fallback (non-rain, non-walk, non-sunset)
assert("clear code 3, midday Saturday (day=6) → weekend",
  getScenario(3, 12, 6), "weekend");
assert("clear code 0, hour 15, Friday (day=5) → weekend",
  getScenario(0, 15, 5), "weekend");
assert("cloudy code 3, hour 15, Sunday (day=0) → weekend",
  getScenario(3, 15, 0), "weekend");

// Heritage: weekday, no rain, outside walk/sunset windows
assert("clear code 3, hour 14, Tuesday (day=2) → heritage",
  getScenario(3, 14, 2), "heritage");
assert("sunny code 0, midnight Monday → heritage (hour=0 outside windows)",
  getScenario(0, 0, 1), "heritage");
assert("code 45 (fog), midday Thursday → heritage (fog not rain, not sunny)",
  getScenario(45, 12, 4), "heritage");

// Priority: rain wins over weekend
assert("rain on Saturday → indoor (not weekend)",
  getScenario(63, 12, 6), "indoor");

// Walk beats weekend (Sunday morning sunny)
assert("sunny Sunday 9am → walk (not weekend)",
  getScenario(0, 9, 0), "walk");

// Sunset beats weekend (Saturday 19:00 sunny)
assert("sunny Saturday 19:00 → sunset (not weekend)",
  getScenario(1, 19, 6), "sunset");

// =============================================================================
// 3. normalizePath + isClusterCurrent
// =============================================================================
section("3. normalizePath + isClusterCurrent");

function normalizePath(path) {
  if (!path) return "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

assert("normalize '/cosa-vedere/' → '/cosa-vedere'",
  normalizePath("/cosa-vedere/"), "/cosa-vedere");
assert("normalize '/' stays '/'",
  normalizePath("/"), "/");
assert("normalize '/en/lake-bolsena' unchanged",
  normalizePath("/en/lake-bolsena"), "/en/lake-bolsena");
assert("normalize '' → '/'",
  normalizePath(""), "/");
assert("normalize null → '/'",
  normalizePath(null), "/");
assert("normalize '/en/' → '/en'",
  normalizePath("/en/"), "/en");

function isClusterCurrent(cluster, pathname) {
  return cluster.activePatterns.some((p) => pathname.includes(p));
}

const visitCluster = {
  activePatterns: ["/cosa-vedere", "/rocca-dei-papi", "/basilica", "/mappa", "/via-francigena"]
};
assert("isClusterCurrent: visit on /cosa-vedere → true",
  isClusterCurrent(visitCluster, "/cosa-vedere"), true);
assert("isClusterCurrent: visit on /vino → false",
  isClusterCurrent(visitCluster, "/vino"), false);
assert("isClusterCurrent: visit on /via-francigena-bolsena-montefiascone → true",
  isClusterCurrent(visitCluster, "/via-francigena-bolsena-montefiascone"), true);
assert("isClusterCurrent: empty pathname → false",
  isClusterCurrent(visitCluster, "/"), false);
assert("isClusterCurrent: partial match inside longer slug",
  isClusterCurrent(visitCluster, "/rocca-dei-papi-montefiascone"), true);

// =============================================================================
// 4. toRelativeUrl (Node-adapted: no window.location)
// =============================================================================
section("4. toRelativeUrl");

const ALLOWED_HOSTS = new Set([
  "www.ilovemontefiascone.com",
  "ilovemontefiascone.com",
  "localhost"
]);

function toRelativeUrl(url, currentHostname = "localhost") {
  if (!url) return "";
  try {
    const parsed = new URL(url, `https://${currentHostname}`);
    const allowedHosts = new Set([
      currentHostname,
      "www.ilovemontefiascone.com",
      "ilovemontefiascone.com"
    ]);
    if (!allowedHosts.has(parsed.hostname)) return "";

    let path = parsed.pathname || "/";
    if (path === "/") return "/";
    if (path === "/index.html") return "/";
    if (path.endsWith("/index.html")) return path.slice(0, -"index.html".length);
    if (path.endsWith(".html")) path = path.slice(0, -".html".length);
    return path;
  } catch {
    return url;
  }
}

assert("absolute URL same host → relative path",
  toRelativeUrl("https://www.ilovemontefiascone.com/cosa-vedere.html"),
  "/cosa-vedere");
assert("absolute URL /index.html → '/'",
  toRelativeUrl("https://ilovemontefiascone.com/index.html"),
  "/");
assert("absolute URL root '/' → '/'",
  toRelativeUrl("https://www.ilovemontefiascone.com/"),
  "/");
assert("absolute URL external host → ''",
  toRelativeUrl("https://evil.com/steal"),
  "");
assert("empty string → ''",
  toRelativeUrl(""),
  "");
assert("null → ''",
  toRelativeUrl(null),
  "");
// toRelativeUrl does NOT strip trailing slash for non-.html paths.
// The trailing slash removal is done separately by normalizePath (which
// operates on the browser's window.location, not here). The real output
// for /en/ is therefore "/en/" — consistent with the live URL mapping.
assert("relative path /en/ → '/en/' (no .html stripping, trailing slash kept)",
  toRelativeUrl("/en/", "localhost"),
  "/en/");
assert("path /de/reisefuehrer-montefiascone.html → stripped",
  toRelativeUrl("https://www.ilovemontefiascone.com/de/reisefuehrer-montefiascone.html"),
  "/de/reisefuehrer-montefiascone");
assert("/en/index.html → '/en/'",
  toRelativeUrl("https://www.ilovemontefiascone.com/en/index.html"),
  "/en/");

// =============================================================================
// 5. applyScenarioPriority logic (DOM-free)
// =============================================================================
section("5. applyScenarioPriority (priority-sorting logic)");

// Simulates the card-sorting logic without a real DOM
function sortCardsByScenario(cards, activeKey) {
  const matches = [];
  const rest = [];
  for (const card of cards) {
    const tokens = card.scenario.split(/\s+/).filter(Boolean);
    if (tokens.includes(activeKey)) {
      matches.push({ ...card, isPriority: true });
    } else {
      rest.push({ ...card, isPriority: false });
    }
  }
  return [...matches, ...rest];
}

const cards = [
  { id: "card-walk",    scenario: "walk heritage" },
  { id: "card-sunset",  scenario: "sunset weekend" },
  { id: "card-indoor",  scenario: "indoor" },
  { id: "card-weekend", scenario: "weekend walk" },
  { id: "card-generic", scenario: "heritage" },
];

const walkSorted = sortCardsByScenario(cards, "walk");
assert("walk scenario: walk-tagged cards first",
  walkSorted.slice(0, 2).map((c) => c.id).sort(),
  ["card-walk", "card-weekend"].sort());
assert("walk scenario: all walk-tagged have isPriority=true",
  walkSorted.filter((c) => c.isPriority).map((c) => c.id).sort(),
  ["card-walk", "card-weekend"].sort());
assert("walk scenario: non-walk cards at end",
  walkSorted.filter((c) => !c.isPriority).map((c) => c.id).sort(),
  ["card-generic", "card-indoor", "card-sunset"].sort());

const indoorSorted = sortCardsByScenario(cards, "indoor");
assert("indoor scenario: only indoor card is priority",
  indoorSorted.filter((c) => c.isPriority).map((c) => c.id),
  ["card-indoor"]);

const heritageSorted = sortCardsByScenario(cards, "heritage");
assert("heritage scenario: walk+heritage card is also priority",
  heritageSorted.filter((c) => c.isPriority).map((c) => c.id).sort(),
  ["card-generic", "card-walk"].sort());

const unknownSorted = sortCardsByScenario(cards, "unknown-key");
assert("unknown key: no cards are priority",
  unknownSorted.filter((c) => c.isPriority).length,
  0);

// =============================================================================
// 6. Weather cache TTL logic
// =============================================================================
section("6. Weather cache TTL (30-minute rule)");

function isCacheValid(timestamp, nowMs, ttlMs = 30 * 60 * 1000) {
  return (nowMs - timestamp) <= ttlMs;
}

const BASE = 1_700_000_000_000;
assert("cache: 0 ms old → valid",
  isCacheValid(BASE, BASE), true);
assert("cache: 1 min old → valid",
  isCacheValid(BASE, BASE + 60_000), true);
assert("cache: 29:59 old → valid",
  isCacheValid(BASE, BASE + 29 * 60_000 + 59_000), true);
assert("cache: exactly 30 min old → valid (boundary inclusive)",
  isCacheValid(BASE, BASE + 30 * 60_000), true);
assert("cache: 30 min + 1 ms → EXPIRED",
  isCacheValid(BASE, BASE + 30 * 60_000 + 1), false);
assert("cache: 1 hour old → EXPIRED",
  isCacheValid(BASE, BASE + 60 * 60_000), false);

// =============================================================================
// SUMMARY
// =============================================================================
console.log(`\n${"=".repeat(60)}`);
if (failures === 0) {
  console.log(`✅  Tutti i ${total} test sono passati.`);
} else {
  console.error(`❌  ${failures} test falliti su ${total}.`);
  process.exit(1);
}
