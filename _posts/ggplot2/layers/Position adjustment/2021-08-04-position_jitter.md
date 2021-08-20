---
layout: post
title:  position_jitter
permalink: /ggplot2/layers/Position adjustment/position_jitter/
layout: ggplot
function: position_jitter
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Position%20adjustment
---

Adding random noise to a plot can sometimes make it easier to read and then convert them with ggplotly.








<pre class="mcode">
p <-    
 ggplot(mpg, aes(class, hwy)) +
  geom_boxplot(colour = "grey50") +
  geom_jitter()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1045.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(am, vs)) +
  geom_jitter()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1047.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(am, vs)) +
  geom_jitter(width = 0.1, height = 0.1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/1049.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(am, vs)) +
  geom_jitter(position = position_jitter(width = 0.1, height = 0.1))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/1051.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
jitter <- position_jitter(width = 0.1, height = 0.1)
p <-    
 ggplot(mtcars, aes(am, vs)) +
  geom_point(position = jitter) +
  geom_point(position = jitter, color = "red", aes(am + 0.2, vs + 0.2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/1053.embed" ssim="example5_ssim_map" compare="example5_montage" %}



