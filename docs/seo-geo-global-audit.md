# SEO / GEO Global Audit

Updated: 2026-06-29  
Branch: `feature/de-articles-expansion`  
Scope: static trilingual site only. The separate Next.js project is excluded.

## Verdict

**READY**

The public trilingual perimeter is now technically clean and aligned across source, build and release artifacts.

## What Was Closed

### Public perimeter

- Source corpus aligned at `97 / 97 / 97`
- Public build aligned at `97 / 97 / 97`
- Public sitemaps aligned at `97 / 97 / 97`
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

## Final QA Results

Automated QA was executed on all `291` public pages in source and in the generated `dist-it` package.

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
- `sitemap-it.xml`: `97`
- `sitemap-en.xml`: `97`
- `sitemap-de.xml`: `97`
- `sitemap.xml`: pass
- `llms.txt`: `97 / 97 / 97` public page sections
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

Move from thin-content remediation to editorial refinement:

1. review internal linking opportunities across the strengthened DE event cluster
2. monitor search performance for DE event and Lake Bolsena discovery queries
3. keep future event pages aligned with the same no-invention data rule

## Confirmations

- No merge performed.
- No deploy performed.
- Cloudflare not touched.
- Search Console not touched.
- The Next.js project was not touched.
- `/fr/` was not created.
