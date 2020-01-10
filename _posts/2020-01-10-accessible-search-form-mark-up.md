---
layout: post
title: Accessible search form mark-up
categories: accessibility
---

<p class="lede">A brief checklist for marking-up an accessible search form.</p>

- Add `role="search"` landmark to the `<form>`
- Associate the `<label>` and `<input>` using `for="…"` and `id="…"`
- Add `type="search"` to the `<input>`
- Add `type="submit"` to the `<button>`
- Optionally, associate the `<input>` with any help text using `aria-describedby="…"`

## Example

```
<form role="search">
    <label for="search">Search</label>
    <input id="search" type="search" aria-describedby="search-help-text">
    <button type="submit">Search</button>
    <p id="search-help-text">Search by town or postcode.</p>
</form>
```

## More info
- [Text input components – GOV.UK Design System](https://design-system.service.gov.uk/components/text-input/)
- [My Priority of Methods for Labeling a Control – Adrian Roselli](https://adrianroselli.com/2020/01/my-priority-of-methods-for-labeling-a-control.html)





