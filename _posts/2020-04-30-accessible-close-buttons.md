---
layout: post
title: Accessible close buttons
categories: ux accessibility design
image: "download-button-sketch.jpg"
image-alt: "Drawing of a × symbol in a box on grid paper"
---

- Mark up as a button, e.g. `<button type="button"></button>`
- Tap target should be at least 44px
- Needs an accessible text label, for example `aria-label="Close"`
- Use an `<svg>` icon or a `×` character 
- Add styles for keyboard focus and mouse hover

## To do
- Look into things to consider for voice input software, like Dragon NaturallySpeaking

## Example mark-up

```
<button type="button" aria-label="Close">
<svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
<path d="M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z" />
<path d="M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z" />
</svg>
</button>
```

## Further reading

- [Using the aria-label attribute from MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used from W3C](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html)
- [Accessible Modal Dialogs from Scott O'Hara](https://scottaohara.github.io/accessible_modal_window/)
- [Target Size and 2.5.5 from Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Modals dialogues from Bulb Energy's design system](https://design.bulb.co.uk/components/modal)
- [Modal dialogues from GOV.UK design system's backlog](https://github.com/alphagov/govuk-design-system-backlog/issues/30)