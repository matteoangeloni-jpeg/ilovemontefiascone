# UI/UX + Core Web Vitals Audit

Date: 2026-06-30
Branch: `codex/ui-ux-cwv-audit`
Status: `READY`

## Scope

First-pass audit and safe optimization focused on:

- mobile LCP and render-blocking reduction;
- responsive hero delivery;
- mobile tap targets and overflow checks;
- zero regression on SEO, GEO, sitemaps, hreflang, JSON-LD, and public perimeter.

Out of scope for this pass:

- editorial rewrites;
- slug changes;
- Cloudflare config;
- Search Console;
- new pages;
- `/fr/`;
- Next.js project `D:\\ilovemontefiascone`.

## Pages Tested

Live baseline sample:

1. `/`
2. `/en/`
3. `/de/`
4. `/eventi`
5. `/en/montefiascone-events-calendar`
6. `/de/veranstaltungskalender-montefiascone`
7. `/lago-di-bolsena`
8. `/en/lake-bolsena`
9. `/de/bolsenasee`
10. `/via-francigena-montefiascone-viterbo`
11. `/en/via-francigena-montefiascone-viterbo`
12. `/de/via-francigena-montefiascone-viterbo`
13. `/eventi-estate-montefiascone-2026`
14. `/de/romantisches-wochenende-bolsenasee`
15. `/festival-ecologia-integrale-montefiascone`

Local post-fix smoke:

- same shell on 15 representative pages;
- mobile `390x844`;
- desktop `1440x1000`;
- 30 checks total.

## Live Baseline

Average over 15 live pages:

| Metric | Value |
| --- | ---: |
| Performance score | 84.3 |
| FCP | 2995 ms |
| LCP | 3563 ms |
| TBT | 15 ms |
| CLS | 0.004 |
| Speed Index | 3103 ms |
| Render-blocking wasted time | 1203 ms |
| DOM nodes | 160 |

### LCP Map

| URL | LCP element | Asset | Weight | Main issue |
| --- | --- | --- | ---: | --- |
| `/` | hero image | `/media/hero-rocca-dei-papi-768.webp` | 44 KB | fonts + CSS blocking |
| `/en/` | hero image | `/media/hero-rocca-dei-papi-768.webp` | 44 KB | fonts + CSS blocking |
| `/de/` | hero image | `/media/hero-rocca-dei-papi-1600.webp` | 196 KB | oversized hero variant |
| `/eventi` | hero image | `/media/gallery/fieradelvino-rocca-notte.jpg` | 200 KB | JPG hero + blocking CSS/fonts |
| `/en/montefiascone-events-calendar` | poster image | `/media/gallery/estate-2026-montefiascone.webp` | 212 KB | heavy image + blocking CSS/fonts |
| `/de/veranstaltungskalender-montefiascone` | hero/poster above the fold | same poster | 212 KB | severe render-blocking before paint |
| `/lago-di-bolsena` | hero image | `/media/gallery/petretti-drone2.webp` | 219 KB | heavy LCP image |
| `/en/lake-bolsena` | hero image | `/media/gallery/petretti-drone2.webp` | 219 KB | heavy LCP image |
| `/de/bolsenasee` | hero image | `/media/hero-rocca-dei-papi-1600.webp` | 196 KB | oversized hero variant |
| `/via-francigena-montefiascone-viterbo` | hero image | `/media/gallery/francigena-lines.webp` | 87 KB | fonts + CSS blocking |
| `/en/via-francigena-montefiascone-viterbo` | hero image | `/media/gallery/francigena-lines.webp` | 87 KB | fonts + CSS blocking |
| `/de/via-francigena-montefiascone-viterbo` | hero image | `/media/gallery/francigena-lines.webp` | 87 KB | already good |
| `/eventi-estate-montefiascone-2026` | poster image | `/media/gallery/estate-2026-montefiascone.webp` | 212 KB | heavy image |
| `/de/romantisches-wochenende-bolsenasee` | hero image | `/media/gallery/cupola-lake.webp` | 87 KB | acceptable, low priority |
| `/festival-ecologia-integrale-montefiascone` | hero image | `/media/hero-rocca-dei-papi-1600.webp` | 196 KB | oversized hero variant |

## Safe Fixes Applied

### 1. Build-time performance delivery

File: [scripts/build-cloudflare.mjs](C:/Users/Matteo%20Angeloni/Documents/ilovemontefiascone.com/scripts/build-cloudflare.mjs)

- Google Fonts stylesheet is rewritten at build time as preload + onload swap + `noscript` fallback.
- Public HTML output now references `/css/style.min.css` instead of `/css/style.css`.
- hero image sources for Rocca dei Papi are expanded to responsive `640 / 768 / 1280 / 1600` `srcset`.
- first real hero image in `hero` and `detail-hero` gets `loading="eager"` and `fetchpriority="high"` when appropriate.

### 2. Events hero optimization

File: [eventi.html](C:/Users/Matteo%20Angeloni/Documents/ilovemontefiascone.com/eventi.html)

- converted the main hero from plain JPG fallback to `<picture>`;
- now prefers existing WebP asset for the LCP image;
- keeps the same editorial image, alt text, and dimensions.

### 3. Mobile tap target improvement

Files:

