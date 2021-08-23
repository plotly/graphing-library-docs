---
layout: post
title:  MATLAB histogram
description: Learn how to make histograms in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/data-distribution-plots/histogram/
layout: matlab
function: histogram
reference: https://www.mathworks.com/help/matlab/ref/matlab.graphics.chart.primitive.histogram.html
github: data-distribution-plots/2021-08-04-histogram.md
---

<!-- # MATLAB - `{{page.function}}` -->

<!--------------------- EXAMPLE BREAK ------------------------->
## Histogram of Vector

> Generate 10,000 random numbers and create a histogram. The histogram function automatically chooses an appropriate number of bins to cover the range of values in x and show the shape of the underlying distribution.

<pre class="mcode">
x = randn(10000,1);
h = histogram(x)

fig2plotly()
</pre>

{% include posts/mframe.html src="https://plotly.com/~jackp/18796.embed" %}

<!--
## Specify Number of Histogram Bins

> Plot a histogram of 1,000 random numbers sorted into 25 equally spaced bins.

<pre class="mcode">
x = randn(1000,1);
nbins = 25;
h = histogram(x,nbins)

fig2plotly()
</pre>

{% include posts/mframe.html src="https://plotly.com/~jolinos/21.embed" %}

-->

<!--------------------- EXAMPLE BREAK 
## Specify Bin Edges of Histogram

> Generate 1,000 random numbers and create a histogram. Specify the bin edges as a vector with wide bins on the edges of the histogram to capture the outliers that do not satisfy |<var>x</var>|<2. The first vector element is the left edge of the first bin, and the last vector element is the right edge of the last bin.

<pre class="mcode">
x = randn(1000,1);
edges = [-10 -2:0.25:2 10];
h = histogram(x,edges);

fig2plotly()
</pre>

{% include posts/mframe.html src="https://plotly.com/~jolinos/21.embed" %}
-->