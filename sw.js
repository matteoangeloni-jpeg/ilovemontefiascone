const SW_VERSION = "mf-pwa-v11-2026-07-04-linkcleanup";
const STATIC_CACHE = `${SW_VERSION}-static`;
const ARTICLE_CACHE = `${SW_VERSION}-articles`;
const ASSET_CACHE = `${SW_VERSION}-assets`;
const IMAGE_CACHE = `${SW_VERSION}-images`;
const MAP_CACHE = `${SW_VERSION}-map`;

const PRECACHE_URLS = [
  "/",
  "/cosa-vedere",
  "/guide",
  "/eventi",
  "/vino",
  "/mappa",
  "/associazioni-volontariato-montefiascone",
  "/css/style.css",
  "/assets/site.css",
  "/assets/gallery.css",
  "/assets/site.js",
  "/assets/gallery.js",
  "/assets/map.js",
  "/js/main.js",
  "/pwa-boot.js",
  "/offline.html",
  "/manifest.json",
  "/icons/icon-192.svg",
  "/icons/icon-512.svg",
  "/icons/maskable-512.svg"
];

const TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "source"
]);

const MAP_HOST_PATTERNS = [
  "tile.opentopomap.org",
  "tile.openstreetmap.org",
  "server.arcgisonline.com",
  "unpkg.com"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => !cacheName.startsWith(SW_VERSION))
          .map((cacheName) => caches.delete(cacheName))
      );

      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }

      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (shouldBypass(url)) {
    return;
  }

  if (isArticleRequest(request, url)) {
    event.respondWith(staleWhileRevalidate(event, request));
    return;
  }

  if (isMapTileRequest(url)) {
    event.respondWith(cacheFirst(request, MAP_CACHE, 120));
    return;
  }

  if (isImageRequest(request)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE, 80));
    return;
  }

  if (isStaticAssetRequest(request, url)) {
    event.respondWith(cacheFirst(request, ASSET_CACHE, 80));
    return;
  }
});

function shouldBypass(url) {
  if (url.origin === self.location.origin) {
    if (url.pathname.startsWith("/wp-admin")) return true;
    if (url.pathname.startsWith("/wp-json")) return true;
    if (url.pathname.startsWith("/api/")) return true;
    if (url.pathname.startsWith("/preview/")) return true;
  }

  return url.searchParams.has("preview") || url.searchParams.has("no-sw-cache");
}

function isArticleRequest(request, url) {
  const acceptsHtml = request.headers.get("accept")?.includes("text/html");
  const sameOrigin = url.origin === self.location.origin;
  return sameOrigin && (request.mode === "navigate" || request.destination === "document" || acceptsHtml);
}

function isImageRequest(request) {
  return request.destination === "image";
}

function isMapTileRequest(url) {
  return MAP_HOST_PATTERNS.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
}

function isStaticAssetRequest(request, url) {
  if (request.destination === "style" || request.destination === "font") {
    return true;
  }

  if (request.destination === "script") {
    return url.origin === self.location.origin || isMapTileRequest(url);
  }

  if (request.destination === "image") {
    return false;
  }

  return /\.(?:css|js|woff2?|ttf|otf)$/i.test(url.pathname);
}

function createArticleCacheKey(request) {
  const url = new URL(request.url);

  TRACKING_PARAMS.forEach((param) => {
    url.searchParams.delete(param);
  });

  // 'navigate' mode cannot be used in Request constructor.
  const mode = request.mode === "navigate" ? "same-origin" : request.mode;

  return new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    mode: mode,
    credentials: request.credentials,
    redirect: request.redirect
  });
}

async function staleWhileRevalidate(event, request) {
  const cache = await caches.open(ARTICLE_CACHE);
  const cacheKey = createArticleCacheKey(request);
  const cachedResponse = await cache.match(cacheKey);

  const networkResponsePromise = (async () => {
    try {
      let preloadResponse;
      try {
        preloadResponse = await event.preloadResponse;
      } catch (preloadError) {
        preloadResponse = undefined;
      }

      if (preloadResponse && isCacheable(preloadResponse)) {
        await cache.put(cacheKey, preloadResponse.clone());
        await enforceCacheLimit(ARTICLE_CACHE, 50);
      }
      if (preloadResponse) {
        return preloadResponse;
      }

      const response = await fetch(request);
      if (isCacheable(response)) {
        await cache.put(cacheKey, response.clone());
        await enforceCacheLimit(ARTICLE_CACHE, 50);
      }
      return response;
    } catch (error) {
      return null;
    }
  })();

  if (cachedResponse) {
    event.waitUntil(networkResponsePromise);
    return cachedResponse;
  }

  const networkResponse = await networkResponsePromise;
  if (networkResponse) {
    return networkResponse;
  }

  const offlineFallback = await caches.match("/offline.html");
  return offlineFallback || Response.error();
}

async function cacheFirst(request, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request, { ignoreVary: true });

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    if (isCacheable(response)) {
      await cache.put(request, response.clone());
      await enforceCacheLimit(cacheName, maxEntries);
    }
    return response;
  } catch (error) {
    if (request.destination === "image") {
      return new Response(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-label="Immagine non disponibile offline">
          <rect width="1200" height="675" fill="#efe5d6"/>
          <circle cx="265" cy="210" r="52" fill="#b98652"/>
          <path d="M120 540l210-220 125 130 150-175 195 265H120z" fill="#6f1d2f" opacity="0.88"/>
          <path d="M642 540l126-142 114 95 79-82 119 129H642z" fill="#2b6d7c" opacity="0.88"/>
          <text x="120" y="618" fill="#3b2419" font-family="Segoe UI, Arial, sans-serif" font-size="42">
            Risorsa non disponibile offline
          </text>
        </svg>`,
        { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } }
      );
    }

    return Response.error();
  }
}

function isCacheable(response) {
  return !!response && (response.ok || response.type === "opaque");
}

async function enforceCacheLimit(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const requests = await cache.keys();

  if (requests.length <= maxEntries) {
    return;
  }

  const overflow = requests.length - maxEntries;
  await Promise.all(requests.slice(0, overflow).map((request) => cache.delete(request)));
}
