---
description: How to do PCA Visualization in MATLAB<sup>&reg;</sup> with Plotly.
name: PCA Visualization
display_as: ai_ml
order: 4
permalink: matlab/pca-visualization/
thumbnail: thumbnail/ml-pca.png
layout: base
language: matlab
page_type: u-guide
---

## Principal Components of a Data Set

Load the sample data set. 

<pre class="mcode">
load hald
</pre>

The ingredients data has 13 observations for 4 variables. 

Find the principal components for the ingredients data. 

<pre class="mcode">
 coeff = pca(ingredients)
</pre>


<pre class="codeoutput">coeff = <span class="emphasis"><em>4×4</em></span>

   -0.0678   -0.6460    0.5673    0.5062
   -0.6785   -0.0200   -0.5440    0.4933
    0.0290    0.7553    0.4036    0.5156
    0.7309   -0.1085   -0.4684    0.4844

</pre>


The rows of `coeff` contain the coefficients for the four ingredient variables, and its columns correspond to four principal components. 



<!--------------------- EXAMPLE BREAK ------------------------->

## PCA in the Presence of Missing Data

Find the principal component coefficients when
there are missing values in a data set.

Load the sample data set.

<pre class="mcode">
load imports-85
</pre>

Data matrix `X` has 13 continuous variables
in columns 3 to 15: wheel-base, length, width, height, curb-weight,
engine-size, bore, stroke, compression-ratio, horsepower, peak-rpm,
city-mpg, and highway-mpg. The variables bore and stroke are missing
four values in rows 56 to 59, and the variables horsepower and peak-rpm
are missing two values in rows 131 and 132.

Perform principal component analysis.

<pre class="mcode">
coeff = pca(X(:,3:15));

</pre>

By default, `pca` performs the action specified
by the `'Rows','complete'` name-value pair argument.
This option removes the observations with `NaN` values
before calculation. Rows of `NaN`s are reinserted
into `score` and `tsquared` at the
corresponding locations, namely rows 56 to 59, 131, and 132.

Use `'pairwise'` to perform the principal
component analysis.

<pre class="mcode">
coeff = pca(X(:,3:15),'Rows','pairwise');

</pre>

In this case, `pca` computes the (i,j)
element of the covariance matrix using the rows with no `NaN` values
in the columns i or j of `X`.
Note that the resulting covariance matrix might not be positive definite.
This option applies when the algorithm `pca` uses
is eigenvalue decomposition. When you don’t specify the algorithm,
as in this example, `pca` sets it to `'eig'`.
If you require `'svd'` as the algorithm, with the `'pairwise'` option,
then `pca` returns a warning message, sets the algorithm
to `'eig'` and continues. 

If you use the `'Rows','all'` name-value
pair argument, `pca` terminates because this option
assumes there are no missing values in the data set. 

<pre class="mcode">
coeff = pca(X(:,3:15),'Rows','all');

</pre>


<pre class="codeoutput">Error using pca (line 180)
Raw data contains NaN missing value while 'Rows' option is set to 'all'. Consider using 'complete' or pairwise' option instead.</pre>




<!--------------------- EXAMPLE BREAK ------------------------->

## Weighted PCA

Use the inverse variable variances as weights while performing the principal components analysis. 

Load the sample data set. 

<pre class="mcode">
load hald
</pre>

Perform the principal component analysis using the inverse of variances of the ingredients as variable weights. 

<pre class="mcode">
 [wcoeff,~,latent,~,explained] = pca(ingredients,...
'VariableWeights','variance')
</pre>


<pre class="codeoutput">wcoeff = <span class="emphasis"><em>4×4</em></span>

   -2.7998    2.9940   -3.9736    1.4180
   -8.7743   -6.4411    4.8927    9.9863
    2.5240   -3.8749   -4.0845    1.7196
    9.1714    7.5529    3.2710   11.3273

</pre>



<pre class="codeoutput">latent = <span class="emphasis"><em>4×1</em></span>

    2.2357
    1.5761
    0.1866
    0.0016

</pre>



<pre class="codeoutput">explained = <span class="emphasis"><em>4×1</em></span>

   55.8926
   39.4017
    4.6652
    0.0406

</pre>


Note that the coefficient matrix, `wcoeff`, is not orthonormal. 

Calculate the orthonormal coefficient matrix. 

<pre class="mcode">
coefforth = inv(diag(std(ingredients)))* wcoeff
</pre>


<pre class="codeoutput">coefforth = <span class="emphasis"><em>4×4</em></span>

   -0.4760    0.5090   -0.6755    0.2411
   -0.5639   -0.4139    0.3144    0.6418
    0.3941   -0.6050   -0.6377    0.2685
    0.5479    0.4512    0.1954    0.6767

</pre>


Check orthonormality of the new coefficient matrix, `coefforth`. 

<pre class="mcode">
 coefforth*coefforth'
</pre>


