---
description: How to make 3D Streamtube Plots plots in MATLAB<sup>&reg;</sup> with Plotly.
name: 3D Streamtube Plots
display_as: 3d_charts
order: 13
permalink: matlab/streamtube-plot/
thumbnail: thumbnail/streamtube.jpg
layout: base
language: matlab
page_type: u-guide
---

## Visualize flow

Use the `streamtube` function to indicate flow in the `wind` data set. The inputs include the coordinates, vector field components, and starting location for the stream tubes. 

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

plot_0_0_visualize_flow



<!--------------------- EXAMPLE BREAK ------------------------->

## Visualize Flow Using Vertex Data and Divergence

Use vertex data returned by the `stream3` function and divergence data to visualize flow.

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

plot_1_0_visualize_flow_using_vertex_data_and_divergence



<!--------------------- EXAMPLE BREAK ------------------------->

