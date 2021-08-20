---
layout: post
title:  aes_colour_fill_alpha
permalink: /ggplot2/aesthetics/aes_colour_fill_alpha/
layout: ggplot
function: aes_colour_fill_alpha
reference: https://ggplot2.tidyverse.org/reference/
name: Aesthetics
---


Change the colour (colour and fill) and the opacity (alpha) of geom elements on a plot and then convert them with ggplotly




<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/201.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar(fill = "red")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/203.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar(colour = "red")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/205.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar(fill = "white", colour = "red")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/207.embed" ssim="example4_ssim_map" compare="example4_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar(fill = "#00abff")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/209.embed" ssim="example5_ssim_map" compare="example5_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar(fill = NA, colour = "#00abff")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/211.embed" ssim="example6_ssim_map" compare="example6_montage" %}






<pre class="mcode">
p <-  ggplot(mtcars, aes(factor(cyl), fill = factor(vs))) + geom_bar()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/213.embed" ssim="example7_ssim_map" compare="example7_montage" %}






<pre class="mcode">
p <-    
 ggplot(faithfuld, aes(waiting, eruptions)) +
  geom_raster(aes(fill = density))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/215.embed" ssim="example8_ssim_map" compare="example8_montage" %}






<pre class="mcode">
p <- ggplot(economics, aes(x = date, y = unemploy))
p <-  p + geom_line()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/217.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
p <- ggplot(economics, aes(x = date, y = unemploy))
p <-  p + geom_line(colour = "green")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/219.embed" ssim="example10_ssim_map" compare="example10_montage" %}






<pre class="mcode">
p <- ggplot(economics, aes(x = date, y = unemploy))
p <-  p + geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/221.embed" ssim="example11_ssim_map" compare="example11_montage" %}






<pre class="mcode">
p <- ggplot(economics, aes(x = date, y = unemploy))
p <-  p + geom_point(colour = "red")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/223.embed" ssim="example12_ssim_map" compare="example12_montage" %}






<pre class="mcode">
df <- data.frame(x = rnorm(5000), y = rnorm(5000))
p  <- ggplot(df, aes(x,y))
p <-  p + geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/225.embed" ssim="example1_ssim_map" compare="example13_montage" %}






<pre class="mcode">
df <- data.frame(x = rnorm(5000), y = rnorm(5000))
p  <- ggplot(df, aes(x,y))
p <-  p + geom_point(alpha = 0.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil/227.embed" ssim="example14_ssim_map" compare="example14_montage" %}






<pre class="mcode">
df <- data.frame(x = rnorm(5000), y = rnorm(5000))
p  <- ggplot(df, aes(x,y))
p <-  p + geom_point(alpha = 1/10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg15.html src="https://plotly.com/~nadhil/229.embed" ssim="example15_ssim_map" compare="example15_montage" %}






<pre class="mcode">
p <- ggplot(economics, aes(x = date, y = unemploy)) + geom_line()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg16.html src="https://plotly.com/~nadhil/231.embed" ssim="example16_ssim_map" compare="example16_montage" %}






<pre class="mcode">
p <- ggplot(economics, aes(x = date, y = unemploy)) + geom_line()
yrng <- range(economics$unemploy)
p <- p +
  geom_rect(
    aes(NULL, NULL, xmin = start, xmax = end, fill = party),
    ymin = yrng[1], ymax = yrng[2], data = presidential
  )
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg17.html src="https://plotly.com/~nadhil/233.embed" ssim="example17_ssim_map" compare="example17_montage" %}





<pre class="mcode">
p <- p +
  geom_rect(
    aes(NULL, NULL, xmin = start, xmax = end, fill = party),
    ymin = yrng[1], ymax = yrng[2], data = presidential
  )
p <-  p + scale_fill_manual(values = alpha(c("blue", "red"), .3))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg18.html src="https://plotly.com/~nadhil/235.embed" ssim="example18_ssim_map" compare="example18_montage" %}








