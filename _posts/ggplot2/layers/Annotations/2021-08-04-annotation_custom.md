---
layout: post
title:  annotation_custom
permalink: /ggplot2/layers/Annotations/annotation_custom/
layout: ggplot
function: annotation_custom
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Annotations
---

Creates annotation for Custom grob and then convert them with ggplotly








<pre class="mcode">
df <- data.frame(x = 1:10, y = 1:10)
base <- ggplot(df, aes(x, y)) +
  geom_blank() +
  theme_bw()
p <-    
 base + annotation_custom(
  grob = grid::roundrectGrob(),
  xmin = -Inf, xmax = Inf, ymin = -Inf, ymax = Inf
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomCustomAnn() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/986.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
df <- data.frame(x = 1:10, y = 1:10)
base <- ggplot(df, aes(x, y)) +
  geom_blank() +
  theme_bw()
df2 <- data.frame(x = 1 , y = 1)
g <- ggplotGrob(ggplot(df2, aes(x, y)) +
  geom_point() +
  theme(plot.background = element_rect(colour = "black")))
p <-    
 base +
  annotation_custom(grob = g, xmin = 1, xmax = 10, ymin = 8, ymax = 10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomCustomAnn() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/987.embed" ssim="example2_ssim_map" compare="example2_montage" %}


