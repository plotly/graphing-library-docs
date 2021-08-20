---
layout: post
title:  guide_colourbar
permalink: /ggplot2/Guides axes and legends/guide_colourbar/
layout: ggplot
function: guide_colourbar
reference: https://ggplot2.tidyverse.org/reference/
name: Guides%20axes%20and%20legends
---

Shows continuous colour scales mapped onto values and then convert them with ggplotly.








<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + scale_fill_continuous(guide = "colourbar")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/635.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + scale_fill_continuous(guide = guide_colourbar())
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/637.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar())
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/639.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar(barwidth = 0.5, barheight = 10))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/641.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar(label = FALSE))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/643.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar(ticks = FALSE))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/645.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar(label.position = "left"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/647.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar(label.theme = element_text(colour = "blue", angle = 0)))
</pre>




<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/649.embed" ssim="example8_ssim_map" compare="example8_montage" %}





<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar(nbin = 3))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/651.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_colourbar(nbin = 100))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/653.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-    
 p1 +
  scale_fill_continuous(
    limits = c(0,20), breaks = c(0, 5, 10, 15, 20),
    guide = guide_colourbar(nbin = 100, draw.ulim = FALSE, draw.llim = FALSE)
   )
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/655.embed" ssim="example11_ssim_map" compare="example11_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-    
 p2 +
  scale_fill_continuous(guide = "colourbar") +
  scale_size(guide = "legend")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/657.embed" ssim="example12_ssim_map" compare="example12_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p2 + guides(fill = "colourbar", size = "legend")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/659.embed" ssim="example13_ssim_map" compare="example13_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-    
 p2 +
  scale_fill_continuous(guide = guide_colourbar(direction = "horizontal")) +
  scale_size(guide = guide_legend(direction = "vertical"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil/661.embed" ssim="example14_ssim_map" compare="example14_montage" %}






