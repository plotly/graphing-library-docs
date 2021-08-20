---
layout: post
title:  stat_unique
permalink: /ggplot2/layers/Stats/stat_unique/
layout: ggplot
function: stat_unique
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Stats
---

Remove duplicates and then convert them with ggplotly.








<pre class="mcode">
p <-    
 ggplot(mtcars, aes(vs, am)) +
  geom_point(alpha = 0.1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1157.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(vs, am)) +
  geom_point(alpha = 0.1, stat = "unique")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1159.embed" ssim="example2_ssim_map" compare="example2_montage" %}



