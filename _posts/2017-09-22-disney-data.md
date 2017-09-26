---
layout: post  
title: Disney data
date: 2017-09-22 11:51:00  
categories: data family
excerpt: Data from our family trip to Disneyland Paris.
---

Back in March we took a family trip to Disneyland Paris.

I collected some data, mainly so that I could play around with styling up key figures and data tables like this...

## Key figures

<span class="data-item bold-xlarge">979</span> <span>miles driven</span>

<span class="data-item bold-xlarge">27</span> <span>miles walked</span>

<span class="data-item bold-xlarge">50,720</span> <span>steps</span>

<span class="data-item bold-xlarge">7.8</span> <span>hours spent queueing</span>

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

<tr>
<th scope="row">Monday</th>
<td class="cell--right">15065</td>
<td class="cell--right">6.94</td>
</tr>

<tr>
<th scope="row">Tuesday</th>
<td class="cell--right">19831</td>
<td class="cell--right">9.14</td>
</tr>

<tr>
<th scope="row">Wednesday</th>
<td class="cell--right">14818</td>
<td class="cell--right">6.80</td>
</tr>

<tr>
<th scope="row">Thursday</th>
<td class="cell--right">10006</td>
<td class="cell--right">4.60</td>
</tr>

</tbody>

</table>

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


{% for disney in site.data.disney %}
<tr>
<th scope="row">{{ disney.day }}</th>
<td><a href="{{ disney.attraction-url }}">{{ disney.attraction }}</a></td>
<td class="cell--right">{{ disney.time }}</td>
</tr>
{% endfor %}


</tbody>

</table>
