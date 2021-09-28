---
description: How to make Gauge Plots in MATLAB<sup>&reg;</sup> with Plotly.
name: Gauge Plots
display_as: financial
order: 7
permalink: matlab/gauge-charts/
thumbnail: thumbnail/gauge.jpg
layout: base
language: matlab
page_type: u-guide
---

## Create Circular Gauge

<pre class="mcode">
fig = uifigure;
cg = uigauge(fig);

fig2plotly()
</pre>

{% capture plot_0__1_create_circular_gauge %}
  {% raw %}

  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0__1_create_circular_gauge
  src="https://chart-studio.plotly.com/~danton267/977.embed"
  index=0
%}





<!--------------------- EXAMPLE BREAK ------------------------->

## Create Linear Gauge

<pre class="mcode">
fig = uifigure;
lg  = uigauge(fig,'linear');

fig2plotly()
</pre>

{% capture plot_1__1_create_linear_gauge %}
  {% raw %}

  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1__1_create_linear_gauge
  src="https://chart-studio.plotly.com/~danton267/977.embed"
  index=1
%}





<!--------------------- EXAMPLE BREAK ------------------------->

## Create Linear Gauge in Panel

Specify a panel as the parent container for a linear gauge.

<pre class="mcode">
fig = uifigure;
pnl = uipanel(fig);
lg = uigauge(pnl,'linear');

fig2plotly()
</pre>

{% capture plot_2__1_create_linear_gauge_in_panel %}
  {% raw %}

  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2__1_create_linear_gauge_in_panel
  src="https://chart-studio.plotly.com/~danton267/977.embed"
  index=2
%}





<!--------------------- EXAMPLE BREAK ------------------------->

## Set and Access Gauge Property Values

Create a circular gauge, and set the `ScaleDirection` property to
            specify that the needle moves counterclockwise.

<pre class="mcode">
fig = uifigure;
cg = uigauge(fig,'ScaleDirection','counterclockwise');
</pre>

Change the number of major ticks, specify matching tick labels, and remove minor ticks.

<pre class="mcode">
cg.MajorTicks = [0:10:100];
cg.MajorTickLabels = {'0','10','20','30','40','50','60','70','80','90','100'};
cg.MinorTicks = [];

fig2plotly()
</pre>

{% capture plot_3__1_set_and_access_gauge_property_values %}
  {% raw %}

  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_3__1_set_and_access_gauge_property_values
  src="https://chart-studio.plotly.com/~danton267/977.embed"
  index=3
%}





<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Scale Colors and Color Limits

<pre class="mcode">
fig = uifigure;
cg = uigauge(fig,'ScaleColors',{'yellow','red'},...
                 'ScaleColorLimits', [60 80; 80 100]);

fig2plotly()
</pre>

{% capture plot_4__1_specify_scale_colors_and_color_limits %}
  {% raw %}

  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_4__1_specify_scale_colors_and_color_limits
  src="https://chart-studio.plotly.com/~danton267/977.embed"
  index=4
%}





<!--------------------- EXAMPLE BREAK ------------------------->

