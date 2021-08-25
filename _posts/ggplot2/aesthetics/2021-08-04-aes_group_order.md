---
layout: post
title:  aes_group_order
permalink: /ggplot2/aesthetics/aes_group_order/
layout: ggplot
function: aes_group_order
reference: https://ggplot2.tidyverse.org/reference/
name: Aesthetics
---


Define the grouping structure by mapping group to a variable that has a different value for each group and then convert them with ggplotly





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(size = 4)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil/237.embed" ssim="example1_ssim_map" compare="example1_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(aes(colour = factor(cyl)), size = 4)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil/239.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <-  p + geom_point(aes(shape = factor(cyl)), size = 4)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil/241.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil/243.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar(aes(fill = factor(cyl)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil/245.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <- ggplot(mtcars, aes(factor(cyl)))
p <-  p + geom_bar(aes(fill = factor(vs)))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil/247.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p <-  ggplot(economics_long, aes(date, value01)) +
  geom_line(aes(linetype = variable))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil/249.embed" ssim="example7_ssim_map" compare="example7_montage" %}







<pre class="mcode">
p <- ggplot(nlme::Oxboys, aes(age, height))
p <-  p + geom_line()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil/251.embed" ssim="example8_ssim_map" compare="example8_montage" %}







<pre class="mcode">
p <- ggplot(nlme::Oxboys, aes(age, height))
p <-  p + geom_line(aes(group = Subject))
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil/253.embed" ssim="example9_ssim_map" compare="example9_montage" %}







<pre class="mcode">
p <- p + geom_line(aes(group = Subject))
p <-  p + geom_smooth(aes(group = Subject), method = "lm", se = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil/255.embed" ssim="example10_ssim_map" compare="example10_montage" %}





<pre class="mcode">
p <- p + geom_line(aes(group = Subject))
p <-  p + geom_smooth(aes(group = 1), size = 2, method = "lm", se = FALSE)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## `geom_smooth()` using formula 'y ~ x'
## `geom_smooth()` using formula 'y ~ x'
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil/257.embed" ssim="example11_ssim_map" compare="example11_montage" %}





<pre class="mcode">
p <- ggplot(nlme::Oxboys, aes(Occasion, height)) + geom_boxplot()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil/259.embed" ssim="example12_ssim_map" compare="example12_montage" %}







<pre class="mcode">
p <- ggplot(nlme::Oxboys, aes(Occasion, height)) + geom_boxplot()
p <-  p + geom_line(aes(group = Subject), colour = "blue")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil/261.embed" ssim="example13_ssim_map" compare="example13_montage" %}


