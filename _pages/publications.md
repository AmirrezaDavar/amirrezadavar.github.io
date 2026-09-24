---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 2
description: Selected journal articles and conference presentations.
---

<p class="page-links"><a href="{{ site.data.profile.scholar }}">Google Scholar ↗</a><a href="{{ '/assets/bibliography/papers.bib' | relative_url }}" download>Download BibTeX ↓</a></p>

## Journal articles

<div class="publications">{% bibliography --query @article %}</div>

## Conference presentations

<div class="publications">{% bibliography --query @misc %}</div>
