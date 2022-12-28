---
title: Archive
layout: main.njk
eleventyExcludeFromCollections: true
pagination:
  data: collections.all
  size: 5
  reverse: true
  alias: posts
---

{% include "post-count.html" %}

<nav aria-labelledby="post-pages">
  <h3 id="post-pages">Post pages</h3>
  <ol class="no-style">
{%- for pageEntry in pagination.pages %}
    <li>
      <details>
        <summary>
          Page {{ forloop.index }}
        </summary>
        <a href="/{% if forloop.index0 > 0 %}{{ forloop.index0 }}/{% endif %}">See all in this page</a>
        <ol>
          {%- for post in pageEntry %}
            <li><a href="{{ post.url | url }}">{{ post.data.title }}</a>, <time class="dim" datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>.</li>
          {%- endfor %}
        <ol>
      </details>
    </li>
{%- endfor %}
  </ol>
</nav>