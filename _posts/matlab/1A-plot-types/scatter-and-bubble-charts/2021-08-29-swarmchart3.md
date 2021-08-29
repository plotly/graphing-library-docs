---
layout: post
title:  MATLAB swarmchart3
description: Learn how to make 6 swarmchart3 charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/scatter-and-bubble-charts/2021-08-29-swarmchart3/
layout: matlab
function: swarmchart3
reference: https://mathworks.com/help/matlab/ref/swarmchart3.html
github: scatter-and-bubble-charts/2021-08-29-swarmchart3.md
---

## Create a 3-D Swarm Chart

> Read the `BicycleCounts.csv` data set into a timetable called `tbl`. This data set contains bicycle traffic data over a period of time. Display the first five rows of `tbl`. 

<pre>
  tbl = readtable(fullfile(matlabroot,<span style='color:#A020F0'>'examples'</span>,<span style='color:#A020F0'>'matlab'</span>,<span style='color:#A020F0'>'data'</span>,'BicycleCounts.csv'));
tbl(1:5,:)
</pre>

<pre>
  <div class="codeoutput"><pre>ans=<span class="emphasis"><em>5×5 table</em></span>
         Timestamp              Day         Total    Westbound    Eastbound
    ___________________    _____________    _____    _________    _________

    2015-06-24 00:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}     13          9            4    
    2015-06-24 01:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      3          3            0    
    2015-06-24 02:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      1          1            0    
    2015-06-24 03:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      1          1            0    
    2015-06-24 04:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      1          1            0    

</pre></div>
</pre>

> Create a vector `x` with the day name from each observation.

<pre>
  daynames = ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"];
x = categorical(tbl.Day,daynames);
</pre>

> Create a categorical vector `y` containing the values `"pm"` or `"am"` according to the time for each observation in the table. Create vector `z` of eastbound traffic data. Then create a swarm chart of `x`, `y`, and `z`. The chart shows the data distributions for each morning and evening of the week.

<pre class="mcode">
  ispm = tbl.Timestamp.Hour < 12;
y = categorical;
y(ispm) = "pm";
y(~ispm) = "am";
z= tbl.Eastbound;
swarmchart3(x,y,z);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_0_0_create_a_3_d_swarm_chart_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_0_0_create_a_3_d_swarm_chart_ssim_map.png" 
  index=577
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Marker Size

> Create vector `x` as a combination of zeros and ones, and create `y` as a vector containing all ones. Create `z` as a vector of squared random numbers. Then create a swarm chart of `x`, `y`, and `z`, and specify the size marker size as `5`. 

<pre class="mcode">
  x = [zeros(1,500) ones(1,500)];
y = ones(1,1000);
z = randn(1,1000).^2;
swarmchart3(x,y,z,5);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/747.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_1_0_specify_marker_size_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_1_0_specify_marker_size_ssim_map.png" 
  index=579
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Marker Symbol

> Create vector `x` as a combination of zeros and ones, and create `y` as a vector containing all ones. Create `z` as a vector of squared random numbers. Then create a swarm chart of `x`, `y`, and `z`, and specify the point (`'.'`) marker symbol. 

<pre class="mcode">
  x = [zeros(1,500) ones(1,500)];
y = ones(1,1000);
z = randn(1,1000).^2;
swarmchart3(x,y,z,'.');
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/749.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_2_0_specify_marker_symbol_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_2_0_specify_marker_symbol_ssim_map.png" 
  index=581
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Vary Marker Color

> Create vector `x` containing a combination of zeros and ones, and create `y` containing a random combination of ones and twos. Create `z` as a vector of squared random numbers. Specify the colors for the markers by creating vector `c` as the square root of `z`. Then create a swarm chart of `x`, `y`, and `z`. Set the marker size to `50` and specify the colors as `c`. The values in `c` index into the figure's colormap. Use the `'filled'` option to fill the markers with color instead of displaying them as hollow circles.

<pre class="mcode">
  x = [zeros(1,500) ones(1,500)];
y = randi(2,1,1000);
z = randn(1,1000).^2;
c = sqrt(z);
swarmchart3(x,y,z,50,c,<span style='color:#A020F0'>'filled'</span>);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/751.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_3_0_vary_marker_color_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_3_0_vary_marker_color_ssim_map.png" 
  index=583
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Change Jitter Type and Width

