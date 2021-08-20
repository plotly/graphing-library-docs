---
layout: post
title:  scale_continuous
permalink: /ggplot2/Scales/scale_continuous/
layout: ggplot
function: scale_continuous
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Position scales for continuous data (x & y) and then convert them with ggplotly.








<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p1)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/409.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-    
 p1 +
  scale_x_continuous("Engine displacement (L)") +
  scale_y_continuous("Highway MPG")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/411.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + labs(x = NULL, y = NULL)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/413.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + scale_x_continuous(limits = c(2, 6))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/415.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + scale_x_continuous(limits = c(0, 10))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/417.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + xlim(2, 6)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/419.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + scale_x_continuous(breaks = c(2, 4, 6))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/421.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-    
 p1 + scale_x_continuous(
  breaks = c(2, 4, 6),
  label = c("two", "four", "six")
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/423.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
df <- data.frame(
  x = rnorm(10) * 100000,
  y = seq(0, 1, length.out = 10)
)
p2 <- ggplot(df, aes(x, y)) + geom_point()
p <-  p2 + scale_y_continuous(labels = scales::percent)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/425.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
df <- data.frame(
  x = rnorm(10) * 100000,
  y = seq(0, 1, length.out = 10)
)
p2 <- ggplot(df, aes(x, y)) + geom_point()
p <-  p2 + scale_y_continuous(labels = scales::dollar)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/427.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
df <- data.frame(
  x = rnorm(10) * 100000,
  y = seq(0, 1, length.out = 10)
)
p2 <- ggplot(df, aes(x, y)) + geom_point()
p <-  p2 + scale_x_continuous(labels = scales::comma)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/429.embed" ssim="example11_ssim_map" compare="example11_montage" %}






<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + scale_y_log10()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/431.embed" ssim="example12_ssim_map" compare="example12_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + scale_y_sqrt()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/433.embed" ssim="example13_ssim_map" compare="example13_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + scale_y_reverse()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil/435.embed" ssim="example14_ssim_map" compare="example14_montage" %}







<pre class="mcode">
p1 <- ggplot(mpg, aes(displ, hwy)) +
  geom_point()
p <-  p1 + scale_y_continuous(trans = scales::reciprocal_trans())
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg15.html src="https://plotly.com/~nadhil/437.embed" ssim="example15_ssim_map" compare="example15_montage" %}



