---
layout: page
title: Hi, my name is Benjy and I’m an interaction designer
---

<p class="lede">I’m the lead interaction designer on the Office for National Statistics (ONS) website.</p>

I have 3 kids, and in my spare time I enjoy hanging out with them. I also enjoy finding ways to relax with no kids around.

## Blog stats

<!-- You can't pass variables straight into includes, you have to capture them first https://jekyllrb.com/docs/includes/#passing-parameter-variables-to-includes  -->

{% capture post-count %}
{{ site.posts | size }}
{% endcapture %}

{% capture category-count %}
{{ site.categories | size }}
{% endcapture %}

{% capture weeknotes-count %}
{{ site.categories.weeknotes | size }}
{% endcapture %}

<div class="flex-grid margin-top--s">
  <div class="flex-grid__col flex-grid__col--third">
  {% include big-number.html
    big-number=post-count
    text="blog posts"
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
    big-number=weeknotes-count
    text="weeknotes"
    url="/blog/category/weeknotes"
  %}
  </div>
</div>

<p class="margin-top--s"><a href="/blog">Read my blog →</a></p>
