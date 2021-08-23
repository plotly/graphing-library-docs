---
layout: post
title:  MATLAB animatedline
description: Learn how to make 6 animatedline charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/animation/animatedline/
layout: matlab
function: animatedline
reference: https://mathworks.com/help/matlab/ref/animatedline.html
github: animation/animatedline.md
---

## Display Line Animation

> Create the initial animated line object. Then, use a loop to add 1,000 points to the line. After adding each new point, use `drawnow` to display the new point on the screen.

<pre class="mcode">h = animatedline;
axis([0,4*pi,-1,1])

x = linspace(0,4*pi,1000);
y = sin(x);
for k = 1:length(x)
    addpoints(h,x(k),y(k));
    drawnow
end

fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_0_0_display_line_animation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_0_0_display_line_animation_ssim_map.png" 
  index=0
%}

> 

> For faster rendering, add more than one point to the line each time through the loop or use `drawnow limitrate`.

> Query the points of the line.

<pre class="mcode">[xdata,ydata] = getpoints(h);

fig2plotly()</pre>
> Clear the points from the line.

<pre class="mcode">clearpoints(h)
drawnow

fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_0_2_display_line_animation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_0_2_display_line_animation_ssim_map.png" 
  index=2
%}

> 



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Animated Line Color

> Set the color of the animated line to red and set its line width to 3 points.

<pre class="mcode">x = [1 2];
y = [1 2];
h = animatedline(x,y,'Color','r','LineWidth',3);
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_1_0_specify_animated_line_color_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_1_0_specify_animated_line_color_ssim_map.png" 
  index=3
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Set Maximum Number of Points

> Limit the number of points in the animated line to 100. Use a loop to add one point to the line at a time. When the line contains 100 points, adding a new point to the line deletes the oldest point.

<pre class="mcode">h = animatedline('MaximumNumPoints',100);
axis([0,4*pi,-1,1])

x = linspace(0,4*pi,1000);
y = sin(x);
for k = 1:length(x)
    addpoints(h,x(k),y(k));
    drawnow
end

fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_2_0_set_maximum_number_of_points_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_2_0_set_maximum_number_of_points_ssim_map.png" 
  index=4
%}

> 



<!--------------------- EXAMPLE BREAK ------------------------->

## Add Points in Sets for Fast Animation

> Use a loop to add 100,000 points to an animated line. Since the number of points is large, adding one point to the line each time through the loop might be slow. Instead, add 100 points to the line each time through the loop for a faster animation.

<pre class="mcode">h = animatedline;
axis([0,4*pi,-1,1])

numpoints = 100000;
x = linspace(0,4*pi,numpoints);
y = sin(x);
for k = 1:100:numpoints-99
    xvec = x(k:k+99);
    yvec = y(k:k+99);
    addpoints(h,xvec,yvec)
    drawnow
end

fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_3_0_add_points_in_sets_for_fast_animation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_3_0_add_points_in_sets_for_fast_animation_ssim_map.png" 
  index=5
%}

> 

> Another technique for creating faster animations is to use `drawnow limitrate` instead of `drawnow`.



<!--------------------- EXAMPLE BREAK ------------------------->

## Use drawnow limitrate for Fast Animation

> Use a loop to add 100,000 points to an animated line. Since the number of points is large, using `drawnow` to display the changes might be slow. Instead, use `drawnow limitrate` for a faster animation.

<pre class="mcode">h = animatedline;
axis([0,4*pi,-1,1])

numpoints = 100000;
x = linspace(0,4*pi,numpoints);
y = sin(x);
for k = 1:numpoints
    addpoints(h,x(k),y(k))
    drawnow limitrate
end

fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_4_0_use_drawnow_limitrate_for_fast_animation_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_4_0_use_drawnow_limitrate_for_fast_animation_ssim_map.png" 
  index=6
%}

> 



<!--------------------- EXAMPLE BREAK ------------------------->

## Control Animation Speed

> Control the animation speed by running through several iterations of the animation loop before drawing the updates on the screen. Use this technique when `drawnow` is too slow and `drawnow limitrate` is too fast.

> For example, update the screen every 1/30 seconds. Use the `tic` and `toc` commands to keep track of how much time passes between screen updates.

<pre class="mcode">h = animatedline;
axis([0,4*pi,-1,1])
numpoints = 10000;
x = linspace(0,4*pi,numpoints);
y = sin(x);
a = tic; % start timer
for k = 1:numpoints
    addpoints(h,x(k),y(k))
    b = toc(a); % check timer
    if b > (1/30)
        drawnow % update screen every 1/30 seconds
        a = tic; % reset timer after updating
    end
end
drawnow % draw final frame

fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_5_0_control_animation_speed_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/animation/animatedline/plot_5_0_control_animation_speed_ssim_map.png" 
  index=7
%}

> 

> A smaller interval updates the screen more often and results in a slower animation. For example, use `b > (1/1000)` to slow down the animation.



<!--------------------- EXAMPLE BREAK ------------------------->

