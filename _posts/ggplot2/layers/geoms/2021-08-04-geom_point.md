---
layout: post
title:  geom_point
permalink: /ggplot2/layers/geoms/geom_point/
layout: ggplot
function: geom_point
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Create scatterplots and then convert them with ggplotly


<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/148.embed" ssim="example1_ssim_map" compare="example1_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(aes(colour = factor(cyl)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil2/150.embed" ssim="example2_ssim_map" compare="example2_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(aes(shape = factor(cyl)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/152.embed" ssim="example3_ssim_map" compare="example3_montage" %}




<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(aes(size = qsec))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/154.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
p <-  ggplot(mtcars, aes(wt, mpg)) + geom_point(colour = "red", size = 3)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil2/156.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
d <- ggplot(diamonds, aes(carat, price))
p <-  d + geom_point(alpha = 1/10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/935.embed" ssim="example6_ssim_map" compare="example6_montage" %}





<pre class="mcode">
d <- ggplot(diamonds, aes(carat, price))
p <-  d + geom_point(alpha = 1/20)
</pre>

<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/937.embed" ssim="example7_ssim_map" compare="example7_montage" %}





<pre class="mcode">
d <- ggplot(diamonds, aes(carat, price))
p <-  d + geom_point(alpha = 1/100)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/939.embed" ssim="example8_ssim_map" compare="example8_montage" %}




<pre class="mcode">
p <-    
 ggplot(mtcars, aes(wt, mpg)) +
  geom_point(shape = 21, colour = "black", fill = "white", size = 5, stroke = 5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil2/164.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt, shape = factor(cyl)))
p <-    
 p +
  geom_point(aes(colour = factor(cyl)), size = 4) +
  geom_point(colour = "grey90", size = 1.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil2/166.embed" ssim="example10_ssim_map" compare="example10_montage" %}


<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt, shape = factor(cyl)))
p <-    
 p +
  geom_point(colour = "black", size = 4.5) +
  geom_point(colour = "pink", size = 4) +
  geom_point(aes(shape = factor(cyl)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil2/168.embed" ssim="example11_ssim_map" compare="example11_montage" %}






<pre class="mcode">
mtcars2 <- transform(mtcars, mpg = ifelse(runif(32) < 0.2, NA, mpg))
p <-    
 ggplot(mtcars2, aes(wt, mpg)) +
  geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil2/170.embed" ssim="example12_ssim_map" compare="example12_montage" %}



<pre class="mcode">
mtcars2 <- transform(mtcars, mpg = ifelse(runif(32) < 0.2, NA, mpg))
p <-    
 ggplot(mtcars2, aes(wt, mpg)) +
  geom_point(na.rm = TRUE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil2/172.embed" ssim="example13_ssim_map" compare="example13_montage" %}



