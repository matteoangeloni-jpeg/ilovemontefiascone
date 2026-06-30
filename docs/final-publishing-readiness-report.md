# Final Publishing Readiness Report

Updated: 2026-06-30  
Branch: `main`  
Scope: static repository `ilovemontefiascone.com`; `D:/ilovemontefiascone` excluded.

## Final Decision

**READY WITH IMAGE NOTES**

The 97/97/97 public perimeter is technically ready for controlled merge and deploy. No P0 image is missing. Publication is not blocked, but a post-launch photography programme is recommended because a limited set of hero images is reused across many distinct intents.

## Post-Merge Addendum

- Readiness commit `783e213` was merged cleanly into `main`.
- Merge commit: `8f2d2d6`.
- Post-merge build and full-corpus QA reconfirmed `97 IT / 97 EN / 97 DE`, 291 public pages and 4 technical pages.
- Sitemap and `llms.txt` counts remain `97 / 97 / 97`.
- Technical regressions found: 0.
- Responsive smoke test: 34/34 passes across 17 representative pages in mobile and desktop viewports.
- Final decision remains **READY WITH IMAGE NOTES**.
- Deploy was not executed. The next step is a controlled deploy from `main` followed by live verification.

## Final Counts

| Area | IT | EN | DE |
| --- | ---: | ---: | ---: |
| Source public corpus | 97 | 97 | 97 |
| Cloudflare build | 97 | 97 | 97 |
| Language sitemaps | 97 | 97 | 97 |
| `llms.txt` public links | 97 | 97 | 97 |

## Technical Release Gate

| Check | Result |
| --- | --- |
| Build `npm run build:cloudflare` | PASS |
| Broken internal links | 0 |
| Internal links containing `.html` | 0 |
| Invalid JSON-LD | 0 |
| Event nodes without `startDate` or `location` | 0 |
| Missing referenced images | 0 |
| Missing local assets (images, srcset, CSS, JS, manifest) | 0 |
| Incomplete social metadata | 0 |
| Canonical / `og:url` mismatches | 0 |
| FR hreflang | 0 |
| Mojibake / placeholders | 0 / 0 |
| Public DE pages below 220 words | 0 |
| `/fr/` and `sitemap-fr.xml` | absent |
| `/docs`, `/server.py`, `/README.md` in public build | absent |

## Aggregate Scores

| Area | Score / 5 |
| --- | ---: |
| SEO | 4.91 |
| GEO / citability | 4.81 |
| Content depth | 3.28 |
| Localization | 5.00 |
| Internal linking | 4.28 |

Automated readiness: **276 READY**, **15 REVIEW**, **0 BLOCKER**. REVIEW pages are non-blocking and mostly concise event or service pages with adequate structure.

## Micro-fixes Applied

- Corrected EN/DE event-calendar Open Graph and Twitter image paths to the existing `media/gallery/estate-2026-montefiascone.jpg` asset.
- Corrected EN/DE Banda R&B Revue hero, social and JSON-LD image paths to the existing official event poster assets.
- Added a mobile-only header grid and width guards for hero/grid content; desktop design is unchanged.
- Regenerated `css/style.min.css` from the readable CSS source.

## UI/UX Smoke Test

- 30 representative public pages tested at mobile and desktop sizes: 60 combinations.
- Covered homepages, events, calendars, Lake Bolsena, Via Francigena, wine, Tuscia day trips, logistics, long guides and event pages in IT/EN/DE.
- Horizontal overflow: 0.
- Header/footer present: 60/60.
- Language switcher with IT/EN/DE: 60/60.
- Mobile menu visible and desktop menu behavior coherent: 60/60.
- Critical above-the-fold image failures: 0; lazy images outside the viewport were excluded correctly.

## Strongest Clusters

1. Montefiascone guides and cultural attractions: complete entity coverage, practical sections and trilingual parity.
2. Lake Bolsena: broad coverage by villages, seasons, beaches, viewpoints and itineraries.
3. Via Francigena: stage-specific guides, packing and slow-mobility support.
4. Wine and food: Est! Est!! Est!!!, wineries, tastings, products and local cuisine have distinct search intents.
5. Events 2026: dedicated pages and valid Event structured data where dates and locations are supported.

## SERP / Competitor Mindset

| Cluster | Main target | Best site page | Competitive position | Remaining gap |
| --- | --- | --- | --- | --- |
| Montefiascone | cosa vedere a Montefiascone | `/cosa-vedere-montefiascone-guida-completa` | Broader practical and trilingual coverage than many single-page destination summaries. | Add more original monument photography and cite stable institutional sources where factual precision matters. |
| Lake Bolsena | Lago di Bolsena cosa vedere | `/lago-di-bolsena-cosa-vedere` | Strong hub-and-spoke depth across villages, seasons and activities. | Competes with institutional and specialist lake portals that have stronger destination authority and original lake imagery. |
| Via Francigena | Via Francigena Montefiascone | `/via-francigena-montefiascone-viterbo` | Practical trilingual planning and local base context. | Official route publishers provide measured route data; link to or cite them rather than duplicating volatile figures. |
| Wine | Est! Est!! Est!!! Montefiascone | `/est-est-est-montefiascone-vino-doc` | Connects the DOC, legend, food and winery visits. | Strengthen primary-source references to the production rules and producer-level original photography. |
| Events | eventi Montefiascone 2026 | `/eventi-estate-montefiascone-2026` | Structured calendar plus dedicated event pages. | Keep dates synchronized with organizers; event portals can outrank stale local pages through freshness. |
| Tuscia trips | gite da Montefiascone | `/cosa-vedere-dintorni-montefiascone-itinerario` | Differentiates Montefiascone as a base rather than a single stop. | Original destination photographs for Bomarzo, Caprarola, Tuscania, Viterbo and Villa Lante. |
| Weekend | weekend Lago di Bolsena | `/weekend-romantico-lago-di-bolsena` and `/weekend-a-montefiascone` | Multiple intents for couples and general planning. | Monitor overlap and keep “romantic”, “two days” and general weekend angles explicitly differentiated. |

