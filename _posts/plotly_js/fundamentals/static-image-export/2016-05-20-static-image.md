---
description: How to export graphs as static images in JavaScript. The Plotly JavaScript
  graphing library supports `.jpg`, `.png`, `.webp`, and `.svg` as formats for static
  image export.
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

You can save graphs created with `plotly.js` to static images and view them in your browser. Consider the following example:

    const imgJpg = document.getElementById('jpg-export');

    const trace = {x: [3, 9, 8, 10, 4, 6, 5], y: [5, 7, 6, 7, 8, 9, 8], type: 'scatter'};
    const trace1 = {x: [3, 4, 1, 6, 8, 9, 5], y: [4, 2, 5, 2, 1, 7, 3], type: 'scatter'};
    const data = [trace, trace1];
    const layout = {title: {text: 'Simple JavaScript Graph'}};

    Plotly.newPlot('plotly_div', data, layout)
      .then((gd) => Plotly.toImage(gd, {format: 'jpeg', height: 300, width: 300}))
      .then((url) => {
        imgJpg.src = url;
      });

To view this image in your page include following HTML tag:

    <img id="jpg-export">

Height and width of the image can be adjusted by specifying the same in `toImage` call:

    Plotly.toImage(gd, {
      format: 'jpeg',
      height: desiredHeight,
      width: desiredWidth
    });

You can also save the image using different formats.

# Formats Supported

`Plotly.toImage` and `Plotly.downloadImage` take one of five values for `format`:

- `png` - raster image, and the default format
- `jpeg` - raster image with no transparency
- `webp` - raster image
- `svg` - vector image
- `full-json` - the figure specification as JSON, not a rendered image

**Note:** A figure that contains a WebGL trace (of type scattergl, scatter3d, surface, mesh3d, scatterpolargl, cone, streamtube, splom, or parcoords) holds encapsulated rasters instead of vectors for some parts of an SVG export.

## Saving as PNG ##

    const imgPng = document.getElementById('png-export');

    Plotly.toImage(gd, {format: 'png', height: 400, width: 400}).then((url) => {
      imgPng.src = url;
    });

## Saving as SVG ##

    const imgSvg = document.getElementById('svg-export');

    Plotly.toImage(gd, {format: 'svg', height: 800, width: 800}).then((url) => {
      imgSvg.src = url;
    });

## Saving as JSON ##

The `full-json` format returns the figure with every default value filled in, including data, layout, frames, config, and the plotly.js `version`.

    // toImage returns a data:application/json URL
    Plotly.toImage(gd, {format: 'full-json'}).then((dataUrl) => {
      console.log(dataUrl);
    });

    // Set imageDataOnly to get the raw JSON string instead
    Plotly.toImage(gd, {format: 'full-json', imageDataOnly: true}).then((json) => {
      console.log(JSON.parse(json));
    });

`Plotly.downloadImage` downloads the figure JSON instead, and saves it as `newplot.full.json`:

    Plotly.downloadImage(gd, {format: 'full-json', filename: 'newplot'});
