import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
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

console.log(
  `Cloudflare package created in ${outputDir} (IT: ${rootFiles.length - technicalRootFiles.size - supportRootFiles.length}, EN: ${enFiles.length}, DE: ${deFiles.length})`,
);
