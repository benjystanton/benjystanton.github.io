---
layout: layouts/post
title: "Create a list of sample pages for testing"
tags:
- post
- Release notes
---

Having a representative sample of pages to check as I make changes to the blog will be useful for a few reasons.

I can…

1. check pages are building building correctly as I move to Eleventy and Netlify
2. check CSS styling when I setup visual regression testing
3. check for accessibility issues when I do some manual and automatic accessibility testing
4. have a list of different kinds of pages in my [style guide](/style-guide/) for future reference

## How I've picked my list of sample pages

- Key pages (homepage, blog post, list of posts)
- Pages with unique layouts or templates
- Popular pages (I'll check this with [Google Search Console](https://search.google.com/search-console/about))
- Style guide (because it should contain almost every single component)

## List of sample pages

{% include 'partials/page-samples.html' %}

## Further reading

[Preparing to do a basic accessibility check on GOV.UK](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one#preparing-to-do-a-basic-accessibility-check)

