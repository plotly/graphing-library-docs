---
description: How to make Pareto Plots plots in MATLAB<sup>&reg;</sup> with Plotly.
name: Pareto Plots
display_as: financial
order: 4
permalink: matlab/pareto-plots/
thumbnail: thumbnail/
layout: base
language: matlab
page_type: u-guide
---

## Create Pareto Chart

Create a Pareto chart of vector `y`.

<pre class="mcode">
y = [90,75,30,60,5,40,40,5];
figure
pareto(y)

fig2plotly()
</pre>

plot_0_0_create_pareto_chart

`pareto` displays the elements in `y` as bars in descending order and labels each bar with its index in `y`. Since `pareto` displays only the first 95% of the cumulative distribution, some elements in `y` are not displayed. 



<!--------------------- EXAMPLE BREAK ------------------------->

## Label Bars in Pareto Chart

Examine the cumulative productivity of a group of programmers to see how normal its distribution is. Label each bar with the name of the programmer.

<pre class="mcode">
codelines = [200 120 555 608 1024 101 57 687];
coders = {'Fred','Ginger','Norman','Max','Julia','Wally','Heidi','Pat'};

figure
pareto(codelines, coders)
title('Lines of Code by Programmer')

fig2plotly()
</pre>

plot_1_0_label_bars_in_pareto_chart



<!--------------------- EXAMPLE BREAK ------------------------->

## Display All the Values in the Cumulative Distribution

Create a Pareto chart that examines the preferred types of pie in a survey of 200 participants. Include all the values in the cumulative distribution by setting the `threshold` argument to `1`. 

<pre class="mcode">
pies = {'Chocolate','Apple','Pecan','Cherry','Pumpkin'};
votes = [35 50 30 5 80];
pareto(votes,pies,1)
ylabel('Votes')

fig2plotly()
</pre>

plot_2_0_display_all_the_values_in_the_cumulative_distributi



<!--------------------- EXAMPLE BREAK ------------------------->

