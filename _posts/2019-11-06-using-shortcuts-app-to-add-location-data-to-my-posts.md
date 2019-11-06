---
layout: post
title: Using Shortcuts app to add location data to my posts
categories: nablopomo
tag: NaBloPoMo2019
---

<p class="lede"></p>

I've been playing around with the [Shortcuts app](https://apps.apple.com/us/app/shortcuts/id915249334) since they added it to iOS. It allows you to string together actions to create automatic workflows.

I think it has a lot of potential for adding some [IndieWeb](https://indieweb.org/) features to my blog, which previously felt out of reach without using services like Instagram or Swarm (Boo!).

## Borrowing an idea from Jeremy Keith

I spotted a while ago that Jeremy has [location checkins](https://adactio.com/notes/16026) attached to his image posts. I really had no idea how I might achieve this until I spotted that the Shortcuts app allows you to grab your phone's location and do stuff with it.

I also realised that Jeremy passes the latitude, longitude and zoom level into an [Open Street Map](https://www.openstreetmap.org/) url that allows users to click through and see a map of the checkin location.

```
https://www.openstreetmap.org/#map=15/51.2211/4.3997
```

## Create a "copy my location" workflow

So I started playing with Shortcuts and came up with this workflow…

<blockquote id="workflow">
  <ul>
    <li>Get location (of my phone)</li>
    <li>Extract the latitude, longitude and city as 3 separate variables</li>
    <li>Insert those variables into a text template (which happens to be a short snippet of html)</li>
    <li>Then copy that to my phone’s clipboard</li>
  </ul>
</blockquote>

<figure class="width-50" aria-describedby="workflow">
  <img src="http://localhost:4000/assets/copy-location-shortcuts.png" alt="">
  <figcaption class="text-small">
    Screenshot of Shortcuts app
  </figcaption>
</figure>

Once workflows are created, you can even add them from the iOS's "Today View", so that they're within easy reach. Having the text snippet in my clipboard means that I can paste into into a text editor when I'm writing posts either on my phone or my laptop.

### Example

<a href="https://www.openstreetmap.org/#map=9/51.47608788174919/-3.179009460568023">Posted from Cardiff, United Kingdom</a>

### HTML

```
<a href="https://www.openstreetmap.org/#map=9/51.47608788174919/-3.179009460568023">
Posted from Cardiff, United Kingdom
</a>
```

## Next steps

There is lots of potential for tweaking this workflow, and reusing the data to create embeddable maps, or categorising posts by location for example.

I'm also working on a more complex workflow that allows me to post photos (with location metadata) directly from my phone to my blog, using my [image post template]({{ site.url }}/blog/creating-the-image-post-layout/). Although that one has more moving parts, so I need to iron out a few things before sharing it.