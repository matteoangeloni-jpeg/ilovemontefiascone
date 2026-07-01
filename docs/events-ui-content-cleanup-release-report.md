# Events UI & Content Cleanup — Release Report

## Esito

**READY a livello repository** (merge, push, QA pre/post-merge tutte verdi).
**Task 6 (QA live) non eseguibile da questa sessione** — vedi "Limite d'ambiente" sotto. Nessuna evidenza di deploy fallito: semplicemente non verificabile da qui.

## Merge

- Branch mergiata: `codex/events-ui-content-cleanup`
- Commit sorgente: `a0b9084`
- Merge commit su `main`: `49456a6` (merge `--no-ff`, nessun conflitto)
- `main` pre-merge: `459b24f` (sincronizzato con `origin/main`, working tree pulito, verificato prima del merge)
- Push: eseguito con successo — `459b24f..49456a6 main -> main`
- Branch Giglio Vecchio (`codex/giglio-vecchio-it-page`): confermata assente dal diff (`git diff main..codex/events-ui-content-cleanup` non contiene il file `giglio-vecchio-montefiascone.html` né modifiche al denylist che lo riguardano; unico riferimento è una riga di testo nel report che lo cita come "non toccato in questo giro")
- Progetto Next.js: nessun riferimento nel diff (il repo non contiene codice Next.js)

## QA pre-merge (su `codex/events-ui-content-cleanup`)

`npm run build:cloudflare` eseguito con successo:

| Check | Risultato |
|---|---|
| Perimetro build | IT 97 / EN 97 / DE 97 |
| Sitemap (`sitemap-it/en/de.xml`) | 97 / 97 / 97 |
| `llms.txt` | 97 / 97 / 97 |
| Link rotti | 0 |
| Link interni `.html` | 0 |
| Asset mancanti | 0 |
| JSON-LD invalidi | 0 (302 file scansionati) |
| Event senza `startDate`/`location` | 0 |
| Canonical ≠ `og:url` | 0 mismatch |
| Social metadata incompleti | 1 file (`privacy.html`) — **pre-esistente su `main`, non regressione** (verificato via `git show main:privacy.html` vs branch: identico) |
| hreflang non reciproco IT/EN/DE/x-default | 0 |
| hreflang `fr` | 0 occorrenze |
| `/fr/` | assente |
| `sitemap-fr.xml` | assente |
| Mojibake | 0 |
| Placeholder (`TODO`, `Lorem ipsum`, ecc.) | 0 |
| Mobile overflow (Playwright, 14 pagine × 2 viewport) | 0 (28/28 check puliti) |

## QA post-merge (su `main` dopo il merge)

`npm run build:cloudflare` rieseguito su `main` dopo il merge, stessa batteria di controlli:

| Check | Risultato |
|---|---|
| Perimetro build | IT 97 / EN 97 / DE 97 |
| Sitemap | 97 / 97 / 97 |
| `llms.txt` | 97 / 97 / 97 |
| Link rotti | 0 |
| Link interni `.html` | 0 |
| Asset mancanti | 0 |
| JSON-LD invalidi | 0 (295 file HTML nel build scansionati) |
| Event senza `startDate`/`location` | 0 |
| Canonical ≠ `og:url` | 0 mismatch |
| hreflang non reciproco | 0 |
| hreflang `fr` | 0 |
| `/fr/` / `sitemap-fr.xml` | assenti |
| Mojibake | 0 |
| Placeholder | 0 |
| Mobile overflow (28 check) | 0 |

Risultato: **QA post-merge PASS**, nessuna regressione introdotta dal merge.

## Push

`git push -u origin main` eseguito con successo: `459b24f..49456a6 main -> main`, `origin/main` ora coincide con `main` locale.

## Deploy Cloudflare Pages — limite d'ambiente

Non è stato possibile verificare l'esito del deploy Cloudflare Pages da questa sessione, per due motivi tecnici indipendenti dal contenuto del merge:

1. **Nessun workflow GitHub Actions in questo repository** (`list_workflows` → `total_count: 0`). Se Cloudflare Pages è collegato via la sua integrazione GitHub nativa, lo stato del deploy non viene esposto tramite le API GitHub Actions a cui ho accesso.
2. **Policy di rete della sandbox**: i tentativi di raggiungere `https://www.ilovemontefiascone.com/` (sia via `curl` diretto sia via `WebFetch`) sono stati respinti dal proxy dell'ambiente con `403 policy denial` (confermato interrogando `$HTTPS_PROXY/__agentproxy/status`, che riporta esplicitamente `"kind": "connect_rejected", "detail": "gateway answered 403 to CONNECT (policy denial or upstream failure)"` per quell'host). Questa sandbox remota non ha accesso di rete generico al dominio di produzione.

Questo **non è un'evidenza di deploy fallito** — è semplicemente un limite di visibilità di questa sessione. Il push su `main` è avvenuto correttamente e Cloudflare Pages, se collegato al repo, dovrebbe aver ricevuto l'evento push in modo indipendente da questa sessione.

## Pagine live controllate

**Nessuna** — Task 6 (QA live) non eseguito per il motivo sopra. Nessuna pagina, sitemap, `robots.txt` o `llms.txt` live è stata controllata in questa sessione.

## Evento featured live

Non verificato live. A livello di build (locale, pre e post merge) l'evento in evidenza calcolato per oggi (2026-07-01) è **Festival dell'Ecologia Integrale 2026** (2026-07-02 → 2026-07-05), al posto del vecchio concerto Banda R&B Revue (passato, 2026-06-19).

## Problemi residui

- Nessun blocker a livello di codice/repo.
- Blocker di processo: impossibilità di confermare il deploy live e l'esito Cloudflare Pages da questa sessione (vedi sopra).
- P2 (non bloccante, ereditato dal report del branch): alcuni eventi condividono la stessa hero image generica; 3 file EN/DE hanno attributi `width`/`height` inline leggermente disallineati dal CSS reale (nessun bug visivo).

## Nota P2 — logica featured event build-time

La selezione dell'evento in evidenza è calcolata **al momento della build** (`scripts/select-featured-event.mjs`, incatenato in `npm run build:cloudflare`), leggendo `startDate`/`endDate` dal JSON-LD di ogni pagina evento. Questo significa che l'evento in evidenza **avanza solo quando il sito viene ribuildato e ridistribuito**: se oggi termina un evento e ne inizia un altro, la card "in evidenza" non si aggiornerà automaticamente finché non viene eseguito un nuovo `npm run build:cloudflare` seguito da un nuovo deploy. Per restare accurato nel tempo, questo richiede **rebuild/deploy periodici** (es. schedulati o manuali a cadenza regolare), non solo al momento di un cambiamento di contenuto.

## Prossimo passo consigliato

1. L'utente verifica manualmente lo stato del deploy sulla dashboard Cloudflare Pages per il progetto collegato a questo repo.
2. Una volta confermato il deploy, verificare a mano (o fornire un metodo di accesso di rete/API per questa sessione) i punti del Task 6: `/eventi`, `/calendario-eventi-montefiascone`, `/eventi-estate-montefiascone-2026`, `/en/montefiascone-summer-events-2026`, `/de/sommerveranstaltungen-montefiascone-2026`, sitemap, `robots.txt`, `llms.txt`, `/fr/` e `sitemap-fr.xml` (devono restare 404).
3. Pianificare la cadenza di rebuild/deploy per mantenere la logica dell'evento in evidenza aggiornata nel tempo (vedi nota P2 sopra).
