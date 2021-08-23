---
layout: post
title:  MATLAB scatterhistogram
description: Learn how to make 7 scatterhistogram charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/data-distribution-plots/scatterhistogram/
layout: matlab
function: scatterhistogram
reference: https://mathworks.com/help/matlab/ref/scatterhistogram.html
github: data-distribution-plots/scatterhistogram.md
---

## Scatter Histogram Chart with Tabular Data

> Create a scatter plot with marginal histograms from a table of data for medical patients.

> Load the `patients` data set and create a table from a subset of the variables loaded into the workspace. Then, create a scatter histogram chart comparing the H`eight` values to the W`eight` values.

<pre class="mcode">load patients
tbl = table(LastName,Age,Gender,Height,Weight);
s = scatterhistogram(tbl,'Height','Weight');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_0_0_scatter_histogram_chart_with_tabular_data_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_0_0_scatter_histogram_chart_with_tabular_data_ssim_map.png" 
  index=149
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Table Variable for Grouping Data

> Using the `patients` data set, create a scatter plot with marginal histograms and specify the table variable to use for grouping the data.

> Load the `patients` data set and create a scatter histogram chart from the data. Compare the patients' `Systolic` and `Diastolic` values. Group the data according to the patients' smoker status by setting the `'GroupVariable'` name-value pair argument to `'Smoker'`.

<pre class="mcode">load patients
tbl = table(LastName,Diastolic,Systolic,Smoker);
s = scatterhistogram(tbl,'Diastolic','Systolic','GroupVariable','Smoker');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_1_0_specify_table_variable_for_grouping_data_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_1_0_specify_table_variable_for_grouping_data_ssim_map.png" 
  index=150
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Visualize Categorical and Numeric Data

> Use a scatter plot with marginal histograms to visualize categorical and numeric medical data.

> Load the `patients` data set, and convert the `Smoker` data to a categorical array. Then, create a scatter histogram chart that compares patients' `Age` values to their smoker status. The resulting scatter plot contains overlapping data points. However, the *y*-axis marginal histogram indicates that there are far more nonsmokers than smokers in the data set.

<pre class="mcode">load patients
Smoker = categorical(Smoker);
s = scatterhistogram(Age,Smoker);
xlabel('Age')
ylabel('Smoker')
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_2_0_visualize_categorical_and_numeric_data_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_2_0_visualize_categorical_and_numeric_data_ssim_map.png" 
  index=151
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Group Data and Customize Chart Properties

> Create a scatter plot with marginal histograms using arrays of shoe data. Group the data according to shoe color, and customize properties of the scatter histogram chart.

> Create arrays of data. Then, create a scatter histogram chart to visualize the data. Use custom labels along the *x*-axis and *y*-axis to specify the variable names of the first two input arguments. You can specify the title, axis labels, and legend title by setting properties of the `ScatterHistogramChart` object.

<pre class="mcode">xvalues = [7 6 5 6.5 9 7.5 8.5 7.5 10 8];
yvalues = categorical({'onsale','regular','onsale','onsale', ...
    'regular','regular','onsale','onsale','regular','regular'});
grpvalues = {'Red','Black','Blue','Red','Black','Blue','Red', ...
    'Red','Blue','Black'};
s = scatterhistogram(xvalues,yvalues,'GroupData',grpvalues);

s.Title = 'Shoe Sales';
s.XLabel = 'Shoe Size';
s.YLabel = 'Price';
s.LegendTitle = 'Shoe Color';
fig2plotly()</pre>
> Change the colors in the scatter histogram chart to match the group labels. Change the histogram bin widths to be the same for all groups.

<pre class="mcode">s.Color = {'Red','Black','Blue'};
s.BinWidths = 1;
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_3_1_specify_group_data_and_customize_chart_properties_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_3_1_specify_group_data_and_customize_chart_properties_ERROR_CRASH__ssim_map.png" 
  index=153
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Scatter Histogram Chart Appearance

> Create a scatter plot with marginal histograms. Specify the number of bins and line widths of the histograms, the location of the scatter plot, and the legend visibility.

> Load the `patients` data set and create a scatter histogram chart from the data. Compare the patients' `Diastolic` and `Systolic` values, and group the data according to the patients' `SelfAssessedHealthStatus` values. Adjust the histograms by specifying the `NumBins` and `LineWidth` options. Place the scatter plot in the `'NorthEast'` location of the figure by using the `ScatterPlotLocation` option. Ensure the legend is visible by specifying the `LegendVisible` option as `'on'`.

<pre class="mcode">load patients
tbl = table(LastName,Diastolic,Systolic,SelfAssessedHealthStatus);
s = scatterhistogram(tbl,'Diastolic','Systolic','GroupVariable','SelfAssessedHealthStatus', ...
    'NumBins',4,'LineWidth',1.5,'ScatterPlotLocation','NorthEast','LegendVisible','on');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_4_0_specify_scatter_histogram_chart_appearance_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_4_0_specify_scatter_histogram_chart_appearance_ssim_map.png" 
  index=154
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Group Data Using Two Variables

> Create a scatter plot with marginal histograms. Group the data by using a combination of two different variables.

> Load the `patients` data set. Combine the `Smoker` and `Gender` data to create a new variable. Create a scatter histogram chart that compares the `Diastolic` and `Systolic` values of the patients. Use the new variable `SmokerGender` to group the data in the scatter histogram chart.

<pre class="mcode">load patients
[idx,genderStatus,smokerStatus] = findgroups(string(Gender),string(Smoker));
SmokerGender = strcat(genderStatus(idx),"-",smokerStatus(idx));
s = scatterhistogram(Diastolic,Systolic,'GroupData',SmokerGender,'LegendVisible','on');
xlabel('Diastolic')
ylabel('Systolic')
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_5_0_group_data_using_two_variables_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_5_0_group_data_using_two_variables_ssim_map.png" 
  index=155
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

<pre class="mcode">load carsmall
tbl = table(Horsepower,MPG,Cylinders);
s = scatterhistogram(tbl,'Horsepower','MPG', ...
    'GroupVariable','Cylinders','HistogramDisplayStyle','smooth', ...
    'LineStyle','-');
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_6_0_specify_kernel_density_histograms_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/data-distribution-plots/scatterhistogram/plot_6_0_specify_kernel_density_histograms_ERROR_CRASH__ssim_map.png" 
  index=156
%}

> 



<!--------------------- EXAMPLE BREAK ------------------------->

