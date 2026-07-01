# Events UX / Rotation / Table Layout Hotfix — Report

## Verdetto

**READY.** Tutti i gate locali e post-merge sono verdi. Vedi in fondo lo stato di merge/push/deploy.

## Addendum — secondo giro (parità strutturale Estate 2026 DE)

Dopo il primo giro di questo hotfix (rotazione, test, correzione data Cronoscalata, fix tono/umlaut tedesco), un riesame più approfondito ha rilevato un problema concreto non ancora coperto: **la pagina `de/sommerveranstaltungen-montefiascone-2026.html` non aveva né la tabella calendario né la sezione "card tematiche"**, a differenza delle versioni IT/EN che le hanno entrambe. Era l'unico vero gap strutturale rimasto tra le tre lingue, ed è esattamente ciò che il task chiedeva di controllare ("tabella calendario... EN/DE equivalenti"; "card tematiche").

Fix applicato in questo giro:

- Aggiunta la sezione **"Offizieller Sommerkalender 2026"** (tabella `data-table`/`table-wrap`, stessa struttura responsive di IT/EN: colonne con padding su desktop, card etichettate su mobile), con le stesse 10 righe/date già confermate su IT/EN, tradotte in tedesco naturale (nessuna data nuova, nessun dato inventato). Riga dell'evento già concluso marcata `is-past` come nelle altre lingue.
- Aggiunta la sezione **"Veranstaltungen nach Thema"** (griglia di 6 card tematiche: Wein, Kino, See, Tradition, Motorsport, Familie und Kultur), stessa struttura e stesso pattern CTA (`.nav-card__link`) delle versioni IT/EN, markup con whitespace reale tra gli elementi (nessuna concatenazione).
- Tutti i link interni verificati esistenti prima di inserirli (9 pagine evento tedesche, tutte confermate presenti).
- Verificato con `scripts/check-semantic-text.mjs`: pulito, nessuna concatenazione, nessun testo da audit.
- Verificato visivamente desktop/mobile: 0 overflow, struttura identica a IT/EN.
- Perimetro invariato: nessuna nuova pagina creata (la tabella e le card sono sezioni aggiunte dentro la pagina DE già esistente, non nuovi URL).

## Problemi trovati (Task 2 — audit prima del fix, primo giro)

| Area | Problema | Come è stato verificato |
|---|---|---|
| Rotazione evento in evidenza | Nessun meccanismo di recupero se il sito non viene ribuildato: la selezione era solo build-time, quindi tra un deploy e l'altro un evento già concluso poteva restare "in evidenza" indefinitamente. | Analisi di `scripts/select-featured-event.mjs` (nessuna logica runtime) + assenza di GitHub Actions nel repo (`list_workflows` → 0), quindi nessun rebuild automatico programmato. |
| Dati Event sorgente | `cronoscalata-montefiascone-coppa-citta.html` e `en/montefiascone-hill-climb.html` avevano `endDate: 2026-06-30` nel JSON-LD, ma l'evento reale (per tutto il resto della pagina: titolo, teaser, box "In breve") dura solo 19-21 giugno. La versione DE aveva già la data corretta (`2026-06-21`). | Scan mirato di `startDate`/`endDate` su tutte le pagine evento + confronto con la copy pubblicata. |
| Testo estratto (semantico) | `de/sommerveranstaltungen-montefiascone-2026.html`: eyebrow "Bestaetigte Daten" (trascrizione ASCII + tono da audit) e intero paragrafo hero/corpo scritto in tedesco ASCII-trascritto ("buendelt", "oeffentlich bestaetigten", "Veranstalterkanaele" ecc.), diverso dal resto del sito tedesco che usa umlaut reali. | Nuovo script `scripts/check-semantic-text.mjs` (Task 10) eseguito sulle 5 pagine primarie: 1 fallimento reale su questo file. |
| Testo estratto (residuo da task precedente) | `en/est-film-festival-montefiascone.html`: label "Public sources used:" e frase FAQ "This page keeps only the framework confirmed by public sources" — sfuggite a un controllo precedente perché il pattern grep usato allora era troppo specifico (frase leggermente diversa). | Scansione supplementare delle pagine secondarie con lo stesso script generalizzato. |
| Layout /eventi | Nessun problema reale confermato. Un apparente "riquadro immagine vuoto" nello screenshot iniziale è risultato un artefatto di temporizzazione dello screenshot headless (`loading="lazy"` + cattura troppo rapida), non un bug: verificato che l'immagine carica, decodifica e viene visualizzata correttamente con tempi di attesa realistici. | Screenshot ripetuti con `img.decode()` esplicito e con scroll completo della pagina prima della cattura. |
| Tabella calendario, card tematiche, box editoriali | Già sistemati in task precedenti (`codex/summer-events-layout-cleanup`, `codex/event-pages-content-seo-upgrade`). Nessuna concatenazione (`2026Apri`, `Fiera del Vino Cinema` ecc.) trovata nel testo estratto delle 5 pagine primarie né delle 9 pagine secondarie controllate. | `scripts/check-semantic-text.mjs` + controllo manuale supplementare sulle 9 pagine secondarie. |

