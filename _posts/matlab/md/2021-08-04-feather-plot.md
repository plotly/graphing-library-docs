---
description: How to make Feather Plot in MATLAB<sup>&reg;</sup> with Plotly.
name: Feather Plot
display_as: scientific
order: 
permalink: matlab/feather-plot/
thumbnail: thumbnail/
layout: base
language: matlab
page_type: u-guide
---

## Create Compass Plot Using Cartesian Coordinates

Create a compass plot by specifying the Cartesian coordinates of each arrow.

<pre class="mcode">
u = [5 3 -4 -3 5];
v = [1 5 3 -2 -6];
compass(u,v)

fig2plotly('TreatAs', 'compass')
</pre>

plot_0_0_create_compass_plot_using_cartesian_coordinates



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Compass Plot Using Polar Coordinates

Create a compass plot using polar coordinates by first converting them to Cartesian coordinates. 

To do this, specify data using polar coordinates. Convert them to Cartesian coordinates using the `pol2cart` function. Then, create the plot. 

<pre class="mcode">
th = linspace(pi/4,2*pi,10);
r = linspace(5,20,10);
[u,v] = pol2cart(th,r);
compass(u,v)

fig2plotly('TreatAs', 'compass')
</pre>

plot_1_0_create_compass_plot_using_polar_coordinates

Note that the theta-axis and r-axis tick labels correspond to the polar coordinates.



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Compass Plot Using Complex Values

Sample a sinusoid at equally spaced intervals. Then, compute the 10-point discrete Fourier transform of the sinusoid. The result is a vector of complex values.

<pre class="mcode">
t = linspace(0,8*pi,100);
y = sin(2*t) + 2*sin(t+pi/2);
f = fft(y,10);
</pre>

Display the complex values using a compass plot. The real part determines the x-coordinate of each arrow, and the imaginary part determines the y-coordinate.

<pre class="mcode">
compass(f)

fig2plotly('TreatAs', 'compass')
</pre>

plot_2_0_create_compass_plot_using_complex_values



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Appearance of Whole Plot

Create a compass plot with red arrows.

<pre class="mcode">
u = [5 3 -4 -3 5];
v = [1 5 3 -2 -6];
compass(u,v,'r')

fig2plotly('TreatAs', 'compass')
</pre>

plot_3_0_specify_appearance_of_whole_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Appearance of One Arrow

Specify the line width and color of a single arrow by assigning the arrow to a variable and then setting its properties. To do this, first create a compass plot and return an array of `Line` objects.

<pre class="mcode">
u = [3 5 -4 -3 5];
v = [5 1 3 -2 -6];
c = compass(u,v);

fig2plotly('TreatAs', 'compass')
</pre>

Assign the first arrow to a variable. The first arrow corresponds to the first elements of `u` and `v`. Then, change the line width and color.

<pre class="mcode">
c1 = c(1);
c1.LineWidth = 2;
c1.Color = 'r';

fig2plotly('TreatAs', 'compass')
</pre>

plot_4_1_specify_appearance_of_one_arrow



<!--------------------- EXAMPLE BREAK ------------------------->

## Rotate Compass Plot

Rotate a compass plot so that 0 degrees points up by using the `view` function.

To do this, create a compass plot using polar coordinates. Convert the polar coordinates to Cartesian coordinates by using the `pol2cart` function, and then plot the converted coordinates.

<pre class="mcode">
th = linspace(0,3*pi/2,10);
r = linspace(5,20,10);
[u,v] = pol2cart(th,r);
compass(u,v)

fig2plotly('TreatAs', 'compass')
</pre>

plot_5_0_rotate_compass_plot

Note that 0 degrees points to the right. Rotate the theta-axis 90 degrees in a counterclockwise direction by calling `view` and specifying the first argument as -`90`. Maintain the 2-D view by specifying the second argument as `90`.

<pre class="mcode">
view(-90,90)

fig2plotly('TreatAs', 'compass')
</pre>

plot_5_1_rotate_compass_plot

Note that 0 degrees now points up.



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Axes for Compass Plot

