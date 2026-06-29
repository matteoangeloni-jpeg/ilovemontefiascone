# Final Release Gate

Updated: 2026-06-29  
Branch: `release/trilingual-public-gate-merge-resolution`  
Scope: static repo `ilovemontefiascone.com` only. The separate Next.js project `D:/ilovemontefiascone` is out of scope.

## Verdict

**READY**

The public technical perimeter is stable, the build passes, and the previously documented German thin-content blocker has now been closed.

## Integration Resolution

- Integration branch: `release/trilingual-public-gate-merge-resolution`
- Source branch merged into integration branch: `feature/de-articles-expansion`
- Validated source commit carried into resolution: `08469b3`
- `main` remained untouched during this pass
- Deploy remained blocked and was not executed

Conflict map and resolution criteria:

- `redirects`: kept the validated trilingual public perimeter behavior and preserved the clean host redirect plus the EN source-only exception redirects; retained the 404 guardrails for non-public helper files.
- `llms`: kept the validated strict public perimeter at `97 / 97 / 97`; no FR entries; no source-only EN exceptions listed as public.
- `sitemap`: kept `sitemap.xml`, `sitemap-it.xml`, `sitemap-en.xml`, `sitemap-de.xml` aligned to the validated public perimeter `97 / 97 / 97`; no `sitemap-fr.xml`.
- `build script`: kept the validated `scripts/build-cloudflare.mjs` logic that builds `97 IT / 97 EN / 97 DE`.
- `homepage and public HTML`: defaulted to the validated `feature/de-articles-expansion` version for homepage, event pages, EN pages and DE pages, because that branch had already passed full SEO, hreflang, metadata and browser QA.
- `docs`: preserved the final reports already created and updated this release gate to document the integration branch pass.

Manual cleanup applied after conflict resolution:

- removed the three legacy DE pages reintroduced by merge history, because they were outside the validated public perimeter:
  - `de/fiera-del-vino-montefiascone.html`
  - `de/tagesausfluege-montefiascone.html`
  - `de/via-francigena-montefiascone.html`

## Branch And Worktree

- Current branch: `feature/de-articles-expansion`
- Merge performed: no
- Deploy performed: no

Observed worktree state in the static repo:

- static corpus files changed or untracked: `236`
- documentation files changed or untracked: `4`
- infra / build / sitemap files changed or untracked: `8`
- other tracked public-control file outside the three buckets: `_redirects`

Worktree notes:

- The repo is intentionally dirty and already contains the previously documented static corpus changes.
- The separate Next.js project was not touched during this gate.
- This gate did not mix work from `D:/ilovemontefiascone`.

## Build And Public Artifacts

Executed:

- `npm run build:cloudflare`

Result:

- build status: pass
- public build counts: `97 IT / 97 EN / 97 DE`
- technical pages present and handled: `404`, `privacy`, `cookie`, `offline`
- no missing page detected in the strict public perimeter
- no undocumented extra public page detected in the strict public perimeter

## Counts

| Area | IT | EN | DE |
| --- | ---: | ---: | ---: |
| Source corpus | 97 | 97 | 97 |
| Public build `dist-it` | 97 | 97 | 97 |
| Language sitemaps | 97 | 97 | 97 |
| `llms.txt` public page sections | 97 | 97 | 97 |

## Sitemap / llms / robots / redirects

Status:

- `sitemap.xml`: present
- `sitemap-it.xml`: present, `97`
- `sitemap-en.xml`: present, `97`
- `sitemap-de.xml`: present, `97`
- `sitemap-fr.xml`: absent
- `llms.txt`: present, `97 / 97 / 97`
- `robots.txt`: present
- `_redirects`: present

Checks:

- no FR URL found in sitemaps
- no FR URL found in `llms.txt`
- no FR rule found in `robots.txt`
- no FR rule found in `_redirects`
- no public internal `.html` links found in the public perimeter
- host canonical redirect is present in `_redirects`
- EN source-only exception redirects are present and coherent:
  - `/en/how-many-days-in-montefiascone -> /en/weekend-in-montefiascone`
  - `/en/where-to-stay-around-lake-bolsena -> /en/where-to-stay-in-montefiascone`
  - `/en/where-to-stay-montefiascone-vs-bolsena-viterbo -> /en/where-to-stay-in-montefiascone`
- no redirect rule found that breaks clean URLs, canonical behavior, or hreflang clusters

## Technical SEO Audit

Automated audit executed on all `291` public pages in source and build.

Source and build both passed with:

- missing `title`: `0`
- missing meta description: `0`
- missing `H1`: `0`
- multiple `H1`: `0`
- missing canonical: `0`
- canonical using `.html`: `0`
- missing `og:url`: `0`
- `canonical != og:url`: `0`
- incomplete Open Graph / Twitter metadata: `0`
- missing hreflang among `it/en/de/x-default`: `0`
- hreflang FR: `0`
- invalid JSON-LD: `0`
- Event nodes missing `startDate` or `location`: `0`

