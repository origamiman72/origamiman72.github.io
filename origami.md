---
layout: default
title: Abhik Ahuja - Origami
---

# Origami
Origami is my earliest hobby; I've been folding since around second grade and recently started designing my own models. I served as the president of [Cal Origami](https://calorigami.berkeley.edu), the origami club at UC Berkeley, where I helped host the [East Bay Orgami Convention](https://calorigami.berkeley.edu/eboc-2023/program) and started the wonderful Origami Design DeCal. The rest of this page will be a gallery of models that I have folded, some being my own designs but mostly the designs of others. Details about each model are visible in the captions when you click on the images.

## Designs
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
<link href="/assets/css/portfolio.css" rel="stylesheet" />
<link href="/assets/css/lightbox.css" rel="stylesheet" />

<div class="grid">
{% for item in site.data.origami.designs %}
 <div class="grid-item">
  <a href="{{ item.path }}" data-title="{{ item.name }} - {{ item.description }}" data-lightbox="{{ page.title }}">
   <img src="{{ item.path }}">
  </a>
 </div>
{% endfor %}
</div>

## Folds
<div class="grid">
{% for item in site.data.origami.folds %}
 <div class="grid-item">
  <a href="{{ item.path }}" data-title="{{ item.name }} - {{ item.description }}" data-lightbox="{{ page.title }}">
   <img src="{{ item.path }}">
  </a>
 </div>
{% endfor %}
</div>

<script>
 var $grid = $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 50,
  gutter: 0,
  fitWidth: true
 });
 $grid.imagesLoaded().progress(function () {
  $grid.masonry('layout');
 });
</script>
<script src="/assets/js/lightbox.js"></script>
<script>
 lightbox.option({
  'resizeDuration': 200,
  'imageFadeDuration': 300,
  'wrapAround': true
 })
</script>
