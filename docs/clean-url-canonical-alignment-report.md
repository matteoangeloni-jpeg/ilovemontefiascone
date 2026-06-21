# Clean URL Canonical Alignment Report

Date: 2026-06-21
Branch: `fix/clean-url-canonical-alignment`
Canonical domain: `https://www.ilovemontefiascone.com`

## Problem Detected

The issue affected both IT and EN.

Before this fix:

- `sitemap-it.xml`: 89 URLs total, 88 URLs ending in `.html`, 1 clean homepage URL.
- `sitemap-en.xml`: 50 URLs total, 49 URLs ending in `.html`, 1 clean homepage URL.
- Live `.html` URLs returned `308` redirects to clean URLs.
- Canonical, hreflang, `og:url` and JSON-LD used `.html` URLs, while the live final URLs were clean.

## Final URL Rule

- Canonical URL: clean final URL without `.html`.
- Sitemap URL: clean final URL without `.html`.
- hreflang URL: clean final URL without `.html`.
- `og:url`: clean final URL without `.html`.
- JSON-LD `url`, `@id`, breadcrumb `item`: clean final URL without `.html`.
- `.html` redirects must remain available for backward compatibility.

## Files Modified

- All published IT HTML pages with absolute canonical-domain SEO signals.
- All published EN HTML pages with absolute canonical-domain SEO signals.
- `sitemap-it.xml`
- `sitemap-en.xml`
- `llms.txt`
- `docs/clean-url-canonical-alignment-report.md`

Template/source file `base.html` is not published and is not included in `dist-it`.

## Sitemap Before And After

| Sitemap | Before | After |
|---|---:|---:|
| `sitemap-it.xml` total URLs | 89 | 89 |
| `sitemap-it.xml` `.html` URLs | 88 | 0 |
| `sitemap-en.xml` total URLs | 50 | 50 |
| `sitemap-en.xml` `.html` URLs | 49 | 0 |

`sitemap.xml` remains a sitemap index.

## Canonical Before And After

- Before: canonical URLs pointed to `.html` on most published pages.
- After: canonical URLs point to clean final URLs.

Examples:

- `https://www.ilovemontefiascone.com/en/lake-bolsena-in-two-days`
- `https://www.ilovemontefiascone.com/lago-di-bolsena-in-2-giorni`

## Hreflang Before And After

- Before: IT/EN/x-default alternates pointed to `.html` URLs for most pages.
- After: IT/EN/x-default alternates point to clean final URLs.
- No `de` hreflang was added.

## OG And Twitter Before And After

- Before: `og:url` pointed to `.html` URLs.
- After: `og:url` points to clean final URLs.
- Twitter image/title/description were not otherwise changed.

## JSON-LD Before And After

- Before: JSON-LD `url`, `@id` and breadcrumb `item` values often used `.html`.
- After: JSON-LD URL-like fields use clean final URLs.
- JSON-LD parsing passed in QA.

## llms.txt Before And After

- Before: many canonical links used `.html`.
- After: public IT and EN links use clean final URLs.
- DE remains excluded.
- No `pages.dev`, `github.io` or apex non-www URLs are present.

## Redirect Check

`.html` redirects are preserved. They should continue to return `308` to clean URLs, with the clean URL returning `200`.

## QA Summary

- Build command: `npm run build:cloudflare`.
- Expected `dist-it/sitemap-it.xml`: 89 clean URLs.
- Expected `dist-it/sitemap-en.xml`: 50 clean URLs.
- Expected `dist-it`: no `de`, no `sitemap-de.xml`, no `server.py`, no `docs`, no `README.md`.
- Expected public signals: no `.html` in canonical, hreflang, `og:url`, JSON-LD URL fields, sitemap locs or `llms.txt`.

## What Was Not Touched

- Cloudflare settings.
- DNS.
- Redirect rules.
- Search Console.
- Analytics.
- AdSense.
- DE publication.
- Editorial content.
