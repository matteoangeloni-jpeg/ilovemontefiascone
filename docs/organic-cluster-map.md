# Organic Cluster Map

Updated: 2026-07-02  
Branch: `main`  
Scope: public trilingual perimeter only. FR is excluded from the public build.

## Executive Summary

The public site currently exposes a balanced perimeter of `98 IT / 98 EN / 98 DE` URLs in the sitemap set, with no public FR layer.

The strongest organic clusters are already clear:

- Montefiascone general hub
- Cosa vedere / discovery
- Events and seasonal events
- Lake Bolsena / villages / day trips
- Via Francigena / slow mobility
- Wine, cantines and Est! Est!! Est!!!

The main structural risk is not lack of content, but overlap between related hubs and spokes. The site benefits from a strict hub-and-spoke model where every cluster has one primary hub and a limited set of clearly differentiated spokes.

## Cluster Matrix

| Cluster | Main hub | Main pages by language | Role | Strength | Main gaps |
| --- | --- | --- | --- | --- | --- |
| Montefiascone general | `/`, `/en/`, `/de/` | Homepages, `guide`, `mappa`, `informazioni-turistiche-montefiascone` / `montefiascone-travel-guide`, `map-montefiascone`, `tourist-information-montefiascone` / `reisefuehrer-montefiascone`, `touristeninformation-montefiascone` | Core hub | High | Expand link paths to events, lake and wine clusters |
| Cosa vedere / discovery | `/cosa-vedere`, `/en/what-to-see-montefiascone`, `/de/was-sehen-montefiascone` | `cosa-vedere`, `cosa-vedere-montefiascone-guida-completa`, `guide`, monument pages, `cosa-vedere-dintorni-montefiascone-itinerario` / EN and DE equivalents | Hub + discovery spokes | High | Clarify roles between hub, full guide and local landmark pages |
| Events / calendar | `/eventi`, `/en/events-montefiascone`, `/de/veranstaltungen-montefiascone` | `calendario-eventi-montefiascone`, `eventi-estate-montefiascone-2026`, single event pages / EN and DE equivalents | Seasonal hub | High | Separate evergreen calendar from annual summer calendar |
| Eventi estate 2026 | `/eventi-estate-montefiascone-2026`, `/en/montefiascone-summer-events-2026`, `/de/sommerveranstaltungen-montefiascone-2026` | 2026 summer event hubs and linked event pages | Seasonal pillar | High | Keep event copy factual and non-promissory |
| Fiera del Vino / wine fair | `/eventi-tradizioni-fiera-del-vino-montefiascone`, `/en/montefiascone-wine-fair-traditions`, `/de/weinfest-montefiascone-traditionen` | Wine fair evergreen explainers | Event pillar | High | Distinguish fair tradition from wine product pages |
| ATB / live music & beer | `/atb-festival-montefiascone`, `/en/atb-festival-montefiascone`, `/de/atb-festival-montefiascone` | ATB event pages | Event spoke | Medium-High | Keep title/social copy concise |
| Est Film Festival | `/est-film-festival-montefiascone`, `/en/est-film-festival-montefiascone`, `/de/est-film-festival-montefiascone` | Film festival pages | Event spoke | Medium-High | Link more clearly from events hub |
| Festival dell Ecologia Integrale / A.D. 1074 / cultural events | `festival-ecologia-integrale-montefiascone`, `anno-domini-1074-montefiascone`, `panorami-festival-montefiascone` and EN/DE equivalents | Cultural and spiritual festival pages | Event niche | Medium | Keep event schema precise and avoid invented detail |
| Wine / cantines / Est! Est!! Est!!! | `/vino`, `/cantine-montefiascone-degustazione-est-est-est`, `/est-est-est-montefiascone-vino-doc`, `/degustazione-vino-montefiascone-come-funziona`, `/strada-del-vino-est-est-est-montefiascone` and EN/DE equivalents | Wine guide, DOC guide, tasting guide, route page | Core thematic pillar | High | Separate product, place and experience intents |
| Lake Bolsena / villages / day trips | `/lago-di-bolsena`, `/borghi-lago-di-bolsena`, `/borghi-del-lago-di-bolsena-in-auto`, `/lago-di-bolsena-in-2-giorni`, `/lago-di-bolsena-in-autunno`, `/lago-di-bolsena-in-bici`, `/lago-di-bolsena-con-bambini` and EN/DE equivalents | Lake guide, villages, itineraries, seasonal variants | Core destination cluster | High | Reduce overlap between overview and itinerary variants |
| Via Francigena / slow mobility | `/via-francigena-bolsena-montefiascone`, `/via-francigena-montefiascone-viterbo`, `/via-francigena-cosa-portare`, `/trekking-lago-di-bolsena`, `/montefiascone-senza-auto` and EN/DE equivalents | Pilgrim routes, packing, walking, cycling, no-car travel | Practical pillar | High | Strengthen internal links from home and map |
| How to arrive / logistics | `/come-arrivare-a-montefiascone`, city-to-city pages and EN/DE equivalents | Arrival pages from Rome, Florence, Viterbo, Orvieto | Utility hub | Medium-High | Keep route logic practical and non-speculative |
| Maps / practical tools | `/mappa`, `/galleria`, `itinerario-fotografico-montefiascone`, widgets and EN/DE equivalents | Orientation and visual support | Utility layer | Medium | Link these from hub pages more consistently |
| Food & stay | `cucina-tipica-montefiascone`, `dove-mangiare-a-montefiascone`, `dove-dormire-a-montefiascone`, `enogastronomia-ricette-tipiche-montefiascone` and EN/DE equivalents | Dining, sleeping, recipes, local food | Support cluster | Medium-High | Split what to eat, where to eat and where to stay cleanly |
| Associations / civic life | `associazioni-volontariato-montefiascone` and EN/DE equivalents | Local associations and volunteer life | Trust / community | Low-Medium | Link from footer and local culture areas |

