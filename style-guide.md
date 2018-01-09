---
layout: page
title: Style Guide
permalink: /style-guide/
---

## Build
This blog is built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub](https://github.com/benjystanton/benjystanton.github.io ).

```
https://github.com/benjystanton/benjystanton.github.io
```

## Fonts
- Base font family: [Source Sans](https://typekit.com/fonts/source-sans)
- Heading font: [Quatro Slab Ultra Black](https://typekit.com/fonts/quatro-slab)

## Colours
<ul class="list-inline">
  <li class="background--text-colour padding--s">Text</li>
  <li class="background--dark-grey-colour padding--s">Dark grey</li>
  <li class="background--medium-grey-colour padding--s">Medium grey</li>
  <li class="background--light-grey-colour padding--s">Light grey</li>
  <li class="background--white-colour padding--s border">White</li>
  <li class="background--primary-colour padding--s">Primary</li>
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

- This is a list item in an unordered list
- An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line.
- This is the last list item

1. This is a list item in an ordered list
2. An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.
3. This is the last list item

> A blockquote is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation.
<br>— Homer Simpson

```
> A blockquote is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation.
<br>— Homer Simpson
```

<p class="post-meta">Post meta (used for blog published dates)</p>

## Big numbers

Use the `big-number.html` include.

```
include big-number.html
big-number="979"
text="miles driven"
```

{% include big-number.html
  big-number="979"
  text="miles driven"
%}

{% include big-number.html
  big-number="27"
  text="miles walked"
%}

## Symbols
- non-breaking space `&nbsp;` &nbsp;
- en dash `&ndash;` &ndash;
- em dash `&mdash;` &mdash;
- horizontal ellipsis `&hellip;` …
- times (multiply) symbol `&times;` ×
- minus symbol `&minus;` &minus;

***

## Images

![Alt text goes here]({{ site.url }}/assets/make-data-part-of-the-web-landscape.png)

`![Alt text](path/to/image.png)`

## Emoji (work in progress)

Use the `emoji.html` include, so that we can add some alt text. Technique inspired by <a href="https://tink.uk/accessible-emoji/">Léonie Watson</a>.

```
include emoji.html
emoji="💩"
alt-text="Pile of poo"
```
<ul class="list-inline">
<li>{% include emoji.html emoji="💩" alt-text="Pile of poo" %}</li>
<li><span class="heading-large">{% include emoji.html emoji="👻" alt-text="Ghost" %}</span></li>
<li><span class="heading-xxlarge">{% include emoji.html emoji="🤖" alt-text="Robot" %}</span></li>
</ul>

## SVGs

SVGs are better for graphics on the web:

- they are a vector format so they scale to any size without losing quality
- you can control the styling with CSS
- complex graphics can be made extra accessible with the right mark-up
- use `role="img"` so that SVGs are exposed to assistive technology like screen readers
- use `title` and `aria-labelledby` to expose an accessible name

Read more about [accessible SVGs by Léonie Watson](http://decks.tink.uk/2017/lws/index.html#cover).


{% include benjy-stanton-logo.svg %}

```
<svg width="165" viewBox="0 0 320 104">
<g role="img" aria-labelledby="logo-title">
<title id="logo-title">Benjy Stanton</title>
...
</g>
</svg>
```

## Icons
I'm phasing out these icons. They're not ideal because the mark-up uses the `<i>` tag. I also plan to use SVG icons in future. These are PNGs.
<ul class="list-inline">
<li><i class="icon icon-social icon-github"><span class="visuallyhidden">GitHub</span></i></li>
<li><i class="icon icon-social icon-twitter"><span class="visuallyhidden">Twitter</span></i></li>
<li><i class="icon icon-social icon-instagram"><span class="visuallyhidden">Instagram</span></i></li>
</ul>

```
<i class="icon icon-social icon-instagram"><span class="visuallyhidden">Instagram</span></i>
```

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

<!-- ***

<fieldset>

    <div class="field-container">
        <label for="text">Text Input</label>
        <input id="text" type="text" placeholder="Text Input">
    </div>

    <div class="field-container">
        <label for="textarea">Textarea</label>
        <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here"></textarea>
    </div>

    <div class="field-container">
        <label for="select">Select</label>
        <select id="select">
        	<option>Option One</option>
        	<option>Option Two</option>
        	<option>Option Three</option>
        </select>
    </div>

    <fieldset class="options">
        <legend>Checkbox</legend>
        <label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"> Choice A</label>
        <label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice B</label>
        <label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice C</label>
    </fieldset>

    <fieldset class="options">
        <legend>Radio</legend>
        <label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked"> Option 1</label>
        <label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"> Option 2</label>
        <label for="radio3"><input id="radio3" name="radio" type="radio" class="radio"> Option 3</label>
    </fieldset>

    <button type="submit" value="Submit">Submit</button>

</fieldset> -->

<!-- ***

<div class="row">
	<div class="column full">.column .full</div>
</div>
<div class="row">
	<div class="column half">.column .half</div>
	<div class="column half">.column .half</div>
</div>
<div class="row">
	<div class="column third">.column .third</div>
	<div class="column third">.column .third</div>
	<div class="column third">.column .third</div>
</div>
<div class="row">
	<div class="column quarter">.column .quarter</div>
	<div class="column quarter">.column .quarter</div>
	<div class="column quarter">.column .quarter</div>
	<div class="column quarter">.column .quarter</div>
</div> -->
