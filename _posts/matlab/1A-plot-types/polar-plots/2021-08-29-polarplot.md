---
layout: post
title:  MATLAB polarplot
description: Learn how to make 8 polarplot charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/polar-plots/2021-08-29-polarplot/
layout: matlab
function: polarplot
reference: https://mathworks.com/help/matlab/ref/polarplot.html
github: polar-plots/2021-08-29-polarplot.md
---

## Create Polar Plot

> Plot a line in polar coordinates.

<pre class="mcode">
  theta = 0:0.01:2*pi;
rho = sin(2*theta).*cos(2*theta);
polarplot(theta,rho)
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/980.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_0_0_create_polar_plot_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_0_0_create_polar_plot_ssim_map.png" 
  index=495
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Convert from Degrees to Radians Before Plotting

> Create the data to plot.

<pre>
  theta = linspace(0,360,50);
rho = 0.005*theta/10;
</pre>

> Convert the values in `theta` from degrees to radians. Then, plot the data in polar coordinates.

<pre class="mcode">
  theta_radians = deg2rad(theta);
polarplot(theta_radians,rho)
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/982.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_1_0_convert_from_degrees_to_radians_before_plotting_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_1_0_convert_from_degrees_to_radians_before_plotting_ssim_map.png" 
  index=496
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Multiple Lines in Polar Coordinates

> Plot two lines in polar coordinates. Use a dashed line for the second line.

<pre class="mcode">
  theta = linspace(0,6*pi);
rho1 = theta/10;
polarplot(theta,rho1)

rho2 = theta/12;
hold on
polarplot(theta,rho2,'--')
hold off
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/984.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_2_0_plot_multiple_lines_in_polar_coordinates_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_2_0_plot_multiple_lines_in_polar_coordinates_ssim_map.png" 
  index=497
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Radius Values at Equally Spaced Angles

> Specify only the radius values, without specifying the angle values. `polarplot` plots the radius values at equally spaced angles that span from 0 to 2π. Display a circle marker at each data point.

<pre class="mcode">
  rho = 10:5:70;
polarplot(rho,'-o')
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/986.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_3_0_plot_radius_values_at_equally_spaced_angles_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_3_0_plot_radius_values_at_equally_spaced_angles_ssim_map.png" 
  index=498
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Negative Radius Values

> Create a polar plot using negative radius values. By default, `polarplot` reflects negative values through the origin.

<pre class="mcode">
  theta = linspace(0,2*pi);
rho = sin(theta);
polarplot(theta,rho)
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/988.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_4_0_plot_negative_radius_values_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_4_0_plot_negative_radius_values_ssim_map.png" 
  index=499
%}

> Change the limits of the *r*-axis so it ranges from -1 to 1.

<pre>
  rlim([-1 1])
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/988.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_4_0_plot_negative_radius_values_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_4_0_plot_negative_radius_values_ssim_map.png" 
  index=499
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Line Color for Polar Plot

> Create a polar plot using a red line with circle markers.

<pre class="mcode">
  theta = linspace(0,2*pi,25);
rho = 2*theta;
polarplot(theta,rho,'r-o')
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/992.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_5_0_specify_line_color_for_polar_plot_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_5_0_specify_line_color_for_polar_plot_ssim_map.png" 
  index=501
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Line Color After Creation

> Create a polar plot and return the chart line object. 

<pre>
  theta = linspace(0,2*pi,25);
rho = 2*theta;
p = polarplot(theta,rho);
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/994.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_6_0_specify_line_color_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_6_0_specify_line_color_after_creation_ssim_map.png" 
  index=502
%}

> Change the line color and width and add markers.

<pre class="mcode">
  p.Color = <span style='color:#A020F0'>'magenta'</span>;
p.Marker = <span style='color:#A020F0'>'square'</span>;
p.MarkerSize = 8;
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/996.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_6_1_specify_line_color_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_6_1_specify_line_color_after_creation_ssim_map.png" 
  index=503
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Polar Plot with Complex Values

> Plot complex values in polar coordinates. Display markers at each point without a line connecting them.

<pre class="mcode">
  Z = [2+3i 2 -1+4i 3-4i 5+2i -4-2i -2+3i -2 -3i 3i-2i];
polarplot(Z,'*')
fig2plotly('TreatAs', 'polarplot')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/998.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_7_0_create_polar_plot_with_complex_values_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarplot/plot_7_0_create_polar_plot_with_complex_values_ssim_map.png" 
  index=504
%}



<!--------------------- EXAMPLE BREAK ------------------------->

