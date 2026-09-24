---
layout: page
title: ChicGrasp
permalink: /projects/chicgrasp/
description: Imitation learning for manipulation of delicate, irregular bio-products.
category: Real-world robot learning
order: 1
img: /assets/img/chicgrasp-still.jpg
image_alt: UR10e robot demonstrating ChicGrasp
tools: Diffusion Policy · UR10e · Custom gripper · Multi-view vision
---

ChicGrasp combines a UR10e robot, an independently actuated dual-jaw pneumatic gripper, multi-view observations, and a diffusion policy trained from human demonstrations. The system studies robotic grasping and handling of irregular, deformable poultry objects.

<figure class="demo-figure">
  <video controls playsinline preload="none" poster="{{ '/assets/img/chicgrasp-still.jpg' | relative_url }}" aria-label="ChicGrasp robot demonstration" aria-describedby="chicgrasp-caption">
    <source src="{{ '/assets/chicgrasp.mp4' | relative_url }}" type="video/mp4">
    <a href="{{ '/assets/chicgrasp.mp4' | relative_url }}">Download the ChicGrasp demonstration</a>.
  </video>
  <figcaption id="chicgrasp-caption">ChicGrasp demonstration: the robot positions its custom gripper around a poultry carcass and lifts it. Video from the original research portfolio.</figcaption>
</figure>

<div class="profile-links"><a class="primary-link" href="https://doi.org/10.1002/adrr.202500149">Journal article ↗</a><a href="https://amirrezadavar.github.io/ChicGrasp/">Full project website ↗</a><a href="https://github.com/AmirrezaDavar/ChicGrasp">GitHub ↗</a></div>

## Publication

<div class="publications">{% bibliography --query @*[key=davar2026chicgrasp] %}</div>
