$ErrorActionPreference = "Stop"

$root = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
$outputDir = Join-Path $root "dist-it"

# Public production perimeter: only the validated 32 IT / 32 EN / 32 DE pages.
$rootFiles = @(
  "associazioni-volontariato-montefiascone.html",
  "basilica-san-flaviano-montefiascone.html",
  "cantine-montefiascone-degustazione-est-est-est.html",
  "cattedrale-santa-margherita-montefiascone.html",
  "cosa-vedere-montefiascone-guida-completa.html",
  "rocca-dei-papi-montefiascone.html",
  "index.html",
  "guide.html",
  "lago-di-bolsena.html",
  "mappa.html",
  "vino.html",
  "anno-domini-1074-montefiascone.html",
  "borghi-piu-belli-lago-di-bolsena.html",
  "capodimonte-lago-di-bolsena-cosa-vedere.html",
  "civita-di-bagnoregio-da-montefiascone.html",
  "est-est-est-montefiascone-vino-doc.html",
  "lago-di-bolsena-cosa-vedere.html",
  "lago-di-bolsena-in-un-giorno.html",
  "marta-lago-di-bolsena-cosa-vedere.html",
  "viterbo-da-montefiascone.html",
  "lago-di-bolsena-in-2-giorni.html",
  "bolsena-cosa-vedere.html",
  "montefiascone-con-bambini-famiglie.html",
  "montefiascone-in-un-giorno.html",
  "quando-visitare-montefiascone.html",
  "come-arrivare-a-montefiascone.html",
  "dove-dormire-a-montefiascone.html",
  "dove-mangiare-a-montefiascone.html",
  "informazioni-turistiche-montefiascone.html",
  "parcheggi-montefiascone.html",
  "montefiascone-in-2-giorni.html",
  "weekend-a-montefiascone.html",
  "404.html",
  "cookie.html",
  "llms.txt",
  "manifest.json",
  "offline.html",
  "privacy.html",
  "pwa-boot.js",
  "robots.txt",
  "sitemap.xml",
  "sitemap-it.xml",
  "sitemap-en.xml",
  "sitemap-de.xml",
  "_redirects",
  "sw.js"
)

$enFiles = @(
  "en/associations-volunteering-montefiascone.html",
  "en/basilica-san-flaviano-montefiascone.html",
  "en/wine-tasting-montefiascone-est-est-est.html",
  "en/cathedral-santa-margherita-montefiascone.html",
  "en/things-to-see-montefiascone.html",
  "en/rocca-dei-papi-montefiascone.html",
  "en/index.html",
  "en/montefiascone-travel-guide.html",
  "en/lake-bolsena.html",
  "en/map-montefiascone.html",
  "en/montefiascone-wine-guide.html",
  "en/anno-domini-1074-montefiascone.html",
  "en/best-villages-on-lake-bolsena.html",
  "en/capodimonte-lake-bolsena-things-to-see.html",
  "en/civita-di-bagnoregio-from-montefiascone.html",
  "en/est-est-est-montefiascone-doc-wine.html",
  "en/what-to-see-on-lake-bolsena.html",
  "en/lake-bolsena-in-one-day.html",
  "en/marta-lake-bolsena-things-to-see.html",
  "en/viterbo-from-montefiascone.html",
  "en/lake-bolsena-in-two-days.html",
  "en/bolsena-things-to-see.html",
  "en/montefiascone-with-kids.html",
  "en/montefiascone-in-one-day.html",
  "en/best-time-to-visit-montefiascone.html",
  "en/how-to-get-to-montefiascone.html",
  "en/where-to-stay-in-montefiascone.html",
  "en/where-to-eat-in-montefiascone.html",
  "en/tourist-information-montefiascone.html",
  "en/parking-in-montefiascone.html",
  "en/montefiascone-in-two-days.html",
  "en/weekend-in-montefiascone.html"
)

$deFiles = @(
  "de/vereine-ehrenamt-montefiascone.html",
  "de/basilika-san-flaviano-montefiascone.html",
  "de/weingueter-montefiascone-verkostung.html",
  "de/kathedrale-santa-margherita-montefiascone.html",
  "de/sehenswuerdigkeiten-montefiascone.html",
  "de/rocca-dei-papi-montefiascone.html",
  "de/index.html",
  "de/reisefuehrer-montefiascone.html",
  "de/bolsenasee.html",
  "de/karte-montefiascone.html",
  "de/montefiascone-wein-guide.html",
  "de/anno-domini-1074-montefiascone.html",
  "de/schoenste-orte-am-bolsenasee.html",
  "de/capodimonte-bolsenasee-sehenswuerdigkeiten.html",
  "de/civita-di-bagnoregio-ab-montefiascone.html",
  "de/est-est-est-wein-montefiascone.html",
  "de/bolsenasee-sehenswuerdigkeiten.html",
  "de/bolsenasee-an-einem-tag.html",
  "de/marta-bolsenasee-sehenswuerdigkeiten.html",
  "de/viterbo-ab-montefiascone.html",
  "de/bolsenasee-in-zwei-tagen.html",
  "de/bolsena-sehenswuerdigkeiten.html",
  "de/montefiascone-mit-kindern.html",
  "de/montefiascone-an-einem-tag.html",
  "de/beste-reisezeit-montefiascone.html",
  "de/anreise-nach-montefiascone.html",
  "de/unterkunft-in-montefiascone.html",
  "de/essen-in-montefiascone.html",
  "de/touristeninformation-montefiascone.html",
  "de/parken-in-montefiascone.html",
  "de/montefiascone-in-zwei-tagen.html",
  "de/wochenende-in-montefiascone.html"
)

$directories = @(
  "assets",
  "css",
  "icons",
  "js",
  "media"
)

function Copy-PublicFile($file) {
  $source = Join-Path $root $file
  if (-not (Test-Path $source)) {
    throw "Missing required public file: $file"
  }

  $destination = Join-Path $outputDir $file
  $destinationDir = Split-Path -Parent $destination
  if ($destinationDir -and -not (Test-Path $destinationDir)) {
    New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
  }

  Copy-Item -LiteralPath $source -Destination $destination -Force
}

if (Test-Path $outputDir) {
  Remove-Item -LiteralPath $outputDir -Recurse -Force
}

New-Item -ItemType Directory -Path $outputDir | Out-Null

foreach ($file in $rootFiles) { Copy-PublicFile $file }
foreach ($file in $enFiles) { Copy-PublicFile $file }
foreach ($file in $deFiles) { Copy-PublicFile $file }

foreach ($directory in $directories) {
  $source = Join-Path $root $directory
  if (-not (Test-Path $source)) {
    throw "Missing required directory: $directory"
  }
  Copy-Item -LiteralPath $source -Destination (Join-Path $outputDir $directory) -Recurse -Force
}

Write-Host "Strict trilingual package created in $outputDir"
