---
description: How to make Lines on Maps plots in MATLAB<sup>&reg;</sup> with Plotly.
name: Lines on Maps
display_as: maps
order: 1
permalink: matlab/lines-on-maps/
thumbnail: thumbnail/flight-paths.jpg
layout: base
language: matlab
page_type: u-guide
---

## Create Geographic Plot

Plot a straight line between two points on a map. Specify the endpoints of the line using the coordinates of Seattle and Anchorage. Specify latitude and longitude in degrees.

<pre class="mcode">
latSeattle = 47.62;
lonSeattle = -122.33;
latAnchorage = 61.20;
lonAnchorage = -149.9;
</pre>

Plot the data on a map. Customize the appearance of the line using the line specification `'g-*'`. Adjust the latitude and longitude limits of the map using `geolimits`.

<pre class="mcode">
geoplot([latSeattle latAnchorage],[lonSeattle lonAnchorage],'g-*')
geolimits([45 62],[-149 -123])

fig2plotly()
</pre>

{% capture plot_0_0_create_geographic_plot_248 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(0.000000,255.000000,0.000000)","width":1},"mode":"lines+markers","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,255.000000,0.000000)","symbol":"asterisk-open","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":54.3688932381502,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":5,"range":[45,62],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":10,"range":[-154.400111436262,-117.599888563738],"tick0":-150,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0_0_create_geographic_plot_248
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_0_0_create_geographic_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_0_0_create_geographic_plot_montage.png" 
  index=248
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Add Text to Geographic Plot

Plot a straight line between two points on a map. Specify the endpoints of the line using the coordinates of Seattle and Anchorage. Specify latitude and longitude in degrees.

<pre class="mcode">
latSeattle = 47.62;
lonSeattle = -122.33;
latAnchorage = 61.20;
lonAnchorage = -149.9;
</pre>

Plot the data using `geoplot`. Customize the appearance of the line using the line specification `'g-*'`. Adjust the latitude and longitude limits of the map using `geolimits`.

<pre class="mcode">
geoplot([latSeattle latAnchorage],[lonSeattle lonAnchorage],'g-*')
geolimits([45 62],[-149 -123])

fig2plotly()
</pre>

{% capture plot_1_0_add_text_to_geographic_plot_249 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(0.000000,255.000000,0.000000)","width":1},"mode":"lines+markers","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,255.000000,0.000000)","symbol":"asterisk-open","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":54.3688932381502,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":5,"range":[45,62],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":10,"range":[-154.400111436262,-117.599888563738],"tick0":-150,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_add_text_to_geographic_plot_249
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_1_0_add_text_to_geographic_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_1_0_add_text_to_geographic_plot_montage.png" 
  index=249
%}

Identify Anchorage using the `text` function.

<pre class="mcode">
text(latAnchorage,lonAnchorage,'Anchorage');
</pre>

{% capture plot_1_0_add_text_to_geographic_plot_249 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(0.000000,255.000000,0.000000)","width":1},"mode":"lines+markers","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,255.000000,0.000000)","symbol":"asterisk-open","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":54.3688932381502,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":5,"range":[45,62],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":10,"range":[-154.400111436262,-117.599888563738],"tick0":-150,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_add_text_to_geographic_plot_249
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_1_0_add_text_to_geographic_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_1_0_add_text_to_geographic_plot_montage.png" 
  index=249
%}

Identify Seattle using the `text` function. Adjust the alignment of the text label by specifying properties of the `Text` object.

<pre class="mcode">
text(latSeattle,lonSeattle,'Seattle',...
    'HorizontalAlignment','right',...
    'VerticalAlignment','bottom');
</pre>

{% capture plot_1_0_add_text_to_geographic_plot_249 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(0.000000,255.000000,0.000000)","width":1},"mode":"lines+markers","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,255.000000,0.000000)","symbol":"asterisk-open","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":54.3688932381502,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":5,"range":[45,62],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":10,"range":[-154.400111436262,-117.599888563738],"tick0":-150,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_add_text_to_geographic_plot_249
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_1_0_add_text_to_geographic_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_1_0_add_text_to_geographic_plot_montage.png" 
  index=249
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Customize Individual Lines on Map

Specify the latitude and longitude coordinates of Seattle, Anchorage, and Point Barrow.

<pre class="mcode">
latSeattle = 47.62;
lonSeattle = -122.33;

latAnchorage = 61.20;
lonAnchorage = -149.9;

latPtBarrow = 71.38;
lonPtBarrow = -156.47;
</pre>

Plot straight lines from Seattle to each of the other two cities. Draw a solid yellow line from Seattle to Anchorage and a dotted blue line between Seattle and Point Barrow. Adjust the latitude and longitude limits of the map using `geolimits`.

<pre class="mcode">
geoplot([latSeattle latAnchorage],[lonSeattle lonAnchorage],'y-',...
    [latSeattle latPtBarrow],[lonSeattle lonPtBarrow],'b:')
geolimits([44 73],[-149 -123])

fig2plotly()
</pre>

{% capture plot_2_0_customize_individual_lines_on_map_251 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(255.000000,255.000000,0.000000)","width":1},"mode":"lines","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(255.000000,255.000000,0.000000)","sizeref":1,"sizemode":"area"}},{"geo":"geo2","line":{"dash":"dot","color":"rgb(0.000000,0.000000,255.000000)","width":1},"mode":"lines","type":"scattergeo","lat":[47.62,71.38],"lon":[-122.33,-156.47],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,0.000000,255.000000)","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":61.7259872634373,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":10,"range":[44,73],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":15,"range":[-173.839076145316,-98.1609238546844],"tick0":-165,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2_0_customize_individual_lines_on_map_251
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_2_0_customize_individual_lines_on_map_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_2_0_customize_individual_lines_on_map_montage.png" 
  index=251
%}

