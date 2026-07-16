import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");

const AUTHOR_NAME = "Matteo Angeloni";

const files = [
  { path: "basilica-san-flaviano-montefiascone.html", url: "https://www.ilovemontefiascone.com/about-matteo-angeloni" },
  { path: "caprarola-palazzo-farnese-da-montefiascone.html", url: "https://www.ilovemontefiascone.com/about-matteo-angeloni" },
  { path: "cattedrale-santa-margherita-montefiascone.html", url: "https://www.ilovemontefiascone.com/about-matteo-angeloni" },
  { path: "cosa-vedere.html", url: "https://www.ilovemontefiascone.com/about-matteo-angeloni" },
  { path: "rocca-dei-papi-montefiascone.html", url: "https://www.ilovemontefiascone.com/about-matteo-angeloni" },
  { path: "villa-lante-bagnaia-da-montefiascone.html", url: "https://www.ilovemontefiascone.com/about-matteo-angeloni" },
  { path: "en/rocca-dei-papi-montefiascone.html", url: "https://www.ilovemontefiascone.com/en/about-matteo-angeloni" },
  { path: "en/what-to-see-montefiascone.html", url: "https://www.ilovemontefiascone.com/en/about-matteo-angeloni" },
  { path: "en/things-to-see-montefiascone.html", url: "https://www.ilovemontefiascone.com/en/about-matteo-angeloni" },
  { path: "de/basilika-san-flaviano-montefiascone.html", url: "https://www.ilovemontefiascone.com/de/ueber-matteo-angeloni" },
  { path: "de/kathedrale-santa-margherita-montefiascone.html", url: "https://www.ilovemontefiascone.com/de/ueber-matteo-angeloni" },
  { path: "de/rocca-dei-papi-montefiascone.html", url: "https://www.ilovemontefiascone.com/de/ueber-matteo-angeloni" },
  { path: "de/was-sehen-montefiascone.html", url: "https://www.ilovemontefiascone.com/de/ueber-matteo-angeloni" },
];

let fixed = 0;
let skipped = 0;

for (const { path: relPath, url } of files) {
  const filePath = join(root, relPath);
  let html = readFileSync(filePath, "utf8");

  if (/"@graph"\s*:\s*\[\s*\{[^}]*"author"\s*:/.test(html.slice(0, html.indexOf("@graph") + 400))) {
    console.log(`${relPath}: gia' ha un author sul primo nodo, salto`);
    skipped += 1;
    continue;
  }

  // Match the first node object inside @graph: from "@graph": [ { ... up to its matching top-level field list,
  // simplified by inserting right after the first "@type": "X", line following "@graph": [
  const graphIdx = html.indexOf('"@graph"');
  if (graphIdx === -1) {
    console.log(`${relPath}: nessun @graph trovato, salto`);
    skipped += 1;
    continue;
  }

  const afterGraph = html.slice(graphIdx);
  const typeMatch = /^[\s\S]*?\{\s*\r?\n(\s*)"@type":\s*"[^"]+",\s*\r?\n/.exec(afterGraph);
  if (!typeMatch) {
    console.log(`${relPath}: pattern primo nodo non riconosciuto, salto`);
    skipped += 1;
    continue;
  }

  const indent = typeMatch[1];
  const insertion = `${indent}"author": {\n${indent}  "@type": "Person",\n${indent}  "name": "${AUTHOR_NAME}",\n${indent}  "url": "${url}"\n${indent}},\n`;
  const insertAt = graphIdx + typeMatch[0].length;
  html = html.slice(0, insertAt) + insertion + html.slice(insertAt);

  writeFileSync(filePath, html, "utf8");
  console.log(`${relPath}: author aggiunto`);
  fixed += 1;
}

console.log(`\nTotale: ${fixed} file corretti, ${skipped} saltati.`);
