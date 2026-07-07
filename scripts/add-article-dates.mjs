import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");

// Batch di solo markup/infrastruttura (author schema, wrap WebP, hreflang,
// canonical, BOM/mojibake, perimetri di pubblicazione): non sono revisioni
// editoriali, non devono spostare il dateModified percepito dai motori.
const markupOnlyCommits = new Set([
  "67fd978", "6052b04", "bf3f907", "70788dc", // batch SEO 2026-07-07
  "25d6560", // FR expansion: hreflang su tutti i file IT/EN/DE
  "08469b3", "17738e0", "231319b", "4fbadd0", // perimetro trilingue
  "372be1c", "d4693ab", // pubblicazione DE/EN: hreflang sui file preesistenti
  "a3137a3", "5b9a9e1", "c69dd2d", "f1a8ecb", // canonical www/apex
  "d8cc90f", // fix encoding mojibake
]);

function git(args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
}

function firstPublished(relative) {
  const out = git(["log", "--diff-filter=A", "--format=%ad", "--date=format:%Y-%m-%d", "--", relative]);
  const lines = out.split("\n").filter(Boolean);
  return lines[lines.length - 1] || null;
}

function lastEditorialChange(relative) {
  const out = git(["log", "--format=%h %ad", "--date=format:%Y-%m-%d", "--", relative]);
  for (const line of out.split("\n").filter(Boolean)) {
    const [sha, date] = line.split(" ");
    if (!markupOnlyCommits.has(sha)) return date;
  }
  return null;
}

let touched = 0;
for (const dir of [".", "en", "de", "fr"]) {
  for (const name of readdirSync(join(root, dir))) {
    if (!name.endsWith(".html")) continue;
    const relative = dir === "." ? name : `${dir}/${name}`;
    const filePath = join(root, relative);
    let html = readFileSync(filePath, "utf8");
    const hasArticle = /"@type":\s*"Article"/.test(html);
    if (!hasArticle && !html.includes('"dateModified"')) continue;

    const pub = firstPublished(relative);
    let mod = lastEditorialChange(relative);
    if (!pub) continue;
    if (!mod || mod < pub) mod = pub;

    const before = html;

    // Aggiorna i dateModified esistenti con la data git reale
    html = html.replace(/"dateModified":(\s*)"[^"]*"/g, `"dateModified":$1"${mod}"`);

    // Aggiungi datePublished/dateModified al primo blocco Article se mancanti
    const hasPub = html.includes('"datePublished"');
    const hasMod = html.includes('"dateModified"');
    if (hasArticle && (!hasPub || !hasMod)) {
      let insert = "";
      if (!hasPub) insert += `"datePublished":"${pub}",`;
      if (!hasMod) insert += `"dateModified":"${mod}",`;
      let done = false;
      html = html.replace(/"@type":(\s*)"Article",/, (match) => {
        if (done) return match;
        done = true;
        return `${match}${insert}`;
      });
    }

    if (html !== before) {
      writeFileSync(filePath, html, "utf8");
      touched += 1;
      console.log(`${relative}: datePublished=${pub} dateModified=${mod}`);
    }
  }
}
console.log(`Totale pagine aggiornate: ${touched}`);
