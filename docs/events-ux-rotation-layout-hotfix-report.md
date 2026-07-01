# Events UX / Rotation / Table Layout Hotfix — Report

## Verdetto

**READY a livello repo/build.** Tutti i gate locali e post-merge sono verdi, incluso il cleanup DOM di `/eventi` (quarto giro) e la semantica autonoma delle card tematiche (quinto giro). **QA live non verificabile da questa sandbox** (limite di rete, vedi sotto) — non dichiarato "READY live" per questo motivo esplicito. La discrepanza segnalata sulla pagina EN Estate 2026 è stata diagnosticata come deploy/cache per-path su Cloudflare, non un bug di source/build (vedi addendum quarto giro). Vedi in fondo lo stato di merge/push/deploy.

## Addendum — quinto giro (card tematiche semanticamente autonome)

Dopo il quarto giro, un controllo esterno ha confermato che rotazione e tabella calendario sono corrette sul live, ma ha segnalato che le card "Eventi in evidenza per tema" / "Events by travel theme" / equivalente DE restavano semanticamente ambigue nel testo estratto nonostante il separatore "—" avesse già eliminato la concatenazione tecnica: `Apri la guida alla Fiera del Vino — Cinema`, `Open the Wine Fair guide — Cinema`, ecc. — la categoria della card successiva sembrava appartenere alla CTA precedente.

### Fix applicato

Ogni card nelle tre pagine Estate 2026 (IT/EN/DE) ora porta, tramite la stessa classe `.visually-hidden` già usata nel resto del task (invisibile a schermo, reale nel DOM, leggibile senza CSS):
- un prefisso nascosto `Tema:` / `Theme:` / `Thema:` prima del badge di categoria;
- un punto nascosto dopo il badge di categoria;
- un punto nascosto dopo il titolo (`<h3>`);
- un punto nascosto dopo il testo della CTA.

Il separatore generico "—" tra una card e la successiva è stato rimosso: non serve più, perché ogni card ora si chiude con una punteggiatura reale prima che inizi la prossima (che a sua volta si apre con `Tema:`/`Theme:`/`Thema:`), rendendo il confine autoesplicativo senza bisogno di un separatore neutro.

Risultato in `textContent` (verificato su `dist-it` con Playwright, grezzo e whitespace-collapsed):

- IT: `Tema: Enogastronomia. Fiera del Vino. Il riferimento estivo per collegare centro storico, cantine, tradizioni falische e racconto dell'Est! Est!! Est!!!. Apri la guida alla Fiera del Vino. Tema: Cinema. Est Film Festival. Una settimana dedicata al cinema...`
- EN: `Theme: Wine. Montefiascone Wine Fair. The seasonal reference point for the old town, local cellars, Faliscan traditions and the Est! Est!! Est!!! story. Open the Wine Fair guide. Theme: Cinema. Est Film Festival. A cinema-focused week...`
- DE: `Thema: Wein. Weinfest von Montefiascone. Der saisonale Fixpunkt für Altstadt, lokale Kellereien, faliskische Traditionen und die Geschichte des Est! Est!! Est!!!. Zum Weinfest. Thema: Kino. Est Film Festival. Eine Filmwoche...`

Ogni card è ora leggibile come blocco autonomo, senza ambiguità su quale categoria o CTA appartenga a quale evento.

### Pattern vietati (finali) verificati assenti

`Fiera del Vino — Cinema`, `Est Film Festival — Lago`, `Est-Lake — Tradizione`, `Wine Fair guide — Cinema`, `Est Film Festival guide — Lake`, `Est-Lake guide — Heritage`, `Weinfest — Kino`, `Est Film Festival — See`, `Est-Lake — Tradition` — nessuno presente, né in `textContent` grezzo né whitespace-collapsed, su IT/EN/DE.

### Tono audit alleggerito

