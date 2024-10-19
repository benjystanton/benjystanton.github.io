---
layout: layouts/post
title: "Prototype kit and nunjucks special"
tags:
- post
- Weeknotes
- Interaction design
excerpt: "A weeknote starting 14 October 2024."
--- 

{{ excerpt }}

## Sprint planning

I started this week off feeling tired and grumpy, especially because sprint planning last Friday didn't go as I had hoped. Serves me right for writing my last weeknotes before the week was done.

There's pressure on the team to show they can deliver something, and even though there's been plenty of good discovery and alpha work so far it's mostly stored in confluence documentation and peoples' heads.

So, I decided it was better to try and prove that we could make some good progress with the prototype, rather than kick up too much of a fuss on my first sprint.

## Prototyping the layout

Now that we finally had access to a repo to store the [prototype kit](https://prototype-kit.service.gov.uk/docs/), I was able to throw myself into it on Monday morning. 

The sprint goal was to get all of the designs so far into the prototype kit. It was just a couple of pages, but they were both quite complex.

One of the screens displays data to a user in a layout that looks a bit like a table but isn't a table. So I decided to take inspiration from the [summary list component](https://design-system.service.gov.uk/components/summary-list/).

I was struggling with using `flexbox` for a long time to try and get the desired result, but ended up using `display:table` in the end. This approach ensured that the columns were the same width down the page, making it easy to compare similar bits of information.

Part of me still wonders if an actual HTML table might end up being the right way to go. But considering we wanted to make quick progress, I tried not to question the design too much and just wanted to build something that looked right. The approach I took means that we can change this later without breaking everything.

## Pulling json data into the prototype kit

Once the layout was sorted, I was feeling brave, so I decided to try and set up the data as as a separate json file and pull that into the design. I've done things like this using the [Liquid](https://shopify.github.io/liquid/ ) templating language in the past, but I was struggling to understand how to do it with [Nunjucks](https://mozilla.github.io/nunjucks/).

I decided to turn to the [cross Gov Slack](https://x-govuk.github.io/posts/how-to-use-cross-government-slack/) to ask for some help and luckily [Ed](https://www.edwardhorsford.com/), [Joe](https://joelanman.com/) and Harry were able to help out with some tips and examples of similar things they're working on. (Thanks all!)

I put the file `items.json` in the `data` folder…

{% raw %}
```
[
    {
      "title":"Title 1",
      "date":"2024-10-19",
      "category":"news"
    },
    {
        "title":"Title 2",
        "date":"2024-10-19",
        "category":"news"
    },
    {
        "title":"Title 3",
        "date":"2024-10-19",
        "category":"people"
    }
]
```
{% endraw %}

Then added the following to the `session-data-defaults.js` file…

{% raw %}
```
module.exports = {
  items: require('./items.json')
}
```
{% endraw %}

(This approach meant it was stored in session data, so I'd need to clear the prototype data every time I made a change to the json.)

I could now display the data in my pages like this…

{% raw %}
```
<h1>Items ({{ data.items.length }})</h1>
<ul>
{% for item in data.items %}
<li>{{ item.title }} {{ item.date }}</li>
{% endfor %}
</ul>
```
{% endraw %}

## Filtering the data

Next, I wanted to filter the data down to just a certain category before displaying it to the user, but making that work realistically alongside things like pagination was proving quite tricky.

I went back to Slack and got help again from Ed and Joe (thanks again!). The solution included using the [`selectfromarray` filter](https://x-govuk.github.io/govuk-prototype-filters/array/#selectfromarray) which is part of the [x-gov filter plugin](https://x-govuk.github.io/govuk-prototype-filters/) which I'd heard about, but not used.

I needed to filter the data first, by creating a new array like this…

{% raw %}
```
{% set filteredData = data.items | selectFromArray("category", "news") %}
```
{% endraw %}

Then I could use that new array of the data like this…

{% raw %}
```
<h1>Items ({{ filteredData.length }})</h1>
<ul>
{% for item in filteredData %}
<li>{{ item.title }} {{ item.date }}</li>
{% endfor %}
</ul>
```
{% endraw %}

## Macros

Once the data was set up, I pulled it into the interface using a macro. I initially learned about macros from [Vicky's excellent prototype kit](https://medium.com/gov-design/more-efficient-prototyping-with-the-gov-uk-prototype-kit-step-by-step-84ea2832549a) blog post.

(Every time I look at that post, I learn something new. Highly recommend it if you're using the kit.)

I must admit, I don't fully understand the difference between [macros](https://mozilla.github.io/nunjucks/templating.html#macro) and [includes](https://mozilla.github.io/nunjucks/templating.html#include) yet, but it felt like the right approach based on the examples I'd seen. This blog post explains the differences between [includes and macros](https://darthmall.net/weblog/2021/includes-and-macros/) so I need to spend a bit more time reading through it.

## Was it worth it?

This is definitely the most complex prototype I've built so far and I kept asking myself: is it worth making it this complicated, is there an easier way to just "fake it"?

Overall, I'm think that this initial upfront effort will be worth it.

I think keeping everything separated and dynamic, means that we can…

- add more rows or columns of data and the interface will adapt (or at least ignore things it doesn't understand)
- decide to change the way the interface works, and we can do that without interfering with the underlying data
- create newer detailed views later that pull from the same data, keeping the end-to-end journey in sync and feeling more real for the user

Basically, I think it will allow us to iterate easily on the riskiest things.

## Bookmarks

Unrelated things that caught my eye this week…

- [Accessibility severity scale (LinkedIn post) by Karl Goldstraw](https://www.linkedin.com/posts/karlgoldstraw_accessibilitymatters-activity-7251521469082431488-RpMP)
- [Attachment component from GOV.UK Publishing Design Guide](https://design-guide.publishing.service.gov.uk/components/attachment/) (a good example of accessibility acceptance criteria)
- [Hire More Designers, OK? (YouTube video) by John Cutler](https://www.youtube.com/watch?v=HdqX4A_3-bA)
- [Early career framework roadmap from Department for Education](https://ecf-service-manual.education.gov.uk/product/roadmap/)