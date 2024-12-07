---
layout: layouts/post
title: "Weeknotes – series 07 episode 05"
tags:
- post
- Weeknotes
- Orange team
- Interaction design

excerpt: "Stress, stakeholder demos, links without hrefs and Bluesky."
---

## Stressful week

This week has been stressful. If the ‘how much I’ve moaned at my partner scale’ is anything to go by, then it’s probably about 7 out of 10.

The product I’m working on is heading towards a private beta, and I’m constantly worrying about things we could be doing better. I know it’s part of a designer’s job to be thinking about ways to improve quality and better meet user needs, but I think I let it get the better of me this week, and I let my worries spill over, and perhaps distracted others on the team with things that didn’t need to be addressed yet.

But, it definitely hasn’t been all bad…

## Prototype demos

I’ve been going round various external show and tells, showing our latest prototype to stakeholders across the wider organisation.

Many of the people at the show and tells represent our users, so it’s been good to get a sense of their reactions. Their feedback and questions were positive (if a little reserved). Previously the prototype has been described as “clunky” and nobody said that this time. Phew.

I’ve done the same presentation 3 times now, and there’s even a recording of me doing it, so I’ve been immortalised on the department’s Sharepoint for generations to watch.

## Links withouts `hrefs`

I was reviewing a screen this week and spotted that it contained many links without `href` attributes. That's the bit of the link that tells browsers which page to go to when clicked.

JavaScript was being used to add the link’s destination URL in. Apart from the [progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) issues, I felt like this was going to cause accessibility problems too.

I wanted to report this issue, but first I wanted to gather some evidence and resources about why this was bad practice and how it could introduce barriers to users.

Here’s what I found out about links without `href`s

- the links rely on CSS to work, so if CSS is disabled, or customised by the user, then the links might not look or act as expected
- extra code is needed to make the links work with keyboard navigation
- link styling can be unpredictable on Windows High Contrast Mode
- the links can act unexpectedly with some screen readers

Read more about this in [links, missing href attributes, and over-engineered code by Martin Underhill](https://www.tempertemper.net/blog/links-missing-href-attributes-and-over-engineered-code)

This page by The Ally Project is also good primer on [creating valid and accessible links](https://www.a11yproject.com/posts/creating-valid-and-accessible-links/).

## Bluesky is open

Bluesky seems to be emerging as the place for government digital people to migrate to, now that Elon is ruining Twitter. If you want to try it out, it’s open for anyone to sign up to…

[View my profile or join Bluesky](https://bsky.app/profile/benjystanton.co.uk)

Bluesky is far from perfect, but I really hope we (as a community) find somewhere that rekindles the spirit of early Twitter.

## Reading (and listening to)

- [Design and uncertainty by Vicky Teinaki](https://www.vickyteinaki.com/blog/design-and-uncertainty/)
- [What Can a Website Do? By Dave Rupert](https://daverupert.com/2024/01/what-can-a-website-do/)
- [Weeknotes No.56 by Michael Cattell](https://michaelcattell.com/2024/02/03/weeknotes-no56.html)
- [Essential Service Design Secrets by Jo Carter](https://www.weareserviceworks.com/blog/service-design-secrets)
- Podcast: [Designing content for Welsh language users by Robert Mills and Nia Campbell](https://www.fourthwallcontent.com/podcasts/designing-content-for-welsh-language-users)

## Bookmarks

A few things that I didn’t get round to reading, but don’t want to forget about…

- [Making a character count component more accessible by David Cox](https://dav-idc.com/making-a-character-count-component-more-accessible/)
- [What's new in WCAG 2.2 by AbilityNet](https://abilitynet.org.uk/webinars/whats-new-wcag-22)
- [Getting started with manual accessibility testing by Martin Underhill](https://speakerdeck.com/tempertemper/getting-started-with-manual-accessibility-testing)
- [In Loving Memory of Square Checkbox by Niki](https://tonsky.me/blog/checkbox/)
- [Major new work: harmful design in browser choice by Cennydd Bowles and Harry Brignull](https://cennydd.com/writing/major-new-work-harmful-design-in-browser-choice)
- [Coronavirus Extremely Vulnerable People by Joe Lanman](https://joelanman.com/projects/coronavirus-extremely-vulnerable-people/)
- [Weeknotes 09/02/2024 by Heledd and Alex at Natural Resources Wales](https://nrw-digital.github.io/week-notes/en/updates/2024/02/09/week-notes.html)