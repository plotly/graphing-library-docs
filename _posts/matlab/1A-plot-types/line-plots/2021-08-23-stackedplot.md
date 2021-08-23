---
layout: post
title:  MATLAB stackedplot
description: Learn how to make 7 stackedplot charts in MATLAB, then publish them to the Web with Plotly.
permalink: /matlab/line-plots/stackedplot/
layout: matlab
function: stackedplot
reference: https://mathworks.com/help/matlab/ref/stackedplot.html
github: line-plots/stackedplot.md
---

## Plot Timetable Variables

> Read data from a spreadsheet to a table. Then convert the table to a timetable. The first variable that contains dates and times, `OutageTime`, provides the row times for the timetable. Display the first five rows.

<pre class="mcode">tbl = readtable('outages.csv');
tbl = table2timetable(tbl);
head(tbl,5)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>5×5 timetable</em></span>
       OutageTime          Region         Loss     Customers     RestorationTime            Cause       
    ________________    _____________    ______    __________    ________________    ___________________

    2002-02-01 12:18    {'SouthWest'}    458.98    1.8202e+06    2002-02-07 16:50    {'winter storm'   }
    2003-01-23 00:49    {'SouthEast'}    530.14    2.1204e+05                 NaT    {'winter storm'   }
    2003-02-07 21:15    {'SouthEast'}     289.4    1.4294e+05    2003-02-17 08:14    {'winter storm'   }
    2004-04-06 05:44    {'West'     }    434.81    3.4037e+05    2004-04-06 06:10    {'equipment fault'}
    2002-03-16 06:18    {'MidWest'  }    186.44    2.1275e+05    2002-03-18 23:23    {'severe storm'   }

</pre></div></pre>
> Sort the timetable so that its row times are in order. The row times of a timetable do not need to be in order. However, if you use the row times as the *x*-axis of a plot, then it is better to ensure the timetable is sorted by its row times.

<pre class="mcode">tbl = sortrows(tbl);
head(tbl,5)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>5×5 timetable</em></span>
       OutageTime          Region         Loss     Customers     RestorationTime          Cause      
    ________________    _____________    ______    __________    ________________    ________________

    2002-02-01 12:18    {'SouthWest'}    458.98    1.8202e+06    2002-02-07 16:50    {'winter storm'}
    2002-03-05 17:53    {'MidWest'  }    96.563    2.8666e+05    2002-03-10 14:41    {'wind'        }
    2002-03-16 06:18    {'MidWest'  }    186.44    2.1275e+05    2002-03-18 23:23    {'severe storm'}
    2002-03-26 01:59    {'MidWest'  }    388.04    5.6422e+05    2002-03-28 19:55    {'winter storm'}
    2002-04-20 16:46    {'MidWest'  }     23141           NaN                 NaT    {'unknown'     }

</pre></div></pre>
> Create a stacked plot of data from `tbl`. The row times, `OutageTime`, provide the values along the *x*-axis. The `stackedplot` function plots the values from the `Loss`, `Customers`, and `RestorationTime` variables, with each variable plotted along its own y-axis. However, the plot does not include the `Region` and `Cause` variables because they contain data that cannot be plotted.

<pre class="mcode">stackedplot(tbl)
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_0_0_plot_timetable_variables_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_0_0_plot_timetable_variables_ssim_map.png" 
  index=398
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Variables

> Create a table from patient data. Display the first three rows.

