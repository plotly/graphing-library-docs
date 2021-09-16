---
  description: Creates annotation as high-performance rectangular tiling and convert them with ggplotly.
  function: annotation_raster
  permalink: /ggplot2/layers/Annotations/annotation_raster/
  layout: base
  language: ggplot2
  name: annotation_raster
  reference: https://ggplot2.tidyverse.org/reference/
---

# Default plot

Set `anootation_raster` at specific position.

<pre class="mcode">
rainbow <- matrix(hcl(seq(0, 360, length.out = 50 * 50), 80, 70), nrow = 50)
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  geom_point() +
  annotation_raster(rainbow, 15, 20, 3, 4)
  
plotly::ggplotly(p)
</pre>

{% capture plot_279 %}
  {% raw %}
    {"data":[{"mode":"markers","type":"scatter","xsrc":"nadhil:1004:3a9586","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:1004:45c3d3","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1004:533d93","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false},{"frame":null,"xaxis":"x","yaxis":"y","visible":false,"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"images":[{"x":15,"y":3,"xref":"x","yref":"y","layer":"above","sizex":5,"sizey":1,"sizing":"stretch","source":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFaklEQVRogZ1azW7cRgz+KMlw0sYOghwCNA+QR+gb9j36TL33WKCHoLWd2PV6d9mDNBr+zzoE1iuNRhxyyI/8VjKdf/udz/MDTvMDjss9jss9DvMdDssdnpd/8Lx8xdPyF57mOzwuwPcZ+LYAD/MN7qdf8O/8EV+nD/h7eo8/p1v8Md0CdAvQDUDvAGwf/gngn9fv81vg9AY4XQPHa/x6vMKX44LPLzM+vQAfD8CHF+D9gXHzcsK74wveHg94c3zG9fk/XJ2fMPMjJnoE0Xdg+oYJqTAABoPXU4rmkDpkUDaxGO9XaFu2aVHaOLcUgHSEt78crBlpoe0KbS5TMCs3Xl6XBod3RCbtdq2rTvJEfZO+YZ+1jxNYHiPbtMAE9jPILznU1M95kFpk0gvdbZVG1K7JfY32kMJjmz76bukRAxxvWXfErKun5wnKIhprhDIHmrfeyXWEnPsdJ5Hx+txhxLqwRiUSEhFo55EDY2lO/JgUGOl/WY1kRrLbsziFEhtcQjq8pKt3uwuMyNV4T52OkXZVOzSoP6FJJaICZyMJHBnnY1PJYl/i8qtMSs0gYaztHbGTEdj3ODJY4aE7xCFOZHDX43PshZqvbfF9ZKwhaBXYI8LFbsblbneAdFS00ZGJZt/ZxKsiEqmVAUZEfxfu+T4iqxSb8cqUTJzrBcGIeowvv6SNly5F+9GNFxh5ZS1tlcovwOKrJluTTqsBM/PLQ7arHCMDsBuNfozzdrbJjhEpnUMJilJ2/jZWYaRmv3nnyfJAJ3Zefl0FE2c7FZHMl7aIjAz34+6OiwGfYiSgpbIMyxmkl8/ZbySkPpKiVNtQdaqpJoTsjkTVdHJ+RRSqWRXBGXR2NnGVUahJo0+tzKTcjBRJF4U5xUi/nK2tdfcJMUYuBTu5hmgrlzVeisKI333PfS3DlfE71/amYkurdMhLYA05Gh/BOu4yKxvWPTbHiDNzv+kKFvrp7FKmiEU508Ps6IONvp/2cdouJ2nVGxUWvbSSiIo4IYMRdr1DK8nSS8btFJqREcj1eOFOUarI2JVjjITsLOZX3XBPGk8YiNsnwpwtL2e5xPBp7zDiO3pF8Zv69XP8AaTPyH8hSmNHmuPySxXTFZNaH6H1cxbjfU6gXCibncYsxXQULB+bfCNsWn34YpXZrAwbWiaIHuIWyrXalQe/2UX9MtSk/16/jOFmkZpgdj8HZXJh11PwgLoz7QY1mmLHQzHqmiPyzpzWW68M+5V9Qx9zkT6eNNhlxxHqKeESkOXYiHCxpSj2yJ81tQ1yTBm5vsyhCbpQlvyZ9z/GmvDZb9pezZg2NH83UpEO0hjh+I7KlCYpRno71J1dsAvXENMluY15U8L947w69Xl61eQXYl1YV7taH7FZ/AriyMBkGmKUkKFTBlBJ+Y2OY461jm9ayZoxdko+sI6dqTfVYIR79M0EBqt0kkvpGFaZXYN9naXnlFsQ+DPFEfCMt2nvBKF/dLYmhrO83r9tWgV7qQlHUiPDJ42sxrxTEbhHlb4Cu7oSpJo9jqxwNL6nWM6xbCR0lGrDrUiQWoeAVpJHrZgRPmnEjouMvkhwX9J7c/wQYtIotUpWF6olhZHo4UMbl2dNg+ZZOUYivFDfccAR7TyO+XYV5ZcFuG0j7M+zxkvUYoE+Jja+DTMgf4/4yfnLBF1rulMVRuL2trPfYWfPZMOIISBmgr/lkrFcvGPy/XpZrdRCflXxfiRxxjxZ2VkvemqNMZLvb04pdasdRSj8z4fqV4hVHf9SvFzIfOy1zAY7nrxD1HEasdsYSZVjfdz+c4B8vuXTKdjgbaJ5qxtNZnsrGuuVb6gu6+xG2L8XCRYzGnzPA4D/AZt6bKsIDjWJAAAAAElFTkSuQmCC","xanchor":"left","yanchor":"bottom"}],"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_279
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example1_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example1_montage.png"
%}




# Fill the whole plot


<pre class="mcode">
rainbow <- matrix(hcl(seq(0, 360, length.out = 50 * 50), 80, 70), nrow = 50)
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  annotation_raster(rainbow, -Inf, Inf, -Inf, Inf) +
  geom_point()
  
plotly::ggplotly(p)
</pre>


{% capture plot_280 %}
  {% raw %}
    {"data":[{"frame":null,"xaxis":"x","yaxis":"y","visible":false,"hoverinfo":"text","showlegend":false},{"mode":"markers","type":"scatter","xsrc":"nadhil:1006:01a87e","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:1006:33aff5","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1006:0a3b56","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"images":[{"x":null,"y":null,"xref":"x","yref":"y","layer":"below","sizex":null,"sizey":null,"sizing":"stretch","source":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFaklEQVRogZ1azW7cRgz+KMlw0sYOghwCNA+QR+gb9j36TL33WKCHoLWd2PV6d9mDNBr+zzoE1iuNRhxyyI/8VjKdf/udz/MDTvMDjss9jss9DvMdDssdnpd/8Lx8xdPyF57mOzwuwPcZ+LYAD/MN7qdf8O/8EV+nD/h7eo8/p1v8Md0CdAvQDUDvAGwf/gngn9fv81vg9AY4XQPHa/x6vMKX44LPLzM+vQAfD8CHF+D9gXHzcsK74wveHg94c3zG9fk/XJ2fMPMjJnoE0Xdg+oYJqTAABoPXU4rmkDpkUDaxGO9XaFu2aVHaOLcUgHSEt78crBlpoe0KbS5TMCs3Xl6XBod3RCbtdq2rTvJEfZO+YZ+1jxNYHiPbtMAE9jPILznU1M95kFpk0gvdbZVG1K7JfY32kMJjmz76bukRAxxvWXfErKun5wnKIhprhDIHmrfeyXWEnPsdJ5Hx+txhxLqwRiUSEhFo55EDY2lO/JgUGOl/WY1kRrLbsziFEhtcQjq8pKt3uwuMyNV4T52OkXZVOzSoP6FJJaICZyMJHBnnY1PJYl/i8qtMSs0gYaztHbGTEdj3ODJY4aE7xCFOZHDX43PshZqvbfF9ZKwhaBXYI8LFbsblbneAdFS00ZGJZt/ZxKsiEqmVAUZEfxfu+T4iqxSb8cqUTJzrBcGIeowvv6SNly5F+9GNFxh5ZS1tlcovwOKrJluTTqsBM/PLQ7arHCMDsBuNfozzdrbJjhEpnUMJilJ2/jZWYaRmv3nnyfJAJ3Zefl0FE2c7FZHMl7aIjAz34+6OiwGfYiSgpbIMyxmkl8/ZbySkPpKiVNtQdaqpJoTsjkTVdHJ+RRSqWRXBGXR2NnGVUahJo0+tzKTcjBRJF4U5xUi/nK2tdfcJMUYuBTu5hmgrlzVeisKI333PfS3DlfE71/amYkurdMhLYA05Gh/BOu4yKxvWPTbHiDNzv+kKFvrp7FKmiEU508Ps6IONvp/2cdouJ2nVGxUWvbSSiIo4IYMRdr1DK8nSS8btFJqREcj1eOFOUarI2JVjjITsLOZX3XBPGk8YiNsnwpwtL2e5xPBp7zDiO3pF8Zv69XP8AaTPyH8hSmNHmuPySxXTFZNaH6H1cxbjfU6gXCibncYsxXQULB+bfCNsWn34YpXZrAwbWiaIHuIWyrXalQe/2UX9MtSk/16/jOFmkZpgdj8HZXJh11PwgLoz7QY1mmLHQzHqmiPyzpzWW68M+5V9Qx9zkT6eNNhlxxHqKeESkOXYiHCxpSj2yJ81tQ1yTBm5vsyhCbpQlvyZ9z/GmvDZb9pezZg2NH83UpEO0hjh+I7KlCYpRno71J1dsAvXENMluY15U8L947w69Xl61eQXYl1YV7taH7FZ/AriyMBkGmKUkKFTBlBJ+Y2OY461jm9ayZoxdko+sI6dqTfVYIR79M0EBqt0kkvpGFaZXYN9naXnlFsQ+DPFEfCMt2nvBKF/dLYmhrO83r9tWgV7qQlHUiPDJ42sxrxTEbhHlb4Cu7oSpJo9jqxwNL6nWM6xbCR0lGrDrUiQWoeAVpJHrZgRPmnEjouMvkhwX9J7c/wQYtIotUpWF6olhZHo4UMbl2dNg+ZZOUYivFDfccAR7TyO+XYV5ZcFuG0j7M+zxkvUYoE+Jja+DTMgf4/4yfnLBF1rulMVRuL2trPfYWfPZMOIISBmgr/lkrFcvGPy/XpZrdRCflXxfiRxxjxZ2VkvemqNMZLvb04pdasdRSj8z4fqV4hVHf9SvFzIfOy1zAY7nrxD1HEasdsYSZVjfdz+c4B8vuXTKdjgbaJ5qxtNZnsrGuuVb6gu6+xG2L8XCRYzGnzPA4D/AZt6bKsIDjWJAAAAAElFTkSuQmCC","xanchor":"left","yanchor":"bottom"}],"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_280
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example2_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example2_montage.png"
%}


# Sequential raster

<pre class="mcode">
rainbow2 <- matrix(hcl(seq(0, 360, length.out = 10), 80, 70), nrow = 1)
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  annotation_raster(rainbow2, -Inf, Inf, -Inf, Inf) +
  geom_point()
  
plotly::ggplotly(p)
</pre>


{% capture plot_281 %}
  {% raw %}
    {"data":[{"frame":null,"xaxis":"x","yaxis":"y","visible":false,"hoverinfo":"text","showlegend":false},{"mode":"markers","type":"scatter","xsrc":"nadhil:1008:e2f1e7","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:1008:9e9132","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1008:25579e","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"images":[{"x":null,"y":null,"xref":"x","yref":"y","layer":"below","sizex":null,"sizey":null,"sizing":"stretch","source":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAANElEQVQImQEpANb/Af6Gof/qFLMA0hSsALMRRQCTCE4AAP4+AEbvKAB84wYANOveAAgExABhmA8mX/59eAAAAABJRU5ErkJggg==","xanchor":"left","yanchor":"bottom"}],"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_281
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example3_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example3_montage.png"
%}



# Interploate raster colours


<pre class="mcode">
rainbow2 <- matrix(hcl(seq(0, 360, length.out = 10), 80, 70), nrow = 1)
p <-    
 ggplot(mtcars, aes(mpg, wt)) +
  annotation_raster(rainbow2, -Inf, Inf, -Inf, Inf, interpolate = TRUE) +
  geom_point()
  
plotly::ggplotly(p)
</pre>

{% capture plot_282 %}
  {% raw %}
    {"data":[{"frame":null,"xaxis":"x","yaxis":"y","visible":false,"hoverinfo":"text","showlegend":false},{"mode":"markers","type":"scatter","xsrc":"nadhil:1010:27f097","x":[21,21,22.8,21.4,18.7,18.1,14.3,24.4,22.8,19.2,17.8,16.4,17.3,15.2,10.4,10.4,14.7,32.4,30.4,33.9,21.5,15.5,15.2,13.3,19.2,27.3,26,30.4,15.8,19.7,15,21.4],"ysrc":"nadhil:1010:44e73c","y":[2.62,2.875,2.32,3.215,3.44,3.46,3.57,3.19,3.15,3.44,3.44,4.07,3.73,3.78,5.25,5.424,5.345,2.2,1.615,1.835,2.465,3.52,3.435,3.84,3.845,1.935,2.14,1.513,3.17,2.77,3.57,2.78],"frame":null,"xaxis":"x","yaxis":"y","marker":{"line":{"color":"rgba(0,0,0,1)","width":1.88976377952756},"size":5.66929133858268,"color":"rgba(0,0,0,1)","symbol":"circle","opacity":1,"autocolorscale":false},"hoveron":"points","textsrc":"nadhil:1010:c66f87","text":["mpg:21.0wt:2.620","mpg:21.0wt:2.875","mpg:22.8wt:2.320","mpg:21.4wt:3.215","mpg:18.7wt:3.440","mpg:18.1wt:3.460","mpg:14.3wt:3.570","mpg:24.4wt:3.190","mpg:22.8wt:3.150","mpg:19.2wt:3.440","mpg:17.8wt:3.440","mpg:16.4wt:4.070","mpg:17.3wt:3.730","mpg:15.2wt:3.780","mpg:10.4wt:5.250","mpg:10.4wt:5.424","mpg:14.7wt:5.345","mpg:32.4wt:2.200","mpg:30.4wt:1.615","mpg:33.9wt:1.835","mpg:21.5wt:2.465","mpg:15.5wt:3.520","mpg:15.2wt:3.435","mpg:13.3wt:3.840","mpg:19.2wt:3.845","mpg:27.3wt:1.935","mpg:26.0wt:2.140","mpg:30.4wt:1.513","mpg:15.8wt:3.170","mpg:19.7wt:2.770","mpg:15.0wt:3.570","mpg:21.4wt:2.780"],"hoverinfo":"text","showlegend":false}],"layout":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"xaxis":{"type":"linear","range":[9.225,35.075],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"mpg"},"anchor":"y","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["10","15","20","25","30","35"],"categoryorder":"array","showticklabels":true},"yaxis":{"type":"linear","range":[1.31745,5.61955],"ticks":"outside","title":{"font":{"size":14.6118721461187,"color":"rgba(0,0,0,1)","family":""},"text":"wt"},"anchor":"x","domain":[0,1],"nticks":null,"ticklen":3.65296803652968,"showgrid":true,"showline":false,"tickfont":{"size":11.689497716895,"color":"rgba(77,77,77,1)","family":""},"tickmode":"array","ticktext":["2","3","4","5"],"tickvals":[2,3,4,5],"zeroline":false,"autorange":false,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"linecolor":null,"linewidth":0,"tickangle":0,"tickcolor":"rgba(51,51,51,1)","tickwidth":0.66417600664176,"automargin":true,"hoverformat":".2f","categoryarray":["2","3","4","5"],"categoryorder":"array","showticklabels":true},"images":[{"x":null,"y":null,"xref":"x","yref":"y","layer":"below","sizex":null,"sizey":null,"sizing":"stretch","source":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAANElEQVQImQEpANb/Af6Gof/qFLMA0hSsALMRRQCTCE4AAP4+AEbvKAB84wYANOveAAgExABhmA8mX/59eAAAAABJRU5ErkJggg==","xanchor":"left","yanchor":"bottom"}],"legend":{"font":{"size":11.689497716895,"color":"rgba(0,0,0,1)","family":""},"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756},"margin":{"b":40.1826484018265,"l":31.4155251141553,"r":7.30593607305936,"t":26.2283105022831},"shapes":[{"x0":0,"x1":1,"y0":0,"y1":1,"line":{"color":null,"width":0,"linetype":[]},"type":"rect","xref":"paper","yref":"paper","fillcolor":null}],"barmode":"relative","hovermode":"closest","showlegend":false,"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)"},"frames":[]}
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html
    raw_json_file=plot_282
    ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example4_ssim_map.png" 
    compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_ggplot2/ggplot2/Layers/Annotations/annotation_raster/example4_montage.png"
%}


