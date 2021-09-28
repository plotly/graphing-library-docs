---
description: How to set the title, legend-entries, and axis-titles in MATLAB<sup>&reg;</sup>.
name: Setting the Font, Title, Legend Entries, and Axis Titles
display_as: file_settings
order: 12
permalink: matlab/figure-labels/
thumbnail: thumbnail/figure-labels.png
layout: base
language: matlab
page_type: u-guide
---


## Setting Title Font Size and Font Family


<pre class="mcode">
x = randi([0 100],1,100);
y = randi([0 100],1,100);
fig = figure;
plot(x,y,'bo');
title('Custom Title','FontSize',24,'Color','g','FontName','FixedWidth');

fig2plotly(fig,'strip',false);
</pre>

{% capture figure_labels_plot_1 %}
  {% raw %}
{ "data": [ { "mode": "markers", "type": "scatter", "x": [ 63, 35, 100, 22, 65, 61, 39, 14, 2, 42, 18, 73, 37, 84, 74, 57, 17, 96, 26, 93, 22, 37, 8, 64, 18, 4, 73, 35, 66, 38, 63, 2, 91, 80, 75, 82, 38, 62, 58, 53, 27, 25, 45, 22, 81, 99, 3, 54, 8, 81, 99, 6, 94, 1, 69, 79, 53, 89, 90, 63, 13, 21, 18, 4, 10, 62, 94, 35, 41, 99, 95, 68, 99, 77, 34, 66, 24, 29, 68, 53, 41, 60, 75, 58, 55, 58, 51, 8, 72, 100, 35, 98, 34, 89, 45, 41, 21, 12, 31, 73 ], "y": [ 79, 70, 0, 85, 93, 77, 4, 38, 71, 73, 22, 27, 67, 48, 62, 23, 17, 83, 77, 94, 10, 18, 10, 49, 19, 90, 10, 4, 56, 78, 31, 18, 34, 21, 51, 91, 63, 10, 39, 5, 50, 43, 100, 81, 49, 90, 13, 39, 93, 92, 72, 62, 34, 94, 12, 73, 65, 84, 40, 75, 84, 32, 55, 98, 55, 33, 62, 36, 76, 41, 49, 70, 98, 33, 84, 74, 96, 3, 36, 66, 28, 23, 71, 63, 59, 66, 4, 35, 45, 24, 72, 86, 28, 73, 13, 84, 13, 59, 36, 81 ], "xaxis": "x1", "yaxis": "y1", "marker": { "symbol": "circle" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b>Title with font size: 24</b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "xaxis1": { "side": "bottom", "type": "linear", "anchor": "y1", "domain": [ 0.13, 0.905 ] }, "yaxis1": { "side": "left", "type": "linear", "anchor": "x1", "domain": [ 0.11, 0.925 ] }, "showlegend": false, "annotations": [] }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=figure_labels_plot_1
  index=1
%}


<!--------------------- EXAMPLE BREAK ------------------------->

## Changing Axis Label Size, Font and Position


<pre class="mcode">
x = randi([0 100],1,100);
y = randi([0 100],1,100);
fig = figure;
plot(x,y,'bo');
title('Custom Axis Labels');
xlabel('X Label','FontSize',20,'Color','b','Position',[50 -10]);
ylabel('Y Label','FontSize',20,'Color','r','Position',[-10 50] );

fig2plotly(fig, 'strip', false);
</pre>

{% capture figure_labels_plot_2 %}
  {% raw %}
{ "data": [ { "uid": "ee73c5", "mode": "markers", "name": "", "type": "scatter", "x": [ 89, 52, 68, 98, 12, 75, 83, 78, 19, 43, 1, 32, 13, 45, 57, 79, 42, 53, 93, 90, 55, 91, 5, 81, 33, 23, 83, 35, 16, 2, 96, 68, 86, 94, 68, 92, 25, 89, 92, 30, 7, 77, 8, 73, 45, 65, 17, 53, 64, 1, 47, 89, 11, 44, 66, 29, 95, 70, 20, 56, 88, 56, 75, 90, 85, 13, 19, 15, 2, 0, 60, 61, 92, 74, 30, 50, 26, 74, 11, 75, 81, 75, 34, 59, 47, 8, 83, 69, 26, 97, 18, 30, 41, 23, 19, 71, 18, 52, 29, 46 ], "y": [ 93, 21, 0, 91, 68, 52, 52, 10, 100, 36, 63, 39, 0, 55, 51, 24, 4, 85, 4, 31, 79, 98, 59, 78, 73, 65, 67, 94, 54, 40, 67, 44, 13, 44, 55, 39, 40, 75, 52, 49, 8, 25, 45, 64, 71, 100, 94, 9, 96, 16, 98, 60, 24, 7, 30, 82, 7, 35, 13, 15, 6, 70, 8, 62, 17, 65, 50, 28, 83, 82, 94, 0, 64, 0, 10, 10, 37, 24, 34, 25, 39, 42, 64, 79, 27, 85, 74, 83, 18, 6, 61, 70, 11, 9, 60, 82, 82, 9, 73, 91 ], "xaxis": "x", "yaxis": "y", "marker": { "line": { "color": "rgb(0,0,255)", "width": 0.5 }, "size": 6, "color": "rgba(0, 0, 0, 0)", "symbol": "circle" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b>Custom Axis Labels</b>", "width": 840, "xaxis": { "side": "bottom", "type": "linear", "range": [ 0, 100 ], "ticks": "inside", "title": "X Label", "anchor": "y", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "tickmode": "auto", "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 20, "color": "rgb(0,0,255)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis": { "side": "left", "type": "linear", "range": [ 0, 100 ], "ticks": "inside", "title": "Y Label", "anchor": "x", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "tickmode": "auto", "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 20, "color": "rgb(255,0,0)", "family": "Arial, sans-serif" }, "exponentformat": "none", "showticklabels": true }, "height": 550, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0, 0, 0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "plot_bgcolor": "rgba(0, 0, 0, 0)", "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=figure_labels_plot_2
  index=1
%}


<!--------------------- EXAMPLE BREAK ------------------------->
