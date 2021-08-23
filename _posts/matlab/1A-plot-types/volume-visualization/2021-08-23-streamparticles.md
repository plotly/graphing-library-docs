---
layout: post
title:  MATLAB streamparticles
description: Learn how to make 1 streamparticles charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/volume-visualization/streamparticles/
layout: matlab
function: streamparticles
reference: https://mathworks.com/help/matlab/ref/streamparticles.html
github: volume-visualization/streamparticles.md
---

## Animate Flow Without Displaying Streamlines

> This example uses streamlines in the `z = 5` plane to animate the flow along these lines with stream particles.

<pre class="mcode">load wind
figure
daspect([1,1,1]); 
view(2)
[verts,averts] = streamslice(x,y,z,u,v,w,[],[],5); 
sl = streamline([verts averts]);
axis tight manual off;
set(sl,'Visible','off')
iverts = interpstreamspeed(x,y,z,u,v,w,verts,.05);
zlim([4.9,5.1]);
streamparticles(iverts, 200, ...
    'Animate',15,'FrameRate',40, ...
    'MarkerSize',10,'MarkerFaceColor',[0 .5 0])
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/955.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/volume-visualization/streamparticles/plot_0_0_animate_flow_without_displaying_streamlines_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/volume-visualization/streamparticles/plot_0_0_animate_flow_without_displaying_streamlines_ssim_map.png" 
  index=623
%}



<!--------------------- EXAMPLE BREAK ------------------------->

