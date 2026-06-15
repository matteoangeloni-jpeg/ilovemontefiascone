# I Love Montefiascone

Portale turistico statico dedicato a Montefiascone e al Lago di Bolsena, progettato con architettura hub & spoke, contenuti editoriali SEO, PWA offline-first e una versione di soft launch pubblicabile in italiano.

## Obiettivo del progetto

Il repository contiene:

- la versione principale del portale statico;
- i contenuti hub e spoke dedicati a Montefiascone;
- asset media, CSS e JavaScript condivisi;
- bozze multilingua `en/` e `de/` ancora non pronte per la pubblicazione pubblica;
- script di packaging per il deploy IT-only.

## Struttura del repository

```text
/
├─ index.html
├─ cosa-vedere.html
├─ guide.html
├─ eventi.html
├─ vino.html
├─ mappa.html
├─ 404.html
├─ privacy.html
├─ cookie.html
├─ progetto-editoriale.html
├─ sw.js
├─ pwa-boot.js
├─ manifest.json
├─ sitemap.xml
├─ robots.txt
├─ assets/
├─ css/
├─ js/
├─ icons/
├─ media/
├─ en/                  # draft non pubblicabile
├─ de/                  # draft non pubblicabile
├─ data/
├─ build-soft-launch-it.ps1
└─ deploy-soft-launch-it.txt
```

## Sviluppo locale

Preview statico rapido:

```powershell
python -m http.server 4174
```

Server locale con endpoint quiz:

```powershell
python server.py
```

Nota: `server.py` e `data/quiz_responses.db` servono solo in locale e non fanno parte del deploy pubblico.

## Deploy pubblico

La pubblicazione pubblica deve usare solo il pacchetto italiano.

Build del pacchetto `dist-it/`:

```powershell
pwsh ./build-soft-launch-it.ps1
```

Il file [deploy-soft-launch-it.txt](./deploy-soft-launch-it.txt) documenta in modo esplicito:

- file inclusi nel deploy;
- cartelle incluse;
- file e cartelle da escludere.

## GitHub Pages

Il repository include un workflow GitHub Actions che:

1. genera `dist-it/` con `build-soft-launch-it.ps1`;
2. pubblica solo `dist-it/` su GitHub Pages;
3. evita di esporre pubblicamente bozze, screenshot, audit, database locali e file di sviluppo.

Per attivarlo su GitHub:

1. creare il repository remoto;
2. fare push del branch `main`;
3. in `Settings > Pages`, scegliere `GitHub Actions` come source.

## Cosa viene pubblicato e cosa no

Pubblicato via Pages:

- homepage e pagine italiane root;
- asset in `assets/`, `css/`, `js/`, `icons/`, `media/`;
- `manifest.json`, `sw.js`, `robots.txt`, `sitemap.xml` (sitemap index) e `sitemap-it.xml` (URL italiani).

Tenuto nel repository ma non pubblicato:

- directory `en/` e `de/` finché non vengono rifinite;
- script di sviluppo;
- file di lavoro e documentazione interna.

Escluso dal repository tramite `.gitignore`:

- screenshot di audit e preview;
- build generate;
- database locali;
- report temporanei.

## Checklist pre go-live

Completato in preparazione del soft launch IT:

- [x] accenti italiani corretti su tutte le pagine pubblicabili e sulle stringhe JS visibili;
- [x] `privacy.html` e `cookie.html` dichiarano i servizi di terze parti (Google Fonts, Open-Meteo, tile mappa, Leaflet/unpkg, `sessionStorage`);
- [x] footer "Trasparenza" deduplicato su `404`, `privacy`, `cookie`, `progetto-editoriale`;
- [x] immagini homepage in `<picture>` WebP con fallback JPG; preload hero allineato al background CSS (`image-set`);
- [x] versione cache PWA aggiornata (`sw.js` + token `?v=` degli asset);
- [x] titoli, metadata, canonical, OG/Twitter e JSON-LD verificati sulle pagine italiane.

Da completare prima/dopo il go-live:

- [ ] indicare in `progetto-editoriale.html` il responsabile editoriale (TODO ancora aperto, da non inventare);
- [ ] confermare le date evento JSON-LD (`cronoscalata`, `eventi-tradizioni`) con i canali ufficiali e aggiornarle dopo lo svolgimento;
- [ ] in `Settings > Pages` impostare la source su **GitHub Actions** (non "Deploy from a branch"): solo `dist-it/` deve andare online;
- [ ] rigenerare `dist-it/` a ogni release ed evitare la pubblicazione di `en/` e `de/`;
- [ ] configurare la pagina 404 lato hosting (su GitHub Pages la `404.html` in root è automatica);
- [ ] valutare il self-hosting dei font per eliminare il trasferimento IP verso Google Fonts.

## Stato multilingua

Le versioni `en/` e `de/` sono presenti nel repository come working draft.

Stato attuale:

- `it`: pubblicabile con pacchetto dedicato;
- `en`: non pubblicabile;
- `de`: non pubblicabile.

## Limiti noti

- GitHub CLI (`gh`) non è disponibile in questo ambiente;
- il remote GitHub va configurato dopo la creazione del repository;
- la licenza del progetto non è ancora definita e deve essere scelta dal proprietario del sito.
