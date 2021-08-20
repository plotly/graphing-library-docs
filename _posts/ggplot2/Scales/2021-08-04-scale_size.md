---
layout: post
title:  scale_size
permalink: /ggplot2/Scales/scale_size/
layout: ggplot
function: scale_size
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Create scales for area or radius and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy, size = hwy)) +
   geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/573.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy, size = hwy)) +
   geom_point()
p <-  p + scale_size("Highway mpg")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/575.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy, size = hwy)) +
   geom_point()
p <-  p + scale_size(range = c(0, 10))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/577.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy, size = hwy)) +
   geom_point()
p <-  p + scale_size_area()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/579.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy, size = hwy)) +
   geom_point()
p <-  p + scale_size_binned()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/581.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(class, cyl)) +
  geom_count() +
  scale_size_area()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/583.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy, size = hwy)) +
   geom_point()
p <-  p + scale_radius()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/585.embed" ssim="example7_ssim_map" compare="example7_montage" %}


