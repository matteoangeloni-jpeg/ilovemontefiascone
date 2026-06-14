# Soft Launch IT - Release Checklist

## Perimetro di pubblicazione
- Pubblicare solo i file e le directory elencati in `deploy-soft-launch-it.txt`.
- In alternativa eseguire `powershell -ExecutionPolicy Bypass -File .\build-soft-launch-it.ps1` e caricare il contenuto di `dist-it/`.
- Non pubblicare `en/` e `de/` nel soft launch italiano.
- Non pubblicare file di audit, bozze Markdown, preview PNG, script Python di sviluppo o database locali.

## Cache e PWA
- Versione cache attuale: `mf-pwa-v8-2026-06-13`.
- `offline.html` deve restare nel pacchetto pubblico: viene usata dal service worker come fallback.
- Dopo il deploy verificare che il nuovo `sw.js` sia servito correttamente.
- Controllare una pagina con query `?no-sw-cache=1` per escludere stale cache durante il QA.
- Se l'hosting permette purge o CDN flush, eseguirlo dopo il caricamento dei file aggiornati.

## Verifiche minime prima del go-live
- Aprire `/`, `/cosa-vedere.html`, `/guide.html`, `/eventi.html`, `/vino.html`, `/mappa.html`, `/associazioni-volontariato-montefiascone.html`.
- Controllare che i link lingua non portino piu a EN/DE nel soft launch.
- Verificare che `robots.txt` e `sitemap.xml` pubblici corrispondano alle versioni del repository.
- Verificare che l'hosting utilizzi `404.html` come pagina personalizzata.
- Verificare che `privacy.html`, `cookie.html` e `progetto-editoriale.html` siano raggiungibili.

## Note operative
- `server.py` e il database SQLite locale non sono inclusi nel deploy.
- L'endpoint quiz non va esposto in produzione senza hardening su CORS, rate limit e persistenza.
- Le versioni EN/DE restano in repository ma fuori dal perimetro pubblico fino a revisione completa.
