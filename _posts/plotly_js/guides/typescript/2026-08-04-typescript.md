---
description: How to use Plotly.js with TypeScript, including the types it ships and how to type figures, layouts, configs, and events.
display_as: guide
language: plotly_js
layout: base
name: Using Plotly.js with TypeScript
order: 4
page_type: u-guide
permalink: javascript/guides/typescript/
sitemap: false
thumbnail: thumbnail/theming-and-templates.png
---
# Using Plotly.js with TypeScript

Since v4, Plotly.js ships its own TypeScript type definitions. `package.json` points
`"types"` at `lib/index.d.ts`, so they are picked up automatically.
Most of the types are generated from the plot schema and that information is included
in the type definitions

## Importing

The package provides a default namespace, named exports, and a global `Plotly`
namespace, so all of these work:

```ts
import Plotly from 'plotly.js';
// or
import * as Plotly from 'plotly.js';
// or
import { newPlot } from 'plotly.js';
import type { Layout, Data, TraceType } from 'plotly.js';
```

A minimal typed figure:

```ts
import { newPlot } from 'plotly.js';
import type { Data, Layout } from 'plotly.js';

const data: Data[] = [{ type: 'scatter', x: [1, 2, 3], y: [4, 5, 6] }];
const layout: Partial<Layout> = { title: { text: 'Demo' } };

await newPlot(div, data, layout);
```

## Typing trace data

`Data` is the union of every trace's data object, and it discriminates on `type`.
Annotating a figure as `Data[]` therefore gets each entry checked against the right
trace shape:

```ts
const data: Data[] = [
    { type: 'bar', x: ['a', 'b'], y: [1, 2] },     // checked as BarData
    { type: 'scatter', x: [1, 2], mode: 'lines' }, // checked as ScatterData
];
```

Per-trace interfaces (`ScatterData`, `BarData`, `HeatmapData`, `ChoroplethData`, …)
are exported too. Reach for them when a value is guaranteed to be one trace type —
for example a helper that builds a `BarData` to push into a `Data[]` — and prefer the
`Data` union everywhere else.

## Typing layout and config

`Layout` describes the layout object you pass in, so use `Partial<Layout>`: nearly
every field is optional, and the full interface would require all of them.
`Config` types the config argument.

```ts
import type { Config, Layout } from 'plotly.js';

const layout: Partial<Layout> = {
    title: { text: 'Quarterly revenue' },
    yaxis: { tickformat: '$,.0f' },
};

const config: Partial<Config> = { responsive: true, showSendToCloud: false };
```

Note that `Layout` and `Data` are *input* shapes. The post-coerce internal shapes
that Plotly computes from them (often called "FullLayout" and "FullData") are
deliberately not exported.

## Typing events

Event payloads have their own interfaces, and `PlotlyHTMLElement` types the graph
div that `newPlot` resolves to:

```ts
import { newPlot } from 'plotly.js';
import type { PlotMouseEvent, PlotRelayoutEvent } from 'plotly.js';

const gd = await newPlot(div, data, layout);

gd.on('plotly_click', (event: PlotMouseEvent) => {
    console.log(event.points[0].x, event.points[0].y);
});

gd.on('plotly_relayout', (event: PlotRelayoutEvent) => {
    console.log(event['xaxis.range[0]']);
});
```

`PlotlyEventName` is the union of names accepted by `on()`, `once()`, and
`removeListener()`.

## What else is exported

| Category | Exports |
|---|---|
| Layout components | `LayoutAxis`, `Legend`, `Annotation`, `Shape`, `Slider`, `UpdateMenu`, `Scene`, and the other component interfaces |
| Config and image export | `Config`, `ToImgopts`, `DownloadImgopts`, `ToImageButtonOptions`, `ModeBarDefaultButtons`, `ModeBarButton`, `Icon` |
| Enums | String-literal unions such as `TraceType`, `AxisType`, `Calendar`, `Dash`, `PatternShape`, `XRef`, `YRef`, `MarkerSymbol`, `HoverInfo` — use these instead of `string` to get narrowing on attribute values |
| Shared sub-interfaces | `Font`, `ColorBar`, `HoverLabel`, `Pattern`, `Domain`, `LegendGroupTitle`, `TickFormatStops` |
| Events | `PlotMouseEvent`, `PlotHoverEvent`, `PlotSelectionEvent`, `PlotRelayoutEvent`, `PlotRestyleEvent`, `LegendClickEvent`, `SliderChangeEvent`, `PlotlyEventName` |
| Animation and frames | `AnimationOpts`, `Frame`, `Transition`, `TransitionEasing` |
| Templates | `Template`, `TemplateFigure`, `ValidateTemplateResult` |
| DOM and values | `PlotlyHTMLElement`, `Datum`, `TypedArray`, `Color`, `ColorScale` |

`PlotType` is an alias for `TraceType`, so existing imports keep compiling. New code
should prefer `TraceType`.
