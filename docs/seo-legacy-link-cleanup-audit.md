# SEO Legacy Link Cleanup Audit

## Cosa è stato trovato
L'audit tramite `grep` esteso ai file HTML/JS/MJS (escludendo `node_modules`, `dist-it`, `.git` e analizzando manualmente il build output) ha rivelato l'esistenza di link `.html` interni residui principalmente in:
- `base.html`: link alla navigazione footer e breadcrumb interni (`/cosa-vedere.html`, `/mappa.html`, `/associazioni-volontariato-montefiascone.html`).
- `script.js`: URL per Call-to-Action dinamiche del componente meteo-locale dipendente (`/cosa-vedere.html`, `/mappa.html`).
- `sw.js`: URL elencate nei `PRECACHE_URLS`.
- `deploy-soft-launch-it.txt`: documentazione tecnica che mappa i vecchi file.
- `robots.txt`: pattern di esclusione (es. `/*-widget.html`).
- `_redirects`: configurazioni Cloudflare di mapping legacy.

## Cosa è stato corretto
- **`base.html`**: tutti i 7 riferimenti `.html` (`cosa-vedere`, `mappa`, `associazioni...`) sono stati modificati per riflettere le URL pulite extensionless.
- **`script.js`**: i 3 fallback e CTA dinamiche (meteo `SUNNY`/`RAIN`/`DEFAULT`) puntano ora alle rispettive estensioni pulite.
- **`sw.js`**: i 6 riferimenti `PRECACHE_URLS` sono stati resi extensionless per forzare il caching delle versioni root previste da Pages. Il `SW_VERSION` è stato incrementato a `v11` per scavalcare la vecchia cache locale dell'utente.

## Cosa è stato lasciato intenzionalmente
- Link presenti all'interno di documentazione non pubblica (`deploy-soft-launch-it.txt`).
- Regole all'interno del file `robots.txt` (`/*-widget.html`, `/offline.html`, etc.) in quanto corrette e attese.
- Logica nativa JavaScript in `main.js` che intercetta i percorsi terminanti per `index.html` o `.html` rimuovendoli client-side (il fix è corretto dal punto di vista SEO per prevenire duplicati, anche se il server-side prevale).
- Link esterni a siti ufficiali comunali/statali (`comune.montefiascone.vt.it/*.html`).

## Decisione su `/en/events` e Alias DE
Durante l'audit post-release è emerso che `/en/events` restituiva un 404 live.
La URL effettiva inglese degli eventi generata è `/en/montefiascone-events-calendar`.
- **Decisione EN:** Trattandosi di un link altamente intuitivo che un utente internazionale potrebbe facilmente tentare, è stato aggiunto al file `_redirects` un `301` da `/en/events` verso `/en/montefiascone-events-calendar`. 
- **Decisione DE:** Di conseguenza, per coerenza logica UX è stato aggiunto un redirect 301 per `/de/events` e `/de/veranstaltungen` verso `/de/veranstaltungen-montefiascone`.
Nessun canonical o URL di struttura originale è stato alterato, operando come pura Quality of Life (QoL) per Inbound Marketing e Type-In Traffic.

## Stato `_redirects`
Corretto e privo di loop. Riconosce i vecchi URL e i nuovi URL alias in EN/DE reindirizzandoli sulle corrispettive traduzioni definitive (es. `/en/:slug.html /en/:slug 301`).

## Stato Sitemap, Hreflang, Canonical e `llms.txt`
L'output build di QA ha convalidato che:
- **Sitemap**: Generate e pulite solo per `it/en/de`. Non contengono alcun parametro `fr`, estensioni `.html`, o alias non canonici.
- **Hreflang**: Generati unicamente per i 3 namespace previsti + `x-default`. Nessun tag è fallato, non esistono hreflang puntanti a pagine terminate in `.html`.
- **Canonical**: Tutte le canoniche sono espresse con link finale trailing-slash/extensionless, connettendo il TLD reale, garantendo totale isolamento da Cloudflare Pages native URLs (`pages.dev`).
- **`llms.txt`**: Privo di `.html`, `github.io`, `pages.dev` o sezioni `fr`.

## Rischi residui
Nessuno critico. La modifica al `sw.js` attiverà un rinfresco del Service Worker sui device rientranti (necessario per far digerire ai vecchi client le nuove URL senza `.html` e impedire fallback non voluti). La dismissione dell'estensione nei link HTML elimina il doppio hop `301` fornito da Cloudflare Pages.

## Prossimi step consigliati
Continuare lo sviluppo e rilasciare i contenuti per lo sprint EN (espansione e editorializzazione), monitorando GSC (Google Search Console) non appena il sito riceverà un po' di volume sui link indicizzati per confermare la sparizione degli hop a `.html`.
