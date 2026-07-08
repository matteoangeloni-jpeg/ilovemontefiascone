#!/bin/bash

# Generate sitemap-fr.xml with all 98 FR pages
DOMAIN="https://www.ilovemontefiascone.com/fr"
OUTPUT="sitemap-fr.xml"
TODAY=$(date -u +"%Y-%m-%d")

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  
  # Add homepage
  echo "  <url>"
  echo "    <loc>${DOMAIN}/</loc>"
  echo "    <lastmod>${TODAY}</lastmod>"
  echo "    <priority>1.0</priority>"
  echo "  </url>"
  
  # Add all FR HTML files
  for file in fr/*.html; do
    # Remove directory prefix and .html extension
    slug=$(basename "$file" .html)
    url="${DOMAIN}/${slug}"
    
    echo "  <url>"
    echo "    <loc>${url}</loc>"
    echo "    <lastmod>${TODAY}</lastmod>"
    echo "    <priority>0.8</priority>"
    echo "  </url>"
  done
  
  echo '</urlset>'
} > "$OUTPUT"

# Count URLs
count=$(grep -c "<loc>" "$OUTPUT")
echo "Generated $OUTPUT with $count URLs"
