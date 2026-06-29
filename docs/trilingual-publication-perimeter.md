# Trilingual Publication Perimeter

Updated: 2026-06-29  
Branch: `feature/de-articles-expansion`

## Final Rule

The public perimeter for this release is a strict trilingual parity set:

- `97` IT public pages
- `97` EN public pages
- `97` DE public pages

No FR layer is present in source, build, hreflang, sitemap or robots.

## Included Public Sets

### IT

- Root guide corpus only
- Technical HTML kept separate: `404.html`, `cookie.html`, `offline.html`, `privacy.html`

### EN

- Only the 97 public EN pages aligned with the strict publication perimeter

### DE

- Only the 97 public DE pages aligned with the strict publication perimeter

## Explicit Exclusions

### Source-only EN exceptions

These remain in source and documentation but are excluded from the public perimeter:

- `en/how-many-days-in-montefiascone.html`
- `en/where-to-stay-around-lake-bolsena.html`
- `en/where-to-stay-montefiascone-vs-bolsena-viterbo.html`

### Non-public root HTML

These are not part of the public guide perimeter:

- `base.html`
- `cruscotto-del-viaggiatore-widget.html`
- `mappa-topografica-montefiascone-leaflet.html`
- `quiz-itinerario-tuscia-widget.html`

## Public Artifact Alignment

All public-facing artifacts now match the same perimeter:

| Artifact | Status |
| --- | --- |
| `dist-it` | `97 / 97 / 97` |
| `sitemap-it.xml` | `97` URLs |
| `sitemap-en.xml` | `97` URLs |
| `sitemap-de.xml` | `97` URLs |
| `sitemap.xml` | index of the three language sitemaps |
| `llms.txt` | public page sections at `97 / 97 / 97` |
| `robots.txt` | no FR references |
| `_redirects` | public perimeter + exception routing aligned |

## SEO/GEO Publication Rules

Every public page in the perimeter must satisfy:

- localized `title`
- localized meta description
- clean canonical URL
- `og:url` equal to canonical
- complete social metadata
- reciprocal hreflang `it`, `en`, `de`, `x-default`
- valid JSON-LD
- no internal `.html` links
- no broken internal links
- no mojibake
- no placeholder text

## Status

This perimeter is now **READY** and internally coherent.

## DE Quality Note

The public German layer remains within the same strict perimeter of `97` pages, and the previously documented thin public DE pages have now been strengthened in place without adding, removing or renaming URLs. The current public DE count below `220` words is `0`.
