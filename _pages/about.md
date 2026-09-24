---
layout: about
title: About
permalink: /
subtitle: Mechanical Engineering PhD student · University of Arkansas
selected_papers: false
social: false
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<div class="about-introduction">
  <aside class="portrait-column" aria-label="Portrait and profile links">
    <img class="portrait" src="{{ '/assets/img/portrait.jpg' | relative_url }}" alt="Amirreza Davar" width="460" height="460" fetchpriority="high">
    <div class="portrait-socials">
      <a href="mailto:{{ site.data.profile.email }}" aria-label="Email Amirreza Davar" title="Email"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a>
      <a href="{{ site.data.profile.linkedin }}" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
      <a href="{{ site.data.profile.scholar }}" aria-label="Google Scholar" title="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i></a>
      <a href="{{ site.data.profile.github }}" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
      <a href="{{ '/cv/' | relative_url }}" aria-label="Curriculum vitae" title="CV"><i class="ai ai-cv" aria-hidden="true"></i></a>
    </div>
  </aside>
  <div class="biography">
    <p>I am a PhD student in Mechanical Engineering at the <a href="https://www.uark.edu/">University of Arkansas</a>. My research focuses on robot learning and embodied AI for robotic manipulation.</p>
    <p>I work on imitation learning, diffusion policies, deformable-object manipulation, tactile sensing, and sim-to-real robotics. My work connects human demonstrations, multimodal observations, policy learning, simulation, and real robotic systems.</p>
    <p>My projects include <a href="{{ '/projects/chicgrasp/' | relative_url }}">ChicGrasp</a>, an imitation-learning system with a custom dual-jaw gripper for delicate, irregular objects, and <a href="{{ '/projects/chicken-manipulation/' | relative_url }}">learning-based manipulation in NVIDIA Isaac Lab</a>. I also coauthored research on <a href="{{ '/projects/contact-aware/' | relative_url }}">tactile feedback and deformable tool control</a>.</p>
    <p>In summer 2025, I worked on surgical robotics research at Purdue University, exploring learning from egocentric surgical video and transferring human demonstrations toward robotic execution.</p>
  </div>
</div>

<section class="academic-section" aria-labelledby="news-heading">
  <h2 id="news-heading">News</h2>
  {% include news.liquid %}
</section>

<section class="academic-section" aria-labelledby="papers-heading">
  <h2 id="papers-heading">Publications</h2>
  <div class="home-publications">{% include publication-browser.liquid %}</div>
  <p class="all-publications"><a href="{{ '/publications/' | relative_url }}?filter=all">All publications →</a></p>
</section>

<section id="experience" class="academic-section" aria-labelledby="experience-heading">
  <h2 id="experience-heading">Experience</h2>
  {% include experience.liquid %}
</section>

<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
