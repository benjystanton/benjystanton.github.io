---
layout: layouts/post
title: "Customising checkbox question pages with the GOV.UK Prototype Kit and Nunjucks"
tags:
- post
- Weeknotes
- Season 2
- Interaction design
excerpt: "A weeknote starting 22 April 2025."
--- 

{{ excerpt }}

I've been doing some more prototyping this week, using the excellent [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/).

I needed to recreate a [checkbox](https://design-system.service.gov.uk/components/checkboxes/) question page to mimic an existing product.

There were a few things that took me a second to figure out so I'm capturing them here to help me next time. This is because I was in a bit of rush and a little rusty with the kit.

I needed to:

1. add html to the hint text
2. show which options the user has selected, if they return to the question page later
3. show a list of selected options when the user checks their answers later

## 1. Add html to the hint text

I like to use the [Nunjucks](https://prototype-kit.service.gov.uk/docs/add-change-nunjucks-components) code whenever I can, but it can mean that customisation is different to editing plain html and sometimes the options are constrained (for good reason). But, there are lots of options available to modify the Nunjucks code.

Here's how to add custom html in place of the normal hint text.

The default code looks like this…

```
hint: {
    text: "Select all that apply"
  },
```

Use html in the hint text like this…

```
hint: {
    html: "Some <span>example html</span> can go here."
  },
```

My assumption is that I should be careful not to add too much complexity to the hint text, so it's perhaps not wise to stuff complex html in here.

## 2. Show which options the user has selected, if they return to the question page later

I wanted to make sure that if users navigate backwards in the form, that their answers are saved. So they can see which checkbox are selected, allowing them to review and optionally change them.

This is pretty much standard behaviour in the prototype kit, and it's documented here: [Let the user change their answers](https://prototype-kit.service.gov.uk/docs/make-first-prototype/let-user-change-answers).

But, in my rush, I missed that I needed to use the `values` option (with an s), not the `value` option (without an s). This makes sense as there can be more than one.

Here's an example…

{% raw %}
```
{{ govukCheckboxes({
  name: "example",
  values: data["example"],
```
{% endraw %}

## 3. Show a list of selected checkbox options when the user checks their answers later

Lastly, I wanted to show the user's checkbox selection on the [check answers page](https://design-system.service.gov.uk/patterns/check-answers/).

I forgot that, because a checkbox question allows users to select multiple options, then the data for the answer is stored as an array, which is a is like a collection of things, rather than a single thing.

So, if you want to control the way they display (like showing the answers in a list) I needed to use a for loop.

This is documented here: [Pass data from page to page](https://prototype-kit.service.gov.uk/docs/pass-data).

Here's an example…

{% raw %}
```
<ul>
{% for item in data['example'] %}
  <li>{{ item }}</li>
{% endfor %}
</ul>
```
{% endraw %}

## Conclusion

In hindsight, all of these examples are fairly simple things that the prototype kit handles out of the box. But I find that writing reusable code snippets like this can come in handy later. I have a few more like this which I might try and publish one day.

## Related

[More efficient prototyping with the GOV.UK prototype kit: step by step (updated January 2024) by Vicky Teinaki](https://www.vickyteinaki.com/blog/more-efficient-prototyping-with-the-gov-uk-prototype-kit-step-by-step/)