---
description: Learn how to make 4 polarhistogram charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/polar-plots/polarhistogram/
layout: base
language: matlab
name: MATLAB polarhistogram
reference: https://mathworks.com/help/matlab/ref/polarhistogram.html
---

## Create Histogram Chart in Polar Coordinates

Create a vector of values between 0 and 2π. Create a histogram chart that shows the data sorted into six bins.

<pre class="mcode">
theta = [0.1 1.1 5.4 3.4 2.3 4.5 3.2 3.4 5.6 2.3 2.1 3.5 0.6 6.1];
polarhistogram(theta,6)
fig2plotly('TreatAs', 'polarhistogram')
</pre>

{% capture plot_0_0_create_histogram_chart_in_polar_coordinates_490 %}
  {% raw %}{"data":[{"name":"theta","r":[2,1,3,4,1,3],"type":"barpolar","marker":{"line":{"color":"rgb(0,0,0)","width":0.5}},"opacity":0.6,"visible":true,"theta":[30,90,150,210,270,330],"width":[60,60,60,60,60,60.0000000000001],"showlegend":true},{"type":"barpolar"}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"barmode":"group","autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_0_0_create_histogram_chart_in_polar_coordinates_490
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_0_0_create_histogram_chart_in_polar_coordinates_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_0_0_create_histogram_chart_in_polar_coordinates_ssim_map.png" 
  index=490
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Number of Bins for Polar Histogram Chart

Create a histogram plot from 100,000 values between -π and π, and sort the data into 25 bins.

<pre class="mcode">
theta = atan2(rand(100000,1)-0.5,2*(rand(100000,1)-0.5));
polarhistogram(theta,25);
fig2plotly('TreatAs', 'polarhistogram')
</pre>

{% capture plot_1_0_specify_number_of_bins_for_polar_histogram_chart_491 %}
  {% raw %}{"data":[{"name":"theta","r":[6285,7178,4742,2678,1899,1635,1595,1738,2223,3527,6392,6836,6431,6731,6380,3422,2243,1768,1579,1629,1874,2838,4765,7279,6333],"type":"barpolar","marker":{"line":{"color":"rgb(0,0,0)","width":0.5}},"opacity":0.6,"visible":true,"theta":[-172.8,-158.4,-144,-129.6,-115.2,-100.8,-86.4,-72,-57.6,-43.2,-28.8,-14.4,1.24344978758018e-14,14.4,28.8,43.2,57.6,72,86.4,100.8,115.2,129.6,144,158.4,172.8],"width":[14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4],"showlegend":true},{"type":"barpolar"}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"barmode":"group","autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_1_0_specify_number_of_bins_for_polar_histogram_chart_491
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_1_0_specify_number_of_bins_for_polar_histogram_chart_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_1_0_specify_number_of_bins_for_polar_histogram_chart_ssim_map.png" 
  index=491
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Appearance of Histogram Chart

Create a histogram chart in polar coordinates, and then change its appearance. Specify the bar colors by setting the `FaceColor` property to a character vector of a color name, such as `'red'`, or an RGB triplet. Specify the transparency by setting the `FaceAlpha` property to a value between 0 and 1.

<pre class="mcode">
theta = atan2(rand(100000,1)-0.5,2*(rand(100000,1)-0.5));
polarhistogram(theta,25,<span style='color:#A020F0'>'FaceColor'</span>,<span style='color:#A020F0'>'red'</span>,<span style='color:#A020F0'>'FaceAlpha'</span>,.3);
fig2plotly('TreatAs', 'polarhistogram')
</pre>

{% capture plot_2_0_modify_appearance_of_histogram_chart_492 %}
  {% raw %}{"data":[{"name":"theta","r":[6460,7219,4696,2639,1955,1628,1589,1765,2170,3473,6564,6894,6336,6612,6338,3417,2211,1723,1561,1638,1921,2726,4828,7189,6448],"type":"barpolar","marker":{"line":{"color":"rgb(0,0,0)","width":0.5},"color":"rgb(255,0,0)"},"opacity":0.3,"visible":true,"theta":[-172.8,-158.4,-144,-129.6,-115.2,-100.8,-86.4,-72,-57.6,-43.2,-28.8,-14.4,1.24344978758018e-14,14.4,28.8,43.2,57.6,72,86.4,100.8,115.2,129.6,144,158.4,172.8],"width":[14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4],"showlegend":true},{"type":"barpolar"}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"barmode":"group","autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_2_0_modify_appearance_of_histogram_chart_492
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_2_0_modify_appearance_of_histogram_chart_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_2_0_modify_appearance_of_histogram_chart_ssim_map.png" 
  index=492
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Appearance of Histogram Chart After Creation

Create a histogram chart in polar coordinates. Assign the histogram object to the variable `h`.

<pre>
theta = atan2(rand(100000,1)-0.5,2*(rand(100000,1)-0.5));
h = polarhistogram(theta,25)
</pre>

{% capture plot_3_0_modify_appearance_of_histogram_chart_after_creation_493 %}
  {% raw %}{"data":[{"name":"theta","r":[6407,7088,4590,2630,1931,1693,1625,1742,2298,3384,6586,6676,6291,6725,6664,3487,2220,1722,1576,1698,1919,2711,4648,7097,6592],"type":"barpolar","marker":{"line":{"color":"rgb(0,0,0)","width":0.5}},"opacity":0.6,"visible":true,"theta":[-172.8,-158.4,-144,-129.6,-115.2,-100.8,-86.4,-72,-57.6,-43.2,-28.8,-14.4,1.24344978758018e-14,14.4,28.8,43.2,57.6,72,86.4,100.8,115.2,129.6,144,158.4,172.8],"width":[14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4],"showlegend":true},{"type":"barpolar"}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"barmode":"group","autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_3_0_modify_appearance_of_histogram_chart_after_creation_493
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_3_0_modify_appearance_of_histogram_chart_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_3_0_modify_appearance_of_histogram_chart_after_creation_ssim_map.png" 
  index=493
%}

<pre>
<div class="codeoutput"><pre>h = 
  Histogram with properties:

             Data: [100000x1 double]
           Values: [1x25 double]
          NumBins: 25
         BinEdges: [1x26 double]
         BinWidth: 0.2513
        BinLimits: [-3.1416 3.1416]
    Normalization: <span style='color:#A020F0'>'count'</span>
        FaceColor: <span style='color:#A020F0'>'auto'</span>
        EdgeColor: [0 0 0]

  Show all properties

</pre></div>
</pre>

Use `h` to access and modify properties of the histogram object after it is created. For example, show just the histogram outline by setting the `DisplayStyle` property of the histogram object.

<pre class="mcode">
h.DisplayStyle = <span style='color:#A020F0'>'stairs'</span>;
fig2plotly('TreatAs', 'polarhistogram')
</pre>

{% capture plot_3_1_modify_appearance_of_histogram_chart_after_creation_494 %}
  {% raw %}{"data":[{"name":"theta","r":[6365,7206,4668,2731,1966,1658,1647,1740,2252,3267,6406,6686,6322,6736,6456,3471,2254,1799,1601,1687,1953,2787,4760,7140,6442],"type":"barpolar","marker":{"line":{"width":0.5},"color":"rgba(0,0,0,0)"},"opacity":0.6,"visible":true,"theta":[-172.8,-158.4,-144,-129.6,-115.2,-100.8,-86.4,-72,-57.6,-43.2,-28.8,-14.4,1.24344978758018e-14,14.4,28.8,43.2,57.6,72,86.4,100.8,115.2,129.6,144,158.4,172.8],"width":[14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4,14.4],"showlegend":true},{"type":"barpolar"}],"layout":{"title":"","width":840,"height":630,"margin":{"b":0,"l":0,"r":0,"t":0,"pad":0},"barmode":"group","autosize":false,"hovermode":"closest","titlefont":{"color":"rgba(0,0,0,0)"},"showlegend":false,"annotations":[{"text":"","xref":"paper","yref":"paper","align":"center","xanchor":"center","yanchor":"bottom","showarrow":false}],"paper_bgcolor":"rgb(255,255,255)"},"frames":[]}{% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=plot_3_1_modify_appearance_of_histogram_chart_after_creation_494
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_3_1_modify_appearance_of_histogram_chart_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/polar-plots/polarhistogram/plot_3_1_modify_appearance_of_histogram_chart_after_creation_ssim_map.png" 
  index=494
%}



<!--------------------- EXAMPLE BREAK ------------------------->

