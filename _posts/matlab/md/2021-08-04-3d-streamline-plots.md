---
description: How to make 3D Streamline Plots in MATLAB<sup>&reg;</sup> with Plotly.
name: 3D Streamline Plots
display_as: 3d_charts
order: 18
permalink: matlab/3d-streamline-plots/
thumbnail: thumbnail/
layout: base
language: matlab
page_type: u-guide
---

## Create 3-D Quiver Plot

Load sample data that represents air currents over North America. For this example, select a subset of the data.

<pre class="mcode">
load wind
X = x(5:10,20:25,6:10);
Y = y(5:10,20:25,6:10);
Z = z(5:10,20:25,6:10);
U = u(5:10,20:25,6:10);
V = v(5:10,20:25,6:10);
W = w(5:10,20:25,6:10);
</pre>

Create a 3-D quiver plot of the subset you selected. The vectors `X`, `Y`, and `Z` represent the location of the base of each arrow, and `U`, `V`, and `W` represent the directional components of each arrow. By default, the `quiver3` function shortens the arrows so they do not overlap. Call `axis equal` to use equal data unit lengths along each axis. This makes the arrows point in the correct direction.

<pre class="mcode">
quiver3(X,Y,Z,U,V,W)
axis equal

fig2plotly()
</pre>

plot_0_0_create_3_d_quiver_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Disable Automatic Scaling

By default, the `quiver3` function shortens arrows so they do not overlap. To disable automatic scaling so that arrow lengths are determined entirely by `U`, `V`, and `W`, set the `scale` argument to `0`.

For example, first return the x-,  y-, and z-coordinates of a unit sphere with 10-by-10 faces. Calculate the directional components of its surface normals using the `surfnorm` function. Then, create a 3-D quiver plot with no automatic scaling.

<pre class="mcode">
[X,Y,Z] = sphere(10);
[U,V,W] = surfnorm(X,Y,Z);
quiver3(X,Y,Z,U,V,W,0)
axis equal

fig2plotly()
</pre>

plot_1_0_disable_automatic_scaling

For comparison, create the plot with automatic scaling. Note that the arrows are shorter and do not overlap.

<pre class="mcode">
figure
quiver3(X,Y,Z,U,V,W)
axis equal

fig2plotly()
</pre>

plot_1_1_disable_automatic_scaling



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Vectors Normal to Surface

Plot vectors that are normal to the surface defined by the function z=xe<sup>-x<sup>2</sup>-y<sup>2</sup></sup>. Use the `quiver3` function to plot the vectors and the `surf` function to plot the surface.

First, create a grid of x- and y-values that are equally spaced. Use them to calculate z. Then, find the normal vectors.

<pre class="mcode">
[X,Y] = meshgrid(-2:0.25:2,-1:0.2:1);
Z = X.*exp(-X.^2 - Y.^2);
[U,V,W] = surfnorm(X,Y,Z);

fig2plotly()
</pre>

Display the vectors as a 3-D quiver plot. Then, display the surface in the same axes. Adjust the display so that the vectors appear normal to the surface by calling `axis equal`.

<pre class="mcode">
quiver3(X,Y,Z,U,V,W)
hold on
surf(X,Y,Z)
axis equal

fig2plotly()
</pre>

plot_2_1_plot_vectors_normal_to_surface



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Arrow Color

Create a 3-D quiver plot and specify a color for the arrows.

For example, first return the x-, y-, and z- coordinates of a surface. Calculate the directional components of its surface normals using the `surfnorm` function. 

<pre class="mcode">
[X,Y] = meshgrid(-pi/2:pi/8:pi/2,-pi/2:pi/8:pi/2);
Z = sin(X) + cos(Y);
[U,V,W] = surfnorm(Z);
</pre>

Then, create a 3-D quiver plot with red arrows.

<pre class="mcode">
quiver3(X,Y,Z,U,V,W,'r')
axis equal

