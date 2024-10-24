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

### `autotick` Attribute

The `autotick` attribute has been removed.

Use `tickmode: 'auto'` instead of `autotick: true` and `tickmode: 'linear'` instead of `autotick: false`.

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

### `layout.scene.cameraposition` Attribute for 3D Plots

The `layout.scene.cameraposition` attribute on 3D plots has been removed. Use `layout.scene.camera` instead.

If you are using `cameraposition`, you'll need to make some changes to it for it work with the `camera` attribute. Here's an example of converting a `cameraposition` to `camera`. This example uses [gl-mat4](https://www.npmjs.com/package/gl-mat4#fromquatoutmat4-qquat4).

```js
var m4FromQuat = require('gl-mat4/fromQuat');

// Original cameraposition
var cameraposition = <cameraposition>;

var rotation = cameraposition[0];
var center = cameraposition[1];
var radius = cameraposition[2];
var mat = m4FromQuat([], rotation);
var eye = [];

for(j = 0; j < 3; ++j) {
    eye[j] = center[j] + radius * mat[2 + 4 * j];
}

// New camera
var camera = {
    eye: {x: eye[0], y: eye[1], z: eye[2]},
    center: {x: center[0], y: center[1], z: center[2]},
    up: {x: 0, y: 0, z: 1}
};
```

### `heatmapgl` Trace

`heatmapgl` has been removed. Use `heatmap` instead.

```
var data = [
  {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
    type: 'heatmapgl'
  }
];

Plotly.newPlot('myDiv', data);
```

```
var data = [
  {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
    type: 'heatmap'
  }
];

Plotly.newPlot('myDiv', data);
```

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

### jQuery Events

Support for using jQuery events has been removed. Use [Plotly.js events](/javascript/plotlyjs-events/) instead.

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

### `plot3dPixelRatio` for WebGL Image Export

`plotGlPixelRatio` for setting the pixel ration during WebGL image export has been removed. Use `plotGlPixelRatio` instead.


### `titlefont`,`titleposition`, `titleside`, and `titleoffset` Attributes

The `titlefont`,`titleposition`, `titleside`, and `titleoffset` attributes are removed. Replace them with `title.font`, `title.position`, `title.side`, and `title.offset`.

Here's an example that uses `titlefont`:

```js
var data = [{
    type: 'bar',
    x: ['A', 'B', 'C', 'D'],
    y: [10, 15, 13, 17]
}];

var layout = {
    title: {
        text: 'Chart Title',
    },
    titlefont: {
        size: 40
    }
};

Plotly.newPlot('chart', data, layout);
```

And here it is rewritten to use `title.font`:

```js
var data = [{
    type: 'bar',
    x: ['A', 'B', 'C', 'D'],
    y: [10, 15, 13, 17]
}];

var layout = {
    title: {
        text: 'Chart Title',
        font: {
            size: 40
        }
    },
};

Plotly.newPlot('chart', data, layout);
```

### Transforms

Transforms have been removed.

### `zauto`, `zmin`, and `zmax` from Surface Trace

The `zauto`, `zmin`, and `zmax` attributes have been removed on surface traces. Use `cauto`, `cmin`, and `cmax` instead.


