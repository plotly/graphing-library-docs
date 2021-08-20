---
layout: post
title:  geom_quantile
permalink: /ggplot2/layers/geoms/geom_quantile/
layout: ggplot
function: geom_quantile
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Fits a quantile regression to the data and draws the fitted quantiles with lines and then converts them with ggplotly


<pre class="mcode">
m <-
  ggplot(mpg, aes(displ, 1 / hwy)) +
  geom_point()
p <-  m + geom_quantile()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Smoothing formula not specified. Using: y ~ x
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/174.embed" ssim="example1_ssim_map" compare="example1_montage" %}



<pre class="mcode">
m <-
  ggplot(mpg, aes(displ, 1 / hwy)) +
  geom_point()
p <-  m + geom_quantile(quantiles = 0.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Smoothing formula not specified. Using: y ~ x
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil2/176.embed" ssim="example2_ssim_map" compare="example2_montage" %}




<pre class="mcode">
m <-
  ggplot(mpg, aes(displ, 1 / hwy)) +
  geom_point()
q10 <- seq(0.05, 0.95, by = 0.05)
p <-  m + geom_quantile(quantiles = q10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Smoothing formula not specified. Using: y ~ x
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/178.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
m <-
  ggplot(mpg, aes(displ, 1 / hwy)) +
  geom_point()
p <-  m + geom_quantile(method = "rqss")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Smoothing formula not specified. Using: y ~ qss(x, lambda = 1)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/180.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
m <-
  ggplot(mpg, aes(displ, 1 / hwy)) +
  geom_point()
p <-  m + geom_quantile(method = "rqss", lambda = 0.1)
</pre>




<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Smoothing formula not specified. Using: y ~ qss(x, lambda = 0.1)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil2/182.embed" ssim="example5_ssim_map" compare="example5_montage" %}




<pre class="mcode">
m <-
  ggplot(mpg, aes(displ, 1 / hwy)) +
  geom_point()
p <-  m + geom_quantile(colour = "red", size = 2, alpha = 0.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Smoothing formula not specified. Using: y ~ x
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil2/184.embed" ssim="example6_ssim_map" compare="example6_montage" %}


