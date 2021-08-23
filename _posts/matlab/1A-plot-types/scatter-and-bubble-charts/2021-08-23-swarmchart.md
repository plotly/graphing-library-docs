---
layout: post
title:  MATLAB swarmchart
description: Learn how to make 7 swarmchart charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/scatter-and-bubble-charts/swarmchart/
layout: matlab
function: swarmchart
reference: https://mathworks.com/help/matlab/ref/swarmchart.html
github: scatter-and-bubble-charts/swarmchart.md
---

## Create Swarm Chart

> Create a vector of `x` coordinates, and use the `randn` function to generate normally distributed random values for `y`. Then create a swarm chart of `x` and `y`.

<pre class="mcode">x = [ones(1,500) 2*ones(1,500) 3*ones(1,500)];
y1 = 2 * randn(1,500);
y2 = 3 * randn(1,500) + 5;
y3 = 5 * randn(1,500) + 5;
y = [y1 y2 y3];
swarmchart(x,y)
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/740.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_0_0_create_swarm_chart_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_0_0_create_swarm_chart_ssim_map.png" 
  index=508
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Multiple Data Sets with Custom Marker Size

> Create three sets of `x` and `y` coordinates. Use the `randn` function to generate random values for `y`.

<pre class="mcode">x1 = ones(1,500);
x2 = 2 * ones(1,500);
x3 = 3 * ones(1,500);
y1 = 2 * randn(1,500);
y2 = [randn(1,250) randn(1,250) + 4];
y3 = 5 * randn(1,500) + 5;</pre>
> Create a swarm chart of the first data set, and specify a uniform marker size of `5`. Then call `hold on` to plot the second and third data sets together with the first data set. Call `hold off` to release the hold state of the axes.

<pre class="mcode">swarmchart(x1,y1,5)
hold on
swarmchart(x2,y2,5)
swarmchart(x3,y3,5)
hold off
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/742.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_1_0_plot_multiple_data_sets_with_custom_marker_size_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_1_0_plot_multiple_data_sets_with_custom_marker_size_ssim_map.png" 
  index=509
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Marker Type

> Read the `BicycleCounts.csv` data set into a timetable called `tbl`. This data set contains bicycle traffic data over a period of time. Display the first five rows of `tbl`. 

<pre class="mcode">tbl = readtable(fullfile(matlabroot,'examples','matlab','data','BicycleCounts.csv'));
tbl(1:5,:)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>5×5 table</em></span>
         Timestamp              Day         Total    Westbound    Eastbound
    ___________________    _____________    _____    _________    _________

    2015-06-24 00:00:00    {'Wednesday'}     13          9            4    
    2015-06-24 01:00:00    {'Wednesday'}      3          3            0    
    2015-06-24 02:00:00    {'Wednesday'}      1          1            0    
    2015-06-24 03:00:00    {'Wednesday'}      1          1            0    
    2015-06-24 04:00:00    {'Wednesday'}      1          1            0    

</pre></div></pre>
> Create a vector `x` with the day name from each observation, and another vector y with the bicycle traffic observed. Then create a swarm chart of `x` and `y`, and specify the point marker `('.')`. The chart shows the distribution of bicycle traffic according to the day of the week.

<pre class="mcode">daynames = ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"];
x = categorical(tbl.Day,daynames);
y = tbl.Total;
swarmchart(x,y,'.');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_2_0_specify_marker_type_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_2_0_specify_marker_type_ssim_map.png" 
  index=510
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Display Filled Markers with Varied Color

> Read the `BicycleCounts.csv` data set into a timetable called `tbl`. Create a vector `x` with the day name for each observation, another vector `y` with the bicycle traffic observed, and a third vector `c` with the hour of the day. 

> Then create a swarm chart of `x` and `y`, and specify the marker size as `20`. Specify the colors of the markers as vector `c`. The values in the vector index into the figure's colormap. Thus, the colors change according to the hour for each data point. Use the `'filled'` option to fill the markers with color instead of displaying them as hollow circles. 

<pre class="mcode">tbl = readtable(fullfile(matlabroot,'examples','matlab','data','BicycleCounts.csv'));
daynames = ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"];
x = categorical(tbl.Day,daynames);
y = tbl.Total;
c = hour(tbl.Timestamp);
swarmchart(x,y,20,c,'filled');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_3_0_display_filled_markers_with_varied_color_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_3_0_display_filled_markers_with_varied_color_ssim_map.png" 
  index=511
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Change Jitter Type and Jitter Width

