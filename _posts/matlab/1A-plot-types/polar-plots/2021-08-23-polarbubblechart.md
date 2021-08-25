---
layout: post
title:  MATLAB polarbubblechart
description: Learn how to make 5 polarbubblechart charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/polar-plots/2021-08-23-polarbubblechart/
layout: matlab
function: polarbubblechart
reference: https://mathworks.com/help/matlab/ref/polarbubblechart.html
github: polar-plots/polarbubblechart.md
---

## Plot Random Bubbles

> Define a set of bubble coordinates as the vectors `th` and `r`. Define `sz` as a vector of bubble sizes. Then create a bubble chart of these values.

<pre class="mcode">
  th = linspace(0,2*pi,10);
r = rand(1,10);
sz = rand(1,10);
polarbubblechart(th,r,sz);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_0_0_plot_random_bubbles_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_0_0_plot_random_bubbles_ssim_map.png" 
  index=431
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Bubble Colors

> Define a set of bubble coordinates as the vectors `th` and `r`. Define `sz` as a vector of bubble sizes. Then create a bubble chart and specify the color as red. By default, the bubbles are partially transparent.

<pre class="mcode">
  th = 1:10;
r = rand(1,10);
sz = rand(1,10);
polarbubblechart(th,r,sz,'red');
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_1_0_specify_bubble_colors_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_1_0_specify_bubble_colors_ssim_map.png" 
  index=432
%}

> For a custom color, you can specify an RGB triplet or a hexadecimal color code. For example, the hexadecimal color code `'#7031BB'`, specifies a shade of purple.

<pre class="mcode">
  polarbubblechart(th,r,sz,'#7031BB');
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_1_1_specify_bubble_colors_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_1_1_specify_bubble_colors_ssim_map.png" 
  index=433
%}

> You can also specify a different color for each bubble. For example, specify a vector to select colors from the figure's colormap.

<pre class="mcode">
  c = 1:10;
polarbubblechart(th,r,sz,c)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_1_2_specify_bubble_colors_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_1_2_specify_bubble_colors_ssim_map.png" 
  index=434
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Bubble Transparency and Outline Color

> Define a set of bubble coordinates as the vectors `th` and `r`. Define `sz` as a vector of bubble sizes. Then create a bubble chart. By default, the bubbles are 60% opaque, and the edges are completely opaque with the same color.

<pre class="mcode">
  th = linspace(0,2*pi,10);
r = rand(1,10);
sz = rand(1,10);
polarbubblechart(th,r,sz);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_2_0_specify_bubble_transparency_and_outline_color_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_2_0_specify_bubble_transparency_and_outline_color_ssim_map.png" 
  index=435
%}

> You can customize the opacity and the outline color by setting the `MarkerFaceAlpha` and `MarkerEdgeColor` properties, respectively. One way to set a property is by specifying a name-value pair argument when you create the chart. For example, you can specify 20% opacity by setting the `MarkerFaceAlpha` value to `0.20`.

<pre class="mcode">
  bc = polarbubblechart(th,r,sz,'MarkerFaceAlpha',0.20);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_2_1_specify_bubble_transparency_and_outline_color_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_2_1_specify_bubble_transparency_and_outline_color_ssim_map.png" 
  index=436
%}

> If you create the chart by calling the `polarbubblechart` function with a return argument, you can use the return argument to set properties on the chart after creating it. For example, you can change the outline color to purple.

<pre class="mcode">
  bc.MarkerEdgeColor = [0.5 0 0.5];
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_2_2_specify_bubble_transparency_and_outline_color_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_2_2_specify_bubble_transparency_and_outline_color_ssim_map.png" 
  index=437
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Add a Bubble Legend

> Define a data set that shows the incoming air traffic at a certain airport over a certain period of time.

> Then display the data in a bubble chart with a bubble legend that shows the relationship between the bubble sizes and the number of passengers on the planes.

<pre class="mcode">
  theta = repmat([0 pi/2 7*pi/6],1,4) + 0.25*randn(1,12);
altitude = randi([13000 43000],1,12);
planesize = randi([75 500],[1 12]);
polarbubblechart(theta,altitude,planesize)
bubblelegend('Number of Passengers','Location','eastoutside')
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_3_0_add_a_bubble_legend_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_3_0_add_a_bubble_legend_ssim_map.png" 
  index=438
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Display Bubbles in Different Axes on the Same Scale

> Define two data sets showing the incoming air traffic at two different airports over a certian period of time.

<pre class="mcode">
  theta1 = repmat([0 pi/2 7*pi/6],1,4) + 0.25*randn(1,12);
theta2 = repmat([pi pi/6 3*pi/2],1,4) + 0.25*randn(1,12);
planesize1 = randi([75 500],[1 12]);
planesize2 = randi([1 50],[1 12]);
altitude1 = randi([13000 43000],1,12);
altitude2 = randi([13000 85000],1,12);
</pre>

> Create a tiled chart layout so you can visualize the data side-by-side. Then, create a polar axes object in the first tile, plot the data for the first airport, and add a title. Then repeat the process in the second tile for the second airport.

<pre class="mcode">
  t = tiledlayout(1,2);
pax1 = polaraxes(t);
polarbubblechart(pax1,theta1,altitude1,planesize1)
title('Airport A')

pax2 = polaraxes(t);
pax2.Layout.Tile = 2;
polarbubblechart(pax2,theta2,altitude2,planesize2);
title('Airport B')
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_4_0_display_bubbles_in_different_axes_on_the_same_scale_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_4_0_display_bubbles_in_different_axes_on_the_same_scale_ssim_map.png" 
  index=439
%}

> Reduce all the bubble sizes to make it easier to see all the bubbles. In this case, change the range of diameters to be between `5` and `20` points.

<pre class="mcode">
  bubblesize(pax1,[5 20])
bubblesize(pax2,[5 20])
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_4_0_display_bubbles_in_different_axes_on_the_same_scale_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_4_0_display_bubbles_in_different_axes_on_the_same_scale_ssim_map.png" 
  index=439
%}

> The planes at Airport A are generally much smaller than at Airport B, but the bubble sizes do not reflect this information in the preceding charts. This is because the smallest and largest bubbles map to the smallest and largest data points in each of the axes. To display the bubbles on the same scale, define a vector called `allsizes` that includes the plane sizes at both airports. Then use the `bubblelim` function to reset the scaling for both charts. 

<pre class="mcode">
  allsizes = [planesize1 planesize2];
newlims = [min(allsizes) max(allsizes)];
bubblelim(pax1,newlims)
bubblelim(pax2,newlims)
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_4_0_display_bubbles_in_different_axes_on_the_same_scale_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/polar-plots/polarbubblechart/plot_4_0_display_bubbles_in_different_axes_on_the_same_scale_ssim_map.png" 
  index=439
%}



<!--------------------- EXAMPLE BREAK ------------------------->

