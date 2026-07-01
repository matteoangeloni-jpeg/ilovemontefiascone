# Events UI & Content Cleanup — Report

## Verdetto

**READY per micro-deploy** — 0 problemi P0/P1 residui. Nessun deploy eseguito.

## Branch

* Branch iniziale: `main` (HEAD `459b24f`)
* Branch finale: `codex/events-ui-content-cleanup`
* Separato da `codex/giglio-vecchio-it-page` (non toccato in questo giro)

## Problemi trovati (audit Task 1)

| # | Problema | Dove | Stato |
| - | -------- | ---- | ----- |
| 1 | Evento in evidenza statico e scaduto | `/eventi` (sezione `#banda-rb-revue`) | **Risolto** |
| 2 | Nota interna pubblicata come testo ("Fonti pubbliche e metodo" / "Questa pagina parte dal..." / "Nel calendario qui sotto riportiamo solo dati confermati") | `/eventi-estate-montefiascone-2026` IT + EN + DE | **Risolto** (3/3 lingue) |
| 3 | Poster verticale (900×1600) usato "a nudo" in un `<aside class="card">` senza crop, layout dominante/sproporzionato | `/eventi` sezione featured | **Risolto strutturalmente** (nuova classe `.event-feature__media`, si applica a qualunque evento venga selezionato in futuro) |

### Pagine analizzate (Task 1)

`/eventi`, `/calendario-eventi-montefiascone`, `/eventi-estate-montefiascone-2026`, `/est-film-festival-montefiascone`, `/festival-ecologia-integrale-montefiascone`, `/eventi-tradizioni-fiera-del-vino-montefiascone`, `/anno-domini-1074-montefiascone`, `/cronoscalata-montefiascone-coppa-citta`, `/atb-festival-montefiascone`, `/est-lake-festival-montefiascone`, `/festa-santa-margherita-montefiascone`, `/panorami-festival-montefiascone`, più gli equivalenti EN/DE quando esistenti (`en/events-montefiascone`, `en/montefiascone-events-calendar`, `en/montefiascone-summer-events-2026`, `de/veranstaltungen-montefiascone`, `de/veranstaltungskalender-montefiascone`, `de/sommerveranstaltungen-montefiascone-2026`, e le 10 pagine evento EN/DE con schema Event/MusicEvent).

**Esito per ciascuna:** JSON-LD Event valido con `startDate`/`location`; hero image con crop coerente via `.detail-hero__media` (già esistente, non modificato); card grid `.media-card__thumb` già con `aspect-ratio: 4/3` + `object-fit: cover` (già corretto, nessun intervento necessario); nessuna nota interna oltre ai 3 file corretti; nessun overflow mobile/desktop (verificato con Playwright, vedi QA).

## Evento featured: prima/dopo

* **Prima:** "In evidenza · Venerdì 19 giugno 2026 — La Banda R&B Revue in Piazzale Roma" (evento concluso 12 giorni prima della data odierna di riferimento 2026-07-01).
* **Dopo:** "In evidenza · 2, 3, 4 e 5 luglio 2026 — Festival dell'Ecologia Integrale 2026" (prossimo evento futuro/in corso in ordine cronologico; nessun evento risultava "in corso" oggi).

## Logica usata per la progressione data (Task 2)

