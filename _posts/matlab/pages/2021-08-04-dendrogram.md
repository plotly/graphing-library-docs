---
description: How to make Dendrograms in MATLAB<sup>&reg;</sup> with Plotly.
name: Dendrograms
display_as: scientific
order: 6
permalink: matlab/dendrogram/
thumbnail: thumbnail/dendrogram.jpg
layout: base
language: matlab
page_type: u-guide
---

## Plot Dendrogram

Generate sample data. 

<pre class="mcode">
rng('default') % For reproducibility
X = rand(10,3);
</pre>

Create a hierarchical binary cluster tree using `linkage`. Then, plot the dendrogram using the default options.

<pre class="mcode">
tree = linkage(X,'average');

dendrogram(tree)

fig2plotly()
</pre>


{% capture dentogram_plot_1 %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:410d07", "x": [ 1, 1, 2, 2 ], "ysrc": "danton267:1229:6610ff", "y": [ 0, 0.148219782508762, 0.148219782508762, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:675c0a", "x": [ 3, 3, 4, 4 ], "ysrc": "danton267:1229:7e765e", "y": [ 0, 0.320504638731619, 0.320504638731619, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:5f534c", "x": [ 9, 9, 10, 10 ], "ysrc": "danton267:1229:9d3ada", "y": [ 0, 0.333600207554769, 0.333600207554769, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:23fade", "x": [ 3.5, 3.5, 5, 5 ], "ysrc": "danton267:1229:159191", "y": [ 0.320504638731619, 0.414620818966117, 0.414620818966117, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:5e1a3f", "x": [ 6, 6, 7, 7 ], "ysrc": "danton267:1229:bcf702", "y": [ 0, 0.441117934065952, 0.441117934065952, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:f2a2b6", "x": [ 1.5, 1.5, 4.25, 4.25 ], "ysrc": "danton267:1229:d697a9", "y": [ 0.148219782508762, 0.581610644037362, 0.581610644037362, 0.414620818966117 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:c669b9", "x": [ 8, 8, 9.5, 9.5 ], "ysrc": "danton267:1229:3ed192", "y": [ 0, 0.693675762035594, 0.693675762035594, 0.333600207554769 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:da9330", "x": [ 6.5, 6.5, 2.875, 2.875 ], "ysrc": "danton267:1229:75db72", "y": [ 0.441117934065952, 0.775391648245102, 0.775391648245102, 0.581610644037362 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1229:e0441e", "x": [ 4.6875, 4.6875, 8.75, 8.75 ], "ysrc": "danton267:1229:08421d", "y": [ 0.775391648245102, 0.896884105908445, 0.896884105908445, 0.693675762035594 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0, 11 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "ticklen": 6.51, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "ticktext": [ " 2", "10", " 5", " 8", " 9", " 1", " 4", " 3", " 6", " 7" ], "tickvals": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none", "showticklabels": true }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0.110786566338778, 0.934317322078429 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 9, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": false, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=dentogram_plot_1
  index=1
%}




<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Dendrogram Leaf Node Order

Generate sample data. 

<pre class="mcode">
rng('default') % For reproducibility
X = rand(10,3);
</pre>

Create a hierarchical binary cluster tree using `linkage`. 

<pre class="mcode">
tree = linkage(X,'average');

D = pdist(X);
leafOrder = optimalleaforder(tree,D)
</pre>


<pre class="codeoutput">leafOrder = <span class="emphasis"><em>1×10</em></span>

     3     7     6     1     4     9     5     8    10     2

</pre>


Plot the dendrogram using an optimal leaf order. 

<pre class="mcode">
dendrogram(tree,'Reorder',leafOrder)

fig2plotly()
</pre>

{% capture dentogram_plot_2 %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:ca5a4e", "x": [ 10, 10, 9, 9 ], "ysrc": "danton267:1233:ddedaa", "y": [ 0, 0.148219782508762, 0.148219782508762, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:894a48", "x": [ 7, 7, 8, 8 ], "ysrc": "danton267:1233:a6aa27", "y": [ 0, 0.320504638731619, 0.320504638731619, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:b3a1de", "x": [ 3, 3, 2, 2 ], "ysrc": "danton267:1233:7d4576", "y": [ 0, 0.333600207554769, 0.333600207554769, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:5de868", "x": [ 7.5, 7.5, 6, 6 ], "ysrc": "danton267:1233:e7cb7a", "y": [ 0.320504638731619, 0.414620818966117, 0.414620818966117, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:fbe42d", "x": [ 4, 4, 5, 5 ], "ysrc": "danton267:1233:8bb668", "y": [ 0, 0.441117934065952, 0.441117934065952, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:619d3c", "x": [ 9.5, 9.5, 6.75, 6.75 ], "ysrc": "danton267:1233:d29561", "y": [ 0.148219782508762, 0.581610644037362, 0.581610644037362, 0.414620818966117 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:f9836c", "x": [ 1, 1, 2.5, 2.5 ], "ysrc": "danton267:1233:a6d24a", "y": [ 0, 0.693675762035594, 0.693675762035594, 0.333600207554769 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:9b1b27", "x": [ 4.5, 4.5, 8.125, 8.125 ], "ysrc": "danton267:1233:30ae7e", "y": [ 0.441117934065952, 0.775391648245102, 0.775391648245102, 0.581610644037362 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1233:216ebb", "x": [ 6.3125, 6.3125, 1.75, 1.75 ], "ysrc": "danton267:1233:5afba5", "y": [ 0.775391648245102, 0.896884105908445, 0.896884105908445, 0.693675762035594 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0, 11 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "ticklen": 6.51, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "ticktext": [ " 3", " 7", " 6", " 1", " 4", " 9", " 5", " 8", "10", " 2" ], "tickvals": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none", "showticklabels": true }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0.110786566338778, 0.934317322078429 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 9, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": false, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=dentogram_plot_2
  index=1
%}

The order of the leaf nodes in the dendrogram plot corresponds - from left to right - to the permutation in `leafOrder`.



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Number of Nodes in Dendrogram Plot

Generate sample data. 

<pre class="mcode">
rng('default') % For reproducibility
X = rand(100,2);
</pre>

There are 100 data points in the original data set, `X`. 

Create a hierarchical binary cluster tree using `linkage`. Then, plot the dendrogram for the complete tree (100 leaf nodes) by setting the input argument `P` equal to `0`.

<pre class="mcode">
tree = linkage(X,'average');
dendrogram(tree,0)
</pre>

Now, plot the dendrogram with only 25 leaf nodes. Return the mapping of the original data points to the leaf nodes shown in the plot. 

<pre class="mcode">
[~,T] = dendrogram(tree,25);

fig2plotly()
</pre>

{% capture dentogram_plot_3 %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:0d2660", "x": [ 1, 1, 2, 2 ], "ysrc": "danton267:1235:3eb639", "y": [ 0, 0.156047575540967, 0.156047575540967, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:259e37", "x": [ 6, 6, 7, 7 ], "ysrc": "danton267:1235:1f945c", "y": [ 0, 0.159742331959693, 0.159742331959693, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:bfbc93", "x": [ 11, 11, 12, 12 ], "ysrc": "danton267:1235:3c4651", "y": [ 0, 0.16126057338063, 0.16126057338063, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:19e29e", "x": [ 9, 9, 10, 10 ], "ysrc": "danton267:1235:7d81bd", "y": [ 0, 0.177676184396886, 0.177676184396886, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:38c18d", "x": [ 17, 17, 18, 18 ], "ysrc": "danton267:1235:e9175f", "y": [ 0, 0.180489621696022, 0.180489621696022, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:0b1432", "x": [ 11.5, 11.5, 13, 13 ], "ysrc": "danton267:1235:b85cee", "y": [ 0.16126057338063, 0.180718048873833, 0.180718048873833, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:00bdc0", "x": [ 20, 20, 21, 21 ], "ysrc": "danton267:1235:a49368", "y": [ 0, 0.181214380170203, 0.181214380170203, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:2e1e64", "x": [ 3, 3, 1.5, 1.5 ], "ysrc": "danton267:1235:ab4150", "y": [ 0, 0.188206415723495, 0.188206415723495, 0.156047575540967 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:9b6c49", "x": [ 14, 14, 15, 15 ], "ysrc": "danton267:1235:560cb3", "y": [ 0, 0.196450253901432, 0.196450253901432, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:ac6bf2", "x": [ 14.5, 14.5, 16, 16 ], "ysrc": "danton267:1235:51f3e0", "y": [ 0.196450253901432, 0.203822457192627, 0.203822457192627, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:b0ff42", "x": [ 4, 4, 5, 5 ], "ysrc": "danton267:1235:94a2fe", "y": [ 0, 0.211266900232516, 0.211266900232516, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:c84b54", "x": [ 19, 19, 20.5, 20.5 ], "ysrc": "danton267:1235:5a34c2", "y": [ 0, 0.216908978702656, 0.216908978702656, 0.181214380170203 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:2e1ec3", "x": [ 24, 24, 25, 25 ], "ysrc": "danton267:1235:4b0772", "y": [ 0, 0.226017266590832, 0.226017266590832, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:112edf", "x": [ 6.5, 6.5, 8, 8 ], "ysrc": "danton267:1235:8130dc", "y": [ 0.159742331959693, 0.236378854332394, 0.236378854332394, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:f17c0f", "x": [ 22, 22, 23, 23 ], "ysrc": "danton267:1235:0c6f99", "y": [ 0, 0.259198251018663, 0.259198251018663, 0 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:00223b", "x": [ 22.5, 22.5, 24.5, 24.5 ], "ysrc": "danton267:1235:e1f329", "y": [ 0.259198251018663, 0.287978251301877, 0.287978251301877, 0.226017266590832 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:087c87", "x": [ 15.25, 15.25, 17.5, 17.5 ], "ysrc": "danton267:1235:85ad06", "y": [ 0.203822457192627, 0.291951436372931, 0.291951436372931, 0.180489621696022 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:cdfeb9", "x": [ 4.5, 4.5, 2.25, 2.25 ], "ysrc": "danton267:1235:36eec0", "y": [ 0.211266900232516, 0.297441950464145, 0.297441950464145, 0.188206415723495 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:2685c0", "x": [ 9.5, 9.5, 12.25, 12.25 ], "ysrc": "danton267:1235:e96489", "y": [ 0.177676184396886, 0.33173038538974, 0.33173038538974, 0.180718048873833 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:cf0e2d", "x": [ 16.375, 16.375, 19.75, 19.75 ], "ysrc": "danton267:1235:27f6bd", "y": [ 0.291951436372931, 0.363570150410601, 0.363570150410601, 0.216908978702656 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:62324a", "x": [ 7.25, 7.25, 3.375, 3.375 ], "ysrc": "danton267:1235:95cd86", "y": [ 0.236378854332394, 0.387002885061721, 0.387002885061721, 0.297441950464145 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:dad310", "x": [ 5.3125, 5.3125, 10.875, 10.875 ], "ysrc": "danton267:1235:ab417c", "y": [ 0.387002885061721, 0.545663045341483, 0.545663045341483, 0.33173038538974 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:bc140e", "x": [ 18.0625, 18.0625, 23.5, 23.5 ], "ysrc": "danton267:1235:b397d8", "y": [ 0.363570150410601, 0.578988523721115, 0.578988523721115, 0.287978251301877 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1235:78f3d6", "x": [ 20.78125, 20.78125, 8.09375, 8.09375 ], "ysrc": "danton267:1235:e1f9b6", "y": [ 0.578988523721115, 0.655362042449185, 0.655362042449185, 0.545663045341483 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0, 26 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "ticklen": 6.51, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "ticktext": [ " 9", "23", "17", " 6", "11", " 3", "15", " 7", "14", "19", "16", "24", "22", " 1", "13", "12", " 5", "21", " 4", "10", "20", " 2", "18", " 8", "25" ], "tickvals": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ], "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none", "showticklabels": true }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0.131081852195556, 0.680327765794596 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": false, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=dentogram_plot_3
  index=1
%}

List the original data points that are in leaf node 7 of the dendrogram plot.

<pre class="mcode">
find(T==7)
</pre>


<pre class="codeoutput">ans = <span class="emphasis"><em>7×1</em></span>

     7
    33
    60
    70
    74
    76
    86

</pre>




<!--------------------- EXAMPLE BREAK ------------------------->

## Change Dendrogram Orientation and Line Width

Generate sample data. 

<pre class="mcode">
rng('default') % For reproducibility
X = rand(10,3);
</pre>

Create a hierarchical binary cluster tree using `linkage`. Then, plot the dendrogram with a vertical orientation, using the default color threshold. Return handles to the lines so you can change the dendrogram line widths.

<pre class="mcode">
tree = linkage(X,'average');
H = dendrogram(tree,'Orientation','left','ColorThreshold','default');
set(H,'LineWidth',2)

fig2plotly()
</pre>

{% capture dentogram_plot_4 %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(255,0,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:fd5e82", "x": [ 0, 0.148219782508762, 0.148219782508762, 0 ], "ysrc": "danton267:1237:463743", "y": [ 1, 1, 2, 2 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(255,0,0)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(255,0,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:f1b4ff", "x": [ 0, 0.320504638731619, 0.320504638731619, 0 ], "ysrc": "danton267:1237:31d159", "y": [ 3, 3, 4, 4 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(255,0,0)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:d1fe55", "x": [ 0, 0.333600207554769, 0.333600207554769, 0 ], "ysrc": "danton267:1237:87792d", "y": [ 9, 9, 10, 10 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(255,0,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:a0f73b", "x": [ 0.320504638731619, 0.414620818966117, 0.414620818966117, 0 ], "ysrc": "danton267:1237:7584ac", "y": [ 3.5, 3.5, 5, 5 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(255,0,0)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,255,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:74d6be", "x": [ 0, 0.441117934065952, 0.441117934065952, 0 ], "ysrc": "danton267:1237:fc2dfe", "y": [ 6, 6, 7, 7 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(0,255,0)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(255,0,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:b24cde", "x": [ 0.148219782508762, 0.581610644037362, 0.581610644037362, 0.414620818966117 ], "ysrc": "danton267:1237:c9a96c", "y": [ 1.5, 1.5, 4.25, 4.25 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(255,0,0)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:1919d2", "x": [ 0, 0.693675762035594, 0.693675762035594, 0.333600207554769 ], "ysrc": "danton267:1237:3e95f7", "y": [ 8, 8, 9.5, 9.5 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(0,0,0)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:ae5200", "x": [ 0.441117934065952, 0.775391648245102, 0.775391648245102, 0.581610644037362 ], "ysrc": "danton267:1237:b1712c", "y": [ 6.5, 6.5, 2.875, 2.875 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(0,0,0)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 2 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1237:b05784", "x": [ 0.775391648245102, 0.896884105908445, 0.896884105908445, 0.693675762035594 ], "ysrc": "danton267:1237:793b84", "y": [ 4.6875, 4.6875, 8.75, 8.75 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 2 }, "size": 6, "color": "rgb(0,0,0)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0.934317322078429, 0.110786566338778 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "nticks": 9, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "right", "type": "linear", "range": [ 0, 11 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "ticklen": 6.51, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "ticktext": [ " 2", "10", " 5", " 8", " 9", " 1", " 4", " 3", " 6", " 7" ], "tickvals": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none", "showticklabels": true }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": false, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=dentogram_plot_4
  index=1
%}



<!--------------------- EXAMPLE BREAK ------------------------->

