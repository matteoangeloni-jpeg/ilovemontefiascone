# FR Publication Gate Roadmap

Questa nota definisce il vincolo strategico per l'eventuale apertura della versione francese di `ilovemontefiascone.com`.

La versione FR non deve essere avviata come produzione finche IT, EN e DE non hanno lo stesso numero di pagine pubblicate, validate e coerenti tra loro.

## Condizioni Minime Prima Dello Sprint FR

- IT, EN e DE devono essere pubblicate con pari numero di pagine.
- Le sitemap IT, EN e DE devono essere coerenti e validate.
- Gli hreflang reciproci devono essere corretti tra IT, EN e DE.
- UI e UX devono essere coerenti tra le tre lingue.
- Title, meta description, Open Graph e Twitter Card devono essere completi.
- Il JSON-LD deve essere coerente tra le versioni linguistiche equivalenti.
- I link legacy con `.html` devono essere rimossi o normalizzati secondo la strategia URL definitiva.
- I problemi di mojibake devono essere risolti su tutte le lingue pubblicate.
- Search Console deve essere aggiornata solo dopo stabilizzazione tecnica e contenutistica.

## Sprint FR Futuro

Quando le condizioni minime saranno soddisfatte, lo sprint FR dovra essere aperto separatamente con:

- branch dedicata;
- audit di fattibilita;
- glossario FR;
- linee editoriali FR;
- priorita sulle pagine core;
- produzione progressiva;
- `/fr/` esclusa dal build pubblico fino a completamento;
- nessun merge su `main` finche FR non supera QA tecnico, SEO, UI/UX e contenutistico.

## Regola Di Pubblicazione

La versione FR resta una fase successiva alla stabilizzazione completa di IT, EN e DE. Non deve essere inclusa in sitemap pubbliche, hreflang, `llms.txt`, navigazione visibile o build production prima del superamento del gate.