<pre class="mcode">tbl = readtable('patients.xls');
head(tbl,3)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>3×10 table</em></span>
      LastName        Gender      Age              Location               Height    Weight    Smoker    Systolic    Diastolic    SelfAssessedHealthStatus
    ____________    __________    ___    _____________________________    ______    ______    ______    ________    _________    ________________________

    {'Smith'   }    {'Male'  }    38     {'County General Hospital'  }      71       176      true        124          93             {'Excellent'}      
    {'Johnson' }    {'Male'  }    43     {'VA Hospital'              }      69       163      false       109          77             {'Fair'     }      
    {'Williams'}    {'Female'}    38     {'St. Mary's Medical Center'}      64       131      false       125          83             {'Good'     }      

</pre></div></pre>
> Plot only four of the variables from the table.

<pre class="mcode">stackedplot(tbl,{'Height','Weight','Systolic','Diastolic'})
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_1_0_specify_variables_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_1_0_specify_variables_ssim_map.png" 
  index=399
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Reorder Variables

> Create a timetable and display its first three rows.

<pre class="mcode">tbl = readtable('outages.csv');
tbl = table2timetable(tbl);
tbl = sortrows(tbl);
head(tbl,3)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>3×5 timetable</em></span>
       OutageTime          Region         Loss     Customers     RestorationTime          Cause      
    ________________    _____________    ______    __________    ________________    ________________

    2002-02-01 12:18    {'SouthWest'}    458.98    1.8202e+06    2002-02-07 16:50    {'winter storm'}
    2002-03-05 17:53    {'MidWest'  }    96.563    2.8666e+05    2002-03-10 14:41    {'wind'        }
    2002-03-16 06:18    {'MidWest'  }    186.44    2.1275e+05    2002-03-18 23:23    {'severe storm'}

</pre></div></pre>
> Reorder the variables by specifying them in an order that differs from their order in the table. For example, `RestorationTime` is the last variable in the timetable that can be plotted. By default, `stackedplot` places it at the bottom of the plot. But you can reorder the variables to put `RestorationTime` at the top.

<pre class="mcode">stackedplot(tbl,{'RestorationTime','Loss','Customers'})
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_2_0_reorder_variables_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_2_0_reorder_variables_ssim_map.png" 
  index=400
%}

> There are also other ways to reorder the variables.



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Multiple Variables Using One Y-Axis

> Create a table from a subset of patient data, using the `Weight`, `Systolic`, and `Diastolic` variables.

<pre class="mcode">load patients
tbl = table(Weight,Systolic,Diastolic);
head(tbl,3)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>3×3 table</em></span>
    Weight    Systolic    Diastolic
    ______    ________    _________

     176        124          93    
     163        109          77    
     131        125          83    

</pre></div></pre>
> Create a stacked plot, with `Systolic` and `Diastolic` plotted using the same *y*-axis. To plot variables together, specify them within a nested cell array.

<pre class="mcode">vars = {{'Systolic','Diastolic'},'Weight'}</pre>
<pre class="mcode"><div class="codeoutput"><pre>vars=<span class="emphasis"><em>1×2 cell array</em></span>
    {1x2 cell}    {'Weight'}

</pre></div></pre>
<pre class="mcode">stackedplot(tbl,vars)
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_3_0_plot_multiple_variables_using_one_y_axis_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_3_0_plot_multiple_variables_using_one_y_axis_ssim_map.png" 
  index=401
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Plot Columns of Matrix

> Create a numeric matrix and a numeric vector.

<pre class="mcode">X = [0:4:20]</pre>
<pre class="mcode"><div class="codeoutput"><pre>X = <span class="emphasis"><em>1×6</em></span>

     0     4     8    12    16    20

</pre></div></pre>
<pre class="mcode">Y = randi(100,6,3)</pre>
<pre class="mcode"><div class="codeoutput"><pre>Y = <span class="emphasis"><em>6×3</em></span>

    82    28    96
    91    55    49
    13    96    81
    92    97    15
    64    16    43
    10    98    92

</pre></div></pre>
> Create a stacked plot using `X` and `Y`.

<pre class="mcode">stackedplot(X,Y)
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_4_0_plot_columns_of_matrix_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_4_0_plot_columns_of_matrix_ssim_map.png" 
  index=402
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Specify Title and Labels Using Name-Value Pairs

> Load a timetable that has a set of weather measurements. Display its first three rows.

<pre class="mcode">load outdoors
outdoors(1:3,:)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>3×3 timetable</em></span>
           Time            Humidity    TemperatureF    PressureHg
    ___________________    ________    ____________    __________

    2015-11-15 00:00:24        49          51.3          29.61   
    2015-11-15 01:30:24      48.9          51.5          29.61   
    2015-11-15 03:00:24      48.9          51.5          29.61   

</pre></div></pre>
> Create a stacked plot. Specify the title and labels for the *y*-axes using name-value pair arguments. You can use name-values pairs to change any properties from their defaults values. (Also note that you can specify the degree symbol using `char(176)`.)

