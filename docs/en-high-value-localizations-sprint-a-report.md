# EN High-Value Localizations Sprint A Report

Date: 2026-06-21  
Branch: `feature/en-high-value-localizations-sprint-a`  
Base branch: `main`  
Base commit expected: `cb46de4 Add content gap audit and roadmap`

## Scope

Sprint A adds a controlled batch of high-value English travel guides to strengthen the published English section without changing production infrastructure, Cloudflare configuration, DNS, redirects, analytics, AdSense, Search Console or the unpublished German area.

The sprint focuses on:

- Via Francigena walking intent.
- Est! Est!! Est!!! wine and tasting intent.
- Photography and visual travel intent.
- Lake Bolsena practical itinerary intent.
- Evergreen event and local tradition intent.

## English Pages Before And After

- English pages before sprint: 50.
- New English pages added: 10.
- English pages after sprint: 60.
- URL format: clean public URLs without `.html`.

## New English Pages

| Cluster | Clean URL | Purpose |
| --- | --- | --- |
| Via Francigena | `https://www.ilovemontefiascone.com/en/via-francigena-bolsena-montefiascone` | Walking context from Bolsena to the hill town. |
| Via Francigena | `https://www.ilovemontefiascone.com/en/via-francigena-packing-list-montefiascone` | Practical packing guidance for walkers around Montefiascone. |
| Wine | `https://www.ilovemontefiascone.com/en/wine-tasting-montefiascone-est-est-est` | Est! Est!! Est!!! tasting planning for international visitors. |
| Wine | `https://www.ilovemontefiascone.com/en/how-wine-tasting-works-montefiascone` | Practical explanation of how tastings usually work, without inventing prices or hours. |
| Photography | `https://www.ilovemontefiascone.com/en/photo-spots-montefiascone-lake-bolsena` | Viewpoints, light and respectful photography notes. |
| Photography | `https://www.ilovemontefiascone.com/en/montefiascone-photography-itinerary` | Slow visual itinerary through town and lake views. |
| Lake Bolsena | `https://www.ilovemontefiascone.com/en/where-to-watch-sunset-lake-bolsena` | Sunset viewpoint logic from Montefiascone. |
| Lake Bolsena | `https://www.ilovemontefiascone.com/en/lake-bolsena-by-car` | Flexible lake route from Montefiascone. |
| Events | `https://www.ilovemontefiascone.com/en/montefiascone-wine-fair-traditions` | Evergreen context for wine traditions and event planning. |
| Events | `https://www.ilovemontefiascone.com/en/montefiascone-hill-climb` | Visitor and photography guide for the hill-climb tradition. |

## Italian Pages Updated

The Italian equivalents were updated only for reciprocal English discovery signals:

- `via-francigena-bolsena-montefiascone.html`
- `via-francigena-cosa-portare.html`
- `cantine-montefiascone-degustazione-est-est-est.html`
- `degustazione-vino-montefiascone-come-funziona.html`
- `montefiascone-lago-bolsena-spot-fotografici-aerei.html`
- `itinerario-fotografico-montefiascone.html`
- `dove-vedere-il-tramonto-sul-lago-di-bolsena.html`
- `itinerario-auto-lago-di-bolsena.html`
- `eventi-tradizioni-fiera-del-vino-montefiascone.html`
- `cronoscalata-montefiascone-coppa-citta.html`

No Italian editorial content was rewritten in this sprint.

## SEO Implementation

Each new English page includes:

- Title under 60 characters.
- Meta description between 120 and 155 characters.
- One H1.
- Clean canonical URL.
- Clean `hreflang` for `it`, `en` and `x-default`.
- Clean `og:url`.
- JSON-LD with clean URLs.
- Visible FAQ section when `FAQPage` markup is present.
- At least three internal English links.

## Internal Linking

New pages are linked from relevant English hubs and supporting pages, including:

- English homepage.
- Via Francigena Montefiascone to Viterbo.
- Montefiascone wine guide.
- Est! Est!! Est!!! DOC guide.
- Est! Est!! Est!!! wine route.
- Typical food guide.
- Lake Bolsena hub.
- Best viewpoints around Lake Bolsena.
- Things to see in Montefiascone.
- Things to do near Montefiascone.

The new pages also link back to their hubs and to adjacent guides.

## Sitemap And LLM Files

- `sitemap-en.xml`: 60 clean URLs.
- `sitemap-it.xml`: 89 clean URLs.
- `sitemap.xml`: unchanged sitemap index.
- `llms.txt`: updated with selected Sprint A English guides.
- No `sitemap-de.xml` created.
- No German URLs added.

## QA Summary

| Check | Result |
| --- | --- |
| EN page count | 60 |
| New EN pages added | 10 |
| New page title length | Pass |
| New page meta length | Pass |
| H1 uniqueness | Pass |
| JSON-LD parsing | Pass |
| Clean canonical URLs | Pass |
| Clean hreflang URLs | Pass |
| Clean `og:url` | Pass |
| Sitemap EN count | Pass, 60 |
| Sitemap IT count | Pass, 89 |
| `.html` in sitemap URLs | None |
| DE exposure | None |
| `pages.dev` / `github.io` references | None |
| Apex non-www URLs | None |
| Mojibake markers in EN | None detected |

## P0/P1 Issues

No P0 or P1 issues detected.

## P2/P3 Notes

- Some older English pages still use the full unminified CSS source rather than the homepage performance setup; this was already outside Sprint A scope.
- Annual event pages should continue to avoid date precision until official yearly programmes are available.
- Future sprints can expand English coverage for restaurants, accommodation and family itineraries if reliable local data is available.

## Not Done

- No Cloudflare changes.
- No DNS changes.
- No redirect changes.
- No Search Console submission.
- No Analytics or AdSense work.
- No German publication.
- No new sitemap for German.

## Readiness

Sprint A is ready for controlled review and merge after the branch is pushed and the build passes.
