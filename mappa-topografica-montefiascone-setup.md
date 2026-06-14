## Integrazione della mappa

File principale:

- `mappa-topografica-montefiascone-leaflet.html`

### 1. Dove mettere i tag nel tuo HTML

Metti il CSS di Leaflet nel `<head>` della pagina:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin=""
/>
```

Nel punto della pagina in cui vuoi mostrare la mappa, incolla il contenuto del file:

```html
<section class="mf-map-section">
  ...
  <div id="map"></div>
  ...
</section>
```

Metti il JavaScript di Leaflet e lo script di inizializzazione subito prima di `</body>`:

```html
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<script>
  // inizializzazione mappa, layer, marker, GeoJSON
</script>
```

Se il tuo CMS permette solo un blocco HTML unico, puoi incollare l'intero contenuto di `mappa-topografica-montefiascone-leaflet.html` in un solo blocco custom HTML.

### 2. CSS responsive del contenitore

Lo stile minimo importante e questo:

```css
#map {
  width: 100%;
  min-height: 420px;
  height: clamp(420px, 68vh, 760px);
}

@media (max-width: 768px) {
  #map {
    min-height: 360px;
    height: 70vh;
  }
}
```

Questo approccio rende la mappa:

- larga quanto il contenitore;
- leggibile su desktop;
- abbastanza alta su mobile senza diventare ingestibile.

### 3. Cosa fa lo script

- centra la mappa su **Montefiascone** con zoom sufficiente a vedere l'intero **Lago di Bolsena**;
- offre un layer **satellitare** e uno **topografico**;
- mostra 3 marker custom con popup;
- evidenzia la **caldera vulcanica** con un overlay GeoJSON;
- disegna i primi 5 km della **Via Francigena** verso **Viterbo**.

### 4. Nota sui layer

- Il layer satellitare usa **Esri World Imagery**.
- Il layer topografico usa **OpenTopoMap**.
- Poiche il layer Esri e usato tramite una libreria terza, lo snippet espone anche la dicitura visibile `Powered by Esri`.

### 5. Personalizzazioni rapide

Per cambiare il punto iniziale:

```js
const montefiascone = [42.537925, 12.030997];
```

Per cambiare il marker della Via Francigena:

```js
const inizioBasolato = [42.536855, 12.027616];
```

Per sostituire o affinare il tracciato dei 5 km:

```js
const francigenaFirst5Km = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [...]
  }
};
```
