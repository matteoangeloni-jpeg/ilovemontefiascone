# SEO SERP ranking sprint — 2026-07-29

Goal: improve ranking potential for existing pages that already have Google Search Console impressions and positions close enough to move.

Data source: Google Search Console Search Analytics API.

Window analyzed: 2026-04-29 to 2026-07-27.

## Main opportunity clusters

1. `montefiascone cosa vedere` / `cosa vedere a montefiascone`
   - Main issue: San Flaviano still captures broad "things to see" intent.
   - Action: clarified San Flaviano as specialist page and reinforced the complete guide as the itinerary page.

2. `festa della birra montefiascone`, `Tuscia Birra 2026`, `ATB Festival`
   - Main issue: event intent split between `/eventi` and `/atb-festival-montefiascone`.
   - Action: added an explicit beer-festival/Tuscia Birra block in `/eventi` linking to the ATB specialist page, and strengthened ATB copy for Tuscia Birra variants.

3. `dormire a montefiascone`, `hotel Montefiascone`, `montefiascone dove dormire`
   - Main issue: commercial-intent page needs clearer accommodation vocabulary and zone logic.
   - Action: added hotel/B&B/area guidance without inventing unverified accommodation recommendations.

4. `montefiascone mappa`
   - Main issue: page had position signal but needed more exact title, description and answer-first structure.
   - Action: rewrote title/meta and added a map-first answer block with links to parking, directions, things to see and where to stay.

## Validation

- Build: `npm run build:cloudflare` passed.
- Generated package: `dist-it`.
- Static SEO gate: passed.
- HTML pages audited: 404.
- Duplicate canonicals: 0.
- Blocking title/meta/H1/canonical/noindex issues: 0.

## Measurement

Re-check in GSC after Google has re-crawled the deployment:

- `montefiascone cosa vedere`
- `cosa vedere a montefiascone`
- `festa della birra montefiascone`
- `Tuscia Birra 2026`
- `dormire a montefiascone`
- `hotel Montefiascone`
- `montefiascone mappa`
