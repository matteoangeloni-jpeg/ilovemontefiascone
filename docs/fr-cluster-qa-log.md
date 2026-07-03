# FR Cluster QA Log

Updated: 2026-07-03
Branch: `feat/fr-seo-relaunch`
Scope: source-only French recovery clusters. Public FR remains excluded.

## Cluster completed

1. `fr/index.html`
2. `fr/guide.html`
3. `fr/que-voir-montefiascone-guide-complet.html`
4. `fr/carte.html`
5. `fr/lac-de-bolsena-que-voir.html`
6. `fr/via-francigena-bolsena-montefiascone.html`
7. `fr/montefiascone-en-2-jours.html`

## Second cluster completed

1. `fr/evenements.html`
2. `fr/calendrier-des-evenements-de-montefiascone.html`
3. `fr/evenements-dete-a-montefiascone-2026.html`
4. `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html`
5. `fr/festival-atb-montefiascone.html`
6. `fr/est-festival-du-film-de-montefiascone.html`
7. `fr/festival-decologie-integrale-de-montefiascone.html`
8. `fr/anno-domini-1074-montefiascone.html`

## Third cluster completed

1. `fr/vin.html`
2. `fr/est-est-est-montefiascone-vino-doc.html`
3. `fr/degustation-de-vin-de-montefiascone-comment-ca-marche.html`
4. `fr/degustation-de-vignobles-de-montefiascone-est-est-est.html`
5. `fr/strada-del-vino-est-est-est-est-est-montefiascone.html`
6. `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html`

## Editorial goals

- translate visible French surfaces without reopening the full 98-page corpus;
- keep each manual cluster bounded and reviewable;
- keep all public FR paths excluded from the build;
- attenuate operational event claims when details are not fully stable.

## QA checkpoints

- French titles aligned;
- French meta descriptions aligned;
- French H1 and section labels aligned;
- cluster-only internal linking preferred;
- no public `/fr/` output;
- no `sitemap-fr.xml` in the public build;
- no mojibake introduced.

## Second cluster QA table

| File | Cluster | Title | Meta | H1 | Body FR | Event data prudent | Links | Canonical | Structured data | Residuals | Interventions | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `fr/evenements.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | FR hub copy, FR links, FR FAQ | `FR_READY_SOURCE` |
| `fr/calendrier-des-evenements-de-montefiascone.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | FR FAQ, FR labels, FR support links | `FR_READY_SOURCE` |
| `fr/evenements-dete-a-montefiascone-2026.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | FR OG URL, FR JSON-LD ids, FR FAQ | `FR_READY_SOURCE` |
| `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | softer event claims, FR body, FR related links | `FR_READY_SOURCE` |
| `fr/festival-atb-montefiascone.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | artist-heavy claims softened, uncertain access/prices removed from JSON-LD | `FR_READY_WITH_NOTES` |
| `fr/est-festival-du-film-de-montefiascone.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | FR naming aligned to Est Film Festival, FR JSON-LD ids | `FR_READY_SOURCE` |
| `fr/festival-decologie-integrale-de-montefiascone.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | Italian residuals removed, FR summary restored, prudent opening details retained | `FR_READY_WITH_NOTES` |
| `fr/anno-domini-1074-montefiascone.html` | FR events and seasonal calendar | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | Italian residuals removed, tasting table localized, practical notes normalized | `FR_READY_WITH_NOTES` |

## Notes

- Pages excluded from this cluster: other FR event pages outside the bounded 8-page set, including `fr/fete-de-santa-margherita-montefiascone.html`, `fr/est-festival-du-lac-montefiascone.html` and `fr/panoramas-du-festival-de-montefiascone.html`.
- Sensitive event data attenuated in the cluster:
  - ATB access conditions, lineup certainty and organizer assumptions softened;
  - Foire du Vin daily-program certainty reduced;
  - Festival d'écologie intégrale and A.D. 1074 kept only where the source already exposes dates, places or named opening elements.
- Public FR remains blocked until a future release gate explicitly reopens it.

## Third cluster QA table

| File | Cluster | Title | Meta | H1 | Body FR | Wine data prudent | Links | Canonical | Structured data | Residuals | Interventions | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `fr/vin.html` | FR wine and gastronomy | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | FR collection hub rebuilt, FR item list and FAQ aligned, cluster links normalized | `FR_READY_SOURCE` |
| `fr/est-est-est-montefiascone-vino-doc.html` | FR wine and gastronomy | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | FR pillar rewritten, legend and DOC context clarified, FAQ normalized | `FR_READY_SOURCE` |
| `fr/degustation-de-vin-de-montefiascone-comment-ca-marche.html` | FR wine and gastronomy | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | tasting-process page rewritten, operational uncertainty made explicit, FR FAQ rebuilt | `FR_READY_SOURCE` |
| `fr/degustation-de-vignobles-de-montefiascone-est-est-est.html` | FR wine and gastronomy | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | winery-tasting spoke rewritten, unsupported specifics removed, FR route links aligned | `FR_READY_SOURCE` |
| `fr/strada-del-vino-est-est-est-est-est-montefiascone.html` | FR wine and gastronomy | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | route page reframed as editorial itinerary, FR breadcrumbs and FAQ rebuilt | `FR_READY_SOURCE` |
| `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html` | FR wine and gastronomy | OK | OK | OK | OK | OK | OK | OK | OK | none blocking | encoding residue removed, wine-cluster linking tightened, prudent event framing preserved | `FR_READY_SOURCE` |

## Third cluster notes

- Bounded cluster kept intentionally to six pages, even though the broader gastronomy area includes additional FR sources.
- Pages explicitly excluded from this pass:
  - `fr/cuisine-typique-de-montefiascone.html`
  - `fr/produits-typiques-de-montefiascone-tuscia.html`
  - `fr/experiences-gastronomiques-et-nologiques-a-montefiascone.html`
- Exclusion reason: these pages still need a dedicated gastronomy cleanup pass and would have reduced QA confidence if folded into the wine cluster.
- Prudence rule maintained:
  - no unsupported pricing;
  - no unsupported winery booking conditions;
  - no unsupported restaurant or partner claims;
  - Foire du Vin page keeps only already published date references and non-definitive program wording.
