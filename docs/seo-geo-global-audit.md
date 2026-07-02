# SEO / GEO Global Audit

Updated: 2026-07-02  
Branch: `feature/de-articles-expansion`  
Scope: static trilingual site only. The separate Next.js project is excluded.

## Verdict

**READY WITH NOTES**

The public trilingual perimeter is technically clean and aligned across source, build and release artifacts. The current repo state also includes a new organic growth documentation set that maps clusters, search intents, linking opportunities and backlog priorities.

## What Was Closed

### Public perimeter

- Source corpus aligned at `98 / 98 / 98`
- Public build aligned at `98 / 98 / 98`
- Public sitemaps aligned at `98 / 98 / 98`
- `llms.txt` aligned to the strict public perimeter

### EN matrix

Three missing public EN equivalents were added:

- `thematic-itineraries-montefiascone`
- `winter-in-montefiascone`
- `editorial-project-montefiascone`

Three EN source-only exceptions remain excluded from the public perimeter and are handled as non-public exceptions.

### DE evergreen blocker lift

The five priority German evergreen pages were strengthened to remove the pre-gate quality blocker:

- `touristeninformation-montefiascone`
- `beste-reisezeit-montefiascone`
- `karte-montefiascone`
- `bolsenasee-mit-kindern`
- `civita-di-bagnoregio-ab-montefiascone`

### Mojibake cleanup

Affected public pages and `llms.txt` were normalized so the public perimeter no longer exposes mojibake in source or in `dist-it`.

### Current P1 refinement note

The main remaining editorial priority is not perimeter expansion but ongoing quality control on the existing pillar pages:

- keep event titles concise and search-friendly
- preserve prudent wording on event details that are not visible or verified
- avoid introducing new URLs while reinforcing internal linking across the three public languages

### Organic growth documentation set

The current strategy layer is now documented in four dedicated files:

- `docs/organic-cluster-map.md`
- `docs/query-intent-map.md`
- `docs/internal-linking-opportunities.md`
- `docs/content-backlog-organic-growth.md`

This audit should now be read as the executive index for the release state and the next organic-growth phase, not as a duplicate of the cluster maps themselves.

## Final QA Results

Automated QA was executed on all `294` public pages in source and in the generated `dist-it` package.

| Check | Source | Build |
| --- | --- | --- |
| Missing title | 0 | 0 |
| Missing meta description | 0 | 0 |
| Missing canonical | 0 | 0 |
| Canonical using `.html` | 0 | 0 |
| Missing `og:url` | 0 | 0 |
| `canonical != og:url` | 0 | 0 |
| Incomplete social metadata | 0 | 0 |
| Missing hreflang among `it/en/de/x-default` | 0 | 0 |
| FR hreflang | 0 | 0 |
| Non-reciprocal hreflang | 0 | 0 |
| Internal `.html` links | 0 | 0 |
| Broken internal links | 0 | 0 |
| Invalid JSON-LD | 0 | 0 |
| Event nodes missing `startDate` or `location` | 0 | 0 |
| Mojibake | 0 | 0 |
| Placeholder text | 0 | 0 |

## Release Artifact Status

- `npm run build:cloudflare`: pass
- `sitemap-it.xml`: `98`
- `sitemap-en.xml`: `98`
- `sitemap-de.xml`: `98`
- `sitemap.xml`: pass
- `llms.txt`: `98 / 98 / 98` public page sections
- `robots.txt`: no FR references
- `_redirects`: canonical host redirect, EN exception redirects, technical 404 rules
- `/fr/`: absent
- `sitemap-fr.xml`: absent

## DE Thin-Content Sprint Closure

The residual DE backlog below `220` words is now fully closed across the public perimeter.

- the first editorial sprint lifted the previously documented `16` short DE pages
- a final mini-sprint then lifted the remaining `14` public DE pages that still sat below the gate threshold
- current public DE thin-content count under `220` words: `0`

This means the strict publication gate remains ready and the previously documented German thin-content debt no longer applies anywhere in the public DE set.

## Recommended Next Step

Move from technical closure to structured organic growth:

1. apply only the safest internal-linking opportunities from the new opportunity map
2. refine the strongest hubs rather than creating new pages
3. keep future content aligned with the no-invention data rule and the public perimeter
4. use the cluster map and intent map as the source of truth for the next editorial batch

## Confirmations

- No merge performed.
- No deploy performed.
- Cloudflare not touched.
- Search Console not touched.
- The Next.js project was not touched.
- `/fr/` was not created.
