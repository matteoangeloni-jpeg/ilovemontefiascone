import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const outputDir = join(root, "dist-it");

function readPowerShellArray(source, name) {
  const match = source.match(new RegExp(`\\$${name}\\s*=\\s*@\\(([^]*?)\\)`, "m"));
  if (!match) {
    throw new Error(`Missing ${name} array in build-soft-launch-it.ps1`);
  }

  return [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]);
}

const psBuild = readFileSync(join(root, "build-soft-launch-it.ps1"), "utf8");
const rootFiles = readPowerShellArray(psBuild, "rootFiles");
const enFiles = readPowerShellArray(psBuild, "enFiles");
const directories = readPowerShellArray(psBuild, "directories");
const deFiles = readPowerShellArray(psBuild, "deFiles");

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

for (const file of enFiles) {
  const source = join(root, file);
  if (!existsSync(source)) {
    throw new Error(`Missing required EN perimeter file: ${file}`);
  }

  const destination = join(outputDir, file);
  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination, { force: true });
}

for (const file of deFiles) {
  const source = join(root, file);
  if (!existsSync(source)) {
    throw new Error(`Missing required DE perimeter file: ${file}`);
  }

  const destination = join(outputDir, file);
  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination, { force: true });
}

console.log(`Cloudflare package created in ${outputDir}`);