<pre class="codeoutput">ans = <span class="emphasis"><em>4×4</em></span>

    1.0000    0.0000   -0.0000    0.0000
    0.0000    1.0000   -0.0000   -0.0000
   -0.0000   -0.0000    1.0000    0.0000
    0.0000   -0.0000    0.0000    1.0000

</pre>




<!--------------------- EXAMPLE BREAK ------------------------->

## PCA Using ALS for Missing Data

Find the principal components using the alternating least squares (ALS) algorithm when there are missing values in the data. 

Load the sample data. 

<pre class="mcode">
load hald
</pre>

The ingredients data has 13 observations for 4 variables. 

Perform principal component analysis using the ALS algorithm and display the component coefficients. 

<pre class="mcode">
[coeff,score,latent,tsquared,explained] = pca(ingredients);
coeff
</pre>


<pre class="codeoutput">coeff = <span class="emphasis"><em>4×4</em></span>

   -0.0678   -0.6460    0.5673    0.5062
   -0.6785   -0.0200   -0.5440    0.4933
    0.0290    0.7553    0.4036    0.5156
    0.7309   -0.1085   -0.4684    0.4844

</pre>


Introduce missing values randomly. 

<pre class="mcode">
y = ingredients;
rng('default'); % for reproducibility
ix = random('unif',0,1,size(y))<0.30; 
y(ix) = NaN
</pre>


<pre class="codeoutput">y = <span class="emphasis"><em>13×4</em></span>

     7    26     6   NaN
     1    29    15    52
   NaN   NaN     8    20
    11    31   NaN    47
     7    52     6    33
   NaN    55   NaN   NaN
   NaN    71   NaN     6
     1    31   NaN    44
     2   NaN   NaN    22
    21    47     4    26
      ⋮

</pre>


Approximately 30% of the data has missing values now, indicated by `NaN`. 

Perform principal component analysis using the ALS algorithm and display the component coefficients. 

<pre class="mcode">
[coeff1,score1,latent,tsquared,explained,mu1] = pca(y,...
'algorithm','als');
coeff1
</pre>


<pre class="codeoutput">coeff1 = <span class="emphasis"><em>4×4</em></span>

   -0.0362    0.8215   -0.5252    0.2190
   -0.6831   -0.0998    0.1828    0.6999
    0.0169    0.5575    0.8215   -0.1185
    0.7292   -0.0657    0.1261    0.6694

</pre>


Display the estimated mean. 

<pre class="mcode">
mu1
</pre>


<pre class="codeoutput">mu1 = <span class="emphasis"><em>1×4</em></span>

    8.9956   47.9088    9.0451   28.5515

</pre>


Reconstruct the observed data. 

<pre class="mcode">
t = score1*coeff1' + repmat(mu1,13,1)
</pre>


<pre class="codeoutput">t = <span class="emphasis"><em>13×4</em></span>

    7.0000   26.0000    6.0000   51.5250
    1.0000   29.0000   15.0000   52.0000
   10.7819   53.0230    8.0000   20.0000
   11.0000   31.0000   13.5500   47.0000
    7.0000   52.0000    6.0000   33.0000
   10.4818   55.0000    7.8328   17.9362
    3.0982   71.0000   11.9491    6.0000
    1.0000   31.0000   -0.5161   44.0000
    2.0000   53.7914    5.7710   22.0000
   21.0000   47.0000    4.0000   26.0000
      ⋮

</pre>


The ALS algorithm estimates the missing values in the data. 

Another way to compare the results is to find the angle between the two spaces spanned by the coefficient vectors. Find the angle between the coefficients found for complete data and data with missing values using ALS. 

<pre class="mcode">
subspace(coeff,coeff1)
</pre>


<pre class="codeoutput">ans = 9.1336e-16
</pre>


This is a small value. It indicates that the results if you use `pca` with `'Rows','complete'` name-value pair argument when there is no missing data and if you use `pca` with `'algorithm','als'` name-value pair argument when there is missing data are close to each other. 

Perform the principal component analysis using `'Rows','complete'` name-value pair argument and display the component coefficients. 

<pre class="mcode">
[coeff2,score2,latent,tsquared,explained,mu2] = pca(y,...
'Rows','complete');
coeff2
</pre>


<pre class="codeoutput">coeff2 = <span class="emphasis"><em>4×3</em></span>

   -0.2054    0.8587    0.0492
   -0.6694   -0.3720    0.5510
    0.1474   -0.3513   -0.5187
    0.6986   -0.0298    0.6518

</pre>


In this case, `pca` removes the rows with missing values, and `y` has only four rows with no missing values. `pca` returns only three principal components. You cannot use the `'Rows','pairwise'` option because the covariance matrix is not positive semidefinite and `pca` returns an error message. 

Find the angle between the coefficients found for complete data and data with missing values using listwise deletion (when `'Rows','complete'`). 

<pre class="mcode">
subspace(coeff(:,1:3),coeff2)
</pre>


<pre class="codeoutput">ans = 0.3576
</pre>


The angle between the two spaces is substantially larger. This indicates that these two results are different. 

