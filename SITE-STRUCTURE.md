# Site Structure — ilovemontefiascone.com

Prepared: 2026-07-22
Source: live repository state (`js/main.js` NAV_CONFIG, `scripts/fr-public-perimeter.mjs`, `sitemap-*.xml`, `scripts/build-cloudflare.mjs`)

## 1. URL Hierarchy

Each language is a self-contained root: IT at `/`, EN at `/en/`, DE at `/de/`, FR at `/fr/`. There is no shared `/blog/` or `/en/blog/` path — every content page is a flat top-level slug within its language root (e.g. `/cosa-vedere-montefiascone-guida-completa`, `/en/what-to-see-montefiascone`, `/de/sehenswuerdigkeiten-montefiascone`, `/fr/que-voir-montefiascone-guide-complet`). This is a deliberate flat structure, not a template gap — it keeps URLs short and topic-first, at the cost of no path-based topic grouping (grouping is done via internal linking and the nav clusters below, not via URL).

```
/                                    IT root (99 pages)
/en/                                 EN root (99 pages)
/de/                                 DE root (99 pages)
/fr/                                 FR root (29 of 98 source pages published)
```

## 2. Content Clusters (hub-and-spoke, shared across IT/EN/DE)

The dynamic navigation (`NAV_CONFIG` in `js/main.js`) defines five clusters, identically structured in IT, EN and DE (label text translated, `href`/`activePatterns` localized per language):

| Cluster key | IT label | Hub page | Spokes (sample) |
|---|---|---|---|
| `visit` | Visita | `/cosa-vedere` | Guida completa, Mappa, Itinerari tematici, Via Francigena, Galleria |
| `events` | Eventi | `/eventi` | Estate 2026, Fiera del Vino, ATB Festival, Est Film Festival |
| `lake` | Lago e dintorni | `/lago-di-bolsena` | Borghi del lago, Montefiascone in 2 giorni, Itinerario dintorni |
| `wine` | Vino e sapori | `/vino` | Est! Est!! Est!!! DOC, Degustazioni, Cantine, Cucina tipica, Prodotti locali |
| `practical` | Info pratiche | (no single hub) | Come arrivare, Dove mangiare, Dove dormire, Progetto editoriale |

**FR does not yet have an `fr` block in `NAV_CONFIG`.** The FR site currently ships with a static (non-dynamic) nav hardcoded per page, listing 5 links (Accueil, Que voir, Événements, Vin, Lac de Bolsena). This is tracked as P0.4 in `docs/fr-parity-roadmap.md` and is the main structural gap between FR and the other three languages beyond raw page count.

## 3. Page-Count Parity

| Language | Public pages (live build) | Sitemap entries | Status |
|---|---|---|---|
| IT | 99 | 99 | Full — baseline |
| EN | 99 | 99 | Full parity with IT |
| DE | 99 | 99 | Full parity with IT |
| FR | 29 | 29 | **29/98 source pages published** — deliberate gated perimeter, see below |

Verified via `node scripts/build-cloudflare.mjs`, output: `Cloudflare package created ... (IT: 99, EN: 99, DE: 99, FR: 29)`.

## 4. The FR Public Perimeter (unique architectural feature)

Unlike IT/EN/DE, the FR section uses an explicit allowlist: `scripts/fr-public-perimeter.mjs` exports `FR_PUBLIC_FILES`, and the build script (`scripts/build-cloudflare.mjs`) only copies those files into the deployed output, strips any `hreflang="fr"` link or `<a href="/fr/...">` pointing outside the allowlist, and filters `sitemap-fr.xml` accordingly. 69 further FR pages exist in the source tree (`fr/*.html` on disk) but are intentionally **not** built, sitemapped, or linked — they are mid-QA content awaiting the cluster-by-cluster promotion process documented in `docs/fr-parity-roadmap.md`.

This is a strength, not a debt: it guarantees nothing half-finished or machine-translated ever reaches a real user or a crawler, at the cost of a slower rollout. Any future automation (bulk translation, AI-assisted drafting) must respect this gate — adding a file to `fr/` does not publish it; adding it to `FR_PUBLIC_FILES` does.

## 5. Schema Architecture

Confirmed in use across the site (via direct grep of `application/ld+json` blocks), matching the Publisher template's recommendations:

| Schema type | Where used |
|---|---|
| `Article` | Individual content/spoke pages (with `Person` author, `dateModified`) |
| `FAQPage` | Pages with visible Q&A sections (audit found 13 FR pages with schema/visible-content mismatches — see roadmap P0.5) |
| `BreadcrumbList` | All content pages |
| `TouristDestination` | Homepages (all 4 languages) |
| `CollectionPage` + `ItemList` | Hub pages (e.g. `/vino`, `/fr/vin`) |
| `MusicEvent` | Individual concert/event pages |
| `WebSite` | Homepages |
| `Person` | Author bio pages (`about-matteo-angeloni` / `ueber-matteo-angeloni` / `a-propos-matteo-angeloni`, now live in all 4 languages) |

No `HowTo` schema in use (correctly avoided — deprecated). No `LocalBusiness` schema (correct — the site is not itself a local business).

## 6. Known Technical Debt

- `css/de-premium.css` (598 lines, committed in `5f9868e`) is referenced by **zero** `de/*.html` pages as of this audit. Either wire it in or delete it — currently dead weight in the repo with no functional or SEO impact either way.
- FR lacks the dynamic `NAV_CONFIG` block that IT/EN/DE share (see §2).
- No privacy/cookie pages exist in French; the FR footer does not link to any (IT footer links to `/privacy` and `/cookie` with `rel="nofollow"`).

## 7. Sitemap & Discovery Infrastructure

- `sitemap.xml` — index file referencing the four locale sitemaps
- `sitemap-it.xml`, `sitemap-en.xml`, `sitemap-de.xml`, `sitemap-fr.xml` — per-locale, each with reciprocal `xhtml:link hreflang` alternates
- `de/sitemap.xml` — a build-output duplicate copied separately (see commit `5a51750` "copy de/sitemap.xml to build output directory") — worth confirming this isn't creating a second indexable sitemap URL unintentionally
- `llms.txt` — AI-crawler-facing summary, kept in sync with the FR public perimeter (currently 29 `/fr/` entries, matching sitemap-fr.xml)
- `robots.txt` — confirmed live and permissive per the 2026-07-18 audit
