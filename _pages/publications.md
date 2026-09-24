---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 2
description: Selected journal articles and conference presentations.
---

<p class="page-links"><a href="{{ site.data.profile.scholar }}">Google Scholar ↗</a><a href="{{ '/assets/bibliography/papers.bib' | relative_url }}" download>Download BibTeX ↓</a></p>

<div data-publications>
  <div class="publication-filters" role="group" aria-label="Filter publications" hidden>
    <button type="button" data-filter="selected" aria-pressed="true">Selected</button>
    <button type="button" data-filter="all" aria-pressed="false">All</button>
  </div>
  <p class="publication-count" aria-live="polite" aria-atomic="true"></p>
  <section data-publication-group aria-labelledby="journal-articles">
    <h2 id="journal-articles">Journal articles</h2>
    <div class="publications">{% bibliography --query @article %}</div>
  </section>
  <section data-publication-group aria-labelledby="conference-presentations">
    <h2 id="conference-presentations">Conference presentations</h2>
    <div class="publications">{% bibliography --query @misc %}</div>
  </section>
</div>
<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
