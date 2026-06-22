# Hotfix Report — Incomplete Event Structured Data

## Verdetto

**PRONTO PER MERGE**

0 problemi P0/P1. Build OK, sitemap invariate, JSON-LD valido, nessun markup `Event` incompleto residuo.

## Branch

`fix/incomplete-event-structured-data` (creato da `main`).

## Causa

Google Search Console ha rilevato problemi critici nei Dati strutturati "Eventi"
(`startDate` e `location` mancanti) e problemi non critici (`eventStatus`,
`description`, `organizer`, `performer`, `endDate`).

La causa è un riferimento JSON-LD `@type: "Event"` **incompleto** presente sulle
pagine evento Estate 2026. Su ognuna di queste pagine il nodo principale è già un
`Article` (o `WebPage`), ma all'interno dell'array `about` era presente uno *stub*
del tipo:

```json
"about": [
  { "@type": "Place", "name": "Montefiascone" },
  { "@type": "Event", "name": "<nome evento>" }
]
```

Quello stub `Event` conteneva solo `@type` e `name`, senza `startDate` né
`location`: Google lo interpretava come un Evento marcato male e segnalava i campi
mancanti. Non esisteva nessun nodo `Event` completo da correggere — il markup era
intrinsecamente incompleto e non c'erano dati certi per completarlo.

## Pagine corrette

Rimosso lo stub `Event` incompleto dall'array `about` (mantenuto `Place`) su 18 pagine:

IT (9):
- `anno-domini-1074-montefiascone.html`
- `festival-ecologia-integrale-montefiascone.html`
- `atb-festival-montefiascone.html`
- `panorami-festival-montefiascone.html`
- `festa-santa-margherita-montefiascone.html`
- `est-film-festival-montefiascone.html`
- `est-lake-festival-montefiascone.html`
- `eventi-tradizioni-fiera-del-vino-montefiascone.html`
- `cronoscalata-montefiascone-coppa-citta.html`

EN (9):
- `en/anno-domini-1074-montefiascone.html`
- `en/integral-ecology-festival-montefiascone.html`
- `en/atb-festival-montefiascone.html`
- `en/panorami-festival-montefiascone.html`
- `en/santa-margherita-feast-montefiascone.html`
- `en/est-film-festival-montefiascone.html`
- `en/est-lake-festival-montefiascone.html`
- `en/montefiascone-wine-fair-traditions.html`
- `en/montefiascone-hill-climb.html`

Gli hub eventi (`eventi-estate-montefiascone-2026.html` e
`en/montefiascone-summer-events-2026.html`) **non** contenevano markup `Event`:
usano già `Article` + `ItemList` di `ListItem` (nessun `Event`), quindi sono già
conformi e non sono stati modificati.

## Strategia applicata

- **Event rimosso**: eliminato lo stub `@type: "Event"` incompleto dall'array
  `about` di tutte le pagine evento elencate.
- **Sostituito con WebPage/Article/CollectionPage**: nessuna nuova sostituzione
  necessaria a livello di pagina, perché il nodo principale era già `Article`/
  `WebPage` (tipi raccomandati). L'array `about` mantiene il riferimento `Place`
  (Montefiascone).
- **Date mantenute nel contenuto visibile**: le date 2026 restano nel testo HTML
  e nelle FAQ; non è stato toccato nessun contenuto visibile.
- **Nessun dato inventato**: non sono stati aggiunti `startDate`, `location`,
  `endDate`, `organizer`, `performer`, orari, prezzi o programmi.

### Eccezione documentata — Event completo mantenuto

`concerto-banda-rb-revue-montefiascone.html` contiene un `MusicEvent` **completo
e intenzionale** con dati certi (`startDate` 2026-06-19T21:00, `location`
Piazzale Roma con `PostalAddress`, `eventStatus`, `organizer`, `performer`,
`description`). Non è tra le pagine segnalate e rispetta la regola "solo
occorrenze complete e intenzionali", quindi è stato **mantenuto**.

## Ricerca globale

| Pattern | Prima | Dopo |
| ------- | ----- | ---- |
| `"@type": "Event"` (sorgenti) | 18 | 0 |
| `"@type": "MusicEvent"` completo (sorgenti) | 1 | 1 (intenzionale, completo) |
| `"@type": "Event"` in `dist-it` | — | 0 |

Conferma: nessun frammento `Event` incompleto residuo. Gli unici campi
`startDate`/`eventStatus`/`organizer`/`performer` rimasti appartengono al
`MusicEvent` completo del concerto.

## SEO tecnico

- **canonical**: clean, senza `.html` (verificato su pagine campione).
- **hreflang**: clean, nessun `de`; coppie `it`/`en`/`x-default` intatte.
- **og:url**: clean, senza `.html`.
- **JSON-LD**: 182 file HTML controllati, 0 blocchi `ld+json` non validi.
- **sitemap**: invariata — `sitemap-it.xml` 97 URL, `sitemap-en.xml` 77 URL,
  `sitemap.xml` index con 2 entry. Nessun `.html` nelle sitemap.
- **Nessuna DE**: nessun `hreflang="de"`, nessuna dir `/de/` in `dist-it`,
  nessun `sitemap-de.xml`.
- **Nessun path locale**: nessun `C:/Users/` in `dist-it`.

## QA

| Area | Esito | Note |
| ---- | ----- | ---- |
| `npm run build:cloudflare` | ✅ | Build success, pacchetto in `dist-it` |
| Sitemap IT | ✅ | 97 URL clean |
| Sitemap EN | ✅ | 77 URL clean |
| Sitemap index | ✅ | 2 entry (it + en) |
| `.html` nei segnali SEO | ✅ | 0 occorrenze nelle sitemap |
| canonical clean | ✅ | senza `.html` |
| hreflang clean | ✅ | nessun `de` |
| `og:url` clean | ✅ | senza `.html` |
| JSON-LD valido | ✅ | 0 blocchi invalidi su 182 file |
| JSON-LD `Event` incompleto | ✅ | 0 occorrenze |
| hreflang `de` | ✅ | assente |
| `/de/` non pubblica | ✅ | dir assente in `dist-it` |
| `sitemap-de.xml` assente | ✅ | non presente |
| `docs`/`de`/`server.py`/`README.md`/`sitemap-de.xml` fuori da `dist-it` | ✅ | assenti |
| Path locale `C:/Users/` | ✅ | assente |

## Problemi P0/P1

Zero.

## Problemi P2/P3

- **P3 (futuro)**: lo schema `Event`/`MusicEvent` potrà essere reintrodotto sulle
  singole pagine evento quando il programma ufficiale dettagliato (data certa,
  luogo, orari, organizer) sarà disponibile — usando dati reali e completi, come
  già fatto per il concerto della Banda R&B Revue.

## Cosa NON è stato fatto

- Nessun dato inventato (`startDate`, `location`, `endDate`, `organizer`,
  `performer`, orari, prezzi, programmi).
- Nessuna nuova pagina, nessuna modifica URL, redirect o conteggio sitemap.
- Nessuna modifica a Cloudflare / DNS / Search Console / Analytics / AdSense.
- Nessuna pubblicazione DE, nessun `sitemap-de.xml`.
- Nessuna correzione mojibake, nessun CSS cleanup, nessun refactor.

## Commit

`Fix incomplete event structured data` su branch
`fix/incomplete-event-structured-data`. Nessun merge su `main`.

## Prossimo passo consigliato

Merge controllato urgente, poi in Search Console avviare "Convalida correzione"
per i Dati strutturati Eventi.
