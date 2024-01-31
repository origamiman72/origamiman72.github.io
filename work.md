---
layout: default
title: Abhik Ahuja - Work
---
<link rel="stylesheet" href="/assets/css/projects.css">

# Work

<div class="publications" markdown="1">

## Publications
 {% for item in site.data.publications %}
 <div class="project">

  <div class="project-image">
   <img src="{{ item.image }}">
  </div>

  <div class="project-text">
   <h3 class="project-title" markdown="1">[{{ item.title }}]({{ item.url }})</h3>
   <div class="project-authors">{{ item.authors }}</div>
   <div class="project-venue">{{ item.venue }}</div>

   <div class="project-description">{{ item.description}}</div>
  </div>

 </div>
 {% endfor %}
</div>

<div class="projects" markdown="1">

## Some Projects
{% for item in site.data.projects %}
<div class="project">

 <div class="project-image">
  <img src="{{ item.image }}">
 </div>

 <div class="project-text">
  <h3 class="project-title" markdown="1">[{{ item.title }}]({{ item.url }})</h3>

  <div class="project-description">{{ item.description }}</div>
 </div>

</div>
{% endfor %}
