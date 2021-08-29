---
layout: post
title:  MATLAB streamslice
description: Learn how to make 1 streamslice charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/volume-visualization/streamslice/
layout: matlab
function: streamslice
reference: https://mathworks.com/help/matlab/ref/streamslice.html
github: volume-visualization/2021-08-29-streamslice.md
---

## Plot Streamlines in Slice Plane

> Load the `wind` data set, which loads the three-dimensional arrays `u`, `v`, `w`, `x`, `y`, and `z`. Draw streamlines along the slice plane where `z = 5`.

<pre class="mcode">
  load wind
streamslice(x,y,z,u,v,w,[],[],5)
axis tight
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/968.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamslice/plot_0_0_plot_streamlines_in_slice_plane_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/volume-visualization/streamslice/plot_0_0_plot_streamlines_in_slice_plane_ssim_map.png" 
  index=698
%}



<!--------------------- EXAMPLE BREAK ------------------------->

