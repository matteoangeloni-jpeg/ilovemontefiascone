# GSC Coverage export analysis — 2026-07-29

Source exports:

- `D:\Download\ilovemontefiascone.com-Coverage-2026-07-29.zip`
- `D:\Download\ilovemontefiascone.com-Coverage-Drilldown-2026-07-29*.zip`

## Executive verdict

The 152 non-indexed URLs reported by Google Search Console are not 152 broken pages.

Most are expected exclusions:

- 94 are old/non-canonical URLs with redirects.
- 47 are reported as `noindex`, but 45 of those now appear live as indexable `200` pages with no live robots noindex tag; this looks mostly stale in GSC.
- 3 are reported as 404, but all 3 now return live `200` and are in the sitemap.
- 1 is a canonical alternate.
- 7 are true discovery/indexing backlog candidates: live `200`, canonical, in sitemap, internally linked, but not yet crawled by Google (`1970-01-01` in the export).

Sitemaps resubmitted via Search Console API on 2026-07-29:

- `https://www.ilovemontefiascone.com/sitemap.xml`
- `https://www.ilovemontefiascone.com/sitemap-it.xml`
- `https://www.ilovemontefiascone.com/sitemap-en.xml`
- `https://www.ilovemontefiascone.com/sitemap-de.xml`
- `https://www.ilovemontefiascone.com/sitemap-fr.xml`

## Export summary

| GSC reason | Count | Live state checked | Action |
|---|---:|---|---|
| Pagina con reindirizzamento | 94 | Mostly `.html` -> clean URL redirects; expected | Ignore / validate if desired |
| Esclusa in base al tag `noindex` | 47 | 2 still show live `noindex`; 45 no longer show live noindex | Request validation in GSC |
| Non trovata (404) | 3 | All 3 now live `200` | Request validation / wait for recrawl |
| Pagina alternativa con canonical appropriato | 1 | Live `200`, canonical present | Usually ignore |
| Rilevata, ma attualmente non indicizzata | 7 | All live `200`, canonical, in sitemap, internally linked | Recrawl/sitemap submitted; monitor |

## Real candidates to monitor

These 7 URLs are the important discovery/indexing backlog. They are technically valid now.

| URL | In sitemap | Internal links | Word count | Note |
|---|---:|---:|---:|---|
| `/en/viterbo-from-montefiascone` | yes | 12 | 509 | English day trip page |
| `/fr/experiences-gastronomiques-et-nologiques-a-montefiascone` | yes | 7 | 412 | French food/wine page |
| `/fr/fete-de-santa-margherita-montefiascone` | yes | 6 | 677 | French event page |
| `/fr/giglio-vecchio-montefiascone` | yes | 4 | 659 | French local page |
| `/fr/lac-de-bolsena-que-voir` | yes | 33 | 725 | French lake guide |
| `/fr/via-francigena-bolsena-montefiascone` | yes | 7 | 633 | French Francigena page |
| `/lago-di-bolsena-cosa-vedere` | yes | 26 | 731 | Italian lake guide |

## “404” rows are stale

GSC export lists these as `Non trovata (404)`, but live checks returned `200`, canonical URL, sitemap inclusion and internal links:

- `/fr/tuscia-en-3-jours-depuis-montefiascone`
- `/fr/parking-montefiascone`
- `/fr/comment-se-rendre-a-montefiascone`

## Recommended next actions

1. In GSC, click **Convalida correzione** for:
   - `Esclusa in base al tag "noindex"`
   - `Non trovata (404)`
   - `Rilevata, ma attualmente non indicizzata`
2. Monitor the 7 discovery backlog URLs for crawl date change from `1970-01-01` to a real crawl date.
3. Do not spend engineering time on the 94 redirect URLs unless GSC reports the final clean URLs as not indexable.
4. For traffic recovery, prioritize event freshness and CTR work; coverage is not showing a broad technical indexing failure.

## Data artifact

Machine-readable analysis saved at:

- `reports/gsc-coverage-export-analysis-2026-07-29.json`
