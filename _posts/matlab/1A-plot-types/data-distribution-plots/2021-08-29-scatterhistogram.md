---
layout: post
title:  MATLAB scatterhistogram
description: Learn how to make 7 scatterhistogram charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/data-distribution-plots/2021-08-29-scatterhistogram/
layout: matlab
function: scatterhistogram
reference: https://mathworks.com/help/matlab/ref/scatterhistogram.html
github: data-distribution-plots/2021-08-29-scatterhistogram.md
---

## Scatter Histogram Chart with Tabular Data

> Create a scatter plot with marginal histograms from a table of data for medical patients.

> Load the `patients` data set and create a table from a subset of the variables loaded into the workspace. Then, create a scatter histogram chart comparing the H`eight` values to the W`eight` values.

<pre>
  load patients
tbl = table(LastName,Age,Gender,Height,Weight);
s = scatterhistogram(tbl,<span style='color:#A020F0'>'Height'</span>,<span style='color:#A020F0'>'Weight'</span>);
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_0_0_scatter_histogram_chart_with_tabular_data_invalid_0.0005_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_0_0_scatter_histogram_chart_with_tabular_data_invalid_0.0005_ssim_map.png" 
  index=155
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Table Variable for Grouping Data

> Using the `patients` data set, create a scatter plot with marginal histograms and specify the table variable to use for grouping the data.

> Load the `patients` data set and create a scatter histogram chart from the data. Compare the patients' `Systolic` and `Diastolic` values. Group the data according to the patients' smoker status by setting the `'GroupVariable'` name-value pair argument to `'Smoker'`.

<pre>
  load patients
tbl = table(LastName,Diastolic,Systolic,Smoker);
s = scatterhistogram(tbl,<span style='color:#A020F0'>'Diastolic'</span>,<span style='color:#A020F0'>'Systolic'</span>,<span style='color:#A020F0'>'GroupVariable'</span>,<span style='color:#A020F0'>'Smoker'</span>);
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_1_0_specify_table_variable_for_grouping_data_invalid_0.0005_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_1_0_specify_table_variable_for_grouping_data_invalid_0.0005_ssim_map.png" 
  index=156
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Visualize Categorical and Numeric Data

> Use a scatter plot with marginal histograms to visualize categorical and numeric medical data.

> Load the `patients` data set, and convert the `Smoker` data to a categorical array. Then, create a scatter histogram chart that compares patients' `Age` values to their smoker status. The resulting scatter plot contains overlapping data points. However, the *y*-axis marginal histogram indicates that there are far more nonsmokers than smokers in the data set.

<pre class="mcode">
  load patients
Smoker = categorical(Smoker);
s = scatterhistogram(Age,Smoker);
xlabel(<span style='color:#A020F0'>'Age'</span>)
ylabel(<span style='color:#A020F0'>'Smoker'</span>)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_2_0_visualize_categorical_and_numeric_data_invalid_0.0005_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_2_0_visualize_categorical_and_numeric_data_invalid_0.0005_ssim_map.png" 
  index=157
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Group Data and Customize Chart Properties

> Create a scatter plot with marginal histograms using arrays of shoe data. Group the data according to shoe color, and customize properties of the scatter histogram chart.

> Create arrays of data. Then, create a scatter histogram chart to visualize the data. Use custom labels along the *x*-axis and *y*-axis to specify the variable names of the first two input arguments. You can specify the title, axis labels, and legend title by setting properties of the `ScatterHistogramChart` object.

<pre class="mcode">
  xvalues = [7 6 5 6.5 9 7.5 8.5 7.5 10 8];
yvalues = categorical({<span style='color:#A020F0'>'onsale'</span>,<span style='color:#A020F0'>'regular'</span>,<span style='color:#A020F0'>'onsale'</span>,<span style='color:#A020F0'>'onsale'</span>, ...
    <span style='color:#A020F0'>'regular'</span>,<span style='color:#A020F0'>'regular'</span>,<span style='color:#A020F0'>'onsale'</span>,<span style='color:#A020F0'>'onsale'</span>,<span style='color:#A020F0'>'regular'</span>,<span style='color:#A020F0'>'regular'</span>});
grpvalues = {<span style='color:#A020F0'>'Red'</span>,<span style='color:#A020F0'>'Black'</span>,<span style='color:#A020F0'>'Blue'</span>,<span style='color:#A020F0'>'Red'</span>,<span style='color:#A020F0'>'Black'</span>,<span style='color:#A020F0'>'Blue'</span>,<span style='color:#A020F0'>'Red'</span>, ...
    <span style='color:#A020F0'>'Red'</span>,<span style='color:#A020F0'>'Blue'</span>,<span style='color:#A020F0'>'Black'</span>};
s = scatterhistogram(xvalues,yvalues,<span style='color:#A020F0'>'GroupData'</span>,grpvalues);

s.Title = 'Shoe Sales';
s.XLabel = 'Shoe Size';
s.YLabel = <span style='color:#A020F0'>'Price'</span>;
s.LegendTitle = 'Shoe Color';
fig2plotly()
</pre>

