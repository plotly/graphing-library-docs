---
layout: post
title:  scale_date
permalink: /ggplot2/Scales/scale_date/
layout: ggplot
function: scale_date
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Creates default scales for the three date/time class and then convert them with ggplotly.





<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(date_labels = "%b %d")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/439.embed" ssim="example1_ssim_map" compare="example1_montage" %}








<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(date_breaks = "1 week", date_labels = "%W")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/441.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(date_minor_breaks = "1 day")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/443.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
last_month <- Sys.Date() - 0:29
df <- data.frame(
  date = last_month,
  price = runif(30)
)
base <- ggplot(df, aes(date, price)) +
  geom_line()
p <-  base + scale_x_date(limits = c(Sys.Date() - 7, NA))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/445.embed" ssim="example4_ssim_map" compare="example4_montage" %}










