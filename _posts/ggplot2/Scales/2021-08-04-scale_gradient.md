---
layout: post
title:  scale_gradient
permalink: /ggplot2/Scales/scale_gradient/
layout: ggplot
function: scale_gradient
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Creates a two colour gradient (low-high),  creates a diverging colour gradient (low-mid-high), creates a n-colour gradient and then convert them with ggplotly.








<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100),
  z2 = abs(rnorm(100))
)

df_na <- data.frame(
  value = seq(1, 20),
  x = runif(20),
  y = runif(20),
  z1 = c(rep(NA, 10), rnorm(10))
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_point(aes(colour = z2))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/469.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100),
  z2 = abs(rnorm(100))
)

df_na <- data.frame(
  value = seq(1, 20),
  x = runif(20),
  y = runif(20),
  z1 = c(rep(NA, 10), rnorm(10))
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_point(aes(colour = z1)) +
  scale_colour_gradient2()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/471.embed" ssim="example2_ssim_map" compare="example2_montage" %}






<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100),
  z2 = abs(rnorm(100))
)

df_na <- data.frame(
  value = seq(1, 20),
  x = runif(20),
  y = runif(20),
  z1 = c(rep(NA, 10), rnorm(10))
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_point(aes(colour = z1)) +
  scale_colour_gradientn(colours = terrain.colors(10))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/473.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100),
  z2 = abs(rnorm(100))
)

df_na <- data.frame(
  value = seq(1, 20),
  x = runif(20),
  y = runif(20),
  z1 = c(rep(NA, 10), rnorm(10))
)
p <-    
 ggplot(faithfuld, aes(waiting, eruptions)) +
  geom_raster(aes(fill = density)) +
  scale_fill_gradientn(colours = terrain.colors(10))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/475.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100),
  z2 = abs(rnorm(100))
)

df_na <- data.frame(
  value = seq(1, 20),
  x = runif(20),
  y = runif(20),
  z1 = c(rep(NA, 10), rnorm(10))
)
p <-    
 ggplot(df, aes(x, y)) +
  geom_point(aes(colour = z2)) +
  scale_colour_gradient(low = "white", high = "black")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/477.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100),
  z2 = abs(rnorm(100))
)

df_na <- data.frame(
  value = seq(1, 20),
  x = runif(20),
  y = runif(20),
  z1 = c(rep(NA, 10), rnorm(10))
)
p <-    
 ggplot(df_na, aes(x = value, y)) +
  geom_bar(aes(fill = z1), stat = "identity") +
  scale_fill_gradient(low = "yellow", high = "red", na.value = NA)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/479.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
df <- data.frame(
  x = runif(100),
  y = runif(100),
  z1 = rnorm(100),
  z2 = abs(rnorm(100))
)

df_na <- data.frame(
  value = seq(1, 20),
  x = runif(20),
  y = runif(20),
  z1 = c(rep(NA, 10), rnorm(10))
)
p <-    
  ggplot(df_na, aes(x, y)) +
   geom_point(aes(colour = z1)) +
   scale_colour_gradient(low = "yellow", high = "red", na.value = NA)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/481.embed" ssim="example7_ssim_map" compare="example7_montage" %}



