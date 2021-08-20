---
layout: post
title:  scale_alpha
permalink: /ggplot2/Scales/scale_alpha/
layout: ggplot
function: scale_alpha
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Visually down-weight less important observations and then convert them with ggplotly








<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy)) +
  geom_point(aes(alpha = year))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/357.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy)) +
  geom_point(aes(alpha = year))
p <-  p + scale_alpha("cylinders")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/359.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy)) +
  geom_point(aes(alpha = year))
p <-  p + scale_alpha(range = c(0.4, 0.8))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/361.embed" ssim="example3_ssim_map" compare="example3_montage" %}



