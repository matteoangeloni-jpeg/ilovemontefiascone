# Final Live Events Deploy Verification Report

## Verdetto

**READY repo/build, LIVE non verificabile.**

Source e build locali sono confermati puliti su tutti i gate richiesti (vedi sotto). Non è stata applicata alcuna modifica di codice o contenuto in questo giro, come richiesto dal task quando source/build risultano già corretti. L'unica azione eseguita è un commit vuoto per forzare un tentativo di redeploy, dato che questa sandbox non ha alcun accesso alla dashboard o alle API di Cloudflare né al dominio live per verificare lo stato effettivo del deploy.

## 1. Commit `origin/main`

`d9380a2` prima di questo giro, poi `73c1bf5` (commit vuoto di trigger redeploy) dopo l'azione descritta al punto 8. Entrambi ≥ `d9380a2` come richiesto.

## 2. Commit deployato da Cloudflare

**Non rilevabile da questa sessione.** Nessun accesso alla dashboard Cloudflare Pages, nessun accesso alle API Cloudflare (`api.cloudflare.com` risulta bloccato dalla stessa policy di rete della sandbox, `403` sul CONNECT tunnel, identico al blocco già documentato per il dominio live), nessun workflow GitHub Actions nel repo che esponga questa informazione.

## 3. Branch deployato

Non rilevabile da questa sessione (stesso motivo del punto 2).

## 4. Build command

Non rilevabile da questa sessione. Quello effettivamente usato in locale e verificato corretto è `npm run build:cloudflare` (definito in `package.json`), ma non posso confermare che il progetto Cloudflare Pages usi lo stesso comando.

## 5. Output directory

Non rilevabile da questa sessione. La directory generata localmente e verificata corretta è `dist-it`.

## 6. Root directory

Non rilevabile da questa sessione.

## 7. Stato ultimo deploy

Non rilevabile da questa sessione.

## 8. Cache/purge/redeploy eseguiti

- **Retry deployment via dashboard**: non eseguibile (nessun accesso alla dashboard).
- **Purge cache mirato**: non eseguibile (nessun accesso alla dashboard/API Cloudflare).
- **Commit vuoto di trigger redeploy**: eseguito, come da fallback esplicitamente autorizzato dal task per il caso in cui il retry da dashboard non sia disponibile. Comando: `git commit --allow-empty -m "Trigger Cloudflare Pages redeploy"`, pushato come `73c1bf5` (`d9380a2..73c1bf5 main -> main`). Nessuna modifica di codice o contenuto: il commit non tocca alcun file.
- **Nessuna modifica alle impostazioni Cloudflare** (branch, build command, output/root directory): non eseguibile senza accesso, e comunque non eseguita alla cieca come da vincoli del task.

## 9. Source QA

Verificato sui file: `eventi.html`, `eventi-estate-montefiascone-2026.html`, `en/montefiascone-summer-events-2026.html`, `de/sommerveranstaltungen-montefiascone-2026.html`, `scripts/select-featured-event.mjs`, `scripts/check-semantic-text.mjs`.

- Tutti i pattern vietati elencati nel task (IT/EN/DE, incluso `Official source and method`) verificati **assenti** sia nell'HTML grezzo sia nel testo tag-stripped (script/style esclusi), su tutti i 4 file target.
- Card tematiche IT/EN/DE: struttura autonoma confermata — ogni card produce testo del tipo `Tema: Enogastronomia. Fiera del Vino. ... Apri la guida alla Fiera del Vino.` (IT), `Theme: Wine. Montefiascone Wine Fair. ... Open the Wine Fair guide.` (EN), `Thema: Wein. Weinfest von Montefiascone. ... Zum Weinfest.` (DE).
- `eventi.html`: 0 tag `<template>` nel sorgente; gli alternativi di rotazione sono in un payload `<script type="application/json" id="featured-event-alternates">`, non markup HTML reale.
- `scripts/select-featured-event.mjs`: confermata la logica `pickFeaturedEvent` basata su `startDate`/`endDate` reali, nessun evento passato selezionabile.

**Risultato: source pulito. Nessun hotfix applicato (non necessario).**

## 10. Build QA

`npm run build:cloudflare` eseguito su `main` (`d9380a2`):

| Check | Risultato |
|---|---|
| Scenari rotazione data simulata | 5/5 verdi |
| Source/build IT/EN/DE | 97/97/97 |
| Sitemap IT/EN/DE | 97/97/97 |
| `llms.txt` IT/EN/DE | 97/97/97 |
| `/fr/` | assente |
| `sitemap-fr.xml` | assente |
| Link rotti | 0 |
| Link interni `.html` | 0 |
| Asset mancanti | 0 |
| JSON-LD invalidi | 0 (295 file) |
| Canonical ≠ `og:url` | 0 |
| hreflang reciproci IT/EN/DE/x-default | 0 problemi su 291 pagine con hreflang |
| hreflang `fr` | 0 |
| Mojibake | 0 |
| Placeholder reali | 0 (3 falsi positivi grezzi da un pattern-matcher generico: sottostringhe "todo"/"xi" dentro parole italiane come "metodo"/"XI secolo", verificati manualmente, nessun placeholder reale) |
| Mobile overflow | 0 |

