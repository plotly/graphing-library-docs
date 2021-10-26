---
description: How to send data to charts in MATLAB<sup>&reg;</sup>. Examples of overwriting charts with new data, extending traces, and adding new traces.
name: Sending Data to Chart Studio Graphs
display_as: chart_studio
order: 1
permalink: matlab/sending-data-to-charts/
thumbnail: thumbnail/ff-subplots.jpg
layout: base
language: matlab
page_type: u-guide
---


## Overwrite chart data with new data


<pre class="mcode">
plotly([1, 2], [1, 2], struct('filename', 'name-of-my-plotly-file'))
</pre>

<img src="http://i.imgur.com/VuobuN3.gif">


<!--------------------- EXAMPLE BREAK ------------------------->

## Add data to an existing trace


<pre class="mcode">
plotly([1, 2], [1, 2], struct('filename', 'name-of-my-plotly-file', <b>'fileopt', 'extend'</b>))
</pre>

<img src="http://i.imgur.com/2LhVSX6.gif">

<!--------------------- EXAMPLE BREAK ------------------------->

## Add new traces to a chart


<pre class="mcode">
plotly([1, 2], [1, 2], struct('filename', 'name-of-my-plotly-file', <b>'fileopt', 'append'</b>))
</pre>

<img src="http://i.imgur.com/RzrURdn.gif">


<!--------------------- EXAMPLE BREAK ------------------------->