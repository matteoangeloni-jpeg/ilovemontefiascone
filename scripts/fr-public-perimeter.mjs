// Perimetro pubblico FR — rilancio parziale per cluster (2026-07-07).
// Solo le pagine revisionate manualmente e verificate in francese autentico
// entrano nel deploy. Le restanti pagine fr/ restano source-only finché i
// prossimi cluster editoriali non vengono completati (vedi
// docs/fr-full-editorial-inventory.md).
export const FR_PUBLIC_FILES = [
  // Cluster 1 — core travel / discovery
  "index.html",
  "guide.html",
  "que-voir-montefiascone-guide-complet.html",
  "carte.html",
  "lac-de-bolsena-que-voir.html",
  "via-francigena-bolsena-montefiascone.html",
  "montefiascone-en-2-jours.html",
  // Cluster 2 — eventi e calendario
  "evenements.html",
  "calendrier-des-evenements-de-montefiascone.html",
  "evenements-dete-a-montefiascone-2026.html",
  "evenements-traditions-foire-aux-vins-de-montefiascone.html",
  "festival-atb-montefiascone.html",
  "est-festival-du-film-de-montefiascone.html",
  "festival-decologie-integrale-de-montefiascone.html",
  "anno-domini-1074-montefiascone.html",
  "fete-de-santa-margherita-montefiascone.html",
  // Cluster 3 — vino
  "vin.html",
  "est-est-est-montefiascone-vino-doc.html",
  "degustation-de-vin-de-montefiascone-comment-ca-marche.html",
  "degustation-de-vignobles-de-montefiascone-est-est-est.html",
  "strada-del-vino-est-est-est-est-est-montefiascone.html",
  // Cluster 4 — gastronomia
  "cuisine-typique-de-montefiascone.html",
  "produits-typiques-de-montefiascone-tuscia.html",
  "experiences-gastronomiques-et-nologiques-a-montefiascone.html",
  // Pagine singole verificate
  "giglio-vecchio-montefiascone.html",
  "projet-editorial.html",
  // Pagine legali (privacy/cookie), necessarie per il consenso GA4
  "politique-de-confidentialite.html",
  "politique-cookies.html",
];

// Path pubblici (clean URL) corrispondenti, es. "/fr/" e "/fr/vin"
export const FR_PUBLIC_PATHS = new Set(
  FR_PUBLIC_FILES.map((f) => {
    const slug = f.replace(/\.html$/, "");
    return slug === "index" ? "/fr/" : `/fr/${slug}`;
  }),
);

export function isFrPathPublic(path) {
  if (!path) return false;
  let p = path.split(/[#?]/)[0];
  try {
    if (/^https?:\/\//.test(p)) p = new URL(p).pathname;
  } catch {
    return false;
  }
  if (p === "/fr" || p === "/fr/") return true;
  p = p.replace(/\.html$/, "").replace(/\/$/, "");
  return FR_PUBLIC_PATHS.has(p);
}