Display the estimated mean. 

<pre class="mcode">
mu2
</pre>


<pre class="codeoutput">mu2 = <span class="emphasis"><em>1×4</em></span>

    7.8889   46.9091    9.8750   29.6000

</pre>


In this case, the mean is just the sample mean of `y`. 

Reconstruct the observed data. 

<pre class="mcode">
score2*coeff2'
</pre>


<pre class="codeoutput">ans = <span class="emphasis"><em>13×4</em></span>

       NaN       NaN       NaN       NaN
   -7.5162  -18.3545    4.0968   22.0056
       NaN       NaN       NaN       NaN
       NaN       NaN       NaN       NaN
   -0.5644    5.3213   -3.3432    3.6040
       NaN       NaN       NaN       NaN
       NaN       NaN       NaN       NaN
       NaN       NaN       NaN       NaN
       NaN       NaN       NaN       NaN
   12.8315   -0.1076   -6.3333   -3.7758
      ⋮

</pre>


This shows that deleting rows containing `NaN` values does not work as well as the ALS algorithm. Using ALS is better when the data has too many missing values. 



<!--------------------- EXAMPLE BREAK ------------------------->

## Principal Component Coefficients, Scores, and Variances

Find the coefficients, scores, and variances of the principal components. 

Load the sample data set. 

<pre class="mcode">
load hald
</pre>

The ingredients data has 13 observations for 4 variables. 

Find the principal component coefficients, scores, and variances of the components for the ingredients data. 

<pre class="mcode">
[coeff,score,latent] = pca(ingredients)
</pre>


<pre class="codeoutput">coeff = <span class="emphasis"><em>4×4</em></span>

   -0.0678   -0.6460    0.5673    0.5062
   -0.6785   -0.0200   -0.5440    0.4933
    0.0290    0.7553    0.4036    0.5156
    0.7309   -0.1085   -0.4684    0.4844

</pre>



<pre class="codeoutput">score = <span class="emphasis"><em>13×4</em></span>

   36.8218   -6.8709   -4.5909    0.3967
   29.6073    4.6109   -2.2476   -0.3958
  -12.9818   -4.2049    0.9022   -1.1261
   23.7147   -6.6341    1.8547   -0.3786
   -0.5532   -4.4617   -6.0874    0.1424
  -10.8125   -3.6466    0.9130   -0.1350
  -32.5882    8.9798   -1.6063    0.0818
   22.6064   10.7259    3.2365    0.3243
   -9.2626    8.9854   -0.0169   -0.5437
   -3.2840  -14.1573    7.0465    0.3405
      ⋮

</pre>



<pre class="codeoutput">latent = <span class="emphasis"><em>4×1</em></span>

  517.7969
   67.4964
   12.4054
    0.2372

</pre>


Each column of `score` corresponds to one principal component. The vector, `latent`, stores the variances of the four principal components. 

Reconstruct the centered ingredients data. 

<pre class="mcode">
Xcentered = score*coeff'
</pre>


<pre class="codeoutput">Xcentered = <span class="emphasis"><em>13×4</em></span>

   -0.4615  -22.1538   -5.7692   30.0000
   -6.4615  -19.1538    3.2308   22.0000
    3.5385    7.8462   -3.7692  -10.0000
    3.5385  -17.1538   -3.7692   17.0000
   -0.4615    3.8462   -5.7692    3.0000
    3.5385    6.8462   -2.7692   -8.0000
   -4.4615   22.8462    5.2308  -24.0000
   -6.4615  -17.1538   10.2308   14.0000
   -5.4615    5.8462    6.2308   -8.0000
   13.5385   -1.1538   -7.7692   -4.0000
      ⋮

</pre>


The new data in `Xcentered` is the original ingredients data centered by subtracting the column means from corresponding columns. 

Visualize both the orthonormal principal component coefficients for each variable and the principal component scores for each observation in a single plot.

<pre class="mcode">
biplot(coeff(:,1:2),'scores',score(:,1:2),'varlabels',{'v_1','v_2','v_3','v_4'});

fig2plotly()
</pre>

