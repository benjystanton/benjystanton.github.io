---
layout: post  
title: "Change date format"
date: 2018-01-27 22:16:00  
categories: release-notes
---

The "published on" date sometimes appeared below the post-title and sometimes it appeared above it. I wanted to fix this small inconsistency. I also wanted to take this opportunity to make the date format a bit more natural by removing the leading zero from the date and writing out months in full.

## User story

As a user, I need to know when an article was written, to help me decide if the content is still relevant.

## Acceptance criteria

- Date format is changed from `01 Jan 2018` to `1 January 2018` to match the [GDS content style guide](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#dates)
- Use the [Shopify Liquid](https://shopify.github.io/liquid/filters/date/) and [STRFTIME](http://strftime.net/) resources to control the date format
- Date is moved below the title on post pages
