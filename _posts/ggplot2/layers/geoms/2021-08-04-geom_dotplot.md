---
layout: post
title:  geom_dotplot
permalink: /ggplot2/layers/geoms/geom_dotplot/
layout: ggplot
function: geom_dotplot
reference: https://ggplot2.tidyverse.org/reference/
name: Layers/Geoms
---

Creates dotplot and then convert them with ggplotly.

<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot()
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Bin width defaults to 1/30 of the range of the data. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg1.html src="https://plotly.com/~nadhil2/17.embed" ssim="example1_ssim_map" compare="example1_montage" %}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg2.html src="https://plotly.com/~nadhil2/19.embed" ssim="example2_ssim_map" compare="example2_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(method="histodot", binwidth = 1.5)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg3.html src="https://plotly.com/~nadhil2/21.embed" ssim="example3_ssim_map" compare="example3_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, stackdir = "center")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg4.html src="https://plotly.com/~nadhil2/23.embed" ssim="example4_ssim_map" compare="example4_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, stackdir = "centerwhole")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg5.html src="https://plotly.com/~nadhil2/25.embed" ssim="example5_ssim_map" compare="example5_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) + geom_dotplot(binwidth = 1.5) +
  scale_y_continuous(NULL, breaks = NULL)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg6.html src="https://plotly.com/~nadhil2/27.embed" ssim="example6_ssim_map" compare="example6_montage" %}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, stackratio = .7)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg7.html src="https://plotly.com/~nadhil2/29.embed" ssim="example7_ssim_map" compare="example7_montage" %}





<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, dotsize = 1.25)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg8.html src="https://plotly.com/~nadhil2/31.embed" ssim="example8_ssim_map" compare="example8_montage" %}




<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, fill = "white", stroke = 2)
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg9.html src="https://plotly.com/~nadhil2/33.embed" ssim="example9_ssim_map" compare="example9_montage" %}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = 1, y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Bin width defaults to 1/30 of the range of the data. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg10.html src="https://plotly.com/~nadhil2/35.embed" ssim="example10_ssim_map" compare="example10_montage" %}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(cyl), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Bin width defaults to 1/30 of the range of the data. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg11.html src="https://plotly.com/~nadhil2/37.embed" ssim="example11_ssim_map" compare="example11_montage" %}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(cyl), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "centerwhole")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Bin width defaults to 1/30 of the range of the data. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg12.html src="https://plotly.com/~nadhil2/39.embed" ssim="example12_ssim_map" compare="example12_montage" %}





<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(vs), fill = factor(cyl), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center", position = "dodge")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Bin width defaults to 1/30 of the range of the data. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg13.html src="https://plotly.com/~nadhil2/41.embed" ssim="example13_ssim_map" compare="example13_montage" %}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(am), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center", binpositions="all")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

<pre class="wcode">
## Bin width defaults to 1/30 of the range of the data. Pick better value with `binwidth`.
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg14.html src="https://plotly.com/~nadhil2/43.embed" ssim="example14_ssim_map" compare="example14_montage" %}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg, fill = factor(cyl))) +
  geom_dotplot(stackgroups = TRUE, binwidth = 1, binpositions = "all")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg15.html src="https://plotly.com/~nadhil2/45.embed" ssim="example15_ssim_map" compare="example15_montage" %}





<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg, fill = factor(cyl))) +
  geom_dotplot(stackgroups = TRUE, binwidth = 1, method = "histodot")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg16.html src="https://plotly.com/~nadhil2/47.embed" ssim="example16_ssim_map" compare="example16_montage" %}





<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = 1, y = mpg, fill = factor(cyl))) +
  geom_dotplot(binaxis = "y", stackgroups = TRUE, binwidth = 1, method = "histodot")
</pre>


<pre class="mcode">
plotly::ggplotly(p)
</pre>

{% include posts/ssim_frame_gg/ssim_frame_gg17.html src="https://plotly.com/~nadhil2/49.embed" ssim="example17_ssim_map" compare="example17_montage" %}

