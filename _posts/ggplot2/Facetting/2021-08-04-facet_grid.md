---
layout: post
title:  facet_grid
permalink: /ggplot2/Facetting/facet_grid/
layout: ggplot
function: facet_grid
reference: https://ggplot2.tidyverse.org/reference/
name: Facetting
---

Forms a matrix of panels defined by row and column faceting variables and then convert them with ggplotly.








<pre class="mcode">
p <- ggplot(mpg, aes(displ, cty)) + geom_point()
p <-  p + facet_grid(rows = vars(drv))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/885.embed" ssim="example1_ssim_map" compare="example1_montage" %}








<pre class="mcode">
p <- ggplot(mpg, aes(displ, cty)) + geom_point()
p <-  p + facet_grid(cols = vars(cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/887.embed" ssim="example2_ssim_map" compare="example2_montage" %}





<pre class="mcode">
p <- ggplot(mpg, aes(displ, cty)) + geom_point()
p <-  p + facet_grid(vars(drv), vars(cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/889.embed" ssim="example3_ssim_map" compare="example3_montage" %}





<pre class="mcode">
p <- ggplot(mpg, aes(displ, cty)) + geom_point()
df <- data.frame(displ = mean(mpg$displ), cty = mean(mpg$cty))
p <-    
 p +
  facet_grid(cols = vars(cyl)) +
  geom_point(data = df, colour = "red", size = 2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/891.embed" ssim="example4_ssim_map" compare="example4_montage" %}




<pre class="mcode">
mt <- ggplot(mtcars, aes(mpg, wt, colour = factor(cyl))) +
  geom_point()
p <-  mt + facet_grid(vars(cyl), scales = "free")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/893.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
p <-    
 ggplot(mpg, aes(drv, model)) +
  geom_point() +
  facet_grid(manufacturer ~ ., scales = "free", space = "free") +
  theme(strip.text.y = element_text(angle = 0))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/895.embed" ssim="example6_ssim_map" compare="example6_montage" %}






<pre class="mcode">
mg <- ggplot(mtcars, aes(x = mpg, y = wt)) + geom_point()
p <-  mg + facet_grid(vs + am ~ gear, margins = TRUE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/897.embed" ssim="example7_ssim_map" compare="example7_montage" %}






<pre class="mcode">
mg <- ggplot(mtcars, aes(x = mpg, y = wt)) + geom_point()
p <-  mg + facet_grid(vs + am ~ gear, margins = "am")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/899.embed" ssim="example8_ssim_map" compare="example8_montage" %}





<pre class="mcode">
mg <- ggplot(mtcars, aes(x = mpg, y = wt)) + geom_point()
p <-  mg + facet_grid(vs + am ~ gear, margins = "vs")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/901.embed" ssim="example9_ssim_map" compare="example9_montage" %}