fig2plotly()
</pre>

plot_3_0_specify_arrow_color



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Axes for 3-D Quiver Plot

Starting in R2019b, you can display a tiling of plots using the `tiledlayout` and `nexttile` functions. Call the `tiledlayout` function to create a 1-by-2 tiled chart layout. Call the `nexttile` function to create an axes object and return the object as `ax1`. Create the left plot by passing `ax1` to the `quiver3` function. Add a title to the plot by passing the axes to the `title` function. Repeat the process to create the right plot.

<pre class="mcode">
[X,Y] = meshgrid(-2:0.25:0,-2:0.25:0);
Z1 = -0.5*(X.^2 + Y.^2);
[U1,V1,W1] = surfnorm(Z1);
Z2 = -X.*Y;
[U2,V2,W2] = surfnorm(Z2);

tiledlayout(1,2)

% Left plot
ax1 = nexttile;
quiver3(ax1,X,Y,Z1,U1,V1,W1)
axis equal
title(ax1,'Left Plot')

% Right plot
ax2 = nexttile;
quiver3(ax2,X,Y,Z2,U2,V2,W2)
axis equal
title(ax2,'Right Plot')

fig2plotly()
</pre>

plot_4_0_specify_axes_for_3_d_quiver_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify 3-D Quiver Plot After Creation

Create a 3-D quiver plot and return the quiver object. Then, remove the arrowheads and add dot markers at the base of each arrow.

<pre class="mcode">
[X,Y] = meshgrid(-3:0.5:3,-3:0.5:3);
Z = 0.2*(Y.^2 - X.^2);
[U,V,W] = surfnorm(Z);

q = quiver3(X,Y,Z,U,V,W);
axis equal
q.ShowArrowHead = 'off';
q.Marker = '.';

fig2plotly()
</pre>

plot_5_0_modify_3_d_quiver_plot_after_creation



<!--------------------- EXAMPLE BREAK ------------------------->


## Use Stream Ribbons to Indicate Flow

Use stream ribbons to indicate the flow in a data set.

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

plot_0_0_use_stream_ribbons_to_indicate_flow



<!--------------------- EXAMPLE BREAK ------------------------->

## Indicate Flow Using Precalculated Data

Use precalculated vertex data, curl average velocity, and speed to indicate flow. 

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

plot_1_0_indicate_flow_using_precalculated_data

Using precalculated data enables you to use values other than those calculated from the single data source. In this case, the speed is reduced by a factor of 10 compared to the previous example.



<!--------------------- EXAMPLE BREAK ------------------------->

## Stream Ribbon With Twist Angle

Specify a twist angle for the stream ribbon 

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

plot_2_0_stream_ribbon_with_twist_angle



<!--------------------- EXAMPLE BREAK ------------------------->

## Combination of Cone and Stream Ribbon Plots

Create 3-D arrays and a cone plot.

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
h = coneplot(x,y,z,u,v,w,cx,cy,cz,'quiver');
set(h,'Color','k');

fig2plotly()
</pre>

plot_3_0_combination_of_cone_and_stream_ribbon_plots

Plot two sets of stream ribbons. Then define the view and lighting.

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
camdolly(0,0,.5,'fixtarget')
camlight

fig2plotly()
</pre>

plot_3_1_combination_of_cone_and_stream_ribbon_plots



<!--------------------- EXAMPLE BREAK ------------------------->


## Plot Streamlines in Slice Plane

Load the `wind` data set, which loads the three-dimensional arrays `u`, `v`, `w`, `x`, `y`, and `z`. Draw streamlines along the slice plane where `z = 5`.

<pre class="mcode">
load wind
streamslice(x,y,z,u,v,w,[],[],5)
axis tight

fig2plotly()
</pre>

plot_0_0_plot_streamlines_in_slice_plane



<!--------------------- EXAMPLE BREAK ------------------------->

