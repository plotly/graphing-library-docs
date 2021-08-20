---
layout: post
title:  guide_bins
permalink: /ggplot2/Guides axes and legends/guide_bins/
layout: ggplot
function: guide_bins
reference: https://ggplot2.tidyverse.org/reference/
name: Guides%20axes%20and%20legends
---

Creates a binned version of guide_legend and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/625.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()
p <-  p + guides(size = guide_bins(axis = FALSE))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/627.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()
p <-  p + guides(size = guide_bins(show.limits = TRUE))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/629.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()
p <-    
 p + guides(size = guide_bins(
  axis.arrow = arrow(length = unit(1.5, 'mm'), ends = 'both')
))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/631.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp, colour = hp)) +
  scale_size_binned() +
  scale_colour_binned(guide = "bins")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/633.embed" ssim="example5_ssim_map" compare="example5_montage" %}



