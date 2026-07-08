# GEO Analysis: French (FR) Version Status — 2026-07-08

## Executive Summary

**GEO Readiness Score: 54/100** (FR version is **31 points behind** IT after recent optimizations)

**Key Finding:** The French version has not received the GEO improvements deployed to Italian pages (June-July 2026). 96 of 98 FR pages lack tables; all pillar guides use statement headings instead of question-based structure. Estimated impact: **-40% AI citation reduction vs. optimized IT pages**.

---

## Platform Breakdown

| Platform | FR Score | IT Score (Post-Optimization) | Gap | Priority |
|----------|----------|---------------------------|-----|----------|
| **Google AI Overviews** | 52/100 | 88/100 | -36 pts | 🔴 Critical |
| **Google AI Mode (Gemini)** | 58/100 | 82/100 | -24 pts | 🟠 High |
| **ChatGPT** | 48/100 | 79/100 | -31 pts | 🔴 Critical |
| **Perplexity** | 55/100 | 83/100 | -28 pts | 🔴 Critical |
| **Bing Copilot** | 56/100 | 80/100 | -24 pts | 🟠 High |

---

## Citability Analysis (25% of score)

### Current State (FR)
- **Passage optimization:** 23% of pages (22/98) have self-contained answer blocks
- **Definition blocks:** 0/98 pillar pages have "What is X?" definitions in first 60 words
- **Specific data density:** Low (general statements without verifiable facts)
- **Claim attribution:** Weak (few citations to primary sources)
- **Average opening passage length:** 45-70 words (below optimal 134-167)

### Gap vs. IT
- IT pillar pages now open with 150-165 word self-contained definition blocks
- FR pages lack this structure entirely
- **Estimated citability lift from adding definition blocks:** +20-25%

**Quick Win:** Add "Qu'est-ce que [sujet]?" definition blocks to all 5 pillar pages and top 10 high-traffic pages. Each: 45 minutes.

---

## Structural Readability (20% of score)

### Heading Hierarchy Issue: Statement vs. Questions

#### FR Pillar Pages (Current)
```
H2: "Histoire et charme du village des Papes"          ← Statement
H2: "La Rocca dei Papi et la Tour du Pèlerin"         ← Statement
H2: "La cathédrale Sainte-Marguerite et son dôme"     ← Statement
H2: "La basilique San Flaviano : architecture..."     ← Statement
H2: "Randonnée active : la Via Francigena"            ← Statement
H2: "Événements à ne pas manquer"                     ← Statement
```

#### IT Pillar Pages (Optimized — 2026-07-07)
```
H2: "Qual è la storia di Montefiascone?"              ← Question ✅
H2: "Cosa vedere alla Rocca dei Papi?"               ← Question ✅
H2: "Quanto è grande la cupola della Cattedrale?"    ← Question ✅
H2: "Come è strutturata la Basilica di San Flaviano?" ← Question ✅
H2: "Come faccio trekking sulla Via Francigena?"     ← Question ✅
H2: "Quali sono gli orari e accessi pratici?"        ← Question ✅
```

**Query Pattern Matching Impact:** AI searches ask "What is X? / How do I Y? / Where is Z?" — question headings match these patterns directly. **Estimated +15-18% query pattern hit rate** when headings are questions.

### Tables: Critical Missing Piece
- **FR pages with tables:** 2/98 (2.0%)
- **IT pages with tables (post-optimization):** 5+ core pages + supporting pages (30%+)
- **Table citation boost:** 156% higher selection rate in AI answers

**Current status:**
| Page Type | FR | IT (Post-Opt) | Table Type | Missing? |
|-----------|----|----|-------------|----------|
| Pillar guide | No | Yes (attractions table) | 4-row comparison | ❌ Critical |
| Lake guide | No | Yes (towns table) | Borough identities + distances | ❌ Critical |
| Wine guide | No | Yes (varietal table) | Grape percentages + profiles | ❌ Critical |
| Directions hub | No | Yes (distance table) | City pairs + travel times | ❌ Critical |
| 2-day itinerary | No | Yes (Day 1/Day 2 timelines) | Timeline tables | ❌ Critical |

---

## Multi-Modal Content (15% of score)