Reference sample: [Italia.it Montefiascone](https://www.italia.it/it/lazio/viterbo/montefiascone), [VisitLazio Montefiascone](https://www.visitlazio.com/en/montefiascone/), [Italia.it Lake Bolsena](https://www.italia.it/it/lazio/viterbo/lago-di-bolsena), [Lake Bolsena specialist portal](https://www.lagodibolsena.org/blog/il-lago/il-lago-di-bolsena/), [Italia.it Via Francigena stage](https://www.italia.it/it/cammini-religiosi/via-francigena-nord-tratto-laziale/via-francigena-del-nord-laziale-montefiascone-viterbo), [Festival dell'Ecologia Integrale](https://www.festivalecologiaintegrale.it/), [Cantina di Montefiascone](https://www.cantinamontefiascone.it/e-est-est-est.html).

## Cannibalization Watchlist

- `montefiascone-in-2-giorni` vs `weekend-a-montefiascone`: keep the first as a fixed two-day itinerary and the second as flexible weekend planning.
- `lago-di-bolsena` vs `lago-di-bolsena-cosa-vedere`: geographic hub versus attraction guide.
- `degustazione-vino-montefiascone-come-funziona` vs winery/tasting pages: process guide versus place/experience selection.
- `eventi`, `calendario-eventi-montefiascone` and `eventi-estate-montefiascone-2026`: evergreen hub, calendar and seasonal landing page.

No automatic merge or canonical consolidation is recommended without Search Console query data.

## Pages Still Worth Reviewing

| Lang | URL | Words | SEO | GEO | Content | Internal | Reason |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| IT | https://www.ilovemontefiascone.com/concerto-banda-rb-revue-montefiascone | 246 | 5 | 3 | 2 | 4 | Concise but structured; enrich only with verified visitor value. |
| IT | https://www.ilovemontefiascone.com/festa-santa-margherita-montefiascone | 287 | 5 | 3 | 2 | 4 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/how-wine-tasting-works-montefiascone | 299 | 5 | 4 | 2 | 4 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/where-to-watch-sunset-lake-bolsena | 296 | 5 | 4 | 2 | 5 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/santa-margherita-feast-montefiascone | 299 | 5 | 3 | 2 | 4 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/gallery-montefiascone | 274 | 5 | 4 | 2 | 3 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/grotte-di-castro-lake-bolsena-things-to-see | 282 | 5 | 4 | 2 | 3 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-by-car | 298 | 5 | 4 | 2 | 4 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/winter-in-montefiascone | 298 | 5 | 4 | 2 | 4 | Concise but structured; enrich only with verified visitor value. |
| EN | https://www.ilovemontefiascone.com/en/san-lorenzo-nuovo-lake-bolsena-things-to-see | 230 | 5 | 4 | 2 | 4 | Concise but structured; enrich only with verified visitor value. |
| DE | https://www.ilovemontefiascone.com/de/atb-festival-montefiascone | 400 | 5 | 5 | 3 | 2 | Add one or two natural contextual links when editorially useful. |
| DE | https://www.ilovemontefiascone.com/de/cronoscalata-lago-montefiascone | 373 | 5 | 5 | 3 | 2 | Add one or two natural contextual links when editorially useful. |
| DE | https://www.ilovemontefiascone.com/de/est-lake-festival-montefiascone | 388 | 5 | 5 | 3 | 2 | Add one or two natural contextual links when editorially useful. |
| DE | https://www.ilovemontefiascone.com/de/weinfest-montefiascone-traditionen | 399 | 5 | 5 | 3 | 2 | Add one or two natural contextual links when editorially useful. |
| DE | https://www.ilovemontefiascone.com/de/fest-santa-margherita-montefiascone | 386 | 5 | 4 | 3 | 2 | Add one or two natural contextual links when editorially useful. |

## Image Audit Decision

- Missing referenced assets after micro-fix: **0**.
- P0 blocking image issues: **0**.
- Pages/occurrences with P1 image improvement notes: **198**.
- Pages/occurrences with P2 image improvement notes: **67**.
- Main editorial issue: `/media/hero-rocca-dei-papi-1600.jpg` is the first image on 72 pages across the three languages. This is technically valid but weakens topical differentiation.
- The Estate 2026 JPG is about 1.7 MB; a 216 KB WebP already exists and is used by `<picture>`. Optimize the JPG used by social crawlers when convenient; this is not a release blocker.
- Editorial-project pages intentionally have no inline hero; their social image exists, so this is not a blocker.

### First Manual Photography Wave

One approved horizontal image can be reused across the IT/EN/DE triad.

| IT canonical page | Image Matteo should provide | Why | Priority |
| --- | --- | --- | --- |
| https://www.ilovemontefiascone.com/associazioni-volontariato-montefiascone | Ritratto ambientato o attività reale delle associazioni locali | La hero della Rocca non rappresenta il volontariato. | P1 |
| https://www.ilovemontefiascone.com/cantine-montefiascone-degustazione-est-est-est | Vigneto, bottaia o banco degustazione reale a Montefiascone | Rafforza enoturismo, autorevolezza locale e social preview. | P1 |
| https://www.ilovemontefiascone.com/enogastronomia-ricette-tipiche-montefiascone | Piatto locale fotografato in luce naturale | Serve una visuale gastronomica specifica, non una veduta urbana. | P1 |
| https://www.ilovemontefiascone.com/festival-ecologia-integrale-montefiascone | Foto ufficiale o locandina autorizzata dell'edizione 2026 | La fotografia generica della Rocca non identifica il festival. | P1 |
| https://www.ilovemontefiascone.com/est-lake-festival-montefiascone | Foto ufficiale del festival sul lago o locandina autorizzata | Migliora riconoscibilità dell'evento. | P1 |
| https://www.ilovemontefiascone.com/festa-santa-margherita-montefiascone | Processione, celebrazione o Cattedrale durante la festa | Visuale coerente con la patrona e il contesto religioso. | P1 |
| https://www.ilovemontefiascone.com/panorami-festival-montefiascone | Palco, pubblico o visual ufficiale del festival | Evita la stessa hero usata da pagine non-evento. | P1 |
| https://www.ilovemontefiascone.com/parcheggi-montefiascone | Accesso al centro o area di parcheggio riconoscibile | Aumenta utilità pratica della pagina logistica. | P1 |
| https://www.ilovemontefiascone.com/terme-viterbo-da-montefiascone | Ingresso o contesto termale attuale, senza suggerire servizi non verificati | La Rocca non rappresenta il tema termale. | P1 |
| https://www.ilovemontefiascone.com/viterbo-da-montefiascone | Quartiere San Pellegrino o scorcio identificabile di Viterbo | Distingue chiaramente la gita dalla base Montefiascone. | P1 |
| https://www.ilovemontefiascone.com/bomarzo-da-montefiascone | Orco o scultura riconoscibile del Sacro Bosco | Il dettaglio di tufo attuale è troppo generico. | P1 |
| https://www.ilovemontefiascone.com/caprarola-palazzo-farnese-da-montefiascone | Palazzo Farnese o scala elicoidale, con autorizzazione d'uso | La pagina deve rendere immediata la destinazione. | P1 |
| https://www.ilovemontefiascone.com/tuscania-da-montefiascone | Profilo delle basiliche o centro storico di Tuscania | Il tramonto sul lago non identifica Tuscania. | P1 |
| https://www.ilovemontefiascone.com/villa-lante-bagnaia-da-montefiascone | Fontane o giardino di Villa Lante, con autorizzazione d'uso | La foto del lago non rappresenta il luogo. | P1 |
| https://www.ilovemontefiascone.com/gradoli-cosa-vedere-lago-di-bolsena | Centro storico o Palazzo Farnese di Gradoli | La Via Francigena non rappresenta il borgo. | P1 |
| https://www.ilovemontefiascone.com/grotte-di-castro-cosa-vedere-lago-di-bolsena | Centro storico o panorama di Grotte di Castro | Il dettaglio di tufo è riutilizzato su molti borghi. | P1 |
| https://www.ilovemontefiascone.com/valentano-cosa-vedere-lago-di-bolsena | Rocca Farnese o panorama di Valentano | Serve riconoscibilità geografica. | P1 |
| https://www.ilovemontefiascone.com/via-francigena-montefiascone-viterbo | Basolato romano con camminatori, scatto reale e orizzontale | Può servire l'intera triade e il cluster Francigena. | P1 |

## Merge And Deploy Recommendation

- Ready for controlled merge: **yes**.
- Ready for deploy after the same gate is rerun on `main`: **yes**.
- Images required before publication: **none at P0**.
- Recommended before publication: commit the four media-path corrections and responsive CSS fix, then rerun build/audit after merge on `main`.

## Explicit Confirmations

- No deploy performed.
- Cloudflare not touched.
- Search Console not touched.
- `D:/ilovemontefiascone` not touched.
- `/fr/` not created.
- `sitemap-fr.xml` not created.

## Appendix A — Page-by-page SEO/GEO Scores

| Lang | URL | Type / intent | Words | H2/H3 | SEO | GEO | Content | Localization | Internal | Traffic | Readiness |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| IT | https://www.ilovemontefiascone.com/anno-domini-1074-montefiascone | evento | 679 | 10/10 | 4 | 5 | 5 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/associazioni-volontariato-montefiascone | guida tematica | 589 | 10/2 | 5 | 4 | 4 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/atb-festival-montefiascone | evento | 304 | 9/4 | 4 | 4 | 3 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/basilica-san-flaviano-montefiascone | attrazione culturale | 524 | 11/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/bolsena-cosa-vedere | Lago di Bolsena | 582 | 12/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/bomarzo-da-montefiascone | gita nella Tuscia | 598 | 12/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/borghi-del-lago-di-bolsena-in-auto | Lago di Bolsena | 454 | 11/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/borghi-lago-di-bolsena | Lago di Bolsena | 458 | 11/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/borghi-piu-belli-lago-di-bolsena | Lago di Bolsena | 463 | 11/7 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/calendario-eventi-montefiascone | evento | 430 | 10/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/cantine-montefiascone-degustazione-est-est-est | enogastronomia | 572 | 11/3 | 5 | 5 | 4 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/capodimonte-lago-di-bolsena-cosa-vedere | Lago di Bolsena | 526 | 12/5 | 5 | 4 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/caprarola-palazzo-farnese-da-montefiascone | gita nella Tuscia | 450 | 10/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/cattedrale-santa-margherita-montefiascone | attrazione culturale | 535 | 11/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/civita-di-bagnoregio-da-montefiascone | gita nella Tuscia | 458 | 10/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone | logistica | 712 | 10/5 | 5 | 5 | 5 | 5 | 4 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-firenze | logistica | 469 | 10/5 | 4 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-orvieto | logistica | 485 | 10/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-roma | logistica | 564 | 10/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-viterbo | logistica | 498 | 10/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/concerto-banda-rb-revue-montefiascone | evento | 246 | 6/0 | 5 | 3 | 2 | 5 | 4 | 3 | REVIEW |
| IT | https://www.ilovemontefiascone.com/cosa-fare-a-montefiascone-quando-piove | guida tematica | 401 | 10/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/cosa-fare-la-sera-a-montefiascone | guida tematica | 405 | 10/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/cosa-vedere | Via Francigena | 519 | 11/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/cosa-vedere-dintorni-montefiascone-itinerario | itinerario | 522 | 9/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/cosa-vedere-montefiascone-guida-completa | guida generale | 883 | 12/2 | 5 | 5 | 5 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/cronoscalata-montefiascone-coppa-citta | evento | 361 | 9/4 | 5 | 4 | 3 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/cucina-tipica-montefiascone | enogastronomia | 505 | 12/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/degustazione-vino-montefiascone-come-funziona | enogastronomia | 441 | 9/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/dormire-centro-storico-montefiascone | logistica | 446 | 9/5 | 5 | 4 | 3 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/dove-dormire-a-montefiascone | logistica | 610 | 13/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/dove-mangiare-a-montefiascone | enogastronomia | 535 | 13/5 | 5 | 5 | 4 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/dove-vedere-il-tramonto-sul-lago-di-bolsena | Lago di Bolsena | 453 | 10/5 | 5 | 4 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/enogastronomia-ricette-tipiche-montefiascone | enogastronomia | 462 | 8/2 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/esperienze-enogastronomiche-montefiascone | enogastronomia | 400 | 10/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/estate-sul-lago-di-bolsena | Lago di Bolsena | 504 | 11/5 | 4 | 4 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/est-est-est-montefiascone-vino-doc | enogastronomia | 453 | 10/5 | 5 | 5 | 4 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/est-film-festival-montefiascone | evento | 324 | 9/4 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/est-lake-festival-montefiascone | evento | 344 | 9/4 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/eventi | evento | 942 | 15/13 | 5 | 5 | 5 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/eventi-estate-montefiascone-2026 | evento | 610 | 9/10 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/eventi-tradizioni-fiera-del-vino-montefiascone | evento | 369 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/festa-santa-margherita-montefiascone | evento | 287 | 9/4 | 5 | 3 | 2 | 5 | 4 | 3 | REVIEW |
| IT | https://www.ilovemontefiascone.com/festival-ecologia-integrale-montefiascone | evento | 303 | 9/4 | 4 | 4 | 3 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/galleria | guida tematica | 405 | 5/25 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/gradoli-cosa-vedere-lago-di-bolsena | Lago di Bolsena | 538 | 11/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/grotte-di-castro-cosa-vedere-lago-di-bolsena | Lago di Bolsena | 520 | 11/5 | 4 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/guide | itinerario | 1028 | 15/20 | 5 | 5 | 5 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/ | Lago di Bolsena | 1133 | 13/19 | 5 | 5 | 5 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/informazioni-turistiche-montefiascone | logistica | 505 | 11/5 | 5 | 5 | 4 | 5 | 4 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/itinerario-auto-lago-di-bolsena | Lago di Bolsena | 446 | 10/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/itinerario-fotografico-montefiascone | itinerario | 427 | 9/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/itinerari-tematici-montefiascone | itinerario | 537 | 9/2 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/lago-di-bolsena | Lago di Bolsena | 570 | 11/8 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/lago-di-bolsena-con-bambini | Lago di Bolsena | 509 | 11/5 | 5 | 4 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/lago-di-bolsena-cosa-vedere | Lago di Bolsena | 560 | 11/7 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/lago-di-bolsena-in-2-giorni | Lago di Bolsena | 460 | 10/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/lago-di-bolsena-in-autunno | Lago di Bolsena | 416 | 10/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/lago-di-bolsena-in-bici | Lago di Bolsena | 515 | 11/5 | 5 | 4 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/lago-di-bolsena-in-un-giorno | Lago di Bolsena | 445 | 11/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/mangiare-centro-storico-montefiascone | enogastronomia | 409 | 9/5 | 5 | 4 | 3 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/mappa | Via Francigena | 901 | 15/15 | 5 | 5 | 5 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/marta-lago-di-bolsena-cosa-vedere | Lago di Bolsena | 530 | 12/5 | 5 | 4 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/migliori-panorami-lago-di-bolsena | Lago di Bolsena | 422 | 10/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-con-bambini-famiglie | guida generale | 495 | 11/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-in-2-giorni | itinerario | 472 | 11/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-in-autunno-vendemmia | guida tematica | 454 | 10/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-in-inverno | guida tematica | 437 | 10/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-in-primavera | guida tematica | 466 | 10/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-in-un-giorno | itinerario | 481 | 11/7 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-lago-bolsena-spot-fotografici-aerei | Lago di Bolsena | 535 | 8/2 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/montefiascone-senza-auto | logistica | 507 | 10/5 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/monumenti-minori-chiese-storiche-montefiascone | attrazione culturale | 469 | 8/2 | 4 | 4 | 4 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/panorami-festival-montefiascone | evento | 307 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/parcheggi-montefiascone | logistica | 623 | 11/5 | 5 | 5 | 4 | 5 | 4 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/pesce-di-lago-lago-di-bolsena | enogastronomia | 408 | 9/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/prodotti-tipici-montefiascone-tuscia | guida tematica | 491 | 12/5 | 4 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/progetto-editoriale | guida tematica | 373 | 7/1 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/quando-visitare-montefiascone | guida tematica | 503 | 10/5 | 5 | 5 | 4 | 5 | 4 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/rocca-dei-papi-montefiascone | attrazione culturale | 554 | 11/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/san-lorenzo-nuovo-cosa-vedere-lago-di-bolsena | Lago di Bolsena | 436 | 9/5 | 4 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/spiagge-lago-di-bolsena | Lago di Bolsena | 511 | 12/5 | 5 | 4 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/strada-del-vino-est-est-est-montefiascone | enogastronomia | 414 | 9/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/terme-viterbo-da-montefiascone | gita nella Tuscia | 424 | 10/5 | 5 | 5 | 3 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/trekking-lago-di-bolsena | Lago di Bolsena | 430 | 9/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/tuscania-da-montefiascone | gita nella Tuscia | 481 | 10/5 | 4 | 5 | 4 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/tuscia-in-3-giorni-da-montefiascone | itinerario | 527 | 12/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/valentano-cosa-vedere-lago-di-bolsena | Lago di Bolsena | 436 | 9/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/via-francigena-bolsena-montefiascone | Via Francigena | 498 | 10/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/via-francigena-cosa-portare | Via Francigena | 469 | 10/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/via-francigena-montefiascone-viterbo | Via Francigena | 468 | 10/5 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/viaggio-lento-lago-di-bolsena | Lago di Bolsena | 419 | 10/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/villa-lante-bagnaia-da-montefiascone | gita nella Tuscia | 436 | 10/5 | 4 | 5 | 3 | 5 | 5 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/vino | enogastronomia | 964 | 16/14 | 5 | 5 | 5 | 5 | 4 | 5 | READY |
| IT | https://www.ilovemontefiascone.com/viterbo-da-montefiascone | gita nella Tuscia | 544 | 11/5 | 5 | 5 | 4 | 5 | 4 | 4 | READY |
| IT | https://www.ilovemontefiascone.com/weekend-a-montefiascone | itinerario | 468 | 11/8 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| IT | https://www.ilovemontefiascone.com/weekend-romantico-lago-di-bolsena | Lago di Bolsena | 412 | 10/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/anno-domini-1074-montefiascone | evento | 632 | 10/10 | 4 | 5 | 4 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/associations-volunteering-montefiascone | guida tematica | 466 | 9/8 | 5 | 4 | 4 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/atb-festival-montefiascone | evento | 312 | 9/4 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/basilica-san-flaviano-montefiascone | attrazione culturale | 316 | 6/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/bolsena-things-to-see | Lago di Bolsena | 362 | 8/5 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/bomarzo-from-montefiascone | gita nella Tuscia | 396 | 10/5 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-villages-by-car | Lago di Bolsena | 445 | 10/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-villages | Lago di Bolsena | 482 | 11/5 | 5 | 5 | 4 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/best-villages-on-lake-bolsena | Lago di Bolsena | 397 | 9/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-events-calendar | evento | 331 | 6/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/wine-tasting-montefiascone-est-est-est | enogastronomia | 336 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/capodimonte-lake-bolsena-things-to-see | Lago di Bolsena | 363 | 8/5 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/caprarola-palazzo-farnese-from-montefiascone | gita nella Tuscia | 367 | 10/5 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/cathedral-santa-margherita-montefiascone | attrazione culturale | 313 | 6/4 | 5 | 4 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/civita-di-bagnoregio-from-montefiascone | gita nella Tuscia | 406 | 8/5 | 4 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone | logistica | 417 | 8/5 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-florence | logistica | 525 | 10/4 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-orvieto | logistica | 486 | 10/4 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-rome | logistica | 507 | 10/4 | 5 | 5 | 4 | 5 | 5 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-viterbo | logistica | 336 | 8/4 | 5 | 5 | 3 | 5 | 3 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/banda-rb-revue-concert-montefiascone | evento | 310 | 7/2 | 5 | 4 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/rainy-day-montefiascone | guida tematica | 423 | 10/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/evening-in-montefiascone | guida tematica | 480 | 10/4 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/what-to-see-montefiascone | Lago di Bolsena | 305 | 7/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/things-to-do-near-montefiascone | guida tematica | 470 | 12/5 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/things-to-see-montefiascone | Lago di Bolsena | 437 | 9/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-hill-climb | evento | 365 | 9/4 | 5 | 4 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/typical-food-montefiascone | enogastronomia | 441 | 11/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/how-wine-tasting-works-montefiascone | enogastronomia | 299 | 9/4 | 5 | 4 | 2 | 5 | 4 | 5 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/staying-in-historic-centre-montefiascone | logistica | 472 | 10/4 | 4 | 5 | 4 | 5 | 5 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/where-to-stay-in-montefiascone | logistica | 467 | 9/5 | 5 | 5 | 4 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/where-to-eat-in-montefiascone | enogastronomia | 366 | 8/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/where-to-watch-sunset-lake-bolsena | Lago di Bolsena | 296 | 9/4 | 5 | 4 | 2 | 5 | 5 | 5 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-food-recipes | enogastronomia | 337 | 7/2 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/food-wine-experiences-montefiascone | enogastronomia | 342 | 8/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/summer-on-lake-bolsena | Lago di Bolsena | 415 | 10/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/est-est-est-montefiascone-doc-wine | enogastronomia | 360 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/est-film-festival-montefiascone | evento | 332 | 9/4 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/est-lake-festival-montefiascone | evento | 343 | 9/4 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/events-montefiascone | evento | 309 | 9/1 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-summer-events-2026 | evento | 618 | 9/10 | 5 | 5 | 4 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-wine-fair-traditions | enogastronomia | 364 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/santa-margherita-feast-montefiascone | guida tematica | 299 | 9/4 | 5 | 3 | 2 | 5 | 4 | 3 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/integral-ecology-festival-montefiascone | evento | 314 | 9/4 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/gallery-montefiascone | evento | 274 | 7/1 | 5 | 4 | 2 | 5 | 3 | 3 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/gradoli-lake-bolsena-things-to-see | Lago di Bolsena | 313 | 7/2 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/grotte-di-castro-lake-bolsena-things-to-see | Lago di Bolsena | 282 | 8/4 | 5 | 4 | 2 | 5 | 3 | 5 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-travel-guide | guida generale | 410 | 8/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/ | enogastronomia | 501 | 9/5 | 5 | 5 | 4 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/tourist-information-montefiascone | logistica | 351 | 8/5 | 5 | 4 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-by-car | Lago di Bolsena | 298 | 9/4 | 5 | 4 | 2 | 5 | 4 | 5 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-photography-itinerary | itinerario | 306 | 9/4 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/thematic-itineraries-montefiascone | itinerario | 385 | 9/1 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena | Lago di Bolsena | 432 | 10/5 | 4 | 5 | 3 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-with-kids | Lago di Bolsena | 426 | 10/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/what-to-see-on-lake-bolsena | Lago di Bolsena | 357 | 8/5 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-in-two-days | Lago di Bolsena | 544 | 11/5 | 5 | 5 | 4 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-in-autumn | Lago di Bolsena | 414 | 10/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/cycling-lake-bolsena | Lago di Bolsena | 408 | 10/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-in-one-day | Lago di Bolsena | 353 | 8/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/eating-historic-centre-montefiascone | guida tematica | 319 | 7/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/map-montefiascone | Via Francigena | 340 | 9/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/marta-lake-bolsena-things-to-see | Lago di Bolsena | 371 | 8/5 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/best-viewpoints-lake-bolsena | Lago di Bolsena | 429 | 10/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-with-kids | guida tematica | 410 | 11/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-in-two-days | itinerario | 432 | 10/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/autumn-in-montefiascone-lake-bolsena | Lago di Bolsena | 303 | 9/4 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/winter-in-montefiascone | guida tematica | 298 | 8/1 | 5 | 4 | 2 | 5 | 4 | 3 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/spring-in-montefiascone-lake-bolsena | Lago di Bolsena | 334 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-in-one-day | itinerario | 367 | 8/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/photo-spots-montefiascone-lake-bolsena | Lago di Bolsena | 316 | 9/4 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-without-car | logistica | 392 | 10/5 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/minor-churches-historic-monuments-montefiascone | attrazione culturale | 318 | 9/4 | 5 | 4 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/panorami-festival-montefiascone | evento | 307 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/parking-in-montefiascone | logistica | 395 | 8/5 | 5 | 4 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/lake-fish-lake-bolsena | Lago di Bolsena | 312 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/local-products-montefiascone-tuscia | guida tematica | 387 | 10/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/editorial-project-montefiascone | guida tematica | 379 | 8/1 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/best-time-to-visit-montefiascone | guida tematica | 404 | 9/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/rocca-dei-papi-montefiascone | attrazione culturale | 352 | 6/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/san-lorenzo-nuovo-lake-bolsena-things-to-see | Lago di Bolsena | 230 | 7/3 | 5 | 4 | 2 | 5 | 4 | 5 | REVIEW |
| EN | https://www.ilovemontefiascone.com/en/lake-bolsena-beaches | Lago di Bolsena | 477 | 10/5 | 5 | 5 | 4 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/est-est-est-wine-route-montefiascone | enogastronomia | 433 | 11/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/thermal-baths-near-montefiascone | guida tematica | 387 | 10/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/trekking-lake-bolsena | Lago di Bolsena | 320 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/tuscania-from-montefiascone | gita nella Tuscia | 379 | 10/5 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/tuscia-in-three-days-from-montefiascone | itinerario | 432 | 11/5 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/valentano-lake-bolsena-things-to-see | Lago di Bolsena | 412 | 10/4 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/via-francigena-bolsena-montefiascone | Via Francigena | 374 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/via-francigena-packing-list-montefiascone | Via Francigena | 327 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/via-francigena-montefiascone-viterbo | Via Francigena | 334 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/slow-travel-lake-bolsena | Lago di Bolsena | 408 | 10/5 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/villa-lante-from-montefiascone | gita nella Tuscia | 369 | 10/5 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/montefiascone-wine-guide | enogastronomia | 430 | 8/5 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| EN | https://www.ilovemontefiascone.com/en/viterbo-from-montefiascone | gita nella Tuscia | 414 | 11/5 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| EN | https://www.ilovemontefiascone.com/en/weekend-in-montefiascone | itinerario | 400 | 9/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| EN | https://www.ilovemontefiascone.com/en/romantic-weekend-lake-bolsena | Lago di Bolsena | 321 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/anno-domini-1074-montefiascone | evento | 495 | 8/7 | 4 | 5 | 4 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/vereine-ehrenamt-montefiascone | guida tematica | 345 | 6/0 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/atb-festival-montefiascone | evento | 400 | 5/0 | 5 | 5 | 3 | 5 | 2 | 5 | REVIEW |
| DE | https://www.ilovemontefiascone.com/de/basilika-san-flaviano-montefiascone | attrazione culturale | 383 | 9/4 | 4 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsena-sehenswuerdigkeiten | Lago di Bolsena | 365 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bomarzo-ab-montefiascone | gita nella Tuscia | 327 | 9/4 | 5 | 5 | 3 | 5 | 3 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-doerfer-mit-dem-auto | Lago di Bolsena | 340 | 8/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-doerfer | Lago di Bolsena | 361 | 8/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/schoenste-orte-am-bolsenasee | Lago di Bolsena | 343 | 6/0 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/veranstaltungskalender-montefiascone | evento | 474 | 7/0 | 5 | 4 | 4 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/weingueter-montefiascone-verkostung | enogastronomia | 324 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/capodimonte-bolsenasee-sehenswuerdigkeiten | Lago di Bolsena | 343 | 6/0 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/caprarola-palazzo-farnese-ab-montefiascone | gita nella Tuscia | 302 | 9/4 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/kathedrale-santa-margherita-montefiascone | attrazione culturale | 380 | 9/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/civita-di-bagnoregio-ab-montefiascone | gita nella Tuscia | 407 | 10/3 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/anreise-nach-montefiascone | logistica | 362 | 9/4 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/anreise-von-florenz-nach-montefiascone | logistica | 449 | 10/4 | 5 | 5 | 3 | 5 | 5 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/anreise-von-orvieto-nach-montefiascone | logistica | 408 | 10/4 | 5 | 5 | 3 | 5 | 5 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/anreise-von-rom-nach-montefiascone | logistica | 416 | 10/4 | 5 | 5 | 3 | 5 | 5 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/anreise-viterbo-montefiascone | logistica | 305 | 9/4 | 5 | 5 | 3 | 5 | 3 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/banda-rb-revue-konzert-montefiascone | evento | 473 | 7/0 | 5 | 5 | 4 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/regen-in-montefiascone | guida tematica | 409 | 10/4 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/abend-in-montefiascone | guida tematica | 389 | 10/4 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/was-sehen-montefiascone | guida tematica | 342 | 6/5 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/ausfluege-rund-um-montefiascone | guida tematica | 308 | 9/4 | 5 | 5 | 3 | 5 | 3 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/sehenswuerdigkeiten-montefiascone | guida generale | 356 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/cronoscalata-lago-montefiascone | evento | 373 | 5/0 | 5 | 5 | 3 | 5 | 2 | 3 | REVIEW |
| DE | https://www.ilovemontefiascone.com/de/typische-kueche-montefiascone | enogastronomia | 314 | 7/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/weinverkostung-montefiascone-ablauf | enogastronomia | 309 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/uebernachten-altstadt-montefiascone | guida tematica | 401 | 10/4 | 5 | 4 | 3 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/unterkunft-in-montefiascone | logistica | 366 | 9/4 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/essen-in-montefiascone | enogastronomia | 305 | 9/4 | 4 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/sonnenuntergang-bolsenasee | Lago di Bolsena | 403 | 6/0 | 5 | 5 | 3 | 5 | 3 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/kulinarik-rezepte-montefiascone | guida tematica | 309 | 7/2 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/kulinarische-erlebnisse-montefiascone | guida tematica | 308 | 8/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/sommer-am-bolsenasee | Lago di Bolsena | 348 | 8/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/est-est-est-wein-montefiascone | enogastronomia | 309 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/est-film-festival-montefiascone | evento | 351 | 6/0 | 5 | 5 | 3 | 5 | 3 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/est-lake-festival-montefiascone | evento | 388 | 5/0 | 5 | 5 | 3 | 5 | 2 | 5 | REVIEW |
| DE | https://www.ilovemontefiascone.com/de/veranstaltungen-montefiascone | evento | 528 | 7/0 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/sommerveranstaltungen-montefiascone-2026 | evento | 350 | 6/0 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/weinfest-montefiascone-traditionen | evento | 399 | 5/0 | 5 | 5 | 3 | 5 | 2 | 5 | REVIEW |
| DE | https://www.ilovemontefiascone.com/de/fest-santa-margherita-montefiascone | evento | 386 | 5/0 | 5 | 4 | 3 | 5 | 2 | 3 | REVIEW |
| DE | https://www.ilovemontefiascone.com/de/festival-integrale-oekologie-montefiascone | evento | 373 | 7/0 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/galerie-montefiascone | evento | 367 | 6/0 | 5 | 5 | 3 | 5 | 3 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/gradoli-bolsenasee-sehenswuerdigkeiten | Lago di Bolsena | 322 | 8/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/grotte-di-castro-bolsenasee-sehenswuerdigkeiten | Lago di Bolsena | 347 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/reisefuehrer-montefiascone | Lago di Bolsena | 371 | 9/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/ | Lago di Bolsena | 388 | 9/4 | 5 | 5 | 3 | 5 | 3 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/touristeninformation-montefiascone | logistica | 449 | 9/3 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-mit-dem-auto | Lago di Bolsena | 321 | 10/3 | 5 | 4 | 3 | 5 | 3 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/fotografischer-rundgang-montefiascone | enogastronomia | 381 | 10/4 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/thematische-routen-montefiascone | itinerario | 460 | 10/4 | 5 | 5 | 4 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee | Lago di Bolsena | 405 | 9/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-mit-kindern | Lago di Bolsena | 362 | 8/3 | 5 | 5 | 3 | 5 | 3 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-sehenswuerdigkeiten | Lago di Bolsena | 341 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-in-zwei-tagen | Lago di Bolsena | 341 | 6/0 | 4 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-im-herbst | Lago di Bolsena | 339 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-mit-dem-fahrrad | Lago di Bolsena | 308 | 9/3 | 5 | 4 | 3 | 5 | 3 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/bolsenasee-an-einem-tag | Lago di Bolsena | 367 | 6/0 | 4 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/essen-altstadt-montefiascone | enogastronomia | 321 | 8/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/karte-montefiascone | guida tematica | 349 | 9/3 | 4 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/marta-bolsenasee-sehenswuerdigkeiten | Lago di Bolsena | 323 | 6/0 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/beste-aussichten-bolsenasee | Lago di Bolsena | 374 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-mit-kindern | guida tematica | 337 | 8/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-in-zwei-tagen | itinerario | 383 | 10/3 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-im-herbst-weinlese | enogastronomia | 349 | 9/4 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-im-winter | guida tematica | 338 | 9/4 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-im-fruehling | guida tematica | 343 | 9/4 | 5 | 5 | 3 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-an-einem-tag | guida tematica | 389 | 10/3 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/fotospots-montefiascone-bolsenasee | Lago di Bolsena | 336 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-ohne-auto | logistica | 341 | 7/4 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/kleine-kirchen-historische-monumente-montefiascone | attrazione culturale | 373 | 10/4 | 4 | 4 | 3 | 5 | 5 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/panorami-festival-montefiascone | evento | 531 | 7/0 | 5 | 5 | 4 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/parken-in-montefiascone | guida tematica | 413 | 10/3 | 4 | 4 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/fisch-aus-dem-bolsenasee | enogastronomia | 378 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/typische-produkte-montefiascone-tuscia | guida tematica | 321 | 8/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/redaktionelles-projekt-montefiascone | guida tematica | 366 | 8/1 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/beste-reisezeit-montefiascone | guida tematica | 408 | 10/3 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/rocca-dei-papi-montefiascone | attrazione culturale | 370 | 9/4 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/san-lorenzo-nuovo-bolsenasee-sehenswuerdigkeiten | Lago di Bolsena | 396 | 6/0 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/straende-am-bolsenasee | Lago di Bolsena | 331 | 6/0 | 5 | 4 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/est-est-est-weinroute-montefiascone | enogastronomia | 334 | 8/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/thermalbaeder-viterbo-ab-montefiascone | gita nella Tuscia | 308 | 9/4 | 5 | 5 | 3 | 5 | 3 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/wandern-bolsenasee | Lago di Bolsena | 370 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/tuscania-ab-montefiascone | gita nella Tuscia | 311 | 9/4 | 5 | 5 | 3 | 5 | 3 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/tuscia-in-drei-tagen-ab-montefiascone | itinerario | 316 | 9/4 | 5 | 5 | 3 | 5 | 3 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/valentano-bolsenasee-sehenswuerdigkeiten | Lago di Bolsena | 346 | 10/4 | 5 | 5 | 3 | 5 | 5 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/via-francigena-bolsena-montefiascone | Via Francigena | 400 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/via-francigena-packliste-montefiascone | Via Francigena | 372 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/via-francigena-montefiascone-viterbo | Via Francigena | 350 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/langsames-reisen-bolsenasee | Lago di Bolsena | 359 | 7/4 | 5 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/villa-lante-bagnaia-ab-montefiascone | gita nella Tuscia | 302 | 9/4 | 5 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/montefiascone-wein-guide | enogastronomia | 364 | 9/4 | 4 | 5 | 3 | 5 | 4 | 5 | READY |
| DE | https://www.ilovemontefiascone.com/de/viterbo-ab-montefiascone | gita nella Tuscia | 313 | 11/4 | 4 | 5 | 3 | 5 | 4 | 4 | READY |
| DE | https://www.ilovemontefiascone.com/de/wochenende-in-montefiascone | guida tematica | 387 | 10/3 | 5 | 5 | 3 | 5 | 4 | 3 | READY |
| DE | https://www.ilovemontefiascone.com/de/romantisches-wochenende-bolsenasee | Lago di Bolsena | 381 | 10/4 | 5 | 5 | 3 | 5 | 5 | 5 | READY |

## Appendix B — Detailed Image Improvement Inventory

This appendix lists every page-level media note detected. Repeated rows across languages are intentional: one replacement can usually serve the complete triad.

| URL | Lang | Current image | Problem | Requested image/action | Priority | Note for Matteo |
| --- | --- | --- | --- | --- | --- | --- |
| https://www.ilovemontefiascone.com/anno-domini-1074-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/associazioni-volontariato-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/cantine-montefiascone-degustazione-est-est-est | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/cosa-vedere | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/cosa-vedere-dintorni-montefiascone-itinerario | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/cosa-vedere-montefiascone-guida-completa | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/dormire-centro-storico-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/dove-dormire-a-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/enogastronomia-ricette-tipiche-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/est-lake-festival-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/festa-santa-margherita-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/festival-ecologia-integrale-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/galleria | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/ | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/itinerari-tematici-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-lago-bolsena-spot-fotografici-aerei | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/monumenti-minori-chiese-storiche-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/panorami-festival-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/parcheggi-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/terme-viterbo-da-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/viterbo-da-montefiascone | IT | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/anno-domini-1074-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/associations-volunteering-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/what-to-see-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/staying-in-historic-centre-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/where-to-stay-in-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/est-lake-festival-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/santa-margherita-feast-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/integral-ecology-festival-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/ | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/thematic-itineraries-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/panorami-festival-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/parking-in-montefiascone | EN | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/anno-domini-1074-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/vereine-ehrenamt-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/basilika-san-flaviano-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsena-sehenswuerdigkeiten | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/schoenste-orte-am-bolsenasee | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/weingueter-montefiascone-verkostung | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/capodimonte-bolsenasee-sehenswuerdigkeiten | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/kathedrale-santa-margherita-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/civita-di-bagnoregio-ab-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/anreise-nach-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/was-sehen-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/sehenswuerdigkeiten-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/uebernachten-altstadt-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/unterkunft-in-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/essen-in-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/est-est-est-wein-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/est-lake-festival-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/fest-santa-margherita-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/festival-integrale-oekologie-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/reisefuehrer-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/ | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/touristeninformation-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/thematische-routen-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-sehenswuerdigkeiten | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-in-zwei-tagen | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-an-einem-tag | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/karte-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/marta-bolsenasee-sehenswuerdigkeiten | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-mit-kindern | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-in-zwei-tagen | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-an-einem-tag | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/panorami-festival-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/parken-in-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/beste-reisezeit-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/rocca-dei-papi-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-wein-guide | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/viterbo-ab-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/wochenende-in-montefiascone | DE | /media/hero-rocca-dei-papi-1600.jpg | Hero riutilizzata su 72 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/basilica-san-flaviano-montefiascone | IT | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/bomarzo-da-montefiascone | IT | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/civita-di-bagnoregio-da-montefiascone | IT | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/cosa-fare-a-montefiascone-quando-piove | IT | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/grotte-di-castro-cosa-vedere-lago-di-bolsena | IT | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/valentano-cosa-vedere-lago-di-bolsena | IT | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/bomarzo-from-montefiascone | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/caprarola-palazzo-farnese-from-montefiascone | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/civita-di-bagnoregio-from-montefiascone | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/grotte-di-castro-lake-bolsena-things-to-see | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/minor-churches-historic-monuments-montefiascone | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/san-lorenzo-nuovo-lake-bolsena-things-to-see | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/valentano-lake-bolsena-things-to-see | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/villa-lante-from-montefiascone | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/viterbo-from-montefiascone | EN | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bomarzo-ab-montefiascone | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/caprarola-palazzo-farnese-ab-montefiascone | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/regen-in-montefiascone | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/grotte-di-castro-bolsenasee-sehenswuerdigkeiten | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/kleine-kirchen-historische-monumente-montefiascone | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/san-lorenzo-nuovo-bolsenasee-sehenswuerdigkeiten | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/tuscania-ab-montefiascone | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/valentano-bolsenasee-sehenswuerdigkeiten | DE | /media/gallery/tufo-detail.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/bolsena-cosa-vedere | IT | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone | IT | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-roma | IT | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-viterbo | IT | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/cosa-fare-la-sera-a-montefiascone | IT | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/itinerario-fotografico-montefiascone | IT | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/bolsena-things-to-see | EN | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-villages-by-car | EN | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone | EN | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/montefiascone-travel-guide | EN | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/fotografischer-rundgang-montefiascone | DE | /media/gallery/petretti-drone1.jpg | Hero riutilizzata su 11 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/borghi-del-lago-di-bolsena-in-auto | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/borghi-lago-di-bolsena | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/borghi-piu-belli-lago-di-bolsena | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/gradoli-cosa-vedere-lago-di-bolsena | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/itinerario-auto-lago-di-bolsena | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/trekking-lago-di-bolsena | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/via-francigena-bolsena-montefiascone | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/via-francigena-cosa-portare | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/via-francigena-montefiascone-viterbo | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/viaggio-lento-lago-di-bolsena | IT | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/best-villages-on-lake-bolsena | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/gradoli-lake-bolsena-things-to-see | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/cycling-lake-bolsena | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/montefiascone-without-car | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/trekking-lake-bolsena | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/via-francigena-bolsena-montefiascone | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/via-francigena-packing-list-montefiascone | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/via-francigena-montefiascone-viterbo | EN | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/wandern-bolsenasee | DE | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/via-francigena-bolsena-montefiascone | DE | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/via-francigena-packliste-montefiascone | DE | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/via-francigena-montefiascone-viterbo | DE | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/langsames-reisen-bolsenasee | DE | /media/gallery/francigena-lines.jpg | Hero riutilizzata su 23 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/calendario-eventi-montefiascone | IT | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/dove-mangiare-a-montefiascone | IT | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/est-film-festival-montefiascone | IT | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/eventi | IT | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/mangiare-centro-storico-montefiascone | IT | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/where-to-eat-in-montefiascone | EN | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/est-film-festival-montefiascone | EN | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/events-montefiascone | EN | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/eating-historic-centre-montefiascone | EN | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/est-film-festival-montefiascone | DE | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/veranstaltungen-montefiascone | DE | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/essen-altstadt-montefiascone | DE | /media/gallery/fieradelvino-rocca-notte.jpg | Hero riutilizzata su 12 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/capodimonte-lago-di-bolsena-cosa-vedere | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-orvieto | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/lago-di-bolsena | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/lago-di-bolsena-cosa-vedere | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/lago-di-bolsena-in-bici | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/mappa | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/migliori-panorami-lago-di-bolsena | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-in-autunno-vendemmia | IT | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-villages | EN | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/capodimonte-lake-bolsena-things-to-see | EN | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-by-car | EN | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena | EN | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/what-to-see-on-lake-bolsena | EN | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/map-montefiascone | EN | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/autumn-in-montefiascone-lake-bolsena | EN | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-doerfer-mit-dem-auto | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-doerfer | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/ausfluege-rund-um-montefiascone | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/sommer-am-bolsenasee | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/gradoli-bolsenasee-sehenswuerdigkeiten | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-mit-dem-auto | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-mit-dem-fahrrad | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-im-herbst-weinlese | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/fotospots-montefiascone-bolsenasee | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/tuscia-in-drei-tagen-ab-montefiascone | DE | /media/gallery/petretti-drone2.jpg | Hero riutilizzata su 25 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-firenze | IT | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-in-primavera | IT | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-florence | EN | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-orvieto | EN | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-rome | EN | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/montefiascone-photography-itinerary | EN | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-in-autumn | EN | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/best-viewpoints-lake-bolsena | EN | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/spring-in-montefiascone-lake-bolsena | EN | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/anreise-von-florenz-nach-montefiascone | DE | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/anreise-von-orvieto-nach-montefiascone | DE | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/anreise-von-rom-nach-montefiascone | DE | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-im-herbst | DE | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/beste-aussichten-bolsenasee | DE | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-im-fruehling | DE | /media/gallery/belvedere-tele.jpg | Hero riutilizzata su 15 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/cucina-tipica-montefiascone | IT | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/degustazione-vino-montefiascone-come-funziona | IT | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/esperienze-enogastronomiche-montefiascone | IT | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/est-est-est-montefiascone-vino-doc | IT | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/prodotti-tipici-montefiascone-tuscia | IT | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/strada-del-vino-est-est-est-montefiascone | IT | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/vino | IT | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/wine-tasting-montefiascone-est-est-est | EN | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/typical-food-montefiascone | EN | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/how-wine-tasting-works-montefiascone | EN | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/food-wine-experiences-montefiascone | EN | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/est-est-est-montefiascone-doc-wine | EN | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/est-est-est-wine-route-montefiascone | EN | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/montefiascone-wine-guide | EN | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/typische-kueche-montefiascone | DE | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/weinverkostung-montefiascone-ablauf | DE | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/kulinarische-erlebnisse-montefiascone | DE | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/typische-produkte-montefiascone-tuscia | DE | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/est-est-est-weinroute-montefiascone | DE | /media/gallery/fieradelvino-sommelier-cantina.jpg | Hero riutilizzata su 19 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/dove-vedere-il-tramonto-sul-lago-di-bolsena | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/estate-sul-lago-di-bolsena | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/guide | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/lago-di-bolsena-con-bambini | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/lago-di-bolsena-in-2-giorni | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/lago-di-bolsena-in-un-giorno | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/marta-lago-di-bolsena-cosa-vedere | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/pesce-di-lago-lago-di-bolsena | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/quando-visitare-montefiascone | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/spiagge-lago-di-bolsena | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/tuscania-da-montefiascone | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/weekend-a-montefiascone | IT | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/evening-in-montefiascone | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-with-kids | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-in-two-days | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-in-one-day | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/marta-lake-bolsena-things-to-see | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/photo-spots-montefiascone-lake-bolsena | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-fish-lake-bolsena | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/best-time-to-visit-montefiascone | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/slow-travel-lake-bolsena | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/weekend-in-montefiascone | EN | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/abend-in-montefiascone | DE | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/bolsenasee-mit-kindern | DE | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/fisch-aus-dem-bolsenasee | DE | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/thermalbaeder-viterbo-ab-montefiascone | DE | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/villa-lante-bagnaia-ab-montefiascone | DE | /media/gallery/petretti-lago-tramonto.jpg | Hero riutilizzata su 27 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/informazioni-turistiche-montefiascone | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/lago-di-bolsena-in-autunno | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-con-bambini-famiglie | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-in-2-giorni | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-in-un-giorno | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-senza-auto | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/rocca-dei-papi-montefiascone | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/tuscia-in-3-giorni-da-montefiascone | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/villa-lante-bagnaia-da-montefiascone | IT | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone-from-viterbo | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/things-to-do-near-montefiascone | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/things-to-see-montefiascone | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/gallery-montefiascone | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/tourist-information-montefiascone | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/montefiascone-in-two-days | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/montefiascone-in-one-day | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/rocca-dei-papi-montefiascone | EN | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/anreise-viterbo-montefiascone | DE | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/galerie-montefiascone | DE | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-ohne-auto | DE | /media/gallery/rocca-overview.jpg | Hero riutilizzata su 20 pagine | Fotografia reale specifica del luogo o del tema trattato | P1 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/montefiascone-in-inverno | IT | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/san-lorenzo-nuovo-cosa-vedere-lago-di-bolsena | IT | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/where-to-watch-sunset-lake-bolsena | EN | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/summer-on-lake-bolsena | EN | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/winter-in-montefiascone | EN | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/lake-bolsena-beaches | EN | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/en/thermal-baths-near-montefiascone | EN | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/sonnenuntergang-bolsenasee | DE | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/montefiascone-im-winter | DE | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/de/straende-am-bolsenasee | DE | /media/gallery/lago-bluehour.jpg | Hero riutilizzata su 10 pagine | Fotografia reale specifica del luogo o del tema trattato | P2 | Fornire uno scatto orizzontale, utilizzabile anche per Open Graph. |
| https://www.ilovemontefiascone.com/eventi-estate-montefiascone-2026 | IT | /media/gallery/estate-2026-montefiascone.jpg | Immagine oltre 1,5 MB | Versione WebP/AVIF ottimizzata | P1 | Conservare dimensioni adatte alla hero e qualità fotografica. |
| https://www.ilovemontefiascone.com/progetto-editoriale | IT | nessuna immagine HTML | Hero/immagine editoriale non rilevata | Fotografia reale coerente con la pagina | P1 | Verificare prima se la hero è applicata via CSS. |
| https://www.ilovemontefiascone.com/en/montefiascone-events-calendar | EN | /media/gallery/estate-2026-montefiascone.jpg, https://www.ilovemontefiascone.com/media/gallery/estate-2026-montefiascone.jpg | Immagine oltre 1,5 MB | Versione WebP/AVIF ottimizzata | P1 | Conservare dimensioni adatte alla hero e qualità fotografica. |
| https://www.ilovemontefiascone.com/en/montefiascone-summer-events-2026 | EN | /media/gallery/estate-2026-montefiascone.jpg | Immagine oltre 1,5 MB | Versione WebP/AVIF ottimizzata | P1 | Conservare dimensioni adatte alla hero e qualità fotografica. |
| https://www.ilovemontefiascone.com/en/editorial-project-montefiascone | EN | nessuna immagine HTML | Hero/immagine editoriale non rilevata | Fotografia reale coerente con la pagina | P1 | Verificare prima se la hero è applicata via CSS. |
| https://www.ilovemontefiascone.com/de/veranstaltungskalender-montefiascone | DE | /media/gallery/estate-2026-montefiascone.jpg, https://www.ilovemontefiascone.com/media/gallery/estate-2026-montefiascone.jpg | Immagine oltre 1,5 MB | Versione WebP/AVIF ottimizzata | P1 | Conservare dimensioni adatte alla hero e qualità fotografica. |
| https://www.ilovemontefiascone.com/de/sommerveranstaltungen-montefiascone-2026 | DE | /media/gallery/estate-2026-montefiascone.jpg, https://www.ilovemontefiascone.com/media/gallery/estate-2026-montefiascone.jpg | Immagine oltre 1,5 MB | Versione WebP/AVIF ottimizzata | P1 | Conservare dimensioni adatte alla hero e qualità fotografica. |
| https://www.ilovemontefiascone.com/de/redaktionelles-projekt-montefiascone | DE | nessuna immagine HTML | Hero/immagine editoriale non rilevata | Fotografia reale coerente con la pagina | P1 | Verificare prima se la hero è applicata via CSS. |

## Appendix C — Hero Reuse Summary

| Asset | Pages using it as first image |
| --- | ---: |
| /media/hero-rocca-dei-papi-1600.jpg | 72 |
| /media/gallery/petretti-lago-tramonto.jpg | 27 |
| /media/gallery/petretti-drone2.jpg | 25 |
| /media/gallery/tufo-detail.jpg | 23 |
| /media/gallery/francigena-lines.jpg | 23 |
| /media/gallery/rocca-overview.jpg | 20 |
| /media/gallery/fieradelvino-sommelier-cantina.jpg | 19 |
| /media/gallery/belvedere-tele.jpg | 15 |
| /media/gallery/fieradelvino-rocca-notte.jpg | 12 |
| /media/gallery/petretti-drone1.jpg | 11 |
| /media/gallery/lago-bluehour.jpg | 10 |
| /media/gallery/cupola-lake.jpg | 7 |
| /media/gallery/estate-2026-montefiascone.jpg | 5 |
| /media/gallery/atbfestival-palco-notte.jpg | 3 |
| /media/gallery/evento-banda-rb-revue-piazzale-roma-2026.jpg | 3 |
| /media/gallery/cronoscalata-piloti-auto-storiche.jpg | 3 |
| /media/gallery/fieradelvino-corteo-folla.jpg | 3 |
| /media/gallery/fieradelvino-fontana-uva.jpg | 3 |
