---
layout: post
title:  stat_identity
permalink: /ggplot2/layers/Stats/stat_identity/
layout: ggplot
function: stat_identity
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Stats
---

The identity statistic leaves the data unchanged and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <- p + stat_identity()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1109.embed" ssim="example1_ssim_map" compare="example1_montage" %}



