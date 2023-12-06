---
layout: layouts/post
title: "Helping to get quality code into production as an interaction designer"
tags:
- post
- Interaction design
- UX
excerpt: "My notes on how interaction designers can work with software developers and testers on agile delivery teams."
---

{{ excerpt }}

I shared this earlier in the week and wanted to expand on it a bit…

> … I think the value an interaction designer can bring to how digital products are delivered (as in … working alongside devs and getting things into production, in a good usable, accessible state) is really undervalued. Creating rough prototypes is only half the battle!<br>
— [Bluesky on Dec 4, 2023 at 17:57](https://bsky.app/profile/benjystanton.bsky.social/post/3kfqfhhmmf62k)

Here are some things I try to do (I never manage to do all of these things, all of the time, though). I've focused on my experience of working in UK gov, but hopefully the principles will apply elsewhere too.

## Tidy up the prototype

I use the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/) to create rough prototypes for use in user research. Once the research is done, it's often useful to go back and tidy up the prototype code so that…
- it uses the [design system's styles, component and patterns](https://design-system.service.gov.uk/) correctly
- it makes sense to other designers in future
- the code valid and accessible, and that it doesn't introduce any bad practices that developers might copy over to the build environments 


## Write handover notes

I'm not a fan of super detailed handover notes, they can be frustrating to keep up to date. I prefer the prototype to explain the design by itself. But, some things are easy to miss when you weren't the person who designed the prototype. Especially if some things are…

- hidden visually
- only appear at certain resolutions
- only appear on certain types of device
- only become apparent when using a particular input method (like a keyboard)

Taking some time to write a few notes can help with handover conversations and when you (or another designer) comes back to the design in future.

I like to include…

- designs - link to prototypes or user flow diagrams
- screenshots - capture the design at key breakpoints
- notes - describe behaviour, decisions, accessibiltiy considerations and anything else to be aware of
- assets - links to any production ready assets like SVG icons
- content - make it easy for engineers to copy and paste any text content
- follow on tasks - any next steps that need to be captured as tickets or tasks, or anything that is out of scope for now

## Write tickets

Documenting handover notes can help with writing tickets too. I think it's healthy for designers to contribute to how tickets are populated, even if the work is going to be picked up by someone else.

View my [ticket template](https://gist.github.com/benjystanton/d701e4d4b3106e7cefcef46c1b60aaf9).

## Have a handover chat

It's good practice to talk to the devs and testers on the team through the design before the development work starts. If the design is a complete surprise to them when they come to pick-up the ticket, that's probably a warning sign.

Be available to respond to their questions as they go. Devs and testers are able to spot things that designers can't, no mattter how good the handover is.

## Design quality insurance and accessibility testing

Before the build goes live, the developers should be able to show you their progress, and give you a chance to check it all over. A chat is good, but I prefer to set some time aside to go through it at my own pace.

I like to be able to inpect the code, and interact with the design on different devices.

The amount of time needed can depend on the team and whether or not you have dedicated testers. But, even with a great test team in place, there are some issues that designers are more likely to spot.

View my notes on basic [accessibility testing](https://gist.github.com/benjystanton/a549446dff269f2229280c97691d6ba8).

It's a good idea to make sure your own prototype passes these tests too, so you can share examples of how to fix things.

## Help developers to write HTML and CSS

Often software developers won't be experts in HTML and CSS, so it's useful if you can recognise code issues and help to fix them. For example…

- Using the correct CSS [style classes](https://design-system.service.gov.uk/styles/) from the design system
- Using semantic HTML, so the code is valid and accessible, for example: nesting `<input>`, `<label>`, and `<legend>` correctly within a fieldset, like with the [radio component](https://design-system.service.gov.uk/components/radios/) on the GOV.UK Design System.