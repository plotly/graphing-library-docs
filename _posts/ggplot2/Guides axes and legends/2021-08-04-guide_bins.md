---
  description: Creates a binned version of guide_bins and then convert them with ggplotly.
  function: guide_bins
  permalink: /ggplot2/Guides axes and legends/guide_bins/
  layout: base
  language: ggplot2
  name: guide_bins
  reference: https://ggplot2.tidyverse.org/reference/
---



# Default guides in legend



<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()
  
plotly::ggplotly(p)
</pre>



{% capture plot_387 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:624:fa71bd","x":[160,160,108,258,360,225,360,146.7,140.8,167.6,167.6,275.8,275.8,275.8,472,460,440,78.7,75.7,71.1,120.1,318,304,350,400,79,120.3,95.1,351,145,301,121],"ysrc":"nadhil:624:c08b74","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"sizesrc":"nadhil:624:38f820","size":[13.3774167814401,13.3774167814401,9.28278619596424,13.3774167814401,16.2380591770534,13.3774167814401,18.5548631771774,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,16.2380591770534,16.2380591770534,16.2380591770534,18.5548631771774,18.5548631771774,18.5548631771774,9.28278619596424,9.28278619596424,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,18.5548631771774,16.2380591770534,9.28278619596424,9.28278619596424,13.3774167814401,20.5546900077363,16.2380591770534,22.0835511016647,13.3774167814401],"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:624:79fa41","text":["disp:160.0mpg:21.0hp:110","disp:160.0mpg:21.0hp:110","disp:108.0mpg:22.8hp:93","disp:258.0mpg:21.4hp:110","disp:360.0mpg:18.7hp:175","disp:225.0mpg:18.1hp:105","disp:360.0mpg:14.3hp:245","disp:146.7mpg:24.4hp:62","disp:140.8mpg:22.8hp:95","disp:167.6mpg:19.2hp:123","disp:167.6mpg:17.8hp:123","disp:275.8mpg:16.4hp:180","disp:275.8mpg:17.3hp:180","disp:275.8mpg:15.2hp:180","disp:472.0mpg:10.4hp:205","disp:460.0mpg:10.4hp:215","disp:440.0mpg:14.7hp:230","disp:78.7mpg:32.4hp:66","disp:75.7mpg:30.4hp:52","disp:71.1mpg:33.9hp:65","disp:120.1mpg:21.5hp:97","disp:318.0mpg:15.5hp:150","disp:304.0mpg:15.2hp:150","disp:350.0mpg:13.3hp:245","disp:400.0mpg:19.2hp:175","disp:79.0mpg:27.3hp:66","disp:120.3mpg:26.0hp:91","disp:95.1mpg:30.4hp:113","disp:351.0mpg:15.8hp:264","disp:145.0mpg:19.7hp:175","disp:301.0mpg:15.0hp:335","disp:121.0mpg:21.4hp:109"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[51.055,492.045],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"disp"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["100","200","300","400"],"tickvals":[100,200,300,400],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["100","200","300","400"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_387
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example1_montage.png"
%}



# Remove guides


<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()

p <-  p + guides(size = guide_bins(axis = FALSE))

plotly::ggplotly(p)
</pre>



{% capture plot_388 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:626:f78d9d","x":[160,160,108,258,360,225,360,146.7,140.8,167.6,167.6,275.8,275.8,275.8,472,460,440,78.7,75.7,71.1,120.1,318,304,350,400,79,120.3,95.1,351,145,301,121],"ysrc":"nadhil:626:db9f97","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"sizesrc":"nadhil:626:37c6f1","size":[13.3774167814401,13.3774167814401,9.28278619596424,13.3774167814401,16.2380591770534,13.3774167814401,18.5548631771774,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,16.2380591770534,16.2380591770534,16.2380591770534,18.5548631771774,18.5548631771774,18.5548631771774,9.28278619596424,9.28278619596424,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,18.5548631771774,16.2380591770534,9.28278619596424,9.28278619596424,13.3774167814401,20.5546900077363,16.2380591770534,22.0835511016647,13.3774167814401],"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:626:06ff80","text":["disp:160.0mpg:21.0hp:110","disp:160.0mpg:21.0hp:110","disp:108.0mpg:22.8hp:93","disp:258.0mpg:21.4hp:110","disp:360.0mpg:18.7hp:175","disp:225.0mpg:18.1hp:105","disp:360.0mpg:14.3hp:245","disp:146.7mpg:24.4hp:62","disp:140.8mpg:22.8hp:95","disp:167.6mpg:19.2hp:123","disp:167.6mpg:17.8hp:123","disp:275.8mpg:16.4hp:180","disp:275.8mpg:17.3hp:180","disp:275.8mpg:15.2hp:180","disp:472.0mpg:10.4hp:205","disp:460.0mpg:10.4hp:215","disp:440.0mpg:14.7hp:230","disp:78.7mpg:32.4hp:66","disp:75.7mpg:30.4hp:52","disp:71.1mpg:33.9hp:65","disp:120.1mpg:21.5hp:97","disp:318.0mpg:15.5hp:150","disp:304.0mpg:15.2hp:150","disp:350.0mpg:13.3hp:245","disp:400.0mpg:19.2hp:175","disp:79.0mpg:27.3hp:66","disp:120.3mpg:26.0hp:91","disp:95.1mpg:30.4hp:113","disp:351.0mpg:15.8hp:264","disp:145.0mpg:19.7hp:175","disp:301.0mpg:15.0hp:335","disp:121.0mpg:21.4hp:109"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[51.055,492.045],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"disp"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["100","200","300","400"],"tickvals":[100,200,300,400],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["100","200","300","400"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_388
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example2_montage.png"
%}


# Add limits to outside guides


<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()

p <-  p + guides(size = guide_bins(show.limits = TRUE))

plotly::ggplotly(p)
</pre>


{% capture plot_389 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:628:479a5f","x":[160,160,108,258,360,225,360,146.7,140.8,167.6,167.6,275.8,275.8,275.8,472,460,440,78.7,75.7,71.1,120.1,318,304,350,400,79,120.3,95.1,351,145,301,121],"ysrc":"nadhil:628:5d7bee","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"sizesrc":"nadhil:628:7cbe5c","size":[13.3774167814401,13.3774167814401,9.28278619596424,13.3774167814401,16.2380591770534,13.3774167814401,18.5548631771774,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,16.2380591770534,16.2380591770534,16.2380591770534,18.5548631771774,18.5548631771774,18.5548631771774,9.28278619596424,9.28278619596424,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,18.5548631771774,16.2380591770534,9.28278619596424,9.28278619596424,13.3774167814401,20.5546900077363,16.2380591770534,22.0835511016647,13.3774167814401],"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:628:b08c4b","text":["disp:160.0mpg:21.0hp:110","disp:160.0mpg:21.0hp:110","disp:108.0mpg:22.8hp:93","disp:258.0mpg:21.4hp:110","disp:360.0mpg:18.7hp:175","disp:225.0mpg:18.1hp:105","disp:360.0mpg:14.3hp:245","disp:146.7mpg:24.4hp:62","disp:140.8mpg:22.8hp:95","disp:167.6mpg:19.2hp:123","disp:167.6mpg:17.8hp:123","disp:275.8mpg:16.4hp:180","disp:275.8mpg:17.3hp:180","disp:275.8mpg:15.2hp:180","disp:472.0mpg:10.4hp:205","disp:460.0mpg:10.4hp:215","disp:440.0mpg:14.7hp:230","disp:78.7mpg:32.4hp:66","disp:75.7mpg:30.4hp:52","disp:71.1mpg:33.9hp:65","disp:120.1mpg:21.5hp:97","disp:318.0mpg:15.5hp:150","disp:304.0mpg:15.2hp:150","disp:350.0mpg:13.3hp:245","disp:400.0mpg:19.2hp:175","disp:79.0mpg:27.3hp:66","disp:120.3mpg:26.0hp:91","disp:95.1mpg:30.4hp:113","disp:351.0mpg:15.8hp:264","disp:145.0mpg:19.7hp:175","disp:301.0mpg:15.0hp:335","disp:121.0mpg:21.4hp:109"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[51.055,492.045],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"disp"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["100","200","300","400"],"tickvals":[100,200,300,400],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["100","200","300","400"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_389
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example3_montage.png"
%}


# Add arrow to outside guides

<pre class="mcode">
p <- ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp)) +
  scale_size_binned()

p <-    
 p + guides(size = guide_bins(
  axis.arrow = arrow(length = unit(1.5, 'mm'), ends = 'both')
))

plotly::ggplotly(p)
</pre>



{% capture plot_390 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:630:cedaee","x":[160,160,108,258,360,225,360,146.7,140.8,167.6,167.6,275.8,275.8,275.8,472,460,440,78.7,75.7,71.1,120.1,318,304,350,400,79,120.3,95.1,351,145,301,121],"ysrc":"nadhil:630:a6a378","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"sizesrc":"nadhil:630:a02f11","size":[13.3774167814401,13.3774167814401,9.28278619596424,13.3774167814401,16.2380591770534,13.3774167814401,18.5548631771774,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,16.2380591770534,16.2380591770534,16.2380591770534,18.5548631771774,18.5548631771774,18.5548631771774,9.28278619596424,9.28278619596424,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,18.5548631771774,16.2380591770534,9.28278619596424,9.28278619596424,13.3774167814401,20.5546900077363,16.2380591770534,22.0835511016647,13.3774167814401],"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:630:7bcd33","text":["disp:160.0mpg:21.0hp:110","disp:160.0mpg:21.0hp:110","disp:108.0mpg:22.8hp:93","disp:258.0mpg:21.4hp:110","disp:360.0mpg:18.7hp:175","disp:225.0mpg:18.1hp:105","disp:360.0mpg:14.3hp:245","disp:146.7mpg:24.4hp:62","disp:140.8mpg:22.8hp:95","disp:167.6mpg:19.2hp:123","disp:167.6mpg:17.8hp:123","disp:275.8mpg:16.4hp:180","disp:275.8mpg:17.3hp:180","disp:275.8mpg:15.2hp:180","disp:472.0mpg:10.4hp:205","disp:460.0mpg:10.4hp:215","disp:440.0mpg:14.7hp:230","disp:78.7mpg:32.4hp:66","disp:75.7mpg:30.4hp:52","disp:71.1mpg:33.9hp:65","disp:120.1mpg:21.5hp:97","disp:318.0mpg:15.5hp:150","disp:304.0mpg:15.2hp:150","disp:350.0mpg:13.3hp:245","disp:400.0mpg:19.2hp:175","disp:79.0mpg:27.3hp:66","disp:120.3mpg:26.0hp:91","disp:95.1mpg:30.4hp:113","disp:351.0mpg:15.8hp:264","disp:145.0mpg:19.7hp:175","disp:301.0mpg:15.0hp:335","disp:121.0mpg:21.4hp:109"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[51.055,492.045],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"disp"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["100","200","300","400"],"tickvals":[100,200,300,400],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["100","200","300","400"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_390
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example4_montage.png"
%}


# Guides are merged together if possible


<pre class="mcode">
p <-    
 ggplot(mtcars) +
  geom_point(aes(disp, mpg, size = hp, colour = hp)) +
  scale_size_binned() +
  scale_colour_binned(guide = "bins")
  
plotly::ggplotly(p)
</pre>


{% capture plot_391 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:632:6dd14f","x":[160,160,108,258,360,225,360,146.7,140.8,167.6,167.6,275.8,275.8,275.8,472,460,440,78.7,75.7,71.1,120.1,318,304,350,400,79,120.3,95.1,351,145,301,121],"ysrc":"nadhil:632:610d34","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"width":1.88976377952756,"colorsrc":"nadhil:632:45160f","color":["rgba(35,74,109,1)","rgba(35,74,109,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(46,97,140,1)","rgba(35,74,109,1)","rgba(58,121,172,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(35,74,109,1)","rgba(46,97,140,1)","rgba(46,97,140,1)","rgba(46,97,140,1)","rgba(58,121,172,1)","rgba(58,121,172,1)","rgba(58,121,172,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(35,74,109,1)","rgba(58,121,172,1)","rgba(46,97,140,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(71,146,206,1)","rgba(46,97,140,1)","rgba(81,168,235,1)","rgba(35,74,109,1)"]},"symbol":"circle","opacity":1,"sizesrc":"nadhil:632:843f76","size":[13.3774167814401,13.3774167814401,9.28278619596424,13.3774167814401,16.2380591770534,13.3774167814401,18.5548631771774,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,16.2380591770534,16.2380591770534,16.2380591770534,18.5548631771774,18.5548631771774,18.5548631771774,9.28278619596424,9.28278619596424,9.28278619596424,9.28278619596424,13.3774167814401,13.3774167814401,18.5548631771774,16.2380591770534,9.28278619596424,9.28278619596424,13.3774167814401,20.5546900077363,16.2380591770534,22.0835511016647,13.3774167814401],"colorsrc":"nadhil:632:91a684","color":["rgba(35,74,109,1)","rgba(35,74,109,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(46,97,140,1)","rgba(35,74,109,1)","rgba(58,121,172,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(35,74,109,1)","rgba(46,97,140,1)","rgba(46,97,140,1)","rgba(46,97,140,1)","rgba(58,121,172,1)","rgba(58,121,172,1)","rgba(58,121,172,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(35,74,109,1)","rgba(58,121,172,1)","rgba(46,97,140,1)","rgba(24,53,81,1)","rgba(24,53,81,1)","rgba(35,74,109,1)","rgba(71,146,206,1)","rgba(46,97,140,1)","rgba(81,168,235,1)","rgba(35,74,109,1)"],"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:632:41153e","text":["disp:160.0mpg:21.0hp:110hp:110","disp:160.0mpg:21.0hp:110hp:110","disp:108.0mpg:22.8hp:93hp:93","disp:258.0mpg:21.4hp:110hp:110","disp:360.0mpg:18.7hp:175hp:175","disp:225.0mpg:18.1hp:105hp:105","disp:360.0mpg:14.3hp:245hp:245","disp:146.7mpg:24.4hp:62hp:62","disp:140.8mpg:22.8hp:95hp:95","disp:167.6mpg:19.2hp:123hp:123","disp:167.6mpg:17.8hp:123hp:123","disp:275.8mpg:16.4hp:180hp:180","disp:275.8mpg:17.3hp:180hp:180","disp:275.8mpg:15.2hp:180hp:180","disp:472.0mpg:10.4hp:205hp:205","disp:460.0mpg:10.4hp:215hp:215","disp:440.0mpg:14.7hp:230hp:230","disp:78.7mpg:32.4hp:66hp:66","disp:75.7mpg:30.4hp:52hp:52","disp:71.1mpg:33.9hp:65hp:65","disp:120.1mpg:21.5hp:97hp:97","disp:318.0mpg:15.5hp:150hp:150","disp:304.0mpg:15.2hp:150hp:150","disp:350.0mpg:13.3hp:245hp:245","disp:400.0mpg:19.2hp:175hp:175","disp:79.0mpg:27.3hp:66hp:66","disp:120.3mpg:26.0hp:91hp:91","disp:95.1mpg:30.4hp:113hp:113","disp:351.0mpg:15.8hp:264hp:264","disp:145.0mpg:19.7hp:175hp:175","disp:301.0mpg:15.0hp:335hp:335","disp:121.0mpg:21.4hp:109hp:109"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[51.055,492.045],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"disp"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["100","200","300","400"],"tickvals":[100,200,300,400],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["100","200","300","400"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_391
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example5_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Guides%20axes%20and%20legends/guide_bins/example5_montage.png"
%}



