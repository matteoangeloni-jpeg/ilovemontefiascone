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
