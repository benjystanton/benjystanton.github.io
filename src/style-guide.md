---
layout: layouts/page
title: Style guide
permalink: /style-guide/
excerpt: Notes about my site's build, typography, colours and components.
tags:
- page
date: 2007-05-10 00:00:03
---

## Build

This blog is built with [Eleventy](https://www.11ty.dev/) and hosted with [Netlify](https://www.netlify.com/). I'm using a mix of [Liquid](https://liquidjs.com/) and [Nunjucks](https://mozilla.github.io/nunjucks/) to write the templates.

Here's a link to the [repo on GitHub](https://github.com/benjystanton/benjystanton.github.io).

Spotted an error or something that could be improved? Please [create an issue](https://github.com/benjystanton/benjystanton.github.io/issues).

## Fonts

I've chosen a font family that uses sans-serif system fonts. System fonts are the fonts already installed on a device. Different operating systems have different defaults, but this list should cover most of them. It's a little boring, but it's good for performance.

I borrowed this font family from [Andy Bell](https://twitter.com/piccalilli_/status/1254800627789676548).

`font-family: "Helvetica Neue","Segoe UI", Roboto, Arial, sans-serif;`

<!-- ## Colours

<ul class="list-inline">
  <li class="background--dark-black-colour padding--s">Dark black #181b1e</li>
  <li class="background--black-colour padding--s">Black #2e343b</li>
  <li class="background--dark-grey-colour padding--s">Dark grey #5b6774</li>
  <li class="background--medium-grey-colour padding--s">Medium grey #abb3bd</li>
  <li class="background--light-grey-colour padding--s">Light grey #e4e7ea</li>
  <li class="background--white-colour padding--s">White #ecf0f3</li>
  <li class="background--primary-colour padding--s">Primary #007575</li>
  <li class="background--primary-colour-dark-mode padding--s">Primary dark mode #0eb9b9</li>
</ul> -->

***

## List of sample pages

{% include 'partials/page-samples.html' %}

***

## Typography

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.

Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod * tempor incididunt ut labore et dolore magna aliqua.

[An example link](#)

- This is a list item in an unordered list
- An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line.
- This is the last list item

1. This is a list item in an ordered list
2. An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.
3. This is the last list item

<!-- ``` 
> A blockquote is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation.
<br>— Homer Simpson
``` -->

> A blockquote is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation.
<br>— Homer Simpson

<!-- ### Small

[How to set date formats with Liquid](https://shopify.github.io/liquid/filters/date/).

``` 
<small>%e %B %Y</small>
```

<small>This site was last generated on {{ "now" | date: "%e %B %Y" }}</small> -->

<!-- ## Big numbers

Use the `big-number.html` include.

{% raw %}  

``` 
{%
  include 'partials/big-number.html'
  big-number="979"
  text="miles driven"
%}
```

{% endraw %}

{%
  include 'partials/big-number.html'
  big-number="979"
  text="miles driven"
%} -->

<!-- ## File link

Use the `file-link.html` include when you need to link a file and specify the file format and size at the same time.

{% raw %}  

``` 
{%
  include 'partials/file-link.html'
  text="View the raw data"
  url="https://github.com/benjystanton/benjystanton.github.io/blob/master/_data/work-trips-2018.yml"
  format="YML"
  size="3KB"
%}
```

{% endraw %}

{%
  include 'partials/file-link.html'
  text="View the raw data"
  url="https://github.com/benjystanton/benjystanton.github.io/blob/master/_data/work-trips-2018.yml"
  format="YML"
  file-size="3KB"
%} -->

## Symbols

* non-breaking space `&nbsp;` &nbsp; 
* en dash `&ndash;` &ndash; 
* em dash `&mdash;` &mdash; 
* horizontal ellipsis `&hellip;` …
* times (multiply) symbol `&times;` ×
* minus symbol `&minus;` &minus; 

[HTML Entities – A List of HTML Space and other HTML Symbols and Special Character Codes from Quincy Larson](https://www.freecodecamp.org/news/html-entities-symbols-special-character-codes-list/)

***

## Images

Images are full width by default. Don't forget alt text.

<!-- * Standard blog image: 1024 × 512
* Thumbnail (for Twitter summary card): 500 × 500 -->

{% raw %}  
``` 
![Alt text goes here](/images/image.png)
```
{% endraw %}  

![Alt text goes here](/images/make-data-part-of-the-web-landscape.png)

### Images with captions

Image captions aren't supported in standard Markdown so I've made an `image-with-caption.html` partial.

{% include 'partials/image-with-caption.html'
  image:"coop-sticker.jpg"
  caption:"Co-op digital design principle sticker – We design for everyone"
  alt-text:"A yellow sticker with black text on a laptop"
  %}

{% raw %}  
``` 
{%
  include 'partials/image-with-caption.html'
  image:"coop-sticker.jpg"
  caption:"Co-op digital design principle sticker – We design for everyone"
  alt-text:"A yellow sticker with black text on a laptop"
%}
```
{% endraw %}

<!-- ``` 
{%
  include 'partials/image-with-caption.html'
  image="coop-sticker.jpg"
  caption="Co-op digital design principle sticker – We design for everyone"
  alt-text="A yellow sticker with black text on a laptop"
%}
``` -->

## SVG icons

[Read more about SVGs in this blog post](/blog/add-svg-icons/)

<!-- ## Tables

### HTML tables

``` 
<table>
  <caption><h4>This is a table caption</h4></caption>
  <thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th class="cell--right">Numbers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td class="cell--right">1</td>
    </tr>
    <tr>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td class="cell--right">12</td>
    </tr>
  </tbody>
</table>
```

<table>
  <caption><h4>This is a table caption</h4></caption>
  <thead>

    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th class="cell--right">Numbers</th>
    </tr>

  </thead>
  <tbody>

    <tr>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td class="cell--right">1</td>
    </tr>
    <tr>
      <td>Table Cell</td>
      <td>Table Cell</td>
      <td class="cell--right">12</td>
    </tr>

  </tbody>
</table>

### Markdown tables

``` 
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 | -->
