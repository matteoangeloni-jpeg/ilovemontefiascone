// Deterministic date-simulation test for the featured-event rotation rule.
// Run with: node scripts/select-featured-event.test.mjs
//
// This does not hit the filesystem or any page's JSON-LD: it feeds
// pickFeaturedEvent() a fixed set of {id, startDate, endDate} rows (the same
// shape as the manifest embedded on /eventi) and checks the outcome against
// each scenario below. No dates here are invented for production use - they
// mirror the real 2026 calendar already published on the site, only reused
// to exercise the selection rule.

import { pickFeaturedEvent } from "./select-featured-event.mjs";

const events = [
  { id: "concerto-banda-rb-revue", startDate: "2026-06-19", endDate: "2026-06-19" },
  { id: "cronoscalata", startDate: "2026-06-19", endDate: "2026-06-21" },
  { id: "anno-domini-1074", startDate: "2026-06-26", endDate: "2026-06-28" },
  { id: "festival-ecologia-integrale", startDate: "2026-07-02", endDate: "2026-07-05" },
  { id: "atb-festival", startDate: "2026-07-09", endDate: "2026-07-12" },
  { id: "panorami-festival", startDate: "2026-07-16", endDate: "2026-07-19" },
  { id: "festa-santa-margherita", startDate: "2026-07-16", endDate: "2026-07-20" },
  { id: "est-film-festival", startDate: "2026-07-20", endDate: "2026-07-26" },
  { id: "fiera-del-vino", startDate: "2026-08-01", endDate: "2026-08-14" },
  { id: "est-lake-festival", startDate: "2026-08-14", endDate: "2026-08-23" },
];

const scenarios = [
  {
    name: "before the first event",
    today: "2026-06-01",
    expected: "concerto-banda-rb-revue",
  },
  {
    name: "during an event (Cronoscalata, in progress)",
    today: "2026-06-20",
    expected: "cronoscalata",
  },
  {
    name: "in the gap between two events (no event in progress)",
    today: "2026-06-29",
    expected: "festival-ecologia-integrale",
  },
  {
    name: "the day right after Ecologia Integrale ends",
    today: "2026-07-06",
    expected: "atb-festival",
  },
  {
    name: "when Santa Margherita is in progress after Panorami",
    today: "2026-07-20",
    expected: "festa-santa-margherita",
  },
  {
    name: "after the last known event (fallback expected)",
    today: "2026-09-01",
    expected: null,
  },
];

let failures = 0;

for (const scenario of scenarios) {
  const winner = pickFeaturedEvent(events, scenario.today);
  const winnerId = winner ? winner.id : null;
  const ok = winnerId === scenario.expected;

  // Guard against the exact regression this task is fixing: a past event
  // (endDate before today) must never be picked.
  const isPast = winner ? winner.endDate < scenario.today : false;

  if (!ok || isPast) {
    failures += 1;
    console.error(
      `FAIL [${scenario.name}] today=${scenario.today} expected=${scenario.expected} got=${winnerId}${isPast ? " (PAST EVENT PICKED)" : ""}`
    );
  } else {
    console.log(`OK   [${scenario.name}] today=${scenario.today} -> ${winnerId ?? "fallback"}`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} scenario(s) failed.`);
  process.exit(1);
}

console.log(`\nAll ${scenarios.length} scenarios passed.`);
