---
layout: page
title: Style Guide
permalink: /style-guide/
---

A collection of all the elements on this website. Inspired by [Pattern Lab][1] and [Paul Robert Lloyd’s Style Guide][2].

***

# Heading 1

## Heading 2

### Heading 3

A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.

- This is a list item in an unordered list
- An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line.
- This is the last list item

1. This is a list item in an ordered list
2. An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.
3. This is the last list item

> A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.
> <footer>Quote footer</footer>

***

Table Heading | Table Heading | Table Heading
------------- | ------------- | -------------
Table Cell | Table Cell | Table Cell
Table Cell | Table Cell | Table Cell
Table Cell | Table Cell | Table Cell
Table Cell | Table Cell | Table Cell
Table Cell | Table Cell | Table Cell

***

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

    <fieldset>
        <legend>Checkbox</legend>
        <label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"> Choice A</label>
        <label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice B</label>
        <label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice C</label>
    </fieldset>

    <fieldset>
        <legend>Radio</legend>
        <label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked"> Option 1</label>
        <label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"> Option 2</label>
        <label for="radio3"><input id="radio3" name="radio" type="radio" class="radio"> Option 3</label>
    </fieldset>

</fieldset>

***

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
</div>

[1]: http://patternlab.io/
[2]: https://paulrobertlloyd.com/styleguide/