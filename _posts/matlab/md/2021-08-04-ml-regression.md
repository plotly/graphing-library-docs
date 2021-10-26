---
description: How to make ML Regression plots in MATLAB<sup>&reg;</sup> with Plotly.
name: ML Regression
display_as: ai_ml
order: 1
permalink: matlab/ml-regression/
thumbnail: thumbnail/ml-regression.png
layout: base
language: matlab
page_type: u-guide
---


## Simple Linear Regression

This example shows how to perform simple linear regression using the accidents dataset. The example also shows you how to calculate the coefficient of determination R<sup>2</sup> to evaluate the regressions. The accidents dataset contains data for fatal traffic accidents in U.S. states.

Linear regression models the relation between a dependent, or response, variable y and one or more independent, or predictor, variables x<sub>1</sub>,...,x<sub>n</sub>. Simple linear regression considers only one independent variable using the relation

<code>y=β<sub>0</sub>+β<sub>1</sub>x+ϵ,</code>

where β<sub>0</sub> is the y-intercept, β<sub>1</sub> is the slope (or regression coefficient), and ϵ is the error term. This can be simplified to `Y=XB`

From the dataset accidents, load accident data in y and state population data in x. Find the linear regression relation y=β<sub>1</sub>x between the accidents in a state and the population of a state using the \ operator. The \ operator performs a least-squares regression.

<pre class="mcode">
load accidents
x = hwydata(:,14); %Population of states
y = hwydata(:,4); %Accidents per state
format long
b1 = x\y
</pre>

<pre class="codeoutput">
b1 = 
     1.372716735564871e-04
</pre>

b1 is the slope or regression coefficient. The linear relation is y=β<sub>1</sub>x=0.0001372x.

Calculate the accidents per state yCalc from x using the relation. Visualize the regression by plotting the actual values y and the calculated values yCalc.

<pre class="mcode">
yCalc1 = b1*x;
scatter(x,y)
hold on
plot(x,yCalc1)
xlabel('Population of state')
ylabel('Fatal traffic accidents per state')
title('Linear Regression Relation Between Accidents & Population')
grid on

fig2plotly()
</pre>

