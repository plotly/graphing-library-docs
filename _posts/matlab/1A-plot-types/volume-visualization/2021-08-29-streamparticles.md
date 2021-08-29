---
layout: post
title:  MATLAB streamparticles
description: Learn how to make 1 streamparticles charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/volume-visualization/2021-08-29-streamparticles/
layout: matlab
function: streamparticles
reference: https://mathworks.com/help/matlab/ref/streamparticles.html
github: volume-visualization/2021-08-29-streamparticles.md
---

## Animate Flow Without Displaying Streamlines

> This example uses streamlines in the `z = 5` plane to animate the flow along these lines with stream particles.

<pre class="mcode">
  load wind
figure
daspect([1,1,1]); 
view(2)
[verts,averts] = streamslice(x,y,z,u,v,w,[],[],5); 
sl = streamline([verts averts]);
axis tight manual off;
set(sl,<span style='color:#A020F0'>'Visible'</span>,<span style='color:#A020F0'>'off'</span>)
iverts = interpstreamspeed(x,y,z,u,v,w,verts,.05);
zlim([4.9,5.1]);
streamparticles(iverts, 200, ...
    <span style='color:#A020F0'>'Animate'</span>,15,<span style='color:#A020F0'>'FrameRate'</span>,40, ...
    <span style='color:#A020F0'>'MarkerSize'</span>,10,<span style='color:#A020F0'>'MarkerFaceColor'</span>,[0 .5 0])
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/955.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamparticles/plot_0_0_animate_flow_without_displaying_streamlines_invalid_0.0000_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamparticles/plot_0_0_animate_flow_without_displaying_streamlines_invalid_0.0000_ssim_map.png" 
  index=692
%}



<!--------------------- EXAMPLE BREAK ------------------------->

