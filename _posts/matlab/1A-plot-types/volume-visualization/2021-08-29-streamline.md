---
layout: post
title:  MATLAB streamline
description: Learn how to make 1 streamline charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/volume-visualization/streamline/
layout: matlab
function: streamline
reference: https://mathworks.com/help/matlab/ref/streamline.html
github: volume-visualization/2021-08-29-streamline.md
---

## Draw Streamlines

> Define arrays `x`, `y`, `u`, and `v`. 

<pre>
  [x,y] = meshgrid(0:0.1:1,0:0.1:1);
u = x;
v = -y;
</pre>

> Create a quiver plot of the data. Plot streamlines that start at different points along the line y=1.

<pre class="mcode">
  figure
quiver(x,y,u,v)

startx = 0.1:0.1:1;
starty = ones(size(startx));
streamline(x,y,u,v,startx,starty)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/952.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamline/plot_0_0_draw_streamlines_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamline/plot_0_0_draw_streamlines_ssim_map.png" 
  index=691
%}



<!--------------------- EXAMPLE BREAK ------------------------->

