---
layout: default
title: Blog
---
<link rel="stylesheet" href="/assets/css/blog.css">

# Latest Posts

I just started a blog! You can subscribe to it via [RSS](/feed.xml).

<ol>
  {% for post in site.posts %}
    <li class="post">
        <div class="post-title">
            <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
            <div class="post-date">
                {{ post.date | date_to_string }}
            </div>
        </div>
        <span>{{ post.excerpt }}</span>
    </li>
  {% endfor %}
</ol>
