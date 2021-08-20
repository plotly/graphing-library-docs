---
layout: post
title:  stat_summary
permalink: /ggplot2/layers/Stats/stat_summary/
layout: ggplot
function: stat_summary
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Stats
---

Summarise y values at unique/binned x and then convert them with ggplotly.








<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun.data = "mean_cl_boot", colour = "red", size = 2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/1111.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(mpg, factor(cyl))) +
  geom_point() +
  stat_summary(fun.data = "mean_cl_boot", colour = "red", size = 2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/1113.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun = "median", colour = "red", size = 2, geom = "point")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/1115.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun = "mean", colour = "red", size = 2, geom = "point")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/1117.embed" ssim="example4_ssim_map" compare="example4_montage" %}






<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + aes(colour = factor(vs)) + stat_summary(fun = mean, geom="line")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/1119.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun = mean, fun.min = min, fun.max = max, colour = "red")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/1121.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(cut))
p <-  d + geom_bar()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/1123.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
d <- ggplot(diamonds, aes(cut))
p <-  d + stat_summary(aes(y = price), fun = "mean", geom = "bar")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/1125.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat, price)) +
  stat_summary_bin(fun = "mean", geom = "bar", orientation = 'y')
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/1127.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(cyl, mpg)) +
  stat_summary(fun = "mean", geom = "point")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/1129.embed" ssim="example10_ssim_map" compare="example10_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(cyl, mpg)) +
  stat_summary(fun = "mean", geom = "point")
p <-  p + ylim(15, 30)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning: Removed 9 rows containing non-finite values (stat_summary).
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/1131.embed" ssim="example11_ssim_map" compare="example11_montage" %}





<pre class="mcode">
p <- ggplot(mtcars, aes(cyl, mpg)) +
  stat_summary(fun = "mean", geom = "point")
p <-  p + coord_cartesian(ylim = c(15, 30))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/1133.embed" ssim="example12_ssim_map" compare="example12_montage" %}







<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("mean_cl_boot", mapping = aes(group = cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/1135.embed" ssim="example13_ssim_map" compare="example13_montage" %}







<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("mean_sdl", mapping = aes(group = cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil/1137.embed" ssim="example14_ssim_map" compare="example14_montage" %}







<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("mean_sdl", fun.args = list(mult = 1), mapping = aes(group = cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg15.html src="https://plotly.com/~nadhil/1139.embed" ssim="example15_ssim_map" compare="example15_montage" %}






<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("median_hilow", mapping = aes(group = cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg16.html src="https://plotly.com/~nadhil/1141.embed" ssim="example16_ssim_map" compare="example16_montage" %}



<pre class="mcode">
p <-    
 if (require("ggplot2movies")) {
set.seed(596)
mov <- movies[sample(nrow(movies), 1000), ]
 m2 <-
   ggplot(mov, aes(x = factor(round(rating)), y = votes)) +
   geom_point()
 m2 <-
   m2 +
   stat_summary(
     fun.data = "mean_cl_boot",
     geom = "crossbar",
     colour = "red", width = 0.3
   ) +
   xlab("rating")
m2
# Notice how the overplotting skews off visual perception of the mean
# supplementing the raw data with summary statistics is _very_ important

# Next, we'll look at votes on a log scale.

# Transforming the scale means the data are transformed
# first, after which statistics are computed:
m2 + scale_y_log10()
# Transforming the coordinate system occurs after the
# statistic has been computed. This means we're calculating the summary on the raw data
# and stretching the geoms onto the log scale.  Compare the widths of the
# standard errors.
m2 + coord_trans(y="log10")
}
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg17.html src="https://plotly.com/~nadhil/1143.embed" ssim="example17_ssim_map" compare="example17_montage" %}