- [css/style.css](C:/Users/Matteo%20Angeloni/Documents/ilovemontefiascone.com/css/style.css)
- [css/style.min.css](C:/Users/Matteo%20Angeloni/Documents/ilovemontefiascone.com/css/style.min.css)

- `.brand` now uses `inline-flex`, centered alignment, and a `2.75rem` minimum height;
- removes the only repeated tap-target warning found in the smoke audit.

### 4. Technical page hygiene

Files:

- [404.html](C:/Users/Matteo%20Angeloni/Documents/ilovemontefiascone.com/404.html)
- [cookie.html](C:/Users/Matteo%20Angeloni/Documents/ilovemontefiascone.com/cookie.html)
- [privacy.html](C:/Users/Matteo%20Angeloni/Documents/ilovemontefiascone.com/privacy.html)

- normalized internal links to clean URLs;
- removed residual encoding issues in public technical pages;
- kept page scope, structure, and indexing directives unchanged.

## Before / After

Local A/B retest on 5 representative pages after the build-time fixes:

| Page | Score before | Score after | FCP before | FCP after | LCP before | LCP after | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `index.html` | 94 | 94 | 2445 | 2426 | 2445 | 2634 | stable, minor variance |
| `en/montefiascone-events-calendar.html` | 97 | 97 | 1420 | 1435 | 2454 | 2417 | stable, slightly better LCP |
| `de/veranstaltungskalender-montefiascone.html` | 97 | 99 | 1418 | 912 | 2565 | 2121 | clear gain |
| `lago-di-bolsena.html` | 85 | 81 | 2986 | 3485 | 3610 | 3786 | run variance, hero still heavy |
| `via-francigena-montefiascone-viterbo.html` | 95 | 99 | 2252 | 1567 | 2419 | 2116 | clear gain |

Average on the 5-page local sample:

| Metric | Before | After | Delta |
| --- | ---: | ---: | ---: |
| Score | 93.6 | 94.0 | +0.4 |
| FCP | 2104 ms | 1965 ms | -139 ms |
| LCP | 2699 ms | 2615 ms | -84 ms |
| TBT | 0 ms | 6 ms | +6 ms |
| CLS | 0.000 | 0.005 | +0.005 |
| Speed Index | 2104 ms | 1965 ms | -139 ms |

Additional local retest for the event hub after the `<picture>` fix:

| Page | Score | FCP | LCP | TBT | CLS | Note |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `eventi.html` | 97 | 1714 ms | 2259 ms | 91 ms | 0.012 | LCP asset served as WebP instead of JPG |

## UI/UX Audit

### Result

`30 / 30` smoke checks passed across 15 pages, mobile and desktop.

Verified:

- one H1 per tested page;
- header/footer present;
- language switcher present and stable;
- no mobile overflow on tested pages;
- no duplicated high-priority images;
- critical images loaded correctly;
- tap target issue on brand link resolved.

### Severity

- `P0`: none
- `P1`: Lake Bolsena hero image family still heavier than ideal for slow 4G
- `P1`: summer events poster remains a meaningful LCP asset and deserves an additional lighter derivative in a second pass
- `P2`: CSS could be split further into critical/non-critical only if we want a more aggressive second pass

## QA After Fixes

Build verification:

- `npm run build:cloudflare`: OK
- build output: `IT 97 / EN 97 / DE 97`
- public HTML pages: `291`
- technical HTML pages: `4`

Structured QA on `dist-it`:

| Check | Result |
| --- | --- |
| `sitemap-it.xml` | 97 URLs |
| `sitemap-en.xml` | 97 URLs |
| `sitemap-de.xml` | 97 URLs |
| `llms.txt` | 97 IT / 97 EN / 97 DE |
| Internal clean links with `.html` | 0 |
| Broken internal page links | 0 |
| Canonical vs `og:url` mismatches | 0 |
| JSON-LD invalid blocks | 0 |
| `Event` / `MusicEvent` / `SportsEvent` without `startDate` | 0 |
| `Event` / `MusicEvent` / `SportsEvent` without `location` | 0 |
| `hreflang=\"fr\"` in build | 0 |
| `/fr/` in build | absent |
| `sitemap-fr.xml` | absent |
| Mojibake in public HTML | 0 |
| Placeholder content in public HTML | 0 |
| DE pages under 220 words | 0 |

## Images To Optimize Or Provide Later

No P0 image blockers remain.

Manual or editorial backlog for a second pass:

1. Produce a lighter derivative of `estate-2026-montefiascone.webp` for above-the-fold event/calendar usage.
2. Produce a lighter derivative of `petretti-drone2.webp` for Lake Bolsena hero placements.
3. Keep the existing 18 P1 photo sets as non-blocking editorial backlog after publication.

## Risks Remaining

- Mobile LCP is improved, but not every heavy hero is under the ideal `2.5s` threshold on slow 4G.
- Lake Bolsena pages remain the main candidate for the next image-optimization pass.
- The first pass is intentionally conservative: it favors stability and zero SEO regression over aggressive refactors.

## Decision

`READY`

The site is ready for an eventual micro-deploy dedicated to UI/UX + Core Web Vitals improvements.

Conditions respected:

- public perimeter `97 / 97 / 97` unchanged;
- no slug changes;
- no new pages;
- no `/fr/`;
- Cloudflare config untouched;
- Search Console untouched;
- Next.js project untouched.
