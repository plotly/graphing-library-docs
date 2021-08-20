---
layout: post
title:  stat_summary_2d
permalink: /ggplot2/layers/Stats/stat_summary_2d/
layout: ggplot
function: stat_summary_2d
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Stats
---

Bin and summarise in 2d (rectangle & hexagons) and then convert them with ggplotly








<pre class="mcode">
d <- ggplot(diamonds, aes(carat, depth, z = price))
p <-  d + stat_summary_2d()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1145.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, depth, z = price))
p <-  d + stat_summary_2d(fun = function(x) sum(x^2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1147.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, depth, z = price))
p <-  d + stat_summary_2d(fun = ~ sum(.x^2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/1149.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, depth, z = price))
p <-  d + stat_summary_2d(fun = var)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/1151.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, depth, z = price))
p <-  d + stat_summary_2d(fun = "quantile", fun.args = list(probs = 0.1))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/1153.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(carat, depth, z = price))
p <-    
 if (requireNamespace("hexbin")) {
d + stat_summary_hex()
d + stat_summary_hex(fun = ~ sum(.x^2))
}
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/1155.embed" ssim="example6_ssim_map" compare="example6_montage" %}



