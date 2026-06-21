# Estate 2026 Events Visibility + Internal Linking Sprint

## Scope

Branch: `feature/estate-2026-events-visibility`

Base branch: `main`

Base commit verified before work: `538e59d Clean event JSON-LD URL signals`

This sprint improves the visibility of the Summer 2026 event cluster without creating new pages, changing URLs, changing sitemap counts, modifying robots, changing redirects, publishing DE, or adding unverified event details.

## Pages Updated

- `index.html`
- `en/index.html`
- `eventi.html`
- `eventi-estate-montefiascone-2026.html`
- `en/montefiascone-summer-events-2026.html`
- `vino.html`
- `lago-di-bolsena.html`
- `cosa-vedere.html`
- `en/montefiascone-wine-guide.html`
- `en/where-to-stay-in-montefiascone.html`

## Homepage Changes

Italian homepage now links directly to:

- Estate 2026 calendar
- Fiera del Vino
- Est Film Festival
- Est-Lake Festival

English homepage now links directly to:

- Montefiascone Summer Events 2026
- Montefiascone Wine Fair and traditions
- Est Film Festival
- Est-Lake Festival

## Event Hub Changes

The Italian and English Summer 2026 hub pages now include an event-by-theme block:

- Wine / Fiera del Vino
- Cinema / Est Film Festival
- Lake / Est-Lake Festival
- Heritage / Anno Domini 1074
- Motorsport / Lago-Montefiascone Hill Climb
- Culture / Saint Margaret and Panorami

The general Italian event hub now includes direct internal links to the main Summer 2026 event pages.

## Internal Linking Changes

Added contextual links from:

- Wine hub to Fiera del Vino and Estate 2026.
- Lake Bolsena hub to Est-Lake Festival and Estate 2026.
- Things to see hub to Estate 2026, Anno Domini 1074 and Saint Margaret.
- English wine guide to Wine Fair and Summer Events 2026.
- English where-to-stay guide to Summer Events 2026, Wine Fair and Est Film Festival.

## Social Preview

The Summer 2026 IT/EN hub pages now use an existing photographic portal asset for `og:image`, `twitter:image` and JSON-LD `image`:

`https://www.ilovemontefiascone.com/media/gallery/fieradelvino-rocca-notte.jpg`

This avoids relying on the official poster as the social sharing image.

## Editorial Guardrails

No new times, prices, ticketing details, registrations, traffic plans or programme details were added.

All new event references are intentionally evergreen and direct users to verify operational details on official channels.

## Technical Guardrails

- No URL changes.
- No new pages.
- No redirects changed.
- No sitemap count changes intended.
- No `sitemap-de.xml`.
- No DE publishing.
- No Cloudflare, DNS, Search Console, Analytics or AdSense changes.

## QA Notes

Build command executed:

`npm run build:cloudflare`

Result: passed.

Sitemap counts after build:

- `sitemap-it.xml`: 97 clean URLs, 0 `.html` URLs.
- `sitemap-en.xml`: 77 clean URLs, 0 `.html` URLs.
- `sitemap.xml`: unchanged sitemap index.

Public build exclusion checks:

- `dist-it/docs`: absent.
- `dist-it/de`: absent.
- `dist-it/server.py`: absent.
- `dist-it/README.md`: absent.
- `dist-it/sitemap-de.xml`: absent.

SEO signal checks on modified pages:

- canonical: clean URLs.
- hreflang: clean URLs.
- `og:url`: clean URLs.
- JSON-LD URL fields: clean URLs.
- JSON-LD syntax: valid on all modified pages.

The build package still contains generated `.html` files, which is the existing build behaviour; sitemap and SEO signals remain clean.

The repository still contains pre-existing mojibake in several legacy Italian pages. This sprint did not perform a global encoding cleanup because that would exceed the requested scope.

## Recommended Next Step

Merge this branch only after build and sitemap QA confirm that IT and EN sitemap counts remain unchanged and DE/internal files remain excluded from the public build.