Additional observations:

- no canonical points to `.html`
- no canonical points to excluded EN source-only exceptions
- no canonical points outside the strict public perimeter

## Links And Content Integrity

Source and build both passed with:

- broken internal links: `0`
- internal public links containing `.html`: `0`
- placeholder text: `0`
- mojibake: `0`

Automated content blocker result:

- DE public pages under `220` words: `0`

Closed residual DE pages:

1. `de/bolsena-sehenswuerdigkeiten.html` - `212 -> 369`
2. `de/bolsenasee-an-einem-tag.html` - `205 -> 370`
3. `de/bolsenasee-im-herbst.html` - `195 -> 342`
4. `de/bolsenasee-in-zwei-tagen.html` - `203 -> 346`
5. `de/bolsenasee-sehenswuerdigkeiten.html` - `207 -> 345`
6. `de/capodimonte-bolsenasee-sehenswuerdigkeiten.html` - `203 -> 347`
7. `de/fisch-aus-dem-bolsenasee.html` - `194 -> 381`
8. `de/fotospots-montefiascone-bolsenasee.html` - `214 -> 339`
9. `de/grotte-di-castro-bolsenasee-sehenswuerdigkeiten.html` - `196 -> 350`
10. `de/marta-bolsenasee-sehenswuerdigkeiten.html` - `207 -> 327`
11. `de/schoenste-orte-am-bolsenasee.html` - `209 -> 348`
12. `de/sehenswuerdigkeiten-montefiascone.html` - `193 -> 360`
13. `de/straende-am-bolsenasee.html` - `219 -> 334`
14. `de/vereine-ehrenamt-montefiascone.html` - `196 -> 347`

## UI / UX Sample

Sample verification was run against the built public package served locally on `localhost`.

For browser sampling, the local test server used `.html` file paths because the temporary local server does not implement production clean-URL rewrites. This did not affect:

- page templates
- header / footer rendering
- language switcher rendering
- responsive layout checks
- overflow checks

Triads sampled on desktop and mobile:

- homepage IT / EN / DE
- events IT / EN / DE
- events calendar IT / EN / DE
- Lago di Bolsena IT / EN / DE
- Via Francigena IT / EN / DE
- wine / enogastronomy IT / EN / DE
- Tuscia / day trip IT / EN / DE
- one seasonal page IT / EN / DE
- one DE-strengthened page from the previous sprint IT / EN / DE

Sample results:

- header present across sampled pages: pass
- footer present across sampled pages: pass
- language switcher present with `3` options: pass
- current language state coherent in sampled triads: pass
- desktop overflow: `0`
- mobile overflow: `0`
- desktop nav toggle hidden as expected: pass
- mobile nav toggle visible as expected: pass
- visual structure remained coherent across languages in the sampled pages: pass

No visual blocker was found in the sampled pages.

Post-resolution browser smoke test:

- local verification branch: `release/trilingual-public-gate-merge-resolution`
- local test server: `dist-it` served on `127.0.0.1`
- because the local static server does not implement production clean-URL rewrites, non-homepage pages were sampled through their `.html` paths only for browser QA; this does not alter templates, metadata or layout behavior
- sampled desktop triads passed:
  - homepage IT / EN / DE
  - events IT / EN / DE
  - events calendar IT / EN / DE
  - Lago di Bolsena IT / EN / DE
  - Via Francigena IT / EN / DE
  - one strengthened DE page
  - one DE event page
- sampled mobile pages passed:
  - homepage IT / EN / DE
  - events IT / EN / DE
  - one strengthened DE page
  - one DE event page
- sampled pages all showed:
  - header present
  - footer present
  - language switcher with `IT / EN / DE`
  - horizontal overflow `0`

## Micro-fix Status

Micro-fix applied during this gate:

- no technical micro-fix was required
- only the `14` target DE pages were expanded in content scope

Operational-only actions during the gate:

- local temporary HTTP server started for browser QA
- local temporary HTTP server stopped after verification

## Residual Risks

Non-blocking residual risk:

- the worktree is large and intentionally dirty, so any future merge should be done with explicit scope discipline

## Recommendation

- Ready for final merge on `main`: **yes**
- Ready for deploy: **yes**

## Recommended Next Step

Use this integration branch as the source for the final controlled merge into `main`, then rerun the same release QA once more on `main` immediately before any deploy action.

## Explicit Confirmations

- No merge performed.
- No merge performed on `main`.
- No deploy performed.
- Cloudflare not touched.
- Search Console not touched.
- The Next.js project was not touched.
- `/fr/` was not created.
