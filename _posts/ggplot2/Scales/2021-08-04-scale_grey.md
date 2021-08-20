---
layout: post
title:  scale_grey
permalink: /ggplot2/Scales/scale_grey/
layout: ggplot
function: scale_grey
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Creates a sequential grey colour scales and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point(aes(colour = factor(cyl)))
p <-  p + scale_colour_grey()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/483.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point(aes(colour = factor(cyl)))
p <-  p + scale_colour_grey(end = 0)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/485.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point(aes(colour = factor(cyl)))
p <-  p + scale_colour_grey() + theme_bw()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/487.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
miss <- factor(sample(c(NA, 1:5), nrow(mtcars), replace = TRUE))
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = miss)) +
  scale_colour_grey()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/489.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
miss <- factor(sample(c(NA, 1:5), nrow(mtcars), replace = TRUE))
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = miss)) +
  scale_colour_grey(na.value = "green")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/491.embed" ssim="example5_ssim_map" compare="example5_montage" %}



