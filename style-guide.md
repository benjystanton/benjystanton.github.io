---
layout: page
title: Style guide
permalink: /style-guide/
excerpt: Notes about my site's build, typography, colours and components.
---

## Build

This blog is built with [Jekyll](https://jekyllrb.com/) and hosted with [GitHub Pages](https://pages.github.com/). Jekyll uses the [Liquid templating language](https://shopify.github.io/liquid/).

Here's a [link to the repo](https://github.com/benjystanton/benjystanton.github.io).

Spotted an error or something that could be improved? Please [create an issue](https://github.com/benjystanton/benjystanton.github.io/issues).

## Fonts

I'm using system fonts, I borrowed this font stack from [Andy](https://twitter.com/hankchizljaw/status/1254800627789676548).

`'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;` 

## Colours

<ul class="list-inline">
  <li class="background--dark-black-colour padding--s">Dark black #181b1e</li>
  <li class="background--black-colour padding--s">Black #2e343b</li>
  <li class="background--dark-grey-colour padding--s">Dark grey #5b6774</li>
  <li class="background--medium-grey-colour padding--s">Medium grey #abb3bd</li>
  <li class="background--light-grey-colour padding--s">Light grey #e4e7ea</li>
  <li class="background--white-colour padding--s">White #ecf0f3</li>
  <li class="background--primary-colour padding--s">Primary #007575</li>
  <li class="background--primary-colour-dark-mode padding--s">Primary dark mode #0eb9b9</li>
</ul>

## Layout templates

A list of different layouts in use on the site.
<ul>
  <li>Page – <a href="{{ site.baseurl }}/about/">About</a>, <a href="{{ site.baseurl }}/blog/accessibility-for-designers/">Accessibility for designers</a></li>
  <li>List of posts – <a href="{{ site.baseurl }}/blog/">Blog</a></li>
  <li>List of categorised posts – <a href="{{ site.baseurl }}/blog/category/release-notes/">Release notes</a></li>
  <li>List of categories – <a href="{{ site.baseurl }}/blog/category/">Categories</a></li>
  <li>Image post – <a href="{{ site.baseurl }}/blog/9-miles-to-glasto/">9 miles to Glasto</a></li>
</ul>

***

## Typography

<p class="heading-xxlarge">XXL text</p>

<p class="heading-xlarge">XL heading (h1)</p>

<p class="heading-large">Large heading (h2)</p>

<p class="heading-medium">Medium heading (h3)</p>

<p class="heading-small">Small heading (h4)</p>

A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.

Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod * tempor incididunt ut labore et dolore magna aliqua.

[An example link](#)

* This is a list item in an unordered list
* An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line.
* This is the last list item

1. This is a list item in an ordered list
2. An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.
3. This is the last list item

### Lede

``` 
<p class="lede">A large intro paragraph or summary.</p>
```

<p class="lede">A large intro paragraph or summary.</p>

### Blockquote

``` 
> A blockquote is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation.
<br>— Homer Simpson
```

> A blockquote is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation.
<br>— Homer Simpson

### Small text

Smaller, lighter text used for the "published on" date and image captions.

[How to set date formats with Liquid](https://shopify.github.io/liquid/filters/date/).

``` 
<small>%e %B %Y</small>
```

<small>This site was last generated on {{ "now" | date: "%e %B %Y" }}</small>

## Big numbers

Use the `big-number.html` include.

{% raw %}  

``` 
{%
  include big-number.html
  big-number="979"
  text="miles driven"
%}
```

{% endraw %}

{%
  include big-number.html
  big-number="979"
  text="miles driven"
%}

## File link

Use the `file-link.html` include when you need to link a file and specify the file format and size at the same time.

{% raw %}  

``` 
{%
  include file-link.html
  text="View the raw data"
  url="https://github.com/benjystanton/benjystanton.github.io/blob/master/_data/work-trips-2018.yml"
  format="YML"
  size="3KB"
%}
```

{% endraw %}

{%
  include file-link.html
  text="View the raw data"
  url="https://github.com/benjystanton/benjystanton.github.io/blob/master/_data/work-trips-2018.yml"
  format="YML"
  file-size="3KB"
%}

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

* Standard blog image: 1024 × 512
* Thumbnail (for Twitter summary card): 500 × 500

{% raw %}  

``` 
![Alt text goes here]({{ site.url }}/assets/image.png)
```

{% endraw %}  

![Alt text goes here]({{ site.url }}/assets/make-data-part-of-the-web-landscape.png)

### Images with captions

Image captions aren't supported in standard Markdown so I've made an `image-with-caption.html` include.

{% include image-with-caption.html
  image="coop-sticker.jpg"
  caption="Co-op digital design principle sticker – We design for everyone"
  alt-text="A yellow sticker with black text on a laptop"
  %}

{% raw %}  

``` 
{%
  include image-with-caption.html
  image="coop-sticker.jpg"
  caption="Co-op digital design principle sticker – We design for everyone"
  alt-text="A yellow sticker with black text on a laptop"
%}
```

{% endraw %}

``` 
{%
  include image-with-caption.html
  image="coop-sticker.jpg"
  caption="Co-op digital design principle sticker – We design for everyone"
  alt-text="A yellow sticker with black text on a laptop"
-%}
```

## SVG icons

[Read more about SVGs in this blog post]({{ site.url}}/blog/add-svg-icons/)

``` 
{% include benjy-stanton-logo.svg %}
```

{% include benjy-stanton-logo.svg %}

Logo designed by Saph at [Magenta](http://www.magentaphotography.co.uk/)

***

## Tables

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
| col 2 is      | centered      |   $12 |
