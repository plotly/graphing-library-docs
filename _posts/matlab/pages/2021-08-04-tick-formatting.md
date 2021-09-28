---
description: How to Format Plot's Ticks in MATLAB<sup>&reg;</sup> with Plotly.
name: Formatting Ticks
display_as: file_settings
order: 11
permalink: matlab/tick-formatting/
thumbnail: thumbnail/tick-formatting.gif
layout: base
language: matlab
page_type: u-guide
---

## Display Tick Labels in Dollars

Display x-axis tick labels in dollars with and without decimal values.

Create a bar chart. Display the tick labels along the x-axis in dollars. 

<pre class="mcode">
x = 0:20:100;
y = [88 67 98 43 45 65];
bar(x,y)
xtickformat('usd')

fig2plotly()
</pre>

{% capture plot_0__1_display_tick_labels_in_dollars %}
  {% raw %}
{ "data": [ { "name": "", "type": "bar", "xsrc": "danton267:1373:31687d", "x": [ 0, 20, 40, 60, 80, 100 ], "ysrc": "danton267:1373:2f6152", "y": [ 88, 67, 98, 43, 45, 65 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 0.5 }, "color": "rgb(0,113.985,188.955)" }, "visible": true, "showlegend": true, "orientation": "v" } ], "layout": { "title": "<b><b></b></b>", "width": 840, "bargap": 0, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ -24, 124 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 7, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 100 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "barmode": "group", "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "bargroupgap": 0.2, "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0__1_display_tick_labels_in_dollars
  index=0
%}

Query the tick label format. MATLAB® returns the format as a character vector containing the formatting operators.

<pre class="mcode">
fmt = xtickformat
</pre>


<pre class="codeoutput">fmt = 
'$%,.2f'
</pre>


Display the tick labels with no decimal values by tweaking the numeric format to use a precision value of 0 instead of 2. 

<pre class="mcode">
xtickformat('$%,.0f')

fig2plotly()
</pre>

{% capture plot_0__1_display_tick_labels_in_dollars %}
  {% raw %}
{ "data": [ { "name": "", "type": "bar", "xsrc": "danton267:1375:9bed43", "x": [ 0, 20, 40, 60, 80, 100 ], "ysrc": "danton267:1375:a55099", "y": [ 88, 67, 98, 43, 45, 65 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 0.5 }, "color": "rgb(0,113.985,188.955)" }, "visible": true, "showlegend": true, "orientation": "v" } ], "layout": { "title": "<b><b></b></b>", "width": 840, "bargap": 0, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ -24, 124 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 7, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 100 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "barmode": "group", "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "bargroupgap": 0.2, "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0__1_display_tick_labels_in_dollars
  index=0
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Display Text After Each Tick Label

After creating a line chart, display the tick labels along the x-axis with the text "GHz" after each value.

<pre class="mcode">
x = 1:10;
y = [.17 .25 .27 .28 .3 .32 .33 .34 .345 .35];
plot(x,y,'-V')
xtickformat('%g GHz')

fig2plotly()
</pre>

{% capture plot_1_0_display_text_after_each_tick_label %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(0,113.985,188.955)", "width": 0.5 }, "mode": "lines+markers", "name": "", "type": "scatter", "xsrc": "danton267:1377:1361b3", "x": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], "ysrc": "danton267:1377:a238e2", "y": [ 0.17, 0.25, 0.27, 0.28, 0.3, 0.32, 0.33, 0.34, 0.345, 0.35 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(0,113.985,188.955)", "width": 0.5 }, "size": 6, "color": "rgba(0,0,0,0)", "symbol": "triangle-down", "maxdisplayed": 11 }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 1, 10 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 11, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0.15, 0.35 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 6, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_display_text_after_each_tick_label
  index=1
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Control Number of Decimals Displayed

After creating a scatter plot, display the x-axis tick labels with two decimal places. Control the decimal places by passing `xtickformat` a character vector of a numeric format that uses fixed-point notation for the conversion character and a precision value of 2.

<pre class="mcode">
x = linspace(0,1,100);
y = randn(1,100).*cos(x);
scatter(x,y)
xtickformat('%.2f')

fig2plotly()
</pre>

