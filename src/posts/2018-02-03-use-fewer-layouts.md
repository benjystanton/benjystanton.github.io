---
layout: layouts/post  
title: "Use fewer layouts"
date: 2018-02-03 21:08:00  
categories: release-notes
---

Jekyll uses templates stored in the `_layouts` folder to apply reusable designs to its pages. In a previous release, I created a list of [page layouts in use on this site](../add-a-list-of-page-layouts) to help me spot inconsistencies.

For this release I've started to reduce the inconsistencies and duplicate code. The user story is the same though…

## User story

As a user, I need the website pages to be consistent, so that I can read and browse them easily.

## Acceptance criteria

- Combine the `page` and `post` layout into one
- Update the `index.md` to use the page layout
- Update the [style guide](http://www.benjystanton.co.uk/style-guide/#layout-templates) to reflect the changes

## What's changed

The biggest change was combining the `page` and `post` layouts. They are very similar, so it makes sense to merge them. But I do need to check if a page is a blog post, so that I can show the post date.

The `if` statement looks something like this…

{% raw %}
{% if page.is_post %}
<small>{{ page.date | date: "%e %B %Y" }}</small>
{% endif %}
{% endraw %}

So that posts know they are posts, I had to add the following snippet to the `_config.yml` file.

{% raw %}
defaults:
  -
    scope:
      path: ""      # empty string for all files
      type: posts   # limit to posts
    values:
      is_post: true # automatically set is_post=true for all posts
{% endraw %}