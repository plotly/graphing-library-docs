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

### annotation.ref

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