<pre class="mcode">degreeSymbol = char(176);
newYlabels = {'RH (%)',['T (' degreeSymbol 'F)'],'P (in Hg)'};
stackedplot(outdoors,'Title','Weather Data','DisplayLabels',newYlabels)
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_5_0_specify_title_and_labels_using_name_value_pairs_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_5_0_specify_title_and_labels_using_name_value_pairs_ERROR_CRASH__ssim_map.png" 
  index=403
%}



<!--------------------- EXAMPLE BREAK ------------------------->

## Change Individual Plots to Scatter and Stair Plots

> The `stackedplot` function returns a `StackedLineChart` object. You can use it to set the same property value for all plots, or to set different property values for individual plots. In this example, first change the line widths for all plots in a stacked plot. Then, use the `PlotType` property of individual plots, so that the stacked plot has a line plot, scatter plot, and stair plot.

> Load a timetable that has a set of weather measurements. 

<pre class="mcode">load outdoors
outdoors(1:3,:)</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>3×3 timetable</em></span>
           Time            Humidity    TemperatureF    PressureHg
    ___________________    ________    ____________    __________

    2015-11-15 00:00:24        49          51.3          29.61   
    2015-11-15 01:30:24      48.9          51.5          29.61   
    2015-11-15 03:00:24      48.9          51.5          29.61   

</pre></div></pre>
> Create a stacked plot and return a `StackedLineChart` object.

<pre class="mcode">s = stackedplot(outdoors)
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_6_0_change_individual_plots_to_scatter_and_stair_plots_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_6_0_change_individual_plots_to_scatter_and_stair_plots_ssim_map.png" 
  index=404
%}

<pre class="mcode"><div class="codeoutput"><pre>s = 
  StackedLineChart with properties:

         SourceTable: [51x3 timetable]
    DisplayVariables: {'Humidity'  'TemperatureF'  'PressureHg'}
               Color: [0 0.4470 0.7410]
           LineStyle: '-'
           LineWidth: 0.5000
              Marker: 'none'
          MarkerSize: 6

  Show all properties

</pre></div>
fig2plotly()</pre>
> The object provides access to many properties that apply to all of the plots. For example, you can use `s.LineWidth` to make the lines wider.

<pre class="mcode">s.LineWidth = 2;
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_6_1_change_individual_plots_to_scatter_and_stair_plots_montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_6_1_change_individual_plots_to_scatter_and_stair_plots_ssim_map.png" 
  index=405
%}

> The object also provides access to arrays of objects that you can use to modify the lines and *y*-axes for individual plots. To access properties of individual lines, use `s.LineProperties`. For each plot, you can specify a different line style, marker, plot type, and so on.

<pre class="mcode">s.LineProperties
fig2plotly()</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>3×1 object</em></span>
  3x1 StackedLineProperties array with properties:

    Color
    MarkerFaceColor
    MarkerEdgeColor
    LineStyle
    LineWidth
    Marker
    MarkerSize
    PlotType

</pre></div>
fig2plotly()</pre>
> Change the second plot to a scatter plot, and the third plot to a stair plot, using the `PlotType` property.

<pre class="mcode">s.LineProperties(2).PlotType = 'scatter';
s.LineProperties(3).PlotType = 'stairs';
fig2plotly()</pre>
{% include posts/ssim_frame.html 
  src="https://chart-studio.plotly.com/~danton267/977.embed" 
  ssim="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_6_3_change_individual_plots_to_scatter_and_stair_plots_ERROR_CRASH__montage.png" 
  compare="https://raw.githubusercontent.com/plotly/ssim_baselines/main/out_matlab/matlab/line-plots/stackedplot/plot_6_3_change_individual_plots_to_scatter_and_stair_plots_ERROR_CRASH__ssim_map.png" 
  index=407
%}

> You also can access individual *y*-axes through the `s.AxesProperties` property.

<pre class="mcode">s.AxesProperties
fig2plotly()</pre>
<pre class="mcode"><div class="codeoutput"><pre>ans=<span class="emphasis"><em>3×1 object</em></span>
  3x1 StackedAxesProperties array with properties:

    YLimits
    LegendLabels
    LegendLocation
    LegendVisible

</pre></div>
fig2plotly()</pre>


<!--------------------- EXAMPLE BREAK ------------------------->

