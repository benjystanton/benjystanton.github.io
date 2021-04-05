---
layout: layouts/post
permalink: "blog/add-svg-icons/"
title: Add SVG icons
categories: release-notes accessibility svg
image: svg-icon.png
image-alt: Screenshot of the Twitter bird being edited in a vector drawing application
last_modified_at: 5 April 2021
---

<p class="lede">Switching from PNGs (Portable Network Graphics) or Icon Fonts, to SVG (Scalable Vector Graphics) icons. Updated on {{ last_modified_at }}.</p>

{%
  include partials/image-with-caption.html
  image:"svg-icon.png"
  caption:"The Twitter icon being edited in Figma"
  alt-text:"Screenshot of the Twitter bird being edited in a vector drawing application"
%}

## SVGs are best for icons

- SVGs are vector images
- They can be zoomed without pixelating
- Inline SVGs can be styled with CSS
- Inline SVGs are good for performance
- SVGs have accessibility advantages
- They are better than icon fonts
- [Browser support is good](https://caniuse.com/#feat=svg-html5)
- Editable using code or vector drawing applications

## Useful SVG attributes

- `height=""`
- `width=""`
- `viewBox=""`
- `aria-hidden="true"`
- `xmlns="http://www.w3.org/2000/svg"`
- `focusable="false"`
- `aria-labelledby=""`
- `fill="currentColor"`

## Add `focusable="false"` to SVGs

[Scott O'Hara explains why and when to use `focusable="false"`](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html#svgs-that-are-decorative)

> `focusable="false"` is also used to ensure Internet Explorer won’t allow the Tab key to navigate into the SVG.

## Inline SVG performance benefits
- There is one less http request because we don't need to load an external image file
- File size is often smaller (unless the icon very complex)
- Only load what you need (instead of a whole icon font)

## Related links

- [Using ARIA to enhance SVG accessibility from The Paciello Group](https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/)
- [Seriously, Don’t Use Icon Fonts from Tyler Sticka](https://cloudfour.com/thinks/seriously-dont-use-icon-fonts/)
- [Tips for Creating Accessible SVG from SitePoint](https://www.sitepoint.com/tips-accessible-svg/)
- [SVGOMG from Jake Archibald](https://jakearchibald.github.io/svgomg/)
- [SVG Path Visualizer from Mathieu Dutour](https://svg-path-visualizer.netlify.app/)
- [SVG Export: Download SVGs from any site with ease](https://svgexport.io/)
- [Icon accessibility and aria label from Go Make Things](https://gomakethings.com/icon-accessibility-and-aria-label/)
- [Smashing Newsletter: SVG generators and tools](https://mailchi.mp/smashingmagazine/smashing-newsletter-294-svg-generators-and-tools)
- [Swipey image grids](https://www.cassie.codes/posts/swipey-image-grids/)

## What I changed on the blog

### Old HTML
```
<i class="icon icon-social icon-instagram">
<span class="visuallyhidden">Instagram</span>
</i>
```

### New HTML
```
<span class="icon">
{% include partials/icon-twitter.svg -%}
</span>
```
