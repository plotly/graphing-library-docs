---
layout: post
title:  MATLAB streamribbon
description: Learn how to make 4 streamribbon charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/volume-visualization/2021-08-29-streamribbon/
layout: matlab
function: streamribbon
reference: https://mathworks.com/help/matlab/ref/streamribbon.html
github: volume-visualization/2021-08-29-streamribbon.md
---

## Use Stream Ribbons to Indicate Flow

> Use stream ribbons to indicate the flow in a data set.

<pre class="mcode">
  load wind
[sx,sy,sz] = meshgrid(80,20:10:50,0:5:15);
streamribbon(x,y,z,u,v,w,sx,sy,sz);
axis tight
shading interp
view(3);
camlight
lighting gouraud
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/958.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_0_0_use_stream_ribbons_to_indicate_flow_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_0_0_use_stream_ribbons_to_indicate_flow_ssim_map.png" 
  index=693
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Indicate Flow Using Precalculated Data

> Use precalculated vertex data, curl average velocity, and speed to indicate flow. 

<pre class="mcode">
  load wind
[sx,sy,sz] = meshgrid(80,20:10:50,0:5:15);
verts = stream3(x,y,z,u,v,w,sx,sy,sz);
cav = curl(x,y,z,u,v,w);
spd = sqrt(u.^2 + v.^2 + w.^2).*.1;
streamribbon(verts,x,y,z,cav,spd);
axis tight
shading interp
view(3);
camlight; 
lighting gouraud
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/960.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_1_0_indicate_flow_using_precalculated_data_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_1_0_indicate_flow_using_precalculated_data_ssim_map.png" 
  index=694
%}

> Using precalculated data enables you to use values other than those calculated from the single data source. In this case, the speed is reduced by a factor of 10 compared to the previous example.



<!--------------------- EXAMPLE BREAK ------------------------->

## Stream Ribbon With Twist Angle

> Specify a twist angle for the stream ribbon 

<pre class="mcode">
  t = 0:.15:15;
verts = {[cos(t)' sin(t)' (t/3)']};
twistangle = {cos(t)'};
streamribbon(verts,twistangle);
axis tight
shading interp
view(3)
camlight 
lighting gouraud
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/962.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_2_0_stream_ribbon_with_twist_angle_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_2_0_stream_ribbon_with_twist_angle_ssim_map.png" 
  index=695
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Combination of Cone and Stream Ribbon Plots

> Create 3-D arrays and a cone plot.

<pre class="mcode">
  xmin = -7; xmax = 7;
ymin = -7; ymax = 7; 
zmin = -7; zmax = 7; 
x = linspace(xmin,xmax,30);
y = linspace(ymin,ymax,20);
z = linspace(zmin,zmax,20);
[x,y,z] = meshgrid(x,y,z);
u = y; 
v = -x; 
w = 0*x+1;
[cx,cy,cz] = meshgrid(linspace(xmin,xmax,30),...
   linspace(ymin,ymax,30),[-3 4]);
h = coneplot(x,y,z,u,v,w,cx,cy,cz,<span style='color:#A020F0'>'quiver'</span>);
set(h,<span style='color:#A020F0'>'Color'</span>,<span style='color:#A020F0'>'k'</span>);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/964.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_3_0_combination_of_cone_and_stream_ribbon_plots_invalid_0.0012_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_3_0_combination_of_cone_and_stream_ribbon_plots_invalid_0.0012_ssim_map.png" 
  index=696
%}

> Plot two sets of stream ribbons. Then define the view and lighting.

<pre class="mcode">
  [sx,sy,sz] = meshgrid([-1 0 1],[-1 0 1],-6);
streamribbon(x,y,z,u,v,w,sx,sy,sz);
[sx,sy,sz] = meshgrid([1:6],[0],-6);
streamribbon(x,y,z,u,v,w,sx,sy,sz);
shading interp
view(-30,10) 
axis off tight
camproj perspective
camva(66)
camlookat 
camdolly(0,0,.5,<span style='color:#A020F0'>'fixtarget'</span>)
camlight
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/965.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_3_1_combination_of_cone_and_stream_ribbon_plots_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamribbon/plot_3_1_combination_of_cone_and_stream_ribbon_plots_ssim_map.png" 
  index=697
%}



<!--------------------- EXAMPLE BREAK ------------------------->

