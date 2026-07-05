# Visual Parity Reference Alignment — Sprint Report
**Branch**: `feat/visual-parity-reference-alignment`  
**PR**: #9 — https://github.com/matteoangeloni-jpeg/ilovemontefiascone/pull/9  
**Commit Phase 1**: `c037c55` — Visual parity: cinematic hero, editorial cards, refined spacing and footer  
**Commit Phase 2**: `652e973` — Visual parity Phase 2: fix DE hero layout, add missing classes, deep refinement  

---

## 1. Obiettivo sprint

Avvicinare il sistema visivo di `ilovemontefiascone.com` ai design reference grafici forniti, intervenendo esclusivamente su `css/style.css` e `css/style.min.css`, senza modificare copy SEO, routing, canonical URL, immagini, sitemap, file FR.

---

## 2. Reference analizzati (12 screenshot)

| File | Contenuto chiave |
|------|-----------------|
| `media__1783175146983.png` | Homepage IT — hero card bianca galleggiante su immagine drone, nav con dropdown |
| `media__1783175165706.png` | Dropdown "VISITA" — pannello bianco multi-colonna con link e descrizioni |
| `media__1783175207708.png` | Pagina eventi IT — full-page con hero, card overlay, footer scuro |
| `media__1783177962195.png` | Pagina vino/cantine — split layout, aside Fast Facts bordeux, card cantine |
| `media__1783177975624.png` | Homepage alternativa — hero full-bleed al tramonto, testo overlay left-aligned |
| `media__1783177984932.png` | Galleria — masonry grid, footer dark minimalista |
| `media__1783178010080.png` | Mobile hero — immagine full-bleed con overlay text e CTA bordeaux |
| `media__1783178020649.png` | Homepage con meteo widget e dati essenziali, card 3-tile |
| `media__1783178168454.png` | Pagina eventi — card grandi overlay, footer brand |
| `media__1783178184851.png` | Evento dettaglio — editorial layout, aside location+info |
| `media__1783178193046.png` | Associazioni — split hero + card eventi featured |
| `media__1783178201033.png` | Articolo vino — editorial body, pullquote, footer |

---

## 3. Gap matrix visivi trovati

| Area | Reference desiderato | Stato precedente | Gravità | Intervento |
|------|---------------------|-----------------|---------|------------|
| Hero homepage | Full-bleed cinematografico `72vh+`, testo su immagine | `min-height: 520px` fisso, no overlay | P0 | ✅ Risolto |
| Card overlay grid | Aspect ratio `3:4` con hover lift | `1:1` quadrate, no hover | P0 | ✅ Risolto |
| Hero DE (hero--subpage) | Immagine full-bleed, testo bianco overlay | Pannello bianco (Lake&Stone override), picture non copriva | P0 | ✅ Risolto Phase 2 |
| Classi orfane | Stili per hub-sidebar, spoke-main/sidebar, photo-card | Nessuna definizione CSS | P1 | ✅ Risolto Phase 2 |
| Section spacing | `5rem+` di respiro editoriale | `3.5rem` troppo compatto | P1 | ✅ Risolto |
| Est! pillar hero | Deep burgundy gradient, tufo gold h1 | White panel con !important Lake&Stone | P1 | ✅ Risolto Phase 2 |
| Footer | Dark `#1e1e1e`, 3-col grid, font display brand | `#2d2d2d`, auto-fit generico | P1 | ✅ Risolto |
| Header altezza | `5rem`, blur `20px`, brand `1.75rem` | `4.5rem`, blur `16px`, brand `1.6rem` | P2 | ✅ Risolto |
| Button hero | Sharp, uppercase, lift hover | `border-radius: 30px`, generico | P2 | ✅ Risolto |
| Card transition | Hover lift con box-shadow | Nessuna transizione | P2 | ✅ Risolto Phase 2 |
| Nav card 3-tile | Styled con border, radius, hover | Nessun stile definito | P2 | ✅ Risolto Phase 2 |
| Weather widget | Glass panel su blu-lago | Border-left generico | P2 | ✅ Risolto Phase 2 |
| Bug --sky-100 | Variabile CSS non definita | `var(--sky-100)` nell'hover del button overlay | P0 bug | ✅ Risolto Phase 1 |
| Media card gradient | Gradient progressivo 0→90% | Taglio brusco | P2 | ✅ Risolto |
| Section alt | Warm rgba tufo | `rgba(255,255,255,0.38)` freddo | P2 | ✅ Risolto |

---

## 4. Interventi applicati

### Phase 1 (commit `c037c55`)

