---
layout: post
title:  scale_manual
permalink: /ggplot2/Scales/scale_manual/
layout: ggplot
function: scale_manual
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Create personalized discrete scale and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/547.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl)))
p <-  p + scale_colour_manual(values = c("red", "blue", "green"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/549.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl)))
cols <- c("8" = "red", "4" = "blue", "6" = "darkgreen", "10" = "orange")
p <-  p + scale_colour_manual(values = cols)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/551.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
cols <- c("8" = "red", "4" = "blue", "6" = "darkgreen", "10" = "orange")
p <-    
 ggplot(
  mtcars,
  aes(mpg, wt, colour = factor(cyl), fill = factor(cyl))
) +
  geom_point(shape = 21, alpha = 0.5, size = 2) +
  scale_colour_manual(
    values = cols,
    aesthetics = c("colour", "fill")
  )
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Error in `[[<-`(`*tmp*`, sc$aesthetics, value = sc): no such index at level 1
</pre>




<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl)))
cols <- c("8" = "red", "4" = "blue", "6" = "darkgreen", "10" = "orange")
p <-  p + scale_colour_manual(values = cols)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/553.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl)))
cols <- c("8" = "red", "4" = "blue", "6" = "darkgreen", "10" = "orange")
p <-    
 p + scale_colour_manual(
  values = cols,
  breaks = c("4", "6", "8"),
  labels = c("four", "six", "eight")
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/555.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl)))
cols <- c("8" = "red", "4" = "blue", "6" = "darkgreen", "10" = "orange")
p <-  p + scale_colour_manual(values = cols, limits = c("4", "8"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/557.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(colour = factor(cyl)))
cols <- c("8" = "red", "4" = "blue", "6" = "darkgreen", "10" = "orange")
p <-  p + scale_colour_manual(values = cols, limits = c("4", "6", "8", "10"))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/559.embed" ssim="example7_ssim_map" compare="example7_montage" %}



