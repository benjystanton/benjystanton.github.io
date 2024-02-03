---
layout: layouts/post
title: "Weeknotes – series 07 episode 04"
tags:
- post
- Weeknotes
- Freelance
- Interaction design

excerpt: "Design Swansea, Shoreline management plans, testing prototypes in other devices, design debt and target size."
---

## Design Swansea 60

I went to Design Swansea on Thursday. I hadn’t realised until I’d got there, but it was their 60th event!

The talks were by photographer [Nick Morrish](https://morrishandco.com/about) and his previous life as an in-house photographer at British Airways. And, Lloyd Morgan the founder of video agency [Rockadove](https://www.rockadove.co.uk/).

I may have signed up to give a talk next month! Planned for Thursday 7th March. It’ll be part of their semi-regular lightning talks event called Design Swansea Cropped. So… I think I only have to talk for maybe 5 or 10 minutes. Not thought too much about the talk yet, but I expect it’ll be about interaction design in government (big surprise). Please come along if you can!

## Shoreline management plans

I found out from Rob that something I started working on with Swirrl back in 2019 or 2020 has gone live.  It’s a data explorer for [shoreline management plans](https://www.gov.uk/guidance/shoreline-management-plans). Aimed at organisations who need to know about coastal flood and erosion risks.

I really enjoyed the early days of the project. It involved lots of iteration, user research, working closely with experts and community feedback sessions… and of course the subject matter was really interesting.

It’s great to see it finally go live. Thankful that Rob picked up the baton and kept going to get it out!

## Test local prototypes from your phone

I wrote myself a refresher guide on how to connect my phone (or any other device) to my MacBook, so that I can test any prototypes that I have running locally on my Mac from my other devices. 

It’s a good way to make sure designs are responsive and work in a range of browsers. But I often forget the specific details of how to set it up.

- Run a prototype (or website generator) locally on your Mac
- Address will be something like `http://localhost:3000`
- Navigate to page you want to test `http://localhost:3000/path/to/page`
- [Find out your Mac’s IP address](https://www.avg.com/en/signal/find-ip-address#mac)
- It will be something like `192.000.00.000`
- Make sure both devices are on the same wifi network
- Navigate to `http://192.000.00.000:3000/path/to/page` on your other device

I used to use apps (Ghostlab?) and terminal packages that helped to do this for me, some of them even synced the page and scroll position to make cross-browser testing even easier. Need to look back into that.

## Managing design debt in Jira

In work, we are thinking about what the next 3 to 6 months looks like, so the design team I’m working with are pulling together user research and any other design issues we are aware of, to make these things get considered in a thorough way.

I’ve been focusing on Jira, as I’m aware that there are lots of issues in there raised by the UCD (user-centred design) and QAT (quality assurance testing) team. They are labelled in different ways (for example ‘UCD’ or ‘accessibility’) or assigned to different epics. But there is no way to see them all in one place to get a sense of what our design debt looks like.

Individually each of these tickets are small, but together they can amass into a huge chunk of work, that importantly can really harm the user experience of a product.

I’ve been wrestling with Jira search to create a filter list that puts all these issues in the same place. We have about 50 so far. Having confidence that I can track them all in one place will give me much more confidence in raising more issues (sorry team).

I think that being able to get a steady amount of these small tickets through every sprint is a sign of healthy, productive team. So this work is good step towards that.

## Target size

I decided to do a bit of a deep dive on target size, these are the articles that I’ve been reading on that subject.

- [Foundations: target sizes by Joe Lamyman](https://tetralogical.com/blog/2022/12/20/foundations-target-size/)
- [Understanding SC 2.5.8: Target Size (Minimum) (Level AA) by World Wide Web Consortium (W3C)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Designing better target sizes by Ahmad Shadeed](https://ishadeed.com/article/target-size/)

## Reading 

- [It's okay to start with a stakeholder's solution. Just don't stop there by Andrew Duckworth](https://grillopress.github.io/2024/01/24/it-s-okay-to-start-with-a-stakeholder-s-solution-just-don-t-stop-there.html)
- [Banning cosmetic discussions in design by Dean Vipond](https://deanvipond.medium.com/banning-cosmetic-discussions-in-design-236f809245b8)
- [Don't be afraid of the Big Long Page by Amy Hupe and Caroline Jarrett](https://amyhupe.co.uk/articles/dont-be-afraid-of-the-big-long-page/)