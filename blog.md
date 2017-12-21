---
layout: page
title: Blog
permalink: /blog/
---

<div>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <span class="post-meta">{{ post.date | date: "%d %b %Y" }}</span>

      </li>
    {% endfor %}
  </ul>

  <p class="margin-top--m"><a href="{{ "/feed.xml" | prepend: site.baseurl }}">Subscribe via RSS</a></p>

</div>
