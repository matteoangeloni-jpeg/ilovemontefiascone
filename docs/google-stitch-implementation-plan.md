# Google Stitch Visual Alignment Plan

## Cosa prendere da Stitch
- Layout: Hero ampio, card editoriali squadrate con overlay, blocchi con gerarchia chiara.
- Spacing e ritmo: Maggiore respiro verticale (padding più ampi).
- Header e Footer: Layout più pulito per header (brand a sinistra, nav a destra) e footer sezionato.

## Cosa NON prendere da Stitch
- Immagini e mockup generati dall'AI.
- Testi placeholder o claim non verificati.
- Layout impossibili da riprodurre con il DOM statico senza pesanti riscritture JS.
- Qualsiasi dipendenza esterna.

## Piano Implementativo (Massimo 5 Blocchi)

| Area | Riferimento Stitch | Stato Attuale | Modifica Proposta | File da Toccare | Rischio | Priorità | Accettazione Visuale |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1. Header/Menu | Header monoriga, brand isolato e link allineati | Navigazione attuale compatta con sottomenu che necessitano spacing | Rendere il contenitore più flessibile e leggero, rimuovere il text-transform estremo se serve. | `assets/site.css`, `css/style.css`, `base.html` | Basso | Alta | Navbar non affollata |
| 2. Homepage Hero | Titolo importante overlay su full-screen background con pulsante CTA e layout a griglia sotto | Hero attuale con `.page-hero__panel` a blocco flottante centrale o laterale, background non full-bleed. | Ristrutturare `.page-hero` della home per mimare l'ampiezza e l'overlay della reference (hero a tutto schermo con testo contrastato). | `index.html`, `css/style.css` | Medio | Alta | Hero impattante a tutto schermo |
| 3. Card e Cluster | Card squadrate con foto intera (3-col) ed etichetta in basso a sinistra (Patrimonio, Cartografia, Comunità) | `media-card-grid` attuali sono rettangolari, con testi sotto l'immagine. | Adattare le card dei cluster usando overlay gradients e posizionamento absolute per i titoli, avvicinando il look a Stitch. | `index.html`, `css/style.css` | Medio | Media | Card moderne stile magazine |
| 4. Pillar Est Est Est | Layout 2 colonne (Vino & Motori), side panel "Fast Facts" a destra, elenco card a sinistra. | Layout standard articolo con testo fluido. | Modificare layout in grid a 2 colonne, implementare blocco "Fast Facts" e card laterali (stile "Cantine Locali"). | `/est-est-est*.html`, `css/style.css` | Medio | Alta | Pillar più strutturato, layout editoriale avanzato |
| 5. Footer/Mobile | Footer molto minimale, logo a sinistra, link essenziali (Privacy, Terms) sulla stessa riga. | Footer attuale con multiple sezioni, un po' affollato. | Riorganizzare il flex-layout del footer in stile Stitch. Polish mobile menu. | `base.html`, `index.html`, `css/style.css` | Basso | Bassa | Footer orizzontale e pulito |
