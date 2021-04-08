---
layout: layouts/post
title: Getting started with indieweb
tags: 
- NaBloPoMo
- post
- NaBloPoMo 2018
- Release notes
---

<p>I decided to add some <a href="https://indieweb.org/Getting_Started">indieweb</a> goodness to the site. The <a href="https://indiewebify.me/">indiewebify.me</a> validators were really helpful to check things were working.
</p>

## Here's what I've done so far…

- Added [rel-me](http://microformats.org/wiki/rel-me) links from the home page to my social media profiles
- Made sure links back from social media profiles are using https
- Added [h-card](http://microformats.org/wiki/h-card) markup to the home page

## Markup

```
<div class="h-card">

  <article class="post-content" role="article">

    <h1 class="post-title">Hi, my name is <span class="p-name">Benjy Stanton</span> and I’m an <span class="p-job-title">interaction designer</span></h1>

    <p class="lede p-note">I work at the <span class="p-org">Office for National Statistics (ONS)</span> and I live in <span class="p-locality">Swansea</span>.</p>
    <p class="margin-top--s"><a href="/blog">Read my blog</a></p>

    <h2>Find me on the web</h2>
    <ul>
      <li><a class="u-url" href="https://twitter.com/benjystanton" rel="me">@benjystanton on Twitter</a></li>
      <li><a class="u-url" href="https://github.com/benjystanton/" rel="me">Github</a></li>
      <li><a class="u-url" href="https://www.instagram.com/benjystanton/" rel="me">Instagram</a></li>
      <li><a class="u-email" href="mailto:benjystanton@gmail.com" rel="me">benjystanton@gmail.com</a></li>
    </ul>

  </article>

</div>
```

## Next step

Next I want to add [h-entry](http://microformats.org/wiki/h-entry) markup to my posts.
