---
layout: post
title:  annotation_logticks
permalink: /ggplot2/layers/Annotations/annotation_logticks/
layout: ggplot
function: annotation_logticks
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Annotations
---

Adds log tick marks with diminishing spacing to the plot and then convert them with ggplotly








<pre class="mcode">
a <- ggplot(msleep, aes(bodywt, brainwt)) +
 geom_point(na.rm = TRUE) +
 scale_x_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 scale_y_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 theme_bw()
p <-  a + annotation_logticks()                # Default: log ticks on bottom and left
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

<pre class="wcode">
## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'

## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/989.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
a <- ggplot(msleep, aes(bodywt, brainwt)) +
 geom_point(na.rm = TRUE) +
 scale_x_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 scale_y_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 theme_bw()
p <-  a + annotation_logticks(sides = "lr")    # Log ticks for y, on left and right
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

<pre class="wcode">
## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'

## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/991.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
a <- ggplot(msleep, aes(bodywt, brainwt)) +
 geom_point(na.rm = TRUE) +
 scale_x_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 scale_y_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 theme_bw()
p <-  a + annotation_logticks(sides = "trbl")  # All four sides
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

<pre class="wcode">
## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'

## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'
</pre>


{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/993.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
a <- ggplot(msleep, aes(bodywt, brainwt)) +
 geom_point(na.rm = TRUE) +
 scale_x_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 scale_y_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 theme_bw()
p <-    
 a + annotation_logticks(sides = "lr", outside = TRUE) +
 coord_cartesian(clip = "off")  # Ticks outside plot
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

<pre class="wcode">
## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'

## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/995.embed" ssim="example4_ssim_map" compare="example4_montage" %}





<pre class="mcode">
a <- ggplot(msleep, aes(bodywt, brainwt)) +
 geom_point(na.rm = TRUE) +
 scale_x_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 scale_y_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 theme_bw()
p <-  a + annotation_logticks(sides = "trbl") + theme(panel.grid.minor = element_blank())
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

<pre class="wcode">
## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'

## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/997.embed" ssim="example5_ssim_map" compare="example5_montage" %}





<pre class="mcode">
b <- ggplot(msleep, aes(log10(bodywt), log10(brainwt))) +
 geom_point(na.rm = TRUE) +
 scale_x_continuous(name = "body", labels = scales::math_format(10^.x)) +
 scale_y_continuous(name = "brain", labels = scales::math_format(10^.x)) +
 theme_bw() + theme(panel.grid.minor = element_blank())
p <-  b + annotation_logticks()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

<pre class="wcode">
## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'

## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/999.embed" ssim="example6_ssim_map" compare="example6_montage" %}





<pre class="mcode">
t <- ggplot(msleep, aes(bodywt, brainwt)) +
  geom_point() +
  coord_trans(x = "log10", y = "log10") +
  theme_bw()
p <-  t + annotation_logticks(scaled = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/1001.embed" ssim="example7_ssim_map" compare="example7_montage" %}





<pre class="mcode">
a <- ggplot(msleep, aes(bodywt, brainwt)) +
 geom_point(na.rm = TRUE) +
 scale_x_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 scale_y_log10(
   breaks = scales::trans_breaks("log10", function(x) 10^x),
   labels = scales::trans_format("log10", scales::math_format(10^.x))
 ) +
 theme_bw()
p <-    
 a + annotation_logticks(
  short = unit(.5,"mm"),
  mid = unit(3,"mm"),
  long = unit(4,"mm")
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning in geom2trace.default(dots[[1L]][[1L]], dots[[2L]][[1L]], dots[[3L]][[1L]]): geom_GeomLogticks() has yet to be implemented in plotly.
##   If you'd like to see this geom implemented,
##   Please open an issue with your example code at
##   https://github.com/ropensci/plotly/issues
</pre>

<pre class="wcode">
## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'

## Warning in is.na(ticktext): is.na() applied to non-(list or vector) of type
## 'expression'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/1003.embed" ssim="example8_ssim_map" compare="example8_montage" %}






