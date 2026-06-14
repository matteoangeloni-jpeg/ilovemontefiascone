# PWA Offline First per Montefiascone

## File creati

- `manifest.json`: manifest PWA con tema vino/tufo e avvio standalone.
- `sw.js`: service worker con caching differenziato per documenti, asset e mappe.
- `offline.html`: fallback quando la navigazione fallisce senza rete.
- `icons/`: icone SVG usabili subito nel manifest.

## 1. Inserimento nel template HTML

Inietta questi tag dentro `<head>` del layout principale del portale:

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#6f1d2f">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
```

Registra il service worker prima di `</body>` oppure nel bundle JS principale:

```html
<script>
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/"
        });

        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
      } catch (error) {
        console.error("Registrazione Service Worker fallita:", error);
      }
    });
  }
</script>
```

## 2. Strategia di caching implementata

- `Stale-While-Revalidate` per tutte le navigazioni HTML same-origin:
  usa subito la copia in cache e aggiorna in background.
- `Cache-First` per:
  immagini,
  CSS,
  font,
  script statici,
  tile topografiche e dipendenze mappa.
- `offline.html` entra in gioco quando una pagina non e` in cache e la rete cade.

## 3. Dove posizionare i file

- `manifest.json` deve stare nella web root.
- `sw.js` deve stare nella web root per controllare tutto il sito.
- `offline.html` deve stare nella web root ed essere raggiungibile da `/offline.html`.
- Le icone devono essere pubblicate in `/icons/`.

## 4. Ottimizzazione immagini nel CMS

Per migliorare `LCP`, `CLS` e peso totale:

- Genera almeno 3 varianti per immagine hero: `768w`, `1280w`, `1920w`.
- Esporta `AVIF` come formato primario e `WebP` come fallback moderno.
- Mantieni un fallback `JPEG` solo se il CMS o il browser legacy lo richiede.
- Salva sempre `width` e `height` reali nel markup per evitare layout shift.
- Usa `loading="lazy"` solo per immagini sotto la piega.
- Usa `fetchpriority="high"` solo per l'immagine LCP principale.

Esempio consigliato per la foto hero della Rocca:

```html
<picture>
  <source
    type="image/avif"
    srcset="/media/rocca-768.avif 768w, /media/rocca-1280.avif 1280w, /media/rocca-1920.avif 1920w"
    sizes="100vw">
  <source
    type="image/webp"
    srcset="/media/rocca-768.webp 768w, /media/rocca-1280.webp 1280w, /media/rocca-1920.webp 1920w"
    sizes="100vw">
  <img
    src="/media/rocca-1280.jpg"
    srcset="/media/rocca-768.jpg 768w, /media/rocca-1280.jpg 1280w, /media/rocca-1920.jpg 1920w"
    sizes="100vw"
    width="1600"
    height="900"
    alt="Rocca dei Papi vista dal belvedere"
    decoding="async"
    fetchpriority="high">
</picture>
```

Per gallery, card e immagini editoriali secondarie:

```html
<img
  src="/media/cantine-640.webp"
  width="640"
  height="426"
  alt="Degustazione in cantina a Montefiascone"
  loading="lazy"
  decoding="async">
```

## 5. Note operative per Core Web Vitals

- Non usare `loading="lazy"` sull'immagine above the fold.
- Precarica il font principale solo se e` davvero usato in hero.
- Riduci JS di terze parti nelle pagine editoriali.
- Se usi Leaflet o Mapbox solo in una sezione specifica, caricali on demand.
- Aggiorna `SW_VERSION` in `sw.js` quando cambi asset critici o logica di cache.
- Se il CMS ha preview o pannello admin, lasciali fuori dal caching. `sw.js` lo fa gia` per `/wp-admin`, `/wp-json`, `/api/` e URL con `?preview=`.

## 6. Test rapido

1. Apri il sito in Chrome.
2. Verifica in DevTools > Application che `manifest.json` e `sw.js` siano caricati.
3. Visita una guida testuale e una pagina con immagini o mappa.
4. Attiva `Offline` in DevTools > Network.
5. Ricarica:
   - le pagine gia` visitate devono aprirsi;
   - le immagini gia` viste devono arrivare da cache;
   - una pagina mai aperta deve mostrare `offline.html`.
