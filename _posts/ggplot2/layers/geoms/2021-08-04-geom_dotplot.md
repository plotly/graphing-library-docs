---
  description: Creates dotplot and then convert them with ggplotly.
  function: geom_dotplot
  permalink: /ggplot2/layers/geoms/geom_dotplot/
  layout: base
  language: ggplot2
  name: geom_dotplot
  reference: https://ggplot2.tidyverse.org/reference/
---

# Default dotplot

<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot()
  
plotly::ggplotly(p)
</pre>


{% capture plot_206 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:16:ae174a","x":[10.4,10.4,13.3,14.65,14.65,14.65,15.5,15.5,15.5,15.5,16.4,17.55,17.55,18.4,18.4,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26,27.3,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:16:55f9fa","y":[0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.439882697947214,0.6158357771261,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.439882697947214,0.6158357771261,0.791788856304986,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":13.1378299120235,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.79416666666667,35.5058333333333],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_206
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example1_montage.png"
%}


# Increase dot size

<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5)
  
plotly::ggplotly(p)
</pre>


{% capture plot_207 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:18:50d41b","x":[10.4,10.4,14,14,14,15.7,15.7,15.7,15.7,15.7,15.7,18,18,18,18,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26.65,26.65,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:18:d2898d","y":[0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,1.8,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":24.4363636363636,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.4,35.9],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_207
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example2_montage.png"
%}



Using fixed-width bins.



<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(method="histodot", binwidth = 1.5)
  
plotly::ggplotly(p)
</pre>


{% capture plot_208 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:20:ff88d3","x":[10.5,10.5,13.5,15,15,15,15,15,15,16.5,16.5,18,18,18,18,19.5,19.5,19.5,21,21,21,21,21,22.5,22.5,24,25.5,27,30,30,33,34.5],"ysrc":"nadhil2:20:fa5121","y":[0.160427807486631,0.481283422459893,0.160427807486631,0.160427807486631,0.481283422459893,0.802139037433155,1.12299465240642,1.44385026737968,1.76470588235294,0.160427807486631,0.481283422459893,0.160427807486631,0.481283422459893,0.802139037433155,1.12299465240642,0.160427807486631,0.481283422459893,0.802139037433155,0.160427807486631,0.481283422459893,0.802139037433155,1.12299465240642,1.44385026737968,0.160427807486631,0.481283422459893,0.160427807486631,0.160427807486631,0.160427807486631,0.160427807486631,0.481283422459893,0.160427807486631,0.160427807486631],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":23.9572192513369,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.475,36.525],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_208
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example3_montage.png"
%}



# Various stack methods



<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, stackdir = "center")
  
plotly::ggplotly(p)
</pre>


{% capture plot_209 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:22:b600fc","x":[10.4,10.4,14,14,14,15.7,15.7,15.7,15.7,15.7,15.7,18,18,18,18,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26.65,26.65,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:22:1ee87e","y":[0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,1.8,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":24.4363636363636,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.4,35.9],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.55,0.55],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["-0.50","-0.25","0.00","0.25","0.50"],"tickvals":[-0.5,-0.25,0,0.25,0.5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["-0.50","-0.25","0.00","0.25","0.50"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":54.7945205479452,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_209
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example4_montage.png"
%}







<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, stackdir = "centerwhole")
  
plotly::ggplotly(p)
</pre>


{% capture plot_210 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:24:94f80c","x":[10.4,10.4,14,14,14,15.7,15.7,15.7,15.7,15.7,15.7,18,18,18,18,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26.65,26.65,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:24:758bd9","y":[0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,1.8,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":24.4363636363636,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.4,35.9],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.55,0.55],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["-0.50","-0.25","0.00","0.25","0.50"],"tickvals":[-0.5,-0.25,0,0.25,0.5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["-0.50","-0.25","0.00","0.25","0.50"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":54.7945205479452,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_210
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example5_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example5_montage.png"
%}


# Hiding y axis




<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) + geom_dotplot(binwidth = 1.5) +
  scale_y_continuous(NULL, breaks = NULL)
  
plotly::ggplotly(p)
</pre>


{% capture plot_211 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:26:3e27a8","x":[10.4,10.4,14,14,14,15.7,15.7,15.7,15.7,15.7,15.7,18,18,18,18,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26.65,26.65,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:26:b9c98c","y":[0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,1.8,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":24.4363636363636,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.4,35.9],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":[null],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":[null],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":25.5707762557078,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_211
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example6_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example6_montage.png"
%}



# Overlapping dots vertically



<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, stackratio = .7)
  
