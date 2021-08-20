---
layout: post
title:  geom_abline
permalink: /ggplot2/layers/geoms/geom_abline/
layout: ggplot
function: geom_abline
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Add reference lines to a plot, either horizontal, vertical, or diagonal and then convert them with ggplotly.



<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
p <-  p + geom_vline(xintercept = 5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/83.embed" ssim="example1_ssim_map" compare="example1_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
p <-  p + geom_vline(xintercept = 1:5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/85.embed" ssim="example2_ssim_map" compare="example2_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
p <-  p + geom_hline(yintercept = 20)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/87.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
p <-  p + geom_abline() # Can't see it - outside the range of the data
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/89.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
p <-  p + geom_abline(intercept = 20)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/91.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
coef(lm(mpg ~ wt, data = mtcars))
p <-  p + geom_abline(intercept = 37, slope = -5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/93.embed" ssim="example6_ssim_map" compare="example6_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
p <-  p + geom_smooth(method = "lm", se = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="mcode">
## `geom_smooth()` using formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/95.embed" ssim="example7_ssim_map" compare="example7_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point() +
  facet_wrap(~ cyl)
mean_wt <- data.frame(cyl = c(4, 6, 8), wt = c(2.28, 3.11, 4.00))
p <-  p + geom_hline(aes(yintercept = wt), mean_wt)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/97.embed" ssim="example8_ssim_map" compare="example8_montage" %}





<pre class="mcode">
mean_wt <- data.frame(cyl = c(4, 6, 8), wt = c(2.28, 3.11, 4.00))
p <-    
 ggplot(mtcars, aes(mpg, wt, colour = wt)) +
  geom_point() +
  geom_hline(aes(yintercept = wt, colour = wt), mean_wt) +
  facet_wrap(~ cyl)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/99.embed" ssim="example9_ssim_map" compare="example9_montage" %}