Label each city on the map using the `text` function.

<pre class="mcode">
text(latAnchorage,lonAnchorage,'Anchorage');
text(latPtBarrow,lonPtBarrow,'Point Barrow');
text(latSeattle,lonSeattle,'Seattle',...
    'VerticalAlignment','bottom');
</pre>

{% capture plot_2_0_customize_individual_lines_on_map_251 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(255.000000,255.000000,0.000000)","width":1},"mode":"lines","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(255.000000,255.000000,0.000000)","sizeref":1,"sizemode":"area"}},{"geo":"geo2","line":{"dash":"dot","color":"rgb(0.000000,0.000000,255.000000)","width":1},"mode":"lines","type":"scattergeo","lat":[47.62,71.38],"lon":[-122.33,-156.47],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,0.000000,255.000000)","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":61.7259872634373,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":10,"range":[44,73],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":15,"range":[-173.839076145316,-98.1609238546844],"tick0":-165,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2_0_customize_individual_lines_on_map_251
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_2_0_customize_individual_lines_on_map_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_2_0_customize_individual_lines_on_map_montage.png" 
  index=251
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Use Chart Line Properties to Customize Appearance of the Line

Plot a straight line between two points on a map. Specify the endpoints of the line using the coordinates of Seattle and Anchorage. Specify latitude and longitude in degrees.

<pre class="mcode">
latSeattle = 47.62;
lonSeattle = -122.33;
latAnchorage = 61.20;
lonAnchorage = -149.9;
</pre>

Plot the data using `geoplot`. Adjust the latitude and longitude limits of the map using `geolimits`. Customize the appearance of the line by specifying the `LineWidth` and `Color` properties.

<pre class="mcode">
geoplot([latSeattle latAnchorage],[lonSeattle lonAnchorage],...
    'LineWidth',2,'Color',[.6 0 0])
geolimits([45 62],[-149 -123])

fig2plotly()
</pre>

{% capture plot_3_0_use_chart_line_properties_to_customize_appearance_o_253 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(153.000000,0.000000,0.000000)","width":4},"mode":"lines","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":4},"size":6,"color":"rgb(153.000000,0.000000,0.000000)","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":54.3688932381502,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":5,"range":[45,62],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":10,"range":[-154.400111436262,-117.599888563738],"tick0":-150,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_3_0_use_chart_line_properties_to_customize_appearance_o_253
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_3_0_use_chart_line_properties_to_customize_appearance_o_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_3_0_use_chart_line_properties_to_customize_appearance_o_montage.png" 
  index=253
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Change Basemap Used in Geographic Plot

Plot a straight line between two points on a map. Specify the endpoints of the line using the coordinates of Seattle and Anchorage. Specify latitude and longitude in degrees.

<pre class="mcode">
latSeattle = 47.62;
lonSeattle = -122.33;
latAnchorage = 61.20;
lonAnchorage = -149.9;
</pre>

Plot the data using `geoplot`. Adjust the latitude and longitude limits of the map using `geolimits`.

<pre class="mcode">
geoplot([latSeattle latAnchorage],[lonSeattle lonAnchorage])
geolimits([45 62],[-149 -123])

fig2plotly()
</pre>

{% capture plot_4_0_change_basemap_used_in_geographic_plot_254 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(0.000000,113.985000,188.955000)","width":1},"mode":"lines","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,113.985000,188.955000)","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":54.3688932381502,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":5,"range":[45,62],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":10,"range":[-154.400111436262,-117.599888563738],"tick0":-150,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_4_0_change_basemap_used_in_geographic_plot_254
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_4_0_change_basemap_used_in_geographic_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_4_0_change_basemap_used_in_geographic_plot_montage.png" 
  index=254
%}

Change the basemap used in the plot using the `geobasemap` function.

<pre class="mcode">
geobasemap colorterrain
</pre>

{% capture plot_4_0_change_basemap_used_in_geographic_plot_254 %}
  {% raw %}{"data":[{"geo":"geo2","line":{"dash":"solid","color":"rgb(0.000000,113.985000,188.955000)","width":1},"mode":"lines","type":"scattergeo","lat":[47.62,61.2],"lon":[-122.33,-149.9],"marker":{"line":{"width":1},"size":6,"color":"rgb(0.000000,113.985000,188.955000)","sizeref":1,"sizemode":"area"}}],"layout":{"geo2":{"center":{"lat":54.3688932381502,"lon":-136},"domain":{"x":[0.13,0.905],"y":[0.11,0.925]},"lataxis":{"dtick":5,"range":[45,62],"tick0":50,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"lonaxis":{"dtick":10,"range":[-154.400111436262,-117.599888563738],"tick0":-150,"showgrid":true,"gridcolor":"rgba(38.250000,38.250000,38.250000,0.150000)","gridwidth":0.5},"showland":true,"landcolor":"rgba(20,220,220,0.2)","showocean":true,"framecolor":"rgb(120,120,120)","oceancolor":"rgba(20,220,220,1)","projection":{"type":"mercator"},"resolution":"50","showcoastlines":false},"width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","showlegend":false,"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_4_0_change_basemap_used_in_geographic_plot_254
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_4_0_change_basemap_used_in_geographic_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/geographic-plots/geoplot/plot_4_0_change_basemap_used_in_geographic_plot_montage.png" 
  index=254
%}



<!--------------------- EXAMPLE BREAK ------------------------->

