---
layout: post
title:  after_stat
permalink: /ggplot2/layers/Stats/after_stat/
layout: ggplot
function: after_stat
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Stats
---

Map from stat transformed data, flag evaluation of mapping for after data has been scaled, map the same aesthetic multiple times but remap it for the geom, and then convert them with ggplotly.








<pre class="mcode">
p <-    
 ggplot(mpg, aes(displ)) +
  geom_histogram(aes(y = after_stat(count)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1085.embed" ssim="example1_ssim_map" compare="example1_montage" %}





<pre class="mcode">
p <-    
 ggplot(mpg, aes(displ)) +
  geom_histogram(aes(y = after_stat(count / max(count))))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1087.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(class, hwy)) +
  geom_boxplot(aes(colour = class, fill = after_scale(alpha(colour, 0.4))))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/1089.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(class, hwy)) +
  geom_boxplot(aes(fill = stage(class, after_scale = alpha(fill, 0.4))))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/1091.embed" ssim="example4_ssim_map" compare="example4_montage" %}


