---
description: How to export plotly graphs as static images in MATLAB<sup>&reg;</sup>. Plotly supports png, jpg, and more image export.
name: Static Image Export
display_as: file_settings
order: 5
permalink: matlab/static-image-export/
thumbnail: thumbnail/static-image-export.png
layout: base
language: matlab
page_type: u-guide
---

<div class="content-box">
<p>You can save static images using the following syntax :</p><br>

<pre><code>
saveplotlyfig(figure, 'your_image_filename.png')</code></pre>

<p>figure is a struct with data and layout fields.</p><br>
<p>figure.data is a cell array of structs, containing your trace and data information.</p><br>
<p>figure.layout is a struct containing your plot's styling information.</p></br>

<p>Alternatively, you can exclude the layout information and simply provide the data information as follows:

<pre><code>saveplotlyfig(data, 'your_image_filename.png')</code></pre></br>
<p>data is a cell array of structs, containing your trace and data information.</p><br>


<p>Combine this with a GET request on a plot you (or someone else) has already created :<p></br>

<pre><code>figure = getplotlyfig('demos', 1526)
saveplotlyfig(figure, 'your_image_filename.png')
</code></pre>

<p>This will save a static image of a plot you've pulled from Plotly's Servers. Plotly supports PNG, JPEG.</p><br>

<p>Take a look at the following examples rendered using saveplotlyfig:</p><br>

<h6>PNG Example:</h6>

<img src="https://plotly.com/~PlotBot/149.png">

<h6>JPEG Example</h6>

<img src="https://plotly.com/~Dreamshot/539.jpeg">

<br>
</div><br>