- IT (FAQ Estate 2026): `Questa guida conserva solo il quadro pubblico gia confermato...` → `Qui trovi le date principali del cartellone. Orari, accessi e dettagli operativi possono essere aggiornati dagli organizzatori: controlla sempre i canali ufficiali prima della visita.` Anche la risposta sulla fonte del calendario è stata resa meno "da audit" (`incrociato con canali ufficiali` → `insieme ai canali ufficiali...quando disponibili`).
- EN (FAQ Estate 2026): `cross-checked with official event channels where available` / `This guide keeps only the public framework already confirmed` → `together with the official channels of each event where available` / `This page summarises the main confirmed dates. Times, access details and operational information may change, so check official channels before travelling.`
- DE: nessuna frase in tono audit residua trovata nel file (l'info-box "So liest du den Kalender" era già in tono naturale; la pagina non ha una sezione FAQ propria).

### Tooling aggiornato

`scripts/check-semantic-text.mjs`:
- il controllo strutturale sul boundary `<article>`→`<article class="card">` ora riconosce il nuovo confine basato su punteggiatura reale (periodo nascosto) invece di richiedere il vecchio separatore a trattino, mantenendo comunque il rilevamento di qualunque boundary non sicuro;
- la lista `BAD_PATTERNS` include ora anche le esatte varianti "— Categoria" segnalate dal vivo;
- `AUDIT_TONE_PATTERNS` è stata ampliata (`questa guida conserva solo`, `conserva solo il quadro pubblico`, `this guide keeps only`, `cross-checked with official`) per non perdere varianti di formulazione come già successo in precedenza.

### File modificati in questo giro

- `eventi-estate-montefiascone-2026.html`, `en/montefiascone-summer-events-2026.html`, `de/sommerveranstaltungen-montefiascone-2026.html` — card tematiche riscritte con prefisso/punteggiatura nascosti, separatore a trattino rimosso; FAQ IT/EN alleggerite dal tono audit.
- `scripts/check-semantic-text.mjs` — check strutturale aggiornato per il nuovo confine, pattern vietati e audit-tone ampliati.

### QA di questo giro

- `npm run build:cloudflare`: verde, 97/97/97, 5/5 scenari di rotazione.
- Sitemap IT/EN/DE: 97/97/97. `llms.txt`: 97/97/97. `/fr/` e `sitemap-fr.xml`: assenti.
- `check-semantic-text.mjs`: verde su tutte le 5 pagine primarie.
- Verifica pattern-esatti + snippet attesi (script ad-hoc Playwright): tutti i pattern vietati assenti, tutte le frasi attese presenti in `textContent` su IT/EN/DE.
- QA sito 295 file: 0 link rotti, 0 link `.html` interni, 0 asset mancanti, 0 JSON-LD invalidi, 0 mismatch canonical/`og:url`, 0 hreflang/FR, 0 mojibake, 0 placeholder reali.
- QA visiva: 16/16 pulita (smoke test) + screenshot dedicati della griglia card tematiche su IT/EN/DE, desktop e mobile: 0 overflow, nessun artefatto visivo dai prefissi/punteggiatura nascosti, layout invariato.
- Test rotazione `/eventi` (solo smoke, non toccato in questo giro): swap runtime con orologio simulato ancora corretto, un solo `<h2>` nella sezione featured.
- Nessun file IT/DE/tabella calendario/schede Ecologia Integrale toccato oltre alle 3 pagine Estate 2026 in scope.

## Addendum — quarto giro (diagnosi deploy/cache EN + cleanup DOM `/eventi`)

Dopo il terzo giro (fix separatori, mergiato e pushato come `b476288`), un controllo esterno sul live ha mostrato una situazione differenziata per lingua:

- **IT Estate 2026**: aggiornata, separatori presenti, pattern vietati assenti.
- **DE Estate 2026**: aggiornata, tabella/card presenti, separatori presenti.
- **EN Estate 2026** (`/en/montefiascone-summer-events-2026`): ancora i vecchi pattern (`2026Open`, `Wine Fair guide Cinema`, `Film Festival guide Lake`, `Est-Lake guide Heritage`) e ancora il testo `Official source and method`.

### Diagnosi EN: source e build sono corretti, causa è a valle

- **EN source**: verificato — `en/montefiascone-summer-events-2026.html` ha lo stesso numero di separatori (`visually-hidden`) della versione IT (27 occorrenze in entrambi i file), agli stessi boundary (`</td><td`, `</th><th`, `</article>`→`<article class="card">`). Nessuna differenza strutturale rispetto a IT.
- **EN build**: verificato — `dist-it/en/montefiascone-summer-events-2026.html` contiene esattamente lo stesso HTML del source per i boundary a rischio (confermato byte-per-byte sul frammento `Open the Wine Fair guide</a>\n</article><span class="visually-hidden"> — </span>\n<article class="card">`), quindi il separatore è presente sia nel source sia nel build.
- **`check-semantic-text.mjs`** include la pagina EN in entrambe le liste (`PAGES` e `SOURCE_FILES`, riga 38) e la esegue regolarmente: 0 fallimenti, anche dopo un rebuild pulito eseguito espressamente per questa verifica.
- **Verifica pattern esatti** (script ad-hoc): nessuno dei pattern segnalati (`2026Open`, `Wine Fair guide Cinema`, `Film Festival guide Lake`, `Est-Lake guide Heritage`, `Official source and method`) è presente né in `textContent` grezzo né whitespace-collapsed su IT/EN/DE/`/eventi` nel build appena generato.
- **Prova indipendente e decisiva**: la stringa `Official source and method` **non esiste più nel repository da diversi commit** — è stata sostituita in `Official sources and method` nel commit `e6590ce` ("Finalize event content enrichment"), poi evoluta ulteriormente fino all'attuale `How to read this calendar`. `e6590ce` è un antenato diretto di `HEAD`/`main` (verificato con `git merge-base --is-ancestor`). Il fatto che il live mostri ancora testo precedente a `e6590ce` — cioè più vecchio di qualunque lavoro fatto in questa serie di round — è una conferma indipendente e inequivocabile che **il problema è la pubblicazione (deploy/cache) della singola pagina EN, non il codice**.

**Conclusione EN: source corretto, build corretto, causa probabile = cache/deploy per-path su Cloudflare specifico per questa URL.** Nessun hotfix di contenuto applicato a EN, IT o DE in questo giro (nessuno era necessario).

### Cleanup DOM `/eventi`: candidati di rotazione esposti come markup reale

Controllo indipendente richiesto su `/eventi`: il featured principale (Festival dell'Ecologia Integrale) è corretto, ma il markup sorgente conteneva **10 blocchi "In evidenza" pre-renderizzati** (uno per ogni evento candidato alla rotazione, più il fallback) dentro elementi `<template data-event-id="...">`, ciascuno con un vero `<h2>` con il nome dell'evento, teaser, immagine, ecc.

Questo è invisibile e corretto per un browser reale: la semantica HTML5 di `<template>` esclude il suo contenuto dall'albero DOM attivo, quindi `document.body.textContent`/`innerText` letti da Playwright non lo includevano mai (per questo la QA precedente, basata su browser reale, risultava pulita). **Ma non tutti gli estrattori di testo rispettano questa semantica**: un tag-stripper naive (regex `<[^>]+>` senza gestione speciale di `<template>`), o un parser HTML che tratta `<template>` come un contenitore generico (comportamento comune in parser non aggiornati alla spec HTML5), leggono il contenuto come markup normale — esponendo 10 sezioni "In evidenza" con titoli reali, apparendo come contenuto duplicato/contraddittorio su quale sia l'evento davvero in corso. Verificato concretamente: un estrattore naive che stringa solo i tag (senza escludere `<script>`) trovava il titolo del featured event duplicato.

**Fix applicato**: i 10 blocchi alternativi non sono più markup HTML reale (niente più `<template>`, niente più `<h2>`/`<p>` duplicati nel sorgente). Sono ora serializzati come stringhe HTML dentro un payload JSON (`<script type="application/json" id="featured-event-alternates">`), esattamente come già avveniva per il manifest date/id. Questo sfrutta una convenzione molto più universale e consolidata di quella di `<template>`: qualunque estrattore di testo, anche il più naive, esclude o comunque non presenta come "contenuto" il testo dentro tag `<script>` — è la convenzione più antica e diffusa nell'ecosistema di conversione HTML→testo, a differenza della gestione di `<template>` che è una specifica più recente e meno uniformemente implementata.

- `scripts/select-featured-event.mjs`: `updateHub()` ora costruisce un oggetto `{ eventId: htmlString, ..., fallback: htmlString }` e lo serializza con una nuova funzione `toInlineJson()` (uguale a `JSON.stringify` ma con `<` escappato in `<`, per sicurezza contro un'eventuale sequenza `</script>` nel payload). Rimossi il contenitore `<div id="featured-event-alternates" hidden>` e i tag `<template>`.
- `js/featured-event-runtime.js`: la funzione `run()` ora fa `JSON.parse` anche del payload alternates (non più `querySelector('template[...]')` + `cloneNode`) e usa `section.innerHTML = alternates[winnerId]` — stesso identico HTML già generato dal build script, nessun contenuto nuovo generato lato client.
- Verificato che la riconciliazione runtime funziona ancora correttamente con il nuovo formato: test con orologio simulato (`Date` sovrascritto a `2026-07-10`, dopo la fine del Festival dell'Ecologia Integrale) mostra correttamente lo scambio verso **ATB Festival**, con un solo `<h2>` presente nella sezione dopo lo scambio (nessuna duplicazione introdotta dallo swap).
- Verificato con un estrattore naive realistico (tag-stripping con esclusione di `<script>`/`<style>`, la convenzione quasi universale): il titolo del featured event ora compare **una sola volta** nel testo estratto da `/eventi` (prima: 2 volte anche con questa convenzione più permissiva; con un naive extractor che non esclude affatto `<script>`, prima appariva raddoppiato come markup reale in tutte le 10 sezioni, ora appare solo come stringa JSON illeggibile, non come sezione HTML strutturata).
- QA rieseguita: build 97/97/97, 5/5 scenari rotazione, `check-semantic-text.mjs` pulito, verifica pattern-esatti pulita, smoke test visivo 16/16 pulito.
- Perimetro invariato: solo 3 file toccati in questo giro (`eventi.html`, `js/featured-event-runtime.js`, `scripts/select-featured-event.mjs`), nessun file IT/EN/DE Estate 2026 toccato perché già corretti.

## Addendum — terzo giro (bug reale di concatenazione testo: causa e fix)

Dopo il secondo giro (chiuso con report "READY"), il live ha continuato a mostrare gli stessi pattern di concatenazione vietati: `19, 20 e 21 giugno 2026Apri scheda`, `Apri la guida alla Fiera del Vino Cinema`, `19., 20. und 21. Juni 2026Seite öffnen`, `Zum Weinfest Kino`, ecc.

### Causa reale

**Non** è un problema di deploy Cloudflare, cache stantia, o build non allineata al source: è stato verificato direttamente che i pattern vietati **erano già presenti nel `dist-it` locale generato da `npm run build:cloudflare`**, quindi il problema era a monte, nel source stesso.

La causa reale è che **il test semantico usato nei giri precedenti era troppo debole**: verificava `document.body.innerText`, che è un'API sensibile al CSS/layout — il browser inserisce automaticamente interruzioni di riga tra elementi di blocco (`<td>`, `<article>`, `<div>`) anche quando l'HTML sorgente non ha alcun carattere di separazione tra i tag adiacenti. Questo faceva apparire "pulito" un output che, letto con `document.body.textContent` (l'API CSS-agnostica, molto più vicina a come un crawler reale, un estrattore di testo per AI, o un "seleziona tutto + copia" leggono davvero la pagina) o dopo una normalizzazione whitespace-collapse (comunissima in qualunque pipeline di estrazione testo), produce esattamente le concatenazioni segnalate live:

- **Boundary `</td><td>`** nella tabella calendario: zero caratteri tra una cella e la successiva nel markup sorgente → `innerText` inseriva un a-capo implicito (nascondendo il problema), `textContent` no.
- **Boundary `</th><th>`** nell'intestazione della tabella (`Termine 2026` + `Seite` → `2026Seite` una volta collassato lo spazio bianco).
- **Boundary `</dd></div><div><dt>`** nelle liste `summary-list` ("Kurz gesagt"/"In breve").
- **Boundary `</article>` → `<article class="card">`** tra le card tematiche: qui esisteva un vero newline nel sorgente, ma qualunque normalizzazione whitespace (`\s+` → spazio singolo) lo collassa in un solo spazio, producendo l'esatto pattern segnalato ("...alla Fiera del Vino Cinema", CTA della card 1 seguita a un solo spazio dal badge categoria della card 2).

### Confronto source / dist-it / live

| Livello | Pattern vietati presenti? |
|---|---|
| Source (pre-fix) | Sì — confermato con `document.body.textContent` su `dist-it` servito localmente |
| dist-it (pre-fix, generato da `npm run build:cloudflare`) | Sì — stesso identico bug del source, il build non introduce né corregge il problema |
| Live (segnalato dall'utente) | Sì — coerente al 100% con quanto trovato in source/dist-it: **non è un problema di cache o deploy Cloudflare**, è un bug reale già presente nel codice mergiato |

Verificato quindi che le ipotesi "Cloudflare non ha deployato" e "cache vecchia" sono da escludere: il bug è riproducibile localmente, a colpo sicuro, partendo dal source appena buildato, senza alcuna rete.

### Fix applicato (reale nel DOM, non CSS)

Come richiesto esplicitamente, il fix inserisce **separatori testuali reali** come nodi di testo nel DOM — non spaziatura CSS, non `::before`/`::after` con `content`, che non sarebbero comparsi in `textContent`. Riusa la classe utility già esistente `.visually-hidden` (definita in `css/style.css`, nessun CSS nuovo introdotto) per non alterare la resa visiva per gli utenti vedenti, applicata a un vero carattere di separazione (em dash) inserito come figlio DOM reale a ogni boundary a rischio:

```html
<span class="visually-hidden"> — </span>
```

Questo testo è presente in `textContent`, in `innerText`, nell'HTML grezzo e per gli screen reader in tutti i casi; è **anche visibile a schermo se il CSS non viene caricato affatto** (requisito esplicito "leggibile anche senza CSS"), perché senza le regole di `.visually-hidden` il testo torna semplicemente visibile nel flusso normale.

Punti di inserimento:
1. **Costante nel generatore build-time** (`scripts/select-featured-event.mjs`): la funzione che genera il blocco `<dl>` dei fatti dell'evento in evidenza ora inserisce il separatore dentro ogni `<dd>`, prima della sua chiusura — questo copre sia il blocco visibile sia **ogni** `<template>` alternativo pre-renderizzato per la riconciliazione runtime, e sopravvive a ogni rebuild futuro (a differenza di una modifica manuale diretta a `eventi.html`, che verrebbe sovrascritta).
2. **Tabelle calendario** (IT/EN/DE Estate 2026): separatore inserito dentro l'ultima cella prima di ogni `</td><td` e `</th><th` (intestazione compresa).
3. **Card tematiche** (IT/EN/DE Estate 2026): separatore inserito tra un `</article>` e l'`<article class="card">` successivo.
4. **Liste "Kurz gesagt"/"In breve"** (`summary-list`): separatore inserito a ogni boundary `</dd>` → `</div><div><dt>`, incluse due pagine secondarie tedesche toccate in giri precedenti (`de/est-film-festival-montefiascone.html`, `de/cronoscalata-lago-montefiascone.html`), trovate tramite una scansione difensiva più ampia.

### Pattern eliminati (verificati)

Tutti i pattern esplicitamente elencati come "devono diventare impossibili" sono stati verificati assenti, sia in `textContent` grezzo sia dopo whitespace-collapse, su IT/EN/DE:

`2026Apri`, `2026Seite`, `2026Open`, `2026Öffnen`, `2026Oeffnen`, `Fiera del Vino Cinema`, `Est Film Festival Lago`, `Est-Lake Tradizione`, `Zum Weinfest Kino`, `Zum Est Film Festival See`, più varianti equivalenti (`Cinema Lago`, `Lago Tradizione`, `Wine Cinema`, `Cinema Lake`, `Wein Kino`, `Kino See`).

### Tooling: test semantico riscritto

`scripts/check-semantic-text.mjs` è stato riscritto per non poter più nascondere questa classe di bug:
1. **Controllo strutturale sul source grezzo**: scansiona i file HTML sorgente (non tramite browser) cercando boundary `</td><td>`, `</th><th>`, `</dd></div><div><dt>` e `</article>`→`<article class="card">` **non** preceduti dal separatore invisibile, tramite regex con lookbehind negativo.
2. **Controllo su testo renderizzato**: carica le 5 pagine primarie in un browser reale (Playwright) e verifica `document.body.textContent`, sia grezzo sia dopo whitespace-collapse, contro l'elenco esteso dei pattern vietati (inclusi quelli segnalati live testualmente).

Entrambi i controlli sono ora obbligatori e il risultato è verde su tutte le pagine coinvolte.

### File modificati in questo giro

- `scripts/select-featured-event.mjs` — separatore invisibile aggiunto alla generazione del blocco `<dl>` fatti evento (fix "alla fonte", si propaga a ogni rebuild).
- `eventi-estate-montefiascone-2026.html`, `en/montefiascone-summer-events-2026.html`, `de/sommerveranstaltungen-montefiascone-2026.html` — separatori a ogni boundary `<td>`/`<th>`/`<article>` a rischio nella tabella calendario e nelle card tematiche.
- `eventi.html` — rigenerato dal build script (riflette il fix di `select-featured-event.mjs`); inoltre corretti i boundary `<dd>` nelle liste `summary-list` statiche presenti nel file.
- `de/est-film-festival-montefiascone.html`, `de/cronoscalata-lago-montefiascone.html` — separatore aggiunto al boundary `<dd>` residuo nella rispettiva lista "Kurz gesagt", trovato con una scansione difensiva.
- `scripts/check-semantic-text.mjs` — riscritto: controllo strutturale sul source + controllo `textContent` renderizzato (grezzo e whitespace-collapsed), sostituendo il precedente controllo basato solo su `innerText`.

### QA di questo giro

- `npm run build:cloudflare`: verde, 97/97/97, 5/5 scenari di rotazione con data simulata superati.
- `scripts/check-semantic-text.mjs`: verde — 0 boundary strutturali non separati, 0 pattern vietati nel `textContent` renderizzato (grezzo e whitespace-collapsed) su tutte le 5 pagine primarie.
- Verifica diretta dei pattern esatti segnalati live (script ad-hoc, non committato) contro `textContent` grezzo e whitespace-collapsed di IT/EN/DE: tutto pulito.
- Batteria standard di QA sito (295 file): 0 link rotti, 0 link interni `.html`, 0 asset mancanti, 0 JSON-LD invalidi, 0 problemi di completezza Event, 0 mismatch canonical/`og:url`, 0 problemi hreflang, 0 riferimenti FR, 0 mojibake.
- QA visiva: 16/16 controlli puliti (8 pagine × 2 viewport). Screenshot dedicati di `.table-wrap` e `.media-card-grid--3` confermano che i separatori invisibili non producono alcun artefatto visivo (nessun trattino o spazio visibile fuori posto).

### QA live

**Non verificabile da questa sandbox.** L'accesso di rete verso `www.ilovemontefiascone.com` è bloccato dalla policy dell'ambiente (conferma ripetuta: connessioni verso il dominio live vanno in timeout/`403 policy denial` tramite il proxy). Questo è un limite d'ambiente già documentato nei giri precedenti, non un'evidenza sullo stato del sito reale. Si raccomanda una verifica manuale esterna delle pagine elencate nel task (in particolare Estate 2026 IT/EN/DE) dopo il deploy, confermando in particolare l'assenza dei pattern elencati sopra tramite "seleziona tutto + copia" o un estrattore di testo reale — non tramite ispezione visiva, che non avrebbe rilevato questo bug nemmeno prima del fix.

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

### Primo giro (rotazione, test, fix data Cronoscalata, tono/umlaut DE)
- **Merge su main:** sì — commit `31a4075` (merge di `4882357`), nessun conflitto.
- **Push:** sì — `3cd17a1..31a4075 main -> main`.

### Secondo giro (parità tabella/card Estate 2026 DE)
- **Merge su main:** sì — commit `518ad59` (merge di `ab51e54`), nessun conflitto.
- **QA post-merge:** verde — stessa batteria del Task 11 rieseguita su `main` dopo il merge: 97/97/97, sitemap/llms 97/97/97, `/fr/` e `sitemap-fr.xml` assenti, 0 link rotti, 0 asset mancanti, 0 JSON-LD invalidi, 0 mojibake, 0 placeholder, 0 overflow mobile, QA semantica pulita su tutte le 5 pagine primarie, evento in evidenza corretto (`festival-ecologia-integrale`, non passato).
- **Push:** sì — `6a87e18..518ad59 main -> main`.
- **Deploy rilevato:** no, non verificabile da questa sessione. Nessun workflow GitHub Actions in questo repository (`list_workflows` → `total_count: 0`) e accesso di rete generico bloccato dalla policy della sandbox (`403 policy denial` su `www.ilovemontefiascone.com`, confermato subito dopo il push tramite `$HTTPS_PROXY/__agentproxy/status`). Questo è lo stesso limite d'ambiente riscontrato in tutti i merge precedenti su questo repository — non è un'evidenza di deploy fallito. Il push è andato a buon fine: se Cloudflare Pages è collegato al repo con autodeploy, il deploy è atteso e dovrebbe avvenire automaticamente, in modo indipendente da questa sessione.
- **QA live (Task 17):** non eseguita per il motivo sopra. Nessuna delle URL live richieste è stata controllata in questa sessione.
- **Blocker residui:** nessuno di codice/repo; solo l'impossibilità di verificare deploy e QA live da questa sandbox. Si raccomanda una verifica manuale esterna (dashboard Cloudflare Pages + controllo diretto delle URL elencate nel Task 17), con particolare attenzione a `/de/sommerveranstaltungen-montefiascone-2026` per confermare che la nuova tabella/card siano visibili in produzione.

### Terzo giro (fix reale concatenazione testo: causa root `innerText` vs `textContent`)
- **Causa reale confermata:** bug presente nel source/dist-it, non nel deploy/cache Cloudflare (vedi sezione dedicata sopra).
- **Merge su main:** sì — commit `1c3ef91` (merge di `86e8d64`), nessun conflitto.
- **QA post-merge:** verde — build `npm run build:cloudflare` rieseguito su `main` dopo il merge (97/97/97, 5/5 scenari rotazione), `scripts/check-semantic-text.mjs` pulito su `dist-it` (0 boundary strutturali non separati, 0 pattern vietati in `textContent` grezzo/whitespace-collapsed su tutte le 5 pagine primarie), verifica diretta pattern esatti segnalati live pulita anche su `/eventi.html` e `/calendario-eventi-montefiascone.html`, QA sito completa su 295 file (0 link rotti, 0 link `.html` interni, 0 asset mancanti, 0 JSON-LD invalidi, 0 mismatch canonical/`og:url`, 0 hreflang `fr`, 0 riferimenti FR, 0 mojibake, 0 placeholder reali, `/fr/` e `sitemap-fr.xml` assenti), QA visiva 16/16 (8 pagine × 2 viewport) pulita.
- **Push:** sì — `f0eeda7..1c3ef91 main -> main`.
- **Deploy rilevato:** no, stesso limite d'ambiente dei giri precedenti — accesso di rete verso `www.ilovemontefiascone.com` bloccato dalla policy della sandbox (confermato di nuovo dopo il push).
- **QA live:** non eseguibile da questa sessione per lo stesso motivo. Non dichiarato "READY live".

### Quarto giro (diagnosi EN + cleanup DOM `/eventi`)
- **EN Estate 2026:** source e build confermati corretti e identici a IT per struttura dei separatori. Nessun hotfix di contenuto applicato (non serviva). Causa probabile della discrepanza live: deploy/cache per-path su Cloudflare, non un difetto di codice — confermato indipendentemente dal fatto che il testo live riportato (`Official source and method`) precede il commit `e6590ce`, di molto antecedente a questa serie di round.
- **Cleanup `/eventi`:** i 10 blocchi candidati alla rotazione, prima dentro `<template>` con markup reale, ora serializzati come payload JSON (`<script type="application/json" id="featured-event-alternates">`), non più leggibili come sezioni HTML duplicate da estrattori che non implementano la semantica di `<template>`.
- **Merge su main:** sì — commit `3a38296` (merge di `ab01933`), nessun conflitto.
- **QA post-merge:** verde — build 97/97/97, 5/5 scenari rotazione, `check-semantic-text.mjs` pulito, verifica pattern-esatti pulita (incluso `Official source and method`), test di swap runtime con orologio simulato verificato (un solo `<h2>` dopo lo scambio), QA sito 295 file pulita, QA visiva 16/16 pulita.
- **Push:** sì — `b476288..ba7480f main -> main`.
- **Deploy rilevato:** non verificabile da questa sandbox, stesso limite di rete dei giri precedenti.
- **QA live:** non eseguibile da questa sessione. Non dichiarato "READY live".

### Quinto giro (card tematiche semanticamente autonome)
- **Merge su main:** sì — commit `f36c167` (merge di `c57447a`), nessun conflitto.
- **QA post-merge:** verde — build 97/97/97, sitemap/llms 97/97/97, `/fr/`/`sitemap-fr.xml` assenti, `check-semantic-text.mjs` pulito, verifica pattern-esatti + snippet attesi pulita su IT/EN/DE, QA sito 295 file pulita, QA visiva 16/16 pulita + screenshot dedicati card tematiche (0 overflow, nessun artefatto), smoke test rotazione `/eventi` ancora corretto.
- **Push:** vedi commit hash aggiornati di seguito.
- **Deploy rilevato:** non verificabile da questa sandbox, stesso limite di rete dei giri precedenti.
- **QA live:** non eseguibile da questa sessione. Non dichiarato "READY live".
