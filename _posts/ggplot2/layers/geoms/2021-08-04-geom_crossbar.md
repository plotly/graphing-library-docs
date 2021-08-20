---
layout: post
title:  geom_crossbar
permalink: /ggplot2/layers/geoms/geom_crossbar/
layout: ggplot
function: geom_crossbar
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Various ways of representing a vertical interval defined by `x`, `ymin` and `ymax` and then convert them with ggplotly.


<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_linerange(aes(ymin = lower, ymax = upper))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/184.embed" ssim="example1_ssim_map" compare="example1_montage" %}




<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_pointrange(aes(ymin = lower, ymax = upper))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/186.embed" ssim="example2_ssim_map" compare="example2_montage" %}




<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_crossbar(aes(ymin = lower, ymax = upper), width = 0.2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/188.embed" ssim="example3_ssim_map" compare="example3_montage" %}




<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_errorbar(aes(ymin = lower, ymax = upper), width = 0.2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/190.embed" ssim="example4_ssim_map" compare="example4_montage" %}




<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <-    
 ggplot(df, aes(resp, trt, colour = group)) +
  geom_linerange(aes(xmin = lower, xmax = upper))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/192.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-    
 p +
  geom_line(aes(group = group)) +
  geom_errorbar(aes(ymin = lower, ymax = upper), width = 0.2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/194.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, fill = group))
p <-    
 p +
 geom_col(position = "dodge") +
 geom_errorbar(aes(ymin = lower, ymax = upper), position = "dodge", width = 0.25)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/196.embed" ssim="example7_ssim_map" compare="example7_montage" %}






<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
dodge <- position_dodge(width=0.9)
p <-    
 p +
  geom_col(position = dodge) +
  geom_errorbar(aes(ymin = lower, ymax = upper), position = dodge, width = 0.25)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/198.embed" ssim="example8_ssim_map" compare="example8_montage" %}






<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, fill = group))
p <-    
 p +
geom_col(position = "dodge2") +
geom_errorbar(
  aes(ymin = lower, ymax = upper),
  position = position_dodge2(width = 0.5, padding = 0.5)
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil2/1.embed" ssim="example9_ssim_map" compare="example9_montage" %}