Starting in R2019b, you can display a tiling of plots using the `tiledlayout` and `nexttile` functions. Call the `tiledlayout` function to create a 1-by-2 tiled chart layout. Call the `nexttile` function to create an axes object and return the object as `ax1`. Create the left plot by passing `ax1` to the `compass` function. Add a title to the plot by passing the axes to the `title` function. Repeat the process to create the right plot.

<pre class="mcode">
u = [7 5 -2 -5 8];
tiledlayout(1,2)

% Left plot
ax1 = nexttile;
v1 = [3 7 5 -4 -6];
compass(ax1,u,v1)
title(ax1,'Left Plot')

% Right plot
ax2 = nexttile;
v2 = [-3 -4 -5 6 6];
compass(ax2,u,v2)
title(ax2,'Right Plot')

fig2plotly('TreatAs', 'compass')
</pre>

plot_6_0_specify_axes_for_compass_plot



<!--------------------- EXAMPLE BREAK ------------------------->



## Create Feather Plot Using Cartesian Values

Create a feather plot by specifying the components of each arrow as Cartesian values. The nth arrow originates from n on the x-axis.

<pre class="mcode">
t = -pi/2:pi/8:pi/2;
u = 10*sin(t);
v = 10*cos(t);
feather(u,v)

fig2plotly()
</pre>

plot_0_0_create_feather_plot_using_cartesian_values



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Feather Plot Using Polar Values

Create a feather plot using polar coordinates by first converting them to Cartesian coordinates. 

To do this, create vectors with polar coordinates. Convert them to Cartesian coordinates using the `pol2cart` function. Then, create the plot.

<pre class="mcode">
th = -pi/2:pi/16:0;
r = 10*ones(size(th));
[u,v] = pol2cart(th,r);
feather(u,v)

fig2plotly()
</pre>

plot_1_0_create_feather_plot_using_polar_values



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Feather Plot Using Complex Values

Create a vector of complex values. Then, display them using a feather plot. The real part determines the x-component of each arrow, and the imaginary part determines the y-component.

<pre class="mcode">
Z = [2+3i -1-3i -1+i 2i 3-4i -2-2i -2+4i 0.5-i -3i 1+i];
feather(Z)

fig2plotly()
</pre>

plot_2_0_create_feather_plot_using_complex_values



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Color of Feather Plot

Create a feather plot with red arrows.

<pre class="mcode">
t = -pi/2:pi/8:pi/2;
u = 10*sin(t);
v = 10*cos(t);
feather(u,v,'r')

fig2plotly()
</pre>

plot_3_0_specify_color_of_feather_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Line Width and Color of One Arrow

Specify the line width and color of a single arrow by assigning the arrow to a variable and then setting its properties. To do this, first create a feather plot and return an array of `Line` objects.

<pre class="mcode">
t = -pi/2:pi/8:pi/2;
u = 10*sin(t);
v = 10*cos(t);
f = feather(u,v);

fig2plotly()
</pre>

Assign the first arrow to a variable. The first arrow corresponds to the first elements of `u` and `v`. Then, change the line width and color.

<pre class="mcode">
f1 = f(1);
f1.Color = 'r';
f1.LineWidth = 2;

fig2plotly()
</pre>

plot_4_1_specify_line_width_and_color_of_one_arrow



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Axes for Feather Plot

Starting in R2019b, you can display a tiling of plots using the `tiledlayout` and `nexttile` functions. Call the `tiledlayout` function to create a 1-by-2 tiled chart layout. Call the `nexttile` function to create an axes object and return the object as `ax1`. Create the left plot by passing `ax1` to the `feather` function. Add a title to the plot by passing the axes to the `title` function. Repeat the process to create the right plot.

<pre class="mcode">
tiledlayout(1,2)

% Left plot
ax1 = nexttile;
t = 0:pi/8:pi/2;
u1 = 10*sin(t);
v1 = 10*cos(t);
feather(ax1,u1,v1)
title(ax1,'Left Plot')

% Right plot
ax2 = nexttile;
u2 = zeros(5,1);
v2 = [1 -2 3 -4 5];
feather(ax2,u2,v2)
title(ax2,'Right Plot')

fig2plotly()
</pre>

plot_5_0_specify_axes_for_feather_plot



<!--------------------- EXAMPLE BREAK ------------------------->

