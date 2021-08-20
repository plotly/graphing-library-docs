---
layout: post
title:  position_dodge
permalink: /ggplot2/layers/Position adjustment/position_dodge/
layout: ggplot
function: position_dodge
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Position%20adjustment
---

Dodging preserves the vertical position of an geom while adjusting the horizontal position and then convert them with ggplotly.








<pre class="mcode">
p <-    
 ggplot(mtcars, aes(factor(cyl), fill = factor(vs))) +
  geom_bar(position = "dodge2")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1019.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(factor(cyl), fill = factor(vs))) +
  geom_bar(position = position_dodge2(preserve = "single"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1021.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(price, fill = cut)) +
  geom_histogram(position="dodge2")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/1023.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
p <-    
 ggplot(diamonds, aes(price, colour = cut)) +
  geom_freqpoly()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `stat_bin()` using `bins = 30`. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/1025.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
df <- data.frame(
  x = c("a","a","b","b"),
  y = 2:5,
  g = rep(1:2, 2)
)
p <- ggplot(df, aes(x, y, group = g)) +
  geom_col(position = "dodge", fill = "grey50", colour = "black")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/1027.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
df <- data.frame(
  x = c("a","a","b","b"),
  y = 2:5,
  g = rep(1:2, 2)
)
p <- ggplot(df, aes(x, y, group = g)) +
  geom_col(position = "dodge", fill = "grey50", colour = "black")
p <-  p + geom_linerange(aes(ymin = y - 1, ymax = y + 1), position = "dodge")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning: Width not defined. Set with `position_dodge(width = ?)`
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/1029.embed" ssim="example6_ssim_map" compare="example6_montage" %}





<pre class="mcode">
df <- data.frame(
  x = c("a","a","b","b"),
  y = 2:5,
  g = rep(1:2, 2)
)
p <- ggplot(df, aes(x, y, group = g)) +
  geom_col(position = "dodge", fill = "grey50", colour = "black")
p <-    
 p + geom_linerange(
  aes(ymin = y - 1, ymax = y + 1),
  position = position_dodge(width = 0.9)
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/1031.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
df <- data.frame(
  x = c("a","a","b","b"),
  y = 2:5,
  g = rep(1:2, 2)
)
p <- ggplot(df, aes(x, y, group = g)) +
  geom_col(position = "dodge", fill = "grey50", colour = "black")
p <-    
 p + geom_errorbar(
  aes(ymin = y - 1, ymax = y + 1),
  width = 0.2,
  position = "dodge"
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/1033.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
df <- data.frame(
  x = c("a","a","b","b"),
  y = 2:5,
  g = rep(1:2, 2)
)
p <- ggplot(df, aes(x, y, group = g)) +
  geom_col(position = "dodge", fill = "grey50", colour = "black")
p <-    
 p + geom_errorbar(
  aes(ymin = y - 1, ymax = y + 1),
  width = 0.2,
  position = position_dodge(width = 0.9)
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/1035.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(factor(year), displ)) +
  geom_boxplot(aes(colour = hwy < 30))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/1037.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(factor(year), displ)) +
  geom_boxplot(aes(colour = hwy < 30), varwidth = TRUE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/1039.embed" ssim="example11_ssim_map" compare="example11_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(factor(cyl), fill = factor(vs))) +
  geom_bar(position = position_dodge2(preserve = "single"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/1041.embed" ssim="example12_ssim_map" compare="example12_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(factor(cyl), fill = factor(vs))) +
  geom_bar(position = position_dodge2(preserve = "total"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/1043.embed" ssim="example13_ssim_map" compare="example13_montage" %}


