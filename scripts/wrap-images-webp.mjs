import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const dryRun = process.argv.includes("--dry-run");

const targetDirs = [".", "en", "de", "fr"];

function listHtmlFiles(dir) {
  const abs = join(root, dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".html"))
    .map((e) => (dir === "." ? e.name : `${dir}/${e.name}`));
}

const files = targetDirs.flatMap(listHtmlFiles);

const imgRegex = /<img\b[^>]*\bsrc=["'](\/media\/(?:gallery\/)?[A-Za-z0-9_-]+)\.jpg["'][^>]*\/?>/g;

let totalWrapped = 0;
let totalSkippedNoWebp = 0;
let totalSkippedAlready = 0;

for (const file of files) {
  const filePath = join(root, file);
  let html = readFileSync(filePath, "utf8");
  let fileWrapped = 0;
  let changed = false;

  html = html.replace(imgRegex, (imgTag, mediaPathNoExt, offset, full) => {
    const webpRelative = `${mediaPathNoExt}.webp`;
    const webpAbsolute = join(root, webpRelative);
    if (!existsSync(webpAbsolute)) {
      totalSkippedNoWebp += 1;
      return imgTag;
    }

    const before = full.slice(Math.max(0, offset - 400), offset);
    const lastOpen = before.lastIndexOf("<picture");
    const lastClose = before.lastIndexOf("</picture>");
    const alreadyInPicture = lastOpen > lastClose;
    if (alreadyInPicture) {
      totalSkippedAlready += 1;
      return imgTag;
    }

    fileWrapped += 1;
    changed = true;
    return `<picture><source srcset="${webpRelative}" type="image/webp">${imgTag}</picture>`;
  });

  if (changed) {
    totalWrapped += fileWrapped;
    console.log(`${file}: +${fileWrapped} <picture>/webp wrap`);
    if (!dryRun) writeFileSync(filePath, html, "utf8");
  }
}

console.log(
  `\nTotale: ${totalWrapped} immagini avvolte in <picture>+webp, ${totalSkippedNoWebp} senza webp corrispondente (nessuna modifica), ${totalSkippedAlready} gia' in <picture>.${dryRun ? " (dry-run, nessun file scritto)" : ""}`,
);
