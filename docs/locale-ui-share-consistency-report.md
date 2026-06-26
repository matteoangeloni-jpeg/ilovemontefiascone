# Locale UI + Share Consistency Sprint

Branch: `feature/locale-ui-share-consistency`

Base commit: `30a01b8 Fix homepage brand social preview`

Scope: UI/UX consistency audit across IT/EN pages and reusable social sharing component. No deploy, no merge, no sitemap/canonical/hreflang changes, no DE publishing, no editorial rewrites.

## Phase 1 - UI/UX Audit

| Area | Files / samples | Severity | Finding | Minimal correction |
| --- | --- | --- | --- | --- |
| Homepage layout | `index.html`, `en/index.html` | P1 | IT homepage uses the newer rich hub/card layout; EN homepage uses a lighter article-like layout. The system still shares fonts and CSS, but the perceived UX differs. | Do not redesign in this sprint. Needs a dedicated homepage parity sprint if desired. |
| Main navigation | IT hub pages vs EN hub pages | P2 | IT and EN menus are translated but not identical in item set. IT includes Gallery/Map/Associations more often; EN prioritises practical travel pages. | Keep as content strategy difference. Avoid structural changes without an IA decision. |
| Footer | IT article pages vs EN article pages | P2 | IT footer has more trust/credits links; EN footer is shorter. | Keep for now. A future footer partial/template would improve consistency. |
| Language switcher | `vino.html`, `lago-di-bolsena.html`, some IT pages | P2 | Some legacy IT links still point to `.html` variants while canonical signals are clean. | Out of scope: do not clean legacy `.html` links in this sprint. |
| Card density | `vino.html` vs `en/montefiascone-wine-guide.html` | P2 | IT hub pages are denser and more card-rich than concise EN guide pages. | Keep as editorial depth difference. Share component uses common styling. |
| Social sharing | All event/guide/article pages | P1 | No reusable share UI existed across locales. | Implement reusable JS/CSS component shared across IT and EN. |

## Phase 2 - Minimal UI/UX Corrections

No broad layout refactor was made. The only UI addition is a shared component with common CSS tokens, so pages in IT and EN receive the same interaction pattern without changing their content structure.

## Phase 3 - Share Component

Implemented in:

- `js/main.js`
- `css/style.css`

Component behaviour:

- Detects page language from `<html lang>`.
- Uses canonical URL if present.
- Uses `og:title`, `twitter:title` or `document.title`.
- Uses `og:description` or meta description.
- Supports Web Share API through `navigator.share()`.
- Falls back to copy link, WhatsApp, Facebook, X/Twitter, Telegram and LinkedIn.
- Encodes URL and text with `encodeURIComponent`.
- Avoids automatic popups.
- Uses explicit user actions only.
- Provides accessible labels and `aria-live` copy feedback.
- Excludes homepage and service pages.

Labels:

- IT: `Condividi`, `Copia link`, `Link copiato`.
- EN: `Share`, `Copy link`, `Link copied`.

## Phase 4 - Placement

The share bar is automatically inserted on eligible content pages:

- after `.detail-hero__panel` when present;
- otherwise after `.content-card .content-stack`;
- otherwise after the first `main .card`.

Excluded paths:

- `/`
- `/en/`
- `/privacy`
- `/cookie`
- `/offline`
- `/404`

No sitemap, service page, DE page or technical page is targeted.

## Phase 5 - Social Metadata

Sampled IT/EN pages already expose the expected social metadata:

- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`

No new metadata architecture was created.

## QA Checklist

To execute before merge:

- `npm run build:cloudflare`
- JS syntax check.
- Sitemap counts unchanged.
- No `.html` introduced in sitemap.
- `/de/` remains excluded from build.
- Share fallback URLs encode canonical/title correctly.
- Copy link fallback is available.
- No Search Console, Cloudflare, DNS or deploy changes.

## Out of Scope

- Cloudflare production P0 deploy issue.
- Mojibake cleanup.
- Legacy `.html` internal link cleanup.
- Homepage IT/EN redesign parity.
- Footer/navigation information architecture redesign.
