---
layout: post
title:  scale_brewer
permalink: /ggplot2/Scales/scale_brewer/
layout: ggplot
function: scale_brewer
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

scales provide sequential, diverging and qualitative colour schemes from ColorBrewer and then convert them with ggplotly



<pre class="mcode">
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- ggplot(dsamp, aes(carat, price)) +
  geom_point(aes(colour = clarity)))
</pre>


<pre class="mcode">
plotly::ggplotly(d)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/365.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- ggplot(dsamp, aes(carat, price)) +
  geom_point(aes(colour = clarity)))
p <-  d + scale_colour_brewer()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/367.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- ggplot(dsamp, aes(carat, price)) +
  geom_point(aes(colour = clarity)))
p <-  d + scale_colour_brewer("Diamond\nclarity")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/369.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- ggplot(dsamp, aes(carat, price)) +
  geom_point(aes(colour = clarity)))
p <-  d + scale_colour_brewer(palette = "Greens")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/371.embed" ssim="example4_ssim_map" compare="example4_montage" %}






<pre class="mcode">
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- ggplot(dsamp, aes(carat, price)) +
  geom_point(aes(colour = clarity)))
p <-  d + scale_colour_brewer(palette = "Set1")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/373.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <- ggplot(diamonds, aes(x = price, fill = cut)) +
  geom_histogram(position = "dodge", binwidth = 1000)
p <-  p + scale_fill_brewer()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/375.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p <- ggplot(diamonds, aes(x = price, fill = cut)) +
  geom_histogram(position = "dodge", binwidth = 1000)
p <-  p + scale_fill_brewer(direction = -1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/377.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
p <- ggplot(diamonds, aes(x = price, fill = cut)) +
  geom_histogram(position = "dodge", binwidth = 1000)
p <-    
 p +
  scale_fill_brewer(direction = -1) +
  theme_dark()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/379.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density))
</pre>


<pre class="mcode">
plotly::ggplotly(v)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/381.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density))
p <-  v + scale_fill_distiller()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/383.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density))
p <-  v + scale_fill_distiller(palette = "Spectral")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/385.embed" ssim="example11_ssim_map" compare="example11_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density))
p <-  v + scale_fill_fermenter()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/387.embed" ssim="example12_ssim_map" compare="example12_montage" %}


