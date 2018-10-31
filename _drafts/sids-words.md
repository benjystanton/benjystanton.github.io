---
layout: page
title: Sid’s words
categories: NaBloPoMo
---

<p class="lede">Hello</p>

<dl>
{% for sids-words in site.data.sids-words %}
  <dt>{{ sids-words.English }}</dt>
  <dd>{{ sids-words.Sid }}</dd>
{% endfor %}
</dl>
