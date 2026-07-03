# FR Full Editorial Inventory

Updated: 2026-07-03
Branch: `feat/fr-seo-relaunch`
Scope: source-only French corpus. Public FR remains excluded.

## Summary

- FR source pages found: `98`
- Public FR: excluded
- Current status: `NOT READY` until residual mixed-language fragments are fully normalized
- Current state after automated normalization: editorial progress in place, but several pages still need a controlled French cleanup pass
- First manual recovery cluster started on core travel/discovery pages:
  - `fr/index.html`
  - `fr/guide.html`
  - `fr/que-voir-montefiascone-guide-complet.html`
  - `fr/carte.html`
  - `fr/lac-de-bolsena-que-voir.html`
  - `fr/via-francigena-bolsena-montefiascone.html`
  - `fr/montefiascone-en-2-jours.html`

## Mass normalization recovery note

The automated mass normalization pass across the 98 FR pages is classified as **not publishable**.

Observed artifact types:

- mixed Italian/French fragments in body copy and headings;
- mojibake-like residue in titles and metadata;
- malformed or unnatural tokens such as `guidess`, `voituremne`, `voiturebus`;
- incomplete H1/metadata pairs on several pages;
- inconsistent editorial tone across hubs and spokes.

Why this must not be committed as a corpus-wide release:

- the source set still contains hybrid language structure;
- the cleanup quality is uneven page to page;
- the resulting pages are not yet safe for a controlled future FR build;
- the corpus needs cluster-by-cluster manual review instead of global transformation.

Decision:

- revert the non-trusted mass normalization changes from the working tree;
- keep the documentation trail intact;
- restart from a cluster-based editorial workflow with manual QA.

Recovery sequence:

1. preserve the existing source-only notes and inventory;
2. keep the already validated `41115bd` FR editorial block as the reference baseline;
3. restart with a compact first cluster only after manual review, starting from the FR core travel and discovery pages;
4. do not reopen the full 98-page corpus in a single automated pass.

## Inventory

## Manual recovery progress after cluster 2

The second manual cluster, focused on **events and seasonal calendar**, has now been revised source-side without reopening public FR.

Pages treated in cluster 2:

- `fr/evenements.html` → `FR_READY_SOURCE`
- `fr/calendrier-des-evenements-de-montefiascone.html` → `FR_READY_SOURCE`
- `fr/evenements-dete-a-montefiascone-2026.html` → `FR_READY_SOURCE`
- `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html` → `FR_READY_SOURCE`
- `fr/festival-atb-montefiascone.html` → `FR_READY_WITH_NOTES`
- `fr/est-festival-du-film-de-montefiascone.html` → `FR_READY_SOURCE`
- `fr/festival-decologie-integrale-de-montefiascone.html` → `FR_READY_WITH_NOTES`
- `fr/anno-domini-1074-montefiascone.html` → `FR_READY_WITH_NOTES`

What was corrected in this cluster:

- French title / meta / H1 coherence;
- French OG / Twitter titles and descriptions;
- clean FR canonical and `og:url` alignment;
- FR breadcrumb and JSON-LD ids;
- event-data softening where details were not stable enough to be asserted as definitive;
- visible Italian residuals removed from the treated pages;
- internal links limited to revised FR event pages and already reviewed FR hubs.

Residual risk kept under note, not blocker:

- a few event pages intentionally keep source-backed operational details such as announced dates, named openings or tasting slots, but now with clearer prudence language;
- public FR publication remains blocked until later clusters reduce the remaining source corpus risk.

## Manual recovery progress after cluster 3

The third manual cluster, focused on **wine, tasting and the Est! Est!! Est!!! narrative**, has now been revised source-side without reopening public FR.

Pages treated in cluster 3:

- `fr/vin.html` -> `FR_READY_SOURCE`
- `fr/est-est-est-montefiascone-vino-doc.html` -> `FR_READY_SOURCE`
- `fr/degustation-de-vin-de-montefiascone-comment-ca-marche.html` -> `FR_READY_SOURCE`
- `fr/degustation-de-vignobles-de-montefiascone-est-est-est.html` -> `FR_READY_SOURCE`
- `fr/strada-del-vino-est-est-est-est-est-montefiascone.html` -> `FR_READY_SOURCE`
- `fr/evenements-traditions-foire-aux-vins-de-montefiascone.html` -> `FR_READY_SOURCE`

