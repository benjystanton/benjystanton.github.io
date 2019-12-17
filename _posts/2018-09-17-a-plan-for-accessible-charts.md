---
layout: post
title: A plan for accessible charts
categories: accessibility data
excerpt: A list of user research findings, accessibility report findings, best practice, resources and good ideas that I’ve collected over the past 2 years.
---

<p class="lede">A list of user research findings, accessibility report findings, best practice, resources and good ideas that I’ve collected over the past 2 years.</p>

The next step is to create some prototype charts and start iterating. But I wanted to write-up and share the work so far, in case it’s useful to others.

## Colour

- Check colour meets contrast standards
- Don’t use colour alone to convey meaning
- Consider colour blind users (use colour blind simulators to check)
- Charts should be readable in black and white
- Check design works in high contrast mode


### Update on colour
<span class="text-small"> By <a href="https://twitter.com/henryjameslau">Henry Lau</a> on 5 December 2018<span>

Thanks to <a href="https://twitter.com/henryjameslau">Henry</a> for suggesting these points about how colour is used by data visualisation producers.

Colour also has semantic meaning. Be careful to check what those colours could mean for people. Meaning also varies culturally so may mean different things outside what you're used to.

Be mindful that when using colour to represents your data that it shows the relationships in your data. E.g. if your data is different categories, your colours should be as distinct as possible. If your data is sequential or represents a range, colour should change in a sensible way. Lab and HCL colour spaces calculate colour based on the way the human eye works, rather than how computers calculate colours.

## Line and bar style

- Consider using patterns or textures to distinguish bars and lines
- [Increase minimum size of elements in chart](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Informational_Graphic_Contrast_(Minimum))
- Label the data directly (instead of a separate keys or legend)

## Present data in alternative ways

- Use titles and descriptions to support the chart
- [Allow users to view data in an html table](https://www.gov.uk/government/publications/government-digital-strategy/government-digital-strategy#people-who-are-already-online)
- Allow users to download the data as a spreadsheet

## Interactive elements

- Interactive elements must have affordance (for example, links should be blue with an underline)
- Make sure interactive elements are usable without a mouse
- All interactive elements should have a focus style
- Tool tips can help some users to read charts, especially users with cognitive conditions
- Download links labels must include file format and size
- Headings, links and button text must be unique and descriptive
- If an experience cannot be made accessible, create another route for users to get that information

## Typography

- Use a minimum font size
- Use consistent font and spacing
- Lines are less than 80 characters wide
- Avoid italics and block capitals
- Use a san-serif font with thick letters
- Make sure text can be resized
- Test the content doesn't overflow or become truncated when font size is increased
- Nest headings in order (for example, H2s only appear after H1s)
- Don't skip heading levels

## Layout

- Design with a mobile-first mindset
- Use a consistent design
- Use simple, well known chart types that users are more likely to understand
- Create a limited number of reusable templates
- Strive to use a simple design
- Reading and navigation order is logical

## SVGs

- Use SVG because they are scalable
- Users can zoom in and they won't become pixellated
- Structure the SVG carefully, so that it makes use of their accessible powers
- Use ARIA tags to improve accessibility
- [Tips for Creating Accessible SVG](https://www.sitepoint.com/tips-accessible-svg/)
- [Making SVG accessible](http://decks.tink.uk/2017/lws/index.html#cover)
- [Accessible SVG line graphs](https://tink.uk/accessible-svg-line-graphs/)
- [How to Make Charts with SVG](https://css-tricks.com/how-to-make-charts-with-svg/)

## HTML mark-up

- Use `figure` element to wrap the chart
- Use `figcaption` for the chart title
- Use `footer` inside the `figure` element to contain any notes or citation information


## Other resources

- [Charts & Accessibility](http://accessibility.psu.edu/images/charts/)
- [Charts, graphs and infographics](https://www.ontario.ca/document/ontario-design-guide/charts)
- [Color brewer](http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)
- [Highcharts accessibility demos](https://www.highcharts.com/a11y.html)
- [Color Contrast Checker](http://webaim.org/resources/contrastchecker/)
- [Color Oracle](http://colororacle.org/)
- [Sim Daltonism colour blindness simulator](https://michelf.ca/projects/sim-daltonism/)
- [Trello - Color Blind Friendly Mode](http://littlebigdetails.com/post/35775193711/trello-color-blind-friendly-mode-makes)
- [Colour Accessibility](https://24ways.org/2012/colour-accessibility)
- [Designing for Colour Blindness](https://medium.com/@sidgtl/designing-for-colour-blindness-b74a9d012ef2)

## Examples of charts across UK government services

- [Ethnicity facts and figures](https://www.ethnicity-facts-figures.service.gov.uk/)
- [Updating the GOV.UK Performance Dashboard](https://gds.blog.gov.uk/2012/11/12/updating-performance-dashboard/)
- [GOV.UK Performance Dashboards](https://www.gov.uk/performance)
- [Magna Charta repo](https://github.com/alphagov/magna-charta)
- [Magna Charta demo](http://alphagov.github.io/magna-charta/)
- [UK Export Finance: annual report and accounts published](https://www.gov.uk/government/news/uk-export-finance-annual-report-and-accounts-published)
