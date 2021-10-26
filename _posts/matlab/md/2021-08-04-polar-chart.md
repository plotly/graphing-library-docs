---
description: How to make Polar Charts plots in MATLAB<sup>&reg;</sup> with Plotly.
name: Polar Charts
display_as: scientific
order: 16
permalink: matlab/polar-chart/
thumbnail: thumbnail/polar.gif
layout: base
language: matlab
page_type: u-guide
---

## Create Polar Plot

Plot a line in polar coordinates.

<pre class="mcode">
theta = 0:0.01:2*pi;
rho = sin(2*theta).*cos(2*theta);
polarplot(theta,rho)

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_0_0_create_polar_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Convert from Degrees to Radians Before Plotting

Create the data to plot.

<pre class="mcode">
theta = linspace(0,360,50);
rho = 0.005*theta/10;
</pre>

Convert the values in `theta` from degrees to radians. Then, plot the data in polar coordinates.

<pre class="mcode">
theta_radians = deg2rad(theta);
polarplot(theta_radians,rho)

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_1_0_convert_from_degrees_to_radians_before_plotting



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Multiple Lines in Polar Coordinates

Plot two lines in polar coordinates. Use a dashed line for the second line.

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

plot_2_0_plot_multiple_lines_in_polar_coordinates



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Radius Values at Equally Spaced Angles

Specify only the radius values, without specifying the angle values. `polarplot` plots the radius values at equally spaced angles that span from 0 to 2π. Display a circle marker at each data point.

<pre class="mcode">
rho = 10:5:70;
polarplot(rho,'-o')

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_3_0_plot_radius_values_at_equally_spaced_angles



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Negative Radius Values

Create a polar plot using negative radius values. By default, `polarplot` reflects negative values through the origin.

<pre class="mcode">
theta = linspace(0,2*pi);
rho = sin(theta);
polarplot(theta,rho)

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_4_0_plot_negative_radius_values

Change the limits of the r-axis so it ranges from -1 to 1.

<pre class="mcode">
rlim([-1 1])
</pre>

plot_4_0_plot_negative_radius_values



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Line Color for Polar Plot

Create a polar plot using a red line with circle markers.

<pre class="mcode">
theta = linspace(0,2*pi,25);
rho = 2*theta;
polarplot(theta,rho,'r-o')

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_5_0_specify_line_color_for_polar_plot



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Line Color After Creation

Create a polar plot and return the chart line object. 

<pre class="mcode">
theta = linspace(0,2*pi,25);
rho = 2*theta;
p = polarplot(theta,rho);

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_6_0_specify_line_color_after_creation

Change the line color and width and add markers.

<pre class="mcode">
p.Color = 'magenta';
p.Marker = 'square';
p.MarkerSize = 8;

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_6_1_specify_line_color_after_creation



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Polar Plot with Complex Values

Plot complex values in polar coordinates. Display markers at each point without a line connecting them.

<pre class="mcode">
Z = [2+3i 2 -1+4i 3-4i 5+2i -4-2i -2+3i -2 -3i 3i-2i];
polarplot(Z,'*')

fig2plotly('TreatAs', 'polarplot')
</pre>

plot_7_0_create_polar_plot_with_complex_values



<!--------------------- EXAMPLE BREAK ------------------------->

## Ezopolar Plot of Mathematical Function

Plot the function 1+cos(t) over the domain [0,2π].

<pre class="mcode">
figure
ezpolar('1+cos(t)')

fig2plotly('TreatAs', 'ezpolar')
</pre>

plot_0_0_polar_plot_of_mathematical_function



<!--------------------- EXAMPLE BREAK ------------------------->


## Create Scatter Chart

Create a scatter chart in polar coordinates.

<pre class="mcode">
th = pi/4:pi/4:2*pi;
r = [19 6 12 18 16 11 15 15];
polarscatter(th,r)

fig2plotly()
</pre>

plot_0_0_create_scatter_chart



<!--------------------- EXAMPLE BREAK ------------------------->

## Use Filled Markers and Set Marker Size

Create a scatter chart that uses filled markers by specifying the optional input argument, `'filled'`. Set the marker size to 75 points squared.

<pre class="mcode">
th = linspace(0,2*pi,20);
r = rand(1,20);
sz = 75;
polarscatter(th,r,sz,'filled')

fig2plotly()
</pre>

plot_1_0_use_filled_markers_and_set_marker_size



<!--------------------- EXAMPLE BREAK ------------------------->

## Use Markers with Varying Sizes and Colors

