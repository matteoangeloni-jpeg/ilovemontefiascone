# Estate 2026 Montefiascone - Event Content Expansion IT/EN

## Fonte ufficiale usata

- Comune di Montefiascone, "Estate 2026 a Montefiascone", pubblicata il 10-05-2026: https://www.comune.montefiascone.vt.it/novita/notizie/novita_1851.html
- Locandina ufficiale fornita come asset editoriale e salvata in `media/gallery/estate-2026-montefiascone.jpg` e `media/gallery/estate-2026-montefiascone.webp`.

## Eventi del cartellone

- Corteo storico dei bambini, street food e Festa della Repubblica: 30 e 31 maggio, 1 e 2 giugno 2026.
- Cronoscalata Lago-Montefiascone: 19, 20 e 21 giugno 2026.
- Anno Domini 1074: 26, 27 e 28 giugno 2026.
- Festival dell'Ecologia Integrale: 2, 3, 4 e 5 luglio 2026.
- ATB Festival: 9, 10, 11 e 12 luglio 2026.
- Panorami 2026: 16, 17, 18 e 19 luglio 2026.
- Festa patrona Santa Margherita: 19 e 20 luglio 2026.
- Est Film Festival: 20, 21, 22, 23, 24, 25 e 26 luglio 2026.
- 66ª Fiera del Vino di Montefiascone: 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13 e 14 agosto 2026.
- Est-Lake Festival: 14, 15, 16, 20, 21, 22 e 23 agosto 2026.

## Pagine esistenti aggiornate

- `/eventi-tradizioni-fiera-del-vino-montefiascone`
- `/en/montefiascone-wine-fair-traditions`
- `/cronoscalata-montefiascone-coppa-citta`
- `/en/montefiascone-hill-climb`
- Link contestuali aggiornati in homepage, eventi, calendario e pagine EN correlate.

## Nuove pagine create IT

- `/eventi-estate-montefiascone-2026`
- `/anno-domini-1074-montefiascone`
- `/festival-ecologia-integrale-montefiascone`
- `/atb-festival-montefiascone`
- `/panorami-festival-montefiascone`
- `/festa-santa-margherita-montefiascone`
- `/est-film-festival-montefiascone`
- `/est-lake-festival-montefiascone`

## Nuove pagine create EN

- `/en/montefiascone-summer-events-2026`
- `/en/anno-domini-1074-montefiascone`
- `/en/integral-ecology-festival-montefiascone`
- `/en/atb-festival-montefiascone`
- `/en/panorami-festival-montefiascone`
- `/en/santa-margherita-feast-montefiascone`
- `/en/est-film-festival-montefiascone`
- `/en/est-lake-festival-montefiascone`

## Eventi non trasformati in pagina autonoma

- Corteo storico dei bambini, street food e Festa della Repubblica: inserito nell'hub calendario, non trasformato in pagina autonoma perché già svolto alla data dello sprint.

## Date usate

Le date sono riportate solo come indicate dal cartellone ufficiale Estate 2026. Non sono stati aggiunti orari, prezzi, iscrizioni o programmi dettagliati non presenti nella fonte.

## Sitemap prima/dopo

- IT prima: 89 URL; dopo: 97 URL clean.
- EN prima: 69 URL; dopo: 77 URL clean.
- DE non pubblicata; `sitemap-de.xml` non creata.

## Internal linking

- Aggiunto link da homepage IT verso hub Estate 2026.
- Aggiunto link da `eventi.html` e `calendario-eventi-montefiascone.html` verso hub Estate 2026.
- Aggiunto link da homepage EN, Lake Bolsena EN e Things to do near Montefiascone EN verso hub/eventi correlati.
- Ogni pagina evento contiene sezione "Dove andare dopo" / "Where to go next".

## llms.txt

Aggiunta sezione compatta per hub Estate 2026 IT/EN, Fiera del Vino, Est Film Festival e Anno Domini 1074.

## QA

- Build Cloudflare eseguita con successo tramite `npm run build:cloudflare`.
- `sitemap-it.xml`: 97 URL clean, zero `.html`, zero `/de/`.
- `sitemap-en.xml`: 77 URL clean, zero `.html`, zero `/de/`.
- Canonical, hreflang, `og:url`, JSON-LD e FAQ visibili verificati sulle pagine nuove e aggiornate.
- Pacchetto `dist-it` verificato: assenti `docs`, `de`, `server.py`, `README.md` e `sitemap-de.xml`.
- Link interni delle pagine sprint verificati.
- Nessun placeholder, path locale o mojibake nelle pagine sprint.

## Rischi residui

- I programmi dettagliati 2026 possono evolvere dopo il cartellone iniziale: le pagine includono nota prudente e rimando alla fonte ufficiale.
- Alcune location specifiche non sono state inserite perché non presenti nella fonte ufficiale, salvo dove esplicitamente indicate.

## Cosa NON è stato fatto

- Nessuna pubblicazione DE.
- Nessuna modifica Cloudflare, DNS, redirect, Search Console, Analytics o AdSense.
- Nessun dato inventato su orari, prezzi, programmi, ospiti, iscrizioni o operatori.
