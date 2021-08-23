---
layout: post
title:  MATLAB fimplicit
description: Learn how to make 4 fimplicit charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/line-plots/2021-08-23-fimplicit/
layout: matlab
function: fimplicit
reference: https://mathworks.com/help/matlab/ref/fimplicit.html
github: line-plots/fimplicit.md
---

## Plot Implicit Function

> Plot the hyperbola described by the function x2-y2-1=0 over the default interval of `[-5 5]` for *x* and *y*.

<pre class="mcode">
  fimplicit(@(x,y) x.^2 - y.^2 - 1)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/492.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_0_0_plot_implicit_function_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_0_0_plot_implicit_function_ssim_map.png" 
  index=313
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Plotting Interval

> Plot the function x2+y2-3=0 over the intervals `[-3 0]` for `x` and `[-2 2]` for `y`.

<pre class="mcode">
  f = @(x,y) x.^2 + y.^2 - 3;
fimplicit(f,[-3 0 -2 2])
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/494.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_1_0_specify_plotting_interval_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_1_0_specify_plotting_interval_ssim_map.png" 
  index=314
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Appearance of Implicit Plot

> Plot two circles centered at `(0,0)` with different radius values. For the first circle, use a dotted, red line. For the second circle, use a dashed, green line with a line width of 2 points.

<pre class="mcode">
  f1 = @(x,y) x.^2 + y.^2 - 1;
fimplicit(f1,':r')

hold on
f2 = @(x,y) x.^2 + y.^2 - 2;
fimplicit(f2,'--g','LineWidth',2)
hold off
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/496.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_2_0_modify_appearance_of_implicit_plot_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_2_0_modify_appearance_of_implicit_plot_ssim_map.png" 
  index=315
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Modify Implicit Plot After Creation

> Plot the implicit function ysin(x)+xcos(y)-1=0 and assign the implicit function line object to the variable `fp`.

<pre class="mcode">
  fp = fimplicit(@(x,y) y.*sin(x) + x.*cos(y) - 1)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/498.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_3_0_modify_implicit_plot_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_3_0_modify_implicit_plot_after_creation_ssim_map.png" 
  index=316
%}

<pre class="mcode">
  <div class="codeoutput"><pre>fp = 
  ImplicitFunctionLine with properties:

     Function: @(x,y)y.*sin(x)+x.*cos(y)-1
        Color: [0 0.4470 0.7410]
    LineStyle: '-'
    LineWidth: 0.5000

  Show all properties

</pre></div>
fig2plotly()
</pre>

> Use `fp` to access and modify properties of the implicit function line object after it is created. For example, change the color, line style, and line width.

<pre class="mcode">
  fp.Color = 'r';
fp.LineStyle = '--';
fp.LineWidth = 2;
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/500.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_3_1_modify_implicit_plot_after_creation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/fimplicit/plot_3_1_modify_implicit_plot_after_creation_ssim_map.png" 
  index=317
%}



<!--------------------- EXAMPLE BREAK ------------------------->

