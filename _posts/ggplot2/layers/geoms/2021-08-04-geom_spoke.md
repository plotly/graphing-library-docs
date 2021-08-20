---
layout: post
title:  geom_spoke
permalink: /ggplot2/layers/geoms/geom_spoke/
layout: ggplot
function: geom_spoke
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Creates line segments parameterised by location, direction and distance and then convert them with ggplotly


<pre class="mcode">
df <- expand.grid(x = 1:10, y=1:10)
df$angle <- runif(100, 0, 2*pi)
df$speed <- runif(100, 0, sqrt(0.1 * df$x))
p <-   
 ggplot(df, aes(x, y)) +
  geom_point() +
  geom_spoke(aes(angle = angle), radius = 0.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil3/51.embed" ssim="example1_ssim_map" compare="example1_montage" %}




<pre class="mcode">
df <- expand.grid(x = 1:10, y=1:10)
df$angle <- runif(100, 0, 2*pi)
df$speed <- runif(100, 0, sqrt(0.1 * df$x))
p <-   
 ggplot(df, aes(x, y)) +
  geom_point() +
  geom_spoke(aes(angle = angle, radius = speed))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil3/53.embed" ssim="example2_ssim_map" compare="example2_montage" %}


