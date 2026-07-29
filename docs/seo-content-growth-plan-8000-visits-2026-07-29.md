# SEO content growth plan — target 8,000 organic visits/month

Data source: Google Search Console query/page export via API  
Window analyzed: 2026-04-28 → 2026-07-26  
Goal: grow existing pages first, then create/fill only content gaps with clear query demand.

## Current baseline

Latest 28 complete GSC days available in the previous audit:

- 589 clicks
- 12,759 impressions
- CTR 4.62%
- Average position 7.99

The target of 8,000 visits/month is ambitious from this baseline. It requires roughly:

- a larger query footprint, especially non-event evergreen pages;
- higher CTR on pages already ranking in positions 1-8;
- more stable traffic after event peaks;
- stronger internal routing from pages that currently capture the wrong intent.

## Immediate finding

The biggest fast-win is not a technical fix. It is intent alignment.

GSC shows that the page `/basilica-san-flaviano-montefiascone` receives many impressions for broad queries such as `montefiascone cosa vedere`, while the intended hub `/cosa-vedere` and the complete guide receive fewer impressions/clicks. This creates weak CTR and muddled intent.

## Sprint 1 changes applied

### `/cosa-vedere`

Target queries:

- `montefiascone cosa vedere`
- `cosa vedere a montefiascone`
- `cosa vedere a montefiascone in un giorno`
- `montefiascone centro storico`

Changes:

- Rewritten title and meta description around `cosa vedere a Montefiascone`, `mappa`, `itinerario`, and `in un giorno`.
- Added an answer-first block listing the main visitor route: Rocca dei Papi, Santa Margherita, San Flaviano, centro storico, belvederi, Via Francigena and wine.
- Added stronger link to the complete guide.

### `/cosa-vedere-montefiascone-guida-completa`

Target queries:

- `cosa vedere a Montefiascone`
- `Montefiascone guida completa`
- `Montefiascone itinerario`

Changes:

- Rewritten title/meta around complete guide and itinerary.
- Added direct answer paragraph near the hero to help both traditional snippets and AI extraction.

### `/basilica-san-flaviano-montefiascone`

Target queries:

- `san flaviano montefiascone`
- `chiesa san flaviano montefiascone`
- `basilica di san flaviano`
- `chiesa di san flaviano`

Changes:

- Rewritten title/meta to focus San Flaviano, basilica, chiesa and visita.
- Reframed broad `cosa vedere` intent toward `/cosa-vedere`, reducing cannibalization and clarifying that this page is the specialist monument page.

### `/cattedrale-santa-margherita-montefiascone`

Target queries:

- `santa margherita montefiascone`
- `cattedrale montefiascone`
- `duomo montefiascone`
- `santa margherita montefiascone orari messe`

Changes:

- Rewritten title/meta around cattedrale, Duomo, cupola and visita.
- Expanded copy to mention orari/messe as something to verify, without inventing live schedules.

### `/eventi`

Target queries:

- `eventi Montefiascone`
- `Fiera del Vino Montefiascone 2026`
- `festa della birra Montefiascone`
- `programma Fiera del Vino Montefiascone 2026`

Changes:

- Rewritten title/meta for 2026 event searches: Fiera del Vino, festa della birra, Santa Margherita, festival, calendario and programma.

### `/atb-festival-montefiascone`

Target queries:

- `ATB Festival Montefiascone 2026`
- `festa della birra Montefiascone 2026`
- `Tuscia Birra 2026`

Changes:

- Rewritten title/meta around festa della birra and Tuscia Birra.
- Added a section explaining why ATB Festival is the relevant page for beer-festival searches.

## Next growth backlog

Status on 2026-07-29 before publication: Priority A has now been implemented on the existing pages, and a limited Priority B pass has been applied to the strongest multilingual equivalents. Priority C remains intentionally gated by future GSC data, because the plan explicitly requires repeated impressions and clear mismatch before creating new pages.

### Priority A — existing pages with ranking signal

1. `/festa-santa-margherita-montefiascone`
   - DONE: added post-event evergreen guidance, tradition/patrona context, what normally matters during the feast, and preparation advice for future editions.

2. `/come-arrivare-a-montefiascone`
   - DONE: strengthened query cluster `montefiascone indicazioni stradali`, `come arrivare`, `dove si trova`; added answer-first guidance, transport logic, city table and route links/snippets for Rome, Viterbo, Orvieto and Florence.

3. `/dove-dormire-a-montefiascone`
   - DONE: strengthened commercial-intent copy around areas, visitor types, centro storico vs lake and auto-based stays, without inventing hotel endorsements.

4. `/dove-mangiare-a-montefiascone`
   - DONE: added area-based guidance, typical-food intent, restaurant/trattoria/enoteca framing and booking advice, without ranking unverified restaurants.

5. `/lago-di-bolsena-cosa-vedere`
   - DONE: added answer-first block and a comparison table for Montefiascone as base vs Bolsena, Marta and Capodimonte.

### Priority B — multilingual expansion of winners

DONE as a first publication-ready pass: expanded the strongest English/French lake and things-to-see equivalents with answer-first blocks and clearer base/intent positioning. German already had mature compact intent blocks for the same themes and was kept stable except for build/sitemap regeneration.

### Priority C — new content only after existing-page lift

Not executed by design before publication: do not create pages randomly. New pages should come from GSC query clusters with:

- repeated impressions;
- position 8-25;
- clear mismatch with an existing page;
- local/travel intent.

Candidate future topics:

- `Montefiascone oggi` / `eventi oggi` as a controlled calendar/seasonal page.
- `Montefiascone mappa` as stronger map + parking + viewpoints page.
- `Montefiascone in mezza giornata` if GSC shows enough itinerary demand.

## Measurement plan

Check GSC weekly:

1. Page CTR for `/cosa-vedere`, `/cosa-vedere-montefiascone-guida-completa`, `/basilica-san-flaviano-montefiascone`.
2. Query CTR for `montefiascone cosa vedere` and `cosa vedere a montefiascone`.
3. Event query traffic after Fiera del Vino peak.
4. Indexing status for the 7 discovery backlog URLs from the coverage export analysis.

Success markers over 30-60 days:

- `montefiascone cosa vedere` CTR moves from sub-1% toward at least 3-5%.
- `/cosa-vedere` gains impressions relative to San Flaviano for broad “cosa vedere” queries.
- Event traffic becomes less dependent on a single patronal/event spike.
- At least one commercial-intent page (`dove dormire`, `dove mangiare`, `come arrivare`) enters top 10 for its core phrase.
