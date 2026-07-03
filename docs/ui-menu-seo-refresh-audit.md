# UI Menu SEO Refresh Audit

## Stato iniziale

- Branch di partenza: `main`
- Commit baseline: `3b54bce` (`Apply pending SEO content refinements`)
- Build pubblico atteso: `98 IT / 98 EN / 98 DE`
- FR presente nel sorgente ma esclusa dal build pubblico tramite `scripts/build-cloudflare.mjs`

## Dove vive la navigazione

- Header e menu statici nei file HTML pubblici IT/EN/DE.
- Comportamento menu mobile in [`js/main.js`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\js\main.js).
- Stili navigazione in [`css/style.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\css\style.css) e [`css/style.min.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\css\style.min.css).
- La galleria usa un layer dedicato in [`assets/site.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\assets\site.css) e [`assets/site.js`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\assets\site.js).
- Il build Cloudflare rimuove i segnali FR pubblici da HTML, sitemap e `llms.txt` in [`scripts/build-cloudflare.mjs`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\scripts\build-cloudflare.mjs).

## Campioni analizzati

- IT: homepage, `eventi`, `vino`, `mappa`
- EN: homepage, `events-montefiascone`
- DE: homepage, `veranstaltungen-montefiascone`

## Criticità UX

- Il menu desktop non è organizzato per cluster: alterna hub, spoke e utility senza gerarchia.
- La profondità informativa è disomogenea tra lingue.
- Alcune pagine usano `<ul>`, altre link diretti nel `<nav>`, quindi la UI non è davvero coerente.
- Il language switcher è corretto come pattern visivo, ma il menu principale non aiuta a capire i temi principali del sito.

## Criticità mobile

- Il menu mobile è una lista piatta lunga, senza raggruppamento tematico.
- Mancano sezioni espandibili: il visitatore deve scorrere tutte le voci.
- I top-level item non distinguono chiaramente hub da pagine operative.

## Criticità accessibilità

- Il toggle mobile usa `aria-expanded`, ma il sistema non gestisce ancora dropdown/cluster tastiera-friendly.
- Non esiste una semantica per sottomenu o gruppi navigabili.
- Mancano stati di focus/hover dedicati per un menu multilivello.

## Criticità SEO / internal linking

- Molti header statici puntano ancora a una selezione ridotta di hub, senza esporre i cluster principali.
- In sorgente compaiono ancora riferimenti FR in `hreflang`, anche se il build pubblico li rimuove.
- La navigazione non sfrutta bene le spoke strategiche già pubbliche per eventi, lago, vino e itinerari.

## File / componenti coinvolti

- [`js/main.js`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\js\main.js)
- [`css/style.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\css\style.css)
- [`css/style.min.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\css\style.min.css)
- [`assets/site.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\assets\site.css)
- [`assets/site.js`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\assets\site.js)
- Pagine con integrazione nav riallineata:
  - [`galleria.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\galleria.html)
  - [`de/atb-festival-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\atb-festival-montefiascone.html)
  - [`de/cronoscalata-lago-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\cronoscalata-lago-montefiascone.html)
  - [`de/est-film-festival-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\est-film-festival-montefiascone.html)
  - [`de/est-lake-festival-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\est-lake-festival-montefiascone.html)
- Documentazione di sprint:
  - [`docs/ui-menu-seo-refresh-audit.md`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\docs\ui-menu-seo-refresh-audit.md)
  - [`docs/ui-menu-refresh-report.md`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\docs\ui-menu-refresh-report.md)
  - [`docs/seo-ui-post-refresh-check.md`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\docs\seo-ui-post-refresh-check.md)

## Proposta di nuova struttura

### IT

- `Home`
- `Visita`
- `Eventi`
- `Lago e dintorni`
- `Vino e sapori`
- `Info pratiche`

### EN

- `Home`
- `Visit`
- `Events`
- `Lake and nearby`
- `Wine and food`
- `Practical info`

### DE

- `Startseite`
- `Besuchen`
- `Veranstaltungen`
- `See und Umgebung`
- `Wein und Küche`
- `Praktische Infos`

## Strategia tecnica

- Uniformare la UI del menu con un layer condiviso in JavaScript, senza cambiare routing.
- Generare cluster menu coerenti per lingua, usando solo URL pubbliche esistenti.
- Migliorare desktop dropdown e mobile accordion nella stessa navigazione.
- Lasciare invariati title, meta, H1, canonical e routing; verificare il build finale per assicurare che FR resti esclusa dal perimetro pubblico.
