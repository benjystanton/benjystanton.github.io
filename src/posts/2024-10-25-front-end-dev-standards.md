---
layout: layouts/post
title: "Front-end dev standards"
tags:
- post
- Weeknotes
- Interaction design
excerpt: "A weeknote starting 21 October 2024."
--- 

{{ excerpt }}

Like always, there is pressure on us to hand work over to the devs when we don't quite feel ready. (Or perhaps it's just me that doesn't feel ready?).

I've never really liked handover steps, they don't feel very agile. But, if we don't formally document some kind of acceptance criteria for each bit of work, then experience tells me that front-end development standards won't be met. 

Expensive (to fix later) problems will be baked into the whole architecture of the service.

So, in effort to avoid lengthy handover documents, I'm keen to get some agreement on our "definition of done". Then I can hopefully return my focus to the prototyping and user research side of things.

## Some front-end standards that I think we should be meeting

- Meet accessibility standards
- Use existing design systems
- Follow responsive web design
- Follow progressive enhancement
- Be testable by the UCD team
- Consider different interface states

I've gone into a bit more detail below…

### Meet accessibility standards

- Meet level AA of the [Web Content Accessibility Guidelines 2.2 (WCAG 2.2)](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag)
- Make sure the service works with the most common [assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies)
- Get an accessibility specialist or QAT (Quality Assurance Tester) to [audit the service as we go](https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit)

> Legally, public sector websites and apps must meet accessibility standards. And all suppliers to government have a legal duty to make their technology and services accessible to all, especially people with disabilities.

[Make things accessible and inclusive – GOV.UK](https://www.gov.uk/guidance/make-things-accessible)

## Use existing design systems

- Use [GOV.UK Design System](https://design-system.service.gov.uk/)
- Use [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/)

## Follow progressive enhancement

> All government services must follow progressive enhancement, even if part of the service or a parent service needs JavaScript

[Building a robust frontend using progressive enhancement – GOV.UK](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)

## Follow responsive web design

> Building your service in this way means users get the same content and functionality, regardless of how they access your service. And it will help you to meet government accessibility requirements.

[Making sure your service works well on mobile – GOV.UK](https://www.gov.uk/service-manual/technology/working-with-mobile-technology)

## Be testable by the UCD team

The dev environment should be available for the UCD team to check in a browser before something is considered done. They should be able to inspect the code on their own devices.

Devs should be prepared to fix small issues or create tickets that can be added to the backlog.

## Consider different interface states

User interfaces can be in many different states, like error states, empty states, loading states etc.

This post by Dave Rupert lists out a lot of them: [UI = f(statesⁿ)](https://daverupert.com/2024/02/ui-states/)

## Bookmarks

- [20 uncomfortable messages that I would tell my younger self  about working within Digital Accessibility by Chris Yoong](https://chrisyoong.com/blog/20-uncomfortable-messages-to-tell-younger-self-about-accessibility)
- [Why do we need a design system?](https://medium.com/share-reuse/why-do-we-need-a-design-system-dd15ca8b2361)
- [HTML is for people](https://htmlforpeople.com/)
- [What is my viewport?](https://whatismyviewport.com/)