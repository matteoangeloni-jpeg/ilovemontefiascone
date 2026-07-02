# Query Intent Map

Updated: 2026-07-02  
Branch: `main`  
Scope: public trilingual perimeter only.

## Intent Framework

This map groups search demand by intent instead of simple keyword lists. It is designed to guide internal linking, content refinement and future backlog decisions without creating new pages in this phase.

## Intent Matrix

| Intent class | Query target | Secondary queries | Best existing page | Gap | Resolve with existing page | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Navigational | Montefiascone official guide | Montefiascone homepage, Montefiascone travel guide | `/`, `/en/`, `/de/` | None | Yes | High |
| Informational | Cosa vedere a Montefiascone | what to see in Montefiascone, was sehen in Montefiascone | `/cosa-vedere`, `/en/what-to-see-montefiascone`, `/de/was-sehen-montefiascone` | Hub role should remain explicit | Yes | High |
| Informational | Montefiascone in un giorno | one day in Montefiascone, Montefiascone day trip | `cosa-vedere-dintorni-montefiascone-itinerario`, lake day-trip pages | Funnel to itinerary pages | Yes | High |
| Tourist-practical | Come arrivare a Montefiascone | how to get to Montefiascone, anreise nach Montefiascone | `come-arrivare-a-montefiascone`, city-specific arrival pages | No single master arrival hub | Partly | High |
| Event | Eventi Montefiascone 2026 | events Montefiascone, summer events Montefiascone | `eventi-estate-montefiascone-2026` and equivalents | Needs strict distinction from evergreen events hub | Yes | High |
| Event | Fiera del Vino Montefiascone | wine fair Montefiascone, Weinfest Montefiascone | `eventi-tradizioni-fiera-del-vino-montefiascone` and equivalents | Role is strong and clear | Yes | High |
| Event | Est Film Festival Montefiascone | Est Film Festival Lago di Bolsena | `est-film-festival-montefiascone` and equivalents | Link more strongly from events hub | Yes | Medium-High |
| Event | ATB Festival Montefiascone | live music Montefiascone, beer festival Tuscia | `atb-festival-montefiascone` and equivalents | Title/social copy should stay concise | Yes | Medium-High |
| Informational | Lago di Bolsena | Lake Bolsena guide, what to do on Lake Bolsena | `lago-di-bolsena` and equivalents | Strong but needs more structural links | Yes | High |
| Tourist-practical | Lago di Bolsena in 2 giorni | weekend on Lake Bolsena, Lake Bolsena itinerary | `lago-di-bolsena-in-2-giorni` and equivalents | Good match | Yes | High |
| Seasonal | Lago di Bolsena in autunno | autumn on Lake Bolsena | `lago-di-bolsena-in-autunno` and equivalents | Seasonal but stable | Yes | Medium |
| Seasonal | Lago di Bolsena in bici | Lake Bolsena by bike | `lago-di-bolsena-in-bici` and equivalents | Good match | Yes | Medium |
| Local discovery | Borghi del Lago di Bolsena | villages on Lake Bolsena, borghi del lago | `borghi-lago-di-bolsena`, `borghi-del-lago-di-bolsena-in-auto` and equivalents | Could cannibalize itinerary pages if not linked clearly | Yes | High |
| Informational | Vino Est! Est!! Est!!! | Montefiascone wine, DOC Montefiascone | `est-est-est-montefiascone-vino-doc`, `vino`, `cantine...` | Strong core cluster | Yes | High |
| Tourist-practical | Degustazione vino Montefiascone | wine tasting Montefiascone, how wine tasting works | `degustazione-vino-montefiascone-come-funziona` and equivalents | Good practical page | Yes | Medium-High |
| Tourist-practical | Via Francigena Montefiascone | path, packing list, no car, trekking | `via-francigena-bolsena-montefiascone`, `via-francigena-cosa-portare`, `montefiascone-senza-auto` and equivalents | Strong cluster, still expandable by internal links | Yes | High |
| International | Montefiascone travel guide | Lake Bolsena, Tuscia, wine tourism | `en/montefiascone-travel-guide`, `de/reisefuehrer-montefiascone` | EN/DE hubs can be more explicit about geography | Yes | High |
| Local discovery | Rocca dei Papi | panoramic viewpoint Montefiascone | monument pages, `cosa-vedere` cluster | Link density can improve | Yes | High |
| Local discovery | Cattedrale di Santa Margherita | cathedral Montefiascone | monument page + `cosa-vedere` | Clear target, good supporting depth | Yes | Medium |
| Local discovery | Basilica di San Flaviano | church with tomb of Defuk | monument page + `cosa-vedere` | Needs stronger contextual links | Yes | Medium |
| Practical | Montefiascone map | map Montefiascone, lake and center orientation | `/mappa`, `/en/map-montefiascone`, `/de/karte-montefiascone` | Under-used but valuable utility | Yes | Medium |
| Practical | Where to eat / where to stay | eat in Montefiascone, sleep in Montefiascone | food & stay pages | Good intent coverage; differentiate well | Yes | Medium |
| Seasonal | Montefiascone summer events | summer events, festival Montefiascone 2026 | `eventi-estate-montefiascone-2026` and equivalents | Strong, but needs no invented dates | Yes | High |
| Seasonal | Montefiascone rainy day / evening | what to do when it rains, evening in Montefiascone | practical support pages | Useful long-tail support | Yes | Medium |
| Long-tail | Montefiascone with children | family guide, Lake Bolsena with children | family pages and lake pages | Good supporting intent | Yes | Medium |

## Intent-to-Cluster Notes

### Navigational

These intents belong to the homepage and the main top-level hubs. They should not be split across many near-duplicate pages.

### Informational

The best pages answer the question immediately, then open a short path to related spokes.

### Tourist-practical

These pages work best when the first screen says:

- where the user is
- what the page helps them decide
- how it connects to Montefiascone as a base

### Event

Event pages should keep the factual perimeter conservative:

- only visible details
- only verified dates and places
- no invented programme notes

### International

EN and DE should add context for:

- Montefiascone as a base
- Lake Bolsena geography
- Tuscia
- Via Francigena
- wine tourism

## Priority Guidance

- High: navigational, event, wine, lake, Via Francigena
- Medium: practical, seasonal, local discovery
- Low: support and long-tail add-ons

