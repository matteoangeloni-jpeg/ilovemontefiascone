# Sprint B - Practical Evergreen EN Guides Report

Date: 2026-06-21  
Branch: `feature/en-practical-evergreen-guides-sprint-b`  
Base branch: `main`  
Base commit expected: `ac81123 Add high-value English travel guides`

## Scope

Sprint B adds a controlled set of practical, evergreen English travel guides for international visitors planning Montefiascone, Lake Bolsena and Tuscia.

The sprint avoids fragile data such as prices, exact opening hours, transport frequencies, operator availability, annual event details and date-specific claims.

## English Pages Before And After

- English pages before sprint: 60.
- New English pages created: 9.
- English pages after sprint: 69.
- URL format: clean public URLs without `.html`.

## New English Pages

| Cluster | Clean URL | Italian base |
| --- | --- | --- |
| Practical travel | `https://www.ilovemontefiascone.com/en/how-many-days-in-montefiascone` | No exact IT equivalent. |
| Practical travel | `https://www.ilovemontefiascone.com/en/where-to-stay-montefiascone-vs-bolsena-viterbo` | No exact IT equivalent. |
| Lake Bolsena | `https://www.ilovemontefiascone.com/en/where-to-stay-around-lake-bolsena` | No exact IT equivalent. |
| Seasons | `https://www.ilovemontefiascone.com/en/spring-in-montefiascone-lake-bolsena` | `/montefiascone-in-primavera` |
| Seasons | `https://www.ilovemontefiascone.com/en/autumn-in-montefiascone-lake-bolsena` | `/montefiascone-in-autunno-vendemmia` |
| Lake Bolsena / slow travel | `https://www.ilovemontefiascone.com/en/trekking-lake-bolsena` | `/trekking-lago-di-bolsena` |
| Heritage | `https://www.ilovemontefiascone.com/en/minor-churches-historic-monuments-montefiascone` | `/monumenti-minori-chiese-storiche-montefiascone` |
| Food and wine | `https://www.ilovemontefiascone.com/en/lake-fish-lake-bolsena` | `/pesce-di-lago-lago-di-bolsena` |
| Lake Bolsena / couples | `https://www.ilovemontefiascone.com/en/romantic-weekend-lake-bolsena` | `/weekend-romantico-lago-di-bolsena` |

## Italian Pages Updated

The following Italian pages were updated only for reciprocal English discovery signals:

- `montefiascone-in-primavera.html`
- `montefiascone-in-autunno-vendemmia.html`
- `trekking-lago-di-bolsena.html`
- `monumenti-minori-chiese-storiche-montefiascone.html`
- `pesce-di-lago-lago-di-bolsena.html`
- `weekend-romantico-lago-di-bolsena.html`

No Italian editorial rewrites were performed.

## Standalone English Pages

The following pages were created without an Italian hreflang because no exact Italian equivalent exists and reusing a broader Italian page would create ambiguous reciprocal signals:

- `https://www.ilovemontefiascone.com/en/how-many-days-in-montefiascone`
- `https://www.ilovemontefiascone.com/en/where-to-stay-montefiascone-vs-bolsena-viterbo`
- `https://www.ilovemontefiascone.com/en/where-to-stay-around-lake-bolsena`

These pages use self-referential `en` and `x-default` alternates.

## Cluster Strengthened

- Practical travel: length of stay, base comparison, accommodation-area decisions.
- Lake Bolsena: where to stay, walking, fish, romantic weekend.
- Family and slow travel: spring planning, lake stays, easy walks.
- Seasons: spring and autumn pages without fixed-date claims.
- Tuscia/day trips: stronger links from nearby-destination and thermal/day-trip hubs.
- Food and wine: lake fish connected to typical food, wine and where-to-eat pages.

## Internal Linking

Internal links were added from:

- English homepage.
- `where-to-stay-in-montefiascone`.
- `lake-bolsena`.
- `best-time-to-visit-montefiascone`.
- `things-to-do-near-montefiascone`.
- `montefiascone-with-kids`.
- `slow-travel-lake-bolsena`.
- `lake-bolsena-in-two-days`.
- `typical-food-montefiascone`.

All added links use clean URLs and natural anchor text.

## Sitemap And LLM Updates

- `sitemap-en.xml`: updated from 60 to 69 clean URLs.
- `sitemap-it.xml`: remains 89 clean URLs; six Italian entries gained English alternates.
- `sitemap.xml`: unchanged sitemap index.
- `llms.txt`: updated with selected practical English guides.
- No `sitemap-de.xml` created.

## QA Summary

| Check | Result |
| --- | --- |
| New pages created | 9 |
| English page count | 69 |
| Italian page count | 89 |
| Clean canonical URLs | Pass |
| Clean hreflang URLs | Pass |
| Clean `og:url` | Pass |
| JSON-LD parse | Pass |
| Visible FAQ where `FAQPage` exists | Pass |
| Sitemap EN clean | Pass |
| Sitemap IT unchanged count | Pass |
| German section excluded | Pass |
| No `.html` in SEO signals | Pass |
| No `pages.dev` or `github.io` | Pass |
| Build output excludes internal files | Pass |

## Risks Avoided

- No exact prices.
- No opening-hour claims.
- No transport-frequency claims.
- No accommodation availability claims.
- No operator-specific recommendations.
- No event-date or programme claims.
- No mass programmatic city pages.

## Residual Issues

- Some older English pages still contain legacy wording about variable services and older footer structures; they were not rewritten in this sprint.
- The three standalone English pages should receive exact Italian equivalents in a future sprint if full multilingual parity becomes a priority.

## Not Done

- No German publication.
- No Cloudflare changes.
- No DNS changes.
- No redirect changes.
- No Search Console work.
- No Analytics work.
- No AdSense work.
- No mass programmatic expansion.

## Readiness

Sprint B is ready for QA and commit if automated checks and `npm run build:cloudflare` pass with zero P0/P1 issues.
