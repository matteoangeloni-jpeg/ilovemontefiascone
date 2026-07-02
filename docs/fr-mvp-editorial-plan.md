# FR MVP Editorial Plan

Updated: 2026-07-02  
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
| `fr/vin.html` | queued | P1 | Wine and tasting hub. |
| `fr/est-est-est-montefiascone-vino-doc.html` | queued | P1 | Wine brand pillar. |
| `fr/degustation-de-vin-de-montefiascone-comment-ca-marche.html` | queued | P1 | Tasting process explanation. |
| `fr/degustation-de-vignobles-de-montefiascone-est-est-est.html` | queued | P1 | Winery tasting spoke. |
| `fr/que-voir-autour-de-litineraire-de-montefiascone.html` | queued | P1 | Nearby destinations hub. |
| `fr/via-francigena-bolsena-montefiascone.html` | queued | P1 | Walking route from Bolsena. |
| `fr/via-francigena-montefiascone-viterbe.html` | queued | P1 | Stage toward Viterbo. |
| `fr/carte.html` | queued | P1 | Map and orientation page. |
| `fr/associations-benevoles-de-montefiascone.html` | queued | P2 | Civic life and volunteering. |
| `fr/week-end-a-montefiascone.html` | queued | P2 | Short-stay planning page. |

## Editing Rules

- Use natural French, not literal translation.
- Keep Italian proper nouns when they are part of the local identity.
- Keep FR excluded from the public build until the full QA gate is passed.
- Do not add `/fr/` to public navigation yet.
- Do not add FR to `llms.txt`, sitemap public indexes, or live hreflang.

## Next Batch

The next FR batch should focus on the P1 pages before any secondary civic or weekend content.
