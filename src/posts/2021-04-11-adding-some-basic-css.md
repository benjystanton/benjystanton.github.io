---
layout: layouts/post
title: "Adding some basic CSS"
excerpt: Adding some basic CSS to stop Google shouting at me.
tags:
- post
- Release notes
last_modified_at: 17 April 2021
--- 

I've had an email from Google Search Console telling me that it's detected some mobile usability issues on the site. 

> The following issues were found on your site:
> - Content wider than screen
> - Text too small to read
> - Clickable elements too close together

So, I've added some very basic CSS for now, just to keep Google off my back.

I've increased the `font-size` and `line-height`, added some styles to stop images from being wider than the screen width, and included a basic `sans-serif` font stack.

I'm not sure this'll fix the last point (about clickable elements being too close together), we'll see.

I feel a bit bad for doing what Google says, instead of listening to, you know, users. But in this instance I agree with the things it's asking for. Also I don't want to harm my site's search engine ranking, as I've put so much effort into keeping the content structure the same so far.

## CSS

```CSS
body {
    font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 1em;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-wrap: break-word;
}
code {
    font-size: 1.2em;
    white-space : pre-wrap;
}
@media screen and (min-width: 660px) {
    body {
        font-size: 1.4em;
        line-height: 1.65;
    }
}
img {
    height: auto;
    width: 100%;
}
```

## Update

Looks like it was actually the `code` elements that were causing most of the issues. So I've added a bunch of wrapping styles to make sure the long lines don't break out of the viewport width.

And I've increased the font size of `code` elements, as the browser default was only 14px, which is too small.

## Update 17 April 2021

Whoop! The basic CSS that I added fixed the issues. It took Google about 5 days to validate them. I think these styles are a good example of basic CSS that is better (for usability and accessibility) than the default browser styles…

- Bigger `font-size`
- More generous `line-height`
- Prevent horizontal scrolling
