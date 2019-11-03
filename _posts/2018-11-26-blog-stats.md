---
layout: post
title: Blog stats
categories: nablopomo
---

<!-- You can't pass variables straight into includes, you have to capture them first https://jekyllrb.com/docs/includes/#passing-parameter-variables-to-includes  -->

<p class="lede">A quick post of blog stats that used to be on the homepage.</p>

{% capture post-count %}
{{ site.posts | size }}
{% endcapture %}

{% capture category-count %}
{{ site.categories | size }}
{% endcapture %}

{% capture pages-count %}
{{ site.pages| size }}
{% endcapture %}

{% capture images-count %}
{{ site.categories.images | size }}
{% endcapture %}

{% capture notes-count %}
{{ site.categories.notes | size }}
{% endcapture %}

<div class="flex-grid margin-top--s">
  <div class="flex-grid__col flex-grid__col--third">
  {% include big-number.html
    big-number=post-count
    text="posts"
    url="/blog/"
  %}
  </div>
  <div class="flex-grid__col flex-grid__col--third">
  {% include big-number.html
    big-number=category-count
    text="categories"
    url="/blog/category/"
  %}
  </div>
  <div class="flex-grid__col flex-grid__col--third">
  {% include big-number.html
    big-number=pages-count
    text="pages"
  %}
  </div>
</div>

<div class="flex-grid">
  <div class="flex-grid__col flex-grid__col--third">
  {% include big-number.html
    big-number=images-count
    text="images"
    url="/blog/category/images"
  %}
  </div>
  <div class="flex-grid__col flex-grid__col--third">
  {% include big-number.html
    big-number=notes-count
    text="notes"
    url="/blog/category/notes"
  %}
  </div>
</div>
