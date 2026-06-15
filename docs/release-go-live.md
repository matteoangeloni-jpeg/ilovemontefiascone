# Release / Go-live — IT soft launch

## What ships
The public deploy is the **IT package only** (`dist-it/`): 52 HTML (48 indexable + privacy/cookie/404/offline noindex), plus `assets/ css/ icons/ js/ media/`, `manifest.json`, `sw.js`, `pwa-boot.js`, `robots.txt`, `sitemap.xml` (index) and `sitemap-it.xml`.

## Pre-merge checklist
- [ ] Branch to merge: **`claude/eager-albattani-shs17k`** → **`main`**.
- [ ] **GitHub → Settings → Pages → Source = GitHub Actions** (NOT "Deploy from a branch"). This is the single most important config: a branch-root source would publish the dirty repo root (en/, de/, .md, server.py, …). The Actions source publishes only `dist-it/`.
- [ ] Confirm `.github/workflows/pages.yml` is present and unchanged (build `dist-it` via `build-soft-launch-it.ps1` → `upload-pages-artifact` `./dist-it` → `deploy-pages`).

## Merge & deploy
1. Merge the working branch into `main` (push to `main`).
2. The workflow triggers on `push: main`. Watch the **build** job (windows, pwsh) → success; then the **deploy** job → success.
3. Note the deployment `page_url` and open it.
4. Run `docs/post-deploy-seo-checklist.md` section B (live smoke test).

## Verify final URL
- Homepage, hubs and new clusters load over HTTPS at the custom domain `ilovemontefiascone.com`.
- `/sitemap.xml`, `/sitemap-it.xml`, `/robots.txt`, `/404.html` resolve.
- `/en/` and `/de/` return 404 (not deployed).

## Rollback plan
- GitHub Pages keeps previous deployments: if a release breaks, **re-run** the last good "Deploy Montefiascone Pages" run, or revert the offending commit on `main` and let the workflow redeploy.
- The site is static and atomic per deploy: rollback = redeploy a previous commit. No database/state to migrate.
- If a stale-cache issue appears, the SW version bump (`mf-pwa-v10-…`) + controllerchange reload refreshes clients; the `?no-sw-cache=1` query helps during QA.

## Known issues / open TODOs (non-blocking)
- Editorial owner not yet named in `progetto-editoriale.html` (placeholder + TODO present).
- Event pages use `Article` schema (no `Event` dates) until dates are confirmed from official sources.
- Some newer pages are concise (~500–700 words); deepen over time with verified facts.
- Heavy gallery JPGs can be further compressed if LCP needs it.

## Not yet published / not active (by design)
- **EN**: prepared under `/en/` but **not published** — excluded from `dist-it`, blocked in `robots.txt`, absent from sitemaps, no IT→EN hreflang. See `docs/en-localization-status.md` (status: QUASI PUBBLICABILE, pending human review + publish steps).
- **DE**: legacy drafts only; **not published**, excluded and robots-blocked.
- **FR / ES**: not started.
- **Monetization / AdSense / CMP**: **not active**; no ad code, no analytics, no tracking on the published pages.

## Sign-off
- [ ] Pre-merge checklist complete.
- [ ] Deploy success + live smoke test (post-deploy checklist B) passed.
- [ ] Search Console + Rich Results scheduled (24h checklist).
