---
layout: layouts/post
title: "Weeknotes – series 06 episode 09"
tags:
- post
- Weeknotes
- Made Tech
excerpt: "New sprint, writing UCD tickets, design QA (including basic accessibility checks)."
image: "accessibility-shortcuts.jpg"
image-alt: "iPhone screenshot showing accessiblity shorcuts: Colour Filters, Voice Control, VoiceOver and Zoom are listed."
---

## Goodbye old team, hello new sprint

It was sprint change over this week, and the last of the old supplier’s team were leaving, including the old designer. So I’m on my own now, so to speak.

We did a final run Sketch through to make sure I had all the correct fonts, plugins and libraries. And I tested that I can publish changes to Zeplin. The team uses Zeplin to share designs from Sketch with the engineers.

I like that there’s an established workflow to follow, and there are lots of plus points. For example, you can set the design layers to be associated with iPhone or Android specs, so it will create values (like measurements and colours) in the correct format for the engineers. But, Zeplin seems incredibly slow even when just exporting one layer. It might get tedious in future.

But for now the designs are all up-to-date, and very neatly organised, and I don’t have any new designs to create, so just something to keep an eye on.

## Writing Jira tickets for user-centred design (UCD) tasks

I’ve started to create my own tickets which feels like a little win. The client uses Jira, which I haven't used since I worked at DVLA. Generally I prefer Trello or GitHub projects, but I'm getting to grips with Jira slowly. Me and the user researcher have been thinking about how best to write tickets for UCD tasks.

Some ideas we came up with…

- **User story** – include one whenever we can
- **Outcome** – what user need, problem or outcome are we trying to meet/solve?
- **Sizing or story points** – build up examples for how long typical UCD things take
- **Links** – link to previous user research, epics and design mock-ups
- **Accessibility and inclusion** – add notes about access needs and barriers
- **Interaction** – show user flows for key changes in component states and page navigation

## Design quality assurance (QA) 

{%
  include 'partials/image-with-caption.html'
  image:"accessibility-shortcuts.jpg"
  caption:"Some of the iPhone accessibility features I've been learning about"
  alt-text:"iPhone screenshot showing accessiblity shorcuts: Colour Filters, Voice Control, VoiceOver and Zoom are listed."
%}

We’re releasing a big new feature on the app, so I’m spending some time this sprint to do a design QA. I’m testing the public beta on my personal iPhone. (I’ve ordered some other iOS and Android devices from Made Tech too).

Here’s the rough process I’m following so far (room for improvement here)…

- Create a sample list of pages/components to check
- Check in portrait mode and landscape mode
- Check against the mock-ups (in Zeplin)
- Check with Dark mode
- Basic VoiceOver check
- Basic Voice Control check (to check hidden labels and focus order)
- Check the design with colour filters
- Increase text size

This blog post about testing with Voice Control was really useful: [New in iOS 13 Accessibility – Voice Control and More – Deque](https://www.deque.com/blog/new-in-ios-13-accessibility-voice-control-and-more/).

I also followed this: [Doing a basic accessibility check if you cannot do a detailed one - GOV.UK](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one).

## Other things

- The Design Swansea meet-up is back, for its first event since the pandemic – [grab a free Design Swansea ticket](https://www.eventbrite.co.uk/e/design-swansea-47-with-craig-jones-tickets-406792195407 )
- Formal job role guidance launched by GOV.UK about [accessibility specialists](https://www.gov.uk/guidance/accessibility-specialist)

