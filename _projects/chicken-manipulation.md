---
layout: page
title: Learning-based deformable-object manipulation
permalink: /projects/chicken-manipulation/
description: Simulation, teleoperation, and policy learning in NVIDIA Isaac Lab.
category: Simulation & imitation learning
order: 2
img: /assets/img/simulation-still.jpg
image_alt: Simulated robot manipulation environment
tools: Isaac Lab · UR10e · Diffusion Policy · Teleoperation
---

This research develops a robotic manipulation framework in NVIDIA Isaac Lab for learning grasping and manipulation of irregular, deformable poultry objects from teleoperated demonstrations.

The workflow connects UR10e simulation, multi-view visual observations, robot state, demonstration collection, and diffusion-policy learning with closed-loop evaluation.

<figure class="demo-figure">
  <video controls playsinline preload="none" poster="{{ '/assets/img/simulation-still.jpg' | relative_url }}" aria-label="Simulated robotic manipulation demonstration" aria-describedby="simulation-caption">
    <source src="{{ '/assets/hero.mp4' | relative_url }}" type="video/mp4">
    <a href="{{ '/assets/hero.mp4' | relative_url }}">Download the simulation demonstration</a>.
  </video>
  <figcaption id="simulation-caption">A simulated robot and manipulation environment. Silent video from the original research portfolio.</figcaption>
</figure>

Related research interests include imitation learning, deformable-object manipulation, and sim-to-real robotics.

[Contact me about this research](mailto:adavar@uark.edu).
