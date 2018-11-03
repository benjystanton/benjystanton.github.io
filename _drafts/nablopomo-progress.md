---
layout: page
title: NaBloPoMo Progress
categories: nablopomo
---

<p class="lede">NaBloPoMo stands for National Blog Posting Month. I’ve decided to join in this November and post something new every day.</p>

For day 5, I've created this dynamically updating dashboard. God that sounds cheesy. But it was a fun task that pushed my templating and CSS skills.

<ul class="list-inline">
<li class="margin-right--m list-inline__item"><span class="big-number">{{ site.categories.nablopomo | size }} of 30</span>
<span>posts published</span></li>
<li class="list-inline__item"><span class="big-number">{{ site.categories.nablopomo | size | divided_by: 30.0 | times: 100.0 | floor }}%</span>
<span>complete</span></li>
</ul>

<div class="progress-bar">
  <span style="width: {{ site.categories.nablopomo | size | divided_by: 30.0 | times: 100.0 }}%"></span>
</div>
