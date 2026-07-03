# SEO UI Post Refresh Check

## SEO check

- `title`: invariati.
- `meta description`: invariati.
- `H1`: invariati.
- `canonical`: invariati.
- `hreflang`: invariati nel sorgente; il build pubblico continua a rimuovere FR.
- `routing`: invariato.
- Menu nuovo: nessun URL `.html` introdotto nella configurazione cluster.

## Build pubblico

- `npm run build:cloudflare`: OK
- Output confermato: `98 IT / 98 EN / 98 DE`
- `sitemap-it.xml`: `98`
- `sitemap-en.xml`: `98`
- `sitemap-de.xml`: `98`
- `sitemap.xml`: solo IT/EN/DE

## FR / llms / sitemap

- Nessun `/fr/` nel build pubblico.
- Nessun `hreflang="fr"` nel build pubblico.
- Nessun `sitemap-fr.xml` nel build pubblico.
- `llms.txt` senza FR.
- `llms.txt` senza `.html`.
- `llms.txt` senza `pages.dev`.
- `llms.txt` senza `github.io`.

## UI/UX check campione

- Campioni verificati:
  - `dist-it/index.html`
  - `dist-it/en/index.html`
  - `dist-it/de/index.html`
  - `dist-it/eventi.html`
  - `dist-it/en/events-montefiascone.html`
  - `dist-it/de/veranstaltungen-montefiascone.html`
  - `dist-it/galleria.html`
  - `dist-it/de/cronoscalata-lago-montefiascone.html`
  - `dist-it/de/est-film-festival-montefiascone.html`
  - `dist-it/de/atb-festival-montefiascone.html`
  - `dist-it/de/est-lake-festival-montefiascone.html`

- Esito strutturale:
  - `data-nav` presente.
  - `data-nav-toggle` presente.
  - `main.js` presente.
  - Nessuna pagina pubblica campione rimasta fuori dal refresh.

## Copertura pattern nav

- Pagine pubbliche fuori perimetro nav dopo il refresh: `0`
- Pagine con `data-nav` ma senza toggle: `0`
- Pagine con header/menu ma senza script di navigazione: `0`

## Stabilità tecnica

- `node --check js/main.js`: OK
- `node --check assets/site.js`: OK
- Nessuna nuova dipendenza aggiunta.
- Nessun asset nuovo pesante introdotto.

## Problemi residui

- Nessun blocker SEO tecnico emerso dal refresh.
- Utile uno smoke test visuale browser-side prima di push o deploy, soprattutto su dropdown desktop e accordion mobile della galleria.
