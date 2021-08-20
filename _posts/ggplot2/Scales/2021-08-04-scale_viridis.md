---
layout: post
title:  scale_viridis
permalink: /ggplot2/Scales/scale_viridis/
layout: ggplot
function: scale_viridis
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Provide colour maps that are perceptually uniform in both colour and black-and-white and then convert them with ggplotly.








<pre class="mcode">
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
p <-    
 ggplot(dsamp, aes(carat, price)) +
  geom_point(aes(colour = clarity))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/593.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
txsamp <- subset(txhousing, city %in%
  c("Houston", "Fort Worth", "San Antonio", "Dallas", "Austin"))
(d <- ggplot(data = txsamp, aes(x = sales, y = median)) +
   geom_point(aes(colour = city)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/595.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
txsamp <- subset(txhousing, city %in%
  c("Houston", "Fort Worth", "San Antonio", "Dallas", "Austin"))
(d <- ggplot(data = txsamp, aes(x = sales, y = median)) +
   geom_point(aes(colour = city)))
p <-  d + scale_colour_viridis_d()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/597.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
txsamp <- subset(txhousing, city %in%
  c("Houston", "Fort Worth", "San Antonio", "Dallas", "Austin"))
(d <- ggplot(data = txsamp, aes(x = sales, y = median)) +
   geom_point(aes(colour = city)))
p <-  d + scale_colour_viridis_d("City\nCenter")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/599.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
txsamp <- subset(txhousing, city %in%
  c("Houston", "Fort Worth", "San Antonio", "Dallas", "Austin"))
(d <- ggplot(data = txsamp, aes(x = sales, y = median)) +
   geom_point(aes(colour = city)))
p <-  d + scale_colour_viridis_d(option = "plasma")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/601.embed" ssim="example5_ssim_map" compare="example5_montage" %}






<pre class="mcode">
txsamp <- subset(txhousing, city %in%
  c("Houston", "Fort Worth", "San Antonio", "Dallas", "Austin"))
(d <- ggplot(data = txsamp, aes(x = sales, y = median)) +
   geom_point(aes(colour = city)))
p <-  d + scale_colour_viridis_d(option = "inferno")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/603.embed" ssim="example6_ssim_map" compare="example6_montage" %}






<pre class="mcode">
txsamp <- subset(txhousing, city %in%
  c("Houston", "Fort Worth", "San Antonio", "Dallas", "Austin"))
p <- ggplot(txsamp, aes(x = median, fill = city)) +
  geom_histogram(position = "dodge", binwidth = 15000)
p <-  p + scale_fill_viridis_d()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/605.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
txsamp <- subset(txhousing, city %in%
  c("Houston", "Fort Worth", "San Antonio", "Dallas", "Austin"))
p <- ggplot(txsamp, aes(x = median, fill = city)) +
  geom_histogram(position = "dodge", binwidth = 15000)
p <-  p + scale_fill_viridis_d(direction = -1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/607.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
(v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/609.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
(v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density)))
p <-  v + scale_fill_viridis_c()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/611.embed" ssim="example10_ssim_map" compare="example10_montage" %}






<pre class="mcode">
(v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density)))
p <-  v + scale_fill_viridis_c(option = "plasma")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/613.embed" ssim="example11_ssim_map" compare="example11_montage" %}







<pre class="mcode">
(v <- ggplot(faithfuld) +
  geom_tile(aes(waiting, eruptions, fill = density)))
p <-  v + scale_fill_viridis_b()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/615.embed" ssim="example12_ssim_map" compare="example12_montage" %}
