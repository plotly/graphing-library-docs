---
description: Full details on new features and breaking changes in Plotly.js version 4.
display_as: guide
language: plotly_js
layout: base
name: What's New in Plotly.js v4
order: 1
page_type: u-guide
permalink: javascript/guides/whats-new-in-v4/
sitemap: false
thumbnail: thumbnail/quiver-plot.jpg
---
# What's New in Plotly.js v4

This page is a comprehensive reference for the new features and breaking
changes in Plotly.js v4. For a quick checklist of code changes to update
existing charts, see [Migrating to Plotly.js
v4](/javascript/guides/migrating-to-v4/).

## Contents

**New capabilities**

- [Quiver trace type](#quiver-trace-type)
- [Share with Plotly Cloud](#share-with-plotly-cloud)
- [MathJax v4 support](#mathjax-v4-support)
- [Sankey node and link ordering](#sankey-node-and-link-ordering)
- [Sankey flow direction](#sankey-flow-direction)
- [Geo subplot zoom limits](#geo-subplot-zoom-limits)
- [TypeScript types](#typescript-types)

**New defaults**

- [Map subplots auto-fit to data](#map-subplots-auto-fit-to-data)
- [Geo subplots auto-fit by default](#geo-subplots-auto-fit-by-default)
- [Overlaying axis `tickmode` defaults to `'sync'`](#overlaying-axis-tickmode-defaults-to-sync)
- [`splom.axis.matches` default flipped to `true`](#splomaxismatches-default-flipped-to-true)
- [Shape legend marker outlines honor `line.dash`](#shape-legend-marker-outlines-honor-line-dash)

**Behavior and library changes**

- [Color library swap](#color-library-swap)
- [Country name lookup](#country-name-lookup)
- [Scattermap icon defaults](#scattermap-icon-defaults)
- [Geo `fitbounds` framing for antimeridian features](#geo-fitbounds-framing-for-antimeridian-features)
- [Sankey layout algorithm update](#sankey-layout-algorithm-update)
- [Hover and click event data](#hover-and-click-event-data)

**Removed**

- [Chart Studio APIs removed](#chart-studio-apis-removed)
- [Mapbox traces and subplots removed](#mapbox-traces-and-subplots-removed)

**Requirements**

- [Minimum Node.js version](#minimum-nodejs-version)

---

## Quiver trace type

*Implemented in [#7710](https://github.com/plotly/plotly.js/pull/7710).*

Plotly.js now ships a `quiver` trace type for visualizing 2D vector fields as
arrays of arrows. Arrows are placed at `(x, y)` coordinates and drawn with
direction and magnitude from `(u, v)` components. See
[Quiver Plots](/javascript/quiver-plots/) for runnable examples.

```js
Plotly.newPlot(gd, [{
    type: 'quiver',
    x: [0, 1, 2, 0, 1, 2],
    y: [0, 0, 0, 1, 1, 1],
    u: [1, 0.5, 0, 0.5, 0, -0.5],
    v: [0, 0.5, 1, 0.5, 1, 0.5]
}]);
```

![Simple 6-arrow quiver with per-arrow coloring](/all_static/images/whats-new-in-v4/quiver_simple.png)

### Positioning and sizing

| Attribute | Values | Purpose |
|---|---|---|
| `x`, `y` | numeric arrays | Arrow anchor positions. |
| `u`, `v` | numeric arrays | Vector components at each `(x, y)`. |
| `anchor` | `'tail'` (default) / `'tip'` / `'center'` | Which point of the arrow sits at `(x, y)`. |
| `sizemode` | `'scaled'` (default) / `'raw'` | Normalize arrow lengths against the maximum vector length + point density, or draw them at their raw magnitude. |
| `sizeref` | number (default `1`) | Multiplier applied on top of `sizemode`. |
| `anglemode` | `'data'` / `'paper'` | In `'data'`, angles are measured in data coordinates and change with axis zoom or non-uniform scaling; in `'paper'`, angles stay fixed in pixel space. |

### Styling

Arrow lines are styled through `marker.line.width` and `marker.line.dash`.
`marker.arrowsize` scales the arrowhead relative to the line width — a value
of `1` (default) gives a head about 3× the line width.

### Coloring arrows by a scalar field

Pass `marker.color` as an array (one value per arrow) together with the usual
colorscale attributes (`marker.colorscale`, `marker.cmin`, `marker.cmax`,
`marker.showscale`, `marker.colorbar`) to color each arrow by that scalar. If
you enable a colorscale but don't supply a `marker.color` array, arrows are
colored by their vector magnitude `|(u, v)|` instead. A single (non-array)
`marker.color` paints every arrow that one color.

```js
{
    type: 'quiver',
    x: [/* … */], y: [/* … */],
    u: [/* … */], v: [/* … */],
    marker: {
        color: [/* one value per arrow */],
        colorscale: 'Viridis',
        showscale: true
    }
}
```

### Selection

Quiver supports box and lasso selection through the standard `selected` /
`unselected` marker attributes and appears in the modebar selection buttons
like other cartesian traces.

### Example: wind field

A larger example showing arrows colored by magnitude:

![Vector wind field visualization with arrows colored by speed](/all_static/images/whats-new-in-v4/quiver_wind.png)

---

## Share with Plotly Cloud

*Implemented in [#7802](https://github.com/plotly/plotly.js/pull/7802),
[#7852](https://github.com/plotly/plotly.js/pull/7852),
[#7854](https://github.com/plotly/plotly.js/pull/7854), and
[#7909](https://github.com/plotly/plotly.js/pull/7909).*

Plotly.js now offers a modebar button, labelled "Share chart…", which sends the
current chart to [Plotly Cloud](https://cloud.plotly.com) to generate a shareable
link. Sharing the chart opens Plotly Cloud in a new tab, where you can copy the
sharing link and adjust visibility settings. A Plotly Cloud account is required.

The button is enabled by default in v4:

![The "Share chart…" modebar button](/all_static/images/whats-new-in-v4/share_with_plotly_cloud_button.png)

Clicking the button brings up a dialog confirming the sharing destination:

![The "Share chart" confirmation dialog](/all_static/images/whats-new-in-v4/share_with_plotly_cloud_dialog.png)

### Config

The button is controlled by two config options:

| Config option | Default | Purpose |
|---|---|---|
| `showSendToCloud` | `true` | Whether the "Share chart…" modebar button is rendered. |
| `plotlyServerURL` | `'https://cloud.plotly.com/newchart'` | The endpoint the button posts to. Override to point at an alternate server. |

Hide the button by setting `showSendToCloud: false`:

```js
Plotly.newPlot(gd, data, layout, {
    showSendToCloud: false
});
```

---

## MathJax v4 support

*Implemented in [#7898](https://github.com/plotly/plotly.js/pull/7898) and
[#7951](https://github.com/plotly/plotly.js/pull/7951).*

Plotly.js now supports **MathJax v3 and v4** for rendering LaTeX in labels,
titles, and annotations. Support for **MathJax v2 has been dropped**.

### What to do

Loading MathJax v2 in the page? Upgrade to v3 or v4. Plotly math rendering
uses the tex-svg component (`tex-svg.js`):
```html
<!-- v3 (still supported) -->
<script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<!-- or v4 (new) -->
<script src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js"></script>
```

Note that the `?config=TeX-AMS-MML_SVG` URL suffix (used with MathJax v2) is
no longer required starting with MathJax v3. Configuration is specified by linking
directly to the desired JavaScript file, which is `tex-svg.js` for Plotly.js.

Already on v3? No action required — your math expressions continue to render.

---

## Sankey node and link ordering

*Implemented in [#7873](https://github.com/plotly/plotly.js/pull/7873).*

Two new attributes let you override the automatic ordering that v4's d3-sankey
algorithm applies (see [Node and Link
Ordering](/javascript/sankey-diagram/#node-and-link-ordering)):

| Attribute | Default | `'input'` value |
|---|---|---|
| `sankey.node.sort` | `'auto'` | Preserves the vertical order of nodes as given in `node.label`, disabling the layout's default y-axis reordering. |
| `sankey.link.sort` | `'auto'` | Preserves the order in which links are given in `link.source` / `link.target`, disabling the layout's per-node link ordering. |

Defaults reproduce v3 behavior, so no code change is needed on upgrade. Use
`'input'` when you want a stable, deterministic ordering across renders —
animation, side-by-side comparisons, or figures where the input order carries
semantic meaning that the layout would otherwise obscure.

```js
Plotly.newPlot(gd, [{
    type: 'sankey',
    node: {
        label: [/* … */],
        sort: 'input'
    },
    link: {
        source: [/* … */],
        target: [/* … */],
        value:  [/* … */],
        sort: 'input'
    }
}]);
```

The `sort` attribute is not honored on circular Sankey diagrams — those
continue to use `d3-sankey-circular`, which has no equivalent hook.

Same data, same code — only the `sort` value differs:

| `sort: 'auto'` (default) | `sort: 'input'` |
|---|---|
| ![auto reorders sources to reduce crossings](/all_static/images/whats-new-in-v4/sankey_sort_auto.png) | ![input preserves the given order, crossings and all](/all_static/images/whats-new-in-v4/sankey_sort_input.png) |

In this figure the source nodes are given as `[A, B, C, D]` and paired
one-to-one with targets `[Z, Y, X, W]` — a maximally-crossed input. `'auto'`
flips the source column to `D, C, B, A` so the primary flows run horizontally;
`'input'` leaves both columns in the given order and preserves every crossing.

---

## Sankey flow direction

*Implemented in [#7870](https://github.com/plotly/plotly.js/pull/7870).*

A new `sankey.direction` attribute controls which way flows run along the
`orientation` axis, so you can reverse a diagram without manually reversing
your `link.source` / `link.target` data (see [Flow
Direction](/javascript/sankey-diagram/#flow-direction)).

| Attribute | Default | `'reversed'` value |
|---|---|---|
| `sankey.direction` | `'forward'` | Flips the flow along the `orientation` axis. |

`direction` is orthogonal to the existing `orientation` attribute (`'h'` /
`'v'`), giving four combinations:

| `orientation` | `direction` | Result |
|---|---|---|
| `'h'` (default) | `'forward'` (default) | Sources on the left, targets on the right |
| `'h'` | `'reversed'` | Sources on the right, targets on the left |
| `'v'` | `'forward'` | Sources on top, targets on the bottom |
| `'v'` | `'reversed'` | Sources on the bottom, targets on the top |

The default (`'forward'`) reproduces v3 behavior, so no code change is needed
on upgrade.

```js
Plotly.newPlot(gd, [{
    type: 'sankey',
    orientation: 'h',
    direction: 'reversed',   // sources on the right, targets on the left
    node: {
        label: [/* … */]
    },
    link: {
        source: [/* … */],
        target: [/* … */],
        value:  [/* … */]
    }
}]);
```

Node labels stay upright and readable in every combination — only the flow
geometry mirrors.

| `direction: 'forward'` (default) | `direction: 'reversed'` |
|---|---|
| ![forward flow with sources on the left](/all_static/images/whats-new-in-v4/sankey_direction_forward.png) | ![reversed flow with sources on the right](/all_static/images/whats-new-in-v4/sankey_direction_reversed.png) |

---

## Geo subplot zoom limits

*Implemented in [#7371](https://github.com/plotly/plotly.js/pull/7371).*

Geo subplots accept two new attributes for clamping interactive zoom (see
[Limiting Zoom on Outline Maps](/javascript/map-view/#limiting-zoom-on-outline-maps)):

| Attribute | Default | Effect |
|---|---|---|
| `layout.geo.projection.minscale` | `0` | Lower bound on zoom, expressed as a multiplier of `projection.scale`. `0` means no lower bound. |
| `layout.geo.projection.maxscale` | `null` | Upper bound on zoom, expressed as a multiplier of `projection.scale`. `null` means no upper bound. |

```js
Plotly.newPlot(gd, [/* … */], {
    geo: {
        projection: {
            scale: 1,
            minscale: 0.5,   // can't zoom out past 50% of base
            maxscale: 4,     // can't zoom in past 400% of base
        },
    },
});
```

The defaults preserve v3 behavior — figures that don't set these attributes
are unaffected.

One init-time wrinkle: if `projection.scale` falls outside `[minscale,
maxscale]`, Plotly now dispatches a synthetic zoom event on first plot to
clamp it back into range. That emits a `plotly_relayout` event that v3
wouldn't have fired. If you have a listener that distinguishes user-driven
zooms from programmatic ones, make sure it tolerates a single extra event at
startup for figures whose initial `projection.scale` is outside the configured
bounds.

---

## TypeScript types

*Implemented in [#7680](https://github.com/plotly/plotly.js/pull/7680),
[#7868](https://github.com/plotly/plotly.js/pull/7868), and
[#7974](https://github.com/plotly/plotly.js/pull/7974).*

Plotly.js now ships its own TypeScript type definitions. `package.json` points
`"types"` at `lib/index.d.ts`, so the types are picked up automatically. See
[Using Plotly.js with TypeScript](/javascript/guides/typescript/) for a
task-oriented walkthrough.

### Importing

The package exports a default namespace, named exports, and a global `Plotly`
namespace:

```ts
import Plotly from 'plotly.js';
// or
import * as Plotly from 'plotly.js';
// or
import { newPlot } from 'plotly.js';
import type { Layout, Data, TraceType } from 'plotly.js';
```

A minimal typed example:

```ts
import { newPlot } from 'plotly.js';
import type { Data, Layout } from 'plotly.js';

const data: Data[] = [{ type: 'scatter', x: [1, 2, 3], y: [4, 5, 6] }];
const layout: Partial<Layout> = { title: { text: 'Demo' } };

await newPlot(div, data, layout);
```

### What's exported

**Trace data** — `Data` (the union of every trace's typed data object), plus
per-trace interfaces like `ScatterData`, `BarData`, `HeatmapData`,
`ChoroplethData`, etc. Each per-trace interface narrows on `type`, so using
`Data[]` in your figure lets TypeScript pick the right trace shape from the
literal `type` value:

```ts
const data: Data[] = [
    { type: 'bar', x: ['a', 'b'], y: [1, 2] },     // checked as BarData
    { type: 'scatter', x: [1, 2], mode: 'lines' }, // checked as ScatterData
];
```

Other exports:

| Category | Exports |
|---|---|
| Layout | `Layout` (the full layout interface), `LayoutAxis`, `Legend`, `Annotation`, `Shape`, `Slider`, `UpdateMenu`, `Scene`, and the rest of the component interfaces. Pass `Partial<Layout>` to `newPlot` / `react` since most fields are optional. |
| Config | `Config`, `ToImgopts`, `ToImageButtonOptions`, `DownloadImgopts`, `ModeBarDefaultButtons`, `ModeBarButton`, `Icon`. |
| Trace/layout enums | String-literal unions like `TraceType`, `AxisType`, `Calendar`, `Dash`, `PatternShape`, `XRef`, `YRef`, `MarkerSymbol`, `HoverInfo`, etc. Use these instead of bare `string` to get narrowing on attribute values. |
| Shared sub-interfaces | `Font`, `ColorBar`, `HoverLabel`, `Pattern`, `Domain`, `LegendGroupTitle`, `TickFormatStops`, etc. — used wherever the schema reuses the same sub-attribute tree. |
| Events | `PlotMouseEvent`, `PlotHoverEvent`, `PlotSelectionEvent`, `PlotRelayoutEvent`, `PlotRestyleEvent`, `LegendClickEvent`, `SliderChangeEvent`, etc., plus `PlotlyEventName` for the union of event names accepted by `on()` / `once()` / `removeListener()`. |
| Animation & frames | `AnimationOpts`, `Frame`, `Transition`, `TransitionEasing`. |
| Templates | `Template` interface (and `TemplateFigure`, `ValidateTemplateResult` from the template utilities). |
| DOM | `PlotlyHTMLElement` (the typed `Plotly.newPlot` graph div), `Datum`, `TypedArray`, `Color`, `ColorScale`. |

### Notes on a few types

**`Data` vs per-trace interfaces.** Prefer the `Data` union for figure
literals (TypeScript discriminates on `type`); use the per-trace interface
only when you have a value that is *guaranteed* to be one trace type — e.g. a
helper that builds a `BarData` to push into a `Data[]`.

**`Layout` is the input shape, not the resolved shape.** It mirrors what you
pass to `newPlot`. The post-coerce internal shape used inside Plotly's own
code (often called "FullLayout") is intentionally not exported. Likewise
`Data` is the input shape; resolved trace state ("FullData") is internal.

**`PlotType` is an alias for `TraceType`.** Both name the same string-literal
union of trace type names; existing code that imports `PlotType` keeps
compiling. New code should prefer `TraceType`.

---

## Map subplots auto-fit to data

*Implemented in [#7884](https://github.com/plotly/plotly.js/pull/7884).*

`map` subplots now auto-fit the view to fit the trace data. In v3, the same
layout produced a world view centered at `(0, 0)` with `zoom: 1`, requiring
the user to supply `center` and `zoom` (or drag/scroll) to see their data.

```js
Plotly.newPlot(gd, [{
    type: 'scattermap',
    lon: [-122.4, -73.9, -87.6],
    lat: [37.8, 40.7, 41.9]
}], {
    map: { style: 'basic' }
});
// v3: map opens centered at (0, 0) at zoom 1
// v4: map opens framed on the three cities
```

| Before (v3) | After (v4) |
|---|---|
| ![v3 map with world view](/all_static/images/whats-new-in-v4/map_autofit_v3.png) | ![v4 map framed on cities](/all_static/images/whats-new-in-v4/map_autofit_v4.png) |

Auto-fitting runs on the initial render and again on data-only updates
(`Plotly.restyle` of `lon`/`lat`, `Plotly.addTraces`, `Plotly.deleteTraces`)
whenever the user hasn't overridden the view. Once the user pans, zooms,
rotates, or tilts the map — or explicitly sets `center` / `zoom` / `bearing` /
`pitch` in the layout — auto-fitting steps aside and preserves the chosen view
across further data changes.

### Disabling auto-fitting

There are two ways to disable auto-fitting:

**Set `map.fitbounds: false`** — disables automatic auto-fitting and instead
defaults to showing a map with center `(0, 0)` and zoom `1`, as in v3.

```js
{ map: { fitbounds: false } }
```

**Set `map.center` or `map.zoom` explicitly** — passing any value for
`map.zoom` or `map.center` (including the defaults of `zoom: 1` or `center: {
lon: 0, lat: 0 }`) is taken as a signal to follow the user provided values
rather than choosing zoom and center via auto-fitting.

```js
// Keep the v3 world view:
{ map: { center: { lon: 0, lat: 0 }, zoom: 1 } }
```

### Which traces contribute

`scattermap` and `densitymap` traces are affected by this change.
**`choroplethmap` traces skip auto-fitting** because their data contains
geographic regions, whose bounding boxes must be computed differently. When a
subplot contains a `choroplethmap` trace, auto-fitting is disabled and the
defaults (`zoom: 1` and `center: { lon: 0, lat: 0 }`) are used.

### Data that crosses the antimeridian

For data that straddles the antimeridian (points on both sides of ±180°, in
the middle of the Pacific Ocean), the auto-fit picks the compact crossing
range rather than the long-way-around view. For example, `lon: [131.8855,
-179]` frames as `[131.8855, 181]` (a ~49° span across the antimeridian)
instead of the naive `[-179, 131.8855]` (~311° the wrong way).

![naive vs compact auto-fit](/all_static/images/whats-new-in-v4/map_fitbounds.png)

### `map.bounds` is unaffected

The `map.bounds` layout attribute (which restricts panning) is a separate
concern and continues to work as in v3. Auto-fitting computes the *initial*
view; `bounds` constrains *interactive* view movement. Both can coexist.

### Relationship to `layout.geo.fitbounds`

Both `map` and `geo` subplots now expose a `fitbounds` layout attribute, but
the shapes differ:

| | `map.fitbounds` | `geo.fitbounds` |
|---|---|---|
| Type | enumerated | enumerated |
| Values | `false` / `'locations'` | `false` / `'locations'` / `'geojson'` |
| Default | `'locations'` | `'locations'` (was `false` in v3 — see [Geo subplots auto-fit by default](#geo-subplots-auto-fit-by-default)) |
| Re-fits on data updates | yes, until user overrides view | yes, every render |

Both accept `false` (disable auto-fit) and `'locations'` (fit to trace lon/lat
data); `geo.fitbounds` additionally accepts `'geojson'` to frame the entire
geojson feature set rather than just visible locations.

---

## Geo subplots auto-fit by default

*Implemented in [#7895](https://github.com/plotly/plotly.js/pull/7895).*

`layout.geo.fitbounds` now defaults to `'locations'` (v3 default: `false`).
`geo` subplots — used by `scattergeo`, `choropleth`, and any other
location-based geo trace — now auto-fit their initial view to fit the trace
data, matching the behavior of `map` subplots. Figures that previously
rendered the full world map (or the scope's default extent) now zoom to just
the locations they plot.

```js
Plotly.newPlot(gd, [{
    type: 'choropleth',
    locations: ['CAN', 'MEX'],
    z: [1, 2]
}], {
    // v3: full world map (fitbounds defaulted to false)
    // v4: tight fit around Canada and Mexico (fitbounds now defaults to 'locations')
});
```

| Before (v3) | After (v4) |
|---|---|
| ![v3 geo world view](/all_static/images/whats-new-in-v4/geo_autofit_v3.png) | ![v4 geo framed on Canada+Mexico](/all_static/images/whats-new-in-v4/geo_autofit_v4.png) |

### Disabling auto-fitting

There are two ways to disable auto-fitting:

**Set `layout.geo.fitbounds: false`** — disables automatic auto-fitting and
instead defaults to showing a map with center `(0, 0)` and scale `1`, as in
v3.

```js
Plotly.newPlot(gd, [/* ... */], {
    geo: { fitbounds: false }  // world view / scope-default view, as in v3
});
```

**Implicit:** setting `layout.center` or specific attributes under
`layout.projection` will disable auto-fit for that figure. Which attributes
count depends on the projection:

| Projection kind | Projection-specific opt-out attributes |
|---|---|
| Any non-`world` scope (checked first, even if the projection is also clipped) | `center.lon`, `center.lat`, `projection.scale` |
| World scope + clipped projection (orthographic, azimuthal equal area, etc.) | `center.lon`, `center.lat`, `projection.scale`, `projection.rotation.lon`, `projection.rotation.lat` |
| World scope, non-clipped projection (miller, robinson, mercator, etc.) | `center.lon`, `center.lat`, `projection.scale`, `projection.rotation.lon` |

In addition to the projection-specific set above, setting either
`lonaxis.range` or `lataxis.range` always disables auto-fit for that figure,
regardless of projection type. Even for projections where fitbounds doesn't
overwrite the ranges directly, the fitted `center`/`scale` would visually
override whatever framing the ranges imply, so we treat setting a range as
opt-out intent.

Under the v4 default this means figures that supplied their own view
attributes in v3 continue to render with those attributes — no code change
needed. Auto-fit only kicks in when none of the relevant attributes are set.

```js
Plotly.newPlot(gd, [/* ... */], {
    geo: {
        projection: { rotation: { lon: -75 } }
        // fitbounds is implicitly false because rotation.lon is set
    }
});
```

This differs from v3, where `fitbounds: 'locations'` would overwrite any
user-supplied view attributes. In v4 the two are treated as opt-in to
different framing modes: auto-fit or explicit view.

### Projections that don't participate in auto-fit

Four projection types skip auto-fit and render with the schema default view
even when `fitbounds` is unset (i.e., defaulted to `'locations'`):

| Projection | Why it skips auto-fit |
|---|---|
| `'albers usa'` | A fixed composite projection with predetermined insets for Alaska and Hawaii; it has no `center` / `rotation` concept for fitbounds to target. |
| `'craig'`, `'peirce quincuncial'`, and `'satellite'` | The internal scale heuristic that drives `fitbounds` compares data bounds against world bounds in the projected plane, which is unreliable for these projections' non-linear (and, for satellite, perspective-dependent) mapping. Auto-fit would zoom incorrectly, so v4 skips it. |

For these projections `layout.geo.fitbounds` is silently forced to `false` in
the resolved layout even if you leave it at the default. To fit locations
under one of these projections, supply the view attributes yourself (`center`,
`projection.rotation`, `projection.scale`, etc.).

### Reset button behavior

The modebar's Reset view button restores the auto-fit view when `fitbounds` is
active, not the schema default. Prior to v4 there was no auto-fit default, so
Reset simply restored the schema default; in v4 the initial view captured for
reset is the fitted view.

---

## Overlaying axis `tickmode` defaults to `'sync'`

*Implemented in [#7684](https://github.com/plotly/plotly.js/pull/7684).*

An axis that overlays another axis (`layout.xaxis2.overlaying: 'x'`,
`layout.yaxis2.overlaying: 'y'`, etc.) now defaults its `tickmode` to `'sync'`
instead of `'auto'`. The overlay axis draws tick marks and gridlines at the
same positions as its base axis, computing labels to match — rather than
picking its own auto-fit tick positions.

In v3 the two axes drew independent auto-tick grids, producing staggered
gridlines that were hard to read and left no visual association between a
gridline and a specific axis. Sync eliminates that overlap.

```js
Plotly.newPlot(gd, [
    { y: [1, 3, 2], name: 'A' },
    { y: [100, 300, 200], name: 'B', yaxis: 'y2' }
], {
    yaxis2: { overlaying: 'y', side: 'right' }
    // v3: y2 picks its own ticks, producing a staggered grid
    // v4: y2 places ticks at y's tick positions, with y2-range labels
});
```

| Before (v3) | After (v4) |
|---|---|
| ![v3 staggered overlay ticks](/all_static/images/whats-new-in-v4/tickmode_v3.png) | ![v4 sync'd overlay ticks](/all_static/images/whats-new-in-v4/tickmode_v4.png) |

### Exception: categorical / multicategory base axes

When the overlaid (base) axis is `type: 'category'` or `'multicategory'`,
`tickmode` continues to default to `'auto'` on the overlaying axis. Sync'ing
tick positions to category slots is almost never the intent.

### Opting out

Set `tickmode: 'auto'` (or any other explicit value) on the overlaying axis to
restore v3 behavior:

```js
{ yaxis2: { overlaying: 'y', side: 'right', tickmode: 'auto' } }
```

### Incidental bug fix

`showexponent`, `showtickprefix`, and `showticksuffix` values of `'first'` and
`'last'` were previously ignored on axes rendered with `tickmode: 'sync'`. Any
workaround for that (e.g., forcing `'all'` on overlay axes) is no longer
needed in v4.

---

## `splom.axis.matches` default flipped to `true`

*Implemented in [#7843](https://github.com/plotly/plotly.js/pull/7843).*

`splom` (scatter plot matrix) traces now default `axis.matches` to `true`.
That means axes on the same row are linked, and axes in the same column are
linked, so pan and zoom propagate through the matrix as a group. In v3 the
default was `false`, so each cell had its own independent axes.

Plotly Express has always set `matches: true` on generated splom plots, so
this brings the raw Plotly.js default in line with what Express users
already saw.

```js
Plotly.newPlot(gd, [{
    type: 'splom',
    dimensions: [/* … */]
}]);
// v3: pan/zoom on one cell only affects that cell's axes
// v4: pan/zoom on one cell also pans/zooms every cell in the same row and column
```

### Opting out

Set `axis.matches: false` explicitly to restore v3 behavior:

```js
{
    type: 'splom',
    dimensions: [/* … */],
    xaxes: [{ matches: false }, /* … */],
    yaxes: [{ matches: false }, /* … */]
}
```

Or set `matches: false` per axis via `layout.xaxis`/`layout.yaxis` if you
want to unlink specific axes only.

---

## Shape legend marker outlines honor `line.dash`

*Implemented in [#7845](https://github.com/plotly/plotly.js/pull/7845).*

Shapes rendered in the legend as filled markers (e.g. `type: 'rect'`,
`'circle'`, or filled paths with `showlegend: true`) now draw the marker's
outline using the shape's `line.dash` value. In v3 the marker outline was
always solid regardless of the shape's dash style, so the swatch didn't match
the shape on the plot. (Line-only shapes — `type: 'line'` — already drew their
swatch dashed in v3; only the filled-marker path was hardcoded to solid.)

```js
Plotly.newPlot(gd, [], {
    shapes: [{
        type: 'rect',
        x0: 0, x1: 1, y0: 0, y1: 1,
        line: { dash: 'dot' },
        fillcolor: 'rgba(200,0,0,0.2)',
        showlegend: true,
    }],
});
// v3: legend marker outline is solid
// v4: legend marker outline is dotted, matching the on-plot shape
```

| Before (v3) | After (v4) |
|---|---|
| ![v3 shape legend outlines solid](/all_static/images/whats-new-in-v4/shape_legend_swatch_v3.png) | ![v4 shape legend outlines dashed](/all_static/images/whats-new-in-v4/shape_legend_swatch_v4.png) |

---

## Color library swap

*Implemented in [#7536](https://github.com/plotly/plotly.js/pull/7536) and
[#7962](https://github.com/plotly/plotly.js/pull/7962).*

In v4, Plotly's internal color processing was switched from
[tinycolor2](https://github.com/bgrins/TinyColor) to
[culori](https://culorijs.org). The new library parses colors to the [CSS Color
4](https://www.w3.org/TR/css-color-4/) specification. A color string that is not
valid CSS is now rejected, and the attribute falls back to its default.

### Color string inputs that no longer work

**`hsv()` color strings are no longer accepted.**

```js
// Before
{ marker: { color: 'hsv(200, 80%, 80%)' } }

// After — convert to hsl, hwb, hex, or rgb
{ marker: { color: 'hsl(200, 67%, 47%)' } }
```

A color in the unsupported format will fall back to the attribute's default.

**The comma form of `hsl()` / `hsla()` needs percent units on saturation and
lightness.** A color in the unsupported format falls back to the attribute's
default.

```js
// Before
{ marker: { color: 'hsl(0, 100, 40)' } }

// After - add the percent units
{ marker: { color: 'hsl(0, 100%, 40%)' } }
```

The modern space-separated form still accepts unitless numbers, because CSS
Color 4 permits them there: `'hsl(0 100 40)'` is valid in v4.

**Separators cannot be mixed within one color string.** CSS Color 4 accepts
either all commas or all spaces. A string such as `'hsl(120, 50% 50%)'` was
valid in v3 and is rejected in v4.

**`rgb()` / `rgba()` strings with 0–1 decimal fractions are no longer
rescaled.** In v3, Plotly detected all-fractional `rgb()` components and
rescaled them from 0–1 to 0–255 before parsing; v4 removed that step and reads
every component literally on the 0–255 scale, so the same string now renders
near-black.

```js
// Before — v3 rescaled 0–1 fractions to 0–255
'rgb(0.5, 0.5, 0.5)'  // → rgb(128, 128, 128)

// After — read literally on the 0–255 scale and rounded to the nearest integer
'rgb(0.5, 0.5, 0.5)'  // → rgb(1, 1, 1)
```

Convert any inputs of the form `rgb(0.5, 0.5, 0.5)` to `rgb(128, 128, 128)`
(or any other supported color string) before passing them to Plotly.

Rescaling only ever applied when *all* of `r`, `g`, `b` were fractional. A
string like `rgb(255, 0.0, 0.0)` was never rescaled and still renders
correctly (its `0.0` components round to `0`); a partly-fractional string such
as `rgb(200, 0.5, 0.5)` now rounds each component to the nearest integer →
`rgb(200, 1, 1)`.

**Hex strings without a leading `#` are no longer accepted.**

```js
// Before — tinycolor accepted bare hex
{ marker: { color: 'fff' } }

// After — invalid and falls back to the attribute default; add the '#'
{ marker: { color: '#fff' } }
```

**`rgb()` with a fourth argument now sets alpha.** CSS Color 4 makes `rgb()`
and `rgba()` aliases, so both read an optional alpha. In v3, `rgb()` ignored a
fourth argument and painted the color opaque.

```js
// v3 - alpha dropped, the marker is opaque red
// v4 - alpha honored, the marker is 50% transparent red
{ marker: { color: 'rgb(255, 0, 0, 0.5)' } }
```

The same applies to `hsl()`, which now reads the alpha from
`'hsl(0, 100%, 50%, 0.5)'`. Add the alpha deliberately, or drop it to keep the
color opaque.

These changes affect *string* colors only. Numeric color arrays used for color
mapping (e.g. `marker.color: [1, 2, 3, 4]` with a `colorscale`) are unchanged
and remain valid — those values are mapped through the colorscale, not parsed
as literal colors.

### Color computation output changes

Plotly picks a contrasting color for text and borders drawn on top of a filled
mark. v3 made that choice from a brightness formula. v4 makes it from the
[WCAG contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio):
Plotly measures the fill against both candidate colors and keeps the more
legible one. On saturated mid-tone fills, the two rules disagree, so a label
can switch between dark grey and white.

| Where | What changes |
|---|---|
| Heatmap auto-contrast text | Cells in the mid-luminance range flip between dark grey and white on colorscales such as Viridis or Jet |
| Auto-generated `insidetextfont` color on bar, waterfall, pie, and sunburst traces | The same rule picks the label color, so labels on mid-tone slices and bars can flip |
| Derived colors, such as lightened or darkened hover fills | Values can differ from v3 by about one RGB unit per channel, from rounding |

Example - on a Viridis heatmap with `z` from 0 to 100, the two cells with
`z: 60` take white text in v3 and dark grey text in v4. Their fill contrasts
better with dark grey than with white, which is what the WCAG ratio reports.

| Before (v3) | After (v4) |
|---|---|
| ![v3 Viridis heatmap with white text on the two z=60 cells](/all_static/images/whats-new-in-v4/color_heatmap_v3.png) | ![v4 Viridis heatmap with dark text on the two z=60 cells](/all_static/images/whats-new-in-v4/color_heatmap_v4.png) |

### New color formats you can now use

The new library adds CSS Color 4 syntax that tinycolor did not support:
slash-separated alpha, three more color spaces, and the `hwb()` notation:

```js
'rgba(255 0 0 / 0.5)'     // space-separated rgb with slash alpha
'hsl(0 100% 50% / 0.5)'   // slash alpha on hsl (v3 accepted the syntax but dropped the alpha)
'hwb(0 0% 0%)'            // hwb (hue-whiteness-blackness)
'lab(50% 40 59.5)'        // CIE Lab
'lch(50% 70 40)'          // CIE LCh
'oklab(0.5 0.1 0.1)'      // Oklab
'oklch(0.7 0.15 180)'     // Oklch
'color(srgb 1 0 0)'       // explicit color space, including display-p3 and rec2020
'hsl(0.5turn 60% 40%)'    // hue in turns, rads, or grads instead of degrees
'hsl(none 60% 40%)'       // the `none` keyword for a missing component
```

Note that `hwb()` has no comma-separated form in CSS; the legacy comma syntax
exists only for `rgb()` and `hsl()`.

The following additional formats were already supported:

- 8-digit hex (`#ff0000aa`)
- 4-digit short hex (`#f00a`),
- Space-separated `rgb(255 0 0)`
- Comma-form `hsla(0, 100%, 50%, 0.5)`.

See
[test/image/mocks/color_syntax_formats.json](https://github.com/plotly/plotly.js/blob/master/test/image/mocks/color_syntax_formats.json)
for a working example using each format.

#### Browser compatibility

All of these are parsed by Plotly in JavaScript and normalized to legacy
`rgb(...)` / `rgba(...)` before being written to the DOM, so the browser never
sees the modern syntax — your figures render the same in any browser that ran
v3.

---

## Country name lookup

*Implemented in [#7856](https://github.com/plotly/plotly.js/pull/7856).*

`locationmode: 'country names'` on `choropleth` and `scattergeo` traces is now
resolved by [country-iso-search](https://github.com/plotly/country-iso-search)
instead of [country-regex](https://github.com/etpinard/country-regex). The
attribute name, accepted values list, and ISO-3 output are unchanged — the
difference is in *how* a name string is matched to an alpha-3 code.

The old library walked a table of country-specific regular expressions and
returned the first match. That made it lenient (substring matches worked) but
ambiguity-prone — strings like `'Republic of'` could resolve to whichever
entry's regex hit first. The new library does a sanitized exact lookup against
a curated alias table, which is stricter about ambiguous input but accepts
many more legitimate forms.

### Previously recognized names that no longer work

Strings that only matched because of overly broad regex fragments now fall
back to the unrecognized-name log message and the location is skipped. In
practice this hits inputs that weren't really country names — partial phrases,
generic descriptors, or strings containing a country name as a substring of
something else (e.g. `'Republic of Foo'`, `'Not Iran'`). If you were relying
on a non-canonical form, switch to the country's name, an alias, or the ISO-3
/ ISO-2 code.

### Names and forms that now resolve

The alias table is larger and the input is normalized before lookup, so a
number of forms that previously failed now work:

```js
// All resolve to 'FRA'
'France'
'FR'                        // ISO 3166-1 alpha-2
250                         // UN M49 numeric (number or string)
'\u{1F1EB}\u{1F1F7}'        // flag emoji

// Historical / native / punctuated names
'Burma'                     // → 'MMR'
'Türkiye'                   // → 'TUR' (diacritics stripped)
'Cote d\'Ivoire'            // → 'CIV' (apostrophes ignored)
'St. Kitts and Nevis'       // → 'KNA' ('St.' expands to 'Saint')
'The Gambia'                // → 'GMB' (leading 'The ' dropped)
```

Matching is case-insensitive. Sanitization also collapses internal whitespace,
drops `.` `()` `,`, maps `&` → `and`, and turns `-` / `–` / `—` into spaces —
so cosmetic punctuation differences in your input data no longer block a
match.

### Disputed-territory codes are retained

The user-assigned alpha-3 codes Plotly historically recognized for disputed
regions still work:

| Code | Region |
|---|---|
| `XAC` | Aksai Chin |
| `XAP` | Arunachal Pradesh |
| `XBT` | Bir Tawil |
| `XHT` | Halaib Triangle |
| `XIT` | Ilemi Triangle |
| `XJK` | Jammu and Kashmir |

These are layered on top of the standard ISO 3166-1 records via
[src/lib/custom_country_codes.ts](https://github.com/plotly/plotly.js/blob/master/src/lib/custom_country_codes.ts).
Whether a feature for them appears on the rendered map still depends on the
topojson resolution in use.

---

## Scattermap icon defaults

*Implemented in [#7825](https://github.com/plotly/plotly.js/pull/7825).*

If you used `scattermap` or `scattermapbox` in v3, three rendering details
have changed by the time you land on `scattermap` in v4:

### Marker icons now respect `marker.color`

`marker.color` on a scattermap trace is now applied to the icon by setting
`icon-color`. In v3, the icons were always black.

| Before (v3) | After (v4) |
|---|---|
| ![v3 scattermap icons uncolored](/all_static/images/whats-new-in-v4/scattermap_iconcolor_v3.png) | ![v4 scattermap icons tinted red](/all_static/images/whats-new-in-v4/scattermap_iconcolor_v4.png) |

### Maki icon set updated to v8 (via jsDelivr)

The icon CDN and version have changed:

| Version | URL |
|---|---|
| v3 | `https://unpkg.com/maki@2.1.0/icons/<name>.svg` |
| v4 | `https://cdn.jsdelivr.net/npm/@mapbox/maki@8.2.0/icons/<name>.svg` |

A handful of icon names removed between Maki 2.1 and 8.2 will now silently
fail to load (HTTP 404). If you were using one of the dropped icons, swap it
for the nearest Maki 8 equivalent (see [Maki 8 icon
list](https://labs.mapbox.com/maki-icons/)).

### Legend swatch always renders as a circle

`scattermap` legend swatches now always draw a circle, regardless of
`marker.symbol`. In v3 the swatch went through the same code path as cartesian
traces, which only understands the [Plotly-supported symbol
names](https://github.com/plotly/plotly.js/blob/master/src/components/drawing/symbol_defs.js).
On map traces, that produced inconsistent output: symbols with names that
don't overlap the Plotly set (Maki-only names like `'airport'`, `'cafe'`)
rendered as filled circles, while other symbols (`'square'`, `'star'`, etc.)
rendered as broken/empty paths in the legend even though they draw correctly
on the map. The v4 circle fallback makes the swatch consistent across every
scattermap trace.

| Before (v3) | After (v4) |
|---|---|
| ![v3 scattermap legend inconsistent](/all_static/images/whats-new-in-v4/scattermap_legendsymbol_v3.png) | ![v4 scattermap legend all circles](/all_static/images/whats-new-in-v4/scattermap_legendsymbol_v4.png) |

If you were styling the legend swatch path directly based on `marker.symbol`,
that selector will now always match a circle path on map traces.

---

## Geo `fitbounds` framing for antimeridian features

*Implemented in [#7891](https://github.com/plotly/plotly.js/pull/7891) and [#7948](https://github.com/plotly/plotly.js/pull/7948).*

`layout.geo.fitbounds: 'locations'` (and `'geojson'`) now correctly frames
choropleth and scattergeo location traces containing features that cross the
±180° antimeridian — Russia, Fiji, Antarctica, New Zealand, and the Aleutian
Islands portion of Alaska. In v3 these were mis-framed because the underlying
bounding-box computation (`@turf/bbox`) reported a bogus whole-globe span
(`[-180°, 180°]`) for any such feature, and the fit zoomed the map out to
match. In v4, `computeBbox` uses `d3-geo.geoBounds`' widest-gap longitude
algorithm on the feature's vertices and returns the compact crossing range
(with `east > 180°` when the range wraps).

This also covers traces that mix antimeridian-crossing territories with
ordinary ones (for example Russia alongside European countries). v4 gathers
every location's coordinates into a single bounding box, so one crossing
feature no longer widens the frame to the whole globe.

Because v4 also flips the `fitbounds` default from `false` to `'locations'`
(see [Geo subplots auto-fit by default](#geo-subplots-auto-fit-by-default)),
figures that never set `fitbounds` explicitly now participate in auto-fit too
— so this antimeridian fix reaches many more figures than it would have as a
standalone change.

### Which figures shift

A figure sees a visible change when **both** of the following hold:

| Condition | Detail |
|---|---|
| `layout.geo.fitbounds` is active | Either explicitly set to `'locations'` / `'geojson'`, or left at the v4 default (see the opt-out list in the auto-fit-default section above). |
| The figure contains an antimeridian-crossing feature | A `choropleth` or `scattergeo` trace with `locations` where at least one location resolves to a feature that crosses ±180°. |

Figures that opt out of auto-fit (`fitbounds: false`, an explicit view
attribute, or one of the projections listed as skipping auto-fit), or that
don't include an antimeridian-crossing feature, render identically to v3 as
far as this fix is concerned.

### Example

```js
Plotly.newPlot(gd, [{
    type: 'choropleth',
    locations: ['RUS'],
    z: [1],
    colorscale: [[0, '#c33'], [1, '#c33']],
    showscale: false
}], {
    geo: { fitbounds: 'locations', projection: { type: 'equirectangular' } },
    width: 700,
    height: 500
});
// v3: fits to a bogus [-180°, 180°] span — Russia is a small red strip at
//     the top of the whole world.
// v4: fits tightly to Russia's actual longitudinal extent (~19° through
//     ~190°, unwrapped across the antimeridian).
```

| Before (v3) | After (v4) |
|---|---|
| ![v3 Russia mis-framed with empty space](/all_static/images/whats-new-in-v4/antimeridian_v3.png) | ![v4 Russia tightly framed](/all_static/images/whats-new-in-v4/antimeridian_v4.png) |

---

## Sankey layout algorithm update

*Implemented in [#7830](https://github.com/plotly/plotly.js/pull/7830).*

`@plotly/d3-sankey` has been upgraded from 0.7.2 to 0.12.3. The schema and API
surface for `sankey` traces are unchanged — every attribute that worked in v3
still works in v4 — but the underlying layout algorithm was rewritten upstream
across these versions, so node and link positions for the same figure shift.

The most visible effect is that links tend to be straighter and cross each
other less: the new relaxation step gives more weight to minimizing link
travel between columns, so flows that previously swooped across the diagram
now run closer to horizontal. Node y-positions within a column shift to
accommodate this, and exact node heights / paddings can differ by a few
pixels.

| Before (v3) | After (v4) |
|---|---|
| ![v3 sankey with crossing links](/all_static/images/whats-new-in-v4/sankey_v3.png) | ![v4 sankey with rewritten layout](/all_static/images/whats-new-in-v4/sankey_v4.png) |

---

## Hover and click event data

*Implemented in [#7964](https://github.com/plotly/plotly.js/pull/7964) and
[#7966](https://github.com/plotly/plotly.js/pull/7966).*

### `xPixel` and `yPixel` on the event payload

`plotly_hover` and `plotly_click` payloads now carry top-level `xPixel` and
`yPixel` keys. They hold the cursor position in pixels, measured from the
top-left corner of the graph div. Both keys are present whether or not
`layout.hoveranywhere` and `layout.clickanywhere` are enabled.

```js
gd.on('plotly_click', (data) => {
    // Position a custom tooltip at the cursor
    tooltip.style.left = `${data.xPixel}px`;
    tooltip.style.top = `${data.yPixel}px`;
});
```

Each entry of the payload's `points` array also has `xPixel` and `yPixel`.
Those hold the position of the point itself, not the cursor.

### `xvals` and `yvals` now hold data values

`layout.hoveranywhere` and `layout.clickanywhere` make `plotly_hover` and
`plotly_click` fire over empty plot space. Those events carry an empty `points`
array plus `xvals` and `yvals` for the cursor position.

In v3, `xvals` and `yvals` held calcdata values. In v4 they hold data values,
the same form your input data takes:

| Axis type | v3 value | v4 value |
|---|---|---|
| `date` | Milliseconds since the epoch, for example `1704067200000` | Date string, for example `'2024-01-01'` |
| `category` | Category index, for example `2` | Category label, for example `'Wednesday'` |
| `linear`, `log` | Numeric value | Unchanged |

Handlers that converted the numeric form need updating:

```js
// Before - xvals[0] was the category index
gd.on('plotly_click', (data) => {
    const label = categories[data.xvals[0]];
});

// After - xvals[0] is the category label
gd.on('plotly_click', (data) => {
    const label = data.xvals[0];
});
```

Axes with no data-space conversion, such as `geo` and `map` subplots, pass
their values through unchanged.

### `plotly_unhover` fires when the cursor leaves the plot area

With `layout.hoveranywhere` enabled, v3 emitted no `plotly_unhover` after a
hover over empty space, so a custom readout stayed on screen after the cursor
left the plot. v4 emits exactly one `plotly_unhover`, with an empty `points`
array, when the cursor leaves the plot area.

---

## Chart Studio APIs removed

*Implemented in [#7812](https://github.com/plotly/plotly.js/pull/7812).*

The legacy "Edit in Chart Studio" link, related config options, and the
streaming token attribute have been removed. The `sendChartToCloud` modebar
button (aliased as `sendDataToCloud` in v3, now targeting Plotly Cloud in v4;
see [Share with Plotly Cloud](#share-with-plotly-cloud)) and its
`showSendToCloud` config option are retained — only the duplicate
`editInChartStudio` button and the on-graph "Edit chart" link are gone.

### Removed config options

`Plotly.newPlot(gd, data, layout, config)` no longer accepts:

| Removed | What it did | Replacement |
|---|---|---|
| `showLink` | Drew an "Edit chart" link at the bottom-right of the plot | None — remove the option |
| `linkText` | Text for the `showLink` link | None — remove the option |
| `sendData` | Whether the link uploaded data or just linked to a file | None — remove the option |
| `showSources` | Hook that drew custom source links next to `showLink` | None — remove the option |
| `showEditInChartStudio` | Pencil-icon variant of `sendChartToCloud` | Use `showSendToCloud` |

```js
// Before
Plotly.newPlot(gd, data, layout, {
    showLink: true,
    linkText: 'View on Plotly',
    showEditInChartStudio: true,
});

// After
Plotly.newPlot(gd, data, layout, {
    showSendToCloud: true,
});
```

### Removed modebar button

`editInChartStudio` is no longer a built-in modebar button. If you were adding
it explicitly via `modeBarButtonsToAdd`, switch to `sendChartToCloud`. Note
that the v3 alias `sendDataToCloud` was **also** removed in v4, so code that
referred to the button by that name needs to be updated too:

```js
// Before (v3 — both worked)
{ modeBarButtonsToAdd: ['editInChartStudio'] }
{ modeBarButtonsToAdd: ['sendDataToCloud'] }

// After (v4)
{ modeBarButtonsToAdd: ['sendChartToCloud'] }
```

### Removed trace attribute

The undocumented `stream` attribute (`stream.token`, `stream.maxpoints`) has
been removed from every trace type. It was a hook for the Chart Studio
streaming service, which is no longer reachable. If you have figures
containing `stream: { token: '...', maxpoints: N }` in their trace objects,
delete those properties — they're now schema-rejected.

### Removed data-source (`*src`) attributes

*See [#7829](https://github.com/plotly/plotly.js/pull/7829).*

Every schema attribute ending in `src` (`xsrc`, `ysrc`, `textsrc`,
`marker.colorsrc`, ...) has been removed, along with `layout.hidesources`.
These existed only to interoperate with Chart Studio's data-source
references, which is no longer reachable. If your figures contain any
`*src` attributes or `hidesources`, delete them — they're now schema-rejected.

---

## Mapbox traces and subplots removed

*Implemented in [#7860](https://github.com/plotly/plotly.js/pull/7860).*

The legacy Mapbox–based traces and subplot type have been removed. The
equivalent MapLibre-based `map` traces (first released in Plotly.js v3) are
now the only map implementation. For more information, see [Mapbox to
MapLibre migration](https://plotly.com/python/mapbox-to-maplibre/).

### Removed

| Removed | Replacement |
|---|---|
| `scattermapbox` trace | `scattermap` |
| `choroplethmapbox` trace | `choroplethmap` |
| `densitymapbox` trace | `densitymap` |
| `layout.mapbox` subplot (and `mapbox2`, `mapbox3`, …) | `layout.map` (and `map2`, `map3`, …) |
| `layout.mapbox.accesstoken` | None — MapLibre uses open tile providers |
| `mapboxAccessToken` config option | None — see above |
| `plotly-mapbox.min.js` partial bundle | `plotly-map.min.js` |
| Modebar buttons `zoomInMapbox`, `zoomOutMapbox`, `resetViewMapbox` | `zoomInMap`, `zoomOutMap`, `resetViewMap` |
| `scrollZoom` flag value `'mapbox'` (e.g. `scrollZoom: 'mapbox+cartesian'`) | `'map'` |

The attributes for `map` traces are identical to those of `mapbox` traces, so
updating the trace name is all that's required to migrate.

```js
// Before
{
    data: [{ type: 'scattermapbox', lon: [...], lat: [...] }],
    layout: {
        mapbox: {
            style: 'open-street-map',
            center: { lon: 0, lat: 0 },
            zoom: 2,
        },
    },
    config: { mapboxAccessToken: 'pk.eyJ1...' },
}

// After
{
    data: [{ type: 'scattermap', lon: [...], lat: [...] }],
    layout: {
        map: {
            style: 'open-street-map',
            center: { lon: 0, lat: 0 },
            zoom: 2,
        },
    },
    // mapboxAccessToken no longer required
}
```

### Built-in style values

Every built-in `style` value supported for `mapbox` traces works for `map` traces as well,
but the tile providers for some styles have changed. In those cases, the visual appearance
of the map will differ:

| Style name | Old (`mapbox`) | New (`map`) |
|---|---|---|
| `'basic'`, `'streets'`, `'outdoors'` | mapbox.com 'basic' / 'streets' / 'outdoors'  tiles | [Carto](https://github.com/cartodb/basemap-styles/) Voyager |
| `'light'` | mapbox.com 'light' tiles | [Carto](https://github.com/cartodb/basemap-styles/) Positron |
| `'dark'` | mapbox.com 'dark' tiles | [Carto](https://github.com/cartodb/basemap-styles/) Dark Matter |
| `'satellite'`, `satellite-streets` | mapbox.com satellite tiles | [ArcGIS World Imagery](https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer) |
| `'white-bg'` | solid white background | unchanged |
| `'open-street-map'` | [OpenStreetMap](https://www.openstreetmap.org) tiles | unchanged |
| `carto-*`, `carto-*-nolabels` | Corresponding [Carto](https://github.com/cartodb/basemap-styles/) tiles | unchanged |

The three Stamen style values (`stamen-terrain`, `stamen-toner`, `stamen-watercolor`)
are no longer supported, since Stamen tiles require a Stadia API key. It is still possible to use
Stamen tiles, or any other third-party tiles, by passing the URL of a JSON style definition to `style`.

### Custom style URLs

Setting `style` to the URL of a MapLibre / Mapbox JSON style definition is still supported.
Custom Mapbox URLs of the form `mapbox://styles/mapbox/...` are no longer supported, since they
require authenticating to mapbox.com.

---

## Minimum Node.js version

*Implemented in [#7861](https://github.com/plotly/plotly.js/pull/7861).*

Plotly.js now requires Node.js v22 or newer. The previous minimum was v18, which
has reached end-of-life.

This only affects you if:

| Scenario | Why |
|---|---|
| You build Plotly.js from source | Contributors and custom bundles |
| You run Plotly.js in a Node.js runtime | Server-side rendering via jsdom, validation scripts, image export pipelines, etc. |
| You install via `yarn` or `pnpm` | Both enforce `engines` strictly (`npm` prints a warning but installs) |

Consumers who only load the pre-built browser bundle (`plotly.min.js` or a
partial bundle like `plotly-basic.min.js`) are unaffected.

If you're on Node 18 or 20, upgrade to 22 LTS. `npm` will print a warning on
install but won't fail; `yarn` and `pnpm` will refuse to install unless your
environment satisfies `engines.node >= 22.0.0`.

---
