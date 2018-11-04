---
layout: page
title: NaBloPoMo progress
categories: nablopomo
excerpt: It’s not a dashboard. Definitely not a dashboard.
---

<p class="lede">NaBloPoMo stands for National Blog Posting Month. I’ve decided to join in this November and post something new every day.</p>

For day 4, I've created this page with key figures and a progress bar (don't call it a dashboard). It will update automatically, each time something is posted.

***

<ul class="list-inline">
<li class="margin-right--m list-inline__item"><span class="big-number">{{ site.categories.nablopomo | size }} of 30</span>
<span>posts published</span></li>
<li class="list-inline__item"><span class="big-number">{{ site.categories.nablopomo | size | divided_by: 30.0 | times: 100.0 | floor }}%</span>
<span>complete</span></li>
</ul>

<div class="progress-bar">
  <span style="width: {{ site.categories.nablopomo | size | divided_by: 30.0 | times: 100.0 }}%"></span>
</div>

***

I've wanted to create something like this for a while – and it was a good exercise that forced me to learn a bit more about [Liquid math filters](https://help.shopify.com/en/themes/liquid/filters/math-filters) — be careful when you type that into Google.

It's not perfect — I’ve used some inline styling and empty divs — but overall I'm happy that this effect can be created with CSS alone instead of using images, SVGs or JavaScript.
