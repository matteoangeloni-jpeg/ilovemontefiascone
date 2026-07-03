# FR MVP Editorial Plan

Updated: 2026-07-03  
Branch: `feat/fr-seo-relaunch`  
Scope: source-only French editorial MVP. Public FR remains excluded.

## Objective

Build a natural French editorial layer for the first FR block without reopening the public perimeter.

## First MVP Block

| Page | Status | Priority | Notes |
| --- | --- | --- | --- |
| `fr/index.html` | rewritten now | P0 | Home entry point, gateway to the FR corpus. |
| `fr/guide.html` | rewritten now | P0 | Editorial hub for first visit and navigation. |
| `fr/evenements.html` | rewritten now | P0 | Event hub and seasonal guide. |
| `fr/evenements-dete-a-montefiascone-2026.html` | rewritten now | P0 | Evergreen calendar anchored on verified 2026 events. |
| `fr/que-voir.html` | queued | P1 | Core discovery hub. |
| `fr/que-voir-montefiascone-guide-complet.html` | queued | P1 | Detailed sightseeing guide. |
| `fr/vin.html` | rewritten now | P1 | Wine and tasting hub. |
| `fr/est-est-est-montefiascone-vino-doc.html` | rewritten now | P1 | Wine brand pillar. |
| `fr/degustation-de-vin-de-montefiascone-comment-ca-marche.html` | rewritten now | P1 | Tasting process explanation. |
| `fr/degustation-de-vignobles-de-montefiascone-est-est-est.html` | rewritten now | P1 | Winery tasting spoke. |
| `fr/que-voir-autour-de-litineraire-de-montefiascone.html` | queued | P1 | Nearby destinations hub. |
| `fr/via-francigena-bolsena-montefiascone.html` | queued | P1 | Walking route from Bolsena. |
| `fr/via-francigena-montefiascone-viterbe.html` | queued | P1 | Stage toward Viterbo. |
| `fr/carte.html` | queued | P1 | Map and orientation page. |
| `fr/associations-benevoles-de-montefiascone.html` | queued | P2 | Civic life and volunteering. |
| `fr/week-end-a-montefiascone.html` | queued | P2 | Short-stay planning page. |

## First Manual Recovery Cluster

The first cluster currently being normalized by hand is the core travel/discovery set:

- `fr/index.html`
- `fr/guide.html`
- `fr/que-voir-montefiascone-guide-complet.html`
- `fr/carte.html`
- `fr/lac-de-bolsena-que-voir.html`
- `fr/via-francigena-bolsena-montefiascone.html`
- `fr/montefiascone-en-2-jours.html`

This cluster stays source-only and does not reopen the public FR perimeter.

## Second Manual Recovery Cluster

The second bounded cluster now manually reviewed is the FR events and seasonal calendar set:

- `fr/evenements.html`
- `fr/calendrier-des-evenements-de-montefiascone.html`
- `fr/evenements-dete-a-montefiascone-2026.html`
- `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html`
- `fr/festival-atb-montefiascone.html`
- `fr/est-festival-du-film-de-montefiascone.html`
- `fr/festival-decologie-integrale-de-montefiascone.html`
- `fr/anno-domini-1074-montefiascone.html`

Cluster notes:

- titles, H1, meta descriptions, OG/Twitter titles and JSON-LD were aligned to French clean URLs;
- event pages were rewritten with a stricter prudence rule for dates, access conditions, lineups, programs and organizer claims;
- internal linking was limited to FR pages already revised inside the source corpus;
- public FR remains excluded from the build and from public hreflang, sitemap and llms surfaces.

## Third Manual Recovery Cluster

The third bounded cluster now manually reviewed is the FR wine and tasting set:

- `fr/vin.html`
- `fr/est-est-est-montefiascone-vino-doc.html`
- `fr/degustation-de-vin-de-montefiascone-comment-ca-marche.html`
- `fr/degustation-de-vignobles-de-montefiascone-est-est-est.html`
- `fr/strada-del-vino-est-est-est-est-est-montefiascone.html`
- `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html`

Cluster notes:

- the wine hub, DOC pillar and tasting spokes were fully rewritten in French source form;
- unsupported pricing, booking promises and winery-specific assertions were removed;
- the wine route page is framed as an editorial route, not as an official consortium itinerary;
- the Wine Fair page was kept inside the cluster only to align vocabulary, metadata and internal links with the wine block;
- broader gastronomy pages remain outside this cluster and need a later dedicated pass.

## Fourth Manual Recovery Cluster

The fourth bounded cluster now manually reviewed is the FR local gastronomy and territory-products set:

- `fr/cuisine-typique-de-montefiascone.html`
- `fr/produits-typiques-de-montefiascone-tuscia.html`
- `fr/experiences-gastronomiques-et-nologiques-a-montefiascone.html`

Cluster notes:

- the three gastronomy pages were fully rewritten in French source form;
- product, restaurant, reservation and pricing claims were kept prudent;
- no unsupported addresses, menus, schedules or producer lists were introduced;
- the cluster completes the first FR wine-and-gastronomy block while public FR remains excluded.

## Editing Rules

- Use natural French, not literal translation.
- Keep Italian proper nouns when they are part of the local identity.
- Keep FR excluded from the public build until the full QA gate is passed.
- Do not add `/fr/` to public navigation yet.
- Do not add FR to `llms.txt`, sitemap public indexes, or live hreflang.

## Next Batch

The next FR batch should move beyond wine and gastronomy toward the remaining P1 discovery and utility pages, before any secondary civic or weekend content.
