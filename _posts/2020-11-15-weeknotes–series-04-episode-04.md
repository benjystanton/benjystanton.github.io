---
layout: post
title: "Weeknotes – series 04 episode 04"
categories: weeknotes swirrl data accessibility
---

<p class="lede">This week I have been mostly thinking about accessible mark-up and content design for HTML tables (again).</p>

## Adrian's simple, responsive, accessible table

[Adrian's twitter thread about tables](https://twitter.com/aardrian/status/1326150127959105538) really caught my eye this week. The technique shows how you can achieve a simple, responsive, accessible table with just a few lines of HTML…

```
<div>
  role="region"
  aria-labelledby="Caption01"
  tabindex="0">
  <table>[…]</table>
</div>
```

The thread goes into more detail, but a couple of things stood out for me…

1. An overflowing table is interactive, so you need to add `tabindex="0"` to the container so that keyboard users can scroll the content too
2. Anything that receives focus needs an accessible name and role

I've been working with HTML tables for a few years, but I always learn stuff from Adrian. Here's a link to all of [Adrian's blog posts about tables](https://adrianroselli.com/tag/tables). Worth a read if you want to make sure your tables are semantic and accessible.

## Accessible characters in tables

In other table news, I needed to move some data from a spreadsheet to a html table for a project. The table contained mathematical symbols (like "greater than" `>`), but I wasn't sure if screen readers can be relied upon to read out these kind of symbols correctly.

[Annemarie Parsons](https://twitter.com/tweetingFrog) shared a good blog post with me that goes into detail about what you can expect when specific screen readers encounter symbols and characters: [Why Don’t Screen Readers Always Read What’s on the Screen from Deque](https://www.deque.com/blog/dont-screen-readers-read-whats-screen-part-1-punctuation-typographic-symbols/). It's worth noting that the blog post is quite old (2014) so I assume some of the details will have changed, but it's still worth a read to help understand what kind of things can affect how screenreaders announce things.

For these kind of content issues I also like to check [GOV.UK's content style guide](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style) and [ONS's style guide](https://style.ons.gov.uk/) for best practice.

I think there's an interesting cross-section here between readability, data literacy and numeracy here which often leads me down the path deciding to write things out in full, to make sure the widest possible range of people can perceive and understand the content.

## One day I'll write a big post about tables

I'd really like to write a big blog post to round-up everything I've learnt about tables. I've been working on services that publish tables for about 4 years, so I feel like I can add some good practical tips.

But for now, for my fellow table nerds, there's this [short post I wrote about tables from 2019](/blog/making-data-tables-more-accessible/).