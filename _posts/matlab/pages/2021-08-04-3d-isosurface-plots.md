---
description: How to make 3D Isosurface Plots in MATLAB<sup>&reg;</sup> with Plotly.
name: 3D Isosurface Plots
display_as: 3d_charts
order: 10
permalink: matlab/3d-isosurface-plots/
thumbnail: thumbnail/isosurface.jpg
layout: base
language: matlab
page_type: u-guide
---


## Draw Isosurface with Lighting

Load the flow data set, which represents the speed profile of a submerged jet within an infinite tank. Draw the isosurface at the data value of -3 and prepare the isosurface for lighting by:

* Recalculating the isosurface normals based on the volume data.
* Setting the face and edge color.
* Specifying the view.
* Adding lights.

<pre class="mcode">
[x,y,z,v] = flow;
p = patch(isosurface(x,y,z,v,-3));
isonormals(x,y,z,v,p)
p.FaceColor = 'red';
p.EdgeColor = 'none';
daspect([1 1 1])
view(3); 
axis tight
camlight 
lighting gouraud

fig2plotly()
</pre>

{% capture isosurface_plot_1 %}
  {% raw %}

  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=isosurface_plot_1
  src="https://chart-studio.plotly.com/~danton267/977.embed"
  index=1
%}


<!--------------------- EXAMPLE BREAK ------------------------->

## Set Isosurface Colors

Visualize the flow data, but color-code the surface to indicate magnitude along the x-axis. Use a sixth argument to isosurface, which provides a means to overlay another data set by coloring the resulting isosurface. The colors variable is a vector containing a scalar value for each vertex in the isosurface, to be portrayed with the current color map. In this case, it is one of the variables that define the surface, but it could be entirely independent. You can apply a different color scheme by changing the current figure color map.

<pre class="mcode">
[x,y,z,v] = flow; 
[faces,verts,colors] = isosurface(x,y,z,v,-3,x); 
patch('Vertices',verts,'Faces',faces,'FaceVertexCData',colors,...
    'FaceColor','interp','EdgeColor','interp')
view(30,-15)
axis vis3d
colormap copper

fig2plotly()
</pre>

{% capture isosurface_plot_2 %}
  {% raw %}

  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=isosurface_plot_2
  src="https://chart-studio.plotly.com/~danton267/977.embed"
  index=1
%}


<!--------------------- EXAMPLE BREAK ------------------------->