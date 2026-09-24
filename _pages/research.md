---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
description: Robot learning, embodied AI, and interaction with the physical world.
---

My research focuses on learning-based robotic manipulation, spanning human demonstrations, multimodal observations, policy learning, simulation, and real-world execution.

{% for area in site.data.research %}

## {{ area.title }}

{{ area.description }}

{% endfor %}

## Research systems

My work includes **ChicGrasp**, which combines a custom dual-jaw gripper and imitation learning for handling delicate, irregular bio-products, and **deformable-object manipulation in NVIDIA Isaac Lab** using teleoperated demonstrations and diffusion policies.

I have also coauthored research on tactile feedback and contact-aware control for deformable swabbing tools, and a survey of imitation learning in agricultural robotics.

<div class="profile-links"><a class="primary-link" href="{{ '/projects/' | relative_url }}">Explore projects →</a><a href="{{ '/publications/' | relative_url }}">Read the publications</a></div>
