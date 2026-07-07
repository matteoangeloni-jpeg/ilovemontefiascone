import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");

function pngSize(buf) {
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset < buf.length - 9) {
    if (buf[offset] !== 0xff) { offset += 1; continue; }
    const marker = buf[offset + 1];
    // SOF0-SOF15 tranne DHT (C4), DNL (C8), DAC (CC)
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { width: buf.readUInt16BE(offset + 7), height: buf.readUInt16BE(offset + 5) };
    }
    const length = buf.readUInt16BE(offset + 2);
    if (length < 2) return null;
    offset += 2 + length;
  }
  return null;
}

const sizeCache = new Map();
function imageSize(srcPath) {
  if (sizeCache.has(srcPath)) return sizeCache.get(srcPath);
  const absolute = join(root, srcPath.replace(/^\//, ""));
  let size = null;
  if (existsSync(absolute)) {
    const buf = readFileSync(absolute);
    size = srcPath.endsWith(".png") ? pngSize(buf) : jpegSize(buf);
  }
  sizeCache.set(srcPath, size);
  return size;
}

let totalFixed = 0;
for (const dir of [".", "en", "de", "fr"]) {
  for (const name of readdirSync(join(root, dir))) {
    if (!name.endsWith(".html")) continue;
    const filePath = join(root, dir, name);
    let html = readFileSync(filePath, "utf8");
    let fixed = 0;
    html = html.replace(/<img\b[^>]*>/g, (tag) => {
      const hasW = /\bwidth=/.test(tag);
      const hasH = /\bheight=/.test(tag);
      if (hasW && hasH) return tag;
      const srcMatch = tag.match(/src="([^"]+)"/);
      if (!srcMatch) return tag; // img dinamiche (lightbox) senza src statico
      const size = imageSize(srcMatch[1]);
      if (!size) { console.warn(`  dimensioni non lette: ${srcMatch[1]}`); return tag; }
      let out = tag;
      if (!hasW && !hasH) {
        out = out.replace(/^<img\b/, `<img width="${size.width}" height="${size.height}"`);
      } else if (hasW && !hasH) {
        const w = Number((tag.match(/\bwidth="(\d+)"/) || [])[1]);
        const h = w ? Math.round((w * size.height) / size.width) : size.height;
        out = out.replace(/\bwidth="(\d+)"/, `width="$1" height="${h}"`);
      } else {
        const h = Number((tag.match(/\bheight="(\d+)"/) || [])[1]);
        const w = h ? Math.round((h * size.width) / size.height) : size.width;
        out = out.replace(/\bheight="(\d+)"/, `width="${w}" height="$1"`);
      }
      fixed += 1;
      return out;
    });
    if (fixed > 0) {
      writeFileSync(filePath, html, "utf8");
      console.log(`${join(dir, name)}: ${fixed} immagini corrette`);
      totalFixed += fixed;
    }
  }
}
console.log(`Totale: ${totalFixed} immagini con width/height aggiunti`);
