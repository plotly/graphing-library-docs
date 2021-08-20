---
layout: post
title:  expansion
permalink: /ggplot2/Scales/expansion/
layout: ggplot
function: expansion
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Generate expansion vector for scales and then convert them with ggplotly








<pre class="mcode">
p <-    
 ggplot(mtcars) +
  geom_bar(aes(x = factor(cyl))) +
  scale_y_continuous(expand = expansion(mult = c(0, .1)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/321.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-    
 ggplot(subset(diamonds, carat > 2), aes(cut, clarity)) +
  geom_jitter() +
  scale_x_discrete(expand = expansion(add = 2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/323.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-    
 ggplot(subset(diamonds, carat > 2), aes(cut, price)) +
  geom_jitter() +
  scale_x_discrete(expand = expansion(add = .6)) +
  scale_y_continuous(expand = expansion(mult = .05))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/325.embed" ssim="example3_ssim_map" compare="example3_montage" %}