## Cluster Notes

### 1. Montefiascone general

This is the strongest overall hub because it connects destination identity, logistics and practical orientation.

Recommended linked destinations:

- `cosa-vedere`
- `eventi`
- `lago-di-bolsena`
- `vino`
- `via-francigena-bolsena-montefiascone`
- `mappa`

### 2. Cosa vedere / discovery

This cluster performs best when it answers the core discovery intent quickly:

- What is Montefiascone?
- What should I see first?
- Which monument is the anchor?

The strongest nodes are the homepage, the `cosa-vedere` hub and the detailed monument pages.

Potentially overlapping pages:

- `cosa-vedere`
- `cosa-vedere-montefiascone-guida-completa`
- `guide`

These should be differentiated by role rather than merged:

- hub
- complete guide
- editorial support / itinerary layer

### 3. Events

The events cluster is robust but must remain semantically layered:

- evergreen hub: `eventi`
- calendar page: `calendario-eventi-montefiascone`
- annual summer calendar: `eventi-estate-montefiascone-2026`
- single-event spokes: Fiera del Vino, Est Film Festival, ATB, A.D. 1074, Festival dell Ecologia Integrale

### 4. Lake Bolsena

This is the largest discovery cluster after the event cluster.

It should be treated as a destination system, not a single page.

Best practice:

- overview hub: `lago-di-bolsena`
- village discovery: `borghi-lago-di-bolsena`
- trip format: `lago-di-bolsena-in-2-giorni`, `lago-di-bolsena-in-bici`, `lago-di-bolsena-con-bambini`
- seasonal intent: `lago-di-bolsena-in-autunno`
- visual intent: `migliori-panorami-lago-di-bolsena`, `dove-vedere-il-tramonto-sul-lago-di-bolsena`

### 5. Wine

This cluster is one of the most valuable for both SEO and GEO because it mixes place, product and experience.

Recommended semantic separation:

- `vino` = hub
- `est-est-est-montefiascone-vino-doc` = product and identity
- `cantine-montefiascone-degustazione-est-est-est` = experience
- `degustazione-vino-montefiascone-come-funziona` = practical how-to
- `strada-del-vino-est-est-est-montefiascone` = route / itinerary

### 6. Via Francigena and slow mobility

This cluster serves a strong practical intent:

- walking
- backpacking
- no-car travel
- cycling
- Lake Bolsena-to-Montefiascone connection

The strongest anchor pages are the route pages and packing guide.

## Cluster Strength Ranking

1. Events / summer events
2. Lake Bolsena / villages / day trips
3. Wine / cantines / Est! Est!! Est!!!
4. Cosa vedere / discovery
5. Via Francigena / slow mobility
6. Home / Montefiascone general
7. How to arrive / logistics
8. Food & stay
9. Maps / practical tools
10. Monument micro-clusters
11. Associations / civic life

## Strategic Gap Summary

- The site already has the right content breadth.
- The main gap is clearer semantic hierarchy.
- The second gap is stronger internal linking between hub pages and theme spokes.
- The third gap is cross-language pruning of near-duplicate roles.

## Priority

- High: events, lake, wine, home, discovery, Francigena
- Medium: logistics, food & stay, maps, photo
- Low: associations and civic support
