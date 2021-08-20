---
layout: post
title:  coord_fixed
permalink: /ggplot2/Coordinate systems/coord_fixed/
layout: ggplot
function: coord_fixed
reference: https://ggplot2.tidyverse.org/reference/
name: Coordinate%20systems
---

Creates cartesian coordinates with fixed "aspect ratio" and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(ratio = 1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/743.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(ratio = 5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/745.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(ratio = 1/5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/747.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(xlim = c(15, 30))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/749.embed" ssim="example4_ssim_map" compare="example4_montage" %}



