---
layout: default
title: Abhik Ahuja - Origami
---

# Origami
Origami is probably my earliest hobby; I've been folding since around second grade or so, and recently started designing my own models. I have served as the president of [Cal Origami](https://calorigami.berkeley.edu), the origami club at UC Berkeley, where I helped host the [East Bay Orgami Convention](https://calorigami.berkeley.edu/eboc-2023/program) and start the wonderful Origami Design DeCal. As I have now left Berkeley, I will miss my time there dearly. The rest of this page will be a gallery of models that I have folded, some being my own designs but mostly the designs of others. Details about each model are in the caption visible when you click on the images. I will do my best to credit the designers for the models where I can remember their origins.

## Designs
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
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