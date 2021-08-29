---
layout: post
title:  MATLAB bubblechart
description: Learn how to make 6 bubblechart charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/scatter-and-bubble-charts/bubblechart/
layout: matlab
function: bubblechart
reference: https://mathworks.com/help/matlab/ref/bubblechart.html
github: scatter-and-bubble-charts/2021-08-29-bubblechart.md
---

## Plot Random Bubbles

> Define the bubble coordinates as the vectors `x` and `y`. Define `sz` as a vector that specifies the bubble sizes. Then create a bubble chart of `x` and `y`. 

<pre class="mcode">
  x = 1:20;
y = rand(1,20);
sz = rand(1,20);
bubblechart(x,y,sz);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_0_0_plot_random_bubbles_invalid_0.0025_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_0_0_plot_random_bubbles_invalid_0.0025_ssim_map.png" 
  index=512
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Bubble Colors

> Define the bubble coordinates as the vectors `x` and `y`. Define `sz` as a vector that specifies the bubble sizes. Then create a bubble chart of `x` and `y`, and specify the color as red. By default, the bubbles are partially transparent. 

<pre class="mcode">
  x = 1:20;
y = rand(1,20);
sz = rand(1,20);
bubblechart(x,y,sz,<span style='color:#A020F0'>'red'</span>);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_1_0_specify_bubble_colors_invalid_0.0025_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_1_0_specify_bubble_colors_invalid_0.0025_ssim_map.png" 
  index=513
%}

> For a custom color, you can specify an RGB triplet or a hexadecimal color code. For example, the hexadecimal color code `'#7031BB'`, specifies a shade of purple.

<pre class="mcode">
  bubblechart(x,y,sz,'#7031BB');
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_1_1_specify_bubble_colors_invalid_0.0018_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_1_1_specify_bubble_colors_invalid_0.0018_ssim_map.png" 
  index=514
%}

> You can also specify a different color for each bubble. For example, specify a vector to select colors from the figure's colormap.

<pre class="mcode">
  c = 1:20;
bubblechart(x,y,sz,c)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_1_2_specify_bubble_colors_invalid_0.0023_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_1_2_specify_bubble_colors_invalid_0.0023_ssim_map.png" 
  index=515
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Bubble Transparency and Outline Color

> Define the bubble coordinates as the vectors `x` and `y`. Define `sz` as a vector that specifies the bubble sizes. Then create a bubble chart of `x` and `y`. By default, the bubbles are 60% opaque, and the edges are completely opaque with the same color. 

<pre class="mcode">
  x = 1:20;
y = rand(1,20);
sz = rand(1,20);
bubblechart(x,y,sz);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_2_0_specify_bubble_transparency_and_outline_color_invalid_0.0025_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_2_0_specify_bubble_transparency_and_outline_color_invalid_0.0025_ssim_map.png" 
  index=516
%}

> You can customize the opacity and the outline color by setting the `MarkerFaceAlpha` and `MarkerEdgeColor` properties, respectively. One way to set a property is by specifying a name-value pair argument when you create the chart. For example, you can specify 20% opacity by setting the `MarkerFaceAlpha` value to `0.20`.

<pre>
  bc = bubblechart(x,y,sz,<span style='color:#A020F0'>'MarkerFaceAlpha'</span>,0.20);
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_2_1_specify_bubble_transparency_and_outline_color_invalid_0.0025_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_2_1_specify_bubble_transparency_and_outline_color_invalid_0.0025_ssim_map.png" 
  index=517
%}

> If you create the chart by calling the `bubblechart` function with a return argument, you can use the return argument to set properties on the chart after creating it. For example, you can change the outline color to purple.

<pre class="mcode">
  bc.MarkerEdgeColor = [0.5 0 0.5];
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_2_2_specify_bubble_transparency_and_outline_color_invalid_0.0018_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_2_2_specify_bubble_transparency_and_outline_color_invalid_0.0018_ssim_map.png" 
  index=518
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Add a Bubble Legend

> Define a data set that shows the contamination levels of a certain toxin across different towns in a metropolitan area. Define `towns` as the population of each town. Define `nsites` as the number of industrial sites in the corresponding towns. Define `levels` as the contamination levels in the towns. Then display the data in a bubble chart with axis labels. Call the `bubblesize` function to decrease the bubble sizes, and add a bubble legend that shows the relationship between the bubble size and population.

<pre class="mcode">
  towns = randi([25000 500000],[1 30]);
nsites = randi(10,1,30);
levels = (3 * nsites) + (7 * randn(1,30) + 20);

% Display bubble chart with axis labels and legend
bubblechart(nsites,levels,towns)
xlabel('Number of Industrial Sites')
ylabel('Contamination Level')
bubblesize([5 30])
bubblelegend('Town Population',<span style='color:#A020F0'>'Location'</span>,<span style='color:#A020F0'>'eastoutside'</span>)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_3_0_add_a_bubble_legend_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_3_0_add_a_bubble_legend_ssim_map.png" 
  index=519
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Add Two Legends

