# Visual Image Placement Map

## Immagini effettivamente usate nel refresh

| File | Pagina / template | Posizione | Alt text | Loading | Motivazione | Rischio |
| --- | --- | --- | --- | --- | --- | --- |
| `media/gallery/montefiascone-centro-drone.webp` | `index.html`, `en/index.html`, `de/index.html` | hero | Vista aerea del centro storico di Montefiascone con cattedrale e Rocca dei Papi / localized variants | `eager` + preload su IT/EN | Hero più credibile e territoriale della home, con lettura chiara del borgo | Basso |
| `media/gallery/montefiascone-eventi-bandiere-notte.webp` | `eventi.html`, `en/events-montefiascone.html`, `de/veranstaltungen-montefiascone.html` | hero | Sbandieratori in piazza durante una serata di eventi / localized variants | `lazy` standard hero load | Rende l’hub eventi meno generico e più legato alla comunità locale | Medio: foto molto specifica, da non riusare fuori cluster eventi |
| `media/gallery/lago-bolsena-tramonto-riva.webp` | `lago-di-bolsena.html`, `en/lake-bolsena.html`, `de/bolsenasee.html` | hero | Tramonto sulla riva del Lago di Bolsena / localized variants | `lazy` | Migliora il cluster lago con un’immagine atmosferica ma reale, coerente con slow travel e sunset intent | Basso |
| `media/gallery/montefiascone-centro-drone-estate.webp` | `mappa.html`, `en/map-montefiascone.html`, `de/karte-montefiascone.html` | hero | Vista aerea estiva di Montefiascone utile per orientarsi / localized variants | `lazy` | Più adatta della foto generica precedente per far leggere centro storico e alture | Basso |
| `media/gallery/via-francigena-scalinata.webp` | `via-francigena-bolsena-montefiascone.html`, `en/via-francigena-bolsena-montefiascone.html`, `de/via-francigena-bolsena-montefiascone.html` | hero | Scalinata in pietra del centro storico nel contesto della Via Francigena / localized variants | `lazy` o `eager` dove già previsto | Rafforza il cluster cammini con un’immagine leggibile e non stock | Basso |

## Immagini volutamente non sostituite

- Hub vino: mantenuta la foto di degustazione esistente, più coerente del nuovo stash con il tema enoturistico.
- Giglio Vecchio: mantenuto il logo ASD come riferimento identitario, evitando foto evento con watermark non coerenti con il focus pagina.

## Regole applicate

- Solo immagini `.webp` reali provenienti da `media/gallery/nuove_foto/`.
- Nessun asset Stitch, remoto o base64.
- Hero above-the-fold con `eager` solo dove strategico; resto `lazy` o comportamento esistente del template.
