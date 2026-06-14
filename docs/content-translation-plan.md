# Content & Translation Plan — ilovemontefiascone.com

Stato: **solo IT pubblicabile**. EN/DE restano **non pubblicabili** (mojibake/QA non superato), escluse da `dist-it`, da `sitemap` e bloccate in `robots.txt`. Questo documento pianifica la localizzazione; non autorizza la pubblicazione.

## 1. Pagine IT pubblicate (base per la traduzione)

### Hub e pagine core (preesistenti)
`/` · `cosa-vedere` · `guide` · `eventi` · `vino` · `mappa` · `galleria` · `progetto-editoriale`

### Pagine spoke preesistenti
`cosa-vedere-montefiascone-guida-completa` · `cosa-vedere-dintorni-montefiascone-itinerario` · `monumenti-minori-chiese-storiche-montefiascone` · `montefiascone-lago-bolsena-spot-fotografici-aerei` · `itinerari-tematici-montefiascone` · `eventi-tradizioni-fiera-del-vino-montefiascone` · `cronoscalata-montefiascone-coppa-citta` · `cantine-montefiascone-degustazione-est-est-est` · `enogastronomia-ricette-tipiche-montefiascone` · `associazioni-volontariato-montefiascone`

### Nuove pagine IT (sprint "Expand Italian tourism portal content")
Info pratiche: `come-arrivare-a-montefiascone` · `parcheggi-montefiascone` · `informazioni-turistiche-montefiascone` · `quando-visitare-montefiascone`
Lago: `lago-di-bolsena` · `spiagge-lago-di-bolsena` · `borghi-lago-di-bolsena`
Itinerari: `montefiascone-in-un-giorno` · `weekend-a-montefiascone` · `via-francigena-montefiascone-viterbo` · `itinerario-fotografico-montefiascone` · `montefiascone-con-bambini-famiglie`
Luoghi: `rocca-dei-papi-montefiascone` · `cattedrale-santa-margherita-montefiascone` · `basilica-san-flaviano-montefiascone`
Enogastronomia: `est-est-est-montefiascone-vino-doc` · `prodotti-tipici-montefiascone-tuscia` · `cucina-tipica-montefiascone`
Soggiorno (editoriali): `dove-dormire-a-montefiascone` · `dove-mangiare-a-montefiascone`

## 2. Priorità di traduzione
Ordine lingue: **EN → DE → FR → ES**. Per cluster:
1. **P0 (prima ondata EN):** homepage, cosa-vedere/guida completa, come-arrivare, lago-di-bolsena, montefiascone-in-un-giorno, weekend, vino/est-est-est, dove-dormire, dove-mangiare.
2. **P1:** luoghi (Rocca, Cattedrale, San Flaviano), borghi/spiagge lago, via-francigena, itinerari per target.
3. **P2:** info pratiche minori, enogastronomia di dettaglio, eventi (con cautela sulle date).
4. **P3:** pagine stagionali e di nicchia.

Guide internazionali specifiche (solo EN/lingue estere, non traduzioni dirette): `montefiascone-day-trip-from-rome`, `lake-bolsena-itinerary`, `montefiascone-travel-guide`.

## 3. Regole slug localizzati
- IT resta a root senza prefisso; ogni lingua in sottocartella: `/en/ /de/ /fr/ /es/`.
- Slug **localizzati nella lingua** (no slug IT in cartelle estere). Es.: `come-arrivare` → `/en/how-to-get-to-montefiascone.html`, `/de/anreise-nach-montefiascone.html`.
- Negli slug evitare caratteri accentati/umlaut: DE usa traslitterazione (`ü`→`ue`) **solo nello slug**, mai nel testo/heading visibile.
- Non cambiare gli slug IT esistenti (no rottura URL).

## 4. Regole hreflang
- Finché una lingua non è validata, **nessun hreflang verso di essa**. Oggi le pagine IT dichiarano solo `it` + `x-default` (self).
- Quando una lingua passa la QA: aggiungere il cluster **reciproco** su tutte le pagine equivalenti (`it`, `en`, `de`, …) + `x-default` → versione IT.
- hreflang solo tra pagine **realmente equivalenti** e pubblicate. Mai hreflang verso pagine mancanti o non validate.

## 5. Regole canonical
- Ogni pagina, in ogni lingua, ha canonical **self-referential** assoluto.
- Mai canonical cross-lingua (no `/en/...` canonical verso IT).
- Le pagine localizzate restano con canonical predisposto ma **non entrano in produzione** finché non validate.

## 6. Checklist QA per lingua (gate di pubblicazione)
- [ ] 0 mojibake / encoding UTF-8 pulito (nessun `Ã`/`Â`).
- [ ] 0 placeholder, 0 testo italiano residuo non voluto.
- [ ] title < 60, meta description 120–155, H1 unico — **localizzati**.
- [ ] OG/Twitter localizzati; `og:locale` corretto (`en_GB`, `de_DE`, …).
- [ ] JSON-LD valido con `inLanguage` corretto e testo FAQ tradotto.
- [ ] FAQ visibili coerenti con `FAQPage`.
- [ ] parità semantica con la pagina IT (stessi fatti, nessun dato inventato).
- [ ] link interni puntano a pagine **della stessa lingua** già pubblicate.
- [ ] nav/footer localizzati.
- [ ] revisione **umana madrelingua** (no traduzione automatica grezza).

## 7. Criterio per inserire una lingua in sitemap
Una lingua entra in sitemap **solo se**: tutte le pagine core della lingua hanno superato la QA (sezione 6), hreflang reciproco attivo, canonical self. Si crea allora `sitemap-<lang>.xml` e lo si aggiunge al **sitemap index** (`sitemap.xml`). Mai inserire singole pagine non validate.

## 8. Criterio per rimuovere Disallow da robots.txt
Rimuovere `Disallow: /en/` (o `/de/` ecc.) **solo quando**: QA superata, lingua in sitemap, hreflang reciproco, build aggiornato per includere la cartella in `dist-it`. Fino ad allora la cartella resta bloccata e fuori dal deploy.

## 9. Divieti
- **Vietato** pubblicare traduzioni non revisionate da un madrelingua.
- **Vietato** aggiungere hreflang verso pagine non validate.
- **Vietato** inserire EN/DE/FR/ES in sitemap o in `dist-it` prima della QA.
- **Vietato** inventare dati turistici, date, orari, distanze, contatti o fonti in qualsiasi lingua.

## 10. Stato attuale lingue
| Lingua | Cartella | Stato | In sitemap | In dist-it | robots |
|---|---|---|---|---|---|
| IT | `/` | Pubblicata | sì (`sitemap-it.xml`) | sì | Allow |
| EN | `/en/` | Draft, **non pubblicabile** (mojibake/QA) | no | no | Disallow |
| DE | `/de/` | Draft, **non pubblicabile** (mojibake/QA) | no | no | Disallow |
| FR | `/fr/` | Non avviata | no | no | (n/d) |
| ES | `/es/` | Non avviata | no | no | (n/d) |
