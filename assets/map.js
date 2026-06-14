(() => {
  if (typeof L === "undefined") return;
  const mapNode = document.getElementById("map");
  if (!mapNode) return;

  const t = window.mapContent || {};
  const copy = {
    satelliteLabel: t.satelliteLabel || "Satellitare",
    topoLabel: t.topoLabel || "Topografica",
    craterLayerLabel: t.craterLayerLabel || "Caldera vulcanica",
    routeLayerLabel: t.routeLayerLabel || "Via Francigena (5 km)",
    craterPopupTitle: t.craterPopupTitle || "Caldera vulcanica del Lago di Bolsena",
    craterPopupText: t.craterPopupText || "Schematizzazione visiva del bordo craterico.",
    routePopupTitle: t.routePopupTitle || "Via Francigena: primi 5 km verso Viterbo",
    routePopupText: t.routePopupText || "Tratto iniziale del cammino verso Viterbo.",
    cathedralTitle: t.cathedralTitle || "Cattedrale di Santa Margherita",
    cathedralText: t.cathedralText || "Principale riferimento monumentale del centro storico.",
    roccaTitle: t.roccaTitle || "Rocca dei Papi",
    roccaText: t.roccaText || "Punto panoramico piu elevato del borgo.",
    routeTitle: t.routeTitle || "Inizio del basolato romano della Via Francigena",
    routeText: t.routeText || "Accesso indicativo al tratto storico della Via Cassia Antica."
  };

  const montefiascone = [42.537925, 12.030997];
  const santaMargherita = [42.536522, 12.03051];
  const roccaDeiPapi = [42.536605, 12.028129];
  const inizioBasolato = [42.536855, 12.027616];

  const map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true,
    zoomSnap: 0.5
  }).setView(montefiascone, 11);

  const topoLayer = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    detectRetina: true,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'DEM: SRTM | Map style: &copy; <a href="https://opentopomap.org/about">OpenTopoMap</a> (CC-BY-SA)'
  });

  const satelliteLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 19,
      detectRetina: true,
      attribution:
        "Tiles &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community"
    }
  ).addTo(map);

  const craterGeoJson = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [[
        [11.82, 42.646],
        [11.844, 42.699],
        [11.894, 42.734],
        [11.971, 42.74],
        [12.044, 42.716],
        [12.096, 42.666],
        [12.111, 42.604],
        [12.097, 42.547],
        [12.051, 42.501],
        [11.983, 42.479],
        [11.91, 42.482],
        [11.851, 42.51],
        [11.819, 42.566],
        [11.82, 42.646]
      ]]
    }
  };

  const francigenaFirst5Km = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [12.029079, 42.537035],
        [12.027616, 42.536855],
        [12.026713, 42.536063],
        [12.025851, 42.534012],
        [12.029864, 42.531593],
        [12.032924, 42.529273],
        [12.035987, 42.526807],
        [12.037914, 42.522567],
        [12.040554, 42.519265],
        [12.042125, 42.515996],
        [12.045157, 42.513111],
        [12.048081, 42.508965],
        [12.049907, 42.506202],
        [12.052806, 42.503501],
        [12.054429, 42.502019]
      ]
    }
  };

  const craterLayer = L.geoJSON(craterGeoJson, {
    style() {
      return {
        color: "#7cb7c5",
        weight: 2,
        dashArray: "10 8",
        fillColor: "#d9ebe8",
        fillOpacity: 0.12
      };
    }
  }).bindPopup(
    `<div class="popup"><h3>${copy.craterPopupTitle}</h3><p>${copy.craterPopupText}</p></div>`
  ).addTo(map);

  const routeLayer = L.geoJSON(francigenaFirst5Km, {
    style() {
      return {
        color: "#2e7089",
        weight: 5,
        opacity: 0.95,
        dashArray: "12 8",
        lineCap: "round",
        lineJoin: "round"
      };
    }
  }).bindPopup(
    `<div class="popup"><h3>${copy.routePopupTitle}</h3><p>${copy.routePopupText}</p></div>`
  ).addTo(map);

  function makePoiIcon(label, variantClass) {
    return L.divIcon({
      className: "",
      html: `<div class="poi-icon ${variantClass}"><span>${label}</span></div>`,
      iconSize: [42, 42],
      iconAnchor: [21, 42],
      popupAnchor: [0, -36]
    });
  }

  [
    {
      coords: santaMargherita,
      title: copy.cathedralTitle,
      description: copy.cathedralText,
      icon: makePoiIcon("SM", "poi-cathedral")
    },
    {
      coords: roccaDeiPapi,
      title: copy.roccaTitle,
      description: copy.roccaText,
      icon: makePoiIcon("RP", "poi-rocca")
    },
    {
      coords: inizioBasolato,
      title: copy.routeTitle,
      description: copy.routeText,
      icon: makePoiIcon("VF", "poi-francigena")
    }
  ].forEach((markerData) => {
    L.marker(markerData.coords, {
      icon: markerData.icon,
      title: markerData.title,
      keyboard: true
    }).bindPopup(
      `<div class="popup"><h3>${markerData.title}</h3><p>${markerData.description}</p></div>`
    ).addTo(map);
  });

  L.control.layers(
    {
      [copy.satelliteLabel]: satelliteLayer,
      [copy.topoLabel]: topoLayer
    },
    {
      [copy.craterLayerLabel]: craterLayer,
      [copy.routeLayerLabel]: routeLayer
    },
    { collapsed: false }
  ).addTo(map);

  L.control.scale({ imperial: false }).addTo(map);
})();
