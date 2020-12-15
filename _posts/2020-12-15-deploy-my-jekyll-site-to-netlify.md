---
layout: post
title: "Deploy my Jekyll site to Netlify"
categories: release-notes
---

Before I switch to building the site with Eleventy, I want to move my current Jekyll site over to Netlify. This will help me to take advantage of [some of the things that Netlify does versus GitHub Pages](https://www.netlify.com/github-pages-vs-netlify/).

The most important feature to me right now is the ability to compare my current Jekyll site to another branch where I'll be making some big changes (rebuilding it with Eleventy). I basically want to swap out Jekyll and replace it with Eleventy without any major changes noticeable on the front-end, to begin with.

Another thing I like about Netlify is that it gives you a summary of what it's doing when a build is triggered. So you can follow the steps it's taking and you can see when the build is published. With GitHub Pages (unless I'm missing something?) you just have to just wait for the change to happen, and then check if it's done by refreshing your browser.

I’m pretty familiar with Netlify because we use it at [Swirrl](https://www.swirrl.com/), but I was still surprised at how easy it was to get the site up and running. It took less than 5 minutes before it was built and deployed to a preview URL. Netlify generates unique preview URLs automatically that are really handy for testing things as you go.

I basically needed to follow these [Connecting to Netlify](https://www.netlify.com/blog/2020/04/02/a-step-by-step-guide-jekyll-4.0-on-netlify/#connecting-to-netlify) steps, and the automatic settings all worked without me needing to tweak anything.

After a quick glance, the preview site is looking good, but I'm going to do some more formal testing with [BackstopJS](https://garris.github.io/BackstopJS/). This is mainly because I want some practice with visual regression, rather than me expecting anything to have gone wrong.

Once I'm satisfied that Netlify has built and deployed everything correctly, I will then direct my custom domain (benjystanton.co.uk) away from GitHub Pages and point it at Netlify.
