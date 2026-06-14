$ErrorActionPreference = "Stop"

$root = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
$outputDir = Join-Path $root "dist-it"

$rootFiles = @(
  "civita-di-bagnoregio-da-montefiascone.html",
  "lago-di-bolsena-con-bambini.html",
  "lago-di-bolsena-cosa-vedere.html",
  "lago-di-bolsena-in-un-giorno.html",
  "borghi-piu-belli-lago-di-bolsena.html",
  "bolsena-cosa-vedere.html",
  "marta-lago-di-bolsena-cosa-vedere.html",
  "capodimonte-lago-di-bolsena-cosa-vedere.html",
  "terme-viterbo-da-montefiascone.html",
  "itinerario-auto-lago-di-bolsena.html",
  "come-arrivare-a-montefiascone.html",
  "parcheggi-montefiascone.html",
  "informazioni-turistiche-montefiascone.html",
  "quando-visitare-montefiascone.html",
  "lago-di-bolsena.html",
  "spiagge-lago-di-bolsena.html",
  "borghi-lago-di-bolsena.html",
  "montefiascone-in-un-giorno.html",
  "weekend-a-montefiascone.html",
  "via-francigena-montefiascone-viterbo.html",
  "itinerario-fotografico-montefiascone.html",
  "montefiascone-con-bambini-famiglie.html",
  "rocca-dei-papi-montefiascone.html",
  "cattedrale-santa-margherita-montefiascone.html",
  "basilica-san-flaviano-montefiascone.html",
  "est-est-est-montefiascone-vino-doc.html",
  "prodotti-tipici-montefiascone-tuscia.html",
  "cucina-tipica-montefiascone.html",
  "dove-dormire-a-montefiascone.html",
  "dove-mangiare-a-montefiascone.html",
  "sitemap-it.xml",
  "404.html",
  "associazioni-volontariato-montefiascone.html",
  "cantine-montefiascone-degustazione-est-est-est.html",
  "cookie.html",
  "cosa-vedere-dintorni-montefiascone-itinerario.html",
  "cosa-vedere-montefiascone-guida-completa.html",
  "cosa-vedere.html",
  "cronoscalata-montefiascone-coppa-citta.html",
  "enogastronomia-ricette-tipiche-montefiascone.html",
  "eventi-tradizioni-fiera-del-vino-montefiascone.html",
  "eventi.html",
  "galleria.html",
  "guide.html",
  "index.html",
  "itinerari-tematici-montefiascone.html",
  "manifest.json",
  "mappa.html",
  "montefiascone-lago-bolsena-spot-fotografici-aerei.html",
  "monumenti-minori-chiese-storiche-montefiascone.html",
  "offline.html",
  "privacy.html",
  "progetto-editoriale.html",
  "pwa-boot.js",
  "robots.txt",
  "sitemap.xml",
  "sw.js",
  "vino.html"
)

$directories = @(
  "assets",
  "css",
  "icons",
  "js",
  "media"
)

if (Test-Path $outputDir) {
  Remove-Item -LiteralPath $outputDir -Recurse -Force
}

New-Item -ItemType Directory -Path $outputDir | Out-Null

foreach ($file in $rootFiles) {
  $source = Join-Path $root $file
  if (-not (Test-Path $source)) {
    throw "Missing required file: $file"
  }
  Copy-Item -LiteralPath $source -Destination (Join-Path $outputDir $file) -Force
}

foreach ($directory in $directories) {
  $source = Join-Path $root $directory
  if (-not (Test-Path $source)) {
    throw "Missing required directory: $directory"
  }
  Copy-Item -LiteralPath $source -Destination (Join-Path $outputDir $directory) -Recurse -Force
}

Write-Host "Soft launch package created in $outputDir"
