---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 3
description: Research in learning-based manipulation, simulation, and contact-aware control.
---

<div class="project-list">
{% assign projects = site.projects | sort: 'order' %}
{% for project in projects %}
  <article class="project-card">
    <a class="project-image" href="{{ project.url | relative_url }}" aria-label="Read about {{ project.title }}"><img src="{{ project.img | relative_url }}" alt="{{ project.image_alt }}" width="640" height="360" loading="lazy"></a>
    <div><p class="research-kicker">{{ project.category }}</p><h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2><p>{{ project.description }}</p><p class="project-tools">{{ project.tools }}</p><a href="{{ project.url | relative_url }}">Project details <span aria-hidden="true">→</span></a></div>
  </article>
{% endfor %}
</div>
