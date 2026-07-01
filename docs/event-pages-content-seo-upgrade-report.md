# Event Pages Content & SEO Upgrade — Report

## Fonti usate

Il fact-check live (sito ufficiale del festival, pagina Facebook pubblica, articoli locali) non è stato eseguibile da questa sessione: l'accesso di rete generico a internet è bloccato dalla policy della sandbox (confermato tentando sia il festival sia un dominio di controllo come Wikipedia, entrambi respinti con `403`). Al posto della verifica live, sono state usate due fonti interne già affidabili:

1. Il contenuto già pubblicato sulla pagina live prima di questa modifica, che citava esplicitamente `cartellone Estate 2026 del Comune di Montefiascone` e `sito ufficiale del festival (festivalecologiaintegrale.it)` come fonti.
2. Il registro di fact-check di un task precedente, `docs/event-content-enrichment-audit.md`, che documenta le stesse fonti e conferma gli stessi dati (tema, date, apertura, ospite, organizzazione) come già verificati in un passaggio precedente.

La convergenza tra le due fonti interne e l'elenco fornito nel task è stata trattata come conferma sufficiente per riusare questi dati; nessun dato nuovo non già presente in una delle due fonti è stato aggiunto.

## Dati confermati (usati)

- Festival dell'Ecologia Integrale, VI edizione.
- Tema 2026: "Oltre i deserti".
- Date: 2-5 luglio 2026.
- Apertura: 2 luglio 2026, ore 18:00, Piazza Santa Lucia Filippini.
- Ospite dell'apertura: Mogol.
- Organizzatore: Associazione Rocca dei Papi per un'Ecologia Integrale ETS.

## Dati non usati

- **Format "Mogol incontra Mogol"**: citato nel brief del task come dato da verificare, ma non presente né nella pagina live precedente né nel registro di fact-check interno. Non essendo verificabile da questa sessione né già corroborato altrove nel repository, non è stato usato (regola "non usare dati fragili").
- Programma completo dei giorni 3, 4 e 5 luglio, altri ospiti oltre Mogol, orari diversi dall'apertura, prezzi/biglietti, modalità di accesso: nessuno di questi dati era già confermato nelle fonti disponibili, quindi non sono stati inventati né aggiunti.

## Pagine aggiornate

**Priorità 1 (riscrittura editoriale completa):**
- `festival-ecologia-integrale-montefiascone.html`
- `en/integral-ecology-festival-montefiascone.html`
- `de/festival-integrale-oekologie-montefiascone.html` (riscrittura completa: struttura precedente era molto più povera di IT/EN, priva di FAQPage/BreadcrumbList in JSON-LD e scritta con trascrizione ASCII delle vocali tedesche invece degli umlaut reali)

**Priorità 2 (fix mirati, non riscritture massive):**
- `atb-festival-montefiascone.html` + `en/atb-festival-montefiascone.html`
- `est-lake-festival-montefiascone.html` + `en/est-lake-festival-montefiascone.html`
- `panorami-festival-montefiascone.html` + `en/panorami-festival-montefiascone.html`
- `eventi-tradizioni-fiera-del-vino-montefiascone.html` + `en/montefiascone-wine-fair-traditions.html`
- `est-film-festival-montefiascone.html` (IT) + `de/est-film-festival-montefiascone.html` (fix più esteso: pagina DE era la più debole del gruppo, priva di FAQ)
- `cronoscalata-montefiascone-coppa-citta.html` (IT) + `en/montefiascone-hill-climb.html` + `de/cronoscalata-lago-montefiascone.html` (fix più esteso: intera pagina DE scritta con trascrizione ASCII invece di umlaut reali)

## Pagine non aggiornate (già adeguate)

- `de/atb-festival-montefiascone.html`, `de/est-lake-festival-montefiascone.html`, `de/panorami-festival-montefiascone.html`, `de/weinfest-montefiascone-traditionen.html`: nessun testo da audit rilevato, umlaut corretti, non toccate.
- `en/est-film-festival-montefiascone.html`: nessun testo da audit rilevato ("Fonti pubbliche usate"/"What is confirmed" assenti), non toccata.
- `anno-domini-1074-montefiascone.html`: già solida (10 sottosezioni H3, nessun flag di audit-tone), non toccata.

## Sezioni aggiunte (Festival Ecologia Integrale, IT/EN/DE)

1. Intro editoriale ("Il Festival... a Montefiascone" / "The Integral Ecology Festival..." / "Das Festival... in Montefiascone") — cos'è, quando, dove, perché rilevante.
2. "Perché andarci" / "Why it's worth going" / "Warum sich der Besuch lohnt".
3. "Il tema 2026: Oltre i deserti" / "The 2026 theme: Beyond the Deserts" / "Das Thema 2026: Oltre i deserti".
4. "L'apertura con Mogol" / "The opening with Mogol" / "Die Eröffnung mit Mogol".
5. "Per chi è adatto" / "Who it suits" / "Für wen es geeignet ist" (lista puntata).
6. "Cosa abbinare alla visita" / "What to pair with your visit" / "Was sich mit dem Besuch verbinden lässt" (7 link interni: Rocca dei Papi, centro storico, Lago di Bolsena, calendario Estate 2026, vino, dove dormire, come arrivare).
7. Box "Prima di partire" / "Before you travel" / "Vor der Reise" (microcopy naturale, non da audit; fonti linkate in modo discreto nel testo).
8. Box "In breve" espanso da 3 a 6 voci (Date, Luogo, Tema 2026, Apertura, Per chi è adatto, Cosa aspettarsi).