> Read the `BicycleCounts.csv` data set into a timetable called `tbl`. Create a vector `x` with the day name for each observation, another vector `y` with the bicycle traffic observed, and a third vector `c` with the hour of the day. Then create a swarm chart of `x` and `y`, and specify the marker size as `5`, and the colors of the markers as vector `c`. Call the `swarmchart` function with the return argument `s`, so that you can modify the chart after creating it. 

<pre class="mcode">tbl = readtable(fullfile(matlabroot,'examples','matlab','data','BicycleCounts.csv'));
daynames = ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"];
x = categorical(tbl.Day,daynames);
y = tbl.Total;
c = hour(tbl.Timestamp);
s = swarmchart(x,y,5,c);
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_4_0_change_jitter_type_and_jitter_width_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_4_0_change_jitter_type_and_jitter_width_ssim_map.png" 
  index=512
%}

> Change the shapes of the clusters at each `x` location, so that the points are uniformly and randomly distributed and the spacing is limited to no more than `0.5` data units.

<pre class="mcode">s.XJitter = 'rand';
s.XJitterWidth = 0.5;
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_4_1_change_jitter_type_and_jitter_width_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_4_1_change_jitter_type_and_jitter_width_ssim_map.png" 
  index=513
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Filled Markers with Transparency

> Create a pair of `x` and `y` coordinates. Use the `randn` function to generate random values for `y`. Then create a swarm chart with filled markers that are 50% transparent both on their faces and on their edges.

<pre class="mcode">x1 = ones(1,500);
x2 = 2 * ones(1,500);
x = [x1 x2];
y1 = 2 * randn(1,500);
y2 = [randn(1,250) randn(1,250) + 4];
y = [y1 y2];
swarmchart(x,y,'filled','MarkerFaceAlpha',0.5,'MarkerEdgeAlpha',0.5)
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/744.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_5_0_specify_filled_markers_with_transparency_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_5_0_specify_filled_markers_with_transparency_ssim_map.png" 
  index=514
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify the Target Axes

> Read the `BicycleCounts.csv` data set into a timetable called `tbl`. This data set contains bicycle traffic data over a period of time. Display the first five rows of `tbl`. 

<pre class="mcode">tbl = readtable(fullfile(matlabroot,'examples','matlab','data','BicycleCounts.csv'));
tbl(1:5,:)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>5×5 table</em></span>
         Timestamp              Day         Total    Westbound    Eastbound
    ___________________    _____________    _____    _________    _________

    2015-06-24 00:00:00    {'Wednesday'}     13          9            4    
    2015-06-24 01:00:00    {'Wednesday'}      3          3            0    
    2015-06-24 02:00:00    {'Wednesday'}      1          1            0    
    2015-06-24 03:00:00    {'Wednesday'}      1          1            0    
    2015-06-24 04:00:00    {'Wednesday'}      1          1            0    

</pre></div></pre>
> Define `x` as a categorical array of the day names in the table. Define `yEast` and `yWest` as vectors containing the eastbound and westbound bicycle traffic counts.

<pre class="mcode">daynames = ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"];
x = categorical(tbl.Day,daynames);
yEast = tbl.Eastbound;
yWest = tbl.Westbound;</pre>
> Create a tiled chart layout in the `'flow'` tile arrangement, so that the axes fill the available space in the layout. Call the `nexttile` function to create an axes object and return it as `ax1`. Then create a swarm chart of the eastbound data by passing `ax1` to the `swarmchart` function.

<pre class="mcode">tiledlayout('flow')
ax1 = nexttile;
y = tbl.Eastbound;
swarmchart(ax1,x,y,'.');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_6_0_specify_the_target_axes_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_6_0_specify_the_target_axes_ssim_map.png" 
  index=515
%}

> Repeat the process to create a second axes object and a swarm chart for the westbound traffic.

<pre class="mcode">ax2 = nexttile;
y = tbl.Westbound;
s = swarmchart(ax2,x,y,'.');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_6_1_specify_the_target_axes_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/scatter-and-bubble-charts/swarmchart/plot_6_1_specify_the_target_axes_ssim_map.png" 
  index=516
%}



<!--------------------- EXAMPLE BREAK ------------------------->