Create a scatter chart with markers of varying sizes and colors. Specify the optional size and color input arguments as vectors. Use unique values in the color vector to specify the different colors you want. The values map to colors in the colormap.

<pre class="mcode">
th = pi/4:pi/4:2*pi;
r = [19 6 12 18 16 11 15 15];
sz = 100*[6 15 20 3 15 3 6 40];
c = [1 2 2 2 1 1 2 1];
polarscatter(th,r,sz,c,'filled','MarkerFaceAlpha',.5)

fig2plotly()
</pre>

plot_2_0_use_markers_with_varying_sizes_and_colors



<!--------------------- EXAMPLE BREAK ------------------------->

## Convert from Degrees to Radians Before Plotting

Create data where the angle values are in degrees. Since `polarscatter` requires angle values in radians, convert the values to radians before plotting using `deg2rad`.

<pre class="mcode">
th = linspace(0,360,50);
r = 0.005*th/10;
th_radians = deg2rad(th);
polarscatter(th_radians,r)

fig2plotly()
</pre>

plot_3_0_convert_from_degrees_to_radians_before_plotting



<!--------------------- EXAMPLE BREAK ------------------------->

## Combine Two Scatter Charts

Combine two scatter charts in the same polar axes using the `hold` command. Add a legend with a description of each chart.

<pre class="mcode">
th = pi/6:pi/6:2*pi;
r1 = rand(12,1);
polarscatter(th,r1,'filled')

hold on 
r2 = rand(12,1);
polarscatter(th,r2,'filled')
hold off

legend('Series A','Series B')

fig2plotly()
</pre>

plot_4_0_combine_two_scatter_charts



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Scatter Chart After Creation

Create a scatter chart and assign the scatter object to the variable `ps`. 

<pre class="mcode">
th = pi/6:pi/6:2*pi;
r = rand(12,1);
ps = polarscatter(th,r,'filled')

fig2plotly()
</pre>

plot_5_0_modify_scatter_chart_after_creation


<pre class="codeoutput">ps = 
  Scatter with properties:

             Marker: 'o'
    MarkerEdgeColor: 'none'
    MarkerFaceColor: 'flat'
           SizeData: 36
          LineWidth: 0.5000
          ThetaData: [1x12 double]
              RData: [1x12 double]
              ZData: [1x0 double]
              CData: [0 0.4470 0.7410]

  Show all properties

</pre>


Use `ps` to modify properties of the scatter object after it is created.

<pre class="mcode">
ps.Marker = 'square';
ps.SizeData = 200;
ps.MarkerFaceColor = 'red';
ps.MarkerFaceAlpha = .5;

fig2plotly()
</pre>

plot_5_1_modify_scatter_chart_after_creation



<!--------------------- EXAMPLE BREAK ------------------------->


## Plot Random Bubbles

Define a set of bubble coordinates as the vectors `th` and `r`. Define `sz` as a vector of bubble sizes. Then create a bubble chart of these values.

<pre class="mcode">
th = linspace(0,2*pi,10);
r = rand(1,10);
sz = rand(1,10);
polarbubblechart(th,r,sz);

fig2plotly()
</pre>

plot_0_0_plot_random_bubbles



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Bubble Colors

Define a set of bubble coordinates as the vectors `th` and `r`. Define `sz` as a vector of bubble sizes. Then create a bubble chart and specify the color as red. By default, the bubbles are partially transparent.

<pre class="mcode">
th = 1:10;
r = rand(1,10);
sz = rand(1,10);
polarbubblechart(th,r,sz,'red');

fig2plotly()
</pre>

plot_1_0_specify_bubble_colors

For a custom color, you can specify an RGB triplet or a hexadecimal color code. For example, the hexadecimal color code `'#7031BB'`, specifies a shade of purple.

<pre class="mcode">
polarbubblechart(th,r,sz,'#7031BB');

fig2plotly()
</pre>

plot_1_1_specify_bubble_colors

You can also specify a different color for each bubble. For example, specify a vector to select colors from the figure's colormap.

<pre class="mcode">
c = 1:10;
polarbubblechart(th,r,sz,c)

fig2plotly()
</pre>

plot_1_2_specify_bubble_colors



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Bubble Transparency and Outline Color

Define a set of bubble coordinates as the vectors `th` and `r`. Define `sz` as a vector of bubble sizes. Then create a bubble chart. By default, the bubbles are 60% opaque, and the edges are completely opaque with the same color.

<pre class="mcode">
th = linspace(0,2*pi,10);
r = rand(1,10);
sz = rand(1,10);
polarbubblechart(th,r,sz);

