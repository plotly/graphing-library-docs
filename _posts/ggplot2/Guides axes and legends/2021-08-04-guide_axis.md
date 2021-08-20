---
layout: post
title:  guide_axis
permalink: /ggplot2/Guides axes and legends/guide_axis/
layout: ggplot
function: guide_axis
reference: https://ggplot2.tidyverse.org/reference/
name: Guides%20axes%20and%20legends
---

Shows visual representation of position scales and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mpg, aes(cty * 100, hwy * 100)) +
  geom_point() +
  facet_wrap(vars(class))
p <-  p + scale_x_continuous(guide = guide_axis(n.dodge = 2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/619.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
p <- ggplot(mpg, aes(cty * 100, hwy * 100)) +
  geom_point() +
  facet_wrap(vars(class))
p <-  p + guides(x = guide_axis(angle = 90))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/621.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(cty * 100, hwy * 100)) +
  geom_point() +
  facet_wrap(vars(class))
p <-  p + guides(x = guide_axis(n.dodge = 2), y.sec = guide_axis())
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/623.embed" ssim="example3_ssim_map" compare="example3_montage" %}


