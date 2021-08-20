---
layout: post
title:  geom_jitter
permalink: /ggplot2/layers/geoms/geom_jitter/
layout: ggplot
function: geom_jitter
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Add a small amount of random variation to the location of each point and then convert them with ggplotly.



<pre class="mcode">
p <- ggplot(mpg, aes(cyl, hwy))
p <-  p + geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/94.embed" ssim="example1_ssim_map" compare="example1_montage" %}





<pre class="mcode">
p <- ggplot(mpg, aes(cyl, hwy))
p <-  p + geom_jitter()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil2/96.embed" ssim="example2_ssim_map" compare="example2_montage" %}





<pre class="mcode">
p <- ggplot(mpg, aes(cyl, hwy))
p <-  p + geom_jitter(aes(colour = class))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/98.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
p <- ggplot(mpg, aes(cyl, hwy))
p <-    
 ggplot(mpg, aes(cyl, hwy)) +
  geom_jitter()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/100.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
p <- ggplot(mpg, aes(cyl, hwy))
p <-    
 ggplot(mpg, aes(cyl, hwy)) +
  geom_jitter(width = 0.25)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil2/102.embed" ssim="example5_ssim_map" compare="example5_montage" %}






<pre class="mcode">
p <- ggplot(mpg, aes(cyl, hwy))
p <-    
 ggplot(mpg, aes(cty, hwy)) +
  geom_jitter()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil2/104.embed" ssim="example6_ssim_map" compare="example6_montage" %}






<pre class="mcode">
p <- ggplot(mpg, aes(cyl, hwy))
p <-    
 ggplot(mpg, aes(cty, hwy)) +
  geom_jitter(width = 0.5, height = 0.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil2/106.embed" ssim="example7_ssim_map" compare="example7_montage" %}