**Risultato: build pulito. Nessun hotfix applicato (non necessario).**

## 11. Semantic textContent QA

`node scripts/check-semantic-text.mjs` (controllo strutturale sul source + `document.body.textContent` renderizzato via Playwright, grezzo e whitespace-collapsed, non solo `innerText`): **pulito su tutte le 5 pagine primarie**.

Verifica aggiuntiva ad-hoc con i pattern esatti del task (incluse le varianti "— Categoria" e "Official source and method"): **0 riscontri**, né grezzi né whitespace-collapsed, su IT/EN/DE.

`/eventi`: 1 solo `<h2>` nella sezione featured, 1 sola occorrenza di "In evidenza" con un estrattore naive realistico (tag-stripping con esclusione `<script>`/`<style>`), featured event (`festival-ecologia-integrale`, endDate `2026-07-05`) non passato rispetto a "oggi" (`2026-07-01`).

## 12. Visual QA

Smoke test desktop/mobile (16 combinazioni: `/eventi`, `/eventi-estate-montefiascone-2026` IT/EN/DE, Festival Ecologia Integrale IT/EN/DE, × 2 viewport): **0 problemi**. 0 overflow orizzontale su tutte le pagine e viewport richiesti.

## 13. Live QA

**Non eseguibile.** Tutte le 7 URL richieste (incluse le varianti con cache-busting `?v=73c1bf5`) restituiscono `CONNECT tunnel failed, response 403` dal proxy di rete della sandbox — stesso blocco di policy documentato e riconfermato in ogni round precedente di questo task. Nessuna verifica live è stata effettuata; nessuna è stata inventata.

## 14. Pattern vietati assenti

**Sì** — confermato nel source e nel build locale (punti 9-11). Non verificabile sul live (punto 13).

## 15. `/eventi` un solo featured semantico

**Sì** — confermato nel build locale (punto 11). Non verificabile sul live.

## 16. Perimetro 97/97/97 invariato

**Sì** — confermato nel build locale (punto 10).

## 17. `/fr/` 404

Non verificabile sul live da questa sandbox. Nel build locale, la directory `/fr/` è assente (coerente con un 404 in produzione, ma non verificato direttamente sul dominio pubblico).

## 18. `sitemap-fr.xml` 404

Stessa nota del punto 17: assente nel build locale, non verificato direttamente sul live.

## 19. Problemi residui

- **Nessuno lato codice/repo.** Source e build sono entrambi confermati puliti su tutti i gate richiesti.
- **Impossibilità strutturale di questa sandbox di accedere a**: dashboard Cloudflare Pages, API Cloudflare, dominio live `www.ilovemontefiascone.com`. Questo impedisce qualunque diagnosi diretta delle FASI 5-6 (commit deployato, branch, build command, output/root directory, stato/timestamp deploy, QA live).
- Se il live continua a mostrare contenuto vecchio anche dopo il commit di trigger (`73c1bf5`), la causa è quasi certamente in una delle configurazioni Cloudflare elencate nella FASE 5 del task (branch/commit non aggiornato, build command o output directory errati, cache CDN sul dominio custom) — nessuna di queste è verificabile o correggibile da questa sessione.

## 20. Prossimo step

Verifica manuale da parte di chi ha accesso alla dashboard Cloudflare Pages (Matteo o altro amministratore), controllando nell'ordine:

1. **Progetto Cloudflare Pages**: confermare che il progetto collegato a `www.ilovemontefiascone.com` sia quello giusto (statico, non il progetto Next.js se ne esiste uno separato nello stesso account).
2. **Ultimo deployment**: verificare che il commit deployato sia `73c1bf5` (o successivo) e non un commit precedente più vecchio di `d9380a2`.
3. **Branch collegato**: deve essere `main`.
4. **Build command**: deve essere `npm run build:cloudflare`.
5. **Output directory**: deve essere `dist-it`.
6. **Root directory**: deve essere la root del repo (non una sottocartella di un progetto Next.js, se coesiste).
7. **Stato dell'ultimo deploy**: success / failed / skipped / queued, con timestamp successivo al push di `73c1bf5`.
8. Se il deploy risulta fermo su un commit vecchio nonostante il trigger: usare "Retry deployment" dalla dashboard sull'ultimo commit, oppure controllare che il webhook GitHub→Cloudflare sia ancora attivo (potrebbe essersi disconnesso).
9. Se il deploy risulta aggiornato ma il dominio custom mostra ancora contenuto vecchio mentre l'URL `*.pages.dev` è aggiornato: è cache CDN sul dominio custom — purge mirato delle URL elencate nella FASE 6 del task, non purge totale.
10. Solo dopo conferma che il deploy è aggiornato: ripetere la QA live con testo estratto (non solo visuale) sulle URL elencate, per chiudere definitivamente con READY LIVE.

## Conferme

- Cloudflare config: **non modificata** (nessun accesso, nessuna modifica alla cieca).
- Search Console: **non toccata**.
- Next.js: **non toccato**.
- `/fr/`: **non creata**.
- Perimetro 97/97/97: **invariato**.
