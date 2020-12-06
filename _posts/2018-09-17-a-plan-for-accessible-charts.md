---
layout: post
title: A plan for accessible charts
categories: accessibility data svg
excerpt: A list of user research findings, accessibility report findings, best practice, resources and good ideas that I’ve collected over the past 2 years.
last_modified_at: 6 December 2020
image: "a11y-chart.jpg"
image-alt: "Sketch of the word A11y on grid paper boxed in by x and y axis lines"
---

<p class="lede">A list of user research findings, accessibility report findings, best practice, resources and good ideas that I’ve collected. Last updated on {{ page.last_modified_at }}.</p>

## How to make accessible charts

- Keep the layout simple and mobile friendly
- Present the information in more than one way
- Use clear, readable typography
- Check the chart is understandable in black and white
- Label the data directly
- Don't use light shades and colours
- Use valid, semantic mark-up
- Interactive elements should be controllable with a keyboard
- Use vector formats that can be zoomed-in (like SVG)
- Consider using patterns or textures to distinguish bars and lines

Read on for more detail.

## Colour

- Check colour meets contrast standards
- Don’t use colour alone to convey meaning
- Consider colour blind users (use colour blind simulators to check)
- Charts should be readable in black and white
- Check design works in high contrast mode



### Update on 5 December 2018<small>

Thanks to <a href="https://twitter.com/henryjameslau">Henry</a> for suggesting these points about how colour is used by data visualisation producers…

> Colour also has semantic meaning. Be careful to check what those colours could mean for people. Meaning also varies culturally so may mean different things outside what you're used to.<br><br>Be mindful that when using colour to represents your data that it shows the relationships in your data. E.g. if your data is different categories, your colours should be as distinct as possible. If your data is sequential or represents a range, colour should change in a sensible way. Lab and HCL colour spaces calculate colour based on the way the human eye works, rather than how computers calculate colours.

## Line and bar style

- Consider using patterns or textures to distinguish bars and lines
- [Increase minimum size of elements in chart](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Informational_Graphic_Contrast_(Minimum))
- Label the data directly (instead of a separate keys or legend)

This [game on the Apple app store uses some nice patterns](https://apps.apple.com/gb/story/id1510045637) to help make the game usable for people with colour vision deficiency. 

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
- [Reliable and Valid SVG Accessibility](https://fizz.studio/blog/reliable-valid-svg-accessibility/)

[Read more about SVGs in this blog post]({{ site.url}}/blog/add-svg-icons/)

## HTML mark-up

- Use `figure` element to wrap the chart
- Use `figcaption` for the chart title
- Use `footer` inside the `figure` element to contain any notes or citation information

## Other resources

- [An introduction to accessible data visualizations with D3.js from Sarah L. Fossheim](https://fossheim.io/writing/posts/accessible-dataviz-d3-intro/)
- [An intro to designing accessible data visualizations from Sarah L. Fossheim](https://fossheim.io/writing/posts/accessible-dataviz-design/)
- [Why Accessibility Is at the Heart of Data Visualization from Doug Schepers](https://medium.com/nightingale/accessibility-is-at-the-heart-of-data-visualization-64a38d6c505b)]
- [Making analytical publications accessible](https://gss.civilservice.gov.uk/policy-store/making-analytical-publications-accessible/)
- [What to consider when visualizing data for colorblind readers from Lisa Charlotte Rost](https://blog.datawrapper.de/colorblindness-part2/)
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
- [Data Visualization and Accessibility: Three Recommended Reads and Top Tips from Susan Currie Sivek](https://towardsdatascience.com/data-visualization-and-accessibility-three-recommended-reads-and-top-tips-9c5e862b464e)

## Examples of charts across UK government services

- [Ethnicity facts and figures](https://www.ethnicity-facts-figures.service.gov.uk/)
- [Updating the GOV.UK Performance Dashboard](https://gds.blog.gov.uk/2012/11/12/updating-performance-dashboard/)
- [GOV.UK Performance Dashboards](https://www.gov.uk/performance)
- [Magna Charta repo](https://github.com/alphagov/magna-charta)
- [Magna Charta demo](http://alphagov.github.io/magna-charta/)
- [UK Export Finance: annual report and accounts published](https://www.gov.uk/government/news/uk-export-finance-annual-report-and-accounts-published)
