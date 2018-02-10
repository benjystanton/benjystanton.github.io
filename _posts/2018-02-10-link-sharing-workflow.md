---
layout: page  
title: "My link sharing workflow"
date: 2018-02-10 08:01:00  
categories: release-notes
---

I’m a big fan of bookmarking links. I won’t always read everything, but I like having them saved somewhere. And although it’s easy to bookmark things in your browser and build up a useful resource for yourself, it annoys me that these links aren’t easily shared.

So, I’ve come up with a workflow that lets me collect and publish [my bookmarked links](/blog/category/links/) on this blog.

## 1. Save links to Pocket

[Pocket](https://getpocket.com) is a neat service that lets you save articles and read them later. It has [plugins](https://getpocket.com/add/) for Chrome on Mac and Safari on iOS, so with one click or a couple of taps I can save things to my account.

## 2. IFTTT (if this, then that) and Google Sheets

[IFTTT](https://ifttt.com/) is another handy service that lets you connect up lots of popular web apps and internet connected things.

I’ve set it up to check my Pocket account and add any links that I bookmark to a [Google Sheet](https://www.google.com/sheets/about/). Each article I bookmark gets saved to the spreadsheet as a new row.

## 3. Copy the data into Jekyll

Next, I need to copy the links from Google Sheets and add them as a CSV to Jekyll’s ```_data``` folder. Now that I’ve got my links stored as structured data I can make use of [Jekyll’s handy templating features](https://jekyllrb.com/docs/datafiles/).

## 4. Create a list of links component

I’ve created a little reusable component that will check the data folder my links and output that as a list.

### Include the component and point it at the data

Insert the component into the blog post and point it to the right month, for example January 2018.

{% highlight html %}
{% raw %}
{% include list-o-links.html list=site.data.links-2018-january %}
{% endraw %}
{% endhighlight %}

### The list component itself

The list component automatically creates an unordered list of links.

{% highlight html %}
{% raw %}
<ul>
  {% for item in include.list %}
  <li><a href="{{ item.url }}">{{ item.label }}</a></li>
  {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

### Example of the generated html

{% highlight html %}
<ul>
<li><a href="https://lawsofux.com/">Laws of UX</a></li>
<li><a href="https://www.mearso.co.uk/blog/todo-system.html">Todo list system</a></li>
<li><a href="https://www.sarasoueidan.com/blog/svg-coordinate-systems/">Understanding SVG Coordinate Systems and Transformations</a></li>
</ul>
{% endhighlight %}

## 5. Steps each month

Now that I’ve set all this up, it’s almost effortless to keep it maintained.

There are a couple of manual steps each month, but this forces me to review anything I’ve saved and prompts me to read a few more articles.

[Check out last month's links](/blog/january-2018-links/)
