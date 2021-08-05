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