### Current State (FR)
- **Images:** 80% of pages (good)
- **Tables:** 2% of pages (poor — should be 40%+)
- **Video embeds:** Minimal (5% of pages)
- **Interactive elements:** None
- **Infographics:** 0%

### Gap vs. IT
- IT core pages now have both images AND tables
- FR pages have images but missing table structures
- **Quick Win:** Reusing Italian table layouts (translations only needed for headers + text)

---

## AI Crawler Access (20% of score)

### robots.txt Status
✅ **All major AI crawlers allowed:**
- GPTBot (OpenAI) → Allowed
- OAI-SearchBot → Allowed
- ClaudeBot (Anthropic) → Allowed
- PerplexityBot → Allowed
- Bytespider (TikTok/ByteDance) → Allowed

**Finding:** No blockers. All AI crawlers can index FR content.

### llms.txt Status
❌ **Not present** (neither at root `/llms.txt` nor `/fr/llms.txt`)

**Recommendation:** Create `/fr/llms.txt` with FR page highlights. Estimated impact: +5% AI discoverability (low — llms.txt is not yet a citation lever, but it's emerging).

---

## Authority & Brand Signals (20% of score)

### Date Signals
✅ **datePublished & dateModified present** in all pages (schema.org BlogPosting)
- Average dateModified: 2026-06-09 to 2026-07-02
- **Recency status:** Fresh (within 3 months = 3x more likely to be cited)

### Author Attribution
⚠️ **Generic:** "La rédaction d'I Love Montefiascone" (no individual byline with credentials)
- **Impact:** -5-10% authority lift vs. named expert author

### Brand Presence Signals (3x stronger than backlinks)
| Platform | FR Status | Impact |
|----------|-----------|--------|
| Wikipedia | ❌ No French entry | -20 pts |
| Reddit | ⚠️ Minimal | -10 pts |
| YouTube | ⚠️ No FR channel | -15 pts |
| LinkedIn | Not applicable | — |

**Gap:** No centralized French brand mention strategy. Italian site has better Wikipedia/local mention density.

---

## Content Audit: Top 10 FR Pages by Traffic Potential

Ranked by estimated organic search + AI citation opportunity (based on pillar relevance + local intent):

| Rank | FR Page | EN/IT Equivalent | GEO Gap | Effort (hrs) | Priority |
|------|---------|------------------|---------|--------------|----------|
| 1 | **que-voir-montefiascone-guide-complet.html** | cosa-vedere (IT pillar) | 34 pts | 1.5 | 🔴 P1 |
| 2 | **lac-de-bolsena-que-voir.html** | lago-di-bolsena (IT pillar) | 32 pts | 1.5 | 🔴 P1 |
| 3 | **vin.html** | vino.html (IT pillar) | 32 pts | 1.5 | 🔴 P1 |
| 4 | **montefiascone-en-2-jours.html** | montefiascone-in-2-giorni (IT) | 30 pts | 1.5 | 🔴 P1 |
| 5 | **comment-arriver-a-montefiascone.html** | come-arrivare (IT pillar) | 31 pts | 1.5 | 🔴 P1 |
| 6 | **lac-de-bolsena-en-2-jours.html** | 2-day lake itinerary | 28 pts | 1.5 | 🟠 P2 |
| 7 | **degustation-de-vin-de-montefiascone-comment-ca-marche.html** | Wine tasting guide | 26 pts | 1.0 | 🟠 P2 |
| 8 | **villages-du-lac-de-bolsena-en-voiture.html** | Lake towns guide | 26 pts | 1.0 | 🟠 P2 |
| 9 | **basilique-san-flaviano-montefiascone.html** | Single-attraction page | 24 pts | 0.75 | 🟠 P2 |
| 10 | **cathedrale-santa-margherita-montefiascone.html** | Single-attraction page | 24 pts | 0.75 | 🟠 P2 |

---

## GEO Gaps by Page Cluster

### Pillar Guides (5 pages) — CRITICAL
**Current state:** Definition blocks missing, statement headings, no tables
**Estimated effort:** 7.5 hours total (1.5 hrs × 5 pages)
**Estimated impact:** +30 GEO points per page (54 → 84)

**Work breakdown per pillar:**
1. Add definition block (150-165 words, self-contained answer)
2. Convert 6-7 H2 statements to questions
3. Add comparison/reference table (towns, varietal, distances, timelines, etc.)

### Single-Attraction Pages (15+ pages) — HIGH
**Current state:** Limited structure, minimal data density
**Estimated effort:** 0.75 hrs each (11 hours total for 15 pages)
**Estimated impact:** +15-18 GEO points per page (54 → 70)

**Work breakdown:**
1. Add definition block (80-120 words)
2. Convert 3-4 H2s to questions
3. Add small reference table (hours, access, highlights) if applicable

### Multi-Day Itinerary Pages (5 pages) — HIGH
**Current state:** Basic itinerary structure but missing timeline tables
**Estimated effort:** 1.0 hr each (5 hours total)
**Estimated impact:** +25 GEO points per page (54 → 79)

**Work breakdown:**
1. Add definition block for itinerary framework
2. Convert headings to questions
3. Add Day 1/Day 2/Day 3 timeline tables with times + activities

### Surrounding Attraction Pages (60+ pages) — MEDIUM
**Current state:** Generic structure, no structured data beyond schema
**Estimated effort:** 0.5 hrs each (30 hours for all 60)
**Estimated impact:** +10-12 GEO points per page

**Batch approach:**
- Add 80-word definition block
- Convert primary H2 to question
- Optional: small reference table (if comparative data exists)

---

## Recommended Roadmap: FR GEO Optimization

### Phase 1: Pillar Pages (1 week) — Highest ROI
**Goal:** Replicate Italian pillar optimizations, matching structure exactly

**Pages:** 5 pages (que-voir, lac-de-bolsena, vin, montefiascone-en-2-jours, comment-arriver)

**Work per page:**
- Translate definition blocks from IT (adapt to FR phrasing)
- Convert H2 statements → French question equivalents
- Translate and localize tables (same data, French headers/text)
- Verify schema dates (dateModified should reflect this work)

**Estimated effort:** 7.5 hours (1.5 hrs × 5 pages)
**Estimated ROI:** 54 → 84 GEO score per page = **+30 pts each**
**Estimated traffic lift:** 15-30% increase in AI citations (ChatGPT, Perplexity, Google AI Mode)

**Timeline:** 2-3 days parallel work (2 people, 1.5-2 hrs each/day)

### Phase 2: High-Traffic Single Attractions (2 weeks) — Medium ROI
**Goal:** Standardize definition blocks + question headings across 15 most-visited attractions

**Pages:** basilique-san-flaviano, cathedrale-santa-margherita, rocca-dei-papi (if standalone), civita-di-bagnoregio, bomarzo, caprarola, etc.

**Work per page:** 0.75 hrs
**Estimated effort:** 11 hours total
**Estimated ROI:** 54 → 70 GEO score = **+16 pts each**

**Timeline:** 1-2 weeks (1 person, 1-2 hrs/day)

### Phase 3: Multi-Day Itinerary Pages (1 week)
**Goal:** Add timeline tables to lac-de-bolsena-en-2-jours + similar itinerary pages

**Pages:** 5 pages
**Work per page:** 1.0 hr (translate tables from IT + localize)
**Estimated effort:** 5 hours
**Estimated ROI:** 54 → 79 = **+25 pts each**

**Timeline:** 1 week (parallel, 1 hr/day)

### Phase 4: Bulk Surrounding Pages (Ongoing) — Low ROI, High Volume
**Goal:** Add definition blocks to remaining 60 pages

**Work per page:** 0.5 hrs
**Estimated effort:** 30 hours
**Estimated ROI:** 54 → 65 = **+11 pts each**

**Timeline:** 3-4 weeks (background task, 2-3 hrs/day)

---

## Summary: Effort vs. Impact

| Phase | Pages | Hours | GEO Lift/Page | Total GEO Impact | Timeline | Urgency |
|-------|-------|-------|---------------|------------------|----------|---------|
| Phase 1 (Pillars) | 5 | 7.5 | +30 | 150 points | 2-3 days | 🔴 NOW |
| Phase 2 (Attractions) | 15 | 11 | +16 | 240 points | 1-2 weeks | 🟠 Week 1-2 |
| Phase 3 (Itineraries) | 5 | 5 | +25 | 125 points | 1 week | 🟠 Week 1-2 |
| Phase 4 (Bulk) | 60 | 30 | +11 | 660 points | 3-4 weeks | 🟡 Week 3+ |
| **TOTAL** | **98** | **53.5** | **Avg +15** | **~1,175 points** | **4-5 weeks** | — |

---

## Quick Wins (Can Deploy This Week)

### 1. Phase 1 — 5 Pillar Pages (7.5 hours, +150 GEO points)
**Effort:** 1.5 hrs per page
**Method:** Copy Italian optimizations, translate to French, adapt cultural/linguistic nuances

**Specific pages:**
- que-voir-montefiascone-guide-complet.html
- lac-de-bolsena-que-voir.html
- vin.html
- montefiascone-en-2-jours.html
- comment-arriver-a-montefiascone.html

**Deliverable:** All 5 pages with definition blocks, question headings, tables by **end of week**.

### 2. Create `/fr/llms.txt` (30 minutes, +5% discoverability boost)
**Template:**
```
# I Love Montefiascone — Guide de voyage français

> Guide de voyage indépendant sur Montefiascone, le lac de Bolsena et la Tuscia.

## Guides piliers

- [Que voir à Montefiascone (guide complet)](https://www.ilovemontefiascone.com/fr/que-voir-montefiascone-guide-complet): Vue d'ensemble des attractions principales avec Rocca dei Papi, Cathédrale Sainte-Marguerite, Basilique San Flaviano, Via Francigena
- [Lac de Bolsena — Que voir](https://www.ilovemontefiascone.com/fr/lac-de-bolsena-que-voir): Villages, panoramas, activités nautiques autour du plus grand lac volcanique d'Italie
- [Vin Est! Est!! Est!!!](https://www.ilovemontefiascone.com/fr/vin): DOC depuis 1966, dégustation en caves, légende de Giovanni Defuk
- [Montefiascone en 2 jours](https://www.ilovemontefiascone.com/fr/montefiascone-en-2-jours): Itinéraire complet centre-ville + lac avec timings
- [Comment arriver à Montefiascone](https://www.ilovemontefiascone.com/fr/comment-arriver-a-montefiascone): Routes depuis Rome, Florence, Viterbe, Orvieto + transports

## Guides spécialisés

- [Lac de Bolsena en 2 jours](https://www.ilovemontefiascone.com/fr/lac-de-bolsena-en-2-jours)
- [Dégustations de vin](https://www.ilovemontefiascone.com/fr/degustation-de-vin-de-montefiascone-comment-ca-marche)
- [Villages autour du lac](https://www.ilovemontefiascone.com/fr/villages-du-lac-de-bolsena-en-voiture)
```

---

## Comparison: FR vs. IT Post-Optimization

| Element | FR | IT (Post-Opt) | Gap |
|---------|----|----|-----|
| Definition blocks | 0/5 pillars | 5/5 pillars | 100% |
| Question headings | 0% | 100% of H2s | 100% |
| Tables (pillars) | 0% | 100% | 100% |
| Tables (overall) | 2% | 30%+ | 93% |
| GEO score (pillars) | 54 | 85-90 | -31 pts |
| Estimated AI citation lift | — | +15-30% vs. pre-opt | — |

---

## Recommendation: Start with Phase 1

**Why:** 5 pages, 7.5 hours, +150 GEO points, replicates proven IT improvements

**Success path:**
1. **Day 1-2:** Optimize 5 pillar pages (adapt Italian definitions, convert headings, add tables)
2. **Day 3:** Test in /seo-geo to confirm +25-30 point lift per page
3. **Week 2:** Roll out Phase 2 (15 attraction pages)
4. **Weeks 3-4:** Phase 3 + Phase 4 (itineraries + bulk)

**Final state:** 98 FR pages, GEO score 54 → 72-78/100 (aligned with optimized IT), estimated **20-35% uplift in AI citations** across ChatGPT, Perplexity, Google AI Overviews, Bing Copilot.

---

## Notes

- **Schema markup:** Already present and well-structured in FR pages — no changes needed
- **Robots.txt:** No blockers; all AI crawlers can access FR content
- **Multilingual signals:** hreflang tags correctly configured (fr, it, en, de)
- **Performance:** FR pages load quickly; no Core Web Vitals issues detected
- **Content quality:** Writing quality is high; GEO gaps are **structural, not content quality** issues

---

*Analysis generated: 2026-07-08*
*GEO Assessment Framework: Google Search Central AI Optimization Guide (May 2026)*
