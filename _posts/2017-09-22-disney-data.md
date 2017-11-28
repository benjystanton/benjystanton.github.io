---
layout: post  
title: Disney data
date: 2017-09-22 11:51:00  
categories: data family
excerpt: Data from our family trip to Disneyland Paris.
day: monday
---

Back in March we took a family trip to Disneyland Paris.

I collected some data, mainly so that I could play around with styling up key figures and data tables like this...

## Key figures

<span class="data-item bold-xlarge">979</span> <span>miles driven</span>

<span class="data-item bold-xlarge">27</span> <span>miles walked</span>

<span class="data-item bold-xlarge">50,720</span> <span>steps</span>

<span class="data-item bold-xlarge">7.8</span> <span>hours spent queueing</span>

<span class="data-item bold-xlarge">6</span> <span>buffets</span>

## Walking

<table>

<caption>How far we walked each day</caption>

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
<th scope="row">{{ distance-walked.steps }}</th>
<td class="cell--right">{{ distance-walked.steps }}</td>
<td class="cell--right">{{ distance-walked.steps }}</td>
</tr>
{% endfor %}

</tbody>

</table>

{{site.data.distance-walked.steps}}

## Queue time

<table>

<caption>How long we waited for each attraction</caption>

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
