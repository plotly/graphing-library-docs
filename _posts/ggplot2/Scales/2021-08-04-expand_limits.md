---
layout: post
title:  expand_limits
permalink: /ggplot2/Scales/expand_limits/
layout: ggplot
function: expand_limits
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Modify axis, legend, and plot labels and then convert them with ggplotly








<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + expand_limits(x = 0)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/311.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + expand_limits(y = c(1, 9))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/313.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + expand_limits(x = 0, y = 0)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/315.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = cyl)) +
  expand_limits(colour = seq(2, 10, by = 2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/317.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl))) +
  expand_limits(colour = factor(seq(2, 10, by = 2)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/319.embed" ssim="example5_ssim_map" compare="example5_montage" %}



