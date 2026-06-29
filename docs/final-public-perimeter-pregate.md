# Final Public Perimeter Pre-Gate

Updated: 2026-06-29  
Branch: `feature/de-articles-expansion`  
Scope: static repo `ilovemontefiascone.com` only. The separate Next.js project `D:/ilovemontefiascone` is out of scope.

## Verdict

**READY** for the strict trilingual pre-gate.

The public perimeter, source corpus, build output and release artifacts are now aligned on the same documented target:

- `97` public IT pages
- `97` public EN pages
- `97` public DE pages

## Final Counts

| Area | IT | EN | DE |
| --- | ---: | ---: | ---: |
| Source corpus | 97 | 97 | 97 |
| Public build `dist-it` | 97 | 97 | 97 |
| Language sitemaps | 97 | 97 | 97 |
| `llms.txt` public page sections | 97 | 97 | 97 |

`/fr/` is absent and `sitemap-fr.xml` is absent.

## EN Matrix Closure

The three missing public EN equivalents were created and validated:

- `en/thematic-itineraries-montefiascone.html`
- `en/winter-in-montefiascone.html`
- `en/editorial-project-montefiascone.html`

The three EN source-only exceptions remain excluded from the strict public perimeter and are handled as documented non-public exceptions:

- `en/how-many-days-in-montefiascone.html`
- `en/where-to-stay-around-lake-bolsena.html`
- `en/where-to-stay-montefiascone-vs-bolsena-viterbo.html`

Those three exceptions are not listed as public pages in `llms.txt`, are not part of the 97-page EN public set, and are redirected in `_redirects`.

## DE Evergreen Mini Lift

The five priority evergreen German pages below the previous threshold were strengthened.

| Page | Before | After | Note |
| --- | ---: | ---: | --- |
| `de/touristeninformation-montefiascone.html` | 213 | 481 | current measurement from `HEAD` vs working tree |
| `de/beste-reisezeit-montefiascone.html` | 213 | 441 | current measurement from `HEAD` vs working tree |
| `de/karte-montefiascone.html` | 211 | 382 | current measurement from `HEAD` vs working tree |
| `de/bolsenasee-mit-kindern.html` | 187 | 390 | previous documented audit baseline; file was not available from `HEAD` |
| `de/civita-di-bagnoregio-ab-montefiascone.html` | 221 | 442 | current measurement from `HEAD` vs working tree |

## Artifact Status

`npm run build:cloudflare` now produces a public package with:

- `dist-it/` guide counts: `97 / 97 / 97`
- `sitemap-it.xml`: `97`
- `sitemap-en.xml`: `97`
- `sitemap-de.xml`: `97`
- `sitemap.xml`: index of the three language sitemaps
- `llms.txt`: strict public page sections at `97 / 97 / 97`
- `robots.txt`: no FR, canonical sitemap line present
- `_redirects`: canonical host redirect, EN exception redirects, technical 404 rules

## QA Summary

Executed:

- `npm run build:cloudflare`
- source count verification
- public build count verification
- sitemap verification
- `llms.txt`, `robots.txt` and `_redirects` verification
- source QA on all 291 public pages
- build QA on all 291 public pages inside `dist-it`

Results:

| Check | Result |
| --- | --- |
| Title present | pass |
| Meta description present | pass |
| Canonical present and clean | pass |
| `canonical == og:url` | pass |
| Social metadata complete | pass |
| Reciprocal hreflang `it/en/de/x-default` | pass |
| FR hreflang | absent |
| Internal `.html` links | 0 |
| Broken internal links | 0 |
| JSON-LD validity | pass |
| Event nodes missing `startDate` or `location` | 0 |
| Placeholder text | 0 |
| Mojibake in source public pages | 0 |
| Mojibake in build public pages | 0 |

## Post-Gate Addendum

The pre-gate verdict remains valid, and the follow-up DE editorial sprint has now closed the residual thin-content list that was documented here before.

All `16` previously listed short public DE pages were strengthened in place on `2026-06-29`, with no change to:

- the `97 / 97 / 97` public perimeter
- URLs or slugs
- sitemap counts
- `llms.txt` counts
- FR absence

This means the pre-gate document no longer carries an open public DE thin-content residual for the static release set.

## Explicit Confirmations

- No merge performed.
- No deploy performed.
- Cloudflare not touched.
- Search Console not touched.
- The separate Next.js project was not touched.
- `/fr/` was not created.
