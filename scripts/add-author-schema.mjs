import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");

const AUTHOR_NAME = "Matteo Angeloni";

const editorialUrlByLang = {
  ".": "https://www.ilovemontefiascone.com/progetto-editoriale",
  en: "https://www.ilovemontefiascone.com/en/editorial-project-montefiascone",
  de: "https://www.ilovemontefiascone.com/de/redaktionelles-projekt-montefiascone",
  fr: "https://www.ilovemontefiascone.com/fr/projet-editorial",
};

const targetDirs = [".", "en", "de", "fr"];

function listHtmlFiles(dir) {
  const abs = join(root, dir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".html"))
    .map((e) => (dir === "." ? e.name : `${dir}/${e.name}`));
}

function authorBlock(indent, url) {
  return (
    `${indent}"author": {\n` +
    `${indent}  "@type": "Person",\n` +
    `${indent}  "name": "${AUTHOR_NAME}",\n` +
    `${indent}  "url": "${url}"\n` +
    `${indent}},\n`
  );
}

let totalArticleAuthorsAdded = 0;

for (const dir of targetDirs) {
  const url = editorialUrlByLang[dir];
  for (const file of listHtmlFiles(dir)) {
    const filePath = join(root, file);
    let html = readFileSync(filePath, "utf8");
    if (!html.includes('"@type": "Article"')) continue;
    if (/"@type":\s*"Article"[\s\S]{0,20}"author"/.test(html)) continue; // already patched

    const articleLine = /^([ \t]*)"@type":\s*"Article",\s*\r?\n/m;
    if (!articleLine.test(html)) continue;

    html = html.replace(articleLine, (match, indent) => `${match}${authorBlock(indent, url)}`);
    writeFileSync(filePath, html, "utf8");
    totalArticleAuthorsAdded += 1;
  }
}

console.log(`Article: author aggiunto in ${totalArticleAuthorsAdded} file.`);
