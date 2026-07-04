# UI Menu SEO Refresh Preflight

## Stato iniziale

- Branch: `feat/ui-menu-seo-refresh`
- Worktree sporco con 14 file tracciati modificati e una cartella non tracciata:
  - `media/gallery/nuove_foto/`
- Nessun file `fr/` modificato.
- La cartella immagini non tracciata contiene solo file `.webp` e non e' stata usata ne' inventariata in questa fase.

## Classificazione modifiche

### D. Redirect tecnico valido

- `_redirects`
  - Aggiunti redirect generici `.html -> clean URL` per IT/EN/DE.
  - Decisione: mantenere.

### B. Modifica featured events/script valida

- `scripts/featured-events-data.mjs`
  - Migliora i teaser di `Panorami` e `Festa Santa Margherita`.
  - Allinea facts, date e immagine del featured event.
  - Decisione: mantenere.

- `scripts/select-featured-event.mjs`
  - Corregge l'esecuzione diretta dello script in ambiente Windows.
  - Mantiene coerente il rendering del blocco featured event su `eventi.html`.
  - Decisione: mantenere.

- `eventi.html`
  - Aggiorna il manifest inline e gli alternates del blocco featured event.
  - Decisione: mantenere.

### C. Test coerente con modifica script

- `scripts/select-featured-event.test.mjs`
  - Aggiorna la finestra di `Festa Santa Margherita`.
  - Aggiunge scenario di test per il 20 luglio 2026.
  - Decisione: mantenere.

### A. Fix SEO/editoriale evento valido

- `atb-festival-montefiascone.html`
- `en/atb-festival-montefiascone.html`
- `de/atb-festival-montefiascone.html`
  - Allineano `endDate` JSON-LD al cartellone ufficiale (`2026-07-12`).
  - Decisione: mantenere.

- `concerto-banda-rb-revue-montefiascone.html`
  - Rafforzamento del corpo pagina con sezioni utili e FAQ.
  - Decisione: mantenere.

- `panorami-festival-montefiascone.html`
- `en/panorami-festival-montefiascone.html`
  - Title, meta, hero e corpo pagina resi piu' chiari e piu' utili per l'intento utente.
  - Decisione: mantenere.

- `giglio-vecchio-montefiascone.html`
- `en/giglio-vecchio-montefiascone.html`
- `de/giglio-vecchio-montefiascone.html`
  - Riposizionano la pagina su chiesa, comunita' e ASD, evitando di farla sembrare solo una pagina sul festival.
  - Decisione: mantenere.

## Modifiche non incluse in questa fase

- `media/gallery/nuove_foto/`
  - Stato: asset visuali non tracciati.
  - Decisione: non usare, non committare, non pubblicare in questa fase.
  - Motivo: richiedono inventario e mappatura nel successivo sprint visual/UI.

## Commit creati

1. `122124b` - `Update event redirects`
2. `e86200d` - `Update featured event selection logic`
3. `8837391` - `Refine featured event pages and internal links`

## Verifiche eseguite

- Test featured events:
  - `node scripts/select-featured-event.test.mjs`
  - Esito: OK

- Build:
  - `npm run build:cloudflare`
  - Esito: OK
  - Output: `98 IT / 98 EN / 98 DE`

- Check pubblico post-build:
  - `sitemap.xml` con solo IT/EN/DE
  - `llms.txt` senza FR
  - `llms.txt` senza `.html`
  - `llms.txt` senza `pages.dev`
  - `llms.txt` senza `github.io`

## Note su FR

- Le pagine sorgente toccate possono ancora contenere riferimenti `fr` storici.
- Il build pubblico continua a escludere FR correttamente.
- Nessun file `fr/` e' stato modificato in questa fase.

## Stato finale desiderato

- Modifiche tracciate committate e validate.
- Asset visuali non tracciati lasciati fuori dal recovery.
- Branch pronto per avviare il visual refresh in uno sprint separato.

## Prossimo step

- Inventariare `media/gallery/nuove_foto/`
- Analizzare la cartella Google Stitch solo come riferimento UI
- Avviare lo sprint visual/UI da worktree controllato