> Change the colors in the scatter histogram chart to match the group labels. Change the histogram bin widths to be the same for all groups.

<pre class="mcode">
  s.Color = {<span style='color:#A020F0'>'Red'</span>,<span style='color:#A020F0'>'Black'</span>,<span style='color:#A020F0'>'Blue'</span>};
s.BinWidths = 1;
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_3_1_specify_group_data_and_customize_chart_properties_invalid_0.0000_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_3_1_specify_group_data_and_customize_chart_properties_invalid_0.0000_ssim_map.png" 
  index=159
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Scatter Histogram Chart Appearance

> Create a scatter plot with marginal histograms. Specify the number of bins and line widths of the histograms, the location of the scatter plot, and the legend visibility.

> Load the `patients` data set and create a scatter histogram chart from the data. Compare the patients' `Diastolic` and `Systolic` values, and group the data according to the patients' `SelfAssessedHealthStatus` values. Adjust the histograms by specifying the `NumBins` and `LineWidth` options. Place the scatter plot in the `'NorthEast'` location of the figure by using the `ScatterPlotLocation` option. Ensure the legend is visible by specifying the `LegendVisible` option as `'on'`.

<pre class="mcode">
  load patients
tbl = table(LastName,Diastolic,Systolic,SelfAssessedHealthStatus);
s = scatterhistogram(tbl,<span style='color:#A020F0'>'Diastolic'</span>,<span style='color:#A020F0'>'Systolic'</span>,<span style='color:#A020F0'>'GroupVariable'</span>,<span style='color:#A020F0'>'SelfAssessedHealthStatus'</span>, ...
    <span style='color:#A020F0'>'NumBins'</span>,4,<span style='color:#A020F0'>'LineWidth'</span>,1.5,<span style='color:#A020F0'>'ScatterPlotLocation'</span>,<span style='color:#A020F0'>'NorthEast'</span>,<span style='color:#A020F0'>'LegendVisible'</span>,<span style='color:#A020F0'>'on'</span>);
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_4_0_specify_scatter_histogram_chart_appearance_invalid_0.0005_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_4_0_specify_scatter_histogram_chart_appearance_invalid_0.0005_ssim_map.png" 
  index=160
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Group Data Using Two Variables

> Create a scatter plot with marginal histograms. Group the data by using a combination of two different variables.

> Load the `patients` data set. Combine the `Smoker` and `Gender` data to create a new variable. Create a scatter histogram chart that compares the `Diastolic` and `Systolic` values of the patients. Use the new variable `SmokerGender` to group the data in the scatter histogram chart.

<pre class="mcode">
  load patients
[idx,genderStatus,smokerStatus] = findgroups(string(Gender),string(Smoker));
SmokerGender = strcat(genderStatus(idx),"-",smokerStatus(idx));
s = scatterhistogram(Diastolic,Systolic,<span style='color:#A020F0'>'GroupData'</span>,SmokerGender,<span style='color:#A020F0'>'LegendVisible'</span>,<span style='color:#A020F0'>'on'</span>);
xlabel(<span style='color:#A020F0'>'Diastolic'</span>)
ylabel(<span style='color:#A020F0'>'Systolic'</span>)
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_5_0_group_data_using_two_variables_invalid_0.0005_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_5_0_group_data_using_two_variables_invalid_0.0005_ssim_map.png" 
  index=161
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Kernel Density Histograms

> Create a scatter plot with kernel density marginal histograms. This
          example requires a Statistics and Machine Learning Toolbox™ license.

> Load the `carsmall` data set and create a scatter histogram chart
            from the data. Compare the `Horsepower` and `MPG`
            values. Use the number of cylinders to group the data by setting the
              `GroupVariable` option to `Cylinders`. Specify
            kernel density histograms by setting the `HistogramDisplayStyle` option
            to `'smooth'`. Specify a solid line for all the histograms by setting
            the `LineStyle` option to `'-'`.

<pre class="mcode">
  load carsmall
tbl = table(Horsepower,MPG,Cylinders);
s = scatterhistogram(tbl,<span style='color:#A020F0'>'Horsepower'</span>,<span style='color:#A020F0'>'MPG'</span>, ...
    <span style='color:#A020F0'>'GroupVariable'</span>,<span style='color:#A020F0'>'Cylinders'</span>,<span style='color:#A020F0'>'HistogramDisplayStyle'</span>,<span style='color:#A020F0'>'smooth'</span>, ...
    <span style='color:#A020F0'>'LineStyle'</span>,'-');
fig2plotly()
</pre>

{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_6_0_specify_kernel_density_histograms_invalid_0.0005_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/code-examples/data-distribution-plots/scatterhistogram/plot_6_0_specify_kernel_density_histograms_invalid_0.0005_ssim_map.png" 
  index=162
%}





<!--------------------- EXAMPLE BREAK ------------------------->

