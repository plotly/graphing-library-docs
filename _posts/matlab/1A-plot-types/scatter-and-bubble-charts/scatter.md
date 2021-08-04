---
layout: post
title:  MATLAB plot
permalink: /matlab/scatter-and-bubble-charts/scatter/
layout: matlab
function: scatter
---

# `{{page.function}}`

***

## Examples

These examples are updated periodically from [https://www.mathworks.com/help/matlab/ref/scatter.html](https://www.mathworks.com/help/matlab/ref/scatter.html)

<!--------------------- EXAMPLE BREAK ------------------------->
## Plot 3-D Helix

> Create x as 200 equally spaced values between 0 and 3π. Create y as cosine values with random noise. Then, create a scatter plot.

<pre class="mcode">
x = linspace(0,3*pi,200);
y = cos(x) + rand(1,200);  
scatter(x,y)
</pre>

{% include mframe.html src="https://chart-studio.plotly.com/~jackp/18784.embed" %}