> When you display multiple data sets in the same axes, you can include a multiple legends. To manage the alignment of the legends, create your chart in a tiled chart layout. 

> Create two sets of data, and plot them together in the same axes object within a tiled chart layout. 

<pre class="mcode">
  x = 1:20;
y1 = rand(1,20);
y2 = rand(1,20);
sz1 = randi([20 500],[1,20]);
sz2 = randi([20 500],[1,20]);

% Plot data in a tiled chart layout
t = tiledlayout(1,1);
nexttile
bubblechart(x,y1,sz1)
hold on
bubblechart(x,y2,sz1)
hold off
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_4_0_add_two_legends_invalid_0.0018_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_4_0_add_two_legends_invalid_0.0018_ssim_map.png" 
  index=520
%}

> Add a bubble legend for illustrating the bubble sizes, and add another legend for illustrating the colors. Call the `bubblelegend` and `legend` functions with a return argument to store each legend object. Move the legends to the right outer tile of the tiled chart layout by setting the `Layout.Tile` property on each object to `'east'`.

<pre class="mcode">
  blgd = bubblelegend(<span style='color:#A020F0'>'Population'</span>);
lgd = legend(<span style='color:#A020F0'>'Springfield'</span>,<span style='color:#A020F0'>'Fairview'</span>);
blgd.Layout.Tile = <span style='color:#A020F0'>'east'</span>;
lgd.Layout.Tile = <span style='color:#A020F0'>'east'</span>;
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_4_1_add_two_legends_invalid_0.0011_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_4_1_add_two_legends_invalid_0.0011_ssim_map.png" 
  index=521
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Display Bubbles in Different Axes on the Same Scale

> Define two sets of data that show the contamination levels of a certain toxin across different towns on the east and west sides of a certain metropolitan area. Define `towns1` and `towns2` as the populations across the towns. Define `nsites1` and `nsites2` as the number of industrial sites in the corresponding towns. Then define `levels1` and `levels2` as the contamination levels in the towns. 

<pre>
  towns1 = randi([25000 500000],[1 30]);
towns2 = towns1/3;
nsites1 = randi(10,1,30);
nsites2 = randi(10,1,30);
levels1 = (5 * nsites2) + (7 * randn(1,30) + 20);
levels2 = (3 * nsites1) + (7 * randn(1,30) + 20);
</pre>

> Create a tiled chart layout so you can visualize the data side-by-side. Then create an axes object in the first tile and plot the data for the west side of the city. Add a title and axis labels. Then, repeat the process in the second tile to plot the east side data.

<pre class="mcode">
  tiledlayout(1,2,<span style='color:#A020F0'>'TileSpacing'</span>,<span style='color:#A020F0'>'compact'</span>)

% West side
ax1 = nexttile;
bubblechart(ax1,nsites1,levels1,towns1);
title('West Side')
xlabel('Number of Industrial Sites')

% East side
ax2 = nexttile;
bubblechart(ax2,nsites2,levels2,towns2);
title('East Side')
xlabel('Number of Industrial Sites')
ylabel('Contamination Level')
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_5_0_display_bubbles_in_different_axes_on_the_same_scale_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_5_0_display_bubbles_in_different_axes_on_the_same_scale_ssim_map.png" 
  index=522
%}

> Reduce all the bubble sizes to make it easier to see all the bubbles. In this case, change the range of diameters to be between `5` and `30` points.

<pre class="mcode">
  bubblesize(ax1,[5 30])
bubblesize(ax2,[5 30])
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_5_1_display_bubbles_in_different_axes_on_the_same_scale_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_5_1_display_bubbles_in_different_axes_on_the_same_scale_ssim_map.png" 
  index=523
%}

> The west side towns are three times the size of the east side towns, but the bubble sizes do not reflect this information in the preceding charts. This is because the smallest and largest bubbles map to the smallest and largest data points in each of the axes. To display the bubbles on the same scale, define a vector called `alltowns` that includes the populations from both sides of the city. Use the `bubblelim` function to reset the scaling for both charts. Next, use the `xlim` and `ylim` functions to display the charts with the same *x*- and *y*-axis limits.

<pre class="mcode">
  % Adjust scale of the bubbles
alltowns = [towns1 towns2];
newlims = [min(alltowns) max(alltowns)];
bubblelim(ax1,newlims)
bubblelim(ax2,newlims)

% Adjust x-axis limits
allx = [xlim(ax1) xlim(ax2)];
xmin = min(allx);
xmax = max(allx);
xlim([ax1 ax2],[xmin xmax]);

% Adjust y-axis limits
ally = [ylim(ax1) ylim(ax2)];
ymin = min(ally);
ymax = max(ally);
ylim([ax1 ax2],[ymin ymax]);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_5_2_display_bubbles_in_different_axes_on_the_same_scale_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/bubblechart/plot_5_2_display_bubbles_in_different_axes_on_the_same_scale_ssim_map.png" 
  index=524
%}



<!--------------------- EXAMPLE BREAK ------------------------->

