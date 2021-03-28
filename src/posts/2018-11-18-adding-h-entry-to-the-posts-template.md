---
layout: layouts/post
title: Adding h-entry to the posts template
categories: nablopomo release-notes
tag: NaBloPoMo2018
---

<p class="lede">The next step in getting my site <a href="https://indieweb.org/">indieweb</a> ready is to add <a href="http://microformats.org/wiki/h-entry">h-entry</a> microformat markup to the posts.</p>

## Here's what I've done so far…

- Created a new layout called "post"
- This will be used for standard blog posts, and is different from "pages" and "image posts"
- Moved the `<header>` and `<h1>` inside the `<article>`
- Added `.h-entry` class to the `<article>`
- Added `.p-name` class to the `<h1>`
- Added a profile image with the class `.u-photo`
- Added an author (as in my name) with `rel="author" class="p-author h-card"` markup
- Added a link back from name to my home page
- Added `.dt-published` class to the published on date
- Added permalink for the post to the published on date
- Added the `.u-url` class to the permalink
- Added the `.e-content` class to the full content of the post
- Checked it all with the [indiewebify.me validator](https://indiewebify.me/validate-h-entry/)

## Example markup (with style classes removed)
```
<article class="h-entry" role="article">
  <header>
    <h1 class="p-name">{{ page.title }}</h1>
    <p>
      <img class="u-photo" src="/images/benjy-stanton.jpg" alt="" height="50" width="50"> by
      <a rel="author" class="p-author h-card" href="{{ site.url }}">Benjy Stanton</a> on
      <a class="dt-published u-url" href="{{ post.url | prepend: site.baseurl }}">{{ page.date | date: "%e %B %Y" }}</a> in
        <a class="p-category" href="/blog/category/nablopomo">nablopomo</a>, <a class="p-category" href="/blog/category/release-notes">release-notes</a>
    </p>
  </header>
  <div class="e-content">
    …
  </div>
</article>
```

## But why?

Doing all this will make my blog a more fully featured publishing platform (like Medium). But the benefit is, the content is on my domain.

Eventually I hope to start syndicating all my content automatically to other sites like Twitter and Medium by following the Publish (on your) Own Site, Syndicate Elsewhere (POSSE) model. This and other steps are getting the site ready to start POSSEing. (Not sure if that's a word).

## Next steps
- Switch all old posts to this template
- Add similar features to the image post
