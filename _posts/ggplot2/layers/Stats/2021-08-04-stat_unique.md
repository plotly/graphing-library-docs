---
  description: Remove duplicates and then convert them with ggplotly.
  function: stat_unique
  permalink: /ggplot2/layers/Stats/stat_unique/
  layout: base
  language: ggplot2
  name: stat_unique
  reference: https://ggplot2.tidyverse.org/reference/
---

# Default plot

<pre class="mcode">
p <-    
 ggplot(mtcars, aes(vs, am)) +
  geom_point(alpha = 0.1)
  
plotly::ggplotly(p)
</pre>

{% capture plot_302 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1156:5e5160","x":[0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1],"ysrc":"nadhil:1156:d6b2f5","y":[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":0.1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1156:3652c1","text":["vs:0am:1","vs:0am:1","vs:1am:1","vs:1am:0","vs:0am:0","vs:1am:0","vs:0am:0","vs:1am:0","vs:1am:0","vs:1am:0","vs:1am:0","vs:0am:0","vs:0am:0","vs:0am:0","vs:0am:0","vs:0am:0","vs:0am:0","vs:1am:1","vs:1am:1","vs:1am:1","vs:1am:0","vs:0am:0","vs:0am:0","vs:0am:0","vs:0am:0","vs:1am:1","vs:0am:1","vs:1am:1","vs:0am:1","vs:0am:1","vs:0am:1","vs:1am:1"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"vs"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"am"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_302
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_unique/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_unique/example1_montage.png"
%}



# Unique stat



<pre class="mcode">
p <-    
 ggplot(mtcars, aes(vs, am)) +
  geom_point(alpha = 0.1, stat = "unique")
  
plotly::ggplotly(p)
</pre>



{% capture plot_303 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1158:a659a9","x":[0,1,1,0],"ysrc":"nadhil:1158:969cc7","y":[1,1,0,0],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":0.1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1158:a3c61d","text":["vs:0am:1","vs:1am:1","vs:1am:0","vs:0am:0"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"vs"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"am"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_303
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_unique/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Stats/stat_unique/example2_montage.png"
%}