**Design tokens aggiunti**:
- `--rosso-hover: #7a1e2c`
- `--shadow-card: 0 4px 20px rgba(45,45,45,0.08)`
- `--shadow-lift: 0 16px 48px rgba(45,45,45,0.14)`
- `--transition-base: 0.22s cubic-bezier(0.25,0.46,0.45,0.94)`

**Homepage hero**:
- `min-height: min(72vh, 680px)` — cinematografico
- Overlay gradient dark-bottom per leggibilità
- Floating card: backdrop-filter blur, shadow profonda
- Overlay text: left-aligned, pill eyebrow, h1 fino a `4.2rem`

**Button hero**:
- `border-radius: 0` (sharp), hover lift `translateY(-2px)`
- Fix bug `--sky-100` → `rgba(255,255,255,0.92)`

**Media card grid**:
- Aspect ratio `3/4` (era `1/1`)
- Gradient overlay più profondo
- Hover: `translateY(-5px)` + shadow
- `border-radius: var(--radius-xl)`
- Meta badge glass con backdrop-filter

**Sezioni**:
- `padding: 4.5–5.5rem 0`
- Section heads h2: `clamp(1.8rem, 4vw, 2.8rem)`
- Section alt: `rgba(250,246,239,0.45)` caldo

**Header**:
- `min-height: 5rem`, blur `20px`
- Brand `1.75rem` su desktop

**Footer**:
- Background `#1e1e1e`
- Brand con `font-display`
- Link hover con `--tufo`

### Phase 2 (commit `652e973`)

**Fix critico: hero--subpage (30 pagine DE)**:
- Struttura HTML DE: `section > picture + div.hero__content`
- Soluzione: CSS Grid `grid-area: 1/1` per picture e content nella stessa cella
- Picture: `height: 100%`, `object-fit: cover`, `min-height: clamp()`
- Content: `align-self: end`, gradient background dark-bottom, `z-index: 2`
- `!important` per sovrascrivere 5+ blocchi precedenti conflittuali
- Responsive: mobile `clamp(260px, 45vh, 380px)`, desktop `clamp(400px, 58vh, 600px)`

**Classi orfane risolte**:
- `.hub-sidebar`: sticky sidebar homepage (`top: 5.5rem`)
- `.spoke-main`: contenitore principale pagine vino
- `.spoke-sidebar`: sticky sidebar pagine vino
- `.photo-card`: card fotografiche con hover lift

**Est! pillar `detail-hero--pillar`**:
- Gradient `deep-burgundy → #4a0a18 → #3a0812`
- h1 colore `--tufo`, `font-size: clamp(1.9rem, 4.5vw, 3rem)`
- p: `rgba(255,255,255,0.86)`
- Immagine: `brightness(0.82) saturate(1.1)`

**Weather widget premium**:
- Panel: colori invertiti (bianco su blu-lago)
- h3: `--tufo`, `letter-spacing: 0.14em`
- Summary list: sfondo `rgba(255,255,255,0.1)`
- Button: glass `rgba(255,255,255,0.18)` con hover

**Card system**:
- `.card`: transition hover box-shadow
- `.spoke-card`: `translateY(-3px)` hover
- `.nav-card`: border+radius+shadow+hover
- `nav-card__link`: arrow `→` con `translateX` hover

**Footer grid**:
- 48rem+: `1.4fr 1fr 1fr`
- 64rem+: `1.6fr 1fr 1.2fr`

**Typography editoriale nelle content card**:
- h2: `clamp(1.35rem, 3vw, 1.85rem)`
- h3: `color: var(--rosso)`, font-body 700
- p: `font-size: 1rem`, `line-height: 1.75`

**Mobile**:
- `media-card-grid--3/--2`: `grid-template-columns: 1fr`
- `hub-sidebar`, `spoke-sidebar`: `position: static`
- `hero--subpage`: `clamp(260px, 45vh, 380px)`

---

## 5. Homepage: prima/dopo

**Prima**: Hero con card bianca galleggiante su sfondo blu scuro, senza immagine visibile. `min-height: 520px`. Card `1:1`. Sezioni con `3.5rem` di padding.

**Dopo**: Hero cinematografico `min(74vh,720px)`, immagine full-bleed con overlay gradient dark, card floating con backdrop-filter blur. Card `3:4` più alte. Sezioni con `4.5–5.5rem`. Eyebrow pill, h1 fino a `4.5rem`.

---

## 6. Header/menu: prima/dopo

**Prima**: `min-height: 4.5rem`, blur `16px`, brand `1.6rem`.

**Dopo**: `min-height: 5rem`, blur `20px`, brand `1.75rem` desktop, sfondo `rgba(252,249,248,0.97)`. Nav dropdown panel `30rem` di larghezza.

---

## 7. Card/componenti: prima/dopo

