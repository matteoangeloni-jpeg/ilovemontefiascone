# EN Expansion 25 to 50 Readiness Report

Date: 2026-06-20
Branch: `feature/en-expansion-50`
Status: branch-only expansion, not merged to main.

## Summary

- English pages before sprint: 25.
- New English pages added: 25.
- Expected English pages after sprint: 50.
- German remains excluded: no `sitemap-de.xml`, no DE hreflang, no EN to DE links.
- Canonical production domain used: `https://www.ilovemontefiascone.com`.

## New IT to EN Mappings

| IT source | EN page | Cluster | Status |
|---|---|---|---|
| `lago-di-bolsena-in-2-giorni.html` | `/en/lake-bolsena-in-two-days.html` | Lake Bolsena itineraries | Ready |
| `spiagge-lago-di-bolsena.html` | `/en/lake-bolsena-beaches.html` | Lake Bolsena outdoor | Ready |
| `borghi-lago-di-bolsena.html` | `/en/lake-bolsena-villages.html` | Lake Bolsena villages | Ready |
| `borghi-del-lago-di-bolsena-in-auto.html` | `/en/lake-bolsena-villages-by-car.html` | Lake Bolsena itineraries | Ready |
| `lago-di-bolsena-con-bambini.html` | `/en/lake-bolsena-with-kids.html` | Families | Ready |
| `lago-di-bolsena-in-bici.html` | `/en/cycling-lake-bolsena.html` | Outdoor travel | Ready |
| `lago-di-bolsena-in-autunno.html` | `/en/lake-bolsena-in-autumn.html` | Seasonal travel | Ready |
| `estate-sul-lago-di-bolsena.html` | `/en/summer-on-lake-bolsena.html` | Seasonal travel | Ready |
| `migliori-panorami-lago-di-bolsena.html` | `/en/best-viewpoints-lake-bolsena.html` | Photography and viewpoints | Ready |
| `cosa-vedere-dintorni-montefiascone-itinerario.html` | `/en/things-to-do-near-montefiascone.html` | Tuscia day trips | Ready |
| `tuscia-in-3-giorni-da-montefiascone.html` | `/en/tuscia-in-three-days-from-montefiascone.html` | Tuscia itineraries | Ready |
| `viterbo-da-montefiascone.html` | `/en/viterbo-from-montefiascone.html` | Tuscia day trips | Ready |
| `terme-viterbo-da-montefiascone.html` | `/en/thermal-baths-near-montefiascone.html` | Wellness and Tuscia | Ready |
| `bomarzo-da-montefiascone.html` | `/en/bomarzo-from-montefiascone.html` | Tuscia day trips | Ready |
| `tuscania-da-montefiascone.html` | `/en/tuscania-from-montefiascone.html` | Tuscia day trips | Ready |
| `villa-lante-bagnaia-da-montefiascone.html` | `/en/villa-lante-from-montefiascone.html` | Tuscia day trips | Ready |
| `caprarola-palazzo-farnese-da-montefiascone.html` | `/en/caprarola-palazzo-farnese-from-montefiascone.html` | Tuscia day trips | Ready |
| `montefiascone-con-bambini-famiglie.html` | `/en/montefiascone-with-kids.html` | Families | Ready |
| `montefiascone-in-2-giorni.html` | `/en/montefiascone-in-two-days.html` | Montefiascone itineraries | Ready |
| `montefiascone-senza-auto.html` | `/en/montefiascone-without-car.html` | Practical travel | Ready |
| `cosa-fare-a-montefiascone-quando-piove.html` | `/en/rainy-day-montefiascone.html` | Practical travel | Ready |
| `viaggio-lento-lago-di-bolsena.html` | `/en/slow-travel-lake-bolsena.html` | Slow travel | Ready |
| `cucina-tipica-montefiascone.html` | `/en/typical-food-montefiascone.html` | Food and wine | Ready |
| `prodotti-tipici-montefiascone-tuscia.html` | `/en/local-products-montefiascone-tuscia.html` | Food and wine | Ready |
| `strada-del-vino-est-est-est-montefiascone.html` | `/en/est-est-est-wine-route-montefiascone.html` | Wine tourism | Ready |

## SEO And Localization Notes

- Each new EN page has one H1, a title under 60 characters, a meta description written for international search intent, canonical URL, OG/Twitter tags and IT/EN/x-default hreflang.
- Copy avoids invented prices, hours, exact transport claims and unsupported operational details.
- Each page includes an AI-ready short-answer section, FAQs and contextual internal links.
- Existing Italian pages in this mapping now expose reciprocal IT/EN hreflang and a visible EN language switcher link.

## Publication Conditions

- Keep this work on `feature/en-expansion-50` until QA and production routing are reviewed.
- Publish EN only after confirming `sitemap-en.xml` is reachable on the canonical `www` domain.
- Do not add or publish DE until the German quality gate is reopened.
- Do not change robots, Cloudflare, Search Console, Analytics or AdSense from this sprint.

## QA Checklist

- Build must pass with `npm run build:cloudflare`.
- `dist-it/en` must contain 50 HTML pages.
- `sitemap-en.xml` must contain 50 URLs.
- `sitemap-it.xml` must remain IT-first and include reciprocal EN alternates only where EN exists.
- No `pages.dev`, `github.io`, non-www canonical URLs, DE hreflang or mojibake may appear in public output.
