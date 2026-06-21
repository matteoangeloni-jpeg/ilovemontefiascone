# EN Editorial QA + Internal Linking Sprint

## Initial State

- Base branch: `main`
- Working branch: `feature/en-editorial-qa-internal-linking`
- EN pages audited: 50
- IT pages in sitemap: 89
- EN pages in sitemap: 50
- Canonical domain: `https://www.ilovemontefiascone.com`
- URL policy: clean URLs without `.html`
- DE status: excluded from production build

## Pages Checked

All 50 English pages under `en/` were checked for language quality, metadata, H1 count, clean canonical signals, internal links, visible FAQ consistency, JSON-LD validity, placeholders, mojibake and risky wording.

Checked pages:

- `en/index.html`
- `en/things-to-see-montefiascone.html`
- `en/montefiascone-travel-guide.html`
- `en/lake-bolsena.html`
- `en/what-to-see-on-lake-bolsena.html`
- `en/lake-bolsena-in-one-day.html`
- `en/lake-bolsena-in-two-days.html`
- `en/lake-bolsena-villages.html`
- `en/lake-bolsena-villages-by-car.html`
- `en/lake-bolsena-beaches.html`
- `en/lake-bolsena-with-kids.html`
- `en/lake-bolsena-in-autumn.html`
- `en/best-villages-on-lake-bolsena.html`
- `en/best-viewpoints-lake-bolsena.html`
- `en/bolsena-things-to-see.html`
- `en/marta-lake-bolsena-things-to-see.html`
- `en/capodimonte-lake-bolsena-things-to-see.html`
- `en/montefiascone-in-one-day.html`
- `en/montefiascone-in-two-days.html`
- `en/weekend-in-montefiascone.html`
- `en/things-to-do-near-montefiascone.html`
- `en/tuscia-in-three-days-from-montefiascone.html`
- `en/viterbo-from-montefiascone.html`
- `en/civita-di-bagnoregio-from-montefiascone.html`
- `en/bomarzo-from-montefiascone.html`
- `en/tuscania-from-montefiascone.html`
- `en/villa-lante-from-montefiascone.html`
- `en/caprarola-palazzo-farnese-from-montefiascone.html`
- `en/thermal-baths-near-montefiascone.html`
- `en/rocca-dei-papi-montefiascone.html`
- `en/cathedral-santa-margherita-montefiascone.html`
- `en/basilica-san-flaviano-montefiascone.html`
- `en/est-est-est-montefiascone-doc-wine.html`
- `en/est-est-est-wine-route-montefiascone.html`
- `en/montefiascone-wine-guide.html`
- `en/typical-food-montefiascone.html`
- `en/local-products-montefiascone-tuscia.html`
- `en/where-to-eat-in-montefiascone.html`
- `en/where-to-stay-in-montefiascone.html`
- `en/how-to-get-to-montefiascone.html`
- `en/parking-in-montefiascone.html`
- `en/tourist-information-montefiascone.html`
- `en/best-time-to-visit-montefiascone.html`
- `en/montefiascone-with-kids.html`
- `en/montefiascone-without-car.html`
- `en/rainy-day-montefiascone.html`
- `en/slow-travel-lake-bolsena.html`
- `en/summer-on-lake-bolsena.html`
- `en/cycling-lake-bolsena.html`
- `en/via-francigena-montefiascone-viterbo.html`

## Pages Modified

All 50 English pages were modified for clean internal links and mojibake normalization where needed.

Deeper editorial work was applied to these strategic pages:

- `en/index.html`
- `en/things-to-see-montefiascone.html`
- `en/lake-bolsena.html`
- `en/lake-bolsena-in-two-days.html`
- `en/lake-bolsena-villages.html`
- `en/things-to-do-near-montefiascone.html`
- `en/tuscia-in-three-days-from-montefiascone.html`
- `en/viterbo-from-montefiascone.html`
- `en/typical-food-montefiascone.html`
- `en/est-est-est-wine-route-montefiascone.html`
- `en/est-est-est-montefiascone-doc-wine.html`
- `en/montefiascone-with-kids.html`
- `en/via-francigena-montefiascone-viterbo.html`

Additional wording risk reductions were applied to:

- `en/montefiascone-wine-guide.html`
- `en/rainy-day-montefiascone.html`
- `en/rocca-dei-papi-montefiascone.html`
- `en/summer-on-lake-bolsena.html`

## Editorial Issues Found

