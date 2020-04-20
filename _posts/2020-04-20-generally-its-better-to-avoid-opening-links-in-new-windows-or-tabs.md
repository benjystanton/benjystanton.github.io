---
layout: post
title: Generally, it’s better to avoid opening links in new windows or tabs
categories: ux, accessibility, design
---

- It's bad for usability, because it takes control away from users (for example, it breaks the back button functionality) and makes interactions unpredictable
- It's bad for accessibility because it can be disorienting for people, especially those who have access needs associated with perceiving visual content (for example people who use screen readers or screen magnifiers)

## Exceptions

- the link provides help
- the link interrupts an ongoing process
- the link leads to a non-html-document like a PDF
- the link leads to a large image which takes time to load

In these exceptions the link text should clearly state what's going to happen, for example: `<a>Link to a thing (opens in a new window or tab)</a>`

## Source
- [Opening links in a new tab from GOV.UK Design System (preview)](https://deploy-preview-1179--govuk-design-system-preview.netlify.app/styles/typography/#opening-links-in-a-new-tab)
- [Should Links Open In New Windows? from Smashing Magazine](https://www.smashingmagazine.com/2008/07/should-links-open-in-new-windows/)
- [G200: Opening new windows and tabs from a link only when necessary from W3C](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [Link Targets and 3.2.5 from Adrian Roselli](https://adrianroselli.com/2020/02/link-targets-and-3-2-5.html)
- [Open links in a new window or tab GOV.UK Design System (GitHub issue)](https://github.com/alphagov/govuk-design-system/issues/935)
- [Guidance on link content design from GOV.UK](https://www.gov.uk/guidance/content-design/links)
- [Open links in a new window or tab from HMRC Assets Frontend (old)
](http://hmrc.github.io/assets-frontend/components/open-links-in-a-new-window-or-tab/index.html)