fig2plotly()
</pre>

plot_2_0_specify_bubble_transparency_and_outline_color

You can customize the opacity and the outline color by setting the `MarkerFaceAlpha` and `MarkerEdgeColor` properties, respectively. One way to set a property is by specifying a name-value pair argument when you create the chart. For example, you can specify 20% opacity by setting the `MarkerFaceAlpha` value to `0.20`.

<pre class="mcode">
bc = polarbubblechart(th,r,sz,'MarkerFaceAlpha',0.20);

fig2plotly()
</pre>

plot_2_1_specify_bubble_transparency_and_outline_color

If you create the chart by calling the `polarbubblechart` function with a return argument, you can use the return argument to set properties on the chart after creating it. For example, you can change the outline color to purple.

<pre class="mcode">
bc.MarkerEdgeColor = [0.5 0 0.5];

fig2plotly()
</pre>

plot_2_2_specify_bubble_transparency_and_outline_color



<!--------------------- EXAMPLE BREAK ------------------------->

## Add a Bubble Legend

Define a data set that shows the incoming air traffic at a certain airport over a certain period of time.

- Define `theta` as a vector of angles of approach for the incoming planes. 
- Define `altitude` as a vector of altitudes. 
- Define `planesize` as a vector of plane sizes, measured in the number of passengers.
Then display the data in a bubble chart with a bubble legend that shows the relationship between the bubble sizes and the number of passengers on the planes.

<pre class="mcode">
theta = repmat([0 pi/2 7*pi/6],1,4) + 0.25*randn(1,12);
altitude = randi([13000 43000],1,12);
planesize = randi([75 500],[1 12]);
polarbubblechart(theta,altitude,planesize)
bubblelegend('Number of Passengers','Location','eastoutside')

fig2plotly()
</pre>

plot_3_0_add_a_bubble_legend



<!--------------------- EXAMPLE BREAK ------------------------->

## Display Bubbles in Different Axes on the Same Scale

Define two data sets showing the incoming air traffic at two different airports over a certian period of time.

- Define `theta1` and `theta2` as vectors containing the angles of approach for the incoming planes. 
- Define `planesize1` and `planesize2` as a vectors of plane sizes, measured in the number of passengers. 
- Define `altitude1` and `altitude2` as vectors containing the altitudes for the planes. 
<pre class="mcode">
theta1 = repmat([0 pi/2 7*pi/6],1,4) + 0.25*randn(1,12);
theta2 = repmat([pi pi/6 3*pi/2],1,4) + 0.25*randn(1,12);
planesize1 = randi([75 500],[1 12]);
planesize2 = randi([1 50],[1 12]);
altitude1 = randi([13000 43000],1,12);
altitude2 = randi([13000 85000],1,12);
</pre>

Create a tiled chart layout so you can visualize the data side-by-side. Then, create a polar axes object in the first tile, plot the data for the first airport, and add a title. Then repeat the process in the second tile for the second airport.

<pre class="mcode">
t = tiledlayout(1,2);
pax1 = polaraxes(t);
polarbubblechart(pax1,theta1,altitude1,planesize1)
title('Airport A')

pax2 = polaraxes(t);
pax2.Layout.Tile = 2;
polarbubblechart(pax2,theta2,altitude2,planesize2);
title('Airport B')

fig2plotly()
</pre>

plot_4_0_display_bubbles_in_different_axes_on_the_same_scale

Reduce all the bubble sizes to make it easier to see all the bubbles. In this case, change the range of diameters to be between `5` and `20` points.

<pre class="mcode">
bubblesize(pax1,[5 20])
bubblesize(pax2,[5 20])

fig2plotly()
</pre>

plot_4_1_display_bubbles_in_different_axes_on_the_same_scale

The planes at Airport A are generally much smaller than at Airport B, but the bubble sizes do not reflect this information in the preceding charts. This is because the smallest and largest bubbles map to the smallest and largest data points in each of the axes. To display the bubbles on the same scale, define a vector called `allsizes` that includes the plane sizes at both airports. Then use the `bubblelim` function to reset the scaling for both charts. 

<pre class="mcode">
allsizes = [planesize1 planesize2];
newlims = [min(allsizes) max(allsizes)];
bubblelim(pax1,newlims)
bubblelim(pax2,newlims)

fig2plotly()
</pre>

plot_4_2_display_bubbles_in_different_axes_on_the_same_scale



<!--------------------- EXAMPLE BREAK ------------------------->