> Create vector `x` containing a combination of zeros and ones, and create `y` containing a random combination of the numbers one through four. Create `z` as a vector of squared random numbers. Then create a swarm chart of `x`, `y`, and `z` by calling the `swarmchart` function with a return argument that stores the `Scatter` object. Add *x*- and *y*-axis labels so you can see the effect of changing the jitter properties in each dimension.

<pre class="mcode">
  x = [zeros(1,500) ones(1,500)];
y = randi(4,1,1000);
z = randn(1,1000).^2;
s = swarmchart3(x,y,z);
xlabel(<span style='color:#A020F0'>'X'</span>)
ylabel(<span style='color:#A020F0'>'Y'</span>)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/753.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_4_0_change_jitter_type_and_width_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_4_0_change_jitter_type_and_width_ssim_map.png" 
  index=585
%}

> Change the shapes of the clusters of points by setting the jitter properties on the `Scatter` object. In the `x` dimension, specify uniform random jitter, and change the jitter width to `0.5` data units.  In the `y` dimension, specify normal random jitter, and change the jitter width to `0.1` data units. The spacing between points does not exceed the jitter width you specify.

<pre class="mcode">
  s.XJitter = <span style='color:#A020F0'>'rand'</span>;
s.XJitterWidth = 0.5;
s.YJitter = <span style='color:#A020F0'>'randn'</span>;
s.YJitterWidth = 0.1;
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/755.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_4_1_change_jitter_type_and_width_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_4_1_change_jitter_type_and_width_ssim_map.png" 
  index=587
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Target Axes

> Read the `BicycleCounts.csv` data set into a timetable called `tbl`. This data set contains bicycle traffic data over a period of time. Display the first five rows of `tbl`. 

<pre>
  tbl = readtable(fullfile(matlabroot,<span style='color:#A020F0'>'examples'</span>,<span style='color:#A020F0'>'matlab'</span>,<span style='color:#A020F0'>'data'</span>,'BicycleCounts.csv'));
tbl(1:5,:)
</pre>

<pre>
  <div class="codeoutput"><pre>ans=<span class="emphasis"><em>5×5 table</em></span>
         Timestamp              Day         Total    Westbound    Eastbound
    ___________________    _____________    _____    _________    _________

    2015-06-24 00:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}     13          9            4    
    2015-06-24 01:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      3          3            0    
    2015-06-24 02:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      1          1            0    
    2015-06-24 03:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      1          1            0    
    2015-06-24 04:00:00    {<span style='color:#A020F0'>'Wednesday'</span>}      1          1            0    

</pre></div>
</pre>

> Create vector `x` with the days names for each observation. Create a categorical vector `y` containing the values `"pm"` or `"am"` according to the time for each observation in the table. Define `ze` as a vector of eastbound traffic data, and define `zw` as a vector of westbound traffic data. 

<pre class="mcode">
  daynames = ["Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday"];
x = categorical(tbl.Day,daynames);
ispm = tbl.Timestamp.Hour<12;
y = categorical;
y(ispm) = <span style='color:#A020F0'>'pm'</span>;
y(~ispm) = <span style='color:#A020F0'>'am'</span>;
ze = tbl.Eastbound;
zw = tbl.Westbound;
fig2plotly()
</pre>

> Create a tiled chart layout in the `'flow'` tile arrangement, so that the axes fill the available space in the layout. Call the `nexttile` function to create an axes object and return it as `ax1`. Then create a swarm chart of the eastbound data by passing `ax1` to the `swarmchart` function.

<pre class="mcode">
  tiledlayout(<span style='color:#A020F0'>'flow'</span>)
ax1=nexttile;
swarmchart3(ax1,x,y,ze,'.');
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_5_1_specify_target_axes_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_5_1_specify_target_axes_ssim_map.png" 
  index=591
%}

> Repeat the process to create a second axes object and a swarm chart for the westbound traffic.

<pre class="mcode">
  ax2 = nexttile;
z = tbl.Westbound;
swarmchart3(ax2,x,y,zw,'.');
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_5_2_specify_target_axes_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/scatter-and-bubble-charts/swarmchart3/plot_5_2_specify_target_axes_ssim_map.png" 
  index=593
%}



<!--------------------- EXAMPLE BREAK ------------------------->

