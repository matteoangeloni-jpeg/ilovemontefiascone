# Post-deploy SEO / QA Checklist — IT go-live

Deploy model: **GitHub Actions → `dist-it/`** (publishes only the IT package). EN/DE excluded.

## A. Immediately after merge to `main`
- [ ] GitHub Actions **"Deploy Montefiascone Pages"** workflow triggered by the push to `main`.
- [ ] `build` job (windows, `build-soft-launch-it.ps1`) finishes **success**; artifact = `./dist-it`.
- [ ] `deploy` job finishes **success**; note the published `page_url`.
- [ ] Confirm **Settings → Pages → Source = GitHub Actions** (not "Deploy from a branch").

## B. Right after the deploy is live
- [ ] Open the **homepage** on desktop — renders, hero image loads, nav works.
- [ ] Open on **mobile** (or DevTools device mode) — responsive layout, nav toggle works.
- [ ] **No-cache test**: load a page with `?no-sw-cache=1` to bypass the service worker during QA.
- [ ] **Service worker**: confirm `sw.js` (v `mf-pwa-v10-2026-06-14-itlaunch`) is served and registers; controllerchange reload works on update.
- [ ] **404 test**: open a non-existent URL → `404.html` is served with useful links.
- [ ] **Sitemap**: `/sitemap.xml` (index) and `/sitemap-it.xml` load and are valid XML.
- [ ] **robots.txt**: loads; `Disallow: /en/` and `/de/`; `Sitemap:` line present.
- [ ] **Canonical**: spot-check 4–5 pages → self-referential absolute URLs.
- [ ] **Main pages**: open homepage, cosa-vedere, guide, eventi, vino, mappa, lago-di-bolsena, come-arrivare — all 200 OK.
- [ ] **Internal links**: click through hub → spoke on a couple of clusters; no 404.
- [ ] **Images**: hero + gallery load; WebP served where available; no broken images.
- [ ] **/en/ and /de/**: confirm they are **not reachable** (return 404) — they are not deployed.

## C. Within 24 hours
- [ ] **PageSpeed Insights** (mobile + desktop) on: homepage, a long guide (`cosa-vedere-montefiascone-guida-completa`), an itinerary (`montefiascone-in-un-giorno`), the map (`mappa`), an event page (`eventi-tradizioni…`), `lago-di-bolsena`. Record LCP/CLS/INP/FCP/TTFB.
- [ ] **Search Console**: submit sitemap, inspect homepage + hubs (see `search-console-checklist.md`).
- [ ] **Rich Results Test** on the live URLs in `rich-results-checklist.md`.
- [ ] Verify GSC reads the sitemap and discovers ~48 URLs.

## D. Within 7 days
- [ ] GSC: pages indexed rising; first queries/impressions; no unexpected 404/canonical issues.
- [ ] CWV field data starting to appear (CrUX) — watch LCP on image-heavy pages.
- [ ] Fix any flagged structured-data or mobile issues.
- [ ] Review low-CTR titles/descriptions.

## E. Within 30 days
- [ ] GSC: top pages/queries; coverage = 48 indexed; investigate any "not indexed".
- [ ] CWV: confirm LCP/CLS/INP within thresholds on key templates; optimise heavy gallery JPGs if LCP suffers.
- [ ] Internal-linking and new-page opportunities (editorial roadmap).
- [ ] Re-check event pages: confirm/refresh any dates against official sources.

## Quick reference (current published state)
- Published HTML: **52** (48 indexable + privacy, cookie, 404, offline as noindex).
- Sitemap URLs: **48** (it + x-default self).
- SW: `mf-pwa-v10-2026-06-14-itlaunch`; asset token `?v=2026-06-14-itlaunch`.
- JSON-LD: 47 blocks, all valid.
