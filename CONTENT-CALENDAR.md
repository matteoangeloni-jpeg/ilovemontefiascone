# Content Calendar — ilovemontefiascone.com

Prepared: 2026-07-22
Primary driver: `docs/fr-parity-roadmap.md` (FR expansion, already scoped cluster-by-cluster). This calendar sequences that roadmap against the competitive gaps found in `COMPETITOR-ANALYSIS.md` and adds cross-language maintenance cadence.

## Guiding Principle

Every FR page promoted from source-only to published must clear the same gate already in use (see `docs/fr-full-editorial-inventory.md`): authentic French QA (no Italian fragments, no mojibake, no malformed tokens) → word-count parity ≥0.9 vs the IT original → author schema → visible FAQ matching any FAQPage schema → added to `FR_PUBLIC_FILES` → sitemap-fr.xml + llms.txt regenerated. Do not shortcut this for speed — the FR opportunity's entire value (§ FR takeaway in COMPETITOR-ANALYSIS.md) rests on quality, since it is a green-field market with no competitor to hide behind.

## Months 1–3: FR Cluster 5a + 5b (Lake Bolsena + Logistics)

This is the single highest-priority content block in the whole plan — the market with confirmed zero dedicated competition.

- **5a. Lake Bolsena cluster (26 candidate pages confirmed on disk):** villages around the lake, beaches, cycling routes, hiking, seasonal views (autumn/spring), the lake-in-2-days itinerary. This is the topic French searchers actually use ("lac de Bolsena" has more standalone search interest than "Montefiascone" per the SERP research already done). **Effort correction (2026-07-22 QA):** every one of the 26 source files checked contains Italian text — in the worst spot-checked case, the entire H1/hero/body/FAQ was Italian behind French metadata alone. Budget each page as a full rewrite from the Italian original (same effort as the wine/cuisine/event pages already shipped in this engagement), not a light QA pass — a naive "20 pages in month 1" pace will produce exactly the unpublishable output `docs/fr-full-editorial-inventory.md` already warns about from an earlier automated attempt.
- **5b. Logistics cluster:** `comment-se-rendre` ×4 (from Rome, Orvieto, Florence, Viterbo), parking, where to sleep/eat, car-free Montefiascone, tourist info. These are transactional pages — lower content risk, faster to QA, and they unblock internal linking from the FR homepage's "Planifier votre visite" section, which currently links to only a handful of pages.

## Months 3–5: FR Cluster 5c + remaining 5d

- **5c. Via Francigena (3 pages):** disproportionately relevant for the French audience (pilgrimage route heritage); also the natural backlink bridge to `viefrancigene.org/fr`, a legitimate outreach target already identified.
- **5d. Minor/seasonal events — remainder:** `panoramas-du-festival` and `orchestre-dharmonie-rb-revue` are already published (this session); apply the same treatment to any other seasonal event pages still source-only, keeping the Estate calendar pattern (dated, sourced from the Comune's official poster) intact — this dated-freshness signal is a real differentiator (see COMPETITOR-ANALYSIS.md, no competitor found had comparably fresh, sourced event data).

## Months 5–7: FR Cluster 5e + FR nav parity

- **5e. Surroundings and day trips** (Civita di Bagnoregio, Bomarzo, Viterbo, Caprarola, Villa Lante, Tuscania, thermal baths). Completes the 98-page FR footprint.
- Ship the FR `NAV_CONFIG` block in `js/main.js` (P0.4) once the perimeter is large enough that dynamic nav clusters have real content to point to in every category — doing this too early just exposes empty/thin clusters.
- Add FR privacy/cookie pages and confirm footer links (P2 gap, low effort, close it here rather than let it linger).

## Ongoing / Cross-Language: DE Depth Pass

Triggered by the one genuine head-to-head competitor found (`bolsenasee-info.de`, see COMPETITOR-ANALYSIS.md). Not new pages — a depth review of the existing DE `lake` cluster (`Bolsenasee`, `Borghi del lago`, beaches, villages) against that competitor's equivalent pages, adding whatever specific, verifiable detail (opening times caveats, village-by-village practical notes) it has that this site doesn't. Schedule: one cluster review per quarter, starting once FR cluster 5a is live (don't run both at once — FR is higher priority).

## Ongoing / Cross-Language: EN Opportunity Push

Since EN has the weakest genuine competition (§ EN takeaway, COMPETITOR-ANALYSIS.md), this is the lowest-effort, highest-relative-yield maintenance lane: no new pages needed, but every time an IT or DE page gets a content refresh, verify the EN equivalent isn't lagging (the FR parity work in this engagement found EN pages were sometimes 1-line-diff stale vs IT — the same drift risk applies going forward).

## Annual Recurring: Seasonal Event Refresh

The "Estate 2026" pattern (`eventi-estate-montefiascone-2026` / `evenements-dete-a-montefiascone-2026` / etc.) is date-bound and must be refreshed **every year** in all four languages once the following year's official Comune poster is published (historically ~May). Treat this as a fixed annual task, not ad hoc — it is the site's single strongest freshness signal and should never be allowed to go stale into the following season.

## What NOT to prioritize right now

- New IT content: IT already has the deepest single-destination coverage of any competitor found; further IT expansion has the lowest marginal value of the four languages until FR reaches parity.
- Video/podcast content (present in the generic Publisher template): no evidence this format fits the current editorial model or resources; not recommended until the core 4-language text parity goal is met.
- Additional schema types beyond what's already in use: current schema coverage already exceeds every competitor found; effort is better spent on the FAQ schema/visible-content mismatches already identified (13 FR pages, roadmap P0.5) than on adding new types.
