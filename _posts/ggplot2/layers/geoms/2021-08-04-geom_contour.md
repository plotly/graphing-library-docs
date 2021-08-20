---
layout: post
title:  geom_contour
permalink: /ggplot2/layers/geoms/geom_contour/
layout: ggplot
function: geom_contour
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---
Visualise 3D surfaces in 2D and then convert them with ggplotly.


<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/151.embed" ssim="example1_ssim_map" compare="example1_montage" %}




<pre class="mcode">
p <-    
 ggplot(faithful, aes(waiting, eruptions)) +
  geom_density_2d()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/153.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour_filled()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[8L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/154.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour(bins = 3)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>


{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/156.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour(bins = 5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/158.embed" ssim="example5_ssim_map" compare="example5_montage" %}




<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour(binwidth = 0.01)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/160.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour(binwidth = 0.001)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/162.embed" ssim="example7_ssim_map" compare="example7_montage" %}






<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour(aes(colour = after_stat(level)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/164.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-  v + geom_contour(colour = "red")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/166.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, z = density))
p <-    
 v + geom_raster(aes(fill = density)) +
  geom_contour(colour = "white")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>


{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/929.embed" ssim="example10_ssim_map" compare="example10_montage" %}





<pre class="mcode">
p <-    
 if (requireNamespace("interp")) {
  # Use a dataset from the interp package
  data(franke, package = "interp")
  origdata <- as.data.frame(interp::franke.data(1, 1, franke))
  grid <- with(origdata, interp::interp(x, y, z))
  griddf <- subset(data.frame(x = rep(grid$x, nrow(grid$z)),
                              y = rep(grid$y, each = ncol(grid$z)),
                              z = as.numeric(grid$z)),
                   !is.na(z))
  ggplot(griddf, aes(x, y, z = z)) +
    geom_contour_filled() +
    geom_point(data = origdata)
} else
  message("Irregular data requires the 'interp' package")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[12L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomContourFilled() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/168.embed" ssim="example11_ssim_map" compare="example11_montage" %}


