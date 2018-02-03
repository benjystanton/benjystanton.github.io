---
layout: page   
title: "Add aria-current to the site nav"
date: 2018-01-13 21:32:00  
categories: release-notes
---

When browsing the main pages of this site (home, about, blog) the current page link changes style. This helps sighted users to tell which page they're on. But this feature is invisible to screen reader users. So I'm adding the `aria-current` attribute to fix this.

## User story

As a screen reader user, I need to know which page I'm on when I'm using the navigation, so that I can find my way around the site.

## Acceptance criteria

The screen reader will announce "current page" when it reads out the label of the current page in the site navigation.

## What's changed

I've added the `aria-current="page"` attribute to the current page link in the site nav.

```
<nav class="site-nav" role="navigation">
  <a class="current page-link" aria-current="page" href="/">Home</a>
  <a class="page-link" href="/about/">About</a>
  <a class="page-link" href="/blog/">Blog</a>
</nav>
```

[Visit the home page to test this out](/)

## Resources
- [Using the aria-current attribute by Léonie Watson](https://tink.uk/using-the-aria-current-attribute/)
- [aria-current design patterns by Léonie Watson](http://design-patterns.tink.uk/aria-current/)
