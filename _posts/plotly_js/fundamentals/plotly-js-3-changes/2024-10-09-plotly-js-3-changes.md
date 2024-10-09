---
description: Learn about the changes in Plotly.js version 3.
display_as: file_settings
language: plotly_js
layout: base
name: Version 3 Changes
order: 27
page_type: u-guide
permalink: javascript/version-3-changes/
redirect_from: javascript/pointcloud/
sitemap: false
thumbnail: thumbnail/pointcloud.jpg
---
This page outlines the changes in Plotly.js version 3 and cases where you may need to update your charts.

## Removed Features

Plotly.js 3 removes the following features that were deprecated in previous versions.

### `annotation.ref` Attribute

`annotation.ref` has been removed. Use `annotation.xref` and `annotation.yref` instead.


Example using `annotation.ref`:

```js
...
var layout = {
    title: "Try panning or zooming!",
    annotations: [{
        text: "Absolutely-positioned annotation",
        ref: "paper",
        x: 0.3,
        y: 0.3,
        showarrow: false
    }]
};
...
```

Example using `annotation.xref` and `annotation.yref`:

```js
...
var layout = {
    title: "Try panning or zooming!",
    annotations: [{
        text: "Absolutely-positioned annotation",
        xref: "paper",
        yref: "paper",
        x: 0.3,
        y: 0.3,
        showarrow: false
    }]
};
...
```

### `bardir` Attribute on Bar Charts

The `bardir` attribute for setting the bar direction on bar charts has been removed. Use `orientation` instead.

Here's an example using `bardir` to make the bars horizontal:

```js
var data = [{
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    bardir: 'h',
}];

var layout = {
    title: 'Bar Chart with Horizontal Bars',
    xaxis: {
        title: 'X Axis'
    },
    yaxis: {
        title: 'Y Axis'
    }
};


Plotly.newPlot('bar-chart', data, layout);
```

And here it is rewritten to use `orientation`:

```js
var data = [{
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    orientation: 'h',
}];

var layout = {
    title: 'Bar Chart with Horizontal Bars',
    xaxis: {
        title: 'X Axis'
    },
    yaxis: {
        title: 'Y Axis'
    }
};


Plotly.newPlot('bar-chart', data, layout);
```

### `heatmapgl` Trace

`heatmapgl` has been removed. Use `heatmap` instead.


### `opacity` Attribute on Error Bars

The `opacity` attribute on error bars has been removed. Use the alpha channel of the `color` attribute instead.

Here's an example that was previously in the Plotly.js docs, and which uses `opacity`.

```
  error_y: {
    type: 'constant',
    value: 0.1,
    color: '#85144B',
    thickness: 1.5,
    width: 3,
    opacity: 0.5
  }

```
And here it is rewritten to use the alpha channel on a `rgba` color value.

```
  error_y: {
    type: 'constant',
    value: 0.1,
    color: 'rgba(133, 20, 75, 0.5)',
    thickness: 1.5,
    width: 3,
  }

```

### `pointcloud` Trace

`pointcloud` has been removed. Use `scattergl` instead.

Here's an example that was previously in the Plotly.js docs and which uses `pointcloud`:


```js
var myPlot = document.getElementById('myDiv');

var xy = new Float32Array([1,2,3,4,5,6,0,4]);


data = [{ xy: xy,  type: 'pointcloud' }];

layout = { };


Plotly.newPlot('myDiv', data, layout);
```

And here it is rewritten to use `scattergl`:

```js
var myPlot = document.getElementById('myDiv');

var xy = new Float32Array([1,2,3,4,5,6,0,4]);

var x = [];
var y = [];
for (var i = 0; i < xy.length; i += 2) {
    x.push(xy[i]);
    y.push(xy[i + 1]);
}

var data = [{
    x: x,
    y: y,
    mode: 'markers',
    type: 'scattergl',
    marker: {
        size: 10,
        color: 'blue',
        opacity: 0.8
    }
}];
var layout = {
    title: 'Point Cloud',
    xaxis: { title: 'X Axis' },
    yaxis: { title: 'Y Axis' }
};

Plotly.newPlot('myDiv', data, layout);
```


