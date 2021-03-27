---
layout: layouts/post
title: "A plan for accessible maps"
categories: data accessibility design
last_modified_at: 7 December 2020
image: "map-sketch.jpg"
image-alt: "Black and white drawing of map, made up of a polygon, a map pin and a dotted line"
---

<p class="lede">Designing accessible interactive maps is hard. I don’t think I could point to any single thing that I’ve worked on that covers all of the things mentioned here. But, if I was going to start a brand new project, with plenty of time to get things right, this is where I’d start.</p>

The following isn't perfect, I'm really just sharing my workings so far. I hope that if you can see something is wrong or missing, you'll point it out. I’ll definitely iterate and add to this post in future. 

## Accessible map overview

- First, decide if you really need a map
- Make sure information in the map is available elsewhere
- Keep the map simple
- Design the map in black and white first
- Follow web best practice (semantic HTML, progressive enhancement)
- Break the map down into layers (features, dialogues, controls, backgrounds, supporting information)
- Test the map with different browsers and devices including mobiles and keyboards

## First, decide if you really need a map

Maps are complicated, both for the people using them, and the teams building them. Do user research to make sure you really need a map.

## Make sure information in the map is available elsewhere

It's useful to remember that maps, no matter how well done, are an exclusive tool. They require digital literacy, geographic literacy and they rely on visual communication methods to present information. So they shouldn't be relied upon solely to communicate information to your users.

- Think of maps as an enhancement to the service your building, the core content and functionality should be available without the map
- Make sure that any information available via the map is also available via another accessible route (for example, in a nearby bit of text or data table, or in a downloadable spreadsheet)
- Users of geospatial data might need to download the data in GeoJSON or Shapefile format so they can analyse it with GIS (geographic information system) software
- Interactive maps often require JavaScript, so making sure information is available outside of the map is compatible with a progressive enhancement approach too
- Aside: [FixMyStreet](https://www.fixmystreet.com/) uses HTML image maps to work even if the JavaScript doesn’t work, thanks to [Matthew Somerville](https://twitter.com/dracos) for pointing this out

## Keep the map simple

- Break content down into multiple pages or sections that meet specific needs, rather than having a single map that contains all of the things
- Avoid complex interactive maps if you don’t need them, for example a static inline SVG might be enough in some cases
- Don't add panning and zooming and multiple layers if you just need to display a single area and its boundary

## Design maps in black in white first

Don’t use colour alone to convey meaning. Using red and green to convey "good and bad" without labels is a classic bad example of this. I find that designing in black and white first helps me to do this, then I add colour later, as an enhancement.

- Directly label things where possible, or use a separate legend or key, if direct labelling is not possible
- Consider using shading or cross-hatch patterns instead of colour fills
- Consider using unique line styles, for example dotted or dashed lines
- Use high contrast colours clear enough to read (avoid light greys)
- If legends/keys are used, make sure they work in black and white too

## Break the map down into layers

Interactive maps are made up of multiple layers:

- features (points or areas of interest)
- dialogues (for detailed information)
- controls (for example zoom buttons)
- background maps
- supporting information (for example small print)

I like to break down the map, then think about how to make each layer more accessible.

It may be very hard to make maps 100% accessible for everyone, but by considering each component part I think there is plenty of room for improvement and reasonable adjustment.

### Features (points or areas of interest)

Features are the points of interest on the map. The individual data points that users are most interested in. They could be points that mark the location of a town, a line that follows the path of a river or a polygon that maps the outline of a local authority. Often they'll have short text labels that are always visible.

- Interactive lines (for example rivers or roads) should be thick enough and high contrast enough to see
- Interactive elements should be large enough to click on
- You can add clickable labels to lines if the lines themselves are so thin they are hard to tap or click on
- Allow users to zoom in, so that selecting the area they need becomes easier
- Make sure interactive elements have clear affordance or example, if a label is a link to new page, style it to look like a link (blue and underlined) and use semantic HTML (`<a>` instead of a `<div>`)
- Add clear hover style for interactive elements, for example change the line thickness, tint and mouse cursor
- Any interactive elements of the map should have a clear focus style
- If elements are not interactive, they should have a different visual treatment (for example black and white text without an underline)

### Dialogues (for detailed information)

A benefit of interactive maps is that you can progressively disclose details when the user needs, so they don't get bombarded with everything all at once.

- Avoid using tool tips that only appear on mouse hover
- Dialogues need to be keyboard accessible too


### Map controls

Map controls are the buttons, form elements and gestures that the allow users to manipulate how they view the map.

- Common controls include the ability to zoom and pan the map
- Test to make sure these controls are available to all input types, for example mouse, touch, keyboard and voice
- Use visible text labels, not just icons, for less common controls like toggling full screen mode
- Make sure to follow best practice for web forms when adding custom controls (like adding a select menu to change the background map layer)

### Background maps

The background map contains extra context. They typically depict large water bodies, land masses and can include labels for important landmarks like cities.

The images might be generated from satellite photos or they can by stylised illustrations that are common in things like Google Maps.

If you have control of the background layer it’s worth simplifying things down to exactly what you need.

- Turn off any background layers you don’t need, for example hide roads if your users don't need to see them
- Make the text legible, for example increase size and contrast of labels for towns and cities
- Choose background tiles that don’t contrast too much with the foreground layers

### Supporting information, map metadata and descriptive labels

Supporting text such copyright, source and license information is often overlooked in maps.

- Make sure the text has sufficient size and contrast
- Make sure links are styled to look like links
- Icons, elements and sections need to have accessible text labels

## Test the map with a mobile

- Don't rely on complex motions or gestures
- The [doing a basic accessibility check if you cannot do a detailed one from GOV.UK](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one#technology) explains this in more detail
- Make sure users don't accidentally zoom into the map, when they meant to scroll down the page
- Test maps still work at small sizes
- Test map works with touch interfaces

## Test the map with a keyboard

Consider adding a skip link, allowing keyboard users to skip the map completely. Skip link are more commonly used to skip the main navigation, but could be adapted for this purpose too. Read about [skip links in the GOV.UK design system](https://design-system.service.gov.uk/components/skip-link/).

Make sure to check all interactive elements are available to keyboard users. For example users will need to interact with the map controls (like zoom buttons and full screen toggles) as well as any interactive features like points and polygons.

## Do a range of testing

This blog post isn't an exhaustive list of ways to meet all access needs or create something that works with all kind of assistive technology.

It's definetely worth doing your own manual and automatic testing. I've written [a bit about manual and automatic accessibility  testing](https://www.benjystanton.co.uk/blog/accessibility-checklist/#manual-tests) before so I won’t go into more detail here. 

It's also important to do user research (including with people with access needs) and to get some accessibility experts to audit the finished thing.

## Further reading

- [Defra map design standards](https://github.com/DEFRA/design-standards/blob/master/Maps.md)
- [How (not) to make accessible data visualizations, illustrated by the US presidential election by Sarah L. Fossheim](https://fossheim.io/writing/posts/accessible-dataviz-us-elections/)
- [Maps issue from the GOV.UK design system backlog](https://github.com/alphagov/govuk-design-system-backlog/issues/75)
- [Design Accessible Maps from Phase](https://phase.com/magazine/design-accessible-maps/)
- [OS Open Zoomstack styles for colour blind users from Ordnance Survey](https://www.ordnancesurvey.co.uk/blog/2019/12/try-our-new-os-open-zoomstack-styles-for-colour-blind-users/?utm_source=twitter&utm_medium=social&utm_term=&utm_content=&utm_campaign=80b1c9ea-de5b-4e1b-9d13-474ef3a40243)
- [Accessible digital map experiences: a mountain climb or a walk in the park? from David Sloan](https://developer.paciellogroup.com/blog/2020/04/accessible-digital-map-experiences/)
- [What's the best way to mark-up an SVG map? by Benjy Stanton](https://www.benjystanton.co.uk/blog/best-way-mark-up-svg-map/)
- [A plan for accessible charts by Benjy Stanton](https://www.benjystanton.co.uk/blog/a-plan-for-accessible-charts/)
- [Map Accessibility from Minnesota IT Services](https://mn.gov/mnit/about-mnit/accessibility/maps/)

## Services with maps

- [MapItUK from My Society](https://mapit.mysociety.org/area/2553.html)
- [Search for schools and colleges to compare on GOV.UK](https://www.compare-school-performance.service.gov.uk/)
- [Flood map for planning on GOV.UK](https://flood-map-for-planning.service.gov.uk/)
- [Flood warnings for England on GOV.UK](https://flood-warning-information.service.gov.uk/warnings)
- [Alpha local gov service pattern: Apply for a resident's parking permit](https://verify-local-patterns.herokuapp.com/service-patterns/parking-permit/check/design)
- [Prototype organisation page from Digital Land](https://digital-land.github.io/organisation/local-authority-eng/BAR/)
- [UK: New COVID cases in the last week from The Guardian](https://www.theguardian.com/world/2020/oct/13/senior-tory-calls-for-short-sharp-shock-to-curb-covid-surge-bernard-jenkin)
- [MSOA Names from House of Commons Library](https://visual.parliament.uk/msoanames)
- [Coronavirus restrictions from House of Commons Library](https://visual.parliament.uk/research/visualisations/coronavirus-restrictions-map/)
- [FixMyStreet from My Society](https://www.fixmystreet.com/)

## Map prototyping tools

- [My Maps from Google Maps – create basic maps](https://www.google.co.uk/maps/about/mymaps/)
- [Mapbox static map image playground – create realistic static maps for your prototypes](https://docs.mapbox.com/playground/static/)
- [Leaflet – an open-source JavaScript library
for maps](https://leafletjs.com/)
- [Mapstarter – convert Shapefiles and GeoJSON to SVGs](http://mapstarter.com/)
- [GeoJSON.io – edit GeoJSON in the browser](http://geojson.io/)

***

## Thanks

[Cathy Dutton](https://twitter.com/cathy_dutton) and the interaction design team at Defra, [Angharad Stone](https://twitter.com/AngharadStone), [Joe Lanman](https://twitter.com/joelanman), [Simon Everest](https://twitter.com/simoneverest), [John Waterworth](https://twitter.com/jwaterworth), [Rob Chambers](https://twitter.com/robchamberspfc), [Oli Hawkins](https://twitter.com/olihawkins), ONS digital and [Swirrl](https://www.swirrl.com/).


## Updates on 7 December 2020

1. Added a link to [Map Accessibility from Minnesota IT Services](https://mn.gov/mnit/about-mnit/accessibility/maps/) via [Philip Kiff](https://twitter.com/pkiff)
2. Added a note about Shapefiles via [Mike Gifford](https://twitter.com/mgifford)
3. Added a link to [FixMyStreet from My Society](https://www.fixmystreet.com/) and clarification that interactive maps don't always require Javascript via [Matthew Somerville](https://twitter.com/dracos)
4. Added a link to [Defra map design standards](https://github.com/DEFRA/design-standards/blob/master/Maps.md) via [Cathy Dutton](https://twitter.com/cathy_dutton)














