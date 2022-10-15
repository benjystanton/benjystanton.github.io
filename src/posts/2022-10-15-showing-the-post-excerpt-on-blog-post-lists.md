---
layout: layouts/post
title: "Showing the post excerpt on blog post lists"
tags:
- post
- Release notes
excerpt: "A brief look at how I'm using front matter to add blog post descriptions to my site."
---

I've been getting into the habit of writing excerpts for my weeknotes, so that they can be used in the [social media snippets (or cards)](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) when I share my posts on Twitter.

I think they are especially useful for weeknotes as the titles of my weeknotes don't have any specific descriptive content in them, because they follow a `series-01-episode-01` format.

They look a bit look this…

```
excerpt: "Design Swansea, user research and design reviews."
```

I add this content to the [front matter](https://www.11ty.dev/docs/data-frontmatter/) of my blog post files, so they aren't displayed by default. But, because they are stored as front matter, they become meta data for the post, and I can use them in different places.


Until now, I haven't been displaying this content on the blog.

Buuut… it's useful content that will probably help people and search engines understand what my posts are about. It'll also help me go back over old weeknotes and understand what I was writing about each week.

So, I've updated a couple of my site templates with the following [liquid tags](https://www.11ty.dev/docs/languages/liquid/) (see the last `<p>`).

## HTML example

{% raw %}
```
<li class="post-list-item">
    <h2 class="post-list-item__title">
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    </h2>
    <p class="post-list-item__text">{{ post.date | date: "%e %B %Y" }}</p>
    {% if post.data.excerpt %}
    <p class="post-list-item__text">{{ post.data.excerpt }}</p>
    {% endif %}
</li> 
```
{% endraw %}