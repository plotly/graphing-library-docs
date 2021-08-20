---
layout: post
title:  scale_colour_continuous
permalink: /ggplot2/Scales/scale_colour_continuous/
layout: ggplot
function: scale_colour_continuous
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Uses when continuous data values are mapped onto the colour or fill aesthetics and then convert them with ggplotly.








<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) +
geom_tile()
</pre>


<pre class="mcode">
plotly::ggplotly(v)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/389.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) +
geom_tile()
p <-  v + scale_fill_continuous(type = "gradient")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/391.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) +
geom_tile()
p <-  v + scale_fill_continuous(type = "viridis")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/393.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) +
geom_tile()
p <-  v + scale_fill_gradient()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/395.embed" ssim="example4_ssim_map" compare="example4_montage" %}






<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) +
geom_tile()
p <-  v + scale_fill_viridis_c()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/397.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) +
geom_tile()
p <-  v + scale_fill_binned(type = "viridis")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/399.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
v <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) +
geom_tile()
tmp <- getOption("ggplot2.continuous.fill") # store current setting
options(ggplot2.continuous.fill = scale_fill_distiller)
p <-  v
options(ggplot2.continuous.fill = tmp) # restore previous setting
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/401.embed" ssim="example7_ssim_map" compare="example7_montage" %}



