---
  description: Creates cartesian coordinates with fixed "aspect ratio" and then convert them with ggplotly.
  function: coord_fixed
  permalink: /ggplot2/Coordinate systems/coord_fixed/
  layout: base
  language: ggplot2
  name: coord_fixed
  reference: https://ggplot2.tidyverse.org/reference/
---

`coord_fixed` ensures that the ranges of axes are equal to the specified ratio by adjusting the plot aspect ratio

# Default scatterplot

<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(ratio = 1)

plotly::ggplotly(p)
</pre>


{% capture plot_441 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:742:fce332","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:742:6ab604","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:742:ce75c8","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":1,"hoverformat":".2f","scaleanchor":"y","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":1,"hoverformat":".2f","scaleanchor":"x","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_441
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example1_montage.png"
%}


# Aspect ratio - full

<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(ratio = 5)

plotly::ggplotly(p)
</pre>

{% capture plot_442 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:744:214b4e","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:744:5b3a71","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:744:1f8e94","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":0.2,"hoverformat":".2f","scaleanchor":"y","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":5,"hoverformat":".2f","scaleanchor":"x","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_442
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example2_montage.png"
%}



# Aspect ratio - relative


<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(ratio = 1/5)

plotly::ggplotly(p)
</pre>

{% capture plot_443 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:746:7b718d","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:746:682b24","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:746:8ded10","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":5,"hoverformat":".2f","scaleanchor":"y","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":0.2,"hoverformat":".2f","scaleanchor":"x","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_443
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example3_montage.png"
%}

# Aspect ratio - fixed


<pre class="mcode">
p <- ggplot(mtcars, aes(mpg, wt)) + geom_point()
p <-  p + coord_fixed(xlim = c(15, 30))

plotly::ggplotly(p)
</pre>

{% capture plot_444 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:748:13c3b9","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:748:6ff678","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:748:f56e5d","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[14.25,30.75],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["15","20","25","30"],"tickvals":[15,20,25,30],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":1,"hoverformat":".2f","scaleanchor":"y","categoryarray":["15","20","25","30"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"scaleratio":1,"hoverformat":".2f","scaleanchor":"x","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_444
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Coordinate%20systems/coord_fixed/example4_montage.png"
%}