plotly::ggplotly(p)
</pre>


{% capture plot_212 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:28:c6b222","x":[10.4,10.4,14,14,14,15.7,15.7,15.7,15.7,15.7,15.7,18,18,18,18,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26.65,26.65,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:28:846ae8","y":[0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,1.8,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":24.4363636363636,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.4,35.9],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_212
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example7_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example7_montage.png"
%}


# Expanding dot diameter


<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, dotsize = 1.25)
  
plotly::ggplotly(p)
</pre>


{% capture plot_213 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:30:3ea776","x":[10.4,10.4,14,14,14,15.7,15.7,15.7,15.7,15.7,15.7,18,18,18,18,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26.65,26.65,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:30:3ad025","y":[0.204545454545455,0.613636363636364,0.204545454545455,0.613636363636364,1.02272727272727,0.204545454545455,0.613636363636364,1.02272727272727,1.43181818181818,1.84090909090909,2.25,0.204545454545455,0.613636363636364,1.02272727272727,1.43181818181818,0.204545454545455,0.613636363636364,1.02272727272727,0.204545454545455,0.613636363636364,1.02272727272727,1.43181818181818,1.84090909090909,0.204545454545455,0.613636363636364,0.204545454545455,0.204545454545455,0.613636363636364,0.204545454545455,0.613636363636364,0.204545454545455,0.204545454545455],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":30.5454545454545,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.4,35.9],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_213
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example8_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example8_montage.png"
%}


# Changing fill colour and stroke witdth

<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg)) +
  geom_dotplot(binwidth = 1.5, fill = "white", stroke = 2)
  
plotly::ggplotly(p)
</pre>


{% capture plot_214 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:32:9cbf5f","x":[10.4,10.4,14,14,14,15.7,15.7,15.7,15.7,15.7,15.7,18,18,18,18,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26.65,26.65,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:32:61aeb8","y":[0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,1.8,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,0.163636363636364,0.490909090909091,0.818181818181818,0.163636363636364,0.490909090909091,0.818181818181818,1.14545454545455,1.47272727272727,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364,0.490909090909091,0.163636363636364,0.490909090909091,0.163636363636364,0.163636363636364],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":7.55905511811024},"size":24.4363636363636,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.4,35.9],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_214
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example9_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example9_montage.png"
%}


# Stacking along y axis



<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = 1, y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center")
  
plotly::ggplotly(p)
</pre>


{% capture plot_215 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:34:46ac17","x":[0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.439882697947214,0.6158357771261,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.439882697947214,0.6158357771261,0.791788856304986,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428],"ysrc":"nadhil2:34:eb51c5","y":[10.4,10.4,13.3,14.65,14.65,14.65,15.5,15.5,15.5,15.5,16.4,17.55,17.55,18.4,18.4,19.45,19.45,19.45,21.25,21.25,21.25,21.25,21.25,22.8,22.8,24.4,26,27.3,30.4,30.4,32.4,33.9],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":9.3841642228739,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.505,1.495],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"x"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.75","1.00","1.25"],"tickvals":[0.75,1,1.25],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.75","1.00","1.25"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[8.79416666666667,35.5058333333333],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_215
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example10_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example10_montage.png"
%}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(cyl), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center")
  
plotly::ggplotly(p)
</pre>


{% capture plot_216 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:36:c1f455","x":[0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.439882697947214,0.6158357771261,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328],"ysrc":"nadhil2:36:3d39b5","y":[21.45,21.45,22.8,22.8,24.4,26,27.3,30.4,30.4,32.4,33.9,17.95,17.95,19.45,19.45,21.2,21.2,21.2,10.4,10.4,13.3,14.65,14.65,14.65,15.5,15.5,15.5,15.5,16.4,17.3,18.95,18.95],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":9.3841642228739,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,3.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(cyl)"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","6","8"],"tickvals":[1,2,3],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","6","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[8.79416666666667,35.5058333333333],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_216
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example11_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example11_montage.png"
%}






<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(cyl), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "centerwhole")
  
plotly::ggplotly(p)
</pre>


{% capture plot_217 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:38:578551","x":[0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.439882697947214,0.6158357771261,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328],"ysrc":"nadhil2:38:699cde","y":[21.45,21.45,22.8,22.8,24.4,26,27.3,30.4,30.4,32.4,33.9,17.95,17.95,19.45,19.45,21.2,21.2,21.2,10.4,10.4,13.3,14.65,14.65,14.65,15.5,15.5,15.5,15.5,16.4,17.3,18.95,18.95],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":9.3841642228739,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,3.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(cyl)"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["4","6","8"],"tickvals":[1,2,3],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["4","6","8"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[8.79416666666667,35.5058333333333],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_217
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example12_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example12_montage.png"
%}


# Changing colour with dodge position


<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(vs), fill = factor(cyl), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center", position = "dodge")
  
plotly::ggplotly(p)
</pre>


{% capture plot_218 %}
  {% raw %}
    {"data":[{"mode":"markers","name":"4","type":"scatter","xsrc":"nadhil2:40:3560c0","x":[0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428],"ysrc":"nadhil2:40:65924e","y":[26,21.45,21.45,22.8,22.8,24.4,27.3,30.4,30.4,32.4,33.9],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":9.3841642228739,"color":"rgba(248,118,109,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"4"},{"mode":"markers","name":"6","type":"scatter","xsrc":"nadhil2:40:3dc8d4","x":[0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428],"ysrc":"nadhil2:40:d973e7","y":[19.7,21,21,17.95,17.95,19.2,21.4],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":9.3841642228739,"color":"rgba(0,186,56,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"6"},{"mode":"markers","name":"8","type":"scatter","xsrc":"nadhil2:40:0584d0","x":[0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.263929618768328,0.439882697947214,0.6158357771261,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328],"ysrc":"nadhil2:40:dd7fe0","y":[10.4,10.4,13.3,14.65,14.65,14.65,15.5,15.5,15.5,15.5,16.4,17.3,18.95,18.95],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":9.3841642228739,"color":"rgba(97,156,255,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"8"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(vs)"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","1"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","1"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[8.79416666666667,35.5058333333333],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(cyl)","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_218
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example13_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example13_montage.png"
%}



# Aligning bins between groups


<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = factor(am), y = mpg)) +
  geom_dotplot(binaxis = "y", stackdir = "center", binpositions="all")
  
plotly::ggplotly(p)
</pre>


{% capture plot_219 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil2:42:a86ee4","x":[0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.439882697947214,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.0879765395894428,0.263929618768328,0.0879765395894428,0.0879765395894428],"ysrc":"nadhil2:42:38d62f","y":[10.4,10.4,13.3,14.65,14.65,15.5,15.5,15.5,16.4,17.55,17.55,18.4,18.4,19.45,19.45,21.25,21.25,22.8,24.4,14.65,15.5,19.45,21.25,21.25,21.25,22.8,26,27.3,30.4,30.4,32.4,33.9],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":9.3841642228739,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.4,2.6],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(am)"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0","1"],"tickvals":[1,2],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0","1"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[8.79416666666667,35.5058333333333],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_219
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example14_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example14_montage.png"
%}



# Stacking groups with different fill


<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg, fill = factor(cyl))) +
  geom_dotplot(stackgroups = TRUE, binwidth = 1, binpositions = "all")
  
plotly::ggplotly(p)
</pre>