Rimosse le sezioni "Informazioni 2026" (bullet-list stile audit), "Cosa è confermato"/"What is confirmed" e l'etichetta "Fonti pubbliche usate"/"Public sources used" in tutte e 3 le lingue.

## FAQ aggiunte

**Ecologia Integrale (6 domande per lingua, IT/EN/DE, allineate a JSON-LD):**
Quando si svolge; dove si tiene l'apertura; chi inaugura; cosa significa ecologia integrale; è adatto a un weekend; cosa vedere insieme al Festival.

**Est Film Festival DE**: 3 nuove domande aggiunte (prima assenti): quando si svolge; programma già noto; dove si svolge.

## JSON-LD modificati

- **Ecologia Integrale IT/EN/DE**: aggiunto `organizer` (Associazione Rocca dei Papi per un'Ecologia Integrale ETS) al nodo Event; FAQPage riscritta con le 6 nuove domande; Article/WebPage `description` allineate al nuovo tono editoriale. `startDate`/`endDate`/`location` invariati (già corretti: 2026-07-02 → 2026-07-05, Montefiascone). Nessun `performer` aggiunto (Mogol è confermato solo per l'apertura, non per l'intero festival, come da vincolo del task). Nessun `offers` aggiunto (prezzi/biglietti non confermati).
- **DE Ecologia Integrale**: aggiunta ex-novo `BreadcrumbList` e `FAQPage` (assenti prima: la pagina aveva solo un nodo `Article` isolato, non un `@graph` completo come IT/EN).
- **Est Film Festival DE**: aggiunta `FAQPage` con le 3 nuove domande.
- Nessun'altra pagina ha richiesto modifiche JSON-LD (dati Event già corretti ovunque, verificato: 0 Event senza `startDate`/`location` su tutto il sito).

## Immagini

- **Ecologia Integrale (IT/EN/DE)**: hero e `og:image`/`twitter:image` mantenuti su `hero-rocca-dei-papi-1600.jpg` (asset generico esistente, condiviso con altre pagine). Alt text già descrittivo e corretto per lingua. Nessuna nuova immagine scaricata, nessuna immagine AI, nessun asset sostituito.
- **Immagini P1 da fornire** (per un futuro aggiornamento, se disponibili con diritti):
  - Piazza Santa Lucia Filippini durante il Festival.
  - Apertura con pubblico.
  - Mogol sul palco, solo se disponibile con diritti d'uso chiari.
  - Dettagli del centro storico legati all'evento.

## Problemi corretti

- Mojibake reale: `"gi? confermato"` in `festival-ecologia-integrale-montefiascone.html` → corretto in `"già confermato"` (assorbito dalla riscrittura completa della sezione).
- Tono da audit rimosso: "Fonti pubbliche usate", "Cosa è confermato"/"What is confirmed", "Questa pagina conserva solo"/"This page keeps only" — riscritti in tono editoriale naturale su tutte le pagine coinvolte (IT/EN/DE).
- **Trascrizione ASCII del tedesco** (bug di qualità non esplicitamente elencato nel brief ma riscontrato durante l'audit): le pagine `de/festival-integrale-oekologie-montefiascone.html`, `de/est-film-festival-montefiascone.html` e `de/cronoscalata-lago-montefiascone.html` usavano sistematicamente `oe/ae/ue` al posto di `ö/ä/ü` (es. "Bestaetigte", "Eroeffnung", "oeffentlich"), in contrasto con il resto del sito tedesco che usa umlaut reali (verificato su `de/anreise-nach-montefiascone.html` e altri). Corretto con sostituzione mirata, verificando parola per parola per evitare falsi positivi su termini legittimi come "Quellen" o "Zuschauerzonen".
- Un refuso di maiuscola/minuscola a inizio frase in `de/est-film-festival-montefiascone.html` ("oeffentliche Quellen bestaetigen..." con iniziale minuscola) è stato assorbito dalla riscrittura della frase.
- Internal linking rafforzato su Ecologia Integrale: aggiunti collegamenti a dove dormire e come arrivare, prima assenti (ora presenti sia nel corpo sia nella sidebar "Guide collegate"/"Related guides"/"Verwandte Seiten").

## QA locale (Task 9)

`npm run build:cloudflare`:

| Check | Risultato |
|---|---|
| Perimetro build | IT 97 / EN 97 / DE 97 |
| Sitemap | 97 / 97 / 97 |
| `llms.txt` | 97 / 97 / 97 |
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
| Mobile overflow | 0 (22 check: 11 pagine × 2 viewport, incluse le 3 Ecologia + 8 pagine secondarie modificate) |

## Rischi residui

- Impossibilità di fact-check live in questa sessione (rete bloccata): i dati usati si basano su fonti interne già verificate in un task precedente, non su una nuova verifica diretta dei siti ufficiali. Se il festival ha aggiornato pubblicamente dati nel frattempo (es. nuovi ospiti, programma esteso), questa pagina non li riflette.
- "Mogol incontra Mogol" resta un dato non verificato e non usato: se l'utente conferma questo format tramite fonte pubblica verificabile, andrebbe aggiunto in un pass successivo.
- Immagini evento-specifiche (P1) ancora da fornire per Ecologia Integrale; l'hero resta generico.
