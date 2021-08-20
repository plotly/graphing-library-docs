---
layout: post
title:  geom_count
permalink: /ggplot2/layers/geoms/geom_count/
layout: ggplot
function: geom_count
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Counts the number of observations at each location, then maps the count to point area and then convert them with ggplotly.


<pre class="mcode">
p <-    
 ggplot(mpg, aes(cty, hwy)) +
 geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/170.embed" ssim="example1_ssim_map" compare="example1_montage" %}




<pre class="mcode">
p <-    
 ggplot(mpg, aes(cty, hwy)) +
 geom_count()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/172.embed" ssim="example2_ssim_map" compare="example2_montage" %}




<pre class="mcode">
p <-    
 ggplot(mpg, aes(cty, hwy)) +
 geom_count() +
 scale_size_area()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/174.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(x = cut, y = clarity))
p <-  d + geom_count(aes(size = after_stat(prop)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/176.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(x = cut, y = clarity))
p <-    
 d + geom_count(aes(size = after_stat(prop), group = 1)) +
  scale_size_area(max_size = 10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/178.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(x = cut, y = clarity))
p <-    
 d + geom_count(aes(size = after_stat(prop), group = cut)) +
  scale_size_area(max_size = 10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/180.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(x = cut, y = clarity))
p <-    
 d + geom_count(aes(size = after_stat(prop), group = clarity)) +
  scale_size_area(max_size = 10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/182.embed" ssim="example7_ssim_map" compare="example7_montage" %}


