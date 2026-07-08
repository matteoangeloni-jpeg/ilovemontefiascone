import json, re, sys, os

BASE = os.getcwd()
FR_DIR = os.path.join(BASE, "fr")

FILES = [
"index.html","guide.html","que-voir-montefiascone-guide-complet.html","carte.html",
"lac-de-bolsena-que-voir.html","via-francigena-bolsena-montefiascone.html",
"montefiascone-en-2-jours.html","evenements.html",
"calendrier-des-evenements-de-montefiascone.html",
"evenements-dete-a-montefiascone-2026.html",
"evenements-traditions-foire-aux-vins-de-montefiascone.html",
"festival-atb-montefiascone.html","est-festival-du-film-de-montefiascone.html",
"festival-decologie-integrale-de-montefiascone.html",
"anno-domini-1074-montefiascone.html","fete-de-santa-margherita-montefiascone.html",
"vin.html","est-est-est-montefiascone-vino-doc.html",
"degustation-de-vin-de-montefiascone-comment-ca-marche.html",
"degustation-de-vignobles-de-montefiascone-est-est-est.html",
"strada-del-vino-est-est-est-est-est-montefiascone.html",
"cuisine-typique-de-montefiascone.html",
"produits-typiques-de-montefiascone-tuscia.html",
"experiences-gastronomiques-et-nologiques-a-montefiascone.html",
"giglio-vecchio-montefiascone.html","projet-editorial.html",
]

def slug_for(f):
    if f == "index.html":
        return "/fr/"
    return "/fr/" + f[:-5]

results = {}
for f in FILES:
    path = os.path.join(FR_DIR, f)
    if not os.path.exists(path):
        results[f] = {"error": "FILE MISSING"}
        continue
    html = open(path, encoding="utf-8").read()
    rec = {}

    # canonical
    m = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]*>', html)
    rec["canonical_tag"] = m.group(0) if m else None
    m2 = re.search(r'href=["\']([^"\']+)["\']', rec["canonical_tag"]) if rec["canonical_tag"] else None
    rec["canonical_href"] = m2.group(1) if m2 else None

    # hreflang
    hreflangs = re.findall(r'<link[^>]+hreflang=["\']([^"\']+)["\'][^>]*href=["\']([^"\']+)["\'][^>]*>', html)
    # also match href before hreflang attr order
    hreflangs2 = re.findall(r'<link[^>]+href=["\']([^"\']+)["\'][^>]+hreflang=["\']([^"\']+)["\'][^>]*>', html)
    combined = [(h,u) for h,u in hreflangs] + [(h,u) for u,h in hreflangs2]
    rec["hreflang"] = combined

    # og tags
    for prop in ["og:url","og:locale","og:locale:alternate","og:type","og:title","og:image"]:
        vals = re.findall(r'<meta[^>]+property=["\']'+re.escape(prop)+r'["\'][^>]+content=["\']([^"\']*)["\']', html)
        if not vals:
            vals = re.findall(r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+property=["\']'+re.escape(prop)+r'["\']', html)
        rec["og:"+prop.split(":",1)[1] if ":" in prop else prop] = vals

    # lang attr
    m = re.search(r'<html[^>]+lang=["\']([^"\']+)["\']', html)
    rec["html_lang"] = m.group(1) if m else None

    # title & meta description
    m = re.search(r'<title>(.*?)</title>', html, re.S)
    rec["title"] = m.group(1).strip() if m else None
    m = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', html)
    rec["meta_description"] = m.group(1) if m else None

    # JSON-LD blocks
    scripts = re.findall(r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.S)
    ld_results = []
    for s in scripts:
        s_stripped = s.strip()
        try:
            data = json.loads(s_stripped)
            ld_results.append({"valid": True, "data": data})
        except Exception as e:
            ld_results.append({"valid": False, "error": str(e), "raw_snippet": s_stripped[:200]})
    rec["jsonld"] = ld_results
    rec["jsonld_count"] = len(scripts)

    # breadcrumb nav presence
    rec["has_breadcrumb_nav"] = bool(re.search(r'breadcrumb', html, re.I))

    # word count of visible-ish text (very rough, strip tags)
    text_only = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.S)
    text_only = re.sub(r'<style[^>]*>.*?</style>', ' ', text_only, flags=re.S)
    text_only = re.sub(r'<[^>]+>', ' ', text_only)
    text_only = re.sub(r'\s+', ' ', text_only).strip()
    rec["approx_wordcount"] = len(text_only.split())

    # internal fr links count vs other-lang links
    fr_links = len(re.findall(r'href=["\']/fr/', html))
    other_lang_links = len(re.findall(r'href=["\'](?:https?://[^"\']*)?/(en|de|it)?/', html))
    rec["fr_internal_link_count"] = fr_links

    results[f] = rec

out_path = os.path.join(BASE, "scripts", "_audit_fr_output.json")
with open(out_path, "w", encoding="utf-8") as fh:
    json.dump(results, fh, ensure_ascii=False, indent=2)

print("Wrote", out_path)
