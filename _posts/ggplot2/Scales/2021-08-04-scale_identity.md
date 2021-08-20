---
layout: post
title:  scale_identity
permalink: /ggplot2/Scales/scale_identity/
layout: ggplot
function: scale_identity
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Use values without scaling and then convert them with ggplotly.








<pre class="mcode">
p <-    
 ggplot(luv_colours, aes(u, v)) +
  geom_point(aes(colour = col), size = 3) +
  scale_color_identity() +
  coord_equal()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/529.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
df <- data.frame(
  x = 1:4,
  y = 1:4,
  colour = c("red", "green", "blue", "yellow")
)
p <-    
 ggplot(df, aes(x, y)) + geom_tile(aes(fill = colour))
ggplot(df, aes(x, y)) +
  geom_tile(aes(fill = colour)) +
  scale_fill_identity()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/531.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
df <- data.frame(
  x = 1:4,
  y = 1:4,
  colour = c("red", "green", "blue", "yellow")
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_tile(aes(fill = colour)) +
  scale_fill_identity(guide = "legend")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/533.embed" ssim="example3_ssim_map" compare="example3_montage" %}






<pre class="mcode">
df <- data.frame(
  x = 1:4,
  y = 1:4,
  colour = c("red", "green", "blue", "yellow")
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_tile(aes(fill = colour)) +
  scale_fill_identity("trt", labels = letters[1:4], breaks = df$colour,
  guide = "legend")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/535.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(size = cyl))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/537.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  geom_point(aes(size = cyl)) +
  scale_size_identity()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>
{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/539.embed" ssim="example6_ssim_map" compare="example6_montage" %}


