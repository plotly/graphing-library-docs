---
layout: post
title:  MATLAB streamtube
description: Learn how to make 2 streamtube charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/volume-visualization/2021-08-23-streamtube/
layout: matlab
function: streamtube
reference: https://mathworks.com/help/matlab/ref/streamtube.html
github: volume-visualization/streamtube.md
---

## Visualize flow

> Use the `streamtube` function to indicate flow in the `wind` data set. The inputs include the coordinates, vector field components, and starting location for the stream tubes. 

<pre class="mcode">
  load wind
[sx,sy,sz] = meshgrid(80,20:10:50,0:5:15);
streamtube(x,y,z,u,v,w,sx,sy,sz);
view(3);
axis tight
shading interp;
camlight; 
lighting gouraud
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/971.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/volume-visualization/streamtube/plot_0_0_visualize_flow_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/volume-visualization/streamtube/plot_0_0_visualize_flow_ssim_map.png" 
  index=630
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Visualize Flow Using Vertex Data and Divergence

> Use vertex data returned by the `stream3` function and divergence data to visualize flow.

<pre class="mcode">
  load wind
[sx,sy,sz] = meshgrid(80,20:10:50,0:5:15);
verts = stream3(x,y,z,u,v,w,sx,sy,sz);
div = divergence(x,y,z,u,v,w);
streamtube(verts,x,y,z,-div);
view(3);
axis tight
shading interp
camlight 
lighting gouraud
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/973.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/volume-visualization/streamtube/plot_1_0_visualize_flow_using_vertex_data_and_divergence_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/volume-visualization/streamtube/plot_1_0_visualize_flow_using_vertex_data_and_divergence_ssim_map.png" 
  index=631
%}



<!--------------------- EXAMPLE BREAK ------------------------->

