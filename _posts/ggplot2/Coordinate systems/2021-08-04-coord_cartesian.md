---
layout: post
title:  coord_cartesian
permalink: /ggplot2/Coordinate systems/coord_cartesian/
layout: ggplot
function: coord_cartesian
reference: https://ggplot2.tidyverse.org/reference/
name: Coordinate%20systems
---

Setting limits on the coordinate system to zoom the plot and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mtcars, aes(disp, wt)) +
  geom_point() +
  geom_smooth()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/727.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(disp, wt)) +
  geom_point() +
  geom_smooth()
p <-  p + scale_x_continuous(limits = c(325, 500))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

<pre class="wcode">
## Warning: Removed 24 rows containing non-finite values (stat_smooth).
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/729.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(disp, wt)) +
  geom_point() +
  geom_smooth()
p <-  p + coord_cartesian(xlim = c(325, 500))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/731.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(disp, wt)) +
  geom_point() +
  geom_smooth()
p <-  p + coord_cartesian(xlim = c(325, 500), expand = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/733.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(disp, wt)) +
  geom_point() +
  geom_smooth()
p <-  p + coord_cartesian(expand = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/735.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, price)) +
  stat_bin2d(bins = 25, colour = "white")
</pre>


<pre class="mcode">
plotly::ggplotly(d)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/737.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, price)) +
  stat_bin2d(bins = 25, colour = "white")
p <-  d + scale_x_continuous(limits = c(0, 1))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning: Removed 17502 rows containing non-finite values (stat_bin2d).
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/739.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, price)) +
  stat_bin2d(bins = 25, colour = "white")
p <-  d + coord_cartesian(xlim = c(0, 1))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/741.embed" ssim="example8_ssim_map" compare="example8_montage" %}



