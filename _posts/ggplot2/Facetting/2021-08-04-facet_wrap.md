---
layout: post
title:  facet_wrap
permalink: /ggplot2/Facetting/facet_wrap/
layout: ggplot
function: facet_wrap
reference: https://ggplot2.tidyverse.org/reference/
name: Facetting
---

Wraps a 1d sequence of panels into 2d and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy)) + geom_point()
p <-  p + facet_wrap(vars(class))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/903.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mpg, aes(displ, hwy)) + geom_point()
p <-  p + facet_wrap(vars(class), nrow = 4)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/905.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  facet_wrap(vars(cyl, drv))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/907.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  facet_wrap(vars(cyl, drv), labeller = "label_both")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/909.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
mpg$class2 <- reorder(mpg$class, mpg$displ)
p <-  ggplot(mpg, aes(displ, hwy)) +
p <-    geom_point() +
p <-    facet_wrap(vars(class2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/911.embed" ssim="example5_ssim_map" compare="example5_montage" %}






<pre class="mcode">
p <-    
 ggplot(mpg, aes(displ, hwy)) +
  geom_point() +
  facet_wrap(vars(class), scales = "free")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/913.embed" ssim="example6_ssim_map" compare="example6_montage" %}






<pre class="mcode">
p <-    
 ggplot(mpg, aes(displ, hwy)) +
  geom_point(data = transform(mpg, class = NULL), colour = "grey85") +
  geom_point() +
  facet_wrap(vars(class))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/915.embed" ssim="example7_ssim_map" compare="example7_montage" %}






<pre class="mcode">
p <-    
 ggplot(economics_long, aes(date, value)) +
  geom_line() +
  facet_wrap(vars(variable), scales = "free_y", nrow = 2, strip.position = "top") +
  theme(strip.background = element_blank(), strip.placement = "outside")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/917.embed" ssim="example8_ssim_map" compare="example8_montage" %}



