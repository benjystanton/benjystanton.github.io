---
layout: page
title: Hi, my name is Benjy and I’m a user experience (UX) designer
---

<p class="lede">I’m the lead user experience designer on the Office for National Statistics (ONS) website. I have 3 kids, and in my spare time in enjoy hanging out with them. I also enjoy finding ways to relax and listen to music with no kids around.</p>

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

<!-- ***

<h2>Currently listening to…</h2>

<div class="flex-grid">
  <div class="flex-grid__col flex-grid__col--third">
  <img src="https://i.scdn.co/image/9235c21b7cee6d16061bcc556513bae13a0d5f3e" alt="Album cover for Finally We Are No One">
  <p class="post-meta">Green Green Grass Of Tunnel <br>by múm</p>
  </div>
  <div class="flex-grid__col flex-grid__col--third">
  <img src="https://i.scdn.co/image/a236e1988e6625faf03cb81a2eed167eb72906d0" alt="Album cover for Around The Fur">
  <p class="post-meta">Be Quiet and Drive (Far Away) <br>by Deftones</p>
  </div>
  <div class="flex-grid__col flex-grid__col--third">
  <img src="https://i.scdn.co/image/085afcde4cbf2136e3394ffe050f3c4a90901ec3" alt="Album cover for The Flying Club Cup">
  <p class="post-meta">Nantes <br>by Beirut</p>
  </div>
</div> -->
