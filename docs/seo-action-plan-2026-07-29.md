# SEO action plan — 2026-07-29

## Critical

Nessun blocco critico rilevato nel build o nel campione GSC URL Inspection.

## High

1. Migliorare CTR delle pagine già ben posizionate
   - Target: `/cosa-vedere`, `/basilica-san-flaviano-montefiascone`, `/cattedrale-santa-margherita-montefiascone`.
   - Motivo: posizioni 2-5 ma CTR basso su query ad alta intenzione.
   - Azione: testare title/meta più orientati al beneficio, aggiungere risposta breve above-the-fold e link rapidi.

2. Consolidare pagine eventi/feste
   - Target: `/eventi`, `/atb-festival-montefiascone`, pagine Fiera/Festa birra/vino.
   - Motivo: molte impression in posizione 6-10 con CTR basso.
   - Azione: evidenziare date, programma, stato conferma, luogo e fonte; mantenere aggiornamento stagionale.

3. Verificare CWV con uno strumento alternativo a PageSpeed
   - Motivo: PageSpeed API ha restituito 429.
   - Azione: riprovare più tardi o usare Lighthouse locale/CrUX quando disponibile.

## Medium

1. Ridurre redirect naked-domain
   - `http://ilovemontefiascone.com/` fa 2 redirect prima del canonical.
   - Non è bloccante, ma si può rendere più pulito con regola edge diretta.

2. Rafforzare answer-ready blocks per AI search
   - Target: travel guide, lago, vino, eventi, dove mangiare/dormire, come arrivare.
   - Azione: blocchi da 100-160 parole con risposta diretta e link interni.

3. Estendere monitoring GSC
   - Creare elenco ricorrente di query con impression >= 20, posizione <= 12, CTR < 4%.
   - Trasformare le query in backlog copy/snippet.

## Low

1. PDF report
   - Generare quando PageSpeed/CWV è disponibile, così il PDF non contiene una sezione performance incompleta.

2. Backlink/brand mention audit
   - Utile ma non urgente rispetto al CTR delle pagine già posizionate.
