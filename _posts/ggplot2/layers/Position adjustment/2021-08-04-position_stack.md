---
layout: post
title:  position_stack
permalink: /ggplot2/layers/Position adjustment/position_stack/
layout: ggplot
function: position_stack
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Position%20adjustment
---

Stacks bars on top of each other or standardises each stack to have constant height and then convert them with ggplotly.








<pre class="mcode">
p <-    
 ggplot(mtcars, aes(factor(cyl), fill = factor(vs))) +
  geom_bar()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1055.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(factor(cyl), fill = factor(vs))) +
  geom_bar(position = "fill")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1057.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(price, fill = cut)) +
  geom_histogram(binwidth = 500)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/1059.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(price, fill = cut)) +
  geom_histogram(binwidth = 500, position = "fill")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/1061.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
p <-    
 ggplot(series, aes(time, value)) +
  geom_area(aes(fill = type))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/1063.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value)) +
  geom_area(aes(fill = type2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/1065.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value)) +
  geom_area(aes(fill = type)) +
  scale_fill_discrete(breaks = c('a', 'b', 'c', 'd'))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/1067.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value)) +
  geom_area(aes(fill = type2), position = position_stack(reverse = TRUE)) +
  coord_flip() +
  theme(legend.position = "top")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/1069.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value, group = type)) +
  geom_line(aes(colour = type), position = "stack") +
  geom_point(aes(colour = type), position = "stack")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/1071.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value, group = type)) +
  geom_area(aes(fill = type)) +
  geom_line(aes(group = type), position = "stack")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/1073.embed" ssim="example10_ssim_map" compare="example10_montage" %}






<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value, group = type)) +
  geom_area(aes(fill = type)) +
  geom_line(aes(group = type), position = "stack")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/1075.embed" ssim="example11_ssim_map" compare="example11_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value, group = type)) +
  geom_area(aes(fill = type)) +
  geom_text(aes(label = type), position = "stack")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/1077.embed" ssim="example12_ssim_map" compare="example12_montage" %}







<pre class="mcode">
series <- data.frame(
  time = c(rep(1, 4),rep(2, 4), rep(3, 4), rep(4, 4)),
  type = rep(c('a', 'b', 'c', 'd'), 4),
  value = rpois(16, 10)
)
series$type2 <- factor(series$type, levels = c('c', 'b', 'd', 'a'))
p <-    
 ggplot(series, aes(time, value, group = type)) +
  geom_area(aes(fill = type)) +
  geom_text(aes(label = type), position = position_stack(vjust = 0.5))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/1079.embed" ssim="example13_ssim_map" compare="example13_montage" %}







<pre class="mcode">
df <- tibble::tribble(
  ~x, ~y, ~grp,
  "a", 1,  "x",
  "a", 2,  "y",
  "b", 1,  "x",
  "b", 3,  "y",
  "b", -1, "y"
)
p <-    
 ggplot(data = df, aes(x, y, group = grp)) +
  geom_col(aes(fill = grp), position = position_stack(reverse = TRUE)) +
  geom_hline(yintercept = 0)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil/1081.embed" ssim="example14_ssim_map" compare="example14_montage" %}







<pre class="mcode">
df <- tibble::tribble(
  ~x, ~y, ~grp,
  "a", 1,  "x",
  "a", 2,  "y",
  "b", 1,  "x",
  "b", 3,  "y",
  "b", -1, "y"
)
p <-    
 ggplot(data = df, aes(x, y, group = grp)) +
  geom_col(aes(fill = grp)) +
  geom_hline(yintercept = 0) +
  geom_text(aes(label = grp), position = position_stack(vjust = 0.5))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg15.html src="https://plotly.com/~nadhil/1083.embed" ssim="example15_ssim_map" compare="example15_montage" %}


