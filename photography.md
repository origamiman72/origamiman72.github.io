---
layout: default
title: Abhik Ahuja - Photography
images: "/assets/images/photography"
---
# Photography
I enjoy exploring and taking pictures of landscapes and cities. I primarily shoot on a Nikon D3300 with the 18-55mm kit lens, but some of the pictures below were taken on my phone. I also post some of these on my [instagram]({{ site.data.links.instagram }}).

<link rel="stylesheet" href="/assets/css/portfolio.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
<link href="/assets/css/lightbox.css" rel="stylesheet" />

<div class="grid">
 {% for file in site.static_files %}
 {% if file.path contains page.images %}
 {% if file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.JPG' or file.extname == '.JPEG' %}
 <div class="grid-item">
  <a href="{{ file.path }}" data-lightbox="{{ page.title }}">
   <img src="{{ file.path }}">
  </a>
 </div>
 {% endif %}
 {% endif %}

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