{% capture  ml_regression_plot_1 %}
  {% raw %}
{ "data": [ { "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1133:6e2278", "x": [ 493782, 572059, 608827, 626932, 642200, 754844, 783600, 902195, 1048319, 1211537, 1235786, 1274923, 1293953, 1711263, 1808344, 1819046, 1998257, 2233169, 2673400, 2688418, 2844658, 2926324, 3405565, 3421399, 3450654, 4012012, 4041769, 4301261, 4447100, 4468976, 4919479, 5130632, 5296486, 5363675, 5595211, 5689283, 5894121, 6080485, 6349097, 7078515, 8049313, 8186453, 8414350, 9938444, 11353140, 12281054, 12419293, 15982378, 18976457, 20851820, 33871648 ], "ysrc": "danton267:1133:503ff4", "y": [ 164, 43, 98, 101, 100, 197, 134, 229, 83, 142, 171, 194, 260, 254, 411, 521, 395, 296, 704, 461, 900, 390, 291, 456, 774, 1046, 964, 665, 1154, 904, 567, 1150, 643, 792, 1130, 1288, 563, 947, 476, 925, 1557, 1634, 731, 1159, 1286, 1490, 1356, 3244, 1493, 3583, 4120 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(61.761,38.352,168.3765)", "width": 0.5 }, "size": 5.4, "color": "rgba(0,0,0,0)", "symbol": "circle", "sizeref": 1, "sizemode": "area" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(216.75,82.875,24.99)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1133:6e2278", "x": [ 493782, 572059, 608827, 626932, 642200, 754844, 783600, 902195, 1048319, 1211537, 1235786, 1274923, 1293953, 1711263, 1808344, 1819046, 1998257, 2233169, 2673400, 2688418, 2844658, 2926324, 3405565, 3421399, 3450654, 4012012, 4041769, 4301261, 4447100, 4468976, 4919479, 5130632, 5296486, 5363675, 5595211, 5689283, 5894121, 6080485, 6349097, 7078515, 8049313, 8186453, 8414350, 9938444, 11353140, 12281054, 12419293, 15982378, 18976457, 20851820, 33871648 ], "ysrc": "danton267:1133:84a4de", "y": [ 67.7822815120693, 78.5274963030505, 83.5747011963754, 86.0600048461156, 88.155868757976, 103.618699154073, 107.566083398863, 123.845817524295, 143.904503551063, 166.309711565606, 169.638412377677, 175.010813865657, 177.623093813437, 234.907935905295, 248.234407245832, 249.703488696234, 274.304082585965, 306.550845964467, 366.982092085913, 369.043638079384, 390.490964355849, 401.701392848514, 467.487606955398, 469.661166634491, 473.677049444386, 550.735601568709, 554.820394758729, 590.441295873249, 610.460859473054, 613.463814603776, 675.305115355994, 704.290441042466, 727.057497188504, 736.280643663091, 768.063977871666, 780.977398746472, 809.095853814435, 834.678351985116, 871.551170762472, 971.679600344697, 1104.94266648999, 1123.76810380152, 1155.05190639003, 1364.26684042743, 1558.4645279211, 1685.84083561759, 1704.81713449837, 2193.92777547238, 2604.93001056271, 2862.36422809863, 4649.61780707624 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(216.75,82.875,24.99)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b>Linear Regression Relation Between Accidents & Population</b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0, 35000000 ], "ticks": "inside", "title": "Population of state", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "nticks": 9, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 5000 ], "ticks": "inside", "title": "Fatal traffic accidents per state", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": false, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b>Linear Regression Relation Between Accidents & Population</b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file= ml_regression_plot_1
  index=1
%}

Improve the fit by including a y-intercept β<sub>0</sub> in your model as y=β<sub>0</sub>+β<sub>1</sub>x. Calculate β<sub>0</sub> by padding x with a column of ones and using the \ operator.


<pre class="mcode">
X = [ones(length(x),1) x];
b = X\y
</pre>

<pre class="codeoutput">
b = 2×1
102 ×

   1.427120171726538
   0.000001256394274
</pre>

This result represents the relation y=β<sub>0</sub>+β<sub>1</sub>x=142.7120+0.0001256x.

Visualize the relation by plotting it on the same figure.

<pre class="mcode">
yCalc2 = X*b;
plot(x,yCalc2,'--')
legend('Data','Slope','Slope & Intercept','Location','best');

fig2plotly()
</pre>

{% capture  ml_regression_plot_2 %}
  {% raw %}
{ "data": [ { "mode": "markers", "name": "Data", "type": "scatter", "xsrc": "danton267:1135:a0cdb6", "x": [ 493782, 572059, 608827, 626932, 642200, 754844, 783600, 902195, 1048319, 1211537, 1235786, 1274923, 1293953, 1711263, 1808344, 1819046, 1998257, 2233169, 2673400, 2688418, 2844658, 2926324, 3405565, 3421399, 3450654, 4012012, 4041769, 4301261, 4447100, 4468976, 4919479, 5130632, 5296486, 5363675, 5595211, 5689283, 5894121, 6080485, 6349097, 7078515, 8049313, 8186453, 8414350, 9938444, 11353140, 12281054, 12419293, 15982378, 18976457, 20851820, 33871648 ], "ysrc": "danton267:1135:fc3bb9", "y": [ 164, 43, 98, 101, 100, 197, 134, 229, 83, 142, 171, 194, 260, 254, 411, 521, 395, 296, 704, 461, 900, 390, 291, 456, 774, 1046, 964, 665, 1154, 904, 567, 1150, 643, 792, 1130, 1288, 563, 947, 476, 925, 1557, 1634, 731, 1159, 1286, 1490, 1356, 3244, 1493, 3583, 4120 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "color": "rgb(61.761,38.352,168.3765)", "width": 0.5 }, "size": 5.4, "color": "rgba(0,0,0,0)", "symbol": "circle", "sizeref": 1, "sizemode": "area" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(216.75,82.875,24.99)", "width": 0.5 }, "mode": "lines", "name": "Slope", "type": "scatter", "xsrc": "danton267:1135:a0cdb6", "x": [ 493782, 572059, 608827, 626932, 642200, 754844, 783600, 902195, 1048319, 1211537, 1235786, 1274923, 1293953, 1711263, 1808344, 1819046, 1998257, 2233169, 2673400, 2688418, 2844658, 2926324, 3405565, 3421399, 3450654, 4012012, 4041769, 4301261, 4447100, 4468976, 4919479, 5130632, 5296486, 5363675, 5595211, 5689283, 5894121, 6080485, 6349097, 7078515, 8049313, 8186453, 8414350, 9938444, 11353140, 12281054, 12419293, 15982378, 18976457, 20851820, 33871648 ], "ysrc": "danton267:1135:9c1c19", "y": [ 67.7822815120693, 78.5274963030505, 83.5747011963754, 86.0600048461156, 88.155868757976, 103.618699154073, 107.566083398863, 123.845817524295, 143.904503551063, 166.309711565606, 169.638412377677, 175.010813865657, 177.623093813437, 234.907935905295, 248.234407245832, 249.703488696234, 274.304082585965, 306.550845964467, 366.982092085913, 369.043638079384, 390.490964355849, 401.701392848514, 467.487606955398, 469.661166634491, 473.677049444386, 550.735601568709, 554.820394758729, 590.441295873249, 610.460859473054, 613.463814603776, 675.305115355994, 704.290441042466, 727.057497188504, 736.280643663091, 768.063977871666, 780.977398746472, 809.095853814435, 834.678351985116, 871.551170762472, 971.679600344697, 1104.94266648999, 1123.76810380152, 1155.05190639003, 1364.26684042743, 1558.4645279211, 1685.84083561759, 1704.81713449837, 2193.92777547238, 2604.93001056271, 2862.36422809863, 4649.61780707624 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(216.75,82.875,24.99)" }, "visible": true, "showlegend": true }, { "line": { "dash": "dash", "color": "rgb(236.895,176.97,31.875)", "width": 0.5 }, "mode": "lines", "name": "Slope & Intercept", "type": "scatter", "xsrc": "danton267:1135:a0cdb6", "x": [ 493782, 572059, 608827, 626932, 642200, 754844, 783600, 902195, 1048319, 1211537, 1235786, 1274923, 1293953, 1711263, 1808344, 1819046, 1998257, 2233169, 2673400, 2688418, 2844658, 2926324, 3405565, 3421399, 3450654, 4012012, 4041769, 4301261, 4447100, 4468976, 4919479, 5130632, 5296486, 5363675, 5595211, 5689283, 5894121, 6080485, 6349097, 7078515, 8049313, 8186453, 8414350, 9938444, 11353140, 12281054, 12419293, 15982378, 18976457, 20851820, 33871648 ], "ysrc": "danton267:1135:ca76e5", "y": [ 204.750504907006, 214.585182364633, 219.204692830824, 221.479394663678, 223.397657441034, 237.550185099694, 241.163072473654, 256.063280364698, 274.422216052298, 294.928832111664, 297.975462586388, 302.89261285606, 305.283531159248, 357.714120602409, 369.911321852634, 371.255915004537, 393.771882426114, 423.286091592613, 478.596462350926, 480.483315271435, 500.113219406489, 510.373688883533, 570.585253704241, 572.574628397497, 576.250209845724, 646.778907525228, 650.517559966004, 683.119986257692, 701.443114708487, 704.19160282202, 760.792541778461, 787.321683789655, 808.159485379614, 816.601072866367, 845.691123326005, 857.51027553922, 883.246004566462, 906.660670812143, 940.408928681607, 1032.05258852789, 1154.02309335701, 1171.25328442896, 1199.88613301233, 1391.37243045736, 1569.11402582503, 1685.69660945006, 1703.0648782527, 2150.7288373864, 2526.90320849993, 2762.52274196401, 4398.32647657033 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(236.895,176.97,31.875)" }, "visible": true, "showlegend": true } ], "layout": { "title": "<b>Linear Regression Relation Between Accidents & Population</b>", "width": 840, "height": 630, "legend": { "x": 0.582678573903228, "y": 0.128404763607752, "font": { "size": 9, "color": "rgb(0,0,0_)", "family": "Arial, sans-serif" }, "xref": "paper", "yref": "paper", "bgcolor": "rgb(255,255,255)", "xanchor": "left", "yanchor": "bottom", "traceorder": "normal", "bordercolor": "rgb(38.25,38.25,38.25)", "borderwidth": 0.5 }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ 0, 35000000 ], "ticks": "inside", "title": "Population of state", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "nticks": 9, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ 0, 5000 ], "ticks": "inside", "title": "Fatal traffic accidents per state", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 12, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": true, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b>Linear Regression Relation Between Accidents & Population</b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file= ml_regression_plot_2
  index=1
%}
