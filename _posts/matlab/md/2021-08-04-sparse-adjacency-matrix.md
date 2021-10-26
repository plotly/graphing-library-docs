---
description: How to make Sparse Adjacency Matrixes in MATLAB<sup>&reg;</sup> with Plotly.
name: Sparse Adjacency Matrix
display_as: scientific
order: 
permalink: matlab/sparse-adjacency-matrix/
thumbnail: thumbnail/
layout: base
language: matlab
page_type: u-guide
---

## Plot Sparsity Pattern

Plot the 60-by-60 sparse adjacency matrix of the connectivity graph of the Buckminster Fuller geodesic dome. This matrix also represents the carbon-60 molecule and a soccer ball.

<pre class="mcode">
B = bucky;
spy(B)

fig2plotly()
</pre>

plot_0_0_plot_sparsity_pattern

Specify the color and marker.

<pre class="mcode">
spy(B,'ro')

fig2plotly()
</pre>

plot_0_1_plot_sparsity_pattern

Also specify the marker size.

<pre class="mcode">
spy(B,'ro',2)

fig2plotly()
</pre>

plot_0_2_plot_sparsity_pattern



<!--------------------- EXAMPLE BREAK ------------------------->

