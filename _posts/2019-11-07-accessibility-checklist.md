---
layout: post
title: Accessibility checklist
categories: nablopomo accessibility
tag: NaBloPoMo2019
image: "checkbox.jpg"
image-alt: "Sharpie drawing of a box with a tick or check in it, on grid paper"
last_modified_at: 18 May 2020
---

<p class="lede">A list of accessibility recommendations, tips and resources. Last updated on {{ page.last_modified_at }}.</p>

## Typography

- Nest headings in order (for example, h1, h2, h3)
- Don't skip heading levels
- Use semantic mark-up (for example, headings, lists and blockquotes)
- Links should look like links (for example, blue and underlined)
- Lines should be less than 80 characters wide
- Add suitable vertical spacing between lines and paragraphs
- Avoid italics, block capitals or justified text
- Use a san-serif font with thick letters
- [Make sure text can be resized](https://www.24a11y.com/2019/pixels-vs-relative-units-in-css-why-its-still-a-big-deal/)

Read my post about [how improving typography can help us to meet user needs]({{ site.baseurl}}/blog/how-improving-typography-can-help-us-to-meet-user-needs/).

## Written content

- Use plain English
- Explain unusual words and jargon
- [Explain abbreviations in the first instance](https://developer.paciellogroup.com/blog/2019/03/short-note-the-abbreviation-appreciation-society/)
- [Don't rely on link title attribute](https://developer.paciellogroup.com/blog/2010/11/using-the-html-title-attribute/)
- Put the most important information at the start
- Explain what a user has to do in a clear and concise way
- Use headings and lists to break the content into chunks
- Download links labels should include file format and size
- Headings, links and button text must be unique and descriptive
- Each page should have a unique, descriptive h1 and page title

## Tables

- [Make sure tables are accessible](https://www.gov.uk/guidance/content-design/tables#how-to-make-tables-accessible)
- Only use tables to present data
- Use tables as accessible alternatives to charts and infographics
- Split complex tables into multiple small ones
- Use correct table markup for headers, rows and cells, so screen reader users can understand and navigate them

Read my post about [making data tables more accessible]({{ site.baseurl}}/blog/making-data-tables-more-accessible/).

## Charts

Read my post about [accessible charts]({{ site.baseurl }}/blog/a-plan-for-accessible-charts/).

## Colour and contrast

- [Check colour contrast](http://webaim.org/resources/contrastchecker/) between text and background
- Check design works in black and white
- Don't communicate using colour alone
- Check design works in high contrast mode

## Interaction

- Check design is functional when using a keyboard to navigate
- Check it's visually apparent which page element has current keyboard focus (if it's interactive, it needs focus styles)[https://gomakethings.com/if-its-interactive-it-needs-focus-styles/])
- [Make sure scrollable regions are focusable](https://developer.paciellogroup.com/blog/2016/02/short-note-on-improving-usability-of-scrollable-regions/)
- [Make clickable areas (target size) at least 44 pixels](https://ishadeed.com/article/clickable-area/)
- [Use aria-current if you're styling active page links](https://gomakethings.com/better-more-accessible-active-link-styling/)
- Complex interface components, like sliders, should be avoided when simple solutions, like a text input, can be used instead
- If an experience cannot be made accessible, create another route for users to get that information

## Forms

- [All form inputs should have labels and be linked with a 'for' attribute](https://www.w3.org/WAI/tutorials/forms/labels/#associating-labels-explicitly)
- [Group radios together](https://design-system.service.gov.uk/components/radios/) with a `<fieldset>` and a `<legend>`
- Forms and interactive elements should have useful hints if needed
- Error messages should suggest ways to fix errors
- Error messages should show a summary of errors above the h1 and move focus to it
- Error message summaries should include an h1 message that tells the screen reader user there is a problem, and give a list of descriptive errors with links to the relevant fields
- [Example search form mark-up]({{ site.baseurl}}/blog/accessible-search-form-mark-up/)
- [Close buttons]({{ site.baseurl}}/blog/accessible-close-buttons/)

## Images

- Images should have good alternative text
- If images are purely decorative, then they need an empty alt tag `alt=""`
- Avoid using images of text

Read my post about [SVGs icons]({{ site.baseurl}}/blog/add-svg-icons/).

## Layout and structure

- Use HTML sectioning elements like `<header>`, `<main>` and `<nav>`
- Add a [skip to main content link](https://design-system.service.gov.uk/components/skip-link/)
- Layout should be consistent and predictable
- Do not rely upon shape, size, or visual location (for example, "Click the square icon to continue" or "Instructions are in the right-hand column")
- Check reading and navigation order is logical
- Check page is readable and functional when text size is doubled
- Don't use duplicate id attributes

## iframes

- Use the iframe title attribute to give the content a descriptive title
- Make sure interactive elements inside an iframe are usable with a keyboard
- Make sure interactive elements have a clear focus style
- Test the iframe is readable and functional with browser zoom at 200%
- Test the content doesn't overflow or become truncated when font size is increased

## Manual tests

- Use the service with a keyboard only – no mouse
- Check the page with CSS off
- Zoom in to 300% with the browser
- Increase default browser font size
- Test in high contrast mode
- Check html mark-up is valid
- [Check in a range of browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in)
- [Check using assistive technologies](https://accessibility.blog.gov.uk/2018/09/27/assistive-technology-tools-you-can-use-at-no-cost/)

## Automatic tests

- [WAVE by WebAIM](https://wave.webaim.org/extension/)
- [Axe by Deque](https://www.deque.com/axe/)
- [Lighthouse by Google](https://developers.google.com/web/tools/lighthouse)

Remember that automatic tests aren't perfect.

> It’s important to note, however, that automated accessibility testing tools can only catch 30-50% of your accessibility defects.
> — [Deque](https://www.deque.com/blog/how-to-get-development-on-board-with-accessibility-testing/)

Read [building the most inaccessible site possible with a perfect Lighthouse score from Manuel Matuzović](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/).


## Other accessibility checklists

- [Checklist to avoid the most common accessibility errors from Bruce Lawson](https://www.brucelawson.co.uk/2019/checklist-to-avoid-the-most-common-accessibility-errors/)
- [Tools for designing good-looking accessible interfaces from Sarah L. Fossheim](https://fossheim.io/writing/posts/accessible-design-tools/)
- [Accessibility resources GitHub repo from Phil Sherry](https://github.com/hmrc/accessibility)
- [WCAG Cheat Sheets and Checklists from WebAxe](http://www.webaxe.org/wcag-cheat-sheets/)
- [Doing a basic accessibility check if you cannot do a detailed one guidance from GOV.UK](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one)