---
description: How to make Scatter Plots on Maps plots in MATLAB<sup>&reg;</sup> with Plotly.
name: Scatter Plots on Maps
display_as: maps
order: 1
permalink: matlab/scatter-plots-on-maps/
thumbnail: thumbnail/scatter-plot-on-maps.jpg
layout: base
language: matlab
page_type: u-guide
---

## Create Geographic Scatter Plot Controlling Color, Size, and Shape of Markers

Set up latitude and longitude data. 

<pre class="mcode">
lon = (-170:10:170);
lat = 50 * cosd(3*lon);
</pre>

Define data that controls the area of each marker. 

<pre class="mcode">
A = 101 + 100*(sind(2*lon));
</pre>

Define data to control the color of each marker.

<pre class="mcode">
C = cosd(4*lon);
</pre>

Plot the data on a geographic scatter plot, specifying the marker size data and the color data. Specify the marker as a triangle, rather than the default circle.

<pre class="mcode">
geoscatter(lat,lon,A,C,'^')

fig2plotly()
</pre>

{% capture plot_0_0_create_geographic_scatter_plot_controlling_color_si_256 %}
  {% raw %}{"data":[{"geo":"geo2","mode":"markers","type":"scattergeo","lat":[-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219,-50,-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219,-50,-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219],"lon":[-170,-160,-150,-140,-130,-120,-110,-100,-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170],"marker":{"line":{"width":1,"color":["rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)"]},"color":"rgba(0,0,0,0)","symbol":"star-triangle-up","sizeref":1,"size":[135.202014332567,165.278760968654,187.602540378444,199.480775301221,199.480775301221,187.602540378444,165.278760968654,135.202014332567,101,66.7979856674331,36.7212390313461,14.3974596215561,2.5192246987792,2.5192246987792,14.3974596215561,36.7212390313461,66.7979856674331,101,135.202014332567,165.278760968654,187.602540378444,199.480775301221,199.480775301221,187.602540378444,165.278760968654,135.202014332567,101,66.7979856674331,36.7212390313461,14.3974596215561,2.5192246987792,2.5192246987792,14.3974596215561,36.7212390313461,66.7979856674331],"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":0,"lon":0},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":37.5,"range":[-80.2547667277936,80.2547667277936],"tick0":-75,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":60,"range":[-178.5,178.5],"tick0":-120,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0_0_create_geographic_scatter_plot_controlling_color_si_256
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_0_0_create_geographic_scatter_plot_controlling_color_si_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_0_0_create_geographic_scatter_plot_controlling_color_si_montage.png" 
  index=256
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Geographic Scatter Plot Specifying Basemap

Set up latitude and longitude data. 

<pre class="mcode">
lon = (-170:10:170);
lat = 50 * cosd(3*lon);
</pre>

Define the data that controls the area of each marker. 

<pre class="mcode">
A = 101 + 100*(sind(2*lon));
</pre>

Define the data that controls the color of each marker.

<pre class="mcode">
C = cosd(4*lon);
</pre>

Create the scatter plot on a set of geographic axes, specifying the marker size data and the color data. The example specifies the marker as a triangle, rather than the default circle. 

<pre class="mcode">
geoscatter(lat,lon,A,C,'^')

fig2plotly()
</pre>

{% capture plot_1_0_create_geographic_scatter_plot_specifying_basemap_257 %}
  {% raw %}{"data":[{"geo":"geo2","mode":"markers","type":"scattergeo","lat":[-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219,-50,-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219,-50,-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219],"lon":[-170,-160,-150,-140,-130,-120,-110,-100,-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170],"marker":{"line":{"width":1,"color":["rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)"]},"color":"rgba(0,0,0,0)","symbol":"star-triangle-up","sizeref":1,"size":[135.202014332567,165.278760968654,187.602540378444,199.480775301221,199.480775301221,187.602540378444,165.278760968654,135.202014332567,101,66.7979856674331,36.7212390313461,14.3974596215561,2.5192246987792,2.5192246987792,14.3974596215561,36.7212390313461,66.7979856674331,101,135.202014332567,165.278760968654,187.602540378444,199.480775301221,199.480775301221,187.602540378444,165.278760968654,135.202014332567,101,66.7979856674331,36.7212390313461,14.3974596215561,2.5192246987792,2.5192246987792,14.3974596215561,36.7212390313461,66.7979856674331],"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":0,"lon":0},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":37.5,"range":[-80.2547667277936,80.2547667277936],"tick0":-75,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":60,"range":[-178.5,178.5],"tick0":-120,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_create_geographic_scatter_plot_specifying_basemap_257
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_montage.png" 
  index=257
%}

Change the basemap of the geographic scatter plot.

<pre class="mcode">
geobasemap colorterrain
</pre>

{% capture plot_1_0_create_geographic_scatter_plot_specifying_basemap_257 %}
  {% raw %}{"data":[{"geo":"geo2","mode":"markers","type":"scattergeo","lat":[-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219,-50,-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219,-50,-43.3012701892219,-25,0,25,43.3012701892219,50,43.3012701892219,25,0,-25,-43.3012701892219],"lon":[-170,-160,-150,-140,-130,-120,-110,-100,-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170],"marker":{"line":{"width":1,"color":["rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)","rgb(249.109500,250.894500,20.527500)","rgb(253.419000,203.337000,50.337000)","rgb(55.539000,200.149500,150.424500)","rgb(61.812000,111.639000,254.770500)","rgb(61.761000,38.352000,168.376500)","rgb(61.761000,38.352000,168.376500)","rgb(61.812000,111.639000,254.770500)","rgb(55.539000,200.149500,150.424500)","rgb(253.419000,203.337000,50.337000)"]},"color":"rgba(0,0,0,0)","symbol":"star-triangle-up","sizeref":1,"size":[135.202014332567,165.278760968654,187.602540378444,199.480775301221,199.480775301221,187.602540378444,165.278760968654,135.202014332567,101,66.7979856674331,36.7212390313461,14.3974596215561,2.5192246987792,2.5192246987792,14.3974596215561,36.7212390313461,66.7979856674331,101,135.202014332567,165.278760968654,187.602540378444,199.480775301221,199.480775301221,187.602540378444,165.278760968654,135.202014332567,101,66.7979856674331,36.7212390313461,14.3974596215561,2.5192246987792,2.5192246987792,14.3974596215561,36.7212390313461,66.7979856674331],"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":0,"lon":0},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":37.5,"range":[-80.2547667277936,80.2547667277936],"tick0":-75,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":60,"range":[-178.5,178.5],"tick0":-120,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_create_geographic_scatter_plot_specifying_basemap_257
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoscatter/plot_1_0_create_geographic_scatter_plot_specifying_basemap_montage.png" 
  index=257
%}



<!--------------------- EXAMPLE BREAK ------------------------->

