---
layout: layouts/post
title: Coffee beans
categories: nablopomo
tag: NaBloPoMo2019
---

<!-- This needs to be fixed after moving away from Jekyll to Netlify -->

{% raw %}
{% capture coffee-count %}
{{ site.data.coffee-beans.size }}
{% endcapture %}
{% endraw %}


<p class="lede">A list of specialty coffees that I’ve tried at home, so I can remember which ones I like. Thanks to the excellent <a href="https://www.squarepeg.org.uk/">Square Peg</a> for being my supplier of choice.</p>

{%
  include partials/big-number.html
  big-number=coffee-count
  text=" Coffees tried"
%}

<hr>

{% for item in site.data.coffee-beans %}

<h2>{% if item.url %}<a href="{{ item.url }}">{{ item.name }}</a>{% else %}{{ item.name }}{% endif %}</h2>
<dl>
  <dt>Process</dt>
  <dd>{{ item.process }}</dd>
  <dt>Tasting notes</dt>
  <dd>{{ item.tasting-notes | join: ", "}}</dd>
  <dt>Type</dt>
  <dd>{{ item.type }}</dd>
  <dt>Roaster</dt>
  <dd><a href="{{ item.roaster-url }}">{{ item.roaster }}</a>, {{ item.roaster-location }}</dd>
</dl>
{% endfor %}

<hr>

{%
  include partials/file-link.html
  text="View data"
  url="https://github.com/benjystanton/benjystanton.github.io/blob/master/_data/coffee-beans.yml"
  format="YML"
%}