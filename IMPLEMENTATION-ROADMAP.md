# Implementation Roadmap — ilovemontefiascone.com

Prepared: 2026-07-22
This roadmap is adapted from the standard 4-phase SEO-plan template, but reflects where this site actually is: most of the standard "Phase 1: Foundation" work (schema, core pages, transparency/E-E-A-T infrastructure) is already built. Phase 1 here is therefore lighter and measurement-focused rather than build-focused.

## Phase 1 — Measurement & Cleanup (Weeks 1–4)

Nothing in this phase is content work. The goal is to stop flying blind and close small residual debt before scaling FR publication.

1. ~~Connect Google Search Console and GA4~~ **Done 2026-07-22.** A service account (`~/.config/claude-seo/`) was already provisioned with `siteFullUser` access on `sc-domain:ilovemontefiascone.com`; 90-day baseline pulled (516 clicks / 12,737 impressions site-wide, broken down by language — see SEO-STRATEGY.md §4 update). GA4 not yet checked — same credential file may cover it (`ga4_property_id` field in `google-api.json`); verify and pull a GA4 baseline next.
2. ~~Run a backlink baseline~~ **Done 2026-07-22** via `seo-backlinks` (Common Crawl): domain has essentially zero external backlink profile — see SEO-STRATEGY.md §4.
3. **Submit updated sitemaps** to GSC for all four locales, and explicitly request indexing for the pages published in this engagement (FR `panoramas-du-festival-de-montefiascone`, `orchestre-dharmonie-rb-revue-montefiascone`, the four author bio pages, and the four new DE pages added in `ca7ac83`).
4. **Resolve `css/de-premium.css`**: either wire it into the DE templates it was written for, or delete it. Zero SEO impact either way, but it's a 5-minute decision sitting open.
5. **Confirm `de/sitemap.xml` vs `sitemap-de.xml`**: the two files are near-duplicates and `de/sitemap.xml` is not referenced from the sitemap index. Verify `robots.txt` doesn't also declare it as a second `Sitemap:` entry (which would create duplicate discovery paths); if it's a pure build artifact with no external reference, leave it — if referenced, deduplicate.
6. **Baseline the AI-citation metric**: manually spot-check "Montefiascone" and "Lake Bolsena" (+ FR/DE equivalents) in Google AI Overviews, ChatGPT, and Perplexity to establish a starting point before `llms.txt`'s effect can be measured.

Gate to exit Phase 1: GSC/GA4 baseline captured for at least IT and EN (the two highest-traffic-potential languages); backlink baseline captured; the two cleanup items resolved. **GSC baseline, backlink baseline, and both cleanup items done 2026-07-22 (commits `5874c8b`, plus this baseline pull). Remaining: GA4 verification, sitemap resubmission (item 3), AI-citation baseline (item 6).**

## Phase 2 — FR Expansion, Wave 1 (Weeks 5–12)

Executes `CONTENT-CALENDAR.md` Months 1–3: FR clusters 5a (Lake Bolsena, 26 candidate pages) and 5b (logistics). This is the highest-leverage work in the entire plan — publishing into a market with zero dedicated competition, per `COMPETITOR-ANALYSIS.md`. **Pace warning (2026-07-22):** a full-content severity check found every 5a source page needs a genuine rewrite, not light editing — see `CONTENT-CALENDAR.md`. "Weeks 5–12" is a ceiling for a dedicated effort, not an estimate that 26 pages fall out of a quick QA pass; do not compress the timeline by lowering the per-page bar.

- Each page follows the existing gate: French QA → parity ≥0.9 → author + FAQ → `FR_PUBLIC_FILES` → sitemap/llms.txt regeneration (already a working, proven process from this engagement — do not redesign it).
- After each cluster ships, request indexing in GSC (now connected per Phase 1) rather than waiting for organic discovery.
- Track FR indexed-page count and FR organic sessions (once baseline exists) as the two leading indicators for this phase.

## Phase 3 — FR Expansion Wave 2 + Authority Building (Weeks 13–24)

- Finish FR clusters 5c (Via Francigena) and 5d remainder per the content calendar.
- Ship FR nav parity (`NAV_CONFIG` fr block) once cluster 5a+5b give it real content to point to.
- **Outreach**: `viefrancigene.org/fr` is a confirmed, on-topic, non-competing site (official pilgrimage-route portal, not a destination guide) — a natural first backlink/partnership target for the FR market specifically. Pursue it once the Via Francigena FR cluster (5c) is live, so there's a genuinely relevant page to link to.
- Begin the DE depth pass against `bolsenasee-info.de` (one cluster per quarter, per the content calendar) — start this only after FR wave 1 is fully shipped, not in parallel, to avoid splitting focus on the highest-leverage work.
- Start the GEO/AI-citation tracking loop (`seo-geo`) now that a Phase-1 baseline exists — measure movement, not just presence.

## Phase 4 — Full FR Parity + Consolidation (Months 7–12)

- Complete FR cluster 5e (surroundings/day trips) — FR reaches 98/98 page parity with IT/EN/DE.
- Close remaining FR gaps: privacy/cookie pages, any residual FAQ schema/visible-content mismatches (roadmap P0.5, 13 pages identified).
- Run a full `seo-drift` baseline capture now that all four languages are at parity, so future regressions (a repeat of the mojibake/umlaut issue fixed in `f042e21`, or hreflang drift like the wine-cluster issue fixed earlier) are caught automatically instead of requiring a manual full re-audit.
- Re-run the EN opportunity check from the content calendar — with FR now at parity and DE depth improved, confirm EN hasn't drifted stale in the meantime (it has no direct competitor forcing attention to it, so it is the language most likely to be silently neglected).
- Full-year review against the KPI table in `SEO-STRATEGY.md`: by this point real traffic/ranking data should exist for all four languages, replacing every "TBD" cell in that table with an actual number.

## Dependency Chain (do not reorder)

```
Phase 1 (GSC/GA4 + backlink baseline)
   │
   ├──► Phase 2 (FR 5a + 5b)  ─────┐
   │                                │
   └──► (cleanup items, parallel)   │
                                     ▼
                          Phase 3 (FR 5c + 5d, DE depth, outreach)
                                     │
                                     ▼
                          Phase 4 (FR 5e, full parity, drift baseline)
```

FR expansion (Phases 2–4) is intentionally sequential, not parallel across clusters — the gated QA process is the bottleneck by design (it's what makes the FR content trustworthy and therefore actually competitive), and rushing it would undermine the exact quality advantage identified in the competitor analysis.

## Risk Notes

- **Measurement risk (highest):** every KPI target in `SEO-STRATEGY.md` beyond page count is currently unverifiable. Phase 1 is a hard gate, not a formality — skipping it means Phase 2–4 progress cannot be distinguished from noise.
- **FR quality risk:** the roadmap's own documentation (`docs/fr-full-editorial-inventory.md`) records that an earlier automated mass-normalization pass across all 98 FR pages produced unpublishable output (mixed-language fragments, mojibake, malformed tokens). The manual cluster-by-cluster gate exists specifically because of that failure — do not revert to automation-only translation for remaining clusters.
- **DE/EN neglect risk:** because FR is the loudest priority, DE depth and EN freshness have no natural forcing function. The content calendar's quarterly DE review and periodic EN staleness check exist specifically to counter this.
