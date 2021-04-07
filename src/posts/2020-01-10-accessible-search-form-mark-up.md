---
layout: layouts/post
title: Accessible search form mark-up
image: "search-icon.jpg"
image-alt: "Drawing of a magnifying glass icon on grid paper"
categories: accessibility
last_modified_at: 21 May 2020
---

<p>A brief checklist for marking-up an accessible search form. Last updated on {{ last_modified_at }}.</p>

- Add `role="search"` landmark to the `<form>`
- Associate the `<label>` and `<input>` using `for="…"` and `id="…"`
- Add `type="search"` or `type="text"` to the `<input>`
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
- [Text input components from GOV.UK Design System](https://design-system.service.gov.uk/components/text-input/)
- [Maybe Ignore type=search from Adrian Roselli](https://adrianroselli.com/2019/07/ignore-typesearch.html)
- [Where to Put Your Search Role from Adrian Roselli](https://adrianroselli.com/2015/08/where-to-put-your-search-role.html)
- [ARIA: search role from MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role)
- [My Priority of Methods for Labeling a Control from Adrian Roselli](https://adrianroselli.com/2020/01/my-priority-of-methods-for-labeling-a-control.html)