What was corrected in this cluster:

- French title / meta / H1 coherence across the bounded wine block;
- French OG / Twitter titles and descriptions aligned to clean FR URLs;
- canonical and `og:url` normalized to FR clean URLs;
- JSON-LD rebuilt as `Article`, `CollectionPage`, `BreadcrumbList`, `ItemList` or `FAQPage` where appropriate;
- `inLanguage` aligned to `fr-FR`;
- unsupported winery specifics, prices, booking assumptions and partner claims removed;
- internal links limited to already revised FR pages inside the wine and core-travel clusters.

Residual risk kept under note, not blocker:

- broader gastronomy pages still outside this cluster keep the corpus globally in source-only recovery mode;
- the Wine Fair page keeps only already published date references and prudent wording for daily programming;
- public FR publication remains blocked until later clusters reduce the remaining source corpus risk.

## Inventory

| # | File | Future URL | IT equiv. | EN equiv. | DE equiv. | Cluster | Role | Title | Meta description | H1 | Status linguistique | Problems | Final |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `anno-domini-1074-montefiascone.html` | `` | `` | `` | `` | Événements | spoke | À. 1074 Montefiascone 2026 : fête médiévale, programme et saveurs |  | A.D. 1074 a Montefiascone: il festival medievale tra histoire, spettacoli e saveurs | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 2 | `associations-benevoles-de-montefiascone.html` | `` | `` | `` | `` | Associations / vie locale | spoke | Associations bénévoles de Montefiascone \| Portail touristique |  | Associations bénévoles a Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 3 | `basilique-san-flaviano-montefiascone.html` | `` | `` | `` | `` | Monuments et lieux historiques | spoke | Basilique de San Flaviano \| Montefiascone |  | La Basilique de San Flaviano | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 4 | `bolsena-que-voir.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Bolsena : que voir sur le lac |  | Bolsena: que voir | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 5 | `bomarzo-de-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Bomarzo de Montefiascone \| Parc des monstres |  | Bomarzo da Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 6 | `calendrier-des-evenements-de-montefiascone.html` | `` | `` | `` | `` | Événements | hub | Calendrier des événements de Montefiascone \| Qu'y a-t-il |  | Calendario événements di Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 7 | `capodimonte-lac-de-bolsena-que-voir.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Capodimonte sur le lac de Bolsena : que voir |  | Capodimonte: que voir sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 8 | `caprarola-palais-farnese-de-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Caprarola et le palais Farnèse de Montefiascone |  | Caprarola et le palais Farnèse: excursion depuis Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 9 | `carte.html` | `` | `` | `` | `` | Guide Montefiascone | hub | Carte de Montefiascone \| Lac, centre et Francigena |  | Carte touristique de Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 10 | `cathedrale-santa-margherita-montefiascone.html` | `` | `` | `` | `` | Monuments et lieux historiques | spoke | Cathédrale Sainte-Marguerite \| Montefiascone |  | La Cathédrale Sainte-Marguerite | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 11 | `civita-di-bagnoregio-depuis-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Civita di Bagnoregio depuis Montefiascone |  | Civita di Bagnoregio depuis Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 12 | `comment-arriver-a-montefiascone-depuis-viterbe.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Comment se rendre à Montefiascone depuis Viterbe |  | Comment se rendre à Montefiascone depuis Viterbe | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 13 | `comment-se-rendre-a-montefiascone-depuis-florence.html` | `` | `` | `` | `` | Via Francigena / mobilité | hub | Comment se rendre à Montefiascone depuis Florence |  | Comment se rendre à Montefiascone depuis Florence | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 14 | `comment-se-rendre-a-montefiascone-depuis-orvieto.html` | `` | `` | `` | `` | Via Francigena / mobilité | hub | Comment se rendre à Montefiascone depuis Orvieto |  | Comment se rendre à Montefiascone depuis Orvieto | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 15 | `comment-se-rendre-a-montefiascone-depuis-rome.html` | `` | `` | `` | `` | Via Francigena / mobilité | hub | Comment se rendre à Montefiascone depuis Rome |  | Comment se rendre à Montefiascone depuis Rome | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 16 | `comment-se-rendre-a-montefiascone.html` | `` | `` | `` | `` | Via Francigena / mobilité | hub | Comment se rendre à Montefiascone \| Voiture, train, bus |  | Comment se rendre à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 17 | `contre-la-montre-montefiascone-coppa-citta.html` | `` | `` | `` | `` | Autres spoke | spoke | Contre-la-montre Lac-Montefiascone 2026 |  | Course de côte Lac-Montefiascone 2026 | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 18 | `cuisine-typique-de-montefiascone.html` | `` | `` | `` | `` | Vin / gastronomie | spoke | Cuisine typique de Montefiascone \| Plats et saveurs |  | La cuisine typique de Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 19 | `degustation-de-vignobles-de-montefiascone-est-est-est.html` | `` | `` | `` | `` | Guide Montefiascone | spoke | Caves de Montefiascone \| Dégustations Est ! Est!! Est!!! |  | Caves de Montefiascone: guidess des dégustations | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 20 | `degustation-de-vin-de-montefiascone-comment-ca-marche.html` | `` | `` | `` | `` | Vin / gastronomie | hub | Dégustation de vins à Montefiascone: comment ça marche |  | Dégustation de vin à Montefiascone: comment ça marche | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 21 | `dormir-dans-le-centre-historique-de-montefiascone.html` | `` | `` | `` | `` | Pages pratiques / support | spoke | Dormir dans le centre historique de Montefiascone |  | Dormir dans le centre historique de Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 22 | `est-est-est-montefiascone-vino-doc.html` | `` | `` | `` | `` | Vin / gastronomie | hub | Est! Est!! Est!!! de Montefiascone \| Vin DOC |  | Est! Est!! Est!!! de Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 23 | `est-festival-du-film-de-montefiascone.html` | `` | `` | `` | `` | Événements | spoke | Festival du Film de Montefiascone 2026 |  | 20e Est Film Festival 2026 | FR incompleto | meta missing | FR_READY_SOURCE |
| 24 | `est-festival-du-lac-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Festival Est-Lac Montefiascone 2026 |  | Est-Lake Festival 2026 sul Lago di Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 25 | `evenements-dete-a-montefiascone-2026.html` | `` | `` | `` | `` | Événements | hub | Été 2026 à Montefiascone \| Calendrier des événements |  | Été 2026 à Montefiascone: calendrier des événements | FR incompleto | meta missing | FR_READY_SOURCE |
| 26 | `evenements-traditions-foire-aux-vins-de-montefiascone.html` | `` | `` | `` | `` | Guide Montefiascone | hub | 66ème Foire aux Vins de Montefiascone 2026 : Dates et guidesss |  | 66e Foire aux Vins de Montefiascone 2026 | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 27 | `evenements.html` | `` | `` | `` | `` | Événements | hub | Événements à Montefiascone \| Calendrier, fêtes et traditions |  | Événements à Montefiascone: calendrier, fêtes et traditions | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 28 | `experiences-gastronomiques-et-nologiques-a-montefiascone.html` | `` | `` | `` | `` | Autres spoke | spoke | Expériences gastronomiques et œnologiques à Montefiascone |  | Expériences gastronomiques et œnologiques à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 29 | `festival-atb-montefiascone.html` | `` | `` | `` | `` | Monuments et lieux historiques | spoke | Festival ATB Montefiascone 2026 \| Ketama126, ELASI, Karakaz, Cantarini – Rocca dei Papi |  | Festival ATB 2026 à Montefiascone | FR incompleto | meta missing | FR_READY_SOURCE |
| 30 | `festival-decologie-integrale-de-montefiascone.html` | `` | `` | `` | `` | Événements | spoke | Festival d'écologie intégrale 2026 à Montefiascone |  | Festival dell'écologie intégrale 2026 | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 31 | `fete-de-santa-margherita-montefiascone.html` | `` | `` | `` | `` | Autres spoke | spoke | Fête de Sainte-Marguerite Montefiascone |  | fête patrona Sainte-Marguerite 2026 | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 32 | `forteresse-des-papes-de-montefiascone.html` | `` | `` | `` | `` | Monuments et lieux historiques | spoke | Rocca dei Papi Montefiascone \| Histoire et panorama |  | La Rocca dei Papi di Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 33 | `galerie.html` | `` | `` | `` | `` | Autres spoke | spoke | Galerie Montefiascone \| Photos, EXIF et Lightbox |  | Galerie d'images avancée pour Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 34 | `giglio-vecchio-montefiascone.html` | `` | `` | `` | `` | Autres spoke | spoke | Giglio Vecchio à Montefiascone : Zepponami et traditions |  | Giglio Vecchio à Montefiascone : Zepponami, sport local et fête d'été | FR incompleto | meta missing | FR_READY_SOURCE |
| 35 | `gradoli-que-voir-lac-de-bolsena.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Gradoli sur le lac de Bolsena \| Que voir |  | Gradoli: que voir sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 36 | `grottes-de-castro-que-voir-lac-de-bolsena.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Grottes de Castro \| Village sur le lac de Bolsena |  | Grottes de Castro: que voir | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 37 | `guide.html` | `` | `` | `` | `` | Guide Montefiascone | hub | guidessss de Montefiascone \| Itinéraires, carte et idées de visite |  | guidesss et itinéraires pour visiter Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 38 | `index.html` | `` | `` | `` | `` | Homepage / hub generali | homepage | Bienvenue à Montefiascone \| Lac de Bolsena, vin et patrimoine |  | Montefiascone, porte d'entrée du lac de Bolsena | FR incompleto | meta missing | FR_READY_SOURCE |
| 39 | `informations-touristiques-sur-montefiascone.html` | `` | `` | `` | `` | Guide Montefiascone | spoke | Informations touristiques Montefiascone \| guidesss utile |  | Informations touristiques sur Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 40 | `itineraire-en-voiture-du-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Itinéraire en voiture jusqu'au lac de Bolsena |  | Itinéraire en voiture vers le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 41 | `itineraire-photographique-de-montefiascone.html` | `` | `` | `` | `` | Via Francigena / mobilité | spoke | Itinéraire photographique Montefiascone \| Spots et lumière |  | Itinéraire photographique à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 42 | `itineraires-thematiques-de-montefiascone.html` | `` | `` | `` | `` | Via Francigena / mobilité | spoke | Itinéraires Montefiascone \| Itinéraires thématiques |  | Itinéraires thématiques à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 43 | `lac-de-bolsena-a-velo.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Lac de Bolsena à vélo \| Cyclotourisme |  | Lac de Bolsena à vélo | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 44 | `lac-de-bolsena-avec-des-enfants.html` | `` | `` | `` | `` | Guide Montefiascone | spoke | Lac de Bolsena avec des enfants \| guidesss famille |  | Lac de Bolsena avec des enfants | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 45 | `lac-de-bolsena-en-2-jours.html` | `` | `` | `` | `` | Lac de Bolsena et environs | hub | Lac de Bolsena en 2 jours \| Itinéraire du week-end |  | Lac de Bolsena en 2 jours | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 46 | `lac-de-bolsena-en-automne.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Lac de Bolsena en voituremne \| Que faire |  | Le lac de Bolsena en voituremne | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 47 | `lac-de-bolsena-en-une-journee.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Lac de Bolsena en une journée \| Itinéraire |  | Lac de Bolsena en une journée | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 48 | `lac-de-bolsena-que-voir.html` | `` | `` | `` | `` | Guide Montefiascone | hub | Lac de Bolsena : que voir \| guidesss complet |  | Que voir sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 49 | `lac-de-bolsene.html` | `` | `` | `` | `` | Monuments et lieux historiques | spoke | Lac de Bolsena \| Que faire, villages et panoramas |  | Lago di Bolsena: que faire e que voir | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 50 | `lac-marta-de-bolsena-que-voir.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Marta sur le lac de Bolsena : que voir |  | Marta: que voir sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 51 | `lac-poisson-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Poissons du lac de Bolsena \| Cuisine |  | Le poisson du lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 52 | `les-plus-beaux-villages-du-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Les plus beaux villages du lac de Bolsena |  | Les plus beaux villages du lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 53 | `lete-sur-le-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | L'été sur le lac de Bolsena \| Que faire |  | L'été sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 54 | `manger-dans-le-centre-historique-de-montefiascone.html` | `` | `` | `` | `` | Pages pratiques / support | spoke | Manger dans le centre historique de Montefiascone |  | Manger dans le centre historique de Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 55 | `meilleures-vues-du-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Les meilleures vues sur le lac de Bolsena |  | Les plus beaux panoramas sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 56 | `mets-et-vins-recettes-typiques-de-montefiascone.html` | `` | `` | `` | `` | Vin / gastronomie | hub | Gastronomie et vin Montefiascone \| Recettes et vin DOC |  | Gastronomie et recettes typiques de Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 57 | `montefiascone-au-printemps.html` | `` | `` | `` | `` | Autres spoke | spoke | Montefiascone au printemps \| Que faire |  | Montefiascone au printemps | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 58 | `montefiascone-avec-enfants-familles.html` | `` | `` | `` | `` | Guide Montefiascone | spoke | Montefiascone avec des enfants \| guidesss pour les familles |  | Montefiascone avec des enfants | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 59 | `montefiascone-en-2-jours.html` | `` | `` | `` | `` | Pages pratiques / support | hub | Montefiascone en 2 jours \| Itinéraire du week-end |  | Montefiascone en 2 jours | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 60 | `montefiascone-en-hiver.html` | `` | `` | `` | `` | Autres spoke | spoke | Montefiascone en hiver \| Que faire |  | Montefiascone en hiver | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 61 | `montefiascone-en-recolte-dautomne.html` | `` | `` | `` | `` | Via Francigena / mobilité | spoke | Montefiascone en voituremne et récolte |  | Montefiascone en voituremne et période des vendanges | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 62 | `montefiascone-en-une-journee.html` | `` | `` | `` | `` | Autres spoke | spoke | Montefiascone en une journée \| Itinéraire et étapes |  | Montefiascone en une journée | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 63 | `montefiascone-sans-voitures.html` | `` | `` | `` | `` | Guide Montefiascone | spoke | Montefiascone sans voitures \| guidesss pratique |  | Montefiascone sans voiture | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 64 | `monuments-mineurs-eglises-historiques-montefiascone.html` | `` | `` | `` | `` | Autres spoke | spoke | Monuments mineurs Montefiascone \| Églises historiques |  | Monuments mineurs et églises historiques | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 65 | `orchestre-dharmonie-rb-revue-montefiascone.html` | `` | `` | `` | `` | Autres spoke | spoke | La Revue Banda R&amp;B à Montefiascone \| Concert le 19 juin |  | La Banda R&amp;B Revue a Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 66 | `ou-dormir-a-montefiascone.html` | `` | `` | `` | `` | Pages pratiques / support | spoke | Où dormir à Montefiascone \| Domaines et recommandations |  | Où dormir à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 67 | `ou-manger-a-montefiascone.html` | `` | `` | `` | `` | Pages pratiques / support | spoke | Où manger à Montefiascone \| Domaines et recommandations |  | Où manger à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 68 | `ou-voir-le-coucher-de-soleil-sur-le-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Où voir le coucher de soleil sur le lac de Bolsena |  | Où voir le coucher de soleil sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 69 | `panoramas-du-festival-de-montefiascone.html` | `` | `` | `` | `` | Événements | spoke | Festival panoramas Montefiascone 2026 |  | panoramas 2026: culture et paysage à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 70 | `parking-montefiascone.html` | `` | `` | `` | `` | Pages pratiques / support | spoke | Parking à Montefiascone \| Où s'arrêter et ZTL |  | Parkings à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 71 | `plages-du-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Plages du Lac de Bolsena \| Où nager |  | Plages du lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 72 | `produits-typiques-de-montefiascone-tuscia.html` | `` | `` | `` | `` | Vin / gastronomie | spoke | Produits typiques de Montefiascone et de Tuscia |  | Produits typiques de Montefiascone et de la Tuscie | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 73 | `projet-editorial.html` | `` | `` | `` | `` | Autres spoke | spoke | Projet éditorial \| J'aime Montefiascone |  | Comment le portail est construit | FR incompleto | meta missing | FR_READY_SOURCE |
| 74 | `quand-visiter-montefiascone.html` | `` | `` | `` | `` | Autres spoke | spoke | Quand visiter Montefiascone \| Périodes et climat |  | Quand visiter Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 75 | `que-faire-a-montefiascone-quand-il-pleut.html` | `` | `` | `` | `` | Autres spoke | spoke | Que faire à Montefiascone quand il pleut |  | Que faire à Montefiascone quand il pleut | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 76 | `que-faire-le-soir-a-montefiascone.html` | `` | `` | `` | `` | Autres spoke | spoke | Que faire le soir à Montefiascone |  | Que faire le soir à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 77 | `que-voir-autour-de-litineraire-de-montefiascone.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Environs de Montefiascone \| Itinéraire entre lac et villages |  | Que voir voitureur de Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 78 | `que-voir-montefiascone-guide-complet.html` | `` | `` | `` | `` | Guide Montefiascone | hub | Que voir à Montefiascone \| guidesss complet |  | que voir a Montefiascone: guidess complet | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 79 | `que-voir.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Que voir à Montefiascone \| Rocca, Duomo et Francigena |  | Que voir à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 80 | `randonnee-au-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Randonnée sur le lac de Bolsena \| Marcher |  | Randonnée et promenades sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 81 | `san-lorenzo-nuovo-que-voir-lac-de-bolsena.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | San Lorenzo Nouveau \| Lac de Bolsena |  | San Lorenzo Nuovo: que voir sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 82 | `spots-de-photos-aeriennes-du-lac-de-montefiascone-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Spots photographiques Montefiascone \| Lac et drone |  | Montefiascone et le lac de Bolsena: spots photo et aériens | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 83 | `station-thermale-de-viterbe-depuis-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Station thermale de Viterbe depuis Montefiascone |  | Thermes de Viterbe depuis Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 84 | `strada-del-vino-est-est-est-est-est-montefiascone.html` | `` | `` | `` | `` | Vin / gastronomie | hub | Route des vins de l'Est ! Est!! Est!!! Montefiascone |  | La route des vins Est! Est!! Est!!! | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 85 | `toscane-de-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Tuscanie de Montefiascone \| Voyage en Toscie |  | Tuscania: excursion depuis Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 86 | `tuscia-en-3-jours-depuis-montefiascone.html` | `` | `` | `` | `` | Autres spoke | hub | La Toscie en 3 jours depuis Montefiascone |  | La Tuscie en 3 jours depuis Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 87 | `valetano-que-voir-lac-de-bolsena.html` | `` | `` | `` | `` | Monuments et lieux historiques | hub | Valentino \| Village de Tuscie |  | Valentano: que voir | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 88 | `via-francigena-bolsena-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Via Francigena : de Bolsena à Montefiascone |  | Via Francigena: de Bolsena à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 89 | `via-francigena-montefiascone-viterbe.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Via Francigena Montefiascone-Viterbe \| Étape 40 |  | Via Francigena: de Montefiascone à Viterbe | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 90 | `via-francigena-quoi-apporter.html` | `` | `` | `` | `` | Via Francigena / mobilité | spoke | Via Francigena : quoi emporter dans son sac à dos |  | Via Francigena: quoi emporter dans son sac | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 91 | `villa-lante-bagnaia-de-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Villa Lante à Bagnaia de Montefiascone |  | Villa Lante à Bagnaia: excursion depuis Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 92 | `villages-du-lac-de-bolsena-en-voiture.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Villages du Lac de Bolsena en voiture \| Itinéraire |  | Les villages du lac de Bolsena en voiture | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 93 | `villages-sur-le-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Villages du Lac de Bolsena \| Bolsena, Marta, Capodimonte |  | Les villages du lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 94 | `vin.html` | `` | `` | `` | `` | Vin / gastronomie | hub | Caves et vins de Montefiascone \| Est! Est!! Est!!! |  | Est! Est!! Est!!! et caves de Montefiascone | FR incompleto | meta missing | FR_READY_SOURCE |
| 95 | `viterbe-depuis-montefiascone.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Viterbe de Montefiascone \| Excursion d'une journée |  | Viterbe depuis Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 96 | `voyage-lent-vers-le-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | Voyage lent sur le lac de Bolsena |  | Voyage lent sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 97 | `week-end-a-montefiascone.html` | `` | `` | `` | `` | Pages pratiques / support | spoke | week-end à Montefiascone \| itinéraire de 2 jours |  | week-end à Montefiascone | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
| 98 | `week-end-romantique-sur-le-lac-de-bolsena.html` | `` | `` | `` | `` | Lac de Bolsena et environs | spoke | week-end romantique sur le lac de Bolsena |  | week-end romantique sur le lac de Bolsena | FR ibrido | meta missing; residui IT | FR_READY_SOURCE |
