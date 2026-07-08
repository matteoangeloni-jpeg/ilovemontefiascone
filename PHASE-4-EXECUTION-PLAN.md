# PHASE 4 EXECUTION PLAN — 90+/100 Target

**Status:** Ready to Execute  
**Estimated Time:** 7 hours  
**Current GEO:** 82/100  
**Target GEO:** 90+/100  

---

## Summary: What's Left

| Language | Pillar Status | Gap to 90 | Action |
|----------|---------------|-----------|--------|
| **IT** | 5/5 pillars: 86/100 | -4 pts | Complete 2 tables (Wine, Directions, 2-Days) |
| **FR** | 5/5 pillars: 80/100 | -10 pts | Complete 2 tables (Directions, 2-Days) |
| **EN** | 0/5 pillars: 58/100 | -32 pts | ADD ALL: Definition blocks, tables, question headings |
| **DE** | 0/5 pillars: 56/100 | -34 pts | ADD ALL: Definition blocks, tables, question headings |

---

## STEP 1: Complete FR Remaining Tables (1 hour)

### FR Directions Table (comment-se-rendre-a-montefiascone.html)
**Location:** After summary card, before "Comment arriver en voiture?"
**Table:** Distance matrix (Roma, Viterbo, Orvieto, Florence)
**Template:** Use IT `come-arrivare-a-montefiascone.html` as source
**Effort:** 15 min

### FR 2-Days Timelines (montefiascone-en-2-jours.html)
**Location:** After each day heading
**Tables:** 
- Day 1 timeline (8 rows: times, activities, durations)
- Day 2 timeline (9 rows: lake activities)
**Template:** Use IT `montefiascone-in-2-giorni.html` as source
**Effort:** 30 min

### FR Wine Varietal Table (vin.html)
**Status:** ✅ ALREADY ADDED
**Verify:** Trebbiano/Malvasia/Rossetto table present
**Effort:** 0 min

---

## STEP 2: Complete IT Remaining Tables (1.5 hours)

### IT Wine Varietal Table (vino.html)
**Status:** ✅ ALREADY ADDED
**Verify:** Table after "Uve e stile del vino" H3
**Effort:** 0 min

### IT Directions Distance Table (come-arrivare-a-montefiascone.html)
**Status:** ✅ ALREADY ADDED
**Verify:** Distance table after summary card
**Effort:** 0 min

### IT 2-Days Timelines (montefiascone-in-2-giorni.html)
**Status:** ✅ ALREADY ADDED
**Verify:** Day 1 & Day 2 timeline tables present
**Effort:** 0 min

---

## STEP 3: Replicate EN Pillar Pages (2 hours)

### Files to Create/Update:
1. **en/things-to-see-montefiascone.html** (Pillar guide)
   - Copy from IT `cosa-vedere-montefiascone-guida-completa.html`
   - Add: Definition block, question headings, attractions table
   - Effort: 30 min

2. **en/what-to-see-on-lake-bolsena.html** (Lake)
   - Copy from IT `lago-di-bolsena-cosa-vedere.html`
   - Add: Definition block, question headings, towns table
   - Effort: 20 min

3. **en/montefiascone-wine-guide.html** (Wine)
   - Copy from IT `vino.html`
   - Add: Definition block, question headings, varietal table
   - Effort: 20 min

4. **en/how-to-get-to-montefiascone.html** (Directions)
   - Copy from IT `come-arrivare-a-montefiascone.html`
   - Add: Definition block, question headings, distance table
   - Effort: 20 min

5. **en/montefiascone-in-two-days.html** (2-Days)
   - Copy from IT `montefiascone-in-2-giorni.html`
   - Add: Definition block, question headings, day timelines
   - Effort: 20 min

**Total EN effort:** 2 hours

---

## STEP 4: Replicate DE Pillar Pages (2 hours)

### Files to Create/Update:
Same 5 files as EN, with German translations:
1. **de/sehenswuerdigkeiten-montefiascone.html**
2. **de/bolsenasee-sehenswuerdigkeiten.html**
3. **de/montefiascone-wein-guide.html**
4. **de/anreise-nach-montefiascone.html**
5. **de/montefiascone-in-zwei-tagen.html**

**Total DE effort:** 2 hours

---

## STEP 5: Bulk Optimize 60 Remaining Pages (1.5 hours)

For each non-pillar page:
1. Add definition block (80-120 words) at top of content
2. Convert primary H2 → question
3. Add table/list if comparative data exists

**Recommended:** Use batch find-and-replace with sed/awk for pattern conversions

**Effort:** 1.5 hours for all 60 pages

---

## Expected Results After Phase 4

| Language | Before | After | Change |
|----------|--------|-------|--------|
| **IT** | 86/100 | 90/100 | +4 pts ✓ |
| **FR** | 80/100 | 89/100 | +9 pts ✓ |
| **EN** | 58/100 | 88/100 | +30 pts ✓ |
| **DE** | 56/100 | 87/100 | +31 pts ✓ |
| **SITE** | 82/100 | 90+/100 | +8 pts ✓ |

---

## AI Platform Readiness (Post-Phase 4)

| Platform | Current | Post-Phase 4 | Target |
|----------|---------|--------------|--------|
| Google AI Overviews | 84/100 | 92/100 | ✓ |
| ChatGPT | 76/100 | 87/100 | ✓ |
| Perplexity | 80/100 | 89/100 | ✓ |
| Google AI Mode | 78/100 | 88/100 | ✓ |
| Bing Copilot | 74/100 | 85/100 | ✓ |

---

## Git Commit Strategy

After completing each language group:
1. **Commit 1:** FR tables (1 file, 1 table)
2. **Commit 2:** IT tables (1 file, 3 tables) 
3. **Commit 3:** EN pillar pages (5 files, all optimized)
4. **Commit 4:** DE pillar pages (5 files, all optimized)
5. **Commit 5:** Bulk 60 pages (final QA commit)

---

## Tools & Resources

**For translations:** Use Google Translate or DeepL for:
- Definition blocks
- Question headings
- Table descriptions

**For bulk operations:** Create sed/awk scripts for:
- Converting H2/H3 statements → questions
- Adding definition blocks
- Adding tables where applicable

**For verification:** Run `/seo-geo` on final versions

---

## Timeline

| Phase | Duration | Expected Completion |
|-------|----------|-------------------|
| FR tables | 1 hour | 1 hour from start |
| EN pillars | 2 hours | 3 hours from start |
| DE pillars | 2 hours | 5 hours from start |
| Bulk 60 pages | 1.5 hours | 6.5 hours from start |
| Final QA + commit | 0.5 hours | 7 hours from start |

**Total:** ~7 hours to reach 90+/100 on all 4 languages

---

## Success Criteria

✅ All 20 pillars have:
- Definition blocks (150-167 words)
- Question headings (100% conversion)
- Reference tables (100% coverage)
- Schema markup (BlogPosting, TouristAttraction)

✅ All 4 languages at 88-90+/100

✅ Sitemaps verified (98 pages per language)

✅ Final `/seo-geo` audit confirms 90+/100

---

*Plan created: 2026-07-08*  
*Status: Ready for execution*  
*Prepared by: Claude Code SEO Orchestration*
