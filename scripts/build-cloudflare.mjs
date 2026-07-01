import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const outputDir = join(root, "dist-it");

const technicalRootFiles = new Set([
  "404.html",
  "cookie.html",
  "offline.html",
  "privacy.html",
]);

const supportRootFiles = [
  "llms.txt",
  "manifest.json",
  "pwa-boot.js",
  "robots.txt",
  "sitemap.xml",
  "sitemap-it.xml",
  "sitemap-en.xml",
  "sitemap-de.xml",
  "_redirects",
  "sw.js",
];

const nonPublicRootHtml = new Set([
  "base.html",
  "cruscotto-del-viaggiatore-widget.html",
  "giglio-vecchio-montefiascone.html",
  "mappa-topografica-montefiascone-leaflet.html",
  "quiz-itinerario-tuscia-widget.html",
]);

const nonPublicEnHtml = new Set([
  "how-many-days-in-montefiascone.html",
  "where-to-stay-around-lake-bolsena.html",
  "where-to-stay-montefiascone-vs-bolsena-viterbo.html",
]);

const directories = [
  "assets",
  "css",
  "icons",
  "js",
  "media",
];

function listHtml(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => entry.name)
    .sort();
}

function addAttribute(tag, name, value) {
  const attribute = new RegExp(`\\s${name}=(['"])[^'"]*\\1`, "i");
  if (attribute.test(tag)) {
    return tag.replace(attribute, ` ${name}="${value}"`);
  }
  return tag.replace(/\s*\/?\s*>$/, ` ${name}="${value}">`);
}

function optimizePublicHtml(html) {
  let optimized = html.replace(
    /<link\b(?=[^>]*href=["']https:\/\/fonts\.googleapis\.com\/css2[^"']*["'])[^>]*>/gi,
    (tag) => {
      const href = tag.match(/href=["']([^"']+)["']/i)?.[1];
      if (!href) return tag;
      return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"/><noscript><link rel="stylesheet" href="${href}"/></noscript>`;
    },
  );

  optimized = optimized.replaceAll("/css/style.css", "/css/style.min.css");
  optimized = optimized.replace(
    /<source\s+srcset=["']\/media\/hero-rocca-dei-papi-1600\.webp["']\s+type=["']image\/webp["']\s*\/?\s*>/gi,
    '<source srcset="/media/hero-rocca-dei-papi-640.webp 640w, /media/hero-rocca-dei-papi-768.webp 768w, /media/hero-rocca-dei-papi-1280.webp 1280w, /media/hero-rocca-dei-papi-1600.webp 1600w" sizes="100vw" type="image/webp">',
  );

  const hero = /<(?:section|header)\b[^>]*class=["'][^"']*\b(?:hero|detail-hero)\b[^"']*["'][^>]*>/i.exec(
    optimized,
  );
  if (!hero) return optimized;

  const sectionEnd = optimized.indexOf("</section>", hero.index);
  const imageStart = optimized.indexOf("<img", hero.index);
  if (imageStart < 0 || (sectionEnd >= 0 && imageStart > sectionEnd)) return optimized;

  const imageEnd = optimized.indexOf(">", imageStart);
  if (imageEnd < 0) return optimized;

  let imageTag = optimized.slice(imageStart, imageEnd + 1);
  imageTag = addAttribute(imageTag, "loading", "eager");
  imageTag = addAttribute(imageTag, "fetchpriority", "high");
  return `${optimized.slice(0, imageStart)}${imageTag}${optimized.slice(imageEnd + 1)}`;
}

const rootFiles = [
  ...listHtml(root).filter(
    (file) => !technicalRootFiles.has(file) && !nonPublicRootHtml.has(file),
  ),
  ...[...technicalRootFiles],
  ...supportRootFiles,
];

const enFiles = listHtml(join(root, "en"))
  .filter((file) => !nonPublicEnHtml.has(file))
  .map((file) => `en/${file}`);

const deFiles = listHtml(join(root, "de")).map((file) => `de/${file}`);

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const file of rootFiles) {
  const source = join(root, file);
  if (!existsSync(source)) {
    throw new Error(`Missing required file: ${file}`);
  }
  cpSync(source, join(outputDir, file), { force: true });
}

for (const directory of directories) {
  const source = join(root, directory);
  if (!existsSync(source)) {
    throw new Error(`Missing required directory: ${directory}`);
  }
  cpSync(source, join(outputDir, directory), { recursive: true, force: true });
}

for (const file of [...enFiles, ...deFiles]) {
  const source = join(root, file);
  if (!existsSync(source)) {
    throw new Error(`Missing required perimeter file: ${file}`);
  }
  const destination = join(outputDir, file);
  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination, { force: true });
}

const publicHtmlFiles = [
  ...rootFiles.filter((file) => file.endsWith(".html")),
  ...enFiles,
  ...deFiles,
];

for (const file of publicHtmlFiles) {
  const destination = join(outputDir, file);
  const html = readFileSync(destination, "utf8");
  writeFileSync(destination, optimizePublicHtml(html), "utf8");
}

console.log(
  `Cloudflare package created in ${outputDir} (IT: ${rootFiles.length - technicalRootFiles.size - supportRootFiles.length}, EN: ${enFiles.length}, DE: ${deFiles.length})`,
);
