---
layout: post
title:  scale_shape
permalink: /ggplot2/Scales/scale_shape/
layout: ggplot
function: scale_shape
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Maps discrete variables to six easily discernible shapes and then convert them with ggplotly.








<pre class="mcode">
dsmall <- diamonds[sample(nrow(diamonds), 100), ]
(d <- ggplot(dsmall, aes(carat, price)) + geom_point(aes(shape = cut)))
</pre>


<pre class="mcode">
plotly::ggplotly(d)
</pre>

<pre class="wcode">
## Warning: Using shapes for an ordinal variable is not advised
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/561.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
dsmall <- diamonds[sample(nrow(diamonds), 100), ]
(d <- ggplot(dsmall, aes(carat, price)) + geom_point(aes(shape = cut)))
p <-  d + scale_shape(solid = TRUE) # the default
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/563.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
dsmall <- diamonds[sample(nrow(diamonds), 100), ]
(d <- ggplot(dsmall, aes(carat, price)) + geom_point(aes(shape = cut)))
p <-  d + scale_shape(solid = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/565.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
dsmall <- diamonds[sample(nrow(diamonds), 100), ]
(d <- ggplot(dsmall, aes(carat, price)) + geom_point(aes(shape = cut)))
p <-  d + scale_shape(name = "Cut of diamond")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/567.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
dsmall <- diamonds[sample(nrow(diamonds), 100), ]
(d <- ggplot(dsmall, aes(carat, price)) + geom_point(aes(shape = cut)))
levels(dsmall$cut) <- c("Fair", "Good", "Very Good", "Premium", "Ideal")
p <-  ggplot(dsmall, aes(price, carat)) + geom_point(aes(shape = cut))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning: Using shapes for an ordinal variable is not advised
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/569.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
df_shapes <- data.frame(shape = 0:24)
p <-    
 ggplot(df_shapes, aes(0, 0, shape = shape)) +
  geom_point(aes(shape = shape), size = 5, fill = 'red') +
  scale_shape_identity() +
  facet_wrap(~shape) +
  theme_void()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/571.embed" ssim="example6_ssim_map" compare="example6_montage" %}


