# Homepage Performance & Visual Polish Report

Date: 2026-06-20
Branch: `feature/homepage-mobile-performance-polish`
Scope: homepage IT and EN only.

## Problems Detected

- Mobile LCP is most likely the above-the-fold hero image, not JavaScript: TBT is low and the hero is the first large visual element.
- The Italian homepage already had a WebP preload, but the smallest candidate was 768px.
- The English homepage used the same large hero image without a matching preload, `fetchpriority="high"` or responsive `sizes`.
- The homepage CSS was render-blocking and unminified at about 33 KB.
- The Italian mobile hero was visually tall, increasing the amount of above-the-fold layout before the visitor reached the next content block.

## Fixes Applied

- Added a smaller mobile hero image: `media/hero-rocca-dei-papi-640.webp`.
- Updated IT and EN homepage hero `srcset` with 640, 768, 1280 and 1600 WebP candidates.
- Added a matching LCP preload to the EN homepage.
- Updated the IT preload to prefer the 640px candidate on small screens.
- Set the hero image to `loading="eager"`, `fetchpriority="high"` and `decoding="async"` on IT and EN.
- Created `css/style.min.css` and pointed only the homepage IT/EN to the minified stylesheet.
- Kept below-the-fold images lazy loaded.
- Reduced mobile homepage hero height and padding slightly to improve above-the-fold readability.

## Files Modified

- `index.html`
- `en/index.html`
- `css/style.css`
- `css/style.min.css`
- `media/hero-rocca-dei-papi-640.webp`
- `docs/homepage-performance-polish-report.md`

## Images Created Or Optimized

| Asset | Format | Dimensions | Weight | Use |
|---|---:|---:|---:|---|
| `media/hero-rocca-dei-papi-640.webp` | WebP | 640x482 | ~26 KB | Mobile LCP hero candidate |

Existing hero candidates remain available:

- `media/hero-rocca-dei-papi-768.webp`
- `media/hero-rocca-dei-papi-1280.webp`
- `media/hero-rocca-dei-papi-1600.webp`
- `media/hero-rocca-dei-papi-1600.jpg`

## Expected Effect On Mobile LCP

- Smaller first image candidate for mobile screens should reduce transfer size for the LCP image.
- EN now has an explicit image preload and fetch priority, matching the IT homepage behavior.
- CSS transfer size is reduced for the two homepages.
- The mobile hero is slightly more compact, reducing above-the-fold visual work without redesigning the page.

No PageSpeed score is promised because the final score depends on live network, Cloudflare cache, device emulation and third-party timing.

## QA

- Build passed with `npm run build:cloudflare`.
- `dist-it/index.html` and `dist-it/en/index.html` use `css/style.min.css`.
- Both homepages preload `/media/hero-rocca-dei-papi-640.webp`.
- Both hero images use `loading="eager"` and `fetchpriority="high"`.
- JSON-LD parsed successfully on both homepages.
- Canonical URLs remain on `https://www.ilovemontefiascone.com`.
- OG image remains `/assets/img/og/montefiascone-lake-bolsena-og.jpg`.
- `sitemap.xml`, `sitemap-it.xml`, `sitemap-en.xml` and `robots.txt` are present and valid in the build output.
- `de/` remains excluded and `robots.txt` still blocks `/de/`.
- Internal files checked as absent from `dist-it`: `server.py`, `README.md`, `docs/en-soft-launch-report.md`.
- Browser mobile check at 390x844 confirmed no horizontal overflow and correct 640px hero selection on IT and EN.

## What Was Not Touched

- No Cloudflare settings.
- No DNS changes.
- No Search Console, Analytics or AdSense changes.
- No sitemap or robots changes.
- No German publication.
- No URL structure changes.
- No new pages.
- No heavy libraries or framework changes.

## Risks

- `css/style.min.css` must stay in sync with `css/style.css` when future CSS changes are made.
- The Google Fonts stylesheet remains render-blocking; this was not changed to avoid typography regressions.
- Live LCP can still be affected by cache state, font loading and network conditions.

## Future Cloudflare Recommendations

- Consider long cache TTLs for `/media/*`, `/assets/*`, `/css/*` and `/js/*`.
- Keep HTML cache more conservative than static assets.
- Consider Cloudflare Polish only after testing image quality.
- Do not enable Rocket Loader unless a separate JS compatibility test is completed.
- Consider Zaraz only if third-party scripts grow in the future.
