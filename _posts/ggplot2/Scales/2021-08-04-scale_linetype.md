---
layout: post
title:  scale_linetype
permalink: /ggplot2/Scales/scale_linetype/
layout: ggplot
function: scale_linetype
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Scale for line patterns and then convert them with ggplotly.








<pre class="mcode">
base <- ggplot(economics_long, aes(date, value01))
p <-  base + geom_line(aes(group = variable))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/541.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
base <- ggplot(economics_long, aes(date, value01))
p <-  base + geom_line(aes(linetype = variable))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/543.embed" ssim="example2_ssim_map" compare="example2_montage" %}





<pre class="mcode">
df_lines <- data.frame(
  linetype = factor(
    1:4,
    labels = c("solid", "longdash", "dashed", "dotted")
  )
)
p <-    
 ggplot(df_lines) +
  geom_hline(aes(linetype = linetype, yintercept = 0), size = 2) +
  scale_linetype_identity() +
  facet_grid(linetype ~ .) +
  theme_void(20)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/545.embed" ssim="example3_ssim_map" compare="example3_montage" %}



