# FR Cluster QA Log

Updated: 2026-07-02
Branch: `feat/fr-seo-relaunch`
Scope: first FR recovery cluster, source-only. Public FR remains excluded.

## Cluster in work

1. `fr/index.html`
2. `fr/guide.html`
3. `fr/que-voir-montefiascone-guide-complet.html`
4. `fr/carte.html`
5. `fr/lac-de-bolsena-que-voir.html`
6. `fr/via-francigena-bolsena-montefiascone.html`
7. `fr/montefiascone-en-2-jours.html`

## Editorial goals

- translate visible French surfaces without reopening the full 98-page corpus;
- keep the first cluster centered on core travel / discovery intent;
- keep all public FR paths excluded from the build;
- avoid new event pages in the first cluster.

## QA checkpoints

- French titles aligned;
- French meta descriptions aligned;
- French H1 and section labels aligned;
- cluster-only internal linking preferred;
- no public `/fr/` output;
- no `sitemap-fr.xml` in the public build;
- no mojibake introduced.

## Current note

The first cluster is being normalized manually. The cluster remains source-only until the QA gate is complete.
