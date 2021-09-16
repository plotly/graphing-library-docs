---
  description: Various ways of representing a vertical interval defined by x, ymin and ymax and then convert them with ggplotly.
  function: geom_crossbar
  permalink: /ggplot2/layers/geoms/geom_crossbar/
  layout: base
  language: ggplot2
  name: geom_crossbar
  reference: https://ggplot2.tidyverse.org/reference/
---


# Line range

<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_linerange(aes(ymin = lower, ymax = upper))

plotly::ggplotly(p)
</pre>

{% capture plot_35 %}
  {% raw %}
    {"data":[{"line":{"color":"transparent"},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:183:726b84","x":[1,2],"ysrc":"nadhil:183:5803b1","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(248,118,109,1)","width":0,"arraysrc":"nadhil:183:334fb2","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil:183:2944d5","arrayminus":[0.2,0.6]},"opacity":1,"textsrc":"nadhil:183:5769b5","text":["trt:1resp:1lower:0.8upper:1.1","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":true,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:183:bcd00d","x":[1,2],"ysrc":"nadhil:183:1430ef","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,191,196,1)","width":0,"arraysrc":"nadhil:183:795680","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil:183:8a37c7","arrayminus":[0.4,0.4]},"opacity":1,"textsrc":"nadhil:183:a3ddaa","text":["trt:1resp:5lower:4.6upper:5.3","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":true,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.575,5.525],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2","3","4","5"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_35
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example1_montage.png"
%}


# Point range

<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_pointrange(aes(ymin = lower, ymax = upper))

plotly::ggplotly(p)
</pre>


{% capture plot_36 %}
  {% raw %}
    {"data":[{"line":{"color":"transparent"},"mode":"lines+markers","name":"1","type":"scatter","xsrc":"nadhil:185:0e3dac","x":[1,2],"ysrc":"nadhil:185:829e84","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(248,118,109,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(248,118,109,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(248,118,109,1)","width":0,"arraysrc":"nadhil:185:1fd176","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil:185:3637cd","arrayminus":[0.2,0.6]},"hoveron":"points","opacity":1,"textsrc":"nadhil:185:a60b70","text":["trt:1resp:1lower:0.8upper:1.1","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":true,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines+markers","name":"2","type":"scatter","xsrc":"nadhil:185:61e082","x":[1,2],"ysrc":"nadhil:185:6c6743","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,191,196,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(0,191,196,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(0,191,196,1)","width":0,"arraysrc":"nadhil:185:80d874","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil:185:7b3656","arrayminus":[0.4,0.4]},"hoveron":"points","opacity":1,"textsrc":"nadhil:185:788a72","text":["trt:1resp:5lower:4.6upper:5.3","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":true,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.575,5.525],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2","3","4","5"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_36
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example2_montage.png"
%}

# Crossbar


<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_crossbar(aes(ymin = lower, ymax = upper), width = 0.2)

plotly::ggplotly(p)
</pre>


{% capture plot_37 %}
  {% raw %}
    {"data":[{"fill":"toself","line":{"dash":"solid","color":"rgba(248,118,109,1)","width":1.88976377952756},"mode":"lines","name":"1","text":"trt:1resp:1lower:0.8upper:1.1","type":"scatter","xsrc":"nadhil:187:232adf","x":[0.9,0.9,1.1,1.1,0.9],"ysrc":"nadhil:187:a41023","y":[0.8,1.1,1.1,0.8,0.8],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":true,"legendgroup":"1"},{"fill":"toself","line":{"dash":"solid","color":"rgba(248,118,109,1)","width":1.88976377952756},"mode":"lines","name":"1","text":"trt:2resp:3lower:2.4upper:3.3","type":"scatter","xsrc":"nadhil:187:a869f5","x":[1.9,1.9,2.1,2.1,1.9],"ysrc":"nadhil:187:62bbd7","y":[2.4,3.3,3.3,2.4,2.4],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false,"legendgroup":"1"},{"fill":"toself","line":{"dash":"solid","color":"rgba(0,191,196,1)","width":1.88976377952756},"mode":"lines","name":"2","text":"trt:1resp:5lower:4.6upper:5.3","type":"scatter","xsrc":"nadhil:187:1c65ee","x":[0.9,0.9,1.1,1.1,0.9],"ysrc":"nadhil:187:330323","y":[4.6,5.3,5.3,4.6,4.6],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":true,"legendgroup":"2"},{"fill":"toself","line":{"dash":"solid","color":"rgba(0,191,196,1)","width":1.88976377952756},"mode":"lines","name":"2","text":"trt:2resp:4lower:3.6upper:4.2","type":"scatter","xsrc":"nadhil:187:ddc84e","x":[1.9,1.9,2.1,2.1,1.9],"ysrc":"nadhil:187:2d547a","y":[3.6,4.2,4.2,3.6,3.6],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"transparent","hoverinfo":"none","showlegend":false,"legendgroup":"2"},{"line":{"dash":"solid","color":"rgba(248,118,109,1)","width":4.7244094488189},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:187:cdcf6e","x":[0.9,1.1,null,1.9,2.1],"ysrc":"nadhil:187:77883c","y":[1,1,null,3,3],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:187:322487","text":["trt:1resp:1lower:0.8upper:1.1","trt:1resp:1lower:0.8upper:1.1",null,"trt:2resp:3lower:2.4upper:3.3","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":false,"legendgroup":"1"},{"line":{"dash":"solid","color":"rgba(0,191,196,1)","width":4.7244094488189},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:187:d3c98e","x":[0.9,1.1,null,1.9,2.1],"ysrc":"nadhil:187:464ccb","y":[5,5,null,4,4],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:187:4cdb6e","text":["trt:1resp:5lower:4.6upper:5.3","trt:1resp:5lower:4.6upper:5.3",null,"trt:2resp:4lower:3.6upper:4.2","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":false,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.575,5.525],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2","3","4","5"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_37
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example3_montage.png"
%}

# Errorbar


<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-  p + geom_errorbar(aes(ymin = lower, ymax = upper), width = 0.2)

plotly::ggplotly(p)
</pre>

{% capture plot_38 %}
  {% raw %}
    {"data":[{"line":{"color":"transparent"},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:189:cf5fba","x":[1,2],"ysrc":"nadhil:189:2fdb7c","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(248,118,109,1)","width":20.3636363636364,"arraysrc":"nadhil:189:4c3476","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil:189:610dc8","arrayminus":[0.2,0.6]},"opacity":1,"textsrc":"nadhil:189:e25f84","text":["trt:1resp:1lower:0.8upper:1.1","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":true,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:189:2603ac","x":[1,2],"ysrc":"nadhil:189:dbc10d","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,191,196,1)","width":20.3636363636364,"arraysrc":"nadhil:189:eb2c6c","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil:189:49b063","arrayminus":[0.4,0.4]},"opacity":1,"textsrc":"nadhil:189:89ddb6","text":["trt:1resp:5lower:4.6upper:5.3","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":true,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.575,5.525],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2","3","4","5"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_38
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example4_montage.png"
%}


# Flip plot orientation

<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <-    
 ggplot(df, aes(resp, trt, colour = group)) +
  geom_linerange(aes(xmin = lower, xmax = upper))
  
plotly::ggplotly(p)
</pre>


{% capture plot_39 %}
  {% raw %}
    {"data":[{"line":{"color":"transparent"},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:191:bd3144","x":[1,3],"ysrc":"nadhil:191:a6ba96","y":[1,2],"frame":null,"xaxis":"x","yaxis":"y","error_x":{"type":"data","color":"rgba(248,118,109,1)","width":0,"arraysrc":"nadhil:191:ae37b3","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil:191:86fca0","arrayminus":[0.2,0.6]},"opacity":1,"textsrc":"nadhil:191:1c3a0e","text":["resp:1trt:1lower:0.8upper:1.1","resp:3trt:2lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":true,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:191:d6a7a3","x":[5,4],"ysrc":"nadhil:191:5762e0","y":[1,2],"frame":null,"xaxis":"x","yaxis":"y","error_x":{"type":"data","color":"rgba(0,191,196,1)","width":0,"arraysrc":"nadhil:191:1a31b7","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil:191:30ceed","arrayminus":[0.4,0.4]},"opacity":1,"textsrc":"nadhil:191:f0ef50","text":["resp:5trt:1lower:4.6upper:5.3","resp:4trt:2lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":true,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.575,5.525],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2","3","4","5"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_39
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example5_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example5_montage.png"
%}

# Connect group means with lines


<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
p <-    
 p +
  geom_line(aes(group = group)) +
  geom_errorbar(aes(ymin = lower, ymax = upper), width = 0.2)
  
plotly::ggplotly(p)
</pre>


{% capture plot_40 %}
  {% raw %}
    {"data":[{"line":{"dash":"solid","color":"rgba(248,118,109,1)","width":1.88976377952756},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:193:0de4b6","x":[1,2],"ysrc":"nadhil:193:2e8689","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:193:2384fb","text":["trt:1resp:1","trt:2resp:3"],"hoverinfo":"text","showlegend":true,"legendgroup":"1"},{"line":{"dash":"solid","color":"rgba(0,191,196,1)","width":1.88976377952756},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:193:a31720","x":[1,2],"ysrc":"nadhil:193:af86ed","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:193:038f7b","text":["trt:1resp:5","trt:2resp:4"],"hoverinfo":"text","showlegend":true,"legendgroup":"2"},{"line":{"color":"transparent"},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:193:1be1af","x":[1,2],"ysrc":"nadhil:193:2aed64","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(248,118,109,1)","width":20.3636363636364,"arraysrc":"nadhil:193:96c9f6","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil:193:200d09","arrayminus":[0.2,0.6]},"opacity":1,"textsrc":"nadhil:193:2cda0a","text":["trt:1resp:1lower:0.8upper:1.1","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":false,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:193:2f428d","x":[1,2],"ysrc":"nadhil:193:149902","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,191,196,1)","width":20.3636363636364,"arraysrc":"nadhil:193:3a0bea","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil:193:765508","arrayminus":[0.4,0.4]},"opacity":1,"textsrc":"nadhil:193:bafbd0","text":["trt:1resp:5lower:4.6upper:5.3","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":false,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.575,5.525],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2","3","4","5"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_40
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example6_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example6_montage.png"
%}



# Dodging errorbars

If you want to dodge bars and errorbars, you need to manually specify the dodge width.

<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, fill = group))
p <-    
 p +
 geom_col(position = "dodge") +
 geom_errorbar(aes(ymin = lower, ymax = upper), position = "dodge", width = 0.25)
 
plotly::ggplotly(p)
</pre>


{% capture plot_41 %}
  {% raw %}
    {"data":[{"name":"1","type":"bar","xsrc":"nadhil:195:51d71e","x":[0.775,1.775],"ysrc":"nadhil:195:faefe1","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(248,118,109,1)","autocolorscale":false},"basesrc":"nadhil:195:6506bc","base":[0,0],"textsrc":"nadhil:195:9fc121","text":["trt:1resp:1","trt:2resp:3"],"widthsrc":"nadhil:195:d0083b","width":[0.45,0.45],"hoverinfo":"text","showlegend":true,"legendgroup":"1","orientation":"v"},{"name":"2","type":"bar","xsrc":"nadhil:195:4b46c6","x":[1.225,2.225],"ysrc":"nadhil:195:ec8524","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(0,191,196,1)","autocolorscale":false},"basesrc":"nadhil:195:5b22d4","base":[0,0],"textsrc":"nadhil:195:d828f2","text":["trt:1resp:5","trt:2resp:4"],"widthsrc":"nadhil:195:b24960","width":[0.45,0.45],"hoverinfo":"text","showlegend":true,"legendgroup":"2","orientation":"v"},{"line":{"color":"transparent"},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:195:8c4977","x":[0.9375,1.9375],"ysrc":"nadhil:195:e333f3","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,0,0,1)","width":12.7272727272727,"arraysrc":"nadhil:195:cd0712","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil:195:4c48e9","arrayminus":[0.2,0.6]},"opacity":1,"textsrc":"nadhil:195:40f303","text":["trt:1resp:1lower:0.8upper:1.1","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":false,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:195:3863b2","x":[1.0625,2.0625],"ysrc":"nadhil:195:cc2daa","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,0,0,1)","width":12.7272727272727,"arraysrc":"nadhil:195:e2c121","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil:195:4ecd02","arrayminus":[0.4,0.4]},"opacity":1,"textsrc":"nadhil:195:a30073","text":["trt:1resp:5lower:4.6upper:5.3","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":false,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.265,5.565],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","2","4"],"tickvals":[0,2,4],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","2","4"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_41
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example7_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example7_montage.png"
%}



Because the bars and errorbars have different widths we need to specify how wide the objects we are dodging are.


<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, colour = group))
dodge <- position_dodge(width=0.9)
p <-    
 p +
  geom_col(position = dodge) +
  geom_errorbar(aes(ymin = lower, ymax = upper), position = dodge, width = 0.25)
  
plotly::ggplotly(p)
</pre>


{% capture plot_42 %}
  {% raw %}
    {"data":[{"name":"1","type":"bar","xsrc":"nadhil:197:6d9fbb","x":[0.775,1.775],"ysrc":"nadhil:197:4c5adf","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(248,118,109,1)","width":1.88976377952756},"color":"rgba(89,89,89,1)","autocolorscale":false},"basesrc":"nadhil:197:e02b4b","base":[0,0],"textsrc":"nadhil:197:2af9d2","text":["trt:1resp:1","trt:2resp:3"],"widthsrc":"nadhil:197:14e636","width":[0.45,0.45],"hoverinfo":"text","showlegend":true,"legendgroup":"1","orientation":"v"},{"name":"2","type":"bar","xsrc":"nadhil:197:483b51","x":[1.225,2.225],"ysrc":"nadhil:197:ffe9d9","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,191,196,1)","width":1.88976377952756},"color":"rgba(89,89,89,1)","autocolorscale":false},"basesrc":"nadhil:197:4990ef","base":[0,0],"textsrc":"nadhil:197:4d4ac8","text":["trt:1resp:5","trt:2resp:4"],"widthsrc":"nadhil:197:f5f5f5","width":[0.45,0.45],"hoverinfo":"text","showlegend":true,"legendgroup":"2","orientation":"v"},{"line":{"color":"transparent"},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil:197:d534c5","x":[0.775,1.775],"ysrc":"nadhil:197:83e5ea","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(248,118,109,1)","width":12.7272727272727,"arraysrc":"nadhil:197:2c2435","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil:197:6ab31a","arrayminus":[0.2,0.6]},"opacity":1,"textsrc":"nadhil:197:f063c2","text":["trt:1resp:1lower:0.8upper:1.1","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":false,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil:197:057ce9","x":[1.225,2.225],"ysrc":"nadhil:197:d8377e","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,191,196,1)","width":12.7272727272727,"arraysrc":"nadhil:197:629169","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil:197:9f3354","arrayminus":[0.4,0.4]},"opacity":1,"textsrc":"nadhil:197:d21a8d","text":["trt:1resp:5lower:4.6upper:5.3","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":false,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.265,5.565],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","2","4"],"tickvals":[0,2,4],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","2","4"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_42
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example8_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example8_montage.png"
%}



When using `geom_errorbar()` with `position_dodge2()`, extra padding will be needed between the error bars to keep them aligned with the bars.


<pre class="mcode">
df <- data.frame(
  trt = factor(c(1, 1, 2, 2)),
  resp = c(1, 5, 3, 4),
  group = factor(c(1, 2, 1, 2)),
  upper = c(1.1, 5.3, 3.3, 4.2),
  lower = c(0.8, 4.6, 2.4, 3.6)
)
p <- ggplot(df, aes(trt, resp, fill = group))
p <-    
 p +
geom_col(position = "dodge2") +
geom_errorbar(
  aes(ymin = lower, ymax = upper),
  position = position_dodge2(width = 0.5, padding = 0.5)
)

plotly::ggplotly(p)
</pre>


{% capture plot_43 %}
  {% raw %}
    {"data":[{"name":"1","type":"bar","xsrc":"nadhil2:0:47963d","x":[0.775,1.775],"ysrc":"nadhil2:0:35be75","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(248,118,109,1)","autocolorscale":false},"basesrc":"nadhil2:0:420944","base":[0,0],"textsrc":"nadhil2:0:b912f2","text":["trt:1resp:1","trt:2resp:3"],"widthsrc":"nadhil2:0:19c0c7","width":[0.405,0.405],"hoverinfo":"text","showlegend":true,"legendgroup":"1","orientation":"v"},{"name":"2","type":"bar","xsrc":"nadhil2:0:c10b30","x":[1.225,2.225],"ysrc":"nadhil2:0:ebb3e0","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(0,191,196,1)","autocolorscale":false},"basesrc":"nadhil2:0:91d072","base":[0,0],"textsrc":"nadhil2:0:ca7d5e","text":["trt:1resp:5","trt:2resp:4"],"widthsrc":"nadhil2:0:f76125","width":[0.405,0.405],"hoverinfo":"text","showlegend":true,"legendgroup":"2","orientation":"v"},{"line":{"color":"transparent"},"mode":"lines","name":"1","type":"scatter","xsrc":"nadhil2:0:886182","x":[0.775,1.775],"ysrc":"nadhil2:0:a4f467","y":[1,3],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,0,0,1)","width":23.8636363636363,"arraysrc":"nadhil2:0:555afe","array":[0.1,0.3],"symmetric":false,"arrayminussrc":"nadhil2:0:962d0e","arrayminus":[0.2,0.6]},"opacity":1,"textsrc":"nadhil2:0:5cc874","text":["trt:1resp:1lower:0.8upper:1.1","trt:2resp:3lower:2.4upper:3.3"],"hoverinfo":"text","showlegend":false,"legendgroup":"1"},{"line":{"color":"transparent"},"mode":"lines","name":"2","type":"scatter","xsrc":"nadhil2:0:fb24e6","x":[1.225,2.225],"ysrc":"nadhil2:0:74d74d","y":[5,4],"frame":null,"xaxis":"x","yaxis":"y","error_y":{"type":"data","color":"rgba(0,0,0,1)","width":23.8636363636364,"arraysrc":"nadhil2:0:9fbe73","array":[0.3,0.2],"symmetric":false,"arrayminussrc":"nadhil2:0:1086de","arrayminus":[0.4,0.4]},"opacity":1,"textsrc":"nadhil2:0:4c22d8","text":["trt:1resp:5lower:4.6upper:5.3","trt:2resp:4lower:3.6upper:4.2"],"hoverinfo":"text","showlegend":false,"legendgroup":"2"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"trt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1","2"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1","2"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.265,5.565],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"resp"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","2","4"],"tickvals":[0,2,4],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","2","4"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.927821522309711,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":41.7926602401488,"l":31.4155251141553,"r":7.30593607305936,"t":27.8383223406054},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"group","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_43
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example9_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_crossbar/example9_montage.png"
%}

