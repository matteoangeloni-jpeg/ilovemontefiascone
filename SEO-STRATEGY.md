# SEO Strategy — ilovemontefiascone.com

Prepared: 2026-07-22
Planning horizon: 12 months
Goal stated by owner: **organic #1 positioning** for Montefiascone / Lake Bolsena travel queries, across all four published languages.

## 1. Executive Summary

ilovemontefiascone.com is an independent, multilingual (IT/EN/DE/FR) editorial travel guide covering Montefiascone, Lake Bolsena and the wider Tuscia region of northern Lazio. It is not affiliated with the municipality, carries no e-commerce or lead-gen funnel, and monetizes (if at all) purely on authority and traffic — its business model is closest to a **niche destination-guide publisher**.

Current technical baseline (site audit dated 2026-07-18, re-verified 2026-07-22): **89/100 SEO Health Score**, with the five findings from that audit's `ACTION-PLAN.md` (author-page sitemap coverage, wine-cluster hreflang reciprocity, missing DE schema, stale `llms.txt`, redirect hops) **all confirmed resolved** as of this plan. IT, EN and DE now each publish 99 pages with page-count parity; FR publishes 29 of a planned 98-page footprint under a deliberate, gated partial-relaunch strategy (see `docs/fr-parity-roadmap.md`).

The strategic picture is unusual for a plan of this type: **most of "Phase 1: Foundation" work that the standard SEO-plan process assumes is missing is already done** — schema is dense and mostly consistent (Article, FAQPage, BreadcrumbList, TouristDestination, MusicEvent, CollectionPage, ItemList, WebSite across 60+ page/type combinations checked), `llms.txt` exists for AI/GEO crawlers, author E-E-A-T pages exist in all four languages, and hub-and-spoke internal linking is implemented via a shared `NAV_CONFIG` in `js/main.js`. The real open work is concentrated in two places: **(a) finishing FR to full parity**, and **(b) building the measurement and authority layer** (GSC/GA4 connection, backlinks, AI-citation tracking) that no amount of on-page work can substitute for.

## 2. Business & Audience Discovery

- **What it is:** independent editorial travel guide, single destination (Montefiascone) with a secondary geography (Lake Bolsena, Tuscia).
- **What it is not:** not a local business (no bookings, no listings sold), not e-commerce, not a SaaS product, not a breaking-news publisher (no time-sensitive ad-revenue model detected).
- **Audience:** international leisure travelers researching a lesser-known Lazio destination, segmented by home market:
  - **IT** — domestic Italian travelers, day-trippers from Rome/Viterbo, the site's home market and largest published footprint.
  - **EN** — international travelers researching "hidden gem near Rome" style content; weak dedicated competition (see §3).
  - **DE** — a genuinely active niche: German-speaking Lake Bolsena tourism has its own dedicated portal ecosystem (`bolsenasee-info.de`, `bolsenasee.org`) — evidence of real demand and a benchmark competitor.
  - **FR** — smallest published footprint today, but SERP research earlier in this engagement found **no dedicated French-language guide to Montefiascone at all** — the lowest-competition, highest-relative-opportunity market of the four.
- **Business type per skill taxonomy:** closest fit is **Publisher** (see `publisher.md` template), with a local-destination inflection. Applied selectively below — the "ad revenue / breaking news" parts of the template do not apply; the "E-E-A-T / author pages / topic hubs / schema" parts do, heavily.

## 3. Competitive Positioning (summary — full detail in COMPETITOR-ANALYSIS.md)

| Market | Competitive intensity | Site's relative position |
|---|---|---|
| IT | High — established travel media (siviaggia.it) and destination directories (paesionline.it, visittuscia.eu) | Must compete on depth and freshness, not raw authority |
| EN | Low genuine competition — dominated by aggregators (TripAdvisor, Expedia — both structurally excluded from real competition) and thin blog coverage | **Best near-term opportunity**: EN is under-contested |
| DE | Medium — one strong dedicated niche portal (`bolsenasee-info.de`) sets the bar for local depth | Site now has page-count parity (99) with IT/EN; must close a *depth* gap, not a *coverage* gap |
| FR | Lowest — no dedicated French guide found in SERP research | **Highest relative opportunity per page published**, but only 29/98 pages are live — opportunity is gated by the roadmap, not by competition |

