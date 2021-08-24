---
layout: post
title:  MATLAB plotmatrix
description: Learn how to make 4 plotmatrix charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/data-distribution-plots/2021-08-23-plotmatrix/
layout: matlab
function: plotmatrix
reference: https://mathworks.com/help/matlab/ref/plotmatrix.html
github: data-distribution-plots/plotmatrix.md
---

## Create Scatter Plot Matrix with Two Matrix Inputs

> Create `X` as a matrix of random data and `Y` as a matrix of integer values. Then, create a scatter plot matrix of the columns of `X` against the columns of `Y`.

<pre class="mcode">
  X = randn(50,3);
Y = reshape(1:150,50,3);  
plotmatrix(X,Y)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_0_0_create_scatter_plot_matrix_with_two_matrix_inputs_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_0_0_create_scatter_plot_matrix_with_two_matrix_inputs_ssim_map.png" 
  index=144
%}

> The subplot in the ith row, jth column of the figure is a scatter plot of the ith column of `Y` against the jth column of `X`. 



<!--------------------- EXAMPLE BREAK ------------------------->

## Create Scatter Plot Matrix with One Matrix Input

> Create a scatter plot matrix of random data. The subplot in the ith row, jth column of the matrix is a scatter plot of the ith column of `X` against the jth column of `X`. Along the diagonal are histogram plots of each column of `X`. 

<pre class="mcode">
  X = randn(50,3);  
plotmatrix(X)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_1_0_create_scatter_plot_matrix_with_one_matrix_input_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_1_0_create_scatter_plot_matrix_with_one_matrix_input_ERROR_CRASH__ssim_map.png" 
  index=145
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Marker Type and Color

> Create a scatter plot matrix of random data. Specify the marker type and the color for the scatter plots.

<pre class="mcode">
  X = randn(50,3);  
plotmatrix(X,'*r')
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_2_0_specify_marker_type_and_color_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_2_0_specify_marker_type_and_color_ERROR_CRASH__ssim_map.png" 
  index=146
%}

> The `LineSpec` option sets properties for the scatter plots. To set properties for the histogram plots, return the histogram objects.



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Scatter Plot Matrix After Creation

> Create a scatter plot matrix of random data. 

<pre class="mcode">
  rng default
X = randn(50,3);
[S,AX,BigAx,H,HAx] = plotmatrix(X);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_3_0_modify_scatter_plot_matrix_after_creation_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_3_0_modify_scatter_plot_matrix_after_creation_ERROR_CRASH__ssim_map.png" 
  index=147
%}

> To set properties for the scatter plots, use `S`. To set properties for the histograms, use `H`. To set axes properties, use `AX`, `BigAx`, and `HAx`. Use dot notation to set properties.

> Set the color and marker type for the scatter plot in the lower left corner of the figure. Set the color for the histogram plot in the lower right corner. Use the `title` command to title the figure.

<pre class="mcode">
  S(3).Color = 'g';
S(3).Marker = '*';  

H(3).EdgeColor = 'k';
H(3).FaceColor = 'g';  

title(BigAx,'A Comparison of Data Sets')
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_3_0_modify_scatter_plot_matrix_after_creation_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/plotmatrix/plot_3_0_modify_scatter_plot_matrix_after_creation_ERROR_CRASH__ssim_map.png" 
  index=147
%}



<!--------------------- EXAMPLE BREAK ------------------------->

