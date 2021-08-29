---
layout: post
title:  MATLAB polarscatter
description: Learn how to make 6 polarscatter charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/polar-plots/polarscatter/
layout: matlab
function: polarscatter
reference: https://mathworks.com/help/matlab/ref/polarscatter.html
github: polar-plots/2021-08-29-polarscatter.md
---

## Create Scatter Chart

> Create a scatter chart in polar coordinates.

<pre class="mcode">
  th = pi/4:pi/4:2*pi;
r = [19 6 12 18 16 11 15 15];
polarscatter(th,r)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/675.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_0_0_create_scatter_chart_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_0_0_create_scatter_chart_ssim_map.png" 
  index=505
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Use Filled Markers and Set Marker Size

> Create a scatter chart that uses filled markers by specifying the optional input argument, `'filled'`. Set the marker size to 75 points squared.

<pre class="mcode">
  th = linspace(0,2*pi,20);
r = rand(1,20);
sz = 75;
polarscatter(th,r,sz,<span style='color:#A020F0'>'filled'</span>)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/677.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_1_0_use_filled_markers_and_set_marker_size_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_1_0_use_filled_markers_and_set_marker_size_ssim_map.png" 
  index=506
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Use Markers with Varying Sizes and Colors

> Create a scatter chart with markers of varying sizes and colors. Specify the optional size and color input arguments as vectors. Use unique values in the color vector to specify the different colors you want. The values map to colors in the colormap.

<pre class="mcode">
  th = pi/4:pi/4:2*pi;
r = [19 6 12 18 16 11 15 15];
sz = 100*[6 15 20 3 15 3 6 40];
c = [1 2 2 2 1 1 2 1];
polarscatter(th,r,sz,c,<span style='color:#A020F0'>'filled'</span>,<span style='color:#A020F0'>'MarkerFaceAlpha'</span>,.5)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/679.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_2_0_use_markers_with_varying_sizes_and_colors_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_2_0_use_markers_with_varying_sizes_and_colors_ssim_map.png" 
  index=507
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Convert from Degrees to Radians Before Plotting

> Create data where the angle values are in degrees. Since `polarscatter` requires angle values in radians, convert the values to radians before plotting using `deg2rad`.

<pre class="mcode">
  th = linspace(0,360,50);
r = 0.005*th/10;
th_radians = deg2rad(th);
polarscatter(th_radians,r)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/681.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_3_0_convert_from_degrees_to_radians_before_plotting_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_3_0_convert_from_degrees_to_radians_before_plotting_ssim_map.png" 
  index=508
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Combine Two Scatter Charts

> Combine two scatter charts in the same polar axes using the `hold` command. Add a legend with a description of each chart.

<pre class="mcode">
  th = pi/6:pi/6:2*pi;
r1 = rand(12,1);
polarscatter(th,r1,<span style='color:#A020F0'>'filled'</span>)

hold on 
r2 = rand(12,1);
polarscatter(th,r2,<span style='color:#A020F0'>'filled'</span>)
hold off

legend('Series A','Series B')
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/683.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_4_0_combine_two_scatter_charts_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_4_0_combine_two_scatter_charts_ssim_map.png" 
  index=509
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Scatter Chart After Creation

> Create a scatter chart and assign the scatter object to the variable `ps`. 

<pre>
  th = pi/6:pi/6:2*pi;
r = rand(12,1);
ps = polarscatter(th,r,<span style='color:#A020F0'>'filled'</span>)
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/685.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_0_modify_scatter_chart_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_0_modify_scatter_chart_after_creation_ssim_map.png" 
  index=510
%}

<pre>
  <div class="codeoutput"><pre>ps = 
  Scatter with properties:

             Marker: <span style='color:#A020F0'>'o'</span>
    MarkerEdgeColor: <span style='color:#A020F0'>'none'</span>
    MarkerFaceColor: <span style='color:#A020F0'>'flat'</span>
           SizeData: 36
          LineWidth: 0.5000
          ThetaData: [1x12 double]
              RData: [1x12 double]
              ZData: [1x0 double]
              CData: [0 0.4470 0.7410]

  Show all properties

</pre></div>
</pre>

> Use `ps` to modify properties of the scatter object after it is created.

<pre class="mcode">
  ps.Marker = <span style='color:#A020F0'>'square'</span>;
ps.SizeData = 200;
ps.MarkerFaceColor = <span style='color:#A020F0'>'red'</span>;
ps.MarkerFaceAlpha = .5;
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/687.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_1_modify_scatter_chart_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_1_modify_scatter_chart_after_creation_ssim_map.png" 
  index=511
%}



<!--------------------- EXAMPLE BREAK ------------------------->

