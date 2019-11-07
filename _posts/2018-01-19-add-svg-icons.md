---
layout: post   
title: "Add SVG icons to the footer"
date: 2018-01-19 21:58:00  
categories: release-notes accessibility
image: svg-icon.png
image-alt: An SVG icon surrounded by website text.
---

I've been meaning to switch out the old PNG icons on the site for a while. Inline SVG icons are better because they look crisper, can be controlled using CSS and have some performance gains.


## User story

As a user, I need icons to help me recognise social links, so that I can spot links easily and be confident in where they'll take me.

## Acceptance criteria

- PNG icons are switched to SVG Icons
- SVG colour is controlled via CSS
- [SVG is optimised](https://jakearchibald.github.io/svgomg/)
- [SVG is accessible](http://decks.tink.uk/2017/lws/index.html)
- Stop using the `<i>` tag

## What's changed

### Old HTML
{% highlight html %}
<i class="icon icon-social icon-instagram">
<span class="visuallyhidden">Instagram</span>
</i>
{% endhighlight %}

### New HTML
{% highlight html %}
<span class="icon">
{% include icon-twitter.svg %}
</span>
{% endhighlight %}

### Performance
- File size is reduced from 1.05 KB to 500 bytes
- There is one less http request because we don't need to load an external image
