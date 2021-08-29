---
layout: post
title:  MATLAB geoscatter
description: Learn how to make 2 geoscatter charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/geographic-plots/geoscatter/
layout: matlab
function: geoscatter
reference: https://mathworks.com/help/matlab/ref/geoscatter.html
github: geographic-plots/2021-08-29-geoscatter.md
---

## Create Geographic Scatter Plot Controlling Color, Size, and Shape of Markers

> Set up latitude and longitude data. 

<pre>
  lon = (-170:10:170);
lat = 50 * cosd(3*lon);
</pre>

> Define data that controls the area of each marker. 

<pre>
  A = 101 + 100*(sind(2*lon));
</pre>

> Define data to control the color of each marker.

<pre>
  C = cosd(4*lon);
</pre>

> Plot the data on a geographic scatter plot, specifying the marker size data and the color data. Specify the marker as a triangle, rather than the default circle.

<pre class="mcode">
  geoscatter(lat,lon,A,C,'^')
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_0_0_create_geographic_scatter_plot_controlling_color_si_invalid_0.0000_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_0_0_create_geographic_scatter_plot_controlling_color_si_invalid_0.0000_ssim_map.png" 
  index=309
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Geographic Scatter Plot Specifying Basemap

> Set up latitude and longitude data. 

<pre>
  lon = (-170:10:170);
lat = 50 * cosd(3*lon);
</pre>

> Define the data that controls the area of each marker. 

<pre>
  A = 101 + 100*(sind(2*lon));
</pre>

> Define the data that controls the color of each marker.

<pre>
  C = cosd(4*lon);
</pre>

> Create the scatter plot on a set of geographic axes, specifying the marker size data and the color data. The example specifies the marker as a triangle, rather than the default circle. 

<pre class="mcode">
  geoscatter(lat,lon,A,C,'^')
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_invalid_0.0000_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_invalid_0.0000_ssim_map.png" 
  index=310
%}

> Change the basemap of the geographic scatter plot.

<pre>
  geobasemap colorterrain
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_invalid_0.0000_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_invalid_0.0000_ssim_map.png" 
  index=310
%}



<!--------------------- EXAMPLE BREAK ------------------------->

