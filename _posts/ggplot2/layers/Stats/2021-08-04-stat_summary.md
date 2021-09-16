---
  description: Summarise y values at unique/binned x and then convert them with ggplotly.
  function: stat_summary
  permalink: /ggplot2/layers/Stats/stat_summary/
  layout: base
  language: ggplot2
  name: stat_summary
  reference: https://ggplot2.tidyverse.org/reference/
---


# Default summary plot


<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun.data = "mean_cl_boot", colour = "red", size = 2)

plotly::ggplotly(p)
</pre>



{% capture plot_317 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1110:01a5a9","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1110:d85333","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1110:324cd6","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"line":{"color":"transparent"},"mode":"lines+markers","type":"scatter","xsrc":"nadhil:1110:2d26a3","x":[4,6,8],"ysrc":"nadhil:1110:72e0bc","y":[26.6636363636364,19.7428571428571,15.1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(255,0,0,1)","width":3.77952755905512},"size":7.55905511811024,"color":"rgba(255,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(255,0,0,1)","width":0,"arraysrc":"nadhil:1110:3ea4ad","array":[2.53659090909091,0.957142857142856,1.10160714285714],"symmetric":false,"arrayminussrc":"nadhil:1110:06f164","arrayminus":[2.355,1,1.41517857142857]},"hoveron":"points","opacity":1,"textsrc":"nadhil:1110:44bc70","text":["cyl:4mpg:26.66364","cyl:6mpg:19.74286","cyl:8mpg:15.10000"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_317
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example1_montage.png"
%}

Orientation follows the discrete axis

<pre class="mcode">
p <-    
 ggplot(mtcars, aes(mpg, factor(cyl))) +
  geom_point() +
  stat_summary(fun.data = "mean_cl_boot", colour = "red", size = 2)
  
plotly::ggplotly(p)
</pre>


{% capture plot_318 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1112:4fdfdb","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:1112:4dbb38","y":[2,2,1,2,3,2,3,1,1,2,2,3,3,3,3,3,3,1,1,1,1,3,3,3,3,1,1,1,3,2,3,1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1112:b5bd0c","text":["mpg:21.0factor(cyl):6","mpg:21.0factor(cyl):6","mpg:22.8factor(cyl):4","mpg:21.4factor(cyl):6","mpg:18.7factor(cyl):8","mpg:18.1factor(cyl):6","mpg:14.3factor(cyl):8","mpg:24.4factor(cyl):4","mpg:22.8factor(cyl):4","mpg:19.2factor(cyl):6","mpg:17.8factor(cyl):6","mpg:16.4factor(cyl):8","mpg:17.3factor(cyl):8","mpg:15.2factor(cyl):8","mpg:10.4factor(cyl):8","mpg:10.4factor(cyl):8","mpg:14.7factor(cyl):8","mpg:32.4factor(cyl):4","mpg:30.4factor(cyl):4","mpg:33.9factor(cyl):4","mpg:21.5factor(cyl):4","mpg:15.5factor(cyl):8","mpg:15.2factor(cyl):8","mpg:13.3factor(cyl):8","mpg:19.2factor(cyl):8","mpg:27.3factor(cyl):4","mpg:26.0factor(cyl):4","mpg:30.4factor(cyl):4","mpg:15.8factor(cyl):8","mpg:19.7factor(cyl):6","mpg:15.0factor(cyl):8","mpg:21.4factor(cyl):4"],"hoverinfo":"text","showlegend":false},{"line":{"color":"transparent"},"mode":"lines+markers","type":"scatter","xsrc":"nadhil:1112:e6169e","x":[26.6636363636364,19.7428571428571,15.1],"ysrc":"nadhil:1112:23a812","y":[1,2,3],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(255,0,0,1)","width":3.77952755905512},"size":7.55905511811024,"color":"rgba(255,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_x":{"type":"data","color":"rgba(255,0,0,1)","width":0,"arraysrc":"nadhil:1112:03354e","array":[2.74590909090909,0.971428571428572,1.21482142857143],"symmetric":false,"arrayminussrc":"nadhil:1112:39383a","arrayminus":[2.64568181818182,0.985714285714284,1.28607142857143]},"hoveron":"points","opacity":1,"textsrc":"nadhil:1112:deee6e","text":["mpg:26.66364factor(cyl):4","mpg:19.74286factor(cyl):6","mpg:15.10000factor(cyl):8"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.4,3.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(cyl)"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","6","8"],"tickvals":[1,2,3],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","6","8"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_318
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example2_montage.png"
%}


# Median summary

You can supply individual functions to summarise the value at each `x`.


<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun = "median", colour = "red", size = 2, geom = "point")

plotly::ggplotly(p)
</pre>


{% capture plot_319 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1114:2b3598","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1114:1e9f35","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1114:1886cf","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"mode":"markers","type":"scatter","xsrc":"nadhil:1114:6946ab","x":[4,6,8],"ysrc":"nadhil:1114:7f4828","y":[26,19.7,15.2],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(255,0,0,1)","width":1.88976377952756},"size":7.55905511811024,"color":"rgba(255,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1114:20b066","text":["cyl:4mpg:26.0","cyl:6mpg:19.7","cyl:8mpg:15.2"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_319
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example3_montage.png"
%}


# Mean summary


<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun = "mean", colour = "red", size = 2, geom = "point")

plotly::ggplotly(p)
</pre>


{% capture plot_320 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1116:050095","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1116:a5937a","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1116:c55b8f","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"mode":"markers","type":"scatter","xsrc":"nadhil:1116:174f85","x":[4,6,8],"ysrc":"nadhil:1116:42c774","y":[26.6636363636364,19.7428571428571,15.1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(255,0,0,1)","width":1.88976377952756},"size":7.55905511811024,"color":"rgba(255,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1116:6d47fa","text":["cyl:4mpg:26.66364","cyl:6mpg:19.74286","cyl:8mpg:15.10000"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_320
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example4_montage.png"
%}


# Adding lines

<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + aes(colour = factor(vs)) + stat_summary(fun = mean, geom="line")

plotly::ggplotly(p)
</pre>



{% capture plot_321 %}
  {% raw %}
    {"data":[{"mode":"markers","name":"0","type":"scatter","xsrc":"nadhil:1118:5cc6f2","x":[6,6,8,8,8,8,8,8,8,8,8,8,8,8,4,8,6,8],"ysrc":"nadhil:1118:563318","y":[21,21,18.7,14.3,16.4,17.3,15.2,10.4,10.4,14.7,15.5,15.2,13.3,19.2,26,15.8,19.7,15],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(248,118,109,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(248,118,109,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1118:8adb2b","text":["factor(vs):0cyl:6mpg:21.0","factor(vs):0cyl:6mpg:21.0","factor(vs):0cyl:8mpg:18.7","factor(vs):0cyl:8mpg:14.3","factor(vs):0cyl:8mpg:16.4","factor(vs):0cyl:8mpg:17.3","factor(vs):0cyl:8mpg:15.2","factor(vs):0cyl:8mpg:10.4","factor(vs):0cyl:8mpg:10.4","factor(vs):0cyl:8mpg:14.7","factor(vs):0cyl:8mpg:15.5","factor(vs):0cyl:8mpg:15.2","factor(vs):0cyl:8mpg:13.3","factor(vs):0cyl:8mpg:19.2","factor(vs):0cyl:4mpg:26.0","factor(vs):0cyl:8mpg:15.8","factor(vs):0cyl:6mpg:19.7","factor(vs):0cyl:8mpg:15.0"],"hoverinfo":"text","showlegend":true,"legendgroup":"0"},{"mode":"markers","name":"1","type":"scatter","xsrc":"nadhil:1118:624246","x":[4,6,6,4,4,6,6,4,4,4,4,4,4,4],"ysrc":"nadhil:1118:f407c4","y":[22.8,21.4,18.1,24.4,22.8,19.2,17.8,32.4,30.4,33.9,21.5,27.3,30.4,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,191,196,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,191,196,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1118:23ca04","text":["factor(vs):1cyl:4mpg:22.8","factor(vs):1cyl:6mpg:21.4","factor(vs):1cyl:6mpg:18.1","factor(vs):1cyl:4mpg:24.4","factor(vs):1cyl:4mpg:22.8","factor(vs):1cyl:6mpg:19.2","factor(vs):1cyl:6mpg:17.8","factor(vs):1cyl:4mpg:32.4","factor(vs):1cyl:4mpg:30.4","factor(vs):1cyl:4mpg:33.9","factor(vs):1cyl:4mpg:21.5","factor(vs):1cyl:4mpg:27.3","factor(vs):1cyl:4mpg:30.4","factor(vs):1cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":true,"legendgroup":"1"},{"line":{"dash":"solid","color":"rgba(248,118,109,1)","width":1.88976377952756},"mode":"lines","name":"0","type":"scatter","xsrc":"nadhil:1118:7a5550","x":[4,6,8],"ysrc":"nadhil:1118:f9f23d","y":[26,20.5666666666667,15.1],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:1118:c33bbf","text":["factor(vs):0cyl:4mpg:26","factor(vs):0cyl:6mpg:NA","factor(vs):0cyl:8mpg:NA"],"hoverinfo":"text","showlegend":false,"legendgroup":"0"},{"line":{"dash":"solid","color":"rgba(0,191,196,1)","width":1.88976377952756},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:1118:e95198","x":[4,6],"ysrc":"nadhil:1118:8c9731","y":[26.73,19.125],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:1118:37db31","text":["factor(vs):1cyl:4mpg:NA","factor(vs):1cyl:6mpg:NA"],"hoverinfo":"text","showlegend":false,"legendgroup":"1"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(vs)","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_321
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example5_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example5_montage.png"
%}




<pre class="mcode">
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_summary(fun = mean, fun.min = min, fun.max = max, colour = "red")

plotly::ggplotly(p)
</pre>


{% capture plot_322 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1120:ec9c20","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1120:e9b99d","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1120:3eac24","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"line":{"color":"transparent"},"mode":"lines+markers","type":"scatter","xsrc":"nadhil:1120:1eb3d5","x":[4,6,8],"ysrc":"nadhil:1120:06e314","y":[26.6636363636364,19.7428571428571,15.1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(255,0,0,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(255,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(255,0,0,1)","width":0,"arraysrc":"nadhil:1120:40caf5","array":[7.23636363636363,1.65714285714285,4.1],"symmetric":false,"arrayminussrc":"nadhil:1120:d372b2","arrayminus":[5.26363636363637,1.94285714285714,4.7]},"hoveron":"points","opacity":1,"textsrc":"nadhil:1120:837474","text":["cyl:4mpg:26.66364","cyl:6mpg:19.74286","cyl:8mpg:15.10000"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_322
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example6_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example6_montage.png"
%}

# Default bar plot


<pre class="mcode">
d <- ggplot(diamonds, aes(cut))
p <-  d + geom_bar()

plotly::ggplotly(p)
</pre>

{% capture plot_323 %}
  {% raw %}
    {"data":[{"type":"bar","xsrc":"nadhil:1122:8a34f8","x":[1,2,3,4,5],"ysrc":"nadhil:1122:378535","y":[1610,4906,12082,13791,21551],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(89,89,89,1)","autocolorscale":false},"basesrc":"nadhil:1122:5b5d88","base":[0,0,0,0,0],"textsrc":"nadhil:1122:8c6bdd","text":["count:1610cut:Fair","count:4906cut:Good","count:12082cut:VeryGood","count:13791cut:Premium","count:21551cut:Ideal"],"widthsrc":"nadhil:1122:ed8f29","width":[0.9,0.9,0.9,0.9,0.9],"hoverinfo":"text","showlegend":false,"orientation":"v"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,5.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cut"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["Fair","Good","VeryGood","Premium","Ideal"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["Fair","Good","VeryGood","Premium","Ideal"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-1077.55,22628.55],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","5000","10000","15000","20000"],"tickvals":[0,5000,10000,15000,20000],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","5000","10000","15000","20000"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":54.7945205479452,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_323
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example7_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example7_montage.png"
%}


# Bar plot summary


<pre class="mcode">
d <- ggplot(diamonds, aes(cut))
p <-  d + stat_summary(aes(y = price), fun = "mean", geom = "bar")

plotly::ggplotly(p)
</pre>


{% capture plot_324 %}
  {% raw %}
    {"data":[{"type":"bar","xsrc":"nadhil:1124:c146a7","x":[1,2,3,4,5],"ysrc":"nadhil:1124:ad26f5","y":[4358.75776397516,3928.86445169181,3981.75989074656,4584.25770429991,3457.5419702102],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(89,89,89,1)","autocolorscale":false},"basesrc":"nadhil:1124:faca21","base":[0,0,0,0,0],"textsrc":"nadhil:1124:8b87f9","text":["cut:Fairprice:4358.758","cut:Goodprice:3928.864","cut:VeryGoodprice:3981.760","cut:Premiumprice:4584.258","cut:Idealprice:3457.542"],"widthsrc":"nadhil:1124:ba64ef","width":[0.9,0.9,0.9,0.9,0.9],"hoverinfo":"text","showlegend":false,"orientation":"v"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,5.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cut"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["Fair","Good","VeryGood","Premium","Ideal"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["Fair","Good","VeryGood","Premium","Ideal"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-229.212885214995,4813.4705895149],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"price"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","1000","2000","3000","4000"],"tickvals":[0,1000,2000,3000,4000],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","1000","2000","3000","4000"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_324
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example8_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example8_montage.png"
%}


# Summary orientation


<pre class="mcode">
p <-    
 ggplot(diamonds, aes(carat, price)) +
  stat_summary_bin(fun = "mean", geom = "bar", orientation = 'y')
  
plotly::ggplotly(p)
</pre>



{% capture plot_325 %}
  {% raw %}
    {"data":[{"type":"bar","xsrc":"nadhil:1126:615c97","x":[0.15120764552563,0.184431578153289,0.265002874664622,0.326138173302108,0.372202149895491,0.425077519379845,0.480757198720228,0.515907342657343,0.546185707783341,0.568680096211666,0.58145732130465,0.603901245551601,0.629736040609137,0.659373368146214,0.675382205513784,0.706469696969697,0.718752079866888,0.740697463768116,0.772939001848429,0.818735362997658,0.861693548387097,0.871507936507936,0.889768115942029,0.904235294117647,0.936030405405405,0.948778501628665,0.98080223880597,1.00379790940767,0.997454545454545,1.03688715953307,1.05266990291262],"ysrc":"nadhil:1126:564bba","y":[616.566666666667,616.566666666667,616.566666666667,616.566666666667,616.566666666667,616.566666666668,616.566666666667,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666668,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666666,616.566666666669,616.566666666666,616.566666666666,616.566666666666,616.566789980003],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(89,89,89,1)","autocolorscale":false},"basesrc":"nadhil:1126:5c668c","base":[-6.16566666167273e-05,616.56660501,1233.13327167667,1849.69993834333,2466.26660501,3082.83327167667,3699.39993834333,4315.96660501,4932.53327167667,5549.09993834333,6165.66660501,6782.23327167667,7398.79993834333,8015.36660501,8631.93327167667,9248.49993834334,9865.06660501,10481.6332716767,11098.1999383433,11714.76660501,12331.3332716767,12947.8999383433,13564.46660501,14181.0332716767,14797.5999383433,15414.16660501,16030.7332716767,16647.2999383433,17263.86660501,17880.4332716767,18496.9999383433],"textsrc":"nadhil:1126:57f960","text":["carat:0.3024153price:616.5667","carat:0.3688632price:616.5667","carat:0.5300057price:616.5667","carat:0.6522763price:616.5667","carat:0.7444043price:616.5667","carat:0.8501550price:616.5667","carat:0.9615144price:616.5667","carat:1.0318147price:616.5667","carat:1.0923714price:616.5667","carat:1.1373602price:616.5667","carat:1.1629146price:616.5667","carat:1.2078025price:616.5667","carat:1.2594721price:616.5667","carat:1.3187467price:616.5667","carat:1.3507644price:616.5667","carat:1.4129394price:616.5667","carat:1.4375042price:616.5667","carat:1.4813949price:616.5667","carat:1.5458780price:616.5667","carat:1.6374707price:616.5667","carat:1.7233871price:616.5667","carat:1.7430159price:616.5667","carat:1.7795362price:616.5667","carat:1.8084706price:616.5667","carat:1.8720608price:616.5667","carat:1.8975570price:616.5667","carat:1.9616045price:616.5667","carat:2.0075958price:616.5667","carat:1.9949091price:616.5667","carat:2.0737743price:616.5667","carat:2.1053398price:616.5668"],"widthsrc":"nadhil:1126:3b19c9","width":[0.30241529105126,0.368863156306578,0.530005749329245,0.652276346604215,0.744404299790982,0.85015503875969,0.961514397440455,1.03181468531469,1.09237141556668,1.13736019242333,1.1629146426093,1.2078024911032,1.25947208121827,1.31874673629243,1.35076441102757,1.41293939393939,1.43750415973378,1.48139492753623,1.54587800369686,1.63747072599532,1.72338709677419,1.74301587301587,1.77953623188406,1.80847058823529,1.87206081081081,1.89755700325733,1.96160447761194,2.00759581881533,1.99490909090909,2.07377431906615,2.10533980582524],"hoverinfo":"text","showlegend":false,"orientation":"v"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[-0.105266990291262,2.21060679611651],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"carat"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.0","0.5","1.0","1.5","2.0"],"tickvals":[0,0.5,1,1.5,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.0","0.5","1.0","1.5","2.0"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-955.678401155667,20069.2450678223],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"price"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","5000","10000","15000","20000"],"tickvals":[0,5000,10000,15000,20000],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","5000","10000","15000","20000"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":54.7945205479452,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_325
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example9_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example9_montage.png"
%}



# Zooming the plot

Don't use `ylim` to zoom into a summary plot - this throws the data away, use `coord_cartesian` instead.

Default plot:

<pre class="mcode">
p <- ggplot(mtcars, aes(cyl, mpg)) +
  stat_summary(fun = "mean", geom = "point")
  
plotly::ggplotly(p)
</pre>



{% capture plot_326 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1128:bfe5a1","x":[4,6,8],"ysrc":"nadhil:1128:4b23a8","y":[26.6636363636364,19.7428571428571,15.1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1128:37c6e2","text":["cyl:4mpg:26.66364","cyl:6mpg:19.74286","cyl:8mpg:15.10000"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[14.5218181818182,27.2418181818182],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["15","18","21","24","27"],"tickvals":[15,18,21,24,27],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["15","18","21","24","27"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_326
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example10_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example10_montage.png"
%}




<pre class="mcode">
p <- ggplot(mtcars, aes(cyl, mpg)) +
  stat_summary(fun = "mean", geom = "point")
p <-  p + ylim(15, 30)

plotly::ggplotly(p)

## Warning: Removed 9 rows containing non-finite values (stat_summary).
</pre>


{% capture plot_327 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1130:694ca5","x":[4,6,8],"ysrc":"nadhil:1130:917f4a","y":[23.7428571428571,19.7428571428571,16.4777777777778],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1130:753694","text":["cyl:4mpg:23.74286","cyl:6mpg:19.74286","cyl:8mpg:16.47778"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[14.25,30.75],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["15","20","25","30"],"tickvals":[15,20,25,30],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["15","20","25","30"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_327
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example11_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example11_montage.png"
%}



Using `coord_cartesian` keeps all the data.

<pre class="mcode">
p <- ggplot(mtcars, aes(cyl, mpg)) +
  stat_summary(fun = "mean", geom = "point")
p <-  p + coord_cartesian(ylim = c(15, 30))

plotly::ggplotly(p)
</pre>


{% capture plot_328 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1132:2fbcc3","x":[4,6,8],"ysrc":"nadhil:1132:ec9f2b","y":[26.6636363636364,19.7428571428571,15.1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1132:f720cc","text":["cyl:4mpg:26.66364","cyl:6mpg:19.74286","cyl:8mpg:15.10000"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.8,8.2],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[14.25,30.75],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["15","20","25","30"],"tickvals":[15,20,25,30],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["15","20","25","30"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_328
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example12_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example12_montage.png"
%}


# Useful summary functions from Hmisc package 


<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("mean_cl_boot", mapping = aes(group = cyl))

plotly::ggplotly(p)
</pre>



{% capture plot_329 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1134:a2a196","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1134:807db5","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1134:ebee6f","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:4mpg:26.66364cyl:4","type":"scatter","xsrc":"nadhil:1134:162f77","x":[3.9,3.9,4.1,4.1,3.9],"ysrc":"nadhil:1134:c9baab","y":[24.2543181818182,29.3459090909091,29.3459090909091,24.2543181818182,24.2543181818182],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:6mpg:19.74286cyl:6","type":"scatter","xsrc":"nadhil:1134:6fc791","x":[5.9,5.9,6.1,6.1,5.9],"ysrc":"nadhil:1134:41e40f","y":[18.7714285714286,20.7,20.7,18.7714285714286,18.7714285714286],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:8mpg:15.10000cyl:8","type":"scatter","xsrc":"nadhil:1134:2a9080","x":[7.9,7.9,8.1,8.1,7.9],"ysrc":"nadhil:1134:3358e4","y":[13.6928571428571,16.35,16.35,13.6928571428571,13.6928571428571],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"line":{"dash":"solid","color":"rgba(255,0,0,1)","width":null},"mode":"lines","type":"scatter","xsrc":"nadhil:1134:b9827d","x":[3.9,4.1,null,5.9,6.1,null,7.9,8.1],"ysrc":"nadhil:1134:b9de16","y":[26.6636363636364,26.6636363636364,null,19.7428571428571,19.7428571428571,null,15.1,15.1],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:1134:5e02c5","text":["cyl:4mpg:26.66364cyl:4","cyl:4mpg:26.66364cyl:4",null,"cyl:6mpg:19.74286cyl:6","cyl:6mpg:19.74286cyl:6",null,"cyl:8mpg:15.10000cyl:8","cyl:8mpg:15.10000cyl:8"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.69,8.31],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_329
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example13_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example13_montage.png"
%}



<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("mean_sdl", mapping = aes(group = cyl))

plotly::ggplotly(p)
</pre>


{% capture plot_330 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1136:e96a2f","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1136:474479","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1136:38d66a","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:4mpg:26.66364cyl:4","type":"scatter","xsrc":"nadhil:1136:53804e","x":[3.9,3.9,4.1,4.1,3.9],"ysrc":"nadhil:1136:f03ed3","y":[17.6439810587934,35.6832916684793,35.6832916684793,17.6439810587934,17.6439810587934],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:6mpg:19.74286cyl:6","type":"scatter","xsrc":"nadhil:1136:e05ffb","x":[5.9,5.9,6.1,6.1,5.9],"ysrc":"nadhil:1136:634be7","y":[16.8357230607363,22.649991224978,22.649991224978,16.8357230607363,16.8357230607363],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:8mpg:15.10000cyl:8","type":"scatter","xsrc":"nadhil:1136:d4c6f2","x":[7.9,7.9,8.1,8.1,7.9],"ysrc":"nadhil:1136:45bbc6","y":[9.97990384705672,20.2200961529433,20.2200961529433,9.97990384705672,9.97990384705672],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"line":{"dash":"solid","color":"rgba(255,0,0,1)","width":null},"mode":"lines","type":"scatter","xsrc":"nadhil:1136:86ee1e","x":[3.9,4.1,null,5.9,6.1,null,7.9,8.1],"ysrc":"nadhil:1136:f593f0","y":[26.6636363636364,26.6636363636364,null,19.7428571428571,19.7428571428571,null,15.1,15.1],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:1136:fb42cf","text":["cyl:4mpg:26.66364cyl:4","cyl:4mpg:26.66364cyl:4",null,"cyl:6mpg:19.74286cyl:6","cyl:6mpg:19.74286cyl:6",null,"cyl:8mpg:15.10000cyl:8","cyl:8mpg:15.10000cyl:8"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.69,8.31],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[8.69473445598559,36.9684610595505],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","20","30"],"tickvals":[10,20,30],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","20","30"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_330
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example14_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example14_montage.png"
%}







<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("mean_sdl", fun.args = list(mult = 1), mapping = aes(group = cyl))

plotly::ggplotly(p)
</pre>



{% capture plot_331 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1138:73003f","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1138:288c9d","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1138:6b05fc","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:4mpg:26.66364cyl:4","type":"scatter","xsrc":"nadhil:1138:484b18","x":[3.9,3.9,4.1,4.1,3.9],"ysrc":"nadhil:1138:84954b","y":[22.1538087112149,31.1734640160578,31.1734640160578,22.1538087112149,22.1538087112149],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:6mpg:19.74286cyl:6","type":"scatter","xsrc":"nadhil:1138:2083a8","x":[5.9,5.9,6.1,6.1,5.9],"ysrc":"nadhil:1138:858f52","y":[18.2892901017967,21.1964241839176,21.1964241839176,18.2892901017967,18.2892901017967],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:8mpg:15.10000cyl:8","type":"scatter","xsrc":"nadhil:1138:e92703","x":[7.9,7.9,8.1,8.1,7.9],"ysrc":"nadhil:1138:4047c8","y":[12.5399519235284,17.6600480764716,17.6600480764716,12.5399519235284,12.5399519235284],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"line":{"dash":"solid","color":"rgba(255,0,0,1)","width":null},"mode":"lines","type":"scatter","xsrc":"nadhil:1138:58ce99","x":[3.9,4.1,null,5.9,6.1,null,7.9,8.1],"ysrc":"nadhil:1138:d33bca","y":[26.6636363636364,26.6636363636364,null,19.7428571428571,19.7428571428571,null,15.1,15.1],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:1138:d8569b","text":["cyl:4mpg:26.66364cyl:4","cyl:4mpg:26.66364cyl:4",null,"cyl:6mpg:19.74286cyl:6","cyl:6mpg:19.74286cyl:6",null,"cyl:8mpg:15.10000cyl:8","cyl:8mpg:15.10000cyl:8"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.69,8.31],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_331
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example15_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example15_montage.png"
%}




<pre class="mcode">
stat_sum_df <- function(fun, geom="crossbar", ...) {
  stat_summary(fun.data = fun, colour = "red", geom = geom, width = 0.2, ...)
}
d <- ggplot(mtcars, aes(cyl, mpg)) + geom_point()
p <-  d + stat_sum_df("median_hilow", mapping = aes(group = cyl))

plotly::ggplotly(p)
</pre>



{% capture plot_332 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1140:db93ec","x":[6,6,4,6,8,6,8,4,4,6,6,8,8,8,8,8,8,4,4,4,4,8,8,8,8,4,4,4,8,6,8,4],"ysrc":"nadhil:1140:754ad9","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1140:b50d2d","text":["cyl:6mpg:21.0","cyl:6mpg:21.0","cyl:4mpg:22.8","cyl:6mpg:21.4","cyl:8mpg:18.7","cyl:6mpg:18.1","cyl:8mpg:14.3","cyl:4mpg:24.4","cyl:4mpg:22.8","cyl:6mpg:19.2","cyl:6mpg:17.8","cyl:8mpg:16.4","cyl:8mpg:17.3","cyl:8mpg:15.2","cyl:8mpg:10.4","cyl:8mpg:10.4","cyl:8mpg:14.7","cyl:4mpg:32.4","cyl:4mpg:30.4","cyl:4mpg:33.9","cyl:4mpg:21.5","cyl:8mpg:15.5","cyl:8mpg:15.2","cyl:8mpg:13.3","cyl:8mpg:19.2","cyl:4mpg:27.3","cyl:4mpg:26.0","cyl:4mpg:30.4","cyl:8mpg:15.8","cyl:6mpg:19.7","cyl:8mpg:15.0","cyl:4mpg:21.4"],"hoverinfo":"text","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:4mpg:26.0cyl:4","type":"scatter","xsrc":"nadhil:1140:441b3a","x":[3.9,3.9,4.1,4.1,3.9],"ysrc":"nadhil:1140:c95228","y":[21.425,33.525,33.525,21.425,21.425],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:6mpg:19.7cyl:6","type":"scatter","xsrc":"nadhil:1140:22162b","x":[5.9,5.9,6.1,6.1,5.9],"ysrc":"nadhil:1140:669af3","y":[17.845,21.34,21.34,17.845,17.845],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"rgba(255,0,0,1)","width":1.88976377952756},"mode":"lines","text":"cyl:8mpg:15.2cyl:8","type":"scatter","xsrc":"nadhil:1140:5549d0","x":[7.9,7.9,8.1,8.1,7.9],"ysrc":"nadhil:1140:8de81a","y":[10.4,19.0375,19.0375,10.4,10.4],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false},{"line":{"dash":"solid","color":"rgba(255,0,0,1)","width":null},"mode":"lines","type":"scatter","xsrc":"nadhil:1140:7d73de","x":[3.9,4.1,null,5.9,6.1,null,7.9,8.1],"ysrc":"nadhil:1140:40ddd9","y":[26,26,null,19.7,19.7,null,15.2,15.2],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:1140:38f6dc","text":["cyl:4mpg:26.0cyl:4","cyl:4mpg:26.0cyl:4",null,"cyl:6mpg:19.7cyl:6","cyl:6mpg:19.7cyl:6",null,"cyl:8mpg:15.2cyl:8","cyl:8mpg:15.2cyl:8"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[3.69,8.31],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cyl"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","5","6","7","8"],"tickvals":[4,5,6,7,8],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","5","6","7","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_332
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example16_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_summary/example16_montage.png"
%}