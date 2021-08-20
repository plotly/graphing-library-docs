---
layout: post
title:  geom_boxplot
permalink: /ggplot2/layers/geoms/geom_boxplot/
layout: ggplot
function: geom_boxplot
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Creates boxplot and then convert them with ggplotly.

<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-  p + geom_boxplot()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/127.embed" ssim="example1_ssim_map" compare="example1_montage" %}





<pre class="mcode">
p <-  ggplot(mpg, aes(hwy, class)) + geom_boxplot()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/129.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-  p + geom_boxplot(notch = TRUE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/131.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-  p + geom_boxplot(varwidth = TRUE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/133.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-  p + geom_boxplot(fill = "white", colour = "#3366FF")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/135.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-  p + geom_boxplot(outlier.colour = "red", outlier.shape = 1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/137.embed" ssim="example6_ssim_map" compare="example6_montage" %}




<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-  p + geom_boxplot(outlier.shape = NA) + geom_jitter(width = 0.2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/139.embed" ssim="example7_ssim_map" compare="example7_montage" %}




<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-  p + geom_boxplot(aes(colour = drv))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/141.embed" ssim="example8_ssim_map" compare="example8_montage" %}




<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat, price)) +
  geom_boxplot()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="mcode">
## Warning: Continuous x aesthetic -- did you forget aes(group=...)?
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/143.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat, price)) +
  geom_boxplot(aes(group = cut_width(carat, 0.25)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/145.embed" ssim="example10_ssim_map" compare="example10_montage" %}






<pre class="mcode">
p <- ggplot(mpg, aes(class, hwy))
p <-    
 ggplot(diamonds, aes(carat, price)) +
  geom_boxplot(aes(group = cut_width(carat, 0.25)), outlier.alpha = 0.1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/147.embed" ssim="example11_ssim_map" compare="example11_montage" %}





<pre class="mcode">
y <- rnorm(100)
df <- data.frame(
  x = 1,
  y0 = min(y),
  y25 = quantile(y, 0.25),
  y50 = median(y),
  y75 = quantile(y, 0.75),
  y100 = max(y)
)
p <-    
 ggplot(df, aes(x)) +
  geom_boxplot(
   aes(ymin = y0, lower = y25, middle = y50, upper = y75, ymax = y100),
   stat = "identity"
 )
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/149.embed" ssim="example12_ssim_map" compare="example12_montage" %}

