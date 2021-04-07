---
layout: layouts/post
permalink: "blog/sids-words/"
title: Sid’s words
categories: nablopomo personal
tag: NaBloPoMo2018
excerpt: A list of our 2 year old's unique words.
image: "sid-mirror-techniquest.jpg"
image-alt: "A toddler looks at his distorted reflection in a round mirror."
---

<p>Our 2 year old has a unique language. I’ve made a note of the most common words he uses, so we can remember them after he stops.</p>

<dl>
{% for sids-words in site.data.sids-words %}
  <dt>{{ sids-words.English }}</dt>
  <dd>{{ sids-words.Sid }}</dd>
{% endfor %}
</dl>

{% include partials/image-with-caption.html
  image="sid-mirror-techniquest.jpg"
  caption="Sid playing with a mirror at Techniquest, Cardiff"
  alt-text="A toddler looks at his distorted reflection in a round mirror."
%}