* **Dove vive:** build-time (opzione scelta esplicitamente dall'utente), non client-side.
* **File:** `scripts/select-featured-event.mjs` (logica) + `scripts/featured-events-data.mjs` (contenuto editoriale per 10 eventi candidati, riusando testo già pubblicato sulle rispettive pagine — nessun dato inventato).
* **Fonte delle date:** lette a runtime dal JSON-LD `Event`/`MusicEvent` già presente in ciascuna pagina evento (`startDate`/`endDate`), non duplicate/hardcodate nel manifest.
* **Regola:** ordina per `startDate`; se oggi ∈ [`startDate`, `endDate`] di un evento → "in corso", vince il primo per data di inizio; altrimenti vince il primo evento futuro per `startDate`; se nessun evento è futuro o in corso → blocco di fallback editoriale (link a calendario eventi + estate 2026, nessuna data inventata).
* **Integrazione:** `package.json` → `npm run build:cloudflare` ora esegue `node scripts/select-featured-event.mjs && node scripts/build-cloudflare.mjs`. Lo script riscrive il blocco tra i marker `<!-- FEATURED_EVENT:START -->` / `<!-- FEATURED_EVENT:END -->` in `eventi.html` (idempotente: rieseguirlo produce lo stesso risultato se la data non è cambiata).
* **Trade-off dichiarato:** essendo build-time, l'evento in evidenza avanza solo ai rebuild successivi, non in tempo reale. Documentato esplicitamente nel commento in testa allo script.
* **Test eseguiti** (funzione pura `pickFeaturedEvent`, senza scrivere file):
  | Data simulata | Risultato | Atteso |
  | --- | --- | --- |
  | Prima di tutti gli eventi | Il più vicino nel futuro | ✅ |
  | Il giorno prima dell'inizio di un evento | Quell'evento (primo futuro) | ✅ |
  | Dentro la finestra `startDate`–`endDate` di un evento | Quell'evento ("in corso") | ✅ |
  | Nel gap tra la fine di un evento e l'inizio del successivo | Il successivo evento futuro | ✅ |
  | Dopo la fine di tutti gli eventi | `null` → fallback editoriale | ✅ |
* **Nessuna rotazione random**, nessuna data hardcodata per far passare il test (i 5 scenari sono stati verificati con date simulate passate come parametro alla funzione pura, il codice di produzione chiama sempre `new Date()` reale).

## Note interne rimosse/riscritte (Task 3)

| File | Prima | Dopo |
| ---- | ----- | ---- |
| `eventi-estate-montefiascone-2026.html` | H2 "Fonti pubbliche e metodo" + 2 paragrafi in tono da audit ("Questa pagina parte dal... incrocia i dati con... Nel calendario qui sotto riportiamo solo dati confermati...") | H2 "Come leggere il calendario" + 1 frase naturale, mantenuto solo il link utile al cartellone ufficiale |
| `en/montefiascone-summer-events-2026.html` | "Official sources and method" / "This page starts from... cross-checks..." | "How to read this calendar" + 1 frase naturale |
| `de/sommerveranstaltungen-montefiascone-2026.html` | "oeffentliche Quellen und Methode" / "Die Grundquelle bleibt..." | "So liest du den Kalender" + 1 frase naturale |

**Non toccato (verificato, ma legittimo):** la frase "La pagina riporta solo i dati confermati dal cartellone" nelle FAQ delle singole pagine evento (es. ATB) risponde direttamente alla domanda "Il programma è già definitivo?" posta dall'utente — è microcopy naturale rivolta al lettore, non una nota di metodo editoriale interna. Lasciata invariata per non rimuovere informazione utile.

## Immagini sistemate (Task 4)

* **Fix strutturale:** nuova classe CSS `.event-feature__media` (`css/style.css` + equivalente minificato in `css/style.min.css`) applicata al contenitore immagine della card "in evidenza": `aspect-ratio: 4/3`, `object-fit: cover`, `object-position: center top`. Elimina il problema del poster verticale dominante indipendentemente da quale evento venga selezionato in futuro (incluso se tornasse a essere il concerto con poster 900×1600).
* Le griglie a card (`.media-card__thumb`, 3 colonne) erano **già corrette** (aspect-ratio 4/3 + object-fit cover): nessun intervento necessario.
* Gli hero (`.detail-hero__media`) erano **già corretti** (height 100% + object-fit cover): nessun intervento necessario.

### Immagini ancora da fornire / migliorare

| Priorità | Nota |
| -------- | ---- |
| P2 | Diversi eventi (Anno Domini 1074, Panorami, Festa Santa Margherita, Est-Lake Festival, Festival Ecologia Integrale) riusano lo stesso hero generico `hero-rocca-dei-papi-1600.jpg`: corretto tecnicamente ma poco distintivo a colpo d'occhio nella card "in evidenza" quando questi eventi saranno i prossimi in calendario. Foto reali dedicate migliorerebbero la resa, non bloccante. |
| P3 | Su 3 pagine EN/DE (`en/montefiascone-events-calendar.html`, `de/veranstaltungskalender-montefiascone.html`, `de/sommerveranstaltungen-montefiascone-2026.html`) l'attributo HTML `width`/`height` dell'hero dichiara una proporzione ritratto (es. 1536×2048) diversa da come viene effettivamente mostrata (`object-fit: cover` la ricropa correttamente). Nessun bug visibile — il CSS sovrascrive già le dimensioni — solo un disallineamento cosmetico dei metadati, non corretto per non fare modifiche non necessarie a file multi-lingua fuori scope. |

Nessuna nuova immagine scaricata, nessuna immagine AI creata, nessun asset sostituito con contenuto inventato.

## Layout migliorati (Task 5)

* Contenitore immagine "in evidenza" ora con crop coerente e prevedibile (vedi sopra) — unico intervento di layout necessario, individuato con l'audit.
* Nessun redesign, nessuna nuova libreria, nessuna rimozione di contenuti.
* Verificato (Playwright) che card, hero, blocchi "in breve" e grid rispondano correttamente su mobile (390px) e desktop (1440px) senza overflow, sia prima sia dopo le modifiche.

## SEO/AEO/GEO safety (Task 6)

| Controllo | Esito |
| --------- | ----- |
| Title invariati sui file toccati | ✅ |
| Meta description non rotte | ✅ |
| H1 unico | ✅ (verificato anche via Playwright su tutte le pagine del test) |
| Canonical coerente con `og:url` | ✅ (4/4 file toccati) |
| Social metadata completi | ✅ (nessuna meta rimossa) |
| JSON-LD Event valido | ✅ |
| Event senza `startDate`/`location` | ✅ 0 (sito intero, 302 file) |
| Hreflang reciproco IT/EN/DE/x-default | ✅ (verificato su `eventi.html`) |
| Nessun hreflang FR | ✅ 0 |
| Link interni clean | ✅ 0 `.html` nei file toccati |

## File modificati

* `eventi.html` — blocco "in evidenza" sostituito con marker + contenuto generato dallo script
* `eventi-estate-montefiascone-2026.html` — nota interna riscritta
* `en/montefiascone-summer-events-2026.html` — nota interna riscritta
* `de/sommerveranstaltungen-montefiascone-2026.html` — nota interna riscritta
* `css/style.css` — nuova classe `.event-feature__media`
* `css/style.min.css` — stessa regola in forma minificata
* `package.json` — `build:cloudflare` ora esegue anche `select-featured-event.mjs`
* `scripts/select-featured-event.mjs` — nuovo, logica di selezione build-time
* `scripts/featured-events-data.mjs` — nuovo, manifest editoriale dei 10 eventi candidati

## Rischi residui

* Il featured event si aggiorna solo ai rebuild (limite intrinseco di un sito statico con logica build-time, accettato esplicitamente dall'utente).
* Se in futuro un nuovo evento viene pubblicato senza aggiungerlo a `scripts/featured-events-data.mjs`, non entrerà nella rotazione del featured (non causa errori, semplicemente non viene considerato) — da ricordare quando si aggiunge un nuovo evento IT.
* Immagini generiche ripetute su più eventi (P2, sopra) restano una debolezza editoriale minore.

## QA (Task 8)

| Controllo | Esito | Note |
| --------- | ----- | ---- |
| `npm run build:cloudflare` | ✅ success | "IT: 97, EN: 97, DE: 97" |
| Sitemap IT/EN/DE | ✅ 97/97/97 | invariata |
| `llms.txt` | ✅ 97 menzioni `/de/` | invariato, coerente col perimetro |
| Link rotti | ✅ 0 | verificato su tutti i file toccati + smoke test Playwright (28 page-load, status 200) |
| Link interni `.html` | ✅ 0 | |
| Asset mancanti | ✅ 0 | |
| JSON-LD invalidi | ✅ 0 | su 302 file HTML del sito |
| Event senza `startDate`/`location` | ✅ 0 | |
| Canonical coerenti con `og:url` | ✅ | |
| Social metadata completi | ✅ | |
| Hreflang reciproci IT/EN/DE/x-default | ✅ | |
| Hreflang FR | ✅ 0 | |
| `/fr/` | ✅ assente | |
| `sitemap-fr.xml` | ✅ assente | |
| Mojibake | ✅ 0 | sui file toccati |
| Placeholder testuali | ✅ 0 | |
| Mobile overflow | ✅ 0 | verificato con Playwright, 14 pagine × 2 viewport (desktop 1440px, mobile 390px) |

## Task 9 — Visual smoke test

Eseguito con Chromium headless (Playwright) servendo `dist-it` in locale (richieste esterne bloccate per evitare hang su font Google non raggiungibili in sandbox).

* Pagine testate: `/eventi`, `/calendario-eventi-montefiascone`, `/eventi-estate-montefiascone-2026`, `/anno-domini-1074-montefiascone`, `/atb-festival-montefiascone`, `/cronoscalata-montefiascone-coppa-citta`, `/festival-ecologia-integrale-montefiascone`, `/eventi-tradizioni-fiera-del-vino-montefiascone`, `/en/events-montefiascone`, `/en/montefiascone-events-calendar`, `/en/atb-festival-montefiascone`, `/de/veranstaltungen-montefiascone`, `/de/veranstaltungskalender-montefiascone`, `/de/atb-festival-montefiascone` (14 pagine, ben oltre i minimi richiesti: hub IT + 5 schede IT + 3 EN + 3 DE).
* Viewport: desktop 1440×900, mobile 390×844.
* Esito: **28/28 caricamenti OK (status 200), 0 overflow orizzontale (>4px), H1 unico su tutte.**
* Screenshot dedicato della card "in evidenza" (desktop + mobile): confermato crop 4:3 coerente, nessuna immagine deformata, nessuna sovrapposizione col resto del layout.

## Cosa NON è stato fatto

* Nessun deploy.
* Cloudflare config non modificata.
* Search Console non toccata.
* Progetto Next.js non toccato.
* Nessuna nuova pagina creata.
* Nessuno slug/URL cambiato.
* Perimetro 97/97/97 invariato.
* `/fr/` non creata, `sitemap-fr.xml` non creato.
* Nessun dato evento inventato (date, orari, programmi, prezzi, ospiti, luoghi, servizi).
* Nessun redesign, nessuna nuova libreria.

## Prossimo passo consigliato

Pronto per micro-deploy dopo review. Prima del merge su `main`, verificare che il branch resti sincronizzato se `main` avanza nel frattempo (come già successo in questo repo in precedenza).
