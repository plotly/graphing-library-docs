---
layout: post
title:  aes_position
permalink: /ggplot2/aesthetics/aes_position/
layout: ggplot
function: aes_position
reference: https://ggplot2.tidyverse.org/reference/
name: Aesthetics
---

Creates position related aesthetics: x, y, xmin, xmax, ymin, ymax, xend, yend and then convert them with ggplotly








<pre class="mcode">
dmod <- lm(price ~ cut, data = diamonds)
cut <- unique(diamonds$cut)
cuts_df <- data.frame(
  cut,
  predict(dmod, data.frame(cut), se = TRUE)[c("fit", "se.fit")]
)
p <-    
 ggplot(cuts_df) +
  aes(
   x = cut,
   y = fit,
   ymin = fit - se.fit,
   ymax = fit + se.fit,
   colour = cut
  ) +
  geom_pointrange()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/295.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/297.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()
p <-    
 p + annotate(
  "rect", xmin = 2, xmax = 3.5, ymin = 2, ymax = 25,
  fill = "dark grey", alpha = .5
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/299.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()
p <-    
 p + geom_segment(
  aes(x = 2, y = 15, xend = 2, yend = 25),
  arrow = arrow(length = unit(0.5, "cm"))
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/301.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()
p <-    
 p + geom_segment(
  aes(x = 2, y = 15, xend = 3, yend = 15),
  arrow = arrow(length = unit(0.5, "cm"))
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/303.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()
p <-    
 p + geom_segment(
  aes(x = 5, y = 30, xend = 3.5, yend = 25),
  arrow = arrow(length = unit(0.5, "cm"))
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/305.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
counts <- as.data.frame(table(x = rpois(100, 5)))
counts$x <- as.numeric(as.character(counts$x))
p <-  with(counts, plot(x, Freq, type = "h", lwd = 10))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/307.embed" ssim="example7_ssim_map" compare="example7_montage" %}





<pre class="mcode">
counts <- as.data.frame(table(x = rpois(100, 5)))
counts$x <- as.numeric(as.character(counts$x))
p <-    
 ggplot(counts, aes(x = x, y = Freq)) +
  geom_segment(aes(yend = 0, xend = x), size = 10)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/309.embed" ssim="example8_ssim_map" compare="example8_montage" %}


