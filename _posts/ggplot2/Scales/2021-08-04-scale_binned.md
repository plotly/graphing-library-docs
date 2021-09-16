---
  description: Transform continuous inputs before using it with a geom that requires discrete positions and then convert them with ggplotly
  function: scale_binned
  permalink: /ggplot2/Scales/scale_binned/
  layout: base
  language: ggplot2
  name: scale_binned
  reference: https://ggplot2.tidyverse.org/reference/
---



# Create a histogram by binning the x-axix

<pre class="mcode">
p <-    
 ggplot(mtcars) +
  geom_bar(aes(mpg)) +
  scale_x_binned()
  
plotly::ggplotly(p)
</pre>


{% capture plot_567 %}
  {% raw %}
    {"data":[{"type":"bar","xsrc":"nadhil:362:35cdbd","x":[11.25,13.75,16.25,18.75,21.25,23.75,26.25,31.25,33.75],"ysrc":"nadhil:362:d827f1","y":[2,4,6,6,5,3,2,3,1],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"transparent","width":1.88976377952756},"color":"rgba(89,89,89,1)","autocolorscale":false},"basesrc":"nadhil:362:567916","base":[0,0,0,0,0,0,0,0,0],"textsrc":"nadhil:362:4e79c9","text":["count:2mpg:11.25","count:4mpg:13.75","count:6mpg:16.25","count:6mpg:18.75","count:5mpg:21.25","count:3mpg:23.75","count:2mpg:26.25","count:3mpg:31.25","count:1mpg:33.75"],"widthsrc":"nadhil:362:d19d1c","width":[2.25,2.25,2.25,2.25,2.25,2.25,2.25,2.25,2.25],"hoverinfo":"text","showlegend":false,"orientation":"v"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.75,36.25],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["12.5","15.0","17.5","20.0","22.5","25.0","27.5","30.0","32.5"],"tickvals":[12.5,15,17.5,20,22.5,25,27.5,30,32.5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["12.5","15.0","17.5","20.0","22.5","25.0","27.5","30.0","32.5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.3,6.3],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","2","4","6"],"tickvals":[0,2,4,6],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","2","4","6"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_567
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_binned/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Scales/scale_binned/example1_montage.png"
%}



