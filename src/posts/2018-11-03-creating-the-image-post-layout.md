---
layout: layouts/post
title: Creating the image post layout
categories: nablopomo release-notes
tag: NaBloPoMo2018
excerpt: A round-up of the key things in my new image post template.
image: "image-post-example.jpg"
image-alt: "A screenshot of a web page with my logo, a big photo and a title"
---

<p class="lede">Yesterday I posted a <a href="{{ site.baseurl }}/blog/9-miles-to-glasto">photo using a new image post layout</a>. Here’s a round up of the key things in the new template.</p>

## Content

Each image post needs 3 bits of unique content;

- image file name
- image alt text
- title

They are defined at the top of the post, like this;

```
---
image: "glasto-sign.jpg"
image-alt: "A rusty roadside sign in the countryside"
title: 9 miles to Glasto
---
```

The image template is very simple, and doesn't require any more content. So [a finished post looks like this](https://raw.githubusercontent.com/benjystanton/benjystanton.github.io/master/_posts/2018-11-02-9-miles-to-glasto.md).

## Template

The [image layout](https://github.com/benjystanton/benjystanton.github.io/blob/master/_layouts/image.html) takes these variables and inserts them into the template to generate the page.

Here's a simplified version of the template mark-up;

{% raw %}
```
<article role="article">
  <figure>
    <img src="{{ site.url }}/assets/{{ page.image }}" alt="{{ page.image-alt }}" />
    <figcaption>
      <h1>{{ page.title }}</h1>
    </figcaption>
  </figure>
</article>
```
{% endraw %}

The image is wrapped in a `<figure>` element.

The `image` and `image-alt` variables are combined to fill in the gaps in the `<img>` element.

Since the `title` variable is used to describe the image and the entire post, I've wrapped it inside a `<h1>` and then inside the `<figcaption>`. This is the simplest, most semantic way I could think of doing the page, and means the mark-up and design is a lean as possible.


## Twitter summary card

I've also reused the image variables to populate the [Twitter summary card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary.html) in the `<head>`.

{% raw %}
```
{% if page.image %}
<meta name="twitter:image:src" content="{{ site.url }}/assets/{{ page.image }}">
<meta name="twitter:image:alt" content="{{ page.image-alt }}">
{% endif %}
```
{% endraw %}

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">For day 2 of <a href="https://twitter.com/hashtag/NaBloPoMo?src=hash&amp;ref_src=twsrc%5Etfw">#NaBloPoMo</a> I&#39;ve created a new post layout that allows me to publish microblog style image posts with a simple design <a href="https://t.co/0bnbT1Fgza">https://t.co/0bnbT1Fgza</a></p>&mdash; Benjy Stanton (@benjystanton) <a href="https://twitter.com/benjystanton/status/1058257626239197184?ref_src=twsrc%5Etfw">November 2, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
