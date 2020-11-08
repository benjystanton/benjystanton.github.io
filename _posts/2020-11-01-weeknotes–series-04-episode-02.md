---
layout: post
title: "Weeknotes – series 04 episode 02"
categories: weeknotes swirrl design ux data accessibility
---

<p class="lede">Notes about wireframing, checking accessibility with CSS off, the user-centred design and data community, and designing in the open.</p>

## Wireframing design workflow

Back when I worked at a design agency, we spent hours (sometimes days and weeks) on high fidelity mock-ups. These designs looked great, but often failed when they came into contact with real code, content, devices and users. Around the same time, the whole practice of designing mock-ups started to get a bad rep on #DesignTwitter.

Later, when I worked at DVLA (Driver and Vehicle Licensing Agency) I discovered GDS's (Government Digital Service's) ['sketch first, then prototype' design workflow](https://designnotes.blog.gov.uk/2014/10/13/how-designers-prototype-at-gds/). Sketching with pen and paper is great when all or most of your team are sitting in the same room. But, if the team are distributed across different locations and time zones, then sketches don't work as well.

But I still let those old bad experiences with mock-ups put me off using any digital design tools for a while. So I'm trying to be less precious.

At Swirrl we use [Moqups](https://moqups.com/). It's certainly not "flavour of the month" for web based design tools, but I really like it. I can quickly create and annotate my designs, share links to the live design and export PDFs. And it has some nice diagram features for drawing user journey maps too.

I still think wireframes and mock-ups are sub-optimal for user research, communicating final design quality and documenting detailed design specs. But they definitely have an important part to play in helping me discuss designs with developers, product managers and service owners.

For me it works well where I can pick up a small design change, create a wireframe, critique it with the project team, then prototype it code, all within a single sprint. This workflow helps to spot issues sooner, but also makes sure the wireframe itself doesn't become a "design asset" that needs to be kept up to date.

## Checking accessibility with CSS off

Whilst working on something this week, I was reminded how useful testing prototypes with CSS off can be. There's a useful guide on GOV.UK called [doing a basic accessibility check if you cannot do a detailed one](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one#check-pages-are-usable-when-stylesheets-are-disabled) that recommends checking designs in this way.

I was able to spot that a group of related links wasn't marked up as a list (`<ul>`) in the underlying HTML. The links were also repeated multiple times on the page, and with CSS off it helped me to spot that the same link text was used multiples times.

As a sighted person, I often take for granted how the visual layout of a page can affect the way I understand the content. But with CSS off, it helps me to think about the source order and the underlying content, and how assistive technology might interpret the code in a different way.

I tweeted about this same thing earlier in the year, and there are some useful replies to this tweet if you want to learn more about checking accessibility with CSS off…

> #A11y folks, why is "check the page with CSS off" a useful manual check to do? Is it because some users browse the web this way, or because it helps identify issues with the underlying HTML?<br>— [My tweet on 17 September 2020](https://twitter.com/benjystanton/status/1306521869017919488)

## User-centred design and data community

This week, I also had a chat with the team who organise the [user-centred design and data community](https://designnotes.blog.gov.uk/2020/10/05/introducing-the-user-centred-design-and-data-community/). We're planning the next workshop, where we'll look to develop some principles for designing with data with the rest of the community. There's a [public Trello board where you can keep up to date with our plans](https://trello.com/b/C48j9WTM/user-centred-design-ucd-data-in-government-community-public-board). More on this soon.

## Designing in the open

UX (User experience) designer [Westley Knight](https://twitter.com/westleyknight) got in touch with me [on Twitter to ask about an old blog post](https://twitter.com/westleyknight/status/1322131922026377216) of mine that [I'd posted on the ONS digital blog](https://digitalblog.ons.gov.uk/2017/08/15/picking-things-from-a-long-list/).

The post was about creating a design pattern that allowed users to pick lots of items from a long list (for example, a list of places from across the UK). It's a tricky pattern that often comes up in the work that I do (especially when it comes to filtering datasets by geographical areas).

Anyway, it was nice to know that people are still finding this post useful. I remember that it sparked some useful conversations at the time, and it's a useful reminder to me to keep blogging, working in the open, and sharing my work as I go.