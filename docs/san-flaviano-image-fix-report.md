# Report: San Flaviano Image Fix

## 1. Problema rilevato

La pagina dedicata alla Basilica di San Flaviano in versione **DE** (`de/basilika-san-flaviano-montefiascone.html`) mostrava l'immagine della **Rocca dei Papi** (`/media/hero-rocca-dei-papi-1600.jpg`) sia come hero visibile nella pagina che come anteprima social OG/Twitter — con un alt text già corretto ("Fassade der Basilika San Flaviano") ma un'immagine completamente errata.

La pagina **IT** (`basilica-san-flaviano-montefiascone.html`) utilizzava `tufo-detail.jpg`, un'immagine generica di pietra lavica non pertinente alla basilica né alla sua facciata.

La pagina **EN** (`en/basilica-san-flaviano-montefiascone.html`) aveva già l'immagine corretta (`basilica-san-flaviano-facciata.jpg`) ma mancava degli attributi LCP (`loading="eager"` e `fetchpriority="high"`).

---

## 2. Pagine e file coinvolti

| File | Lingua | Problema |
|------|--------|---------|
| `de/basilika-san-flaviano-montefiascone.html` | DE | Hero e OG/Twitter con immagine della Rocca dei Papi |
| `basilica-san-flaviano-montefiascone.html` | IT | Hero e OG/Twitter con immagine generica `tufo-detail` |
| `en/basilica-san-flaviano-montefiascone.html` | EN | Immagine corretta ma mancavano attributi LCP |

---

## 3. Immagini errate precedenti

| Pagina | Immagine precedente |
|--------|---------------------|
| DE hero | `/media/hero-rocca-dei-papi-1600.jpg` + `.webp` |
| DE OG/Twitter | `media/hero-rocca-dei-papi-1600.jpg` |
| IT hero | `/media/gallery/tufo-detail.jpg` + `.webp` |
| IT OG/Twitter | `media/gallery/tufo-detail.jpg` |

---

## 4. Immagine corretta applicata

`/media/gallery/basilica-san-flaviano-facciata.jpg` (fallback JPEG)  
`/media/gallery/basilica-san-flaviano-facciata.webp` (formato principale in `<picture>`)

Entrambi i file erano già presenti nel repository.

---

## 5. Alt text applicati per lingua

| Lingua | Alt text |
|--------|----------|
| IT | `Basilica di San Flaviano a Montefiascone` |
| EN | `Facade of the Basilica of San Flaviano in Montefiascone` (invariato, già corretto) |
| DE | `Fassade der Basilika San Flaviano in Montefiascone` (invariato, già corretto) |

---

## 6. Attributi LCP aggiunti

- `loading="eager"` applicato a tutti e tre gli hero (IT, EN, DE).
- `fetchpriority="high"` applicato a tutti e tre gli hero (IT, EN, DE).
- Le dimensioni (width/height) aggiornate alla dimensione reale dell'asset: `1600 × 1026` (la facciata è più alta della panoramica della Rocca che era 1600 × 900).

---

## 7. Conferma Rocca dei Papi non regressa

La pagina `rocca-dei-papi-montefiascone.html` e le pagine ad essa collegate non sono state toccate e continuano a utilizzare correttamente `hero-rocca-dei-papi-1600.jpg`.

Sono state verificate anche le pagine di contesto dove la Rocca compare come link testuale (es. `cosa-vedere.html`, `cattedrale-santa-margherita-montefiascone.html`) — nessuna modifica apportata.

---

## 8. Build e output

- `npm run build:cloudflare` completato senza errori.
- Output: **98 IT / 98 EN / 98 DE**.
- Nessun `/fr/` generato.
- Nessun `sitemap-fr.xml`.
- Nessun link `.html` pubblico.
- Nessun `googleusercontent` o asset Stitch.

---

## 9. Guardrail FR

- Nessun file `fr/*` modificato.
- Nessun `hreflang="fr"` aggiunto.
- Nessun `/fr/` introdotto.
- FR rimane non pubblicata.

---

## 10. Problemi residui

Nessuno. Le tre pagine IT/EN/DE della Basilica di San Flaviano mostrano ora l'immagine corretta della facciata con WebP come formato principale e JPEG come fallback.
