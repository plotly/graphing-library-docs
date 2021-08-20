---
layout: post
title:  geom_density
permalink: /ggplot2/layers/geoms/geom_density/
layout: ggplot
function: geom_density
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Computes and draws kernel density estimate and then convert them with ggplotly.


<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat)) +
  geom_density()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/3.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(y = carat)) +
  geom_density()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Error in data.frame(..., check.names = FALSE): arguments imply differing number of rows: 512, 0
</pre>






<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat)) +
  geom_density(adjust = 1/5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/5.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat)) +
  geom_density(adjust = 5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/7.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(depth, colour = cut)) +
  geom_density() +
  xlim(55, 70)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning: Removed 45 rows containing non-finite values (stat_density).
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil2/9.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(depth, fill = cut, colour = cut)) +
  geom_density(alpha = 0.1) +
  xlim(55, 70)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>
{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/931.embed" ssim="example6_ssim_map" compare="example6_montage" %}






<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat, fill = cut)) +
  geom_density(position = "stack")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil2/11.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat, after_stat(count), fill = cut)) +
  geom_density(position = "stack")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil2/13.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat, after_stat(count), fill = cut)) +
  geom_density(position = "fill")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil2/15.embed" ssim="example7_ssim_map" compare="example9_montage" %}

















