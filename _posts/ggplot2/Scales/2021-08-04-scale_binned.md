---
layout: post
title:  scale_binned
permalink: /ggplot2/Scales/scale_binned/
layout: ggplot
function: scale_binned
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Transform continuous inputs before using it with a geom that requires discrete positions and then convert them with ggplotly








<pre class="mcode">
p <-    
 ggplot(mtcars) +
  geom_bar(aes(mpg)) +
  scale_x_binned()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/363.embed" ssim="example1_ssim_map" compare="example1_montage" %}



