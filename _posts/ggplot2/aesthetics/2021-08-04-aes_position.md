---
  description: Creates position related aesthetics for x, y, xmin, xmax, ymin, ymax, xend, yend and then convert them with ggplotly
  function: aes_position
  permalink: /ggplot2/aesthetics/aes_position/
  layout: base
  language: ggplot2
  name: aes_position
  reference: https://ggplot2.tidyverse.org/reference/
---

# Default plot

Plot with means and standard errors of means for prices for each type of cut.


<pre class="mcode">
dmod <- lm(price ~ cut, data = diamonds)

cut <- unique(diamonds$cut)

cuts_df <- data.frame(
  cut,
  predict(dmod, data.frame(cut), se = TRUE)[c("fit", "se.fit")]
)

p <-    
 ggplot(cuts_df) +
  aes(
   x = cut,
   y = fit,
   ymin = fit - se.fit,
   ymax = fit + se.fit,
   colour = cut
  ) +
  geom_pointrange()
  
plotly::ggplotly(p)
</pre>


{% capture plot_644 %}
  {% raw %}
    {"data":[{"line":{"color":"transparent"},"mode":"lines+markers","name":"Fair","text":"cut:Fairfit:4358.758fit-se.fit:4259.970fit+se.fit:4457.546cut:Fair","type":"scatter","xsrc":"nadhil:294:f13c8e","x":[1],"ysrc":"nadhil:294:19098f","y":[4358.7577639751],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(68,1,84,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(68,1,84,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(68,1,84,1)","width":0,"arraysrc":"nadhil:294:923d17","array":[98.7879546956692],"symmetric":false,"arrayminussrc":"nadhil:294:c5faca","arrayminus":[98.7879546956692]},"hoveron":"points","opacity":1,"hoverinfo":"text","showlegend":true,"legendgroup":"Fair"},{"line":{"color":"transparent"},"mode":"lines+markers","name":"Good","text":"cut:Goodfit:3928.864fit-se.fit:3872.273fit+se.fit:3985.456cut:Good","type":"scatter","xsrc":"nadhil:294:f118a7","x":[2],"ysrc":"nadhil:294:376bd3","y":[3928.86445169142],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(59,82,139,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(59,82,139,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(59,82,139,1)","width":0,"arraysrc":"nadhil:294:3985d3","array":[56.5917546970004],"symmetric":false,"arrayminussrc":"nadhil:294:32ec40","arrayminus":[56.5917546970004]},"hoveron":"points","opacity":1,"hoverinfo":"text","showlegend":true,"legendgroup":"Good"},{"line":{"color":"transparent"},"mode":"lines+markers","name":"VeryGood","text":"cut:VeryGoodfit:3981.760fit-se.fit:3945.698fit+se.fit:4017.822cut:VeryGood","type":"scatter","xsrc":"nadhil:294:c9bf30","x":[3],"ysrc":"nadhil:294:50e4ec","y":[3981.75989074645],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(33,144,140,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(33,144,140,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(33,144,140,1)","width":0,"arraysrc":"nadhil:294:634ce6","array":[36.0618096137482],"symmetric":false,"arrayminussrc":"nadhil:294:0fef3e","arrayminus":[36.0618096137482]},"hoveron":"points","opacity":1,"hoverinfo":"text","showlegend":true,"legendgroup":"VeryGood"},{"line":{"color":"transparent"},"mode":"lines+markers","name":"Premium","text":"cut:Premiumfit:4584.258fit-se.fit:4550.504fit+se.fit:4618.011cut:Premium","type":"scatter","xsrc":"nadhil:294:a3f984","x":[4],"ysrc":"nadhil:294:6cdcbb","y":[4584.25770430031],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(93,200,99,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(93,200,99,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(93,200,99,1)","width":0,"arraysrc":"nadhil:294:2d8ecd","array":[33.7535186451805],"symmetric":false,"arrayminussrc":"nadhil:294:772833","arrayminus":[33.7535186451805]},"hoveron":"points","opacity":1,"hoverinfo":"text","showlegend":true,"legendgroup":"Premium"},{"line":{"color":"transparent"},"mode":"lines+markers","name":"Ideal","text":"cut:Idealfit:3457.542fit-se.fit:3430.541fit+se.fit:3484.543cut:Ideal","type":"scatter","xsrc":"nadhil:294:8361a5","x":[5],"ysrc":"nadhil:294:19a958","y":[3457.54197021004],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(253,231,37,1)","width":3.77952755905512},"size":1.88976377952756,"color":"rgba(253,231,37,1)","symbol":"circle","opacity":1,"autocolorscale":false},"error_y":{"type":"data","color":"rgba(253,231,37,1)","width":0,"arraysrc":"nadhil:294:83f4c4","array":[27.0012094971303],"symmetric":false,"arrayminussrc":"nadhil:294:461367","arrayminus":[27.0012094971303]},"hoveron":"points","opacity":1,"hoverinfo":"text","showlegend":true,"legendgroup":"Ideal"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,5.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cut"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["Fair","Good","VeryGood","Premium","Ideal"],"tickvals":[1,2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["Fair","Good","VeryGood","Premium","Ideal"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[3371.16723760128,4677.38474605713],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"fit"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["3400","3600","3800","4000","4200","4400","4600"],"tickvals":[3400,3600,3800,4000,4200,4400,4600],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["3400","3600","3800","4000","4200","4400","4600"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"cut","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_644
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example1_montage.png"
%}


# Using annotate

Default plot:

<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()

plotly::ggplotly(p)
</pre>

{% capture plot_645 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:296:e7d80d","x":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"ysrc":"nadhil:296:da9545","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:296:4b6ef5","text":["wt:2.620mpg:21.0","wt:2.875mpg:21.0","wt:2.320mpg:22.8","wt:3.215mpg:21.4","wt:3.440mpg:18.7","wt:3.460mpg:18.1","wt:3.570mpg:14.3","wt:3.190mpg:24.4","wt:3.150mpg:22.8","wt:3.440mpg:19.2","wt:3.440mpg:17.8","wt:4.070mpg:16.4","wt:3.730mpg:17.3","wt:3.780mpg:15.2","wt:5.250mpg:10.4","wt:5.424mpg:10.4","wt:5.345mpg:14.7","wt:2.200mpg:32.4","wt:1.615mpg:30.4","wt:1.835mpg:33.9","wt:2.465mpg:21.5","wt:3.520mpg:15.5","wt:3.435mpg:15.2","wt:3.840mpg:13.3","wt:3.845mpg:19.2","wt:1.935mpg:27.3","wt:2.140mpg:26.0","wt:1.513mpg:30.4","wt:3.170mpg:15.8","wt:2.770mpg:19.7","wt:3.570mpg:15.0","wt:2.780mpg:21.4"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_645
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example2_montage.png"
%}



<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()

p <-    
 p + annotate(
  "rect", xmin = 2, xmax = 3.5, ymin = 2, ymax = 25,
  fill = "dark grey", alpha = .5
)

plotly::ggplotly(p)
</pre>


{% capture plot_646 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:298:6e1940","x":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"ysrc":"nadhil:298:59fffb","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:298:f8dda5","text":["wt:2.620mpg:21.0","wt:2.875mpg:21.0","wt:2.320mpg:22.8","wt:3.215mpg:21.4","wt:3.440mpg:18.7","wt:3.460mpg:18.1","wt:3.570mpg:14.3","wt:3.190mpg:24.4","wt:3.150mpg:22.8","wt:3.440mpg:19.2","wt:3.440mpg:17.8","wt:4.070mpg:16.4","wt:3.730mpg:17.3","wt:3.780mpg:15.2","wt:5.250mpg:10.4","wt:5.424mpg:10.4","wt:5.345mpg:14.7","wt:2.200mpg:32.4","wt:1.615mpg:30.4","wt:1.835mpg:33.9","wt:2.465mpg:21.5","wt:3.520mpg:15.5","wt:3.435mpg:15.2","wt:3.840mpg:13.3","wt:3.845mpg:19.2","wt:1.935mpg:27.3","wt:2.140mpg:26.0","wt:1.513mpg:30.4","wt:3.170mpg:15.8","wt:2.770mpg:19.7","wt:3.570mpg:15.0","wt:2.780mpg:21.4"],"hoverinfo":"text","showlegend":false},{"fill":"toself","line":{"dash":"solid","color":"transparent","width":1.88976377952756},"mode":"lines","text":"","type":"scatter","xsrc":"nadhil:298:8c8e20","x":[2,2,3.5,3.5,2],"ysrc":"nadhil:298:a79361","y":[2,25,25,2,2],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"fills","fillcolor":"rgba(169,169,169,0.5)","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[0.405,35.495],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","20","30"],"tickvals":[10,20,30],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","20","30"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_646
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example3_montage.png"
%}


# Geom_segment


<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()
p <-    
 p + geom_segment(
  aes(x = 2, y = 15, xend = 2, yend = 25),
  arrow = arrow(length = unit(0.5, "cm"))
)

plotly::ggplotly(p)
</pre>


{% capture plot_647 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:300:cfa415","x":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"ysrc":"nadhil:300:ba08cb","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:300:0d96b1","text":["wt:2.620mpg:21.0","wt:2.875mpg:21.0","wt:2.320mpg:22.8","wt:3.215mpg:21.4","wt:3.440mpg:18.7","wt:3.460mpg:18.1","wt:3.570mpg:14.3","wt:3.190mpg:24.4","wt:3.150mpg:22.8","wt:3.440mpg:19.2","wt:3.440mpg:17.8","wt:4.070mpg:16.4","wt:3.730mpg:17.3","wt:3.780mpg:15.2","wt:5.250mpg:10.4","wt:5.424mpg:10.4","wt:5.345mpg:14.7","wt:2.200mpg:32.4","wt:1.615mpg:30.4","wt:1.835mpg:33.9","wt:2.465mpg:21.5","wt:3.520mpg:15.5","wt:3.435mpg:15.2","wt:3.840mpg:13.3","wt:3.845mpg:19.2","wt:1.935mpg:27.3","wt:2.140mpg:26.0","wt:1.513mpg:30.4","wt:3.170mpg:15.8","wt:2.770mpg:19.7","wt:3.570mpg:15.0","wt:2.780mpg:21.4"],"hoverinfo":"text","showlegend":false},{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","text":"x:2y:15xend:2yend:25","type":"scatter","xsrc":"nadhil:300:417810","x":[2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2,null,2,2],"ysrc":"nadhil:300:e0cb5a","y":[15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25,null,15,25],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_647
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example4_montage.png"
%}



<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()

p <-    
 p + geom_segment(
  aes(x = 2, y = 15, xend = 3, yend = 15),
  arrow = arrow(length = unit(0.5, "cm"))
)

plotly::ggplotly(p)
</pre>


{% capture plot_648 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:302:325b19","x":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"ysrc":"nadhil:302:a2e308","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:302:9dea96","text":["wt:2.620mpg:21.0","wt:2.875mpg:21.0","wt:2.320mpg:22.8","wt:3.215mpg:21.4","wt:3.440mpg:18.7","wt:3.460mpg:18.1","wt:3.570mpg:14.3","wt:3.190mpg:24.4","wt:3.150mpg:22.8","wt:3.440mpg:19.2","wt:3.440mpg:17.8","wt:4.070mpg:16.4","wt:3.730mpg:17.3","wt:3.780mpg:15.2","wt:5.250mpg:10.4","wt:5.424mpg:10.4","wt:5.345mpg:14.7","wt:2.200mpg:32.4","wt:1.615mpg:30.4","wt:1.835mpg:33.9","wt:2.465mpg:21.5","wt:3.520mpg:15.5","wt:3.435mpg:15.2","wt:3.840mpg:13.3","wt:3.845mpg:19.2","wt:1.935mpg:27.3","wt:2.140mpg:26.0","wt:1.513mpg:30.4","wt:3.170mpg:15.8","wt:2.770mpg:19.7","wt:3.570mpg:15.0","wt:2.780mpg:21.4"],"hoverinfo":"text","showlegend":false},{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","text":"x:2y:15xend:3yend:15","type":"scatter","xsrc":"nadhil:302:430b19","x":[2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3,null,2,3],"ysrc":"nadhil:302:e3c8d7","y":[15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15,null,15,15],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_648
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example5_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example5_montage.png"
%}




<pre class="mcode">
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()

p <-    
 p + geom_segment(
  aes(x = 5, y = 30, xend = 3.5, yend = 25),
  arrow = arrow(length = unit(0.5, "cm"))
)

plotly::ggplotly(p)
</pre>


{% capture plot_649 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:304:d2c916","x":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"ysrc":"nadhil:304:638571","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:304:1a6313","text":["wt:2.620mpg:21.0","wt:2.875mpg:21.0","wt:2.320mpg:22.8","wt:3.215mpg:21.4","wt:3.440mpg:18.7","wt:3.460mpg:18.1","wt:3.570mpg:14.3","wt:3.190mpg:24.4","wt:3.150mpg:22.8","wt:3.440mpg:19.2","wt:3.440mpg:17.8","wt:4.070mpg:16.4","wt:3.730mpg:17.3","wt:3.780mpg:15.2","wt:5.250mpg:10.4","wt:5.424mpg:10.4","wt:5.345mpg:14.7","wt:2.200mpg:32.4","wt:1.615mpg:30.4","wt:1.835mpg:33.9","wt:2.465mpg:21.5","wt:3.520mpg:15.5","wt:3.435mpg:15.2","wt:3.840mpg:13.3","wt:3.845mpg:19.2","wt:1.935mpg:27.3","wt:2.140mpg:26.0","wt:1.513mpg:30.4","wt:3.170mpg:15.8","wt:2.770mpg:19.7","wt:3.570mpg:15.0","wt:2.780mpg:21.4"],"hoverinfo":"text","showlegend":false},{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","text":"x:5y:30xend:3.5yend:25","type":"scatter","xsrc":"nadhil:304:357e3f","x":[5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5],"ysrc":"nadhil:304:2e536a","y":[30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_649
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example6_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example6_montage.png"
%}



You can also use `geom_segment()` to recreate `plot(type = "h")` from base `R`:



<pre class="mcode">
counts <- as.data.frame(table(x = rpois(100, 5)))
counts$x <- as.numeric(as.character(counts$x))

p <-  with(counts, plot(x, Freq, type = "h", lwd = 10))

plotly::ggplotly(p)
</pre>


{% capture plot_650 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:306:ba74f3","x":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"ysrc":"nadhil:306:f266a8","y":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:306:8cc958","text":["wt:2.620mpg:21.0","wt:2.875mpg:21.0","wt:2.320mpg:22.8","wt:3.215mpg:21.4","wt:3.440mpg:18.7","wt:3.460mpg:18.1","wt:3.570mpg:14.3","wt:3.190mpg:24.4","wt:3.150mpg:22.8","wt:3.440mpg:19.2","wt:3.440mpg:17.8","wt:4.070mpg:16.4","wt:3.730mpg:17.3","wt:3.780mpg:15.2","wt:5.250mpg:10.4","wt:5.424mpg:10.4","wt:5.345mpg:14.7","wt:2.200mpg:32.4","wt:1.615mpg:30.4","wt:1.835mpg:33.9","wt:2.465mpg:21.5","wt:3.520mpg:15.5","wt:3.435mpg:15.2","wt:3.840mpg:13.3","wt:3.845mpg:19.2","wt:1.935mpg:27.3","wt:2.140mpg:26.0","wt:1.513mpg:30.4","wt:3.170mpg:15.8","wt:2.770mpg:19.7","wt:3.570mpg:15.0","wt:2.780mpg:21.4"],"hoverinfo":"text","showlegend":false},{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":1.88976377952756},"mode":"lines","text":"x:5y:30xend:3.5yend:25","type":"scatter","xsrc":"nadhil:306:c07cc6","x":[5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5,null,5,3.5],"ysrc":"nadhil:306:d3579c","y":[30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25,null,30,25],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_650
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example7_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example7_montage.png"
%}



<pre class="mcode">
counts <- as.data.frame(table(x = rpois(100, 5)))
counts$x <- as.numeric(as.character(counts$x))

p <-    
 ggplot(counts, aes(x = x, y = Freq)) +
  geom_segment(aes(yend = 0, xend = x), size = 10)
  
plotly::ggplotly(p)
</pre>



{% capture plot_651 %}
  {% raw %}
    {"data":[{"line":{"dash":"solid","color":"rgba(0,0,0,1)","width":37.7952755905512},"mode":"lines","type":"scatter","xsrc":"nadhil:308:60203c","x":[1,1,null,2,2,null,3,3,null,4,4,null,5,5,null,6,6,null,7,7,null,8,8,null,9,9,null,10,10,null,11,11],"ysrc":"nadhil:308:28ee3b","y":[4,0,null,7,0,null,17,0,null,19,0,null,22,0,null,16,0,null,9,0,null,2,0,null,2,0,null,1,0,null,1,0],"frame":null,"xaxis":"x","yaxis":"y","hoveron":"points","textsrc":"nadhil:308:49b633","text":["x:1Freq:4yend:0x:1","x:1Freq:4yend:0x:1",null,"x:2Freq:7yend:0x:2","x:2Freq:7yend:0x:2",null,"x:3Freq:17yend:0x:3","x:3Freq:17yend:0x:3",null,"x:4Freq:19yend:0x:4","x:4Freq:19yend:0x:4",null,"x:5Freq:22yend:0x:5","x:5Freq:22yend:0x:5",null,"x:6Freq:16yend:0x:6","x:6Freq:16yend:0x:6",null,"x:7Freq:9yend:0x:7","x:7Freq:9yend:0x:7",null,"x:8Freq:2yend:0x:8","x:8Freq:2yend:0x:8",null,"x:9Freq:2yend:0x:9","x:9Freq:2yend:0x:9",null,"x:10Freq:1yend:0x:10","x:10Freq:1yend:0x:10",null,"x:11Freq:1yend:0x:11","x:11Freq:1yend:0x:11"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.5,11.5],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"x"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["3","6","9"],"tickvals":[3,6,9],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["3","6","9"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-1.1,23.1],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"Freq"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","5","10","15","20"],"tickvals":[0,5,10,15,20],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","5","10","15","20"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_651
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example8_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Aesthetics/aes_position/example8_montage.png"
%}