## Logica di rotazione: prima/dopo

**Prima:** solo build-time. `scripts/select-featured-event.mjs` calcolava l'evento in evidenza con l'orologio al momento della build e lo scriveva nell'HTML statico. Se il sito non veniva ribuildato, l'evento restava quello dell'ultima build anche se nel frattempo era terminato.

**Dopo (due livelli, entrambi senza dati inventati):**

1. **Build-time (invariato nella logica, invariata la firma pubblica `pickFeaturedEvent`)**: continua a essere la fonte di verità per SEO/AEO/GEO e per la lettura senza JavaScript. Ora emette anche, nella stessa pagina:
   - un manifest JSON minimale (`id`, `startDate`, `endDate` per ogni candidato), incorporato inline;
   - un blocco HTML pre-renderizzato per **ogni** candidato più il fallback editoriale, incorporato in `<template>` nascosti (`hidden`) subito dopo la sezione visibile.
2. **Runtime, progressive enhancement (`js/featured-event-runtime.js`, nuovo)**: uno script deterministico, senza fetch e senza dipendenze, rilegge lo stesso identico algoritmo `pickFeaturedEvent` usando l'orologio del visitatore contro il manifest incorporato. Se il risultato coincide con quanto già mostrato (caso normale appena dopo un deploy), non tocca il DOM: zero flicker. Se il build è "invecchiato" rispetto alla data reale, sostituisce il contenuto con l'alternativa già pre-renderizzata corrispondente — mai contenuto generato lato client, sempre HTML già prodotto dallo stesso script di build.

Perché il runtime enhancement è stato scelto (non solo documentato come non necessario): questo repository non ha alcun workflow GitHub Actions configurato (`list_workflows` → `total_count: 0`), quindi non esiste un rebuild automatico programmato. Il task stesso indica che in questo caso il runtime enhancement "è ammesso e preferibile".

## Test con date simulate (Task 3)

`scripts/select-featured-event.test.mjs` (nuovo, committato, incatenato in `npm run build:cloudflare` così un futuro fallimento blocca la build):

| Scenario | Data simulata | Atteso | Risultato |
|---|---|---|---|
| Prima del primo evento | 2026-06-01 | Concerto Banda R&B Revue | OK |
| Durante un evento (Cronoscalata in corso) | 2026-06-20 | Cronoscalata | OK |
| Nel vuoto tra due eventi (nessun evento in corso) | 2026-06-29 | Festival dell'Ecologia Integrale | OK |
| Il giorno subito dopo la fine di Ecologia Integrale | 2026-07-06 | ATB Festival | OK |
| Dopo l'ultimo evento noto | 2026-09-01 | Fallback editoriale | OK |

Verificato inoltre a runtime (test manuale con `Date` simulata nel browser, non committato perché esplorativo):
- Con "oggi" impostato al 2026-07-10 (visitatore che vede un build fermo al 2026-07-01, quindi con Ecologia Integrale ancora "in evidenza" sebbene finita il 07-05), lo script runtime sostituisce correttamente il blocco con **ATB Festival** (9-12 luglio), l'evento realmente in corso in quella data.
- Con "oggi" impostato dopo l'ultimo evento noto, lo script mostra correttamente il fallback editoriale, senza overflow né errori console.

Nessuno scenario ha mai selezionato un evento con `endDate` precedente alla data simulata.

## Esempi testuali prima/dopo

- **Cronoscalata (IT/EN), JSON-LD**: `"endDate": "2026-06-30"` → `"endDate": "2026-06-21"` (allineato alla versione DE, già corretta, e al resto della copy della pagina).
- **DE Estate 2026**, eyebrow: `Bestaetigte Daten` → `Sommer 2026` (tono naturale, coerente con IT "Eventi 2026" / EN "2026 events").
- **DE Estate 2026**, hero: `Diese Seite buendelt nur den oeffentlich bestaetigten Rahmen: Gemeindeplakat, offizielle Eventseiten und offene Veranstalterkanaele, soweit vorhanden.` → `Das offizielle Sommerplakat 2026 bringt Musik, Kultur, Traditionen, Kino, Street Food, Motorsport und Termine am Bolsenasee zusammen. Dieser Überblick ordnet die bestätigten Termine und verlinkt zu den einzelnen Veranstaltungsseiten.` (più naturale, umlaut corretti, allineato a IT/EN).
- **EN Est Film Festival**, FAQ: `No. This page keeps only the framework confirmed by public sources.` → `No. This page reports only the framework confirmed so far.` (tono editoriale, non da audit).
- **EN Est Film Festival**, info-box: `Public sources used:` → `Sources:`.

## Fix tabella calendario

Nessuna modifica necessaria: la tabella responsive (card etichettate su mobile, colonne con padding orizzontale su desktop) era già stata implementata e verificata nel task precedente (`codex/summer-events-layout-cleanup`). Riverificata qui con lo script semantico: nessuna concatenazione (`2026Apri`, `DateApri` ecc.) trovata.

## Fix card tematiche

Nessuna modifica necessaria: le card "Eventi in evidenza per tema" (Estate 2026) e le card spoke di `/eventi` usano già markup con whitespace reale tra gli elementi e CTA distinta (`.nav-card__link` / `.media-card__body a`). Nessuna concatenazione trovata nel testo estratto.

## Fix hero/immagini

Nessuna modifica CSS necessaria. L'apparente immagine "vuota" nel riquadro evento-in-evidenza di `/eventi` era un artefatto di temporizzazione dello screenshot automatizzato (`loading="lazy"` combinato con cattura headless troppo rapida), non un difetto reale: confermato ricaricando con `img.decode()` esplicito e con scroll completo prima della cattura, in entrambi i casi l'immagine (Rocca dei Papi, crop 4:3 corretto) si vede perfettamente.

## File modificati

- `scripts/select-featured-event.mjs` — aggiunta emissione manifest JSON + template alternativi pre-renderizzati; `renderEventBlock`/`renderFallbackBlock` ora restituiscono solo il contenuto interno della sezione (il wrapper `<section>` con `data-event-id` è generato una sola volta in `updateHub`).
- `scripts/select-featured-event.test.mjs` (nuovo) — 5 scenari di data simulata, incatenato in `npm run build:cloudflare`.
- `scripts/check-semantic-text.mjs` (nuovo) — QA di estrazione testo semantico sulle 5 pagine primarie; utile e pulito, committato come richiesto dal Task 10.
- `js/featured-event-runtime.js` (nuovo) — script di riconciliazione runtime, nessuna dipendenza, nessun fetch esterno.
- `package.json` — aggiunto script `test:featured-event`; `build:cloudflare` ora esegue prima il test di rotazione (fail-fast se la logica si rompe).
- `eventi.html` — rigenerato dal build script con la nuova struttura (sezione + manifest + template + script runtime).
- `cronoscalata-montefiascone-coppa-citta.html`, `en/montefiascone-hill-climb.html` — corretto `endDate` JSON-LD da `2026-06-30` a `2026-06-21`.
- `de/sommerveranstaltungen-montefiascone-2026.html` — corretta la trascrizione ASCII del tedesco in tutta la pagina (umlaut reali) e riscritti eyebrow + paragrafo hero in tono naturale.
- `en/est-film-festival-montefiascone.html` — rimossa label "Public sources used" e frase FAQ da tono audit, non intercettate da un controllo precedente.

## QA semantica (Task 10)

`scripts/check-semantic-text.mjs` sulle 5 pagine primarie: **0 fallimenti** (dopo il fix del file DE Estate 2026). Nessun pattern di concatenazione (`2026Apri`, `Fiera del Vino Cinema` ecc.) né testo da audit trovato. Controllo supplementare (non committato, ad-hoc) sulle 9 pagine secondarie: **0 fallimenti** dopo il fix di `en/est-film-festival-montefiascone.html`.

