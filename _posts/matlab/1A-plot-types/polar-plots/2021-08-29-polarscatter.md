---
description: Learn how to make 6 polarscatter charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/polar-plots/polarscatter/
layout: base
language: matlab
name: MATLAB polarscatter
reference: https://mathworks.com/help/matlab/ref/polarscatter.html
---

## Create Scatter Chart

Create a scatter chart in polar coordinates.

<pre class="mcode">
th = pi/4:pi/4:2*pi;
r = [19 6 12 18 16 11 15 15];
polarscatter(th,r)
fig2plotly()
</pre>

{% capture plot_0_0_create_scatter_chart_505 %}
  {% raw %}{"data":[{"mode":"markers","name":"","r":[19,6,12,18,16,11,15,15],"type":"scatterpolar","marker":{"line":{"color":"rgb(61.761,38.352,168.3765)","width":0.5},"size":5.4,"color":"rgba(0,0,0,0)","symbol":"circle","sizeref":1,"sizemode":"area"},"visible":true,"theta":[45,90,135,180,225,270,315,360],"showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0_0_create_scatter_chart_505
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_0_0_create_scatter_chart_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_0_0_create_scatter_chart_ssim_map.png" 
  index=505
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Use Filled Markers and Set Marker Size

Create a scatter chart that uses filled markers by specifying the optional input argument, `'filled'`. Set the marker size to 75 points squared.

<pre class="mcode">
th = linspace(0,2*pi,20);
r = rand(1,20);
sz = 75;
polarscatter(th,r,sz,<span style='color:#A020F0'>'filled'</span>)
fig2plotly()
</pre>

{% capture plot_1_0_use_filled_markers_and_set_marker_size_506 %}
  {% raw %}{"data":[{"mode":"markers","name":"","r":[0.725550455392335,0.0465842476641837,0.874194748957775,0.463751609221614,0.885543515423795,0.826898789439793,0.366617210611708,0.453414059761646,0.328686814674774,0.325477768966975,0.763975344099859,0.4443980869725,0.0804699788195815,0.266649541947379,0.0795740137856139,0.556584343922618,0.776672749286226,0.712326600208673,0.244387735378176,0.201472156277496],"type":"scatterpolar","visible":true,"theta":[0,18.9473684210526,37.8947368421053,56.8421052631579,75.7894736842105,94.7368421052632,113.684210526316,132.631578947368,151.578947368421,170.526315789474,189.473684210526,208.421052631579,227.368421052632,246.315789473684,265.263157894737,284.210526315789,303.157894736842,322.105263157895,341.052631578947,360],"showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_use_filled_markers_and_set_marker_size_506
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_1_0_use_filled_markers_and_set_marker_size_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_1_0_use_filled_markers_and_set_marker_size_ssim_map.png" 
  index=506
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Use Markers with Varying Sizes and Colors

Create a scatter chart with markers of varying sizes and colors. Specify the optional size and color input arguments as vectors. Use unique values in the color vector to specify the different colors you want. The values map to colors in the colormap.

<pre class="mcode">
th = pi/4:pi/4:2*pi;
r = [19 6 12 18 16 11 15 15];
sz = 100*[6 15 20 3 15 3 6 40];
c = [1 2 2 2 1 1 2 1];
polarscatter(th,r,sz,c,<span style='color:#A020F0'>'filled'</span>,<span style='color:#A020F0'>'MarkerFaceAlpha'</span>,.5)
fig2plotly()
</pre>

{% capture plot_2_0_use_markers_with_varying_sizes_and_colors_507 %}
  {% raw %}{"data":[{"mode":"markers","name":"","r":[19,6,12,18,16,11,15,15],"type":"scatterpolar","visible":true,"theta":[45,90,135,180,225,270,315,360],"showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2_0_use_markers_with_varying_sizes_and_colors_507
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_2_0_use_markers_with_varying_sizes_and_colors_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_2_0_use_markers_with_varying_sizes_and_colors_ssim_map.png" 
  index=507
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Convert from Degrees to Radians Before Plotting

Create data where the angle values are in degrees. Since `polarscatter` requires angle values in radians, convert the values to radians before plotting using `deg2rad`.

<pre class="mcode">
th = linspace(0,360,50);
r = 0.005*th/10;
th_radians = deg2rad(th);
polarscatter(th_radians,r)
fig2plotly()
</pre>

{% capture plot_3_0_convert_from_degrees_to_radians_before_plotting_508 %}
  {% raw %}{"data":[{"mode":"markers","name":"","r":[0,0.0036734693877551,0.0073469387755102,0.0110204081632653,0.0146938775510204,0.0183673469387755,0.0220408163265306,0.0257142857142857,0.0293877551020408,0.0330612244897959,0.036734693877551,0.0404081632653061,0.0440816326530612,0.0477551020408163,0.0514285714285714,0.0551020408163265,0.0587755102040816,0.0624489795918367,0.0661224489795918,0.0697959183673469,0.073469387755102,0.0771428571428571,0.0808163265306122,0.0844897959183673,0.0881632653061225,0.0918367346938775,0.0955102040816327,0.0991836734693878,0.102857142857143,0.106530612244898,0.110204081632653,0.113877551020408,0.117551020408163,0.121224489795918,0.124897959183673,0.128571428571429,0.132244897959184,0.135918367346939,0.139591836734694,0.143265306122449,0.146938775510204,0.150612244897959,0.154285714285714,0.157959183673469,0.161632653061224,0.16530612244898,0.168979591836735,0.17265306122449,0.176326530612245,0.18],"type":"scatterpolar","marker":{"line":{"color":"rgb(61.761,38.352,168.3765)","width":0.5},"size":5.4,"color":"rgba(0,0,0,0)","symbol":"circle","sizeref":1,"sizemode":"area"},"visible":true,"theta":[0,7.3469387755102,14.6938775510204,22.0408163265306,29.3877551020408,36.734693877551,44.0816326530612,51.4285714285714,58.7755102040816,66.1224489795918,73.4693877551021,80.8163265306122,88.1632653061225,95.5102040816327,102.857142857143,110.204081632653,117.551020408163,124.897959183673,132.244897959184,139.591836734694,146.938775510204,154.285714285714,161.632653061224,168.979591836735,176.326530612245,183.673469387755,191.020408163265,198.367346938776,205.714285714286,213.061224489796,220.408163265306,227.755102040816,235.102040816327,242.448979591837,249.795918367347,257.142857142857,264.489795918367,271.836734693878,279.183673469388,286.530612244898,293.877551020408,301.224489795918,308.571428571429,315.918367346939,323.265306122449,330.612244897959,337.959183673469,345.30612244898,352.65306122449,360],"showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_3_0_convert_from_degrees_to_radians_before_plotting_508
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_3_0_convert_from_degrees_to_radians_before_plotting_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_3_0_convert_from_degrees_to_radians_before_plotting_ssim_map.png" 
  index=508
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Combine Two Scatter Charts

Combine two scatter charts in the same polar axes using the `hold` command. Add a legend with a description of each chart.

<pre class="mcode">
th = pi/6:pi/6:2*pi;
r1 = rand(12,1);
polarscatter(th,r1,<span style='color:#A020F0'>'filled'</span>)

hold on 
r2 = rand(12,1);
polarscatter(th,r2,<span style='color:#A020F0'>'filled'</span>)
hold off

legend('Series A','Series B')
fig2plotly()
</pre>

{% capture plot_4_0_combine_two_scatter_charts_509 %}
  {% raw %}{"data":[{"mode":"markers","name":"SeriesA","r":[0.601433826251086,0.976987102095156,0.132585366828585,0.0680803965844712,0.355917846182407,0.816991210634911,0.687670316402025,0.887118047673207,0.212395680581563,0.772200346887477,0.766980168105947,0.772056869902333],"type":"scatterpolar","visible":true,"theta":[30,60,90,120,150,180,210,240,270,300,330,360],"showlegend":true}],"layout":{"title":"","width":840,"height":630,"legend":{"x":0.755357138830281,"y":0.474404763040088,"font":{"size":9,"color":"rgb(0,0,0_)","family":"Arial,sans-serif"},"xref":"paper","yref":"paper","bgcolor":"rgb(255,255,255)","xanchor":"left","yanchor":"bottom","traceorder":"normal","bordercolor":"rgb(38.25,38.25,38.25)","borderwidth":0.5},"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":true,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_4_0_combine_two_scatter_charts_509
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_4_0_combine_two_scatter_charts_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_4_0_combine_two_scatter_charts_ssim_map.png" 
  index=509
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Scatter Chart After Creation

Create a scatter chart and assign the scatter object to the variable `ps`. 

<pre>
th = pi/6:pi/6:2*pi;
r = rand(12,1);
ps = polarscatter(th,r,<span style='color:#A020F0'>'filled'</span>)
</pre>

{% capture plot_5_0_modify_scatter_chart_after_creation_510 %}
  {% raw %}{"data":[{"mode":"markers","name":"","r":[0.690348312164723,0.526803922390343,0.0482455910000982,0.426344461532851,0.750835764558867,0.544673504555297,0.0321220886304254,0.754756474061852,0.93489257585803,0.265586797503433,0.472287191699781,0.752110895357479],"type":"scatterpolar","visible":true,"theta":[30,60,90,120,150,180,210,240,270,300,330,360],"showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_5_0_modify_scatter_chart_after_creation_510
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_0_modify_scatter_chart_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_0_modify_scatter_chart_after_creation_ssim_map.png" 
  index=510
%}

<pre>
<div class="codeoutput"><pre>ps = 
  Scatter with properties:

             Marker: <span style='color:#A020F0'>'o'</span>
    MarkerEdgeColor: <span style='color:#A020F0'>'none'</span>
    MarkerFaceColor: <span style='color:#A020F0'>'flat'</span>
           SizeData: 36
          LineWidth: 0.5000
          ThetaData: [1x12 double]
              RData: [1x12 double]
              ZData: [1x0 double]
              CData: [0 0.4470 0.7410]

  Show all properties

</pre></div>
</pre>

Use `ps` to modify properties of the scatter object after it is created.

<pre class="mcode">
ps.Marker = <span style='color:#A020F0'>'square'</span>;
ps.SizeData = 200;
ps.MarkerFaceColor = <span style='color:#A020F0'>'red'</span>;
ps.MarkerFaceAlpha = .5;
fig2plotly()
</pre>

{% capture plot_5_1_modify_scatter_chart_after_creation_511 %}
  {% raw %}{"data":[{"mode":"markers","name":"","r":[0.303077892266817,0.111250506448692,0.772971365684099,0.952176263692524,0.223712773873109,0.601146863942694,0.196488048709658,0.418658121013539,0.773030635247399,0.364184631540937,0.366062045568615,0.806418439976177],"type":"scatterpolar","marker":{"line":{"color":"rgba(0,0,0,0)","width":0.5},"size":30,"color":"rgb(255,0,0)","symbol":"square","sizeref":1,"sizemode":"area"},"visible":true,"theta":[30,60,90,120,150,180,210,240,270,300,330,360],"showlegend":true}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_5_1_modify_scatter_chart_after_creation_511
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_1_modify_scatter_chart_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarscatter/plot_5_1_modify_scatter_chart_after_creation_ssim_map.png" 
  index=511
%}



<!--------------------- EXAMPLE BREAK ------------------------->

