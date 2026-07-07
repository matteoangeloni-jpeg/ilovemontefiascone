import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");

// L'immagine hero (LCP) è la prima <img> subito dopo <main>: le si dà
// fetchpriority="high" e un <link rel="preload"> nel <head>.
const HERO_WINDOW = 2500;

let touched = 0;
for (const dir of [".", "en", "de", "fr"]) {
  for (const name of readdirSync(join(root, dir))) {
    if (!name.endsWith(".html")) continue;
    const filePath = join(root, dir, name);
    let html = readFileSync(filePath, "utf8");
    if (html.includes("fetchpriority")) continue;

    const mainIdx = html.search(/<main\b/);
    if (mainIdx === -1) continue;
    const imgMatch = /<img\b[^>]*>/.exec(html.slice(mainIdx, mainIdx + HERO_WINDOW + 500));
    if (!imgMatch || imgMatch.index > HERO_WINDOW) continue;
    const imgAbs = mainIdx + imgMatch.index;
    const imgTag = imgMatch[0];

    const srcMatch = imgTag.match(/src="([^"]+)"/);
    if (!srcMatch || srcMatch[1].startsWith("data:")) continue;

    // Se l'img è dentro <picture> con variante webp, precarica la webp
    const lookback = html.slice(Math.max(0, imgAbs - 400), imgAbs);
    const webpMatch = /<picture>(?:(?!<\/picture>)[\s\S])*<source[^>]*srcset="([^"]+\.webp)"[^>]*>\s*$/.exec(lookback);
    const preloadHref = webpMatch ? webpMatch[1] : srcMatch[1];
    const typeAttr = preloadHref.endsWith(".webp") ? ' type="image/webp"' : "";

    let newImg = imgTag.replace(/\s*loading="lazy"/, "");
    newImg = newImg.replace(/^<img\b/, '<img fetchpriority="high"');
    html = html.slice(0, imgAbs) + newImg + html.slice(imgAbs + imgTag.length);

    const preload = `<link rel="preload" as="image" href="${preloadHref}"${typeAttr} fetchpriority="high">`;
    const styleIdx = html.search(/<link [^>]*rel="stylesheet"/);
    if (styleIdx === -1) continue;
    html = html.slice(0, styleIdx) + preload + "\n  " + html.slice(styleIdx);

    writeFileSync(filePath, html, "utf8");
    touched += 1;
  }
}
console.log(`Hero LCP hints aggiunti su ${touched} pagine`);
