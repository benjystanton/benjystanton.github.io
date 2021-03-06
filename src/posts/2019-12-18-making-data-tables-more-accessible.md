---
layout: layouts/post
title: Making data tables more accessible
tags:
- post
- Data
- Accessibility
image: "table-structure-square.png"
image-alt: "Think about structure, not just the visual layout. Don't split text and headings across cells."
last_modified_at: 16 October 2020
---

<p>For data tables to be accessible, I like to take care of the graphic design, content design and mark-up. These three things work together to improve the way users able to find, use and understand the data. Last updated on {{ last_modified_at }}.</p>

Whilst working at Office for National Statistics (ONS) I worked with my content design colleagues [Laura](https://twitter.com/Lozza119) and [Paul](https://twitter.com/itspaulmcgroovy) to improve our tables.

We also worked with accessibility specialists at the [Digital Accessibility Centre](https://digitalaccessibilitycentre.org/) and the [UK government accessibility community](https://www.gov.uk/service-manual/communities/accessibility-community). I'm sharing these notes now before they're lost in a Google Drive forever.

## Use semantic mark-up

- Use `<th>` tags to define the header cells.
- Use `<caption>` tags. Captions are like headings for tables, and they help screen reader users understand whether they should listen to, or skip the tables.
- Don't cram sentences or meta data that describe the table (like geographic coverage) into table cells.
- If you need to add extra content like footnotes, wrap the whole table in a `<figure>` tag and insert a `<footer>` tag to hold the footnotes.
- If you're using `<figure>`, it's probably best to use `<figcaption>` instead of `<caption>`.


## Avoid complex markup
- If you're using `colspan` everywhere to merge cells it's probably a sign your table is too complex.
- Split complex tables into a few small ones.

## Think about structure

![](/images/table-structure.png)

- Think about structure, not just the visual layout.
- Don't split text and headings across cells.
- Remember that tables give structure to data.
- Avoid using cells simply to control the layout.

## Borders can help

- Borders (horizontal and/or vertical) can help users to read complex tables.
- It’s sometimes frowned upon to include vertical borders, as it can add extra noise to the design and detract from the meaning, but in some cases they can be useful.
- We met an accessibility expert who had Nystagmus. This is an eye condition which can lead to involuntary eye movement. Vertical borders helped this person to read complex tables.

## Avoid blank cells

- Don't leave cells blank.
- Explain why there isn't a value.
- If space is limited, use "N/A" (to mean “not applicable”).

## Further reading on tables
- [Use short content style to save space by GOV.UK](https://www.gov.uk/guidance/content-design/tables#style)
- [Creating Accessible Tables by WebAIM](https://webaim.org/techniques/tables/data)
- [Everything that Adrian Roselli has written about tables](https://adrianroselli.com/tag/tables)
- [Inclusive Components: Data Tables](https://inclusive-components.design/data-tables/)
- [Tweet from Web Axe](https://twitter.com/webaxe/status/1255864003424706560)
- [Content design for data tables, spreadsheets, CSVs and APIs from Benjy Stanton (GitHub Gist)](https://gist.github.com/benjystanton/f027bfcfa30c009276e069a3e4c74bf5)
- [Accessible data tables from Bruce Lawson](https://www.brucelawson.co.uk/2020/accessible-data-tables/)
- [How screen readers navigate data tables from Léonie Watson](https://tink.uk/how-screen-readers-navigate-data-tables/)
- [Create accessible data tables from he A11Y Project](https://www.a11yproject.com/posts/2016-03-05-accessible-data-tables/)