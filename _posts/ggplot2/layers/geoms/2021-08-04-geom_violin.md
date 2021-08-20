---
layout: post
title:  geom_violin
permalink: /ggplot2/layers/geoms/geom_violin/
layout: ggplot
function: geom_violin
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Creates compact display of a continuous distribution and then convert them with ggplotly.


<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/943.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
p <-   
 ggplot(mtcars, aes(mpg, factor(cyl))) +
  geom_violin()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/945.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin() + geom_jitter(height = 0, width = 0.1)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/947.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(scale = "count")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/949.embed" ssim="example4_ssim_map" compare="example4_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(scale = "width")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/951.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(trim = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/953.embed" ssim="example6_ssim_map" compare="example6_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(adjust = .5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/955.embed" ssim="example7_ssim_map" compare="example7_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(aes(fill = cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/957.embed" ssim="example8_ssim_map" compare="example8_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(aes(fill = factor(cyl)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/959.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(aes(fill = factor(vs)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning: Groups with fewer than two data points have been dropped.
</pre>
{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/961.embed" ssim="example10_ssim_map" compare="example10_montage" %}




<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(aes(fill = factor(am)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/963.embed" ssim="example11_ssim_map" compare="example11_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(fill = "grey80", colour = "#3366FF")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/965.embed" ssim="example12_ssim_map" compare="example12_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl), mpg))
p <- p + geom_violin(draw_quantiles = c(0.25, 0.5, 0.75))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/967.embed" ssim="example13_ssim_map" compare="example13_montage" %}





<pre class="mcode">
p <-   
 if (require("ggplot2movies")) {
# Scale transformations occur before the density statistics are computed.
# Coordinate transformations occur afterwards.  Observe the effect on the
# number of outliers.
m <- ggplot(movies, aes(y = votes, x = rating, group = cut_width(rating, 0.5)))
m + geom_violin()
m +
  geom_violin() +
  scale_y_log10()
m +
  geom_violin() +
  coord_trans(y = "log10")
m +
  geom_violin() +
  scale_y_log10() + coord_trans(y = "log10")

# Violin plots with continuous x:
# Use the group aesthetic to group observations in violins
ggplot(movies, aes(year, budget)) +
  geom_violin()
ggplot(movies, aes(year, budget)) +
  geom_violin(aes(group = cut_width(year, 10)), scale = "width")
}
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil/969.embed" ssim="example14_ssim_map" compare="example14_montage" %}
