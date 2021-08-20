---
layout: post
title:  guide_legend
permalink: /ggplot2/Guides axes and legends/guide_legend/
layout: ggplot
function: guide_legend
reference: https://ggplot2.tidyverse.org/reference/
name: Guides%20axes%20and%20legends
---

Shows legend type guide to show key mapped onto values and then convert them with ggplotly.








<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + scale_fill_continuous(guide = guide_legend())
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/673.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_legend(title = "LEFT", title.position = "left"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/675.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-    
 p1 + guides(fill =
  guide_legend(
    title.theme = element_text(
      size = 15,
      face = "italic",
      colour = "red",
      angle = 0
    )
  )
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/677.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-  p1 + guides(fill = guide_legend(label.position = "left", label.hjust = 1))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/679.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
df <- expand.grid(X1 = 1:10, X2 = 1:10)
df$value <- df$X1 * df$X2
p1 <- ggplot(df, aes(X1, X2)) + geom_tile(aes(fill = value))
p2 <- p1 + geom_point(aes(size = value))
p <-    
 p1 +
  scale_fill_continuous(
    breaks = c(5, 10, 15),
    labels = paste("long", c(5, 10, 15)),
    guide = guide_legend(
      direction = "horizontal",
      title.position = "top",
      label.position = "bottom",
      label.hjust = 0.5,
      label.vjust = 1,
      label.theme = element_text(angle = 90)
    )
  )
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/681.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p3 <- ggplot(mtcars, aes(vs, am, colour = factor(cyl))) +
  geom_jitter(alpha = 1/5, width = 0.01, height = 0.01)
</pre>


<pre class="mcode">
plotly::ggplotly(p3)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/683.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p3 <- ggplot(mtcars, aes(vs, am, colour = factor(cyl))) +
  geom_jitter(alpha = 1/5, width = 0.01, height = 0.01)
p <-  p3 + guides(colour = guide_legend(override.aes = list(alpha = 1)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/685.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
df <- data.frame(x = 1:20, y = 1:20, color = letters[1:20])
p <- ggplot(df, aes(x, y)) +
  geom_point(aes(colour = color))
p <-  p + guides(col = guide_legend(nrow = 8))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/687.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
df <- data.frame(x = 1:20, y = 1:20, color = letters[1:20])
p <- ggplot(df, aes(x, y)) +
  geom_point(aes(colour = color))
p <-  p + guides(col = guide_legend(ncol = 8))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/689.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
df <- data.frame(x = 1:20, y = 1:20, color = letters[1:20])
p <- ggplot(df, aes(x, y)) +
  geom_point(aes(colour = color))
p <-  p + guides(col = guide_legend(nrow = 8, byrow = TRUE))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/691.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
df <- data.frame(x = 1:20, y = 1:20, color = letters[1:20])
p <- ggplot(df, aes(x, y)) +
  geom_point(aes(colour = color))
p <-  p + guides(col = guide_legend(reverse = TRUE))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/693.embed" ssim="example11_ssim_map" compare="example11_montage" %}



