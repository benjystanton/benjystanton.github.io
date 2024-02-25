---
layout: layouts/post
title: "HTML tables and wrapping long words"
tags:
- post
- Interaction design
excerpt: "."
---

This week, I learnt that the `overflow-wrap: break-word;` doesn’t work well with HTML tables (by default).

## The problem

I’m working on a table. It contains a few columns, and one of the columns has user-generated content inside. So it could contain a few sentences, and obviously we can’t predict exactly what a user might enter.

So… very long words, emails and URLs can cause the layout to breakdown. In our case, that means the table becomes wider than the browser window, causing horizontal scrolling.

Eventually, I feel it would be best to move away from using HTML tables for this purpose. But for now, we need a quick fix.

## Current solution

We’re currently using `word-break: break-all;`. This tells words to break whenever they reach the edge of the container.

This doesn’t feel great, because even very short words (e.g. “Feb”) will break and wrap over 2 lines. 

And, longer paragraphs fill all the available space. So there is no ragged edge on one side. This lack of whitespace makes it harder to read, it’s a bit like fully justified text

## Proposed solution


***

# `word-wrap` and `overflow-wrap`

We are currently using…
```
word-break: break-all;
```

I think it’s better to use…
```
word-wrap: break-word;
overflow-wrap: break-word;
```

I’ll need to double check that’s the best technique though. I’ll look into it a little more and let you know.

- Check how this impact very long words
	- pneumonoultramicroscopicsilicovolcanoconiosis
	- https://orange.dev.cop.homeoffice.gov.uk/tms/DEV-20240223-351
	- benjy.stanton@digital.homeoffice.gov.uk
- Don’t use inline styles 

```
// Automatic wrapping for unbreakable text (e.g. URLs)
word-wrap: break-word; // Fallback for older browsers only
overflow-wrap: break-word;
```


Content to test

Questions about something at headquarters on 20 Feb (ABC 123 x 4). Pneumonoultramicroscopicsilicovolcanoconiosis. https://www.examplewebsitehere.com/project/REF-123456-789 joe.bloggs@digital.examplewebsitehere.com


***

`word-wrap` and `overflow-wrap`
Doesn’t work with tables
https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html
https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html
https://github.com/alphagov/govuk-design-system-backlog/issues/61
Caveats
- not tested in other browsers
- not sure if this affects accessibility
- I recognise that having long text in tables is not ideal, and feel that using another solution may be better
- Doesn’t work on small screens
- Mention break-all
- And Shaun’s help