{% capture plot_2__1_control_number_of_decimals_displayed %}
  {% raw %}
{ "data": [ { "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1379:f32d53", "x": [ 0, 0.0101010101010101, 0.0202020202020202, 0.0303030303030303, 0.0404040404040404, 0.0505050505050505, 0.0606060606060606, 0.0707070707070707, 0.0808080808080808, 0.0909090909090909, 0.101010101010101, 0.111111111111111, 0.121212121212121, 0.131313131313131, 0.141414141414141, 0.151515151515152, 0.161616161616162, 0.171717171717172, 0.181818181818182, 0.191919191919192, 0.202020202020202, 0.212121212121212, 0.222222222222222, 0.232323232323232, 0.242424242424242, 0.252525252525253, 0.262626262626263, 0.272727272727273, 0.282828282828283, 0.292929292929293, 0.303030303030303, 0.313131313131313, 0.323232323232323, 0.333333333333333, 0.343434343434343, 0.353535353535354, 0.363636363636364, 0.373737373737374, 0.383838383838384, 0.393939393939394, 0.404040404040404, 0.414141414141414, 0.424242424242424, 0.434343434343434, 0.444444444444444, 0.454545454545455, 0.464646464646465, 0.474747474747475, 0.484848484848485, 0.494949494949495, 0.505050505050505, 0.515151515151515, 0.525252525252525, 0.535353535353535, 0.545454545454545, 0.555555555555556, 0.565656565656566, 0.575757575757576, 0.585858585858586, 0.595959595959596, 0.606060606060606, 0.616161616161616, 0.626262626262626, 0.636363636363636, 0.646464646464647, 0.656565656565657, 0.666666666666667, 0.676767676767677, 0.686868686868687, 0.696969696969697, 0.707070707070707, 0.717171717171717, 0.727272727272727, 0.737373737373737, 0.747474747474748, 0.757575757575758, 0.767676767676768, 0.777777777777778, 0.787878787878788, 0.797979797979798, 0.808080808080808, 0.818181818181818, 0.828282828282828, 0.838383838383838, 0.848484848484849, 0.858585858585859, 0.868686868686869, 0.878787878787879, 0.888888888888889, 0.898989898989899, 0.909090909090909, 0.919191919191919, 0.929292929292929, 0.939393939393939, 0.94949494949495, 0.95959595959596, 0.96969696969697, 0.97979797979798, 0.98989898989899, 1 ], "ysrc": "danton267:1379:65ed9f", "y": [ 0.671797662396021, -0.235369121311046, -0.342062496765338, 1.14388677391826, -1.66997901470312, -0.521349633132588, 0.587333353692419, 1.06570171062296, -0.487965825354755, -0.227781064953946, 1.02882976976026, 0.341019209319814, -0.432171719245757, -1.36763007609629, -2.12857135983891, -0.375099979778474, -0.811649565605434, -0.928398132092493, -1.41994115861836, 0.532920319945948, 0.84407760396669, -0.115163644687111, -0.885611543163064, 1.90378553623189, -1.3324976384197, -1.37771751806742, 0.14558898075945, 1.54274514291706, -1.68573722039122, 0.337147228796357, -0.714068925458803, 1.57832179254879, -0.619614828903282, 0.102502505393605, -0.222553317573071, 2.1742057872849, 0.225546746286051, -0.650825788108942, -0.170478346037999, 2.31225848624334, -0.661563230935968, 0.217526716543094, -0.464348585553916, -1.90387073565415, -1.36636640571903, 0.0342582884183086, 0.710735888487339, -0.152700774794619, -2.94941075200388, -1.27964447195183, 0.233568693900161, 0.821950690819526, 0.609948429378591, -0.732146907817071, -0.762056800147168, 0.539594158288, -0.773009524128916, 0.690412419156087, -0.0214871764350307, -0.660711147748233, -0.640269206264336, 1.22246303070764, -0.0102855402202548, -0.865264151964772, 0.530175410688017, 0.437115978730544, 0.478970387077897, 1.48100412769621, 0.521179056482305, 0.388181640201925, -1.3549785570851, 1.56671964391666, 0.263194471923351, -0.460287922443256, -0.278395942083377, -0.408677441366053, 0.215449465722221, 1.18827903176226, 0.0720052507370093, 0.156002979212486, 0.543253198765823, -0.579242286446647, 0.138204089185513, -0.638489429919997, -0.434396212939191, -0.721775036093334, 0.636697750889635, -0.598572026202395, -0.477502093421958, -0.757497498551628, -0.0233430055026643, -0.263259473478087, 0.623656218147256, -0.00655923244852078, -0.315726972227182, 0.166322627493705, 0.969431108950891, 0.513592017398489, -0.602354304902518, 0.0972066006664277 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(61.761,38.352,168.3765)", "width": 0.5 }, "size": 5.4, "color": "rgba(0,0,0,0)", "symbol": "circle", "sizeref": 1, "sizemode": "area" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0, 1 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ -3, 3 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 8, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2__1_control_number_of_decimals_displayed
  index=2
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Format for Date Tick Labels

Create a line plot with datetime values along the x-axis. Then, change the format of the dates.

<pre class="mcode">
t = datetime(2014,6,28) + caldays(1:10);
y = rand(1,10);
plot(t,y);
xtickformat('MM-dd')

fig2plotly()
</pre>

{% capture plot_3_0_format_for_date_tick_labels %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(0,113.985,188.955)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1381:bf403e", "x": [ "2014-06-29 00:00:00", "2014-06-30 00:00:00", "2014-07-01 00:00:00", "2014-07-02 00:00:00", "2014-07-03 00:00:00", "2014-07-04 00:00:00", "2014-07-05 00:00:00", "2014-07-06 00:00:00", "2014-07-07 00:00:00", "2014-07-08 00:00:00" ], "ysrc": "danton267:1381:3b9352", "y": [ 0.24897477209152, 0.151191489697865, 0.722664350161096, 0.121500121992054, 0.00444421454237898, 0.926229295113488, 0.909151813383873, 0.320413859045282, 0.992260197542596, 0.109500773037255 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,113.985,188.955)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "date", "range": [ "2014-06-29 00:00:00", "2014-07-08 00:00:00" ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 11, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 1 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_3_0_format_for_date_tick_labels
  index=3
%}




<!--------------------- EXAMPLE BREAK ------------------------->

## Query Current Tick Label Format

Create a scatter plot and display the x-axis tick labels in Euro. Then, query the tick label format. MATLAB® returns the format as a character vector containing the formatting operators. 

<pre class="mcode">
x = rand(100,1);
y = rand(100,1);
scatter(x,y)
xtickformat('eur')

fig2plotly()
</pre>

{% capture plot_5__1_query_current_tick_label_format %}
  {% raw %}
{ "data": [ { "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1383:b3c97a", "x": [ 0.77204639341363, 0.263653425030387, 0.0077985691345035, 0.312754902466244, 0.739975722738676, 0.151532550975392, 0.522072200639861, 0.141406128002339, 0.42072713243701, 0.206928182454851, 0.521560922621668, 0.411872623519869, 0.327942171405395, 0.907174825592106, 0.359588057104279, 0.99503885990305, 0.849631098702617, 0.597814161457497, 0.362468419201076, 0.689366469365674, 0.159847596783687, 0.270426787329884, 0.33540575275527, 0.495513142034591, 0.962162081331875, 0.542802508019856, 0.698732788030621, 0.350697008096035, 0.237176016024983, 0.696830583244916, 0.929224322581132, 0.617103872818227, 0.454195879441106, 0.0324708440563775, 0.781616435973427, 0.0582511442659085, 0.256004221586187, 0.970859859620296, 0.628630098992709, 0.783364025022849, 0.644791080831497, 0.753439621970536, 0.301102061608468, 0.557261500539785, 0.251495567077415, 0.0602274147616847, 0.59224824373423, 0.7189652698551, 0.0514903742804949, 0.465320963786097, 0.804857755743394, 0.673924339602678, 0.154121939794246, 0.631665873689586, 0.817335056452496, 0.159287993340547, 0.98633380719755, 0.636926935074459, 0.67405940453096, 0.832595532870028, 0.346115959227023, 0.133804623626236, 0.373884313135137, 0.330691835301233, 0.547036936444141, 0.650716941204784, 0.192735916819326, 0.253840611250598, 0.65164173925139, 0.55319954257838, 0.342926464504712, 0.423640268304701, 0.16029190206074, 0.346291780431383, 0.28593987965256, 0.268199656698379, 0.20292103753392, 0.677331548595728, 0.351598313249414, 0.91606502673791, 0.755240619247481, 0.304305957288437, 0.487691812854078, 0.160822720769703, 0.237400389967148, 0.87853620627238, 0.400695613503444, 0.0445450414951143, 0.801554942524783, 0.842061141466749, 0.496567074796314, 0.499750222422885, 0.0754167335669829, 0.363505219910948, 0.1344728660077, 0.683182843240626, 0.0466630433278512, 0.152446122232817, 0.751613199491408, 0.829059627659338 ], "ysrc": "danton267:1383:c8178b", "y": [ 0.941397460535216, 0.103386832764567, 0.671253884121955, 0.565459482018098, 0.108957660330609, 0.521201452387404, 0.351878236293598, 0.276797184904045, 0.431666728854358, 0.257440696790922, 0.0156274430881255, 0.728783096789281, 0.6541007610123, 0.999429629670974, 0.274435953283155, 0.334296168461979, 0.51555328952324, 0.101775028049052, 0.911548823964646, 0.27214865892511, 0.121918075503182, 0.524814885330055, 0.724385293660888, 0.525604652312162, 0.7177946073645, 0.91515335596697, 0.18254107038102, 0.404325352402428, 0.756347524356157, 0.106105081521638, 0.671415133739889, 0.47588293335261, 0.501382054222074, 0.0874642552560554, 0.389617506460183, 0.50479913244319, 0.717951112629938, 0.0167417295105293, 0.753707266931872, 0.0866841581000981, 0.110896409552073, 0.418776893953692, 0.623908424137759, 0.177743488839798, 0.839501822396107, 0.879875835850755, 0.331093256609829, 0.0769876212777251, 0.496619440095528, 0.380051860932238, 0.421928983013988, 0.729162957398974, 0.504447829673884, 0.898237797571811, 0.136345978657794, 0.0730236890963131, 0.515946183407202, 0.722789524607576, 0.142480704227195, 0.355115880610131, 0.428750343600876, 0.513769687192332, 0.998394098083904, 0.751974117643132, 0.191557544390263, 0.141427151811129, 0.643763183522026, 0.140384953809189, 0.344057070283912, 0.441141346038829, 0.864750303756949, 0.305331121190953, 0.914988129712097, 0.961722079994207, 0.135814085041274, 0.334362968134023, 0.936630154855263, 0.564348360647587, 0.592349266962702, 0.092713603899922, 0.878864565839114, 0.735259766089841, 0.751028309533854, 0.30795036229357, 0.183189203936907, 0.625368117485983, 0.851107159245378, 0.744178216323893, 0.665435294594583, 0.427064193892454, 0.25527009422887, 0.453039626934561, 0.32239409610029, 0.768034748187279, 0.648199062865956, 0.631162975134232, 0.732296287117573, 0.0558174978310909, 0.715954286546925, 0.675047037413886 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(61.761,38.352,168.3765)", "width": 0.5 }, "size": 5.4, "color": "rgba(0,0,0,0)", "symbol": "circle", "sizeref": 1, "sizemode": "area" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0, 1 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 1 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_5__1_query_current_tick_label_format
  index=5
%}

<pre class="mcode">
xfmt = xtickformat
</pre>


<pre class="codeoutput">xfmt = 
'\x20AC%,.2f'
</pre>




<!--------------------- EXAMPLE BREAK ------------------------->

## Tick Label Format for Specific Axes

Starting in R2019b, you can display a tiling of plots using the `tiledlayout` and `nexttile` functions. Call the `tiledlayout` function to create a 2-by-1 tiled chart layout. Call the `nexttile` function to create the axes objects `ax1` and `ax2`. Plot into each of the axes. Specify the tick label format for the x-axis of the lower plot by specifying `ax2` as the first input argument to `xtickformat`. Display the tick labels in U.S. dollars.

<pre class="mcode">
tiledlayout(2,1)
ax1 = nexttile;
plot(ax1,rand(6))

ax2 = nexttile;
plot(ax2,rand(6))
xtickformat(ax2,'usd')

fig2plotly()
</pre>

{% capture plot_6_0_tick_label_format_for_specific_axes %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(0,113.985,188.955)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:e1f8a3", "y": [ 0.530629014309035, 0.853267625720309, 0.203378592557405, 0.970730064664535, 0.155445911908291, 0.202409861023192 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,113.985,188.955)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(216.75,82.875,24.99)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:56c9b0", "y": [ 0.62856963467994, 0.108329081617212, 0.33880689668157, 0.753973829843123, 0.0278860080335485, 0.510853171408692 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(216.75,82.875,24.99)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(236.895,176.97,31.875)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:eee1de", "y": [ 0.543114030357046, 0.265833937763615, 0.120216046420824, 0.967655695921759, 0.947913125805234, 0.977595775876314 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(236.895,176.97,31.875)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(125.97,46.92,141.78)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:41f862", "y": [ 0.636057299549661, 0.296574155478718, 0.608739871061157, 0.621568981812923, 0.128658614769195, 0.261949615513543 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(125.97,46.92,141.78)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(118.83,171.87,47.94)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:529d52", "y": [ 0.605356720951231, 0.00811543382902635, 0.549263645636973, 0.30185579122293, 0.973024733781989, 0.105627091468951 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(118.83,171.87,47.94)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(76.755,189.975,237.915)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:2a3fb5", "y": [ 0.20132608619375, 0.412923642879977, 0.297665674334718, 0.976926477926409, 0.541736005884291, 0.150933277383474 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(76.755,189.975,237.915)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,113.985,188.955)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:dd6d54", "y": [ 0.679882342843722, 0.924121477078508, 0.0423827443876863, 0.047604177745583, 0.229519198571453, 0.767128322791886 ], "xaxis": "x2", "yaxis": "y2", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,113.985,188.955)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(216.75,82.875,24.99)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:3fae27", "y": [ 0.173490760418728, 0.27874183144697, 0.824043170678932, 0.216046940105524, 0.416516772557403, 0.854651126481457 ], "xaxis": "x2", "yaxis": "y2", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(216.75,82.875,24.99)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(236.895,176.97,31.875)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:0de72f", "y": [ 0.663757314212776, 0.908934333335906, 0.642405184353788, 0.0846369561968497, 0.527356570886414, 0.850671916445204 ], "xaxis": "x2", "yaxis": "y2", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(236.895,176.97,31.875)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(125.97,46.92,141.78)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:513fb3", "y": [ 0.739155199989794, 0.56333236443198, 0.639169917020213, 0.345858442430618, 0.341161890654572, 0.0944334810606067 ], "xaxis": "x2", "yaxis": "y2", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(125.97,46.92,141.78)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(118.83,171.87,47.94)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:1073d3", "y": [ 0.181038243613078, 0.705658847363987, 0.916423730129557, 0.0412600040023611, 0.7546219495861, 0.490053455136011 ], "xaxis": "x2", "yaxis": "y2", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(118.83,171.87,47.94)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(76.755,189.975,237.915)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1385:2a0bb9", "x": [ 1, 2, 3, 4, 5, 6 ], "ysrc": "danton267:1385:dea542", "y": [ 0.093173057985585, 0.811931121928822, 0.856683817364853, 0.197046050510468, 0.996800107830058, 0.823467604459838 ], "xaxis": "x2", "yaxis": "y2", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(76.755,189.975,237.915)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.5875, 0.925 ] } }, "scene2": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.4475 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 1, 6 ], "ticks": "inside", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 9.9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "xaxis2": { "side": "bottom", "type": "linear", "range": [ 1, 6 ], "ticks": "inside", "anchor": "y2", "domain": [ 0.13, 0.905 ], "mirror": "ticks", "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 9.9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 1 ], "ticks": "inside", "anchor": "x1", "domain": [ 0.5875, 0.925 ], "mirror": "ticks", "nticks": 4, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 9.9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis2": { "side": "left", "type": "linear", "range": [ 0, 1 ], "ticks": "inside", "anchor": "x2", "domain": [ 0.11, 0.4475 ], "mirror": "ticks", "nticks": 4, "ticklen": 6.51, "autotick": true, "showgrid": false, "showline": true, "tickfont": { "size": 9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 9.9, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": false, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 9.9, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 }, { "x": 0.5175, "y": 0.4575, "font": { "size": 9.9, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_6_0_tick_label_format_for_specific_axes
  index=6
%}



<!--------------------- EXAMPLE BREAK ------------------------->

