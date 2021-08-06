---
layout: post
title:  MATLAB polarhistogram plot
description: Learn how to make Histogram chart in polar coordinates in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/polar-plots/polarhistogram/
layout: matlab
function: polarhistogram
reference:https://www.mathworks.com/help/matlab/ref/polarhistogram.html
github: polar-plots/2021-08-06-polarhistogram.md
---

# MATLAB - `{{page.function}}`

<!--------------------- EXAMPLE BREAK ------------------------->
## Create Histogram Chart in Polar Coordinates

> Create a vector of values between 0 and 2π. Create a histogram chart that shows the data sorted into six bins.

<pre class="mcode">
theta = [0.1 1.1 5.4 3.4 2.3 4.5 3.2 3.4 5.6 2.3 2.1 3.5 0.6 6.1];
polarhistogram(theta,6)

fig2plotly()
</pre>

<!-- not supported yet -->
<!-- {% include posts/mframe.html src="https:" %} -->

## Specify Number of Bins for Polar Histogram Chart

> Create a histogram plot from 100,000 values between −π and π, and sort the data into 25 bins.


<pre class="mcode">
theta = atan2(rand(100000,1)-0.5,2*(rand(100000,1)-0.5));
polarhistogram(theta,25);

fig2plotly()
</pre>

<!-- not supported yet -->
<!-- {% include posts/mframe.html src="https:" %} -->

## Modify Appearance of Histogram Chart

> Create a histogram chart in polar coordinates, and then change its appearance. Specify the bar colors by setting the FaceColor property to a character vector of a color name, such as 'red', or an RGB triplet. Specify the transparency by setting the FaceAlpha property to a value between 0 and 1.

<pre class="mcode">
theta = atan2(rand(100000,1)-0.5,2*(rand(100000,1)-0.5));
polarhistogram(theta,25,'FaceColor','red','FaceAlpha',.3);

fig2plotly()
</pre>

<!-- not supported yet -->
<!-- {% include posts/mframe.html src="https:" %} -->

## Modify Appearance of Histogram Chart After Creation

> Create a histogram chart in polar coordinates. Assign the histogram object to the variable h.

<pre class="mcode">
theta = atan2(rand(100000,1)-0.5,2*(rand(100000,1)-0.5));
h = polarhistogram(theta,25)

fig2plotly()
</pre>

<!-- not supported yet -->
<!-- {% include posts/mframe.html src="https:" %} -->

> Use h to access and modify properties of the histogram object after it is created. For example, show just the histogram outline by setting the DisplayStyle property of the histogram object.

<pre class="mcode">
h.DisplayStyle = 'stairs';

fig2plotly()
</pre>

<!-- not supported yet -->
<!-- {% include posts/mframe.html src="https:" %} -->
