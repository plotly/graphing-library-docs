---
layout: post
title:  geom_ribbon
permalink: /ggplot2/layers/geoms/geom_ribbon/
layout: ggplot
function: geom_ribbon
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

For each x value, it displays a y interval defined by ymin and ymax  and then convert them with ggplotly



<pre class="mcode">
huron <- data.frame(year = 1875:1972, level = as.vector(LakeHuron))
h <- ggplot(huron, aes(year))
p <-  h + geom_ribbon(aes(ymin=0, ymax=level))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/186.embed" ssim="example1_ssim_map" compare="example1_montage" %}



<pre class="mcode">
huron <- data.frame(year = 1875:1972, level = as.vector(LakeHuron))
h <- ggplot(huron, aes(year))
p <-  h + geom_area(aes(y = level))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil2/188.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
huron <- data.frame(year = 1875:1972, level = as.vector(LakeHuron))
h <- ggplot(huron, aes(year))
p <-  h + geom_area(aes(x = level, y = year), orientation = "y")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/190.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
huron <- data.frame(year = 1875:1972, level = as.vector(LakeHuron))
h <- ggplot(huron, aes(year))
p <-    
 h +
  geom_ribbon(aes(ymin = level - 1, ymax = level + 1), fill = "grey70") +
  geom_line(aes(y = level))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/192.embed" ssim="example4_ssim_map" compare="example4_montage" %}

