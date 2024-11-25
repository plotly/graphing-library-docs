---
description: How to export graphs as static images in JavaScript. The Plotly JavaScript
  graphing library supports `.jpeg`, `.png`, `.svg`, and `.webp` as formats for static image
  export.
display_as: file_settings
language: plotly_js
layout: base
name: Static Image Export
order: 25
page_type: u-guide
permalink: javascript/static-image-export/
sitemap: false
thumbnail: thumbnail/png-export.png
---

You can save graphs created with `plotly.js` to static images and view them in your browser.

In the following example, we render a chart with `Plotly.newPlot` and then export the same chart in the .jpeg image format using the `Plotly.toImage` function. In `toImage`, we specify the `div` that contains the chart to export. In this case it's the `div` with the id of 'chart'.

    var img = document.getElementById('jpeg-export');

    // Plotting the graph

    var trace1={x:[3,9,8,10,4,6,5],y:[5,7,6,7,8,9,8],type:"scatter"};
    var trace2={x:[3,4,1,6,8,9,5],y:[4,2,5,2,1,7,3],type:"scatter"};
    var data = [trace1,trace2];
    var layout = {title : "Simple JavaScript Graph"};

    Plotly.newPlot(

      'chart',

       data,

       layout);

    // Static image export in jpeg format

    Plotly.toImage('chart', {format: 'jpeg'})
      .then(function(url) {
        img.setAttribute("src", url);
      });

To view this image on your page include the following HTML tags. The interactive Plotly.js chart renders in the `div` element, and the exported image in the `img` element.

    <div id="chart"></div>
    <img id="jpeg-export"></img>

The height and width of the image can be adjusted by specifying the same in `toImage` call:

    Plotly.toImage(
    gd,{
      format:'jpeg',
      height:desired_height,
      width:desired_width,
    });

## Formats Supported

The image formats 'PNG', 'JPG/JPEG', 'SVG', and 'WEBP' are supported. To export to 'EPS' or 'PDF' format, you can use [Kaleido in Python](https://www.plotly.com/python/static-image-export/).

**Note:** It is important to note that any figures containing WebGL traces (i.e. of type scattergl, heatmapgl, contourgl, scatter3d, surface, mesh3d, scatterpolargl, cone, streamtube, splom, or parcoords) that are exported in a vector format like SVG, EPS or PDF will include encapsulated rasters instead of vectors for some parts of the image.

### Saving as PNG
    Plotly.toImage('chart', {format: 'png'})
      .then(function(url) {
        img.setAttribute("src", url);
      });

### Saving as SVG
    Plotly.toImage('chart', {format: 'svg'})
      .then(function(url) {
        img.setAttribute("src", url);
      });

### Saving as WEBP
    Plotly.toImage('chart', {format: 'webp'})
      .then(function(url) {
        img.setAttribute("src", url);
      });
