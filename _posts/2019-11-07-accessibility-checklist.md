---
layout: post
title: Accessibility checklist
categories: nablopomo accessibility
tag: NaBloPoMo2019
---

<p class="lede">A list of accessibility recommendations, tips and resources.</p>

## Typography

*   Nest headings in order (for example, h1, h2, h3)
*   Don't skip heading levels
*   Use semantic mark-up (for example, headings, lists and blockquotes)
*   Links should look like links (for example, blue and underlined)
*   Lines should be less than 80 characters wide
*   Add suitable vertical spacing between lines and paragraphs
*   Avoid italics, block capitals or justified text
*   Use a san-serif font with thick letters
*   Make sure text can be resized

## Written content

*   Use plain English
*   Explain unusual words and jargon
*   [Explain abbreviations in the first instance](https://developer.paciellogroup.com/blog/2019/03/short-note-the-abbreviation-appreciation-society/)
*   [Don't rely on link title attribute](https://developer.paciellogroup.com/blog/2010/11/using-the-html-title-attribute/)
*   Put the most important information at the start
*   Explain what a user has to do in a clear and concise way
*   Use headings and lists to break the content into chunks
*   Download links labels should include file format and size
*   Headings, links and button text must be unique and descriptive
*   Each page should have a unique, descriptive h1 and page title

## Tables

*   [Make sure tables are accessible](https://www.gov.uk/guidance/content-design/tables#how-to-make-tables-accessible)
*   Only use tables to present data
*   Use tables as accessible alternatives to charts and infographics
*   Split complex tables into multiple small ones
*   Use correct table markup for headers, rows and cells, so screen reader users can understand and navigate them

## Charts

Read this blog post about [making charts more accessible]({{ site.url }}/blog/a-plan-for-accessible-charts/)

## Colour and contrast

*   [Check colour contrast](http://webaim.org/resources/contrastchecker/) between text and background
*   Check design works in black and white
*   Don't communicate using colour alone
*   Check design works in high contrast mode

## Interaction

*   Check design is functional when using a keyboard to navigate
*   Check it's visually apparent which page element has current keyboard focus
*   Complex interface components, like sliders, should be avoided when simple solutions, like a text input, can be used instead
*   If an experience cannot be made accessible, create another route for users to get that information

## Forms

*   [All form inputs should have labels and be linked with a 'for' attribute](https://www.w3.org/WAI/tutorials/forms/labels/#associating-labels-explicitly)
*   Forms and interactive elements should have useful hints
*   Error messages should suggest ways to fix errors
*   Error messages should show a summary of errors above the h1 and move focus to it
*   Error message summaries should include an h1 message that tells the screen reader user there is a problem, and give a list of descriptive errors with links to the relevant fields

## Images

*   Images should have good alternative text
*   If images are purely decorative, then they need an empty alt tag `alt=""`
*   Avoid using images of text

## Layout and structure

*   Layout should be consistent and predictable
*   Do not rely upon shape, size, or visual location (for example, "Click the square icon to continue" or "Instructions are in the right-hand column")
*   Check reading and navigation order is logical
*   Check page is readable and functional when text size is doubled
*   Don't use duplicate id attributes

## iframes

*   Use the iframe title attribute to give the content a descriptive title
*   Make sure interactive elements inside an iframe are usable with a keyboard
*   Make sure interactive elements have a clear focus style
*   Test the iframe is readable and functional with browser zoom at 200%
*   Test the content doesn't overflow or become truncated when font size is increased

## Manual tests

*   Use the service with a keyboard only – no mouse
*   Check the page with CSS off
*   Increase font size to 200%
*   Test in high contrast mode
*   Check html mark-up is valid
*   Check in a range of browsers and devices
*   Check using assistive technologies

## Automatic tests

*   [WAVE Browser Extension](https://wave.webaim.org/extension/)
*   [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Related links

*   [Checklist to avoid the most common accessibility errors](https://www.brucelawson.co.uk/2019/checklist-to-avoid-the-most-common-accessibility-errors/)
*   [The intersection of markup, content and context in accessibility](https://www.24a11y.com/2019/the-intersection-of-markup-content-and-context-in-accessibility/)
*   [Tools for designing good-looking accessible interfaces](https://fossheim.io/writing/posts/accessible-design-tools/)