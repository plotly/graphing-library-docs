---
layout: post
title: geom_function
permalink: /ggplot2/layers/geoms/geom_function/
layout: ggplot
function: geom_function
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Computes and draws a function as a continuous curve and then convert them with ggplotly.


<pre class="mcode">
set.seed(1492)
p <-   
 ggplot(data.frame(x = rnorm(100)), aes(x)) +
  geom_density() +
  geom_function(fun = dnorm, colour = "red")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/51.embed" ssim="example1_ssim_map" compare="example1_montage" %}


<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-  base + geom_function(fun = dnorm)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil2/52.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-  base + geom_function(fun = dnorm, args = list(mean = 2, sd = .5))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/53.embed" ssim="example3_ssim_map" compare="example3_montage" %}




<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-  base + stat_function(fun = dnorm, geom = "point")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/55.embed" ssim="example4_ssim_map" compare="example4_montage" %}



<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-  base + stat_function(fun = dnorm, geom = "point", n = 20)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil2/57.embed" ssim="example5_ssim_map" compare="example5_montage" %}



<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-  base + geom_function(fun = dnorm, n = 20)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil2/58.embed" ssim="example6_ssim_map" compare="example6_montage" %}




<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-   
 base +
  geom_function(aes(colour = "normal"), fun = dnorm) +
  geom_function(aes(colour = "t, df = 1"), fun = dt, args = list(df = 1))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues

## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil2/59.embed" ssim="example7_ssim_map" compare="example7_montage" %}




<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-  base + geom_function(fun = function(x) 0.5*exp(-abs(x)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil2/60.embed" ssim="example8_ssim_map" compare="example8_montage" %}


<pre class="mcode">
set.seed(1492)
base <-
  ggplot() +
  xlim(-5, 5)
p <-  base + geom_function(fun = ~ 0.5*exp(-abs(.x)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil2/61.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
set.seed(1492)
f <- function(x) 0.5*exp(-abs(x))
p <-  base + geom_function(fun = f)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomFunction() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil2/62.embed" ssim="example10_ssim_map" compare="example10_montage" %}






