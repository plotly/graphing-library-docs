---
layout: post
title:  coord_flip
permalink: /ggplot2/Coordinate systems/coord_flip/
layout: ggplot
function: coord_flip
reference: https://ggplot2.tidyverse.org/reference/
name: Coordinate%20systems
---

Creates Cartesian coordinates with x and y flipped and then convert them with ggplotly.








<pre class="mcode">
p <-  
 ggplot(diamonds, aes(cut, price)) +
  geom_boxplot() +
  coord_flip()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/751.embed" ssim="example1_ssim_map" compare="example1_montage" %}





<pre class="mcode">
h <- ggplot(diamonds, aes(carat)) +
  geom_histogram()
</pre>


<pre class="mcode">
plotly::ggplotly(h)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/753.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
h <- ggplot(diamonds, aes(carat)) +
  geom_histogram()
p <-  h + coord_flip()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/755.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
h <- ggplot(diamonds, aes(carat)) +
  geom_histogram()
p <-  h + coord_flip() + scale_x_reverse()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/757.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
df <- data.frame(x = 1:5, y = (1:5) ^ 2)
p <-  
 ggplot(df, aes(x, y)) +
  geom_area()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/759.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
df <- data.frame(x = 1:5, y = (1:5) ^ 2)
p <-  
 ggplot(df, aes(x, y)) +
  geom_area()
last_plot() + coord_flip()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/761.embed" ssim="example6_ssim_map" compare="example6_montage" %}



