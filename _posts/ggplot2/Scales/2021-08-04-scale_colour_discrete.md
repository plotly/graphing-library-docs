---
layout: post
title:  scale_colour_discrete
permalink: /ggplot2/Scales/scale_colour_discrete/
layout: ggplot
function: scale_colour_discrete
reference: https://ggplot2.tidyverse.org/reference/
name: Scales
---

Uses for discrete colour scales and then convert them with ggplotly.








<pre class="mcode">
cty_by_var <- function(var) {
  ggplot(mpg, aes(cty, colour = factor({{var}}), fill = factor({{var}}))) +
    geom_density(alpha = 0.2)
}
p <-  cty_by_var(class)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/403.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
cty_by_var <- function(var) {
  ggplot(mpg, aes(cty, colour = factor({{var}}), fill = factor({{var}}))) +
    geom_density(alpha = 0.2)
}
okabe <- c("#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7")
p <-    
 withr::with_options(
  list(ggplot2.discrete.fill = okabe),
  print(cty_by_var(class))
)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>


{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/405.embed" ssim="example2_ssim_map" compare="example2_montage" %}




<pre class="mcode">
cty_by_var <- function(var) {
  ggplot(mpg, aes(cty, colour = factor({{var}}), fill = factor({{var}}))) +
    geom_density(alpha = 0.2)
}
discrete_palettes <- list(
  c("skyblue", "orange"),
  RColorBrewer::brewer.pal(3, "Set2"),
  RColorBrewer::brewer.pal(6, "Accent")
)
p <-    
 withr::with_options(
  list(ggplot2.discrete.fill = discrete_palettes), {
  # 1st palette is used when there 1-2 levels (e.g., year)
  print(cty_by_var(year))
  # 2nd palette is used when there are 3 levels
  print(cty_by_var(drv))
  # 3rd palette is used when there are 4-6 levels
  print(cty_by_var(fl))
})
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Warning: Groups with fewer than two data points have been dropped.
</pre>


{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/407.embed" ssim="example3_ssim_map" compare="example3_montage" %}