## 4. Strategic Pillars (12 months)

1. **Finish FR to full parity** — execute `docs/fr-parity-roadmap.md` clusters 5a–5e (Lake Bolsena, logistics, Via Francigena, minor events, surroundings) to take the public perimeter from 29 → 98 pages. This is the single highest-leverage lever available: it is publishing into a market with essentially no dedicated competitor.
2. **Close the measurement gap.** No GSC/GA4/backlink data has been used in any audit to date. Without a real baseline, "organic #1" cannot be verified or steered. This is Phase 1, non-negotiable.
3. **Defend and extend DE depth** against `bolsenasee-info.de` — page count parity is achieved; the next win is content depth per page (see CONTENT-CALENDAR.md).
4. **Exploit the EN gap** — the weakest competitive field of the four languages; a moderate content push here has a disproportionately good effort/reward ratio.
5. **Consolidate the technical/E-E-A-T foundation that already exists** into a monitored, non-regressing baseline (schema coverage, hreflang reciprocity, sitemap accuracy) rather than re-auditing it from scratch each cycle — use `seo-drift` baselining going forward.
6. **Build the GEO/AI-citation layer** — `llms.txt` exists, which most competitors in this space do not have; turn that structural advantage into a tracked metric (AI Overviews / ChatGPT / Perplexity citation frequency for "Montefiascone" and "Lake Bolsena" queries).

## 5. KPI Targets

Traffic and ranking-position baselines are **not available** in this plan (no GSC/GA4/backlink API access has been used in any audit performed on this domain). Rather than presenting fabricated numbers, the table below sets baseline capture as an explicit Phase 1 deliverable and gives directional, verifiable targets for everything already measurable from the codebase and sitemaps.

| Metric | Baseline (today, verified) | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Indexed pages — FR | 29 | 55 (clusters 5a–5b) | 85 (clusters 5c–5d) | 98 (full parity) |
| Indexed pages — IT/EN/DE | 99 / 99 / 99 (parity achieved) | maintain | maintain + depth pass | maintain + depth pass |
| SEO Health Score (internal audit) | 89/100 | 90+ | 92+ | 95+ |
| Schema coverage (Article/FAQPage pages) | ~86 files w/ author schema (site-wide) | 100% of public Article pages | — | — |
| GSC connected & baseline captured | No | **Yes (Phase 1 gate)** | — | — |
| Organic sessions (IT/EN/DE/FR) | Unknown — TBD after GSC connection | baseline set | +X% vs 3mo baseline | +X% vs 3mo baseline |
| Top-10 rankings for "Montefiascone" + variants (per language) | Unknown — TBD after GSC connection | baseline set | tracked | tracked |
| AI citation frequency (Overviews/ChatGPT/Perplexity) | Untracked | manual spot-check baseline | tracked via seo-geo | tracked via seo-geo |
| Referring domains (backlinks) | Unknown — no backlink audit run | baseline via `seo-backlinks` | +outreach to viefrancigene.org-type sites | tracked growth |

## 6. Related Documents

- `COMPETITOR-ANALYSIS.md` — per-language competitor detail and content gaps
- `SITE-STRUCTURE.md` — current architecture, URL hierarchy, schema map
- `CONTENT-CALENDAR.md` — phased content plan tied to the FR parity roadmap and cross-language depth gaps
- `IMPLEMENTATION-ROADMAP.md` — 4-phase execution plan with dependencies
- `docs/fr-parity-roadmap.md` — the detailed, already-in-progress execution plan for FR (P0 complete, P1 in progress)
- `FULL-AUDIT-REPORT.md` / `ACTION-PLAN.md` (2026-07-18) — prior technical audit; all action items confirmed resolved as of this plan
