---
layout: post
title:  geom_smooth
permalink: /ggplot2/layers/geoms/geom_smooth/
layout: ggplot
function: geom_smooth
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Creates smoothed conditional means and then convert them with ggplotly



<pre class="mcode">
p <-   
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  geom_smooth()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil3/33.embed" ssim="example1_ssim_map" compare="example1_montage" %}



<pre class="mcode">
p <-   
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  geom_smooth(orientation = "y")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

<pre class="wcode">
## Error in data.frame(..., check.names = FALSE): arguments imply differing number of rows: 80, 0
</pre>


<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

<pre class="wcode">
## Error in data.frame(..., check.names = FALSE): arguments imply differing number of rows: 80, 0
</pre>




<pre class="mcode">
p <-   
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  geom_smooth(span = 0.3)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil3/35.embed" ssim="example3_ssim_map" compare="example3_montage" %}




<pre class="mcode">
p <-   
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  geom_smooth(method = lm, se = FALSE)
</pre>

<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil3/37.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
p <-   
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  geom_smooth(method = lm, formula = y ~ splines::bs(x, 3), se = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil3/39.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <-   
 ggplot(mpg, aes(displ, hwy, colour = class)) +
  geom_point() +
  geom_smooth(se = FALSE, method = lm)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil3/41.embed" ssim="example6_ssim_map" compare="example6_montage" %}





<pre class="mcode">
p <-   
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  geom_smooth(span = 0.8) +
  facet_wrap(~drv)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using method = 'loess' and formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil3/43.embed" ssim="example7_ssim_map" compare="example7_montage" %}





<pre class="mcode">
binomial_smooth <- function(...) {
  geom_smooth(method = "glm", method.args = list(family = "binomial"), ...)
}
p <-   
 ggplot(rpart::kyphosis, aes(Age, Kyphosis)) +
  geom_jitter(height = 0.05) +
  binomial_smooth()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using formula 'y ~ x'
</pre>

<pre class="wcode">
## Warning: Computation failed in `stat_smooth()`:
## y values must be 0 <= y <= 1
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil3/45.embed" ssim="example8_ssim_map" compare="example8_montage" %}



<pre class="mcode">
binomial_smooth <- function(...) {
  geom_smooth(method = "glm", method.args = list(family = "binomial"), ...)
}
p <-   
 ggplot(rpart::kyphosis, aes(Age, as.numeric(Kyphosis) - 1)) +
  geom_jitter(height = 0.05) +
  binomial_smooth()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil3/47.embed" ssim="example9_ssim_map" compare="example9_montage" %}




<pre class="mcode">
binomial_smooth <- function(...) {
  geom_smooth(method = "glm", method.args = list(family = "binomial"), ...)
}
p <-   
 ggplot(rpart::kyphosis, aes(Age, as.numeric(Kyphosis) - 1)) +
  geom_jitter(height = 0.05) +
  binomial_smooth(formula = y ~ splines::ns(x, 2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil3/49.embed" ssim="example10_ssim_map" compare="example10_montage" %}