## QA build (Task 11)

`npm run build:cloudflare` (ora incatena anche il test di rotazione):

| Check | Risultato |
|---|---|
| Source/build IT/EN/DE | 97/97/97 |
| Sitemap IT/EN/DE | 97/97/97 |
| `llms.txt` | 97/97/97 |
| `/fr/` | assente |
| `sitemap-fr.xml` | assente |
| Link rotti | 0 |
| Link interni `.html` | 0 |
| Asset mancanti | 0 |
| JSON-LD invalidi | 0 (295 file) |
| Event senza `startDate`/`location` | 0 |
| Canonical ≠ `og:url` | 0 |
| hreflang non reciproco | 0 |
| hreflang `fr` | 0 |
| Mojibake | 0 |
| Placeholder | 0 |
| Mobile overflow | 0 |

## QA visuale (Task 11)

16/16 controlli puliti (8 pagine × 2 viewport: `/eventi`, `/calendario-eventi-montefiascone`, `/eventi-estate-montefiascone-2026` IT/EN/DE, Festival Ecologia Integrale IT/EN/DE). H1 unico su ogni pagina, 0 overflow orizzontale, 0 errori console.

## Rischi residui

- Il livello di riconciliazione runtime copre solo `/eventi` (l'unica pagina con un blocco "in evidenza" dinamico). Le altre pagine con date (schede evento, calendario) non necessitano di questo meccanismo perché non promuovono un singolo evento come "featured" nello stesso modo.
- Il fallback statico resta comunque la base: se JavaScript è disabilitato, l'utente vede l'ultimo stato calcolato al build, che è corretto finché non passano molti giorni senza un nuovo deploy — esattamente il gap che il livello runtime copre per chi ha JS attivo.
- Non sono stati controllati sistematicamente TUTTI gli `startDate`/`endDate` di ogni singola pagina evento del sito oltre a quelle esplicitamente in scope: è possibile che esistano altri scostamenti minori non ancora scoperti su pagine fuori dallo scope di questo task.

## Immagini ancora da fornire

Nessuna nuova richiesta rispetto ai task precedenti (restano valide le richieste P1/P2 già documentate in `docs/event-pages-content-seo-upgrade-report.md` per il Festival dell'Ecologia Integrale).

---

## Stato merge / push / deploy (Task 14-18)

- **Merge su main:** sì — commit `31a4075` (merge di `4882357`), nessun conflitto.
- **QA post-merge:** verde — stessa batteria del Task 11 rieseguita su `main` dopo il merge: 97/97/97, sitemap/llms 97/97/97, `/fr/` e `sitemap-fr.xml` assenti, 0 link rotti, 0 asset mancanti, 0 JSON-LD invalidi, 0 mojibake, 0 placeholder, 0 overflow mobile, QA semantica pulita su tutte le 5 pagine primarie, evento in evidenza corretto (`festival-ecologia-integrale`, non passato).
- **Push:** sì — `3cd17a1..31a4075 main -> main`.
- **Deploy rilevato:** no, non verificabile da questa sessione. Nessun workflow GitHub Actions in questo repository (`list_workflows` → `total_count: 0`) e accesso di rete generico bloccato dalla policy della sandbox (`403 policy denial` su `www.ilovemontefiascone.com`, confermato subito dopo il push tramite `$HTTPS_PROXY/__agentproxy/status`). Questo è lo stesso limite d'ambiente riscontrato in tutti i merge precedenti su questo repository — non è un'evidenza di deploy fallito. Il push è andato a buon fine: se Cloudflare Pages è collegato al repo con autodeploy, il deploy è atteso e dovrebbe avvenire automaticamente, in modo indipendente da questa sessione.
- **QA live (Task 17):** non eseguita per il motivo sopra. Nessuna delle URL live richieste è stata controllata in questa sessione.
- **Blocker residui:** nessuno di codice/repo; solo l'impossibilità di verificare deploy e QA live da questa sandbox. Si raccomanda una verifica manuale esterna (dashboard Cloudflare Pages + controllo diretto delle URL elencate nel Task 17).
