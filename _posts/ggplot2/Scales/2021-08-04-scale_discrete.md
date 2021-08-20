---
layout: post
title:  scale_discrete
permalink: /ggplot2/Scales/scale_discrete/
layout: ggplot
function: scale_discrete
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Position scales for discrete data and then convert them with ggplotly.








<pre class="mcode">
ggplot(diamonds, aes(cut)) + geom_bar()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/447.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
(d <- ggplot(subset(diamonds, carat > 1), aes(cut, clarity)) +
      geom_jitter())
</pre>


<pre class="mcode">
plotly::ggplotly(d)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/449.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
(d <- ggplot(subset(diamonds, carat > 1), aes(cut, clarity)) +
      geom_jitter())
p <-  d + scale_x_discrete("Cut")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>
{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/451.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
(d <- ggplot(subset(diamonds, carat > 1), aes(cut, clarity)) +
      geom_jitter())
p <-    
 d +
  scale_x_discrete(
    "Cut",
    labels = c(
      "Fair" = "F",
      "Good" = "G",
      "Very Good" = "VG",
      "Perfect" = "P",
      "Ideal" = "I"
    )
  )
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/453.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
(d <- ggplot(subset(diamonds, carat > 1), aes(cut, clarity)) +
      geom_jitter())
p <-  d + scale_x_discrete(limits = c("Fair","Ideal"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/455.embed" ssim="example5_ssim_map" compare="example5_montage" %}




<pre class="mcode">
(d <- ggplot(subset(diamonds, carat > 1), aes(cut, clarity)) +
      geom_jitter())
p <-  d + xlim("Fair","Ideal", "Good")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/457.embed" ssim="example6_ssim_map" compare="example6_montage" %}



<pre class="mcode">
(d <- ggplot(subset(diamonds, carat > 1), aes(cut, clarity)) +
      geom_jitter())
p <-  d + ylim("I1", "IF")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/459.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(manufacturer, cty)) +
  geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/461.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(reorder(manufacturer, cty), cty)) +
  geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/463.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(reorder(manufacturer, displ), cty)) +
  geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/465.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
p <-    
 ggplot(mpg, aes(reorder(manufacturer, displ), cty)) +
  geom_point() +
  scale_x_discrete(labels = abbreviate)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/467.embed" ssim="example11_ssim_map" compare="example11_montage" %}


