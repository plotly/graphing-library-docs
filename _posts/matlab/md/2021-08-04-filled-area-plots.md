---
description: How to make Filled Area plots in MATLAB<sup>&reg;</sup> with Plotly.
name: Filled Area
display_as: basic
order: 7
permalink: matlab/filled-area-plots/
thumbnail: thumbnail/area.jpg
layout: base
language: matlab
page_type: u-guide
---

## Create Area Plot with One Curve

Create a vector of four values. Display the values in an area plot.

<pre class="mcode">
y = [1 5 6 3];
area(y)

fig2plotly()
</pre>

{% capture plot_0_0_create_area_plot_with_one_curve_273 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[1,5,6,3],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":80,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,6],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"showlegend":false,"annotations":[],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0_0_create_area_plot_with_one_curve_273
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_0_0_create_area_plot_with_one_curve_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_0_0_create_area_plot_with_one_curve_montage.png" 
  index=273
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Area Plot with Multiple Curves

Create matrix `Y`. Then display the values in `Y` as an area plot. Because `Y` contains three columns, `area` plots three curves and stacks them.

<pre class="mcode">
Y = [1 5 3; 3 2 7; 1 5 3; 2 6 1];
area(Y)

fig2plotly()
</pre>

{% capture plot_1_0_create_area_plot_with_multiple_curves_274 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[1,3,1,2],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[6,5,6,8],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[9,12,9,9],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,12],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_create_area_plot_with_multiple_curves_274
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_1_0_create_area_plot_with_multiple_curves_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_1_0_create_area_plot_with_multiple_curves_montage.png" 
  index=274
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Area Plot Using Horizontal Axis Values

Define `x` as a vector of three car dealership IDs. Define `Y` as a matrix containing the number of cars sold per model. Display the values in the matrix in an area plot. Then add the axis labels and a legend.

<pre class="mcode">
x = [10 11 12];
Y = [21.6 25.4; 70.8 66.1; 58.0 43.6];
area(x,Y)
xlabel('Dealership ID')
ylabel('Sales')
legend({'Model A','Model B'})

fig2plotly()
</pre>

{% capture plot_2_0_create_area_plot_using_horizontal_axis_values_275 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"ModelA","type":"scatter","x":[10,11,12],"y":[21.6,70.8,58],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"ModelB","type":"scatter","x":[10,11,12],"y":[47,136.9,101.6],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"legend":{"x":0.714880954775782,"y":0.813888891159542,"font":{"size":9,"color":"rgb(0,0,0_)","family":"Arial,sans-serif"},"xref":"paper","yref":"paper","bgcolor":"rgb(255,255,255)","xanchor":"left","yanchor":"bottom","traceorder":"normal","bordercolor":"rgb(38.25,38.25,38.25)","borderwidth":0.5},"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[10,12],"ticks":"inside","title":"DealershipID","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":12,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,140],"ticks":"inside","title":"Sales","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":9,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":true,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2_0_create_area_plot_using_horizontal_axis_values_275
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_2_0_create_area_plot_using_horizontal_axis_values_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_2_0_create_area_plot_using_horizontal_axis_values_montage.png" 
  index=275
%}

Set the tick marks along the x-axis to correspond to the values in `x`. 

<pre class="mcode">
ax = gca; % current axes
ax.XTick = x;

fig2plotly()
</pre>

{% capture plot_2_1_create_area_plot_using_horizontal_axis_values_276 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"ModelA","type":"scatter","x":[10,11,12],"y":[21.6,70.8,58],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"ModelB","type":"scatter","x":[10,11,12],"y":[47,136.9,101.6],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"legend":{"x":0.714880954775782,"y":0.813888891159542,"font":{"size":9,"color":"rgb(0,0,0_)","family":"Arial,sans-serif"},"xref":"paper","yref":"paper","bgcolor":"rgb(255,255,255)","xanchor":"left","yanchor":"bottom","traceorder":"normal","bordercolor":"rgb(38.25,38.25,38.25)","borderwidth":0.5},"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[10,12],"ticks":"inside","title":"DealershipID","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":4,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,140],"ticks":"inside","title":"Sales","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":9,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":true,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2_1_create_area_plot_using_horizontal_axis_values_276
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_2_1_create_area_plot_using_horizontal_axis_values_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_2_1_create_area_plot_using_horizontal_axis_values_montage.png" 
  index=276
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Adjust Baseline Value of Area Plot

Create matrix `Y`. Then display the values of `Y` in an area plot with a baseline value of -4`. `area` fills the areas specified by the curves and the line `y = -4`.

<pre class="mcode">
Y = [1 5 3; 3 2 7; 1 5 3; 2 6 1];
basevalue = -4;
area(Y,basevalue)

fig2plotly()
</pre>

{% capture plot_3_0_adjust_baseline_value_of_area_plot_277 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[1,3,1,2],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[6,5,6,8],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[9,12,9,9],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[-4,12],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":10,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_3_0_adjust_baseline_value_of_area_plot_277
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_3_0_adjust_baseline_value_of_area_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_3_0_adjust_baseline_value_of_area_plot_montage.png" 
  index=277
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Line Style of Area Plot

Create matrix `Y`. Display the values of `Y` in an area plot that uses a dotted line style.

<pre class="mcode">
Y = [1 3 5; 3 2 7; 3 4 2];
area(Y,'LineStyle',':')

fig2plotly()
</pre>

{% capture plot_4_0_specify_line_style_of_area_plot_278 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"dot","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[1,3,3],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"dot","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[4,5,7],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"dot","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[9,12,9],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,3],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":12,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,12],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_4_0_specify_line_style_of_area_plot_278
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_4_0_specify_line_style_of_area_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_4_0_specify_line_style_of_area_plot_montage.png" 
  index=278
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Filled Area into Target Axes

Create a tiled chart layout in the `'flow'` tile arrangement, so that the axes fill the available space in the layout. Next, call the `nexttile` function to create an `Axes` object and return it as `ax1`. Display an area plot by passing `ax1` to the `area` function.

<pre class="mcode">
tiledlayout('flow')
ax1 = nexttile;
Y1 = [3 6; 1 5; 7 2; 5 9];
area(ax1,Y1)

fig2plotly()
</pre>

{% capture plot_5_0_plot_filled_area_into_target_axes_279 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[3,1,7,5],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[9,6,9,14],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,14],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":9,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_5_0_plot_filled_area_into_target_axes_279
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_5_0_plot_filled_area_into_target_axes_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_5_0_plot_filled_area_into_target_axes_montage.png" 
  index=279
%}

Repeat the process to create a second `Axes` object and a second area plot.

<pre class="mcode">
ax2 = nexttile;
Y2 = [4 2 11; 5 6 0; 1 7 2; 9 5 9];
area(ax2,Y2)

fig2plotly()
</pre>

{% capture plot_5_1_plot_filled_area_into_target_axes_280 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[3,1,7,5],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[9,6,9,14],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[13,11,10,23],"xaxis":"x2","yaxis":"y2","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[15,17,17,28],"xaxis":"x2","yaxis":"y2","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[26,17,19,37],"xaxis":"x2","yaxis":"y2","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.5875,0.925]}},"scene2":{"domain":{"x":[0.13,0.905],"y":[0.11,0.4475]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":9.9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"xaxis2":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y2","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":9.9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,15],"ticks":"inside","anchor":"x1","domain":[0.5875,0.925],"mirror":"ticks","nticks":5,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":9.9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis2":{"side":"left","type":"linear","range":[0,23],"ticks":"inside","anchor":"x2","domain":[0.11,0.4475],"mirror":"ticks","nticks":6,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":9.9,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":9.9,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5},{"x":0.5175,"y":0.4575,"font":{"size":9.9,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_5_1_plot_filled_area_into_target_axes_280
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_5_1_plot_filled_area_into_target_axes_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_5_1_plot_filled_area_into_target_axes_montage.png" 
  index=280
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Change Area Characteristics After Plotting

Create matrix `Y`. Then create an area plot, specifying an output argument when calling the `area` function. In this case, `area` returns a vector of three `Area` objects. Each object corresponds to a different column of `Y`.

<pre class="mcode">
Y = [2 3 4; 6 1 5; 7 4 9];
a = area(Y);

fig2plotly()
</pre>

{% capture plot_6_0_change_area_characteristics_after_plotting_281 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[2,6,7],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[5,7,11],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[9,12,20],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,3],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":12,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,20],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":12,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_6_0_change_area_characteristics_after_plotting_281
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_6_0_change_area_characteristics_after_plotting_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_6_0_change_area_characteristics_after_plotting_montage.png" 
  index=281
%}

Modify the second area to be green with thick red edges.

<pre class="mcode">
a(2).FaceColor = [0.2 0.6 0.5];
a(2).EdgeColor = [0.63 0.08 0.18];
a(2).LineWidth = 2;

fig2plotly()
</pre>

{% capture plot_6_1_change_area_characteristics_after_plotting_282 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[2,6,7],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(160.65,20.4,45.9)","width":2},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[5,7,11],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(51,153,127.5)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3],"y":[9,12,20],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,3],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":12,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,20],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":12,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_6_1_change_area_characteristics_after_plotting_282
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_6_1_change_area_characteristics_after_plotting_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_6_1_change_area_characteristics_after_plotting_montage.png" 
  index=282
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Set Colors in Area Plot

Display an area plot with three curves.

<pre class="mcode">
area([1 5 3; 3 2 7; 1 5 3; 2 6 1])

fig2plotly()
</pre>

{% capture plot_7_0_set_colors_in_area_plot_283 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[1,3,1,2],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[6,5,6,8],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[9,12,9,9],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,12],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_7_0_set_colors_in_area_plot_283
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_7_0_set_colors_in_area_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_7_0_set_colors_in_area_plot_montage.png" 
  index=283
%}

Set the color order to blue, purple, and gray.

<pre class="mcode">
newcolors = [0 0.5 1; 0.5 0 1; 0.7 0.7 0.7];
colororder(newcolors)

fig2plotly()
</pre>

{% capture plot_7_0_set_colors_in_area_plot_283 %}
  {% raw %}{"data":[{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[1,3,1,2],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(0,113.985,188.955)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[6,5,6,8],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(216.75,82.875,24.99)","showlegend":true},{"fill":"tonexty","line":{"dash":"solid","color":"rgb(0,0,0)","width":0.5},"mode":"lines","name":"","type":"scatter","x":[1,2,3,4],"y":[9,12,9,9],"xaxis":"x1","yaxis":"y1","visible":true,"fillcolor":"rgb(236.895,176.97,31.875)","showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"scene1":{"domain":{"x":[0.13,0.905],"y":[0.11,0.925]}},"xaxis1":{"side":"bottom","type":"linear","range":[1,4],"ticks":"inside","anchor":"y1","domain":[0.13,0.905],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"yaxis1":{"side":"left","type":"linear","range":[0,12],"ticks":"inside","anchor":"x1","domain":[0.11,0.925],"mirror":"ticks","nticks":8,"ticklen":6.51,"autotick":true,"showgrid":false,"showline":true,"tickfont":{"size":10,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"zeroline":false,"autorange":false,"gridcolor":"rgb(38.25,38.25,38.25)","gridwidth":1,"linecolor":"rgb(38.25,38.25,38.25)","linewidth":1,"tickcolor":"rgb(38.25,38.25,38.25)","tickwidth":1,"titlefont":{"size":11,"color":"rgb(38.25,38.25,38.25)","family":"Arial,sans-serif"},"exponentformat":"none"},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"x":0.5175,"y":0.935,"font":{"size":11,"color":"rgb(0,0,0)","family":"Arial,sans-serif"},"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","borderpad":3,"showarrow":false,"textangle":0,"bordercolor":"rgba(0,0,0,0)","borderwidth":0.5}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_7_0_set_colors_in_area_plot_283
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_7_0_set_colors_in_area_plot_ssim_map.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/line-plots/area/plot_7_0_set_colors_in_area_plot_montage.png" 
  index=283
%}



<!--------------------- EXAMPLE BREAK ------------------------->

