---
layout: post
title: Weeknotes – series 01 episode 05
categories: weeknotes
image: bulletin-new-and-old-thumb.png
image-alt: The very long bulletin page on the right and the new very short page on the left
excerpt: A trip to GDS to discuss service and graphic design. Plus prototypes, pattern audits and moaning.
---

<p class="lede">This week included a trip to GDS to discuss service design and graphic design. Plus location page prototypes, pattern audits and moaning.</p>

## Monday

Monday was a bank holiday. I needed a day to recover because I went to The Biggest Weekend in Swansea on Sunday. Here's [child 2 getting into the festival spirit](https://www.instagram.com/p/BjT41n4BVTY/?taken-by=benjystanton).

## Tuesday

### Challenge meeting!

![The very long bulletin page on the right and the new very short page on the left]({{ site.url }}/assets/bulletin-new-and-old.png)

On Tuesday I had a meeting with [Andy](https://twitter.com/mr_dudders), [Laura](https://twitter.com/lauradee) and [Ian](https://twitter.com/iankent) to review progress on the [bulletin page redesign](http://www.benjystanton.co.uk/dp-prototype-kit/sprint/25/crime-overview/). Andy wrote in his [weeknotes](http://mrdudders.posthaven.com/week-notes-spring-special) that I seemed nervous. I was nervous. It was called a "challenge" meeting. With my boss and my boss's boss. Who wouldn't be nervous? Anyway, it went well I think and the feedback was basically "keep going but make you sure consider a few things". I made lots of notes.

## Wednesday

### GDS

On Wednesday I went to GDS (Government Digital Service) in London to chat to some of the service designers and graphic designers. I blogged about my [chats with Martin](/blog/how-to-start-a-service-design-community) and my [chat with Mark](/blog/kicking-things-off-with-the-graphic-design-team) separately so I won't go into that here.

### Prototyping on the train

On the train to Paddington from Swansea I started creating a prototype for the [find data by location](http://www.benjystanton.co.uk/dp-prototype-kit/sprint/25/geography/local-authorities/bristol/) journey that we're working on. I think I do some of my best work in 'Coach A' (the quiet carriage on the Great Western Railway between Swansea and Paddington).

## Thursday

### Moaning

On Thursday I turned up late. I needed a lie in after getting back late from London. Then I had a day of meetings and catch-ups. The biggest one was out monthly managers meeting in Digital Publishing. I really enjoy the retrospective we have in that group. But I think I may have moaned too much about emails, workflow pressures and tools. I got the impression people thought I was moaning too much.

It's hard to know sometimes, if something is hard because the work is hard, or whether it's hard because the work is inefficient. There's lots of inefficiencies in the civil service, but you'll wear yourself out complaining about them all.

## Friday

I had zero meetings on Friday (apart from stand-ups). This is rare so I managed to do lots of work.

### Pattern audit

![Annotated print outs of the ONS website]({{ site.url }}/assets/audit.jpg)

I spent a good hour reviewing a pattern audit that our contract UX (user experience) designer had done. We're looking at all the new pages and components that I've been designing for the ONS website and making sure they are heading in the same direction.

I'm trying to introduce visually simpler components and larger typography, as well as more consistency with [GOV.UK elements](https://govuk-elements.herokuapp.com/).

### 'Find data by location' prototype 2

![A prototype website page showing Bristol city and a map]({{ site.url }}/assets/location-prototype.jpg)

I also spent a few hours working on the 'Find data by location' prototype that I started on the train earlier in the week. After demoing it to the team, we decided that we should add in a map, a link to download some mapping data and flesh out the journey to include multiple areas (for example Manchester) and area types (for example regions or local authorities).

I was able to populate the pages using [Jekyll](https://jekyllrb.com/) and a [CSV file](http://geoportal.statistics.gov.uk/datasets/local-authority-districts-december-2017-names-and-codes-in-the-united-kingdom) that I downloaded from the ONS Geoportal. Then I installed a [plugin](https://github.com/avillafiorita/jekyll-datapage_gen/) that allowed me to automatically generate 100s of area pages filled with realistic content. I am super proud of myself.