{% capture pca_plot_1 %}
  {% raw %}
{ "data": [ { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1137:f73fcc", "x": [ 0, -0.067799985695474 ], "ysrc": "danton267:1137:8e778c", "y": [ 0, -0.646018286568728 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1137:c59b93", "x": [ 0, -0.678516235418647 ], "ysrc": "danton267:1137:e50f63", "y": [ 0, -0.0199933404840994 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1137:938089", "x": [ 0, 0.0290208321062289 ], "ysrc": "danton267:1137:557e85", "y": [ 0, 0.755309622491133 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,255)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1137:a53367", "x": [ 0, 0.730873909451461 ], "ysrc": "danton267:1137:459862", "y": [ 0, -0.108480477171676 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,255)" }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:d4a104", "x": [ -0.067799985695474, null ], "ysrc": "danton267:1137:c33de8", "y": [ -0.646018286568728, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:2dea81", "x": [ -0.678516235418647, null ], "ysrc": "danton267:1137:2670a4", "y": [ -0.0199933404840994, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:6724d5", "x": [ 0.0290208321062289, null ], "ysrc": "danton267:1137:d93b2c", "y": [ 0.755309622491133, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:74c0de", "x": [ 0.730873909451461, null ], "ysrc": "danton267:1137:1dde06", "y": [ -0.108480477171676, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(0,0,255)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": { "dash": "solid", "color": "rgb(0,0,0)", "width": 0.5 }, "mode": "lines", "name": "", "type": "scatter", "xsrc": "danton267:1137:e2d0e5", "x": [ -0.830840584740246, 0.830840584740246, null, 0, 0 ], "ysrc": "danton267:1137:f4dd18", "y": [ 0, 0, null, -0.830840584740246, 0.830840584740246 ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 6, "color": "rgb(0,0,0)" }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:b6bc5b", "x": [ 0.755866942340936, null ], "ysrc": "danton267:1137:e6943f", "y": [ -0.141043240541916, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:1a4317", "x": [ 0.607768860563822, null ], "ysrc": "danton267:1137:575d9e", "y": [ 0.0946507446783786, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:13cef3", "x": [ -0.266485836948459, null ], "ysrc": "danton267:1137:d86036", "y": [ -0.0863171443649695, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:aec372", "x": [ 0.486808481996306, null ], "ysrc": "danton267:1137:5d8121", "y": [ -0.13618175861055, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:1de0c9", "x": [ -0.011355745941142, null ], "ysrc": "danton267:1137:a20632", "y": [ -0.0915890433446132, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:c4374c", "x": [ -0.221955434404188, null ], "ysrc": "danton267:1137:181119", "y": [ -0.074855674017155, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:c708bd", "x": [ -0.668959704808564, null ], "ysrc": "danton267:1137:8bfce0", "y": [ 0.184335479565507, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:c83fbe", "x": [ 0.464057025402233, null ], "ysrc": "danton267:1137:d548d7", "y": [ 0.220178057380639, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:92b738", "x": [ -0.190139497525539, null ], "ysrc": "danton267:1137:4fce99", "y": [ 0.184448937378935, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:37fe51", "x": [ -0.0674122966083758, null ], "ysrc": "danton267:1137:e4458e", "y": [ -0.2906161669747, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:b644a0", "x": [ 0.189265918790288, null ], "ysrc": "danton267:1137:bcf65e", "y": [ 0.254257597446798, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:00b9fc", "x": [ -0.5251990102672, null ], "ysrc": "danton267:1137:fa8fbc", "y": [ -0.0571017280472755, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true }, { "line": {}, "mode": "markers", "name": "", "type": "scatter", "xsrc": "danton267:1137:9e73fa", "x": [ -0.552259702590117, null ], "ysrc": "danton267:1137:bba232", "y": [ -0.0601660605490777, null ], "xaxis": "x1", "yaxis": "y1", "marker": { "line": { "width": 0.5 }, "size": 2.4, "color": "rgb(255,0,0)", "symbol": "circle", "maxdisplayed": 3 }, "visible": true, "showlegend": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 0, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ -0.830840584740246, 0.830840584740246 ], "ticks": "inside", "title": "Component 1", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "nticks": 10, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ -0.830840584740246, 0.830840584740246 ], "ticks": "inside", "title": "Component 2", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 10, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "color": "rgba(0,0,0,0)" }, "showlegend": false, "annotations": [ { "x": 0.5175, "y": 0.935, "font": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "<b><b></b></b>", "xref": "paper", "yref": "paper", "align": "center", "xanchor": "center", "yanchor": "bottom", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 }, { "x": 0.746873909451461, "y": -0.0924804771716761, "font": { "size": 10, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "v_4", "xref": "x1", "yref": "y1", "align": "left", "xanchor": "left", "yanchor": "middle", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 }, { "x": 0.0450208321062289, "y": 0.771309622491133, "font": { "size": 10, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "v_3", "xref": "x1", "yref": "y1", "align": "left", "xanchor": "left", "yanchor": "middle", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 }, { "x": -0.662516235418647, "y": -0.00399334048409938, "font": { "size": 10, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "v_2", "xref": "x1", "yref": "y1", "align": "left", "xanchor": "left", "yanchor": "middle", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 }, { "x": -0.051799985695474, "y": -0.630018286568727, "font": { "size": 10, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "text": "v_1", "xref": "x1", "yref": "y1", "align": "left", "xanchor": "left", "yanchor": "middle", "borderpad": 3, "showarrow": false, "textangle": 0, "bordercolor": "rgba(0,0,0,0)", "borderwidth": 0.5 } ], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=pca_plot_1
  index=1
%}

All four variables are represented in this biplot by a vector, and the direction and length of the vector indicate how each variable contributes to the two principal components in the plot. For example, the first principal component, which is on the horizontal axis, has positive coefficients for the third and fourth variables. Therefore, vectors v3 and v4 are directed into the right half of the plot. The largest coefficient in the first principal component is the fourth, corresponding to the variable v4.

The second principal component, which is on the vertical axis, has negative coefficients for the variables v1, v2, and v4, and a positive coefficient for the variable v3.

This 2-D biplot also includes a point for each of the 13 observations, with coordinates indicating the score of each observation for the two principal components in the plot. For example, points near the left edge of the plot have the lowest scores for the first principal component. The points are scaled with respect to the maximum score value and maximum coefficient length, so only their relative locations can be determined from the plot.



<!--------------------- EXAMPLE BREAK ------------------------->

## T-Squared Statistic

Find the Hotelling’s T-squared statistic values. 

Load the sample data set. 

<pre class="mcode">
load hald
</pre>

The ingredients data has 13 observations for 4 variables. 

Perform the principal component analysis and request the T-squared values. 

<pre class="mcode">
[coeff,score,latent,tsquared] = pca(ingredients);
tsquared
</pre>


<pre class="codeoutput">tsquared = <span class="emphasis"><em>13×1</em></span>

    5.6803
    3.0758
    6.0002
    2.6198
    3.3681
    0.5668
    3.4818
    3.9794
    2.6086
    7.4818
      ⋮

</pre>


Request only the first two principal components and compute the T-squared values in the reduced space of requested principal components. 

<pre class="mcode">
[coeff,score,latent,tsquared] = pca(ingredients,'NumComponents',2);
tsquared
</pre>


<pre class="codeoutput">tsquared = <span class="emphasis"><em>13×1</em></span>

    5.6803
    3.0758
    6.0002
    2.6198
    3.3681
    0.5668
    3.4818
    3.9794
    2.6086
    7.4818
      ⋮

</pre>


Note that even when you specify a reduced component space, `pca` computes the T-squared values in the full space, using all four components. 

The T-squared value in the reduced space corresponds to the Mahalanobis distance in the reduced space. 

<pre class="mcode">
tsqreduced = mahal(score,score)
</pre>


<pre class="codeoutput">tsqreduced = <span class="emphasis"><em>13×1</em></span>

    3.3179
    2.0079
    0.5874
    1.7382
    0.2955
    0.4228
    3.2457
    2.6914
    1.3619
    2.9903
      ⋮

</pre>


Calculate the T-squared values in the discarded space by taking the difference of the T-squared values in the full space and Mahalanobis distance in the reduced space. 

<pre class="mcode">
tsqdiscarded = tsquared - tsqreduced
</pre>


<pre class="codeoutput">tsqdiscarded = <span class="emphasis"><em>13×1</em></span>

    2.3624
    1.0679
    5.4128
    0.8816
    3.0726
    0.1440
    0.2362
    1.2880
    1.2467
    4.4915
      ⋮

</pre>




<!--------------------- EXAMPLE BREAK ------------------------->

## Percent Variability Explained by Principal Components

Find the percent variability explained by the principal components. Show the data representation in the principal components space.

Load the sample data set. 

<pre class="mcode">
load imports-85
</pre>

Data matrix `X` has 13 continuous variables in columns 3 to 15: wheel-base, length, width, height, curb-weight, engine-size, bore, stroke, compression-ratio, horsepower, peak-rpm, city-mpg, and highway-mpg. 

Find the percent variability explained by principal components of these variables. 

<pre class="mcode">
[coeff,score,latent,tsquared,explained] = pca(X(:,3:15));

explained
</pre>


<pre class="codeoutput">explained = <span class="emphasis"><em>13×1</em></span>

   64.3429
   35.4484
    0.1550
    0.0379
    0.0078
    0.0048
    0.0013
    0.0011
    0.0005
    0.0002
      ⋮

</pre>


The first three components explain 99.95% of all variability. 

Visualize the data representation in the space of the first three principal components.

<pre class="mcode">
scatter3(score(:,1),score(:,2),score(:,3))
axis equal
xlabel('1st Principal Component')
ylabel('2nd Principal Component')
zlabel('3rd Principal Component')

fig2plotly()
</pre>

{% capture pca_plot_2 %}
  {% raw %}
{ "data": [ { "mode": "markers", "name": "", "type": "scatter3d", "xsrc": "danton267:1139:2bb4e2", "x": [ 60.9330460982196, 60.9330460982193, 295.512756394536, -385.325784926617, 26.9009637846352, -240.258243810407, 43.8839912860597, 136.518005426042, 248.587564187435, 221.216091238924, -496.904037421166, -496.904037421166, 600.779213717668, 647.096220787659, 891.58965576803, 429.187103885566, 555.592489720539, 661.004472073842, -892.332383529971, -724.688909585178, -695.162335418226, -776.491432300275, -776.427970341212, -562.365402943768, -699.79467541983, -681.267872591833, -681.267872591833, -509.311675258018, 48.8600284550538, 285.349073423337, -540.341968777633, -1091.54967739205, -810.399064384003, -989.45615397297, -975.982115552609, -930.24055709682, -918.558612959472, -631.522353504318, -586.889601236872, -574.114527058352, -516.857969375254, -437.903844947287, -422.582823413483, -12.1351218496337, -724.688909585178, -695.214450540638, 216.252722205668, 1483.46816488866, 1483.46816488866, 1259.05368342661, -497.238189148218, -488.877804296456, -484.667167290094, -450.84369660382, -446.633044378404, null, null, null, null, 29.2775349394427, 50.3334073210531, 29.2775349394427, 50.3334073210531, 157.426312154624, 62.9653183401417, 164.849189600747, 615.410582546754, 1226.7788269294, 1424.68205076709, 1209.84564205341, 1441.78154479391, 1206.87292050916, 1159.98674928424, 1480.68218416821, 1324.42890415188, 369.119868057382, -741.007545027111, -719.048748432852, -668.521104356497, -548.054995705398, -357.049863726905, -125.581995157694, 303.875866465824, 377.983080821621, 382.193717827984, -94.430779211089, -60.7456831601863, -329.26715738539, -329.26715738539, -604.533995417315, -283.301592610859, -580.112300780411, -563.269752754959, -490.760232631482, -552.322096538416, -487.474686987399, -535.479548512965, -479.812576414939, -504.369805426311, -235.628687547211, -254.155490375207, 419.519305326097, 588.840521076404, 390.06032048847, 399.298855603637, 458.107993790521, 456.768680324131, 457.862514079391, 1062.87040872407, 634.983324468989, 1259.44219989096, 504.103516802092, 1109.18741579406, 681.221341247472, 1305.75920696095, 504.179521149382, 1109.18741579406, 232.296893497621, -741.122103648936, -562.365402943768, -699.79467541983, -681.087866678748, -510.52710211522, 48.8600314988644, 291.243958490547, -10.1494295484478, -237.642950872791, -237.642950872791, -200.589345216799, 360.00528566082, null, null, 19.8140294508941, 50.9727210958697, 61.0778530829001, 104.026747376041, 14.4341160722878, 47.277084721918, -308.754464893138, 18.3066943308606, 119.351495784729, -173.897706300185, 77.8558833926314, -222.949592400225, 28.359365602052, 134.692167981614, -51.6987438800032, -126.06443340389, 57.8384027006267, 252.671979856016, -310.589896375307, -264.238306295422, -285.291491327236, -61.9154445035529, -53.4286284240499, 637.115840619456, -228.91793015967, -205.33866151846, 94.9609106956489, 94.8486314491249, -218.101358076682, -194.354364386417, -179.196071163511, -154.74932886313, -125.27486981859, -1034.35145375599, -1004.87699471145, 162.368212823227, 158.999703218136, 171.631614237225, 279.423921600113, 308.898380644653, 528.695125348902, 300.552218466775, 268.523728325766, 374.68683795793, 374.688330930039, 411.740443613923, 319.100862000494, 352.792668862815, 449.530576800443, 465.816048754227, -78.0426171721703, -360.300255431124, -75.5162349683525, -357.773873227306, -304.719846947134, 131.789067109145, -416.697946071824, -456.031978835174, -483.714041291151, -110.501046009861, 350.981554382964, -195.428004810286, 154.890411637274, 257.631895456269, 174.252631055125, 264.362203855031, 428.527331118504, 522.847540924773, 188.619053563883, 325.549384935146, 188.330533053078, 732.422132469375, 281.303130242201 ], "ysrc": "danton267:1139:5903da", "y": [ -109.379610318519, -109.379610318518, 39.9715702983917, 199.705855894334, 459.962238784637, 291.485791236185, 470.414098415929, 528.76131165529, 600.454499443054, 583.983506985826, 483.77328276521, 483.77328276521, -654.898355329008, -625.724748709327, -471.736134575074, 597.795674036164, 677.408969438407, 743.793630259216, -594.327934969095, -133.447111141255, -114.854148690986, -48.0075951338531, -47.9250123029577, 88.2307004650037, 0.344119874166637, 12.013562522039, 12.013562522039, 121.647814726654, -117.919672841349, 33.2677130354447, -726.573078957239, 344.547891337906, -69.6824580648057, 408.846789902798, 417.333657283069, 446.112895858146, 453.4766107501, 398.434874360622, 426.547622557769, 434.57987748558, 470.643856674796, 520.953027129764, 176.188703763871, -392.934762277246, -133.447111141255, -114.882088746913, -12.3857428765008, 493.921629060002, 493.921629060002, 651.201282035035, -462.663332105973, -457.432644386546, -454.780498330212, -433.489144213798, -430.8369919557, null, null, null, null, -366.653703687957, -353.393638972795, -366.653703687957, -353.393638972795, -464.004343277259, -345.437200803791, -43.6205334539269, -706.747283410686, -142.454205369019, -17.8041541914725, -153.103984772212, -7.06393608912783, 318.869753682888, 289.429103046769, 197.242028065804, 98.852038761676, 87.042354703567, -25.6526081514004, -11.7788962040244, 20.0468564719909, 97.246081711115, 218.061172723051, -227.775267905362, 44.9371517033047, 91.6149235351464, 94.267069591481, -208.155981259892, -186.938812809215, 235.558742523454, 235.558742523454, -293.99243799066, -564.830371284328, -278.609990863919, -268.001406638581, -222.336915650439, -261.105826892111, -220.259443562938, -250.497242666772, -215.441335903969, -230.897216470165, -60.5482692844776, -72.2177119323498, 354.317321868467, 460.961163629873, 335.734307998828, 341.895198075961, 380.406209649961, 378.061149599293, 140.042015258784, -483.080112235025, 251.566189140263, -359.254944616353, 169.095511619556, -453.906505615344, 280.62042501938, -330.081337996672, 169.215621878465, -453.906505615344, 708.385789589063, -25.7295378841831, 88.2307004650037, 0.344119874166637, 12.1098335906414, 119.55962459597, -117.919671600996, 36.9807147746534, 437.669730880658, 769.3216888371, 769.3216888371, 792.660574132845, 971.474989649134, null, null, 159.904763474151, 179.530674667487, 185.895663684745, 212.947714977303, 453.65477602556, 474.34151526497, -462.041858199722, -846.444455932223, -782.800179566054, -494.772830986496, -808.663899906986, -52.6823803646845, -367.285788142642, -299.273960631975, -417.762700858662, 8.34906081694926, -348.733518883328, -224.934553957579, -581.629284366554, -552.409849800455, -565.670580082128, -424.993353442901, -419.606405290991, 15.3455479478848, -529.86094394603, -515.008852078722, -680.787325435111, -680.925149661751, -523.130676278042, -508.067340801029, -498.519614998224, -483.12718122847, -464.562158834127, 1090.640091176, 1109.20511357034, -281.589726547916, -283.711443392984, -275.75500522398, -207.860066181814, -189.295043787472, -50.8533894059776, -904.277461784495, -570.853195589533, -857.562596925816, -857.562966684988, -834.223711630071, 291.33854560673, 312.56486928821, 373.297910673173, 383.536787217551, -435.634185184296, -80.4730204134311, -434.042897550495, -78.8817327796304, -45.4646924698143, -657.247254960754, 179.867260542133, 154.788041552385, 137.346705665371, 373.211096207159, -519.168913630744, 318.792343788349, 422.337224048746, 487.049107136386, 434.527940677082, 491.283385595718, 242.090161211578, 301.497752186549, 443.571063720938, 413.392392207541, 562.362265907828, 76.9959570754892, 501.982518953129 ], "zsrc": "danton267:1139:8b0333", "z": [ 12.3557042401563, 12.3557042401563, 32.7755971151032, -3.00593088375737, -19.3257397030939, 5.67285944941686, -26.6857385156899, -36.6907386875127, -29.8175677767957, -10.4186080908073, -16.9973397810915, -16.9973397810915, 44.0825131754267, 39.0800130895153, 11.6682630075162, 42.3865484895561, 28.4587849372529, 16.3933348066854, 14.6588832446066, 6.67303063200377, 3.26537488972928, 2.68220165369527, 3.01094562610987, 10.8702121987698, -5.2570874217763, -7.25808745614085, -7.25808745614085, 5.14890646734762, -10.6841263541738, 29.9151770542144, 29.2132156383475, 4.60600750044449, -6.52568288656129, -7.20897868450277, -8.6642514367679, -14.8790327974477, -15.8328357010304, -11.4093294058016, -16.2299203976798, -18.2404401853763, -24.4206999141947, -21.6376815971701, 1.10442041089527, -1.19010008666989, 6.67303063200377, 3.4896214864238, -28.3051458327177, 9.09718855783591, 9.09718855783591, 123.083918840302, 14.6327831892005, 13.4874989861501, 13.0327262510673, 8.79913099297419, 8.34443842897591, null, null, null, null, 5.09210501882406, 2.73876476781404, 5.09210501882406, 2.73876476781404, -12.5171435579822, 1.37444656256548, 12.7991224831187, -10.9003643238672, -19.7878918674719, -41.2593484532053, -17.4193664079416, -44.245940392187, 6.88729829397913, 15.1108585905532, 68.0534872285665, 83.5588127345055, 31.1913002095878, 0.185781960075856, -1.85071044617417, -7.3079832671684, 9.36977738731922, 5.77758533391291, 9.08645412371407, 27.9141347282589, 19.9101506250176, 19.4553778899347, 5.67039369485367, 2.03221181419085, 2.72534309311879, 2.72534309311879, 13.7258079044952, 4.12938598791981, 11.0881260410146, 9.2690351006832, 1.1121982883658, 8.08662598946779, 1.11291232912638, 6.26753504913637, -0.0702108228496117, 3.14019708609309, 9.36533303848492, 11.3663330728495, 19.7580419381537, 1.20777773801975, 22.5520647749211, 29.3162866715113, 52.6116647714605, 22.0114305215952, -50.2613421200368, -26.9949277700665, -70.8056189245839, -49.2859784843832, -56.7287386710569, -31.9974278559779, -77.1847081693866, -54.2884785702946, -55.2638422059481, -31.9974278559779, -32.5900159906098, -1.1374711647669, 10.8702121987698, -5.2570874217763, -8.04018231329544, -21.1158554505531, -10.6841103199569, 29.2784689677244, 16.1473723920961, 84.1154303206276, 84.1154303206276, 80.1134302518985, 96.4023358031981, null, null, -12.8846817178006, -16.2495818011799, -17.342895365999, -21.9797182632238, 4.12498704568783, 0.577759712041583, 7.20121476999946, 23.5522756306667, 12.6216412608963, 16.3731108372058, 22.3362178838148, -1.95172912419392, -4.84090679425295, 4.9700324418955, 3.38305699145096, -12.4678394959708, -8.23858762873418, -7.69938696236989, 6.5685053507969, 1.75704025564382, 4.03090393105809, -21.097899485124, -21.7050144177491, -96.2877429713369, 7.40536840775791, 4.86747182191568, -5.9101099419502, -6.37080306904249, 5.61809822146131, 3.85020242281835, 2.21302057652008, -0.563020254892074, -3.74642940047204, -22.3088574982945, -25.4922666438744, 30.6547577093337, 31.0185758974, 29.6542576921514, 18.0120756740304, 14.8286665284504, -8.95462389598323, 30.688477505089, -13.1045551417628, 22.8659218461621, 22.8217681930533, 18.863921777433, 30.1922949333199, 26.5949095786727, 11.9090911334476, 3.50936501901981, -24.5755299054065, 2.59009343233372, -24.8483935464562, 2.31722979128401, -3.41290667075993, -10.6862609875139, -0.760710030991421, -2.5234706855158, 0.168930073166681, -8.65912972638636, -34.895850015336, -34.4193752283912, -24.088090902298, -35.241945387361, -26.2208420096948, -36.0103782895092, -0.485882073119106, -10.7301910880164, -28.0122982996354, -0.422421509844688, 0.292154932133996, -41.3132464533848, -37.7705657073088 ], "marker": { "line": { "color": "rgb(61.761,38.352,168.3765)", "width": 0.5 }, "size": 5.4, "color": "rgba(0,0,0,0)", "symbol": "circle", "sizeref": 1, "sizemode": "area" }, "visible": true } ], "layout": { "title": "<b><b></b></b>", "width": 840, "height": 630, "margin": { "b": 0, "l": 0, "r": 0, "t": 80, "pad": 0 }, "scene1": { "domain": { "x": [ 0.13, 0.905 ], "y": [ 0.11, 0.925 ] } }, "xaxis1": { "side": "bottom", "type": "linear", "range": [ -1091.54967739205, 1483.46816488866 ], "ticks": "outside", "title": "1st Principal Component", "anchor": "y1", "domain": [ 0.13, 0.905 ], "mirror": false, "nticks": 6, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "yaxis1": { "side": "left", "type": "linear", "range": [ -904.277461784495, 1109.20511357034 ], "ticks": "outside", "title": "2nd Principal Component", "anchor": "x1", "domain": [ 0.11, 0.925 ], "mirror": false, "nticks": 5, "ticklen": 6.51, "autotick": true, "showgrid": true, "showline": true, "tickfont": { "size": 10, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "zeroline": false, "autorange": false, "gridcolor": "rgb(38.25,38.25,38.25)", "gridwidth": 1, "linecolor": "rgb(38.25,38.25,38.25)", "linewidth": 1, "tickcolor": "rgb(38.25,38.25,38.25)", "tickwidth": 1, "titlefont": { "size": 11, "color": "rgb(38.25,38.25,38.25)", "family": "Arial, sans-serif" }, "exponentformat": "none" }, "autosize": false, "hovermode": "closest", "titlefont": { "size": 11, "color": "rgb(0,0,0)", "family": "Arial, sans-serif" }, "showlegend": false, "annotations": [], "paper_bgcolor": "rgb(255,255,255)" }, "frames": [] }
  {% endraw %}
{% endcapture %}
{% include posts/ssim_frame.html 
  raw_json_file=pca_plot_2
  index=1
%}

The data shows the largest variability along the first principal component axis. This is the largest possible variance among all possible choices of the first axis. The variability along the second principal component axis is the largest among all possible remaining choices of the second axis. The third principal component axis has the third largest variability, which is significantly smaller than the variability along the second principal component axis. The fourth through thirteenth principal component axes are not worth inspecting, because they explain only 0.05% of all variability in the data.

To skip any of the outputs, you can use `~` instead in the corresponding element. For example, if you don’t want to get the T-squared values, specify 

<pre class="mcode">
[coeff,score,latent,~,explained] = pca(X(:,3:15));
</pre>



<!--------------------- EXAMPLE BREAK ------------------------->
