---
layout: post
title:  stat_ellipse
permalink: /ggplot2/layers/Stats/stat_ellipse/
layout: ggplot
function: stat_ellipse
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Stats
---

Creates plot from normal data ellipses computation and then convert them with ggplotly.








<pre class="mcode">
p <-   
 ggplot(faithful, aes(waiting, eruptions)) +
  geom_point() +
  stat_ellipse()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1099.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-   
 ggplot(faithful, aes(waiting, eruptions, color = eruptions > 3)) +
  geom_point() +
  stat_ellipse()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1101.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-   
 ggplot(faithful, aes(waiting, eruptions, color = eruptions > 3)) +
  geom_point() +
  stat_ellipse(type = "norm", linetype = 2) +
  stat_ellipse(type = "t")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/1103.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <-   
 ggplot(faithful, aes(waiting, eruptions, color = eruptions > 3)) +
  geom_point() +
  stat_ellipse(type = "norm", linetype = 2) +
  stat_ellipse(type = "euclid", level = 3) +
  coord_fixed()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/1105.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <-   
 ggplot(faithful, aes(waiting, eruptions, fill = eruptions > 3)) +
  stat_ellipse(geom = "polygon")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/1107.embed" ssim="example5_ssim_map" compare="example5_montage" %}



