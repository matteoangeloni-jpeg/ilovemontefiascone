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

### Update 2026-07-22: the backlink baseline is in, and it changes the risk picture

A free-tier `seo-backlinks` pass found that **Common Crawl has never fetched a single page of this domain, in any snapshot from CC-MAIN-2024-18 through CC-MAIN-2026-25** — roughly two years of the web's largest open crawl index. This is an indirect signal (absence of evidence, not a direct backlink count — Moz and Bing Webmaster Tools both require account access this session doesn't have), but it is a strong one: it means the domain is very likely operating with **an essentially nonexistent external link profile**, not just a smaller one than IT competitors like siviaggia.it.

This matters for the "organic #1" goal directly: content depth and technical cleanliness (both genuinely strong here, see §3 and the 89/100 audit score) can win long-tail, low-competition queries — which is exactly why FR and EN are flagged as the best near-term opportunities above. But for competitive head-terms in the IT market especially, **zero backlinks is very likely the binding constraint**, not content quality. No amount of further on-page work fixes this; only outreach/backlink acquisition does. This is reflected in the KPI table (§5) and elevates backlink outreach from a "Phase 3 nice-to-have" to something worth starting to scope in parallel once Phase 1's cleanup items are done, even though FR content expansion remains the single highest-leverage *content* lever (see Pillar 1 below).

### Update 2026-07-22 (later the same day): the GSC baseline is in, and it confirms and sharpens two of the pillars above

A working `sc-domain:ilovemontefiascone.com` service account was found already provisioned (`~/.config/claude-seo/`) — the Phase 1 measurement gate is closed. 90-day baseline (2026-04-20 → 2026-07-19): **516 clicks, 12,737 impressions, 4.05% CTR, average position 7.9** site-wide. Broken down by language:

| Language | Clicks (90d) | Impressions | Avg. position |
|---|---|---|---|
| IT | 457 | 12,096 | 7.3 |
| EN | 55 | 1,493 | 15.1 |
| DE | 11 | 408 | **24.5** |
| FR | 1 | 92 | 15.3 |

Two things this confirms, one thing it adds:

1. **Confirms the EN opportunity is real but not yet capitalized.** EN gets meaningful impressions (1,493) but an average position of 15.1 (page 2) — there is real search volume finding these pages, and per the competitor analysis the genuine competition is weak, but rankings haven't caught up yet. This is the clearest "more of the same work should pay off" signal in the whole dataset.
2. **Confirms and sharpens the DE finding.** Position 24.5 (page 3) despite full 99-page parity with IT is a wide gap — wider than the "depth pass" framing in Pillar 3 originally assumed. This is not a light touch-up; treat the DE depth pass as higher-priority within Phase 3, not an afterthought.
3. **New finding: traffic is overwhelmingly event-driven, not general-guide-driven.** Every one of the top 10 queries by clicks is festival/event-specific ("fiera del vino montefiascone 2026," "san flaviano montefiascone," "montefiascone festa," "atb festival montefiascone," "panorami montefiascone 2026," "1074 montefiascone"...) — essentially no generic "cosa vedere"/"guida" queries appear in the top 20. The site's proven, working traffic engine is its seasonal event content, not its destination-guide content. This doesn't override the FR/lake-cluster priority (that's about opening a new, uncontested market), but it's a strong signal that **keeping the event calendar dated, accurate and expanded is protecting the site's single best-performing content type** — see the annual refresh item in CONTENT-CALENDAR.md, which should not be treated as routine maintenance but as the site's core revenue-equivalent content.

## 4. Strategic Pillars (12 months)

1. **Finish FR to full parity** — execute `docs/fr-parity-roadmap.md` clusters 5a–5e (Lake Bolsena, logistics, Via Francigena, minor events, surroundings) to take the public perimeter from 29 → 98 pages. This is the single highest-leverage *content* lever available: it is publishing into a market with essentially no dedicated competitor. **Correction from a 2026-07-22 QA pass:** the ~26 lake-cluster (5a) source pages are not lightly-flawed drafts awaiting a quick promotion pass — several checked in depth had entire sections (H1, hero paragraph, full FAQ) left in Italian behind French metadata/chrome, and internal links pointing to Italian-language pages instead of French ones. Treat every 5a–5e page as a **full rewrite from the Italian source**, comparable in effort to the wine/cuisine/event pages already completed in this engagement — not a find-and-replace QA pass. Pace accordingly; do not batch-promote without the same per-page scrutiny already proven to work.
2. **Close the measurement gap.** No GSC/GA4 data has been used in any audit to date (the backlink half of this gap is now closed — see the update above). Without a traffic/ranking baseline, "organic #1" cannot be verified or steered. This is Phase 1, non-negotiable.
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
| GSC connected & baseline captured | **Yes — service account already provisioned and verified (2026-07-22), `siteFullUser` on `sc-domain:ilovemontefiascone.com`** | maintain | — | — |
| Clicks / 90 days (GSC, by language, 2026-04-20 → 2026-07-19) | **IT 457 (pos 7.3) · EN 55 (pos 15.1) · DE 11 (pos 24.5) · FR 1 (pos 15.3)** · site total 516 clicks / 12,737 impressions / 4.05% CTR | +15% IT, +50% EN, +100% DE | +30% IT, +150% EN/DE, FR baseline set once published | reassess vs a full year of data |
| Average position (proxy for "top-10", per language) | IT 7.3 (page-1 range) · EN 15.1 · DE 24.5 · FR 15.3 — **only IT is currently competitive on average position; DE's page-count parity has not translated into ranking parity** | IT <7, EN <12 | DE <15 (post depth-pass) | all four languages page-1 average |
| AI citation frequency (Overviews/ChatGPT/Perplexity) | Untracked | manual spot-check baseline | tracked via seo-geo | tracked via seo-geo |
| Referring domains (backlinks) | **~0 — Common Crawl has never fetched this domain in any snapshot from CC-MAIN-2024-18 through CC-MAIN-2026-25** (checked 2026-07-22; indirect but strong signal of an essentially nonexistent external link profile). Moz/Bing require accounts, not checked. 6 candidate outreach targets identified and partly verified same day, see IMPLEMENTATION-ROADMAP.md Phase 3. | first confirmed backlinks (outreach) | +outreach to visitbolsena.it / tusciaturismo.com / viefrancigene.org-type sites | tracked growth |

## 6. Related Documents

- `COMPETITOR-ANALYSIS.md` — per-language competitor detail and content gaps
- `SITE-STRUCTURE.md` — current architecture, URL hierarchy, schema map
- `CONTENT-CALENDAR.md` — phased content plan tied to the FR parity roadmap and cross-language depth gaps
- `IMPLEMENTATION-ROADMAP.md` — 4-phase execution plan with dependencies
- `docs/fr-parity-roadmap.md` — the detailed, already-in-progress execution plan for FR (P0 complete, P1 in progress)
- `FULL-AUDIT-REPORT.md` / `ACTION-PLAN.md` (2026-07-18) — prior technical audit; all action items confirmed resolved as of this plan
