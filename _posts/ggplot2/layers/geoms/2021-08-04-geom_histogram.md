---
layout: post
title:  geom_histogram
permalink: /ggplot2/layers/geoms/geom_histogram/
layout: ggplot
function: geom_histogram
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Visualise the distribution of a single continuous variable by dividing the x axis into bins and counting the number of observations in each bin and then convert them with ggplotly


<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat)) +
  geom_histogram()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/74.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat)) +
  geom_histogram(binwidth = 0.01)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil2/76.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat)) +
  geom_histogram(bins = 200)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/78.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
p <-    
 ggplot(diamonds, aes(y = carat)) +
  geom_histogram()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/80.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat)) +
  geom_bar() +
  scale_x_binned()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil2/82.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
p <-    
 ggplot(diamonds, aes(price, fill = cut)) +
  geom_histogram(binwidth = 500)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil2/84.embed" ssim="example6_ssim_map" compare="example6_montage" %}





<pre class="mcode">
p <-    
 ggplot(diamonds, aes(price, colour = cut)) +
  geom_freqpoly(binwidth = 500)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil2/86.embed" ssim="example7_ssim_map" compare="example7_montage" %}






<pre class="mcode">
p <-    
 ggplot(diamonds, aes(price, after_stat(density), colour = cut)) +
  geom_freqpoly(binwidth = 500)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil2/88.embed" ssim="example8_ssim_map" compare="example8_montage" %}




<pre class="mcode">
p <-    
 if (require("ggplot2movies")) {
m <- ggplot(movies, aes(rating))
m + geom_histogram(binwidth = 0.1)
m +
  geom_histogram(aes(weight = votes), binwidth = 0.1) +
  ylab("votes")
m +
 geom_histogram() +
 scale_x_log10()
m +
  geom_histogram(binwidth = 0.05) +
  scale_x_log10()
m +
  geom_histogram(boundary = 0) +
  coord_trans(x = "log10")
m +
  geom_histogram(boundary = 0) +
  coord_trans(x = "sqrt")
m <- ggplot(movies, aes(x = rating))
m +
  geom_histogram(binwidth = 0.5) +
  scale_y_sqrt()
}
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil2/90.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
p <-    
 ggplot(economics_long, aes(value)) +
  facet_wrap(~variable, scales = 'free_x') +
  geom_histogram(binwidth = function(x) 2 * IQR(x) / (length(x)^(1/3)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil2/92.embed" ssim="example10_ssim_map" compare="example10_montage" %}

