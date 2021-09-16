---
  description: The identity statistic leaves the data unchanged and then convert them with ggplotly.
  function: stat_identity
  permalink: /ggplot2/layers/Stats/stat_identity/
  layout: base
  language: ggplot2
  name: stat_identity
  reference: https://ggplot2.tidyverse.org/reference/
---





<pre class="mcode">
p <- ggplot(mtcars, aes(wt, mpg))
p <- p + stat_identity()

plotly::ggplotly(p)
</pre>


{% capture plot_301 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1108:dc52bd","x":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"ysrc":"nadhil:1108:169d9a","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1108:aa0e25","text":["wt:2.620mpg:21.0","wt:2.875mpg:21.0","wt:2.320mpg:22.8","wt:3.215mpg:21.4","wt:3.440mpg:18.7","wt:3.460mpg:18.1","wt:3.570mpg:14.3","wt:3.190mpg:24.4","wt:3.150mpg:22.8","wt:3.440mpg:19.2","wt:3.440mpg:17.8","wt:4.070mpg:16.4","wt:3.730mpg:17.3","wt:3.780mpg:15.2","wt:5.250mpg:10.4","wt:5.424mpg:10.4","wt:5.345mpg:14.7","wt:2.200mpg:32.4","wt:1.615mpg:30.4","wt:1.835mpg:33.9","wt:2.465mpg:21.5","wt:3.520mpg:15.5","wt:3.435mpg:15.2","wt:3.840mpg:13.3","wt:3.845mpg:19.2","wt:1.935mpg:27.3","wt:2.140mpg:26.0","wt:1.513mpg:30.4","wt:3.170mpg:15.8","wt:2.770mpg:19.7","wt:3.570mpg:15.0","wt:2.780mpg:21.4"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_301
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_identity/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_identity/example1_montage.png"
%}



