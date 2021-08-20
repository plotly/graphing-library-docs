---
layout: post
title:  scale_steps
permalink: /ggplot2/Scales/scale_steps/
layout: ggplot
function: scale_steps
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Creates a two colour binned gradient (low-high), creates a diverging binned colour gradient (low-mid-high), and creates a n-colour binned gradient and then convert them with ggplotly.








<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100)
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_point(aes(colour = z1)) +
  scale_colour_steps()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/587.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100)
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_point(aes(colour = z1)) +
  scale_colour_steps2()
</pre>
<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/589.embed" ssim="example2_ssim_map" compare="example2_montage" %}




<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100)
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_point(aes(colour = z1)) +
  scale_colour_stepsn(colours = terrain.colors(10))
</pre>
<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/591.embed" ssim="example3_ssim_map" compare="example3_montage" %}