**Prima**: `1:1` quadrate, gradient brusco, nessuna transizione.

**Dopo**: `3:4` editoriali, gradient progressivo `0→90%`, hover `translateY(-5px)` + shadow lift, meta badge glass, body padding `1.75rem`.

---

## 8. Pagine interne: prima/dopo

**IT (detail-hero)**: Invariato (split grid white con immagine destra) — già corretto e coerente con reference.

**DE (hero--subpage)**: 
- **Prima**: Pannello bianco (Lake&Stone override), picture relegata a metà griglia, testo su sfondo bianco.
- **Dopo**: Full-bleed cinematografico `58vh`, immagine copre tutto, gradient dark sulla parte inferiore, testo bianco in primo piano.

---

## 9. Footer: prima/dopo

**Prima**: `#2d2d2d`, auto-fit generico, link grigi.

**Dopo**: `#1e1e1e`, brand con `font-display`, 3-col grid, link hover `--tufo`.

---

## 10. Mobile: prima/dopo

**Prima**: Card `1:1`, hero `420px`, sidebar inline.

**Dopo**: Card `4:5`, hero DE `clamp(260px, 45vh, 380px)`, sidebar `position: static`, media grid single-col.

---

## 11. Cosa non è stato copiato dai reference

- **Immagini remote**: nessuna — solo asset propri del repo
- **Widget meteo Stitch**: reference mostra widget live — sito usa proprio widget semantico
- **Form newsletter**: non introdotto — richiederebbe backend
- **"Book Now" CTA**: non pertinente per sito editoriale
- **Palette drasticamente alterata**: mantenuta palette burgundy/lake blue approvata
- **Nuovi componenti HTML**: nessuno — solo CSS su strutture esistenti

---

## 12. Guardrail SEO/FR

| Guardrail | Stato |
|-----------|-------|
| File `fr/*` modificati | ✅ 0 |
| `hreflang="fr"` nel CSS | ✅ 0 |
| Link `.html` nel CSS | ✅ 0 |
| `googleusercontent` nel CSS | ✅ 0 |
| Variabili CSS non definite | ✅ 0 |
| Asset Stitch | ✅ 0 |
| Canonical URL modificate | ✅ 0 |
| Routing modificato | ✅ 0 |
| Copy SEO modificato | ✅ 0 |
| File stagiation contiene FR | ✅ 0 |

---

## 13. Build/output

```
All 6 scenarios passed.
Cloudflare package created in dist-it (IT: 98, EN: 98, DE: 98)
```

Build completato senza errori su entrambi i commit.

---

## 14. File modificati

| File | Tipo | Delta |
|------|------|-------|
| `css/style.css` | Modificato | +1984 righe (Phase 1+2) |
| `css/style.min.css` | Modificato | sincronizzato 1:1 con style.css |

Nessun altro file modificato. `eventi.html` (transient da build) rimosso con `git checkout`.

---

## 15. Problemi residui / note

1. **EN homepage**: usa `detail-hero` (split grid) — il layout è coerente con il sistema IT, ma il reference mobile mostra un hero full-bleed overlay. Le pagine EN non usano `hero--subpage`, quindi restano con il layout split bianco (accettabile per il sistema attuale).

2. **Card 3-col su tablet (48–64rem)**: Su breakpoint intermedio, le 3 card si impilano in 1 colonna su mobile e 3 colonne su desktop, ma nessun breakpoint 2-col intermedio. Non aggiunto per non rischiare layout rotti su pagine con 5+ card.

3. **Hover su card media overlay**: L'effetto `translateY(-5px)` funziona su desktop. Su touch device l'hover non è persistente — comportamento atteso sul web.

4. **Font Playfair Display**: Il footer brand ora usa `font-display` — FOUT possibile al caricamento, ma font è già preconnected con `<link rel=preconnect>`.

5. **PR #8 (San Flaviano)**: è ancora OPEN e non mergeata. Da gestire separatamente prima o dopo questa PR.

---

## 16. Raccomandazione finale

**READY FOR PR REVIEW**

La PR #9 è pronta per review e merge. Gli interventi:
- Sono modulari (blocchi CSS aggiuntivi, non distruttivi)
- Non rompono nessun contenuto esistente
- Correggono problemi architetturali reali (hero DE, classi orfane)
- Migliorano significativamente la resa visiva vs reference
- Superano tutti i guardrail SEO/FR
- Build stabile `98 IT / 98 EN / 98 DE`

Attenzione prima del merge: verificare PR #8 (San Flaviano fix — branch `fix/san-flaviano-image`) che è ancora OPEN. Se va mergeata prima, fare merge in ordine #8 → #9.
