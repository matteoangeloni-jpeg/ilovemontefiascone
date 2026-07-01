# Event Content Enrichment Audit

## Scope

- Project: `ilovemontefiascone.com`
- Perimeter kept unchanged: 97 IT / 97 EN / 97 DE
- No new pages
- No slug changes
- No URL changes
- No `/fr/`
- No deploy

## Public Sources Used

| Source | Type | Notes |
| --- | --- | --- |
| [Comune di Montefiascone, Estate 2026](https://www.comune.montefiascone.vt.it/novita/notizie/novita_1851.html) | Institutional | Base source for the 2026 municipal summer poster and official date framework. |
| [Est Film Festival](https://www.estfilmfestival.it/) | Official event website | Used to confirm the 20th Montefiascone edition inside the wider EFF Lago di Bolsena project. |
| [Festival dell'Ecologia Integrale](https://www.festivalecologiaintegrale.it/) | Official event website | Used to confirm theme, opening slot, opening location and Mogol as opening guest. |
| [ACI Sport](https://www.acisport.it/) | Official sport body | Used as public framework source for the hill climb circuit context. |
| Public press release AC Viterbo + Comune di Montefiascone, 17 June 2026 | Public press release | Used to support the official 2026 naming and public context of the 29th Lago-Montefiascone hill climb. |
| Public organiser channel `@ad1074_montefiascone` | Public social channel | Used only as open-channel reference already present in the corpus. No media downloaded. |
| Public organiser-side channels and local public updates for `Panorami` | Public event signals | Reviewed for fact-checking, but not used to rewrite the live page because the late public date signals were not fully aligned. |

## Pages Analysed

- `eventi.html`
- `calendario-eventi-montefiascone.html`
- `eventi-estate-montefiascone-2026.html`
- `est-film-festival-montefiascone.html`
- `festival-ecologia-integrale-montefiascone.html`
- `eventi-tradizioni-fiera-del-vino-montefiascone.html`
- `anno-domini-1074-montefiascone.html`
- `cronoscalata-montefiascone-coppa-citta.html`
- `atb-festival-montefiascone.html`
- `est-lake-festival-montefiascone.html`
- `festa-santa-margherita-montefiascone.html`
- `concerto-banda-rb-revue-montefiascone.html`
- `panorami-festival-montefiascone.html`
- Equivalent EN and DE public pages in `/en/` and `/de/`

## Updated Pages

| Page family | Languages updated | Confirmed public data used | Main intervention |
| --- | --- | --- | --- |
| Summer Events 2026 | IT / EN / DE | Comune summer poster as base source; cross-check methodology clarified | Stronger source method, clearer caution around final checks, fresher FAQ language, metadata refresh. |
| Est Film Festival | IT / EN / DE | Official dates; 20th local edition; EFF Lago di Bolsena framing; Italian cinema competition context | Stronger contextual copy, better SEO descriptions, source transparency, updated FAQ. |
| Festival dell'Ecologia Integrale | IT / EN / DE | Official dates; theme `Oltre i deserti`; opening 2 July 2026 at 18:00; Piazza Santa Lucia Filippini; Mogol opening guest | Added practical confirmed details, improved metadata, better FAQ and more useful event context. |
| Cronoscalata / Hill Climb | IT / EN / DE | Official dates; public 2026 naming `29ª / 29th / 29.` Lago-Montefiascone; S.P. Lago di Bolsena route km 5+150 to km 0+400; ACI/AC Viterbo public context | Sharper naming, clearer sport-tourism framing, better source disclosure, improved visitor caution. |
| A.D. 1074 | IT only | Existing public organiser channel already present in source corpus | Fixed broken internal links pointing to `/guide`, aligned event navigation to real public URLs. |

## Pages Analysed But Not Editorially Rewritten

| Page family | Status | Reason |
| --- | --- | --- |
| `eventi.html` / event hub | Not rewritten | Hub already works as a thematic gateway; no stronger single-source change was required for this sprint. |
| `calendario-eventi-montefiascone.html` | Not rewritten | Evergreen calendar logic remains valid; 2026-specific upgrades were concentrated on the dedicated summer page. |
| Fiera del Vino | Not rewritten | Current live page already matches the stable public framework from the municipal poster; no stronger public schedule was confirmed without risking overreach. |
| ATB Festival | Not rewritten | Stable confirmed framework exists, but no stronger fully public official page was used in this pass beyond what the current page already handles prudently. |
| Est-Lake Festival | Not rewritten | Same reason as ATB: enough for a cautious evergreen page, not enough for a richer fact update without overclaiming. |
| Festa di Santa Margherita | Not rewritten | Public confirmations reviewed were still too limited for a meaningful factual enrichment beyond the current cautious framing. |
| Banda R&B Revue | Not rewritten | The page was already materially aligned with the public poster and event poster data. |
| Panorami Festival | Not rewritten | Public signals reviewed were not fully aligned late in the cycle; to avoid introducing uncertain dates, the page was left unchanged pending a more stable official source set. |

## Confirmed Data Used

### Summer Events 2026

- Municipality summer poster published on 10 May 2026 remains the baseline source.
- Dedicated event pages are the correct place for last-mile checks on programmes, times and access details.

### Est Film Festival

- Montefiascone dates: 20-26 July 2026.
- Montefiascone hosts the 20th local edition.
- The event sits inside the wider EFF Lago di Bolsena format.
- The public framing confirms cinema, screenings, meetings and competition context.

### Festival dell'Ecologia Integrale

- Dates: 2-5 July 2026.
- Theme: `Oltre i deserti`.
- Opening: 2 July 2026, 18:00.
- Opening location: Piazza Santa Lucia Filippini.
- Opening guest: Mogol.
- Public organiser reference: Associazione Rocca dei Papi per un'Ecologia Integrale ETS.

### Cronoscalata / Hill Climb

- Dates: 19-21 June 2026.
- Public 2026 naming: `29ª Lago-Montefiascone`.
- Route: S.P. Lago di Bolsena, from km 5+150 to km 0+400.
- Public circuit context: Italian historic hill climb championship / ACI framework.

### A.D. 1074

- Existing public organiser signal remains the open channel `@ad1074_montefiascone`.
- The page already had stronger internal content than most event pages; this pass only corrected link integrity.

## Data Not Confirmed Or Intentionally Not Used

- Full detailed programmes unless clearly public and stable.
- Times not publicly confirmed on official channels.
- Ticketing or pricing not publicly confirmed.
- Guest lists or performer lists not firmly published.
- Event venue micro-details for the full multi-day schedule when only the opening or general city context was public.
- Conflicting late public signals for `Panorami` beyond acknowledging the need for final verification.

## JSON-LD Notes

- No new event pages were created.
- Existing event markup on updated pages was kept within the same schema family already used by the site.
- No speculative `offers` fields were added.
- No speculative `performer` fields were added beyond already stable pre-existing structured data.
- No speculative times were added when not publicly confirmed.

## Images And Hero Assets

### No blocking image gaps found in this sprint

- Updated pages keep coherent hero images and `og:image` fields already present in the project.
- No social media media files were downloaded or imported.

### Non-blocking note

- Some event pages would still benefit from future authorised photography or official poster alternatives tailored to the specific event, especially:
  - Festival dell'Ecologia Integrale
  - Est Film Festival
  - Cronoscalata
  - Panorami

## Residual Risks

- `Panorami` still needs a cleaner public-source alignment before a factual rewrite.
- Some event pages not touched in this sprint remain intentionally cautious because stronger public source depth was not yet stable enough.
- Older DE pages outside the updated subset may still deserve a later editorial strengthening pass, even when technically valid.

## Future Monitoring

- Recheck `Panorami` on a future pass if the organiser publishes a stable official page or a clearly dated official social post that resolves public date ambiguity.
- Recheck Fiera del Vino, ATB and Est-Lake if official programmes are published in a durable public format.
- Recheck patronal event pages if parish or municipal public notices become richer.

## Sprint Outcome

- Public perimeter preserved.
- Event content improved where stronger public confirmation existed.
- Fact-risk avoided where source alignment was still weak.
