# SEO UI Post Refresh Check

## Scope

- Sprint branch: `feat/ui-menu-seo-refresh`
- Focus: shared header, clustered navigation, footer consistency, mobile menu polish, selective visual refresh with real `.webp` photography only
- Google Stitch role: reference-only for layout and hierarchy

## SEO check

- `title`: unchanged by the refresh.
- `meta description`: unchanged by the refresh.
- `H1`: unchanged by the refresh.
- `canonical`: unchanged.
- `og:url`: unchanged.
- `hreflang`: unchanged in source logic; public build still exposes only `it`, `en`, `de`, `x-default`.
- Routing strategy: unchanged.
- New navigation and footer links: no clean-URL regressions introduced.

## Public build QA

- `npm run build:cloudflare`: OK
- Public output confirmed: `98 IT / 98 EN / 98 DE`
- `sitemap-it.xml`: `98` clean URLs
- `sitemap-en.xml`: `98` clean URLs
- `sitemap-de.xml`: `98` clean URLs
- `sitemap.xml`: only IT / EN / DE sitemap references
- `sitemap-fr.xml`: absent
- `/fr/`: absent from public build

## llms.txt check

- No `/fr/`
- No `.html`
- No `pages.dev`
- No `github.io`
- Public perimeter still aligned to the production-language triad only

## Navigation and footer check

- Shared runtime normalization handled in `js/main.js`
- Shared visual rules aligned in `css/style.css` and mirrored to `css/style.min.css`
- Language switcher aligned to `IT / EN / DE`
- Footer sections aligned per locale:
  - IT: `Esplora`, `Info pratiche`
  - EN: `Explore`, `Practical info`
  - DE: `Entdecken`, `Praktische Infos`
- Mobile toggle visible at compact viewport
- `body.nav-open` lock added to prevent background scroll while the menu is open

## Visual asset check

- Manual `.webp` images inventoried: `50`
- New manual `.webp` images published in this sprint: `5`
- Google Stitch images published: `0`
- New public images used:
  - `media/gallery/montefiascone-centro-drone.webp`
  - `media/gallery/montefiascone-centro-drone-estate.webp`
  - `media/gallery/montefiascone-eventi-bandiere-notte.webp`
  - `media/gallery/lago-bolsena-tramonto-riva.webp`
  - `media/gallery/via-francigena-scalinata.webp`

## Sample UI smoke test

- Build tested through local static preview using direct built files where needed (`index.html`, `eventi.html`, localized event/lake pages)
- Sample set checked:
  - `index.html`
  - `en/index.html`
  - `de/index.html`
  - `eventi.html`
  - `en/events-montefiascone.html`
  - `de/veranstaltungen-montefiascone.html`
  - `lago-di-bolsena.html`
  - `en/lake-bolsena.html`
  - `de/bolsenasee.html`
  - `via-francigena-bolsena-montefiascone.html`
- Result:
  - localized footer headings rendered correctly
  - language switcher rendered consistently
  - mobile menu toggle visible
  - refreshed photography present on the targeted hub pages

## Encoding and hygiene

- No `/fr/` leakage in public package
- No `.html` URLs inside public sitemaps
- No Stitch references in public output
- No placeholder / draft / lorem markers found in the public build checks executed for this sprint

## Residual notes

- The local static smoke test relies on direct built files for some pages because clean URLs depend on the production redirect layer.
- A broader browser-side sweep after the future deploy is still recommended for final visual confirmation on the live stack.

## Final browser smoke test before push

- Preview servers used for QA:
  - `http://127.0.0.1:4175/`
  - `http://127.0.0.1:4176/` for a fresh-origin retest after the runtime link fix
- Desktop pages tested:
  - `index.html`
  - `eventi.html`
  - `eventi-estate-montefiascone-2026.html`
  - `atb-festival-montefiascone.html`
  - `lago-di-bolsena.html`
  - `vino.html`
  - `mappa.html`
  - `via-francigena-bolsena-montefiascone.html`
  - `giglio-vecchio-montefiascone.html`
  - `en/index.html`
  - `en/events-montefiascone.html`
  - `en/lake-bolsena.html`
  - `en/via-francigena-bolsena-montefiascone.html`
  - `en/atb-festival-montefiascone.html`
  - `de/index.html`
  - `de/veranstaltungen-montefiascone.html`
  - `de/atb-festival-montefiascone.html`
- Mobile pages tested:
  - `index.html`
  - `eventi.html`
  - `lago-di-bolsena.html`
  - `vino.html`
  - `mappa.html`
  - `en/index.html`
  - `en/events-montefiascone.html`
  - `en/lake-bolsena.html`
  - `de/index.html`
- Desktop result:
  - header present and consistent on all sampled pages
  - clustered navigation rendered correctly
  - footer structure stable across IT / EN / DE
  - no horizontal overflow detected in sampled pages
  - no mojibake or placeholder copy detected in sampled pages
- Mobile result:
  - menu toggle opens and closes correctly
  - `body.nav-open` lock works
  - first accordion cluster expands correctly
  - no `/fr/` links in menu, switcher or footer
  - no `.html` links in menu, switcher or footer after the runtime fix
  - no horizontal overflow detected in the sampled mobile pages
- Images:
  - the 5 new `.webp` assets returned `200` in local preview
  - no Stitch image or remote image dependency introduced by the refresh
- Console and runtime:
  - no blocking console `error` or `warn` entries on sampled IT / EN / DE pages
- Micro-fix applied during this gate:
  - `js/main.js`
  - improved `toRelativeUrl()` so local preview and same-page language links are normalised to clean URLs without `.html`
  - production host alternates are now safely reduced to relative clean paths during local browser QA
- FR and public perimeter:
  - FR still absent from the public build
  - `llms.txt` still clean
  - output still `98 IT / 98 EN / 98 DE`
- Final decision:
  - `READY WITH NOTES`
  - Push readiness: `yes`, with residual recommendation to perform one final live visual sweep after deploy.
