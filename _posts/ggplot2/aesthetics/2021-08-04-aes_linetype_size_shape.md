---
layout: post
title:  aes_linetype_size_shape
permalink: /ggplot2/aesthetics/aes_linetype_size_shape/
layout: ggplot
function: aes_linetype_size_shape
reference: https://ggplot2.tidyverse.org/reference/
name: Aesthetics
---

Modify the appearance of lines and/or points and then convert them with ggplotly








<pre class="mcode">
df <- data.frame(x = 1:10 , y = 1:10)
p <- ggplot(df, aes(x, y))
p <-  p + geom_line(linetype = 2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/263.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
df <- data.frame(x = 1:10 , y = 1:10)
p <- ggplot(df, aes(x, y))
p <-  p + geom_line(linetype = "dotdash")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/265.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
df <- data.frame(x = 1:10 , y = 1:10)
p <- ggplot(df, aes(x, y))
p <-  p + geom_line(linetype = "3313")
</pre>




<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/267.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
p <-    
 ggplot(economics_long, aes(date, value01)) +
  geom_line(aes(linetype = variable))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/269.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(size = 4)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/271.embed" ssim="example5_ssim_map" compare="example5_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(aes(size = qsec))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/273.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-    
 p + geom_point(size = 2.5) +
  geom_hline(yintercept = 25, size = 3.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/275.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/277.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(shape = 5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/279.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(shape = "k", size = 3)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/281.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(shape = ".")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/283.embed" ssim="example11_ssim_map" compare="example11_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(shape = NA)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/285.embed" ssim="example12_ssim_map" compare="example12_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(aes(shape = factor(cyl)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/287.embed" ssim="example13_ssim_map" compare="example13_montage" %}







<pre class="mcode">
df2 <- data.frame(x = 1:5 , y = 1:25, z = 1:25)
p <- ggplot(df2, aes(x, y))
p <-    
 p + geom_point(aes(shape = z), size = 4) +
  scale_shape_identity()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil/289.embed" ssim="example14_ssim_map" compare="example14_montage" %}







<pre class="mcode">
df2 <- data.frame(x = 1:5 , y = 1:25, z = 1:25)
p <- ggplot(df2, aes(x, y))
p <-    
 p + geom_point(aes(shape = z), size = 4, colour = "Red") +
  scale_shape_identity()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg15.html src="https://plotly.com/~nadhil/291.embed" ssim="example15_ssim_map" compare="example15_montage" %}







<pre class="mcode">
df2 <- data.frame(x = 1:5 , y = 1:25, z = 1:25)
p <- ggplot(df2, aes(x, y))
p <-    
 p + geom_point(aes(shape = z), size = 4, colour = "Red", fill = "Black") +
  scale_shape_identity()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg16.html src="https://plotly.com/~nadhil/293.embed" ssim="example16_ssim_map" compare="example16_montage" %}


