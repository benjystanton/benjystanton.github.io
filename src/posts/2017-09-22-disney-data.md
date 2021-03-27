---
layout: layouts/post   
title: Disney data
date: 2017-09-22 11:51:00  
categories: personal
excerpt: Data from our family trip to Disneyland Paris.
---

Back in March we took a family trip to Disneyland Paris.

I collected some data, mainly so that I could play around with styling up key figures and data tables like this...

## Key figures

<div class="flex-grid">
  <div class="flex-grid__col flex-grid__col--half margin-bottom--s">
  {% include partials/big-number.html
    big-number="979"
    text="miles driven"
  %}
  </div>
  <div class="flex-grid__col flex-grid__col--half margin-bottom--s">
  {% include partials/big-number.html
    big-number="27"
    text="miles walked"
  %}
  </div>
  <div class="flex-grid__col flex-grid__col--half margin-bottom--s">
  {% include partials/big-number.html
    big-number="7.8"
    text="hours spent queueing"
  %}
  </div>
  <div class="flex-grid__col flex-grid__col--half margin-bottom--s">
  {% include partials/big-number.html
    big-number="6"
    text="buffets"
  %}
  </div>
  <div class="flex-grid__col">
  {% include partials/big-number.html
    big-number="50,720"
    text="steps"
  %}
  </div>
</div>

## Walking

<table>

<caption><h3>How far we walked each day</h3></caption>

<thead>

<tr>
<th scope="col">Day</th>
<th scope="col" class="cell--right">Steps</th>
<th scope="col" class="cell--right">Miles</th>
</tr>

</thead>

<tbody>

{% for distance-walked in site.data.distance-walked %}
<tr>
<th scope="row">{{ distance-walked.day }}</th>
<td class="cell--right">{{ distance-walked.steps }}</td>
<td class="cell--right">{{ distance-walked.miles }}</td>
</tr>
{% endfor %}

</tbody>

</table>

## Queue time

<table>

<caption><h3>How long we waited for each attraction</h3></caption>

<thead>

<tr>
<th scope="col">Day</th>
<th scope="col">Attraction</th>
<th scope="col" class="cell--right">Queue time (minutes)</th>
</tr>

</thead>

<tbody>


{% for queue-time in site.data.queue-time %}
<tr>
<th scope="row">{{ queue-time.day }}</th>
<td><a href="{{ queue-time.attraction-url }}">{{ queue-time.attraction }}</a></td>
<td class="cell--right">{{ queue-time.time }}</td>
</tr>
{% endfor %}


</tbody>

</table>
