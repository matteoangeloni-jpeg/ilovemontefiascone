$ErrorActionPreference = "Stop"

$root = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
$outputDir = Join-Path $root "dist-it"

$technicalRootFiles = @(
  "404.html",
  "cookie.html",
  "offline.html",
  "privacy.html"
)

$supportRootFiles = @(
  "llms.txt",
  "manifest.json",
  "pwa-boot.js",
  "robots.txt",
  "sitemap.xml",
  "sitemap-it.xml",
  "sitemap-en.xml",
  "sitemap-de.xml",
  "_redirects",
  "sw.js"
)

$nonPublicRootHtml = @(
  "base.html",
  "cruscotto-del-viaggiatore-widget.html",
  "giglio-vecchio-montefiascone.html",
  "mappa-topografica-montefiascone-leaflet.html",
  "quiz-itinerario-tuscia-widget.html"
)

$nonPublicEnHtml = @(
  "en/how-many-days-in-montefiascone.html",
  "en/where-to-stay-around-lake-bolsena.html",
  "en/where-to-stay-montefiascone-vs-bolsena-viterbo.html"
)

$rootFiles = @(
  @(Get-ChildItem -Path $root -File -Filter "*.html" |
    Where-Object { $_.Name -notin ($technicalRootFiles + $nonPublicRootHtml) } |
    Sort-Object Name |
    ForEach-Object { $_.Name }) +
  $technicalRootFiles +
  $supportRootFiles
)

$enFiles = @(
  Get-ChildItem -Path (Join-Path $root "en") -File -Filter "*.html" |
    Where-Object { ("en/" + $_.Name) -notin $nonPublicEnHtml } |
    Sort-Object Name |
    ForEach-Object { "en/" + $_.Name }
)

$deFiles = @(
  Get-ChildItem -Path (Join-Path $root "de") -File -Filter "*.html" |
    Sort-Object Name |
    ForEach-Object { "de/" + $_.Name }
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

Write-Host ("Strict trilingual package created in {0} (IT: {1}, EN: {2}, DE: {3})" -f $outputDir, ($rootFiles.Count - $technicalRootFiles.Count - $supportRootFiles.Count), $enFiles.Count, $deFiles.Count)
