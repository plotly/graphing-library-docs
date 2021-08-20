---
layout: post
title:  guide_coloursteps
permalink: /ggplot2/Guides axes and legends/guide_coloursteps/
layout: ggplot
function: guide_coloursteps
reference: https://ggplot2.tidyverse.org/reference/
name: Guides%20axes%20and%20legends
---

It shows areas between breaks as a single constant colour instead of the gradient known from the colourbar counterpart and then convert them with ggplotly.








<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p <-  p + scale_fill_binned()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/663.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p <-  p + scale_fill_binned(breaks = c(10, 25, 50))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/665.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p <-    
 p + scale_fill_binned(
  breaks = c(10, 25, 50),
  guide = guide_coloursteps(even.steps = FALSE)
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/667.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p <-  p + scale_fill_binned(guide = guide_coloursteps(show.limits = TRUE))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/669.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p <-  p + scale_fill_binned(show.limits = TRUE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/671.embed" ssim="example5_ssim_map" compare="example5_montage" %}



