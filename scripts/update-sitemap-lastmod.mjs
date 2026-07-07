import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");

const sitemaps = [
  { file: "sitemap-it.xml", prefix: "https://www.ilovemontefiascone.com", dir: "." },
  { file: "sitemap-en.xml", prefix: "https://www.ilovemontefiascone.com/en", dir: "en" },
  { file: "sitemap-de.xml", prefix: "https://www.ilovemontefiascone.com/de", dir: "de" },
  { file: "sitemap-fr.xml", prefix: "https://www.ilovemontefiascone.com/fr", dir: "fr" },
];

const gitDateCache = new Map();

function gitLastModified(relativePath) {
  if (gitDateCache.has(relativePath)) return gitDateCache.get(relativePath);
  let date;
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%ad", "--date=format:%Y-%m-%d", "--", relativePath],
      { cwd: root, encoding: "utf8" },
    ).trim();
    date = out || null;
  } catch {
    date = null;
  }
  gitDateCache.set(relativePath, date);
  return date;
}

function locToFile(loc, sitemap) {
  let slug = loc.startsWith(sitemap.prefix) ? loc.slice(sitemap.prefix.length) : null;
  if (slug === null) return null;
  slug = slug.replace(/^\/+/, "");
  const fileName = slug === "" ? "index.html" : `${slug}.html`;
  const relative = sitemap.dir === "." ? fileName : join(sitemap.dir, fileName);
  return relative;
}

let latestOverall = "1970-01-01";

for (const sitemap of sitemaps) {
  const filePath = join(root, sitemap.file);
  if (!existsSync(filePath)) continue;
  let xml = readFileSync(filePath, "utf8");
  let updated = 0;
  let missing = 0;

  xml = xml.replace(
    /<url>([\s\S]*?)<\/url>/g,
    (block) => {
      const locMatch = block.match(/<loc>([^<]+)<\/loc>/);
      if (!locMatch) return block;
      const relative = locToFile(locMatch[1], sitemap);
      if (!relative) return block;
      const absolute = join(root, relative);
      if (!existsSync(absolute)) {
        missing += 1;
        return block;
      }
      const date = gitLastModified(relative) ?? gitLastModified(".");
      if (!date) return block;
      if (date > latestOverall) latestOverall = date;
      updated += 1;
      return block.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${date}</lastmod>`);
    },
  );

  writeFileSync(filePath, xml, "utf8");
  console.log(`${sitemap.file}: lastmod aggiornati per ${updated} URL (${missing} non risolti)`);
}

const indexPath = join(root, "sitemap.xml");
if (existsSync(indexPath)) {
  let index = readFileSync(indexPath, "utf8");
  index = index.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${latestOverall}</lastmod>`);
  writeFileSync(indexPath, index, "utf8");
  console.log(`sitemap.xml: lastmod indice impostato a ${latestOverall}`);
}