{% capture plot_220 %}
  {% raw %}
    {"data":[{"mode":"markers","name":"4","type":"scatter","xsrc":"nadhil2:44:b2cf04","x":[21.25,21.25,22.8,22.8,24.4,26,27.3,30.4,30.4,32.4,33.9],"ysrc":"nadhil2:44:bf683f","y":[0.111317254174397,0.333951762523191,0.111317254174397,0.333951762523191,0.111317254174397,0.111317254174397,0.111317254174397,0.111317254174397,0.333951762523191,0.111317254174397,0.111317254174397],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":16.6233766233766,"color":"rgba(248,118,109,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"4"},{"mode":"markers","name":"6","type":"scatter","xsrc":"nadhil2:44:abc7f2","x":[17.7,17.7,18.95,19.7,21.25,21.25,21.25],"ysrc":"nadhil2:44:a3ce92","y":[0.111317254174397,0.333951762523191,0.111317254174397,0.111317254174397,0.556586270871985,0.779220779220779,1.00185528756957],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":16.6233766233766,"color":"rgba(0,186,56,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"6"},{"mode":"markers","name":"8","type":"scatter","xsrc":"nadhil2:44:da583a","x":[10.4,10.4,13.3,14.75,14.75,14.75,14.75,14.75,15.95,15.95,15.95,17.7,18.95,18.95],"ysrc":"nadhil2:44:362606","y":[0.111317254174397,0.333951762523191,0.111317254174397,0.111317254174397,0.333951762523191,0.556586270871985,0.779220779220779,1.00185528756957,0.111317254174397,0.333951762523191,0.556586270871985,0.556586270871985,0.333951762523191,0.556586270871985],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":16.6233766233766,"color":"rgba(97,156,255,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"8"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.675,35.625],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(cyl)","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_220
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example15_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example15_montage.png"
%}





<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = mpg, fill = factor(cyl))) +
  geom_dotplot(stackgroups = TRUE, binwidth = 1, method = "histodot")
  
plotly::ggplotly(p)
</pre>


{% capture plot_221 %}
  {% raw %}
    {"data":[{"mode":"markers","name":"4","type":"scatter","xsrc":"nadhil2:46:d965c3","x":[21,21,23,23,24,26,27,30,30,32,34],"ysrc":"nadhil2:46:fd705a","y":[0.109090909090909,0.327272727272727,0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909,0.109090909090909,0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":16.2909090909091,"color":"rgba(248,118,109,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"4"},{"mode":"markers","name":"6","type":"scatter","xsrc":"nadhil2:46:3a0290","x":[18,18,19,20,21,21,21],"ysrc":"nadhil2:46:509ae5","y":[0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909,0.545454545454545,0.763636363636364,0.981818181818182],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":16.2909090909091,"color":"rgba(0,186,56,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"6"},{"mode":"markers","name":"8","type":"scatter","xsrc":"nadhil2:46:6792e2","x":[10,10,13,14,15,15,15,15,15,16,16,17,19,19],"ysrc":"nadhil2:46:8e643b","y":[0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909,0.109090909090909,0.327272727272727,0.545454545454545,0.763636363636364,0.981818181818182,0.109090909090909,0.327272727272727,0.109090909090909,0.327272727272727,0.545454545454545],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":16.2909090909091,"color":"rgba(97,156,255,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"8"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[8.25,35.75],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[-0.05,1.05],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"count"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["0.00","0.25","0.50","0.75","1.00"],"tickvals":[0,0.25,0.5,0.75,1],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["0.00","0.25","0.50","0.75","1.00"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":48.9497716894977,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(cyl)","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_221
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example16_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example16_montage.png"
%}


# Flip plot orientation


<pre class="mcode">
p <-    
 ggplot(mtcars, aes(x = 1, y = mpg, fill = factor(cyl))) +
  geom_dotplot(binaxis = "y", stackgroups = TRUE, binwidth = 1, method = "histodot")
  
plotly::ggplotly(p)
</pre>

{% capture plot_222 %}
  {% raw %}
    {"data":[{"mode":"markers","name":"4","type":"scatter","xsrc":"nadhil2:48:53ab1e","x":[0.109090909090909,0.327272727272727,0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909,0.109090909090909,0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909],"ysrc":"nadhil2:48:26c53b","y":[21,21,23,23,24,26,27,30,30,32,34],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":11.6363636363636,"color":"rgba(248,118,109,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"4"},{"mode":"markers","name":"6","type":"scatter","xsrc":"nadhil2:48:3b532f","x":[0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909,0.545454545454545,0.763636363636364,0.981818181818182],"ysrc":"nadhil2:48:e0a2b3","y":[18,18,19,20,21,21,21],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":11.6363636363636,"color":"rgba(0,186,56,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"6"},{"mode":"markers","name":"8","type":"scatter","xsrc":"nadhil2:48:0c8328","x":[0.109090909090909,0.327272727272727,0.109090909090909,0.109090909090909,0.109090909090909,0.327272727272727,0.545454545454545,0.763636363636364,0.981818181818182,0.109090909090909,0.327272727272727,0.109090909090909,0.327272727272727,0.545454545454545],"ysrc":"nadhil2:48:9e3c6f","y":[10,10,13,14,15,15,15,15,15,16,16,17,19,19],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":3.77952755905512},"size":11.6363636363636,"color":"rgba(97,156,255,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","hoverinfo":"text","showlegend":true,"legendgroup":"8"}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[0.955,1.945],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"x"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["1.00","1.25","1.50","1.75"],"tickvals":[1,1.25,1.5,1.75],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["1.00","1.25","1.50","1.75"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[8.25,35.75],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"legend":{"y":0.93503937007874,"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":37.2602739726027,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":true,"annotations":[{"x":1.02,"y":1,"ax":0,"ay":0,"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"factor(cyl)","xref":"paper","yref":"paper","xanchor":"left","yanchor":"bottom","showarrow":false,"textangle":0,"legendTitle":true}],"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_222
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example17_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Geoms/geom_dotplot/example17_montage.png"
%}

