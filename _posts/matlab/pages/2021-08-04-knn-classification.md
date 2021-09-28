---
description: How to make kNN Classification plots in MATLAB<sup>&reg;</sup> with Plotly.
name: kNN Classification
display_as: ai_ml
order: 2
permalink: matlab/knn-classification/
thumbnail: thumbnail/knn-classification.png
layout: base
language: matlab
page_type: u-guide
---


## Classify Query Data

This example shows how to classify query data by:

1. Growing a Kd-tree
2. Conducting a k nearest neighbor search using the grown tree.
3. Assigning each query point the class with the highest representation among their respective nearest neighbors.

Classify a new point based on the last two columns of the Fisher iris data. Using only the last two columns makes it easier to plot.

<pre class="mcode">
load fisheriris
x = meas(:,3:4);
gscatter(x(:,1),x(:,2),species)
legend('Location','best')

fig2plotly()
</pre>

{% capture k_nn_plot_1 %}
  {% raw %}
{ "data": [ { "line": {}, "mode": "markers", "name": "setosa", "type": "scatter", "xsrc": "danton267:1167:cbccde", "x": [ 1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4 ], "ysrc": "danton267:1167:e63b17", "y": [ 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "versicolor", "type": "scatter", "xsrc": "danton267:1167:ce4bbc", "x": [ 4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1 ], "ysrc": "danton267:1167:9981df", "y": [ 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,255,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "virginica", "type": "scatter", "xsrc": "danton267:1167:56d8a1", "x": [ 6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1 ], "ysrc": "danton267:1167:a23a04", "y": [ 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2, 1.9, 2.1, 2, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2, 2, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2, 2.3, 1.8 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "legend": { "x": 0.683869049002727, "y": 0.291404763607752, "font": { "size": 9, "color": "rgb(0,0,0_)", "family": "Arial, sans-serif" }, "xref": "paper", "yref": "paper", "bgcolor": "rgb(255,255,255)", "xanchor": "left", "yanchor": "bottom", "traceorder": "normal", "bordercolor": "rgb(38.25,38.25,38.25)", "borderwidth": 0.5 }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0.7, 7.2 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 8, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 2.5 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 7, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": true, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=k_nn_plot_1
  index=1
%}

Plot the new point.



<pre class="mcode">
newpoint = [5 1.45];
line(newpoint(1),newpoint(2),'marker','x','color','k',...
   'markersize',10,'linewidth',2)

fig2plotly()
</pre>

{% capture k_nn_plot_2 %}
  {% raw %}
{ "data": [ { "line": {}, "mode": "markers", "name": "setosa", "type": "scatter", "xsrc": "danton267:1169:88a423", "x": [ 1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4 ], "ysrc": "danton267:1169:6bf748", "y": [ 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "versicolor", "type": "scatter", "xsrc": "danton267:1169:c05e1b", "x": [ 4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1 ], "ysrc": "danton267:1169:3264d8", "y": [ 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,255,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "virginica", "type": "scatter", "xsrc": "danton267:1169:26bb79", "x": [ 6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1 ], "ysrc": "danton267:1169:a72b42", "y": [ 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2, 1.9, 2.1, 2, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2, 2, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2, 2.3, 1.8 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 2 }, "mode": "lines+markers", "name": "data1", "type": "scatter", "xsrc": "danton267:1169:ccb7fd", "x": [ 5 ], "ysrc": "danton267:1169:5bf248", "y": [ 1.45 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 10, "color": "rgb(0,0,0)", "symbol": "x-thin-open", "maxdisplayed": 2 }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "legend": { "x": 0.683869049002727, "y": 0.332886907032558, "font": { "size": 9, "color": "rgb(0,0,0_)", "family": "Arial, sans-serif" }, "xref": "paper", "yref": "paper", "bgcolor": "rgb(255,255,255)", "xanchor": "left", "yanchor": "bottom", "traceorder": "normal", "bordercolor": "rgb(38.25,38.25,38.25)", "borderwidth": 0.5 }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0.7, 7.2 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 8, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 2.5 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 7, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": true, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=k_nn_plot_2
  index=1
%}

Prepare a Kd-tree neighbor searcher model.

<pre class="mcode">
Mdl = KDTreeSearcher(x)
</pre>

Mdl is a `KDTreeSearcher` model. By default, the distance metric it uses to search for neighbors is Euclidean distance.

Find the 10 sample points closest to the new point.

<pre class="mcode">
[n,d] = knnsearch(Mdl,newpoint,'k',10);
line(x(n,1),x(n,2),'color',[.5 .5 .5],'marker','o',...
    'linestyle','none','markersize',10)

fig2plotly()
</pre>

{% capture k_nn_plot_3 %}
  {% raw %}
{ "data": [ { "line": {}, "mode": "markers", "name": "setosa", "type": "scatter", "xsrc": "danton267:1171:4054b7", "x": [ 1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4 ], "ysrc": "danton267:1171:f6186a", "y": [ 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "versicolor", "type": "scatter", "xsrc": "danton267:1171:9d5f79", "x": [ 4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1 ], "ysrc": "danton267:1171:698324", "y": [ 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,255,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "virginica", "type": "scatter", "xsrc": "danton267:1171:16bb4e", "x": [ 6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1 ], "ysrc": "danton267:1171:8e15cf", "y": [ 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2, 1.9, 2.1, 2, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2, 2, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2, 2.3, 1.8 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 2 }, "mode": "lines+markers", "name": "data1", "type": "scatter", "xsrc": "danton267:1171:2c0d1e", "x": [ 5 ], "ysrc": "danton267:1171:b76b2b", "y": [ 1.45 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 10, "color": "rgb(0,0,0)", "symbol": "x-thin-open", "maxdisplayed": 2 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "data2", "type": "scatter", "xsrc": "danton267:1171:40cbf2", "x": [ 5, 4.9, 4.9, 5.1, 5.1, 4.8, 5, 4.7, 4.7, 4.7 ], "ysrc": "danton267:1171:e9f950", "y": [ 1.5, 1.5, 1.5, 1.5, 1.6, 1.4, 1.7, 1.4, 1.4, 1.5 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(127.5,127.5,127.5)", "width": 0.5 }, "size": 10, "color": "rgba(0,0,0,0)", "symbol": "circle", "maxdisplayed": 11 }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "legend": { "x": 0.683869049002727, "y": 0.143452383790697, "font": { "size": 9, "color": "rgb(0,0,0_)", "family": "Arial, sans-serif" }, "xref": "paper", "yref": "paper", "bgcolor": "rgb(255,255,255)", "xanchor": "left", "yanchor": "bottom", "traceorder": "normal", "bordercolor": "rgb(38.25,38.25,38.25)", "borderwidth": 0.5 }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0.7, 7.2 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 8, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 2.5 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 7, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": true, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=k_nn_plot_3
  index=1
%}

It appears that knnsearch has found only the nearest eight neighbors. In fact, this particular dataset contains duplicate values.

Make the axes equal so the calculated distances correspond to the apparent distances on the plot axis equal and zoom in to see the neighbors better.


<pre class="mcode">
xlim([4.5 5.5]);
ylim([1 2]);
axis square

fig2plotly()
</pre>

{% capture k_nn_plot_4 %}
  {% raw %}
{ "data": [ { "line": {}, "mode": "markers", "name": "setosa", "type": "scatter", "xsrc": "danton267:1173:8846c1", "x": [ 1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4 ], "ysrc": "danton267:1173:981d84", "y": [ 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "versicolor", "type": "scatter", "xsrc": "danton267:1173:5c7546", "x": [ 4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1 ], "ysrc": "danton267:1173:97cbd4", "y": [ 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,255,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "virginica", "type": "scatter", "xsrc": "danton267:1173:d84cef", "x": [ 6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1 ], "ysrc": "danton267:1173:2f7915", "y": [ 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2, 1.9, 2.1, 2, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2, 2, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2, 2.3, 1.8 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 2 }, "mode": "lines+markers", "name": "data1", "type": "scatter", "xsrc": "danton267:1173:2cdc90", "x": [ 5 ], "ysrc": "danton267:1173:0114c4", "y": [ 1.45 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 10, "color": "rgb(0,0,0)", "symbol": "x-thin-open", "maxdisplayed": 2 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "data2", "type": "scatter", "xsrc": "danton267:1173:56441d", "x": [ 5, 4.9, 4.9, 5.1, 5.1, 4.8, 5, 4.7, 4.7, 4.7 ], "ysrc": "danton267:1173:9ba990", "y": [ 1.5, 1.5, 1.5, 1.5, 1.6, 1.4, 1.7, 1.4, 1.4, 1.5 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(127.5,127.5,127.5)", "width": 0.5 }, "size": 10, "color": "rgba(0,0,0,0)", "symbol": "circle", "maxdisplayed": 11 }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "legend": { "x": 0.683869049002727, "y": 0.143452383790697, "font": { "size": 9, "color": "rgb(0,0,0_)", "family": "Arial, sans-serif" }, "xref": "paper", "yref": "paper", "bgcolor": "rgb(255,255,255)", "xanchor": "left", "yanchor": "bottom", "traceorder": "normal", "bordercolor": "rgb(38.25,38.25,38.25)", "borderwidth": 0.5 }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 4.5, 5.5 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 4, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 1, 2 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": true, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=k_nn_plot_4
  index=1
%}

Find the species of the 10 neighbors.

<pre class="mcode">
tabulate(species(n))
</pre>

<pre class="codeoutput">
       Value    Count   Percent
   virginica        2     20.00%
  versicolor        8     80.00%
</pre>

Using a rule based on the majority vote of the 10 nearest neighbors, you can classify this new point as a versicolor.

Visually identify the neighbors by drawing a circle around the group of them. Define the center and diameter of a circle, based on the location of the new point.


<pre class="mcode">
ctr = newpoint - d(end);
diameter = 2*d(end);
% Draw a circle around the 10 nearest neighbors.
h = rectangle('position',[ctr,diameter,diameter],...
   'curvature',[1 1]);
h.LineStyle = ':';

fig2plotly()
</pre>

{% capture k_nn_plot_5 %}
  {% raw %}
{ "data": [ { "line": {}, "mode": "markers", "name": "setosa", "type": "scatter", "xsrc": "danton267:1175:e9f364", "x": [ 1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4 ], "ysrc": "danton267:1175:ca5dc9", "y": [ 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "versicolor", "type": "scatter", "xsrc": "danton267:1175:742716", "x": [ 4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1 ], "ysrc": "danton267:1175:3f01c0", "y": [ 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,255,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "virginica", "type": "scatter", "xsrc": "danton267:1175:33d871", "x": [ 6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1 ], "ysrc": "danton267:1175:187625", "y": [ 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2, 1.9, 2.1, 2, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2, 2, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2, 2.3, 1.8 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 2 }, "mode": "lines+markers", "name": "data1", "type": "scatter", "xsrc": "danton267:1175:3eae37", "x": [ 5 ], "ysrc": "danton267:1175:eeb912", "y": [ 1.45 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 10, "color": "rgb(0,0,0)", "symbol": "x-thin-open", "maxdisplayed": 2 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "data2", "type": "scatter", "xsrc": "danton267:1175:c69f08", "x": [ 5, 4.9, 4.9, 5.1, 5.1, 4.8, 5, 4.7, 4.7, 4.7 ], "ysrc": "danton267:1175:3d2f1d", "y": [ 1.5, 1.5, 1.5, 1.5, 1.6, 1.4, 1.7, 1.4, 1.4, 1.5 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(127.5,127.5,127.5)", "width": 0.5 }, "size": 10, "color": "rgba(0,0,0,0)", "symbol": "circle", "maxdisplayed": 11 }, "visible": true, "showlegend": true }, { "type": "scatter", "xsrc": "danton267:1175:340e4f", "x": [ 4.69586187348509, 4.69586187348509, 5.30413812651491, 5.30413812651491, 4.69586187348509 ], "ysrc": "danton267:1175:0eb61d", "y": [ 1.14586187348509, 1.75413812651491, 1.75413812651491, 1.14586187348509, 1.14586187348509 ], "xaxis": "x1", "yaxis": "y1" } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "legend": { "x": 0.683869049002727, "y": 0.143452383790697, "font": { "size": 9, "color": "rgb(0,0,0_)", "family": "Arial, sans-serif" }, "xref": "paper", "yref": "paper", "bgcolor": "rgb(255,255,255)", "xanchor": "left", "yanchor": "bottom", "traceorder": "normal", "bordercolor": "rgb(38.25,38.25,38.25)", "borderwidth": 0.5 }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 4.5, 5.5 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 4, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 1, 2 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": true, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=k_nn_plot_5
  index=1
%}

Using the same dataset, find the 10 nearest neighbors to three new points.


<pre class="mcode">
figure 
newpoint2 = [5 1.45;6 2;2.75 .75];
gscatter(x(:,1),x(:,2),species)
legend('location','best')
[n2,d2] = knnsearch(Mdl,newpoint2,'k',10);
line(x(n2,1),x(n2,2),'color',[.5 .5 .5],'marker','o',...
   'linestyle','none','markersize',10)
line(newpoint2(:,1),newpoint2(:,2),'marker','x','color','k',...
   'markersize',10,'linewidth',2,'linestyle','none')

fig2plotly()
</pre>

{% capture k_nn_plot_6 %}
  {% raw %}
{ "data": [ { "line": {}, "mode": "markers", "name": "setosa", "type": "scatter", "xsrc": "danton267:1177:afaa18", "x": [ 1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4 ], "ysrc": "danton267:1177:54691b", "y": [ 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "versicolor", "type": "scatter", "xsrc": "danton267:1177:546eb2", "x": [ 4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1 ], "ysrc": "danton267:1177:3c3145", "y": [ 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,255,0)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "virginica", "type": "scatter", "xsrc": "danton267:1177:a1cedf", "x": [ 6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1 ], "ysrc": "danton267:1177:972808", "y": [ 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2, 1.9, 2.1, 2, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2, 2, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2, 2.3, 1.8 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 51 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "data1", "type": "scatter", "xsrc": "danton267:1177:a28616", "x": [ 5, 5.9, 3, 4.9, 6.1, 3.3, 4.9, 6, 3.3, 5.1, 5.8, 3.5, 5.1, 5.8, 3.5, 4.8, 6.1, 1.9, 5, 5.9, 3.7, 4.7, 5.7, 1.9, 4.7, 6.3, 3.6, 4.7, 6.4, 1.7 ], "ysrc": "danton267:1177:fbc029", "y": [ 1.5, 2.1, 1.1, 1.5, 1.9, 1, 1.5, 1.8, 1, 1.5, 1.8, 1, 1.6, 2.2, 1, 1.4, 2.3, 0.4, 1.7, 2.3, 1, 1.4, 2.1, 0.2, 1.4, 1.8, 1.3, 1.5, 2, 0.5 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(127.5,127.5,127.5)", "width": 0.5 }, "size": 10, "color": "rgba(0,0,0,0)", "symbol": "circle", "maxdisplayed": 31 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "data2", "type": "scatter", "xsrc": "danton267:1177:b1357b", "x": [ 5, 6, 2.75 ], "ysrc": "danton267:1177:9a612f", "y": [ 1.45, 2, 0.75 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 10, "color": "rgb(0,0,0)", "symbol": "x-thin-open", "maxdisplayed": 4 }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "legend": { "x": 0.683869049002727, "y": 0.143452383790697, "font": { "size": 9, "color": "rgb(0,0,0_)", "family": "Arial, sans-serif" }, "xref": "paper", "yref": "paper", "bgcolor": "rgb(255,255,255)", "xanchor": "left", "yanchor": "bottom", "traceorder": "normal", "bordercolor": "rgb(38.25,38.25,38.25)", "borderwidth": 0.5 }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0.7, 7.2 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 8, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 2.5 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 7, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": true, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=k_nn_plot_6
  index=1
%}

Find the species of the 10 nearest neighbors for each new point.


<pre class="mcode">
tabulate(species(n2(1,:)))
</pre>

<pre class="codeoutput">
       Value    Count   Percent
   virginica        2     20.00%
  versicolor        8     80.00%
</pre>

<pre class="mcode">
tabulate(species(n2(2,:)))
</pre>

<pre class="codeoutput">
      Value    Count   Percent
  virginica       10    100.00%
</pre>

<pre class="mcode">
tabulate(species(n2(3,:)))
</pre>

<pre class="codeoutput">
       Value    Count   Percent
  versicolor        7     70.00%
      setosa        3     30.00%
</pre>