- Several EN pages used clean SEO signals but still linked internally to `.html` URLs in navigation, footer and related-link blocks.
- Some generated pages contained mojibake artifacts such as `Â·`.
- Strategic page openings were correct but sometimes too generic for international visitors.
- Some cluster hubs lacked a clear "where to go next" pathway.
- A few phrases were too assertive for variable travel conditions, for example "always", "best way" or "one of the best bases".

## Corrections Applied

- Replaced EN internal links from `.html` targets to clean URLs.
- Normalized visible mojibake artifacts in EN pages.
- Improved strategic hero introductions with clearer geographic context: Montefiascone, Lake Bolsena, Tuscia, Lazio and Viterbo.
- Added "Where to go next" sections to strengthen hub-and-spoke navigation.
- Softened risky travel claims with more cautious language such as "often", "practical", "clearest" and "it is worth checking".
- Preserved existing URLs, canonical tags, hreflang tags, sitemap files and redirect behavior.

## Internal Linking

Clusters strengthened:

- Montefiascone core: homepage, things to see, Rocca dei Papi, Santa Margherita, San Flaviano and viewpoints.
- Lake Bolsena: lake hub, two-day route, villages, beaches and family travel.
- Tuscia day trips: Montefiascone hub, Viterbo, Civita di Bagnoregio, Bomarzo, Tuscania, Villa Lante and Caprarola.
- Food and wine: Est! Est!! Est!!!, wine route, typical food, local products and where to eat.
- Practical travel: how to get there, parking, where to stay, families, rainy days and slow travel.

Validation result:

- Every EN page has at least 3 internal EN links.
- No EN internal link points to `.html`.
- No EN internal link points to a missing EN page.

## Hub Strengthening

Hub pages improved:

- `en/index.html`
- `en/lake-bolsena.html`
- `en/things-to-do-near-montefiascone.html`
- `en/tuscia-in-three-days-from-montefiascone.html`
- `en/est-est-est-montefiascone-doc-wine.html`

Each improved hub now gives clearer cluster direction and links to the most relevant child pages.

## FAQ and GEO Readiness

- FAQPage JSON-LD was checked against visible FAQ text.
- JSON-LD parsing passed on all EN pages.
- No invisible FAQ mismatch was found.
- First-page context was strengthened on key pages for AI search extraction.
- Geographic entity relationships were made clearer: Montefiascone -> Lake Bolsena -> Tuscia -> Lazio -> Viterbo.

## Risks Avoided

- No new dates, prices, opening hours or transport guarantees were added.
- No restaurant, hotel or winery claims were invented.
- No DE pages were published.
- No sitemap or redirect behavior was changed.
- No canonical or hreflang `.html` URLs were reintroduced.

## Technical SEO Confirmed

- Canonical URLs remain clean.
- Hreflang URLs remain clean.
- `og:url` remains clean.
- JSON-LD URLs remain clean and valid.
- `sitemap-en.xml` remains 50 clean URLs.
- `sitemap-it.xml` remains 89 clean URLs.
- `sitemap.xml` remains a sitemap index.
- `llms.txt` remains clean.
- No apex non-www, `pages.dev`, `github.io` or DE references were found in the EN production build.

## QA

Command executed:

```bash
npm run build:cloudflare
```

Build result:

- Success.
- Cloudflare package generated in `dist-it`.

Production package QA:

| Area | Result | Notes |
| --- | --- | --- |
| EN pages | PASS | 50 EN HTML pages present |
| IT sitemap | PASS | 89 clean URLs |
| EN sitemap | PASS | 50 clean URLs |
| Sitemap index | PASS | IT and EN included, DE absent |
| Canonical | PASS | Clean URLs, no `.html` |
| Hreflang | PASS | Clean IT/EN/x-default, no DE |
| `og:url` | PASS | Clean URLs |
| JSON-LD | PASS | All parsed successfully |
| Internal EN links | PASS | No broken EN links |
| Placeholder check | PASS | None found |
| Mojibake check | PASS | None found in EN build |
| Internal files | PASS | No `server.py`, `docs`, `README.md`, `/de/` or `sitemap-de.xml` in build |

## Residual Issues

- Some page titles intentionally keep "best" in SEO query phrases such as "best time" or "best viewpoints". These are search-intent labels, not unsupported claims.
- The DE source directory still exists in the repository but remains excluded from production output.

## What Was Not Done

- No new pages were created.
- No pages were deleted.
- No URLs were changed.
- No sitemap was manually changed.
- No redirects were changed.
- No Cloudflare, DNS, Search Console, Analytics or AdSense changes were made.
- No DE publication work was done.
- No redesign or technical refactor was performed.
