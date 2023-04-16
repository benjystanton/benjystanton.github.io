---
layout: layouts/post
title: Accessible close buttons
tags:
- UX
- Accessibility
- Design
- SVG
- Interaction design
- post
image: "download-button-sketch.jpg"
image-alt: "Drawing of a × symbol in a box on grid paper"
last_modified_at: 16 April 2023
excerpt: "A short post about designing close buttons with SVG icons and accessibile mark-up."

---

{{ excerpt }}

## How to design accessible close buttons

- Mark it up as a button, for example `<button type="button">…</button>`
- Include accessible text, for example`<button>Close</button>` or `aria-label="Close"`
- The overall size should be at least 44 pixels in height and width
- Add styles for keyboard focus and mouse hover
- Consider adding an `<svg>` icon
- If you use the multiplication/times character (`×`), be sure to hide it from screen readers with `aria-hidden="true"` (so it's not read out as "times")

## Example mark-up

<button type="button" aria-label="Close">
<svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
<path d="M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z" />
<path d="M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z" />
</svg>
</button>

```
<button type="button" aria-label="Close">
<svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
<path d="M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z" />
<path d="M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z" />
</svg>
</button>
```


## Update 11 May 2020

[Adam Silver](https://adamsilver.io/) suggested that [using a visible text label with the icon](https://twitter.com/adambsilver/status/1256142121142300674) (or even just visible text, with no icon) would improve accessibility for voice dictation software users.

## Update 25 May 2020

[Manuel Matuzović](https://www.matuzo.at/) has written [a great round up of close button bad practices](https://www.htmhell.dev/20-close-buttons/) and a range of solutions on HTMHell.


## Further reading
- [#20 HTMHell special: close buttons from HTMHell](https://www.htmhell.dev/20-close-buttons/)
- [`aria-label` from MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used from W3C](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html)
- [Accessible Modal Dialogs from Scott O'Hara](https://scottaohara.github.io/accessible_modal_window/)
- [Target Size and 2.5.5 from Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Modals dialogues from Bulb Energy's design system](https://design.bulb.co.uk/components/modal)
- [Modal dialogues from GOV.UK design system's backlog](https://github.com/alphagov/govuk-design-system-backlog/issues/30)
- [Accessible Icon Buttons from Sara Soueidan](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)
- [aria-label Does Not Translate from Adrian Roselli](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html)