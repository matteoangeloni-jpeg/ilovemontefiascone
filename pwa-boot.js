// Single-file PWA bootstrap. Add to every page:
// <link rel="manifest" href="/manifest.json">
// <script src="/pwa-boot.js" defer></script>

(function () {
  if (!("serviceWorker" in navigator)) return;

  const DEV_RESET_KEY = "mf-local-sw-reset";
  const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);
  const isLocalPreview = LOCAL_HOSTS.has(window.location.hostname);

  if (isLocalPreview) {
    Promise.all([
      navigator.serviceWorker.getRegistrations().then((registrations) =>
        Promise.all(registrations.map((registration) => registration.unregister()))
      ),
      "caches" in window
        ? caches.keys().then((keys) =>
            Promise.all(
              keys
                .filter((key) => key.startsWith("mf-pwa-"))
                .map((key) => caches.delete(key))
            )
          )
        : Promise.resolve()
    ]).finally(() => {
      if (!sessionStorage.getItem(DEV_RESET_KEY)) {
        sessionStorage.setItem(DEV_RESET_KEY, "1");
        window.location.reload();
        return;
      }

      sessionStorage.removeItem(DEV_RESET_KEY);
    });

    return;
  }

  const SW_PATH = "/sw.js";
  const UPDATE_INTERVAL_MS = 60 * 60 * 1000; // check every hour on long sessions

  navigator.serviceWorker
    .register(SW_PATH, { scope: "/" })
    .then((registration) => {
      // Periodic update check for sessions that stay open
      setInterval(() => registration.update(), UPDATE_INTERVAL_MS);

      // A waiting worker is already queued (page loaded between installs)
      if (registration.waiting) {
        notifyWorker(registration.waiting);
      }

      // New version downloaded in the background
      registration.addEventListener("updatefound", () => {
        const incoming = registration.installing;
        if (!incoming) return;

        incoming.addEventListener("statechange", () => {
          // New SW installed while a previous one controlled the page: activate immediately
          if (incoming.state === "installed" && navigator.serviceWorker.controller) {
            notifyWorker(incoming);
          }
        });
      });
    })
    .catch(() => {
      // SW registration failed silently: the site still works, just no offline support
    });

  // When the active controller is replaced, reload once to serve fresh assets
  let alreadyReloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (alreadyReloading) return;
    alreadyReloading = true;
    window.location.reload();
  });

  function notifyWorker(worker) {
    worker.postMessage({ type: "SKIP_WAITING" });
  }
})();

