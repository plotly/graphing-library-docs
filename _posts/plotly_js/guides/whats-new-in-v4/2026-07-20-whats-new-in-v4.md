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
thumbnail: thumbnail/mixed.jpg
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
direction and magnitude from `(u, v)` components.

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
| `x`, `y` | numeric arrays | Arrow anchor positions. `x0` + `dx` / `y0` + `dy` shorthand also supported for regular grids. |
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

Pass a `c` array (one value per arrow) plus the usual colorscale attributes
(`marker.colorscale`, `marker.cmin`, `marker.cmax`, `marker.showscale`,
`marker.colorbar`) to color each arrow by an independent scalar. Without `c`,
every arrow uses `marker.color`.

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

Plotly.js can now share the current figure to
[Plotly Cloud](https://cloud.plotly.com) from a one-click modebar button.
The button posts the figure's data and layout to `cloud.plotly.com` and
returns a shareable URL — the successor to the old Chart Studio upload
flow, but without the Chart Studio-specific config surface (`showLink`,
`sendData`, `showSources`, etc. — those are all gone; see
[Chart Studio APIs removed](#chart-studio-apis-removed)).

The button is enabled by default in v4:

![Share with Plotly Cloud button](/all_static/images/whats-new-in-v4/share_with_plotly_cloud_button.png)

Clicking the button brings up the share dialog:

![Share with Plotly Cloud dialog](/all_static/images/whats-new-in-v4/share_with_plotly_cloud_dialog.png)

### Config

The button is controlled by two config options:

| Config option | Default | Purpose |
|---|---|---|
| `showSendToCloud` | `true` | Whether the "Share with Plotly Cloud" modebar button is rendered. |
| `plotlyServerURL` | `'cloud.plotly.com'` | The endpoint the button posts to. Override to point at a self-hosted or alternate server. |

The button's internal name (in `modeBarButtonsToAdd`, event handlers, etc.)
is `sendChartToCloud`. In v3 both `sendChartToCloud` and the alias
`sendDataToCloud` worked; in v4 the alias is removed — code that referred to
the button by the `sendDataToCloud` name needs to be updated.

### Opting out

Hide the button by setting `showSendToCloud: false`:

```js
Plotly.newPlot(gd, data, layout, {
    showSendToCloud: false
});
```

Or point the upload at a different host:

```js
Plotly.newPlot(gd, data, layout, {
    plotlyServerURL: 'https://my-plotly-mirror.example.com'
});
```

### Endpoint status

The `cloud.plotly.com` endpoint is **not yet functional at the v4 release**.
The button renders and is wired up, but clicking it does not complete an
upload until the endpoint is deployed. Once it goes live, existing figures
running v4 with the default config will start supporting uploads without
any code change on the caller side.

### History

The upload flow was built out across the Plotly.js 3.7 series
(#7802 / #7852 / #7854), but shipped with `showSendToCloud` defaulting to
`false`, so unless you set the flag manually you never saw the button.
v4 (#7909) flips the default so every new figure exposes it by default —
this is a functional feature reveal, not a new API.

---

## MathJax v4 support

*Implemented in [#7898](https://github.com/plotly/plotly.js/pull/7898).*

Plotly.js now supports **MathJax v3 and v4** for rendering LaTeX in labels,
titles, annotations, and hover text. Support for **MathJax v2 has been
dropped** — figures that rely on a v2 bundle will no longer render their math
expressions.

MathJax v3 and v4 share the same rendering syntax, so Plotly no longer needs
version-specific code paths internally. Beyond dropping v2, the internal
`svg_text_utils.js` rewrite makes math rendering somewhat faster.

### What to do

- Loading MathJax v2 in the page? Upgrade to v3 or v4. The tex-svg build is
  the one Plotly integrates with:
  ```html
  <!-- v3 (still supported) -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
  <!-- or v4 (new) -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js"></script>
  ```
- Already on v3? No action required — your math expressions continue to
  render.
- On v4 already? No action required either.

### Call sites unchanged

Plotly's public API for math (using `$…$` in text attributes) is unchanged.
The version negotiation happens inside Plotly at runtime — the correct
rendering path is chosen based on what MathJax exposes.

---

## Sankey node and link ordering

*Implemented in [#7873](https://github.com/plotly/plotly.js/pull/7873).*

Two new attributes let you override the automatic ordering that v4's d3-sankey
algorithm applies:

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

## Geo subplot zoom limits

*Implemented in [#7371](https://github.com/plotly/plotly.js/pull/7371).*

Geo subplots accept two new attributes for clamping interactive zoom:

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

*Implemented in [#7680](https://github.com/plotly/plotly.js/pull/7680) and
[#7868](https://github.com/plotly/plotly.js/pull/7868).*

Plotly.js now ships its own TypeScript type definitions. `package.json` points
`"types"` at `lib/index.d.ts`, so the types are picked up automatically — no
separate `@types/*` install is needed.

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

Three projection types skip auto-fit and render with the schema default view
even when `fitbounds` is unset (i.e., defaulted to `'locations'`):

| Projection | Why it skips auto-fit |
|---|---|
| `'albers usa'` | A fixed composite projection with predetermined insets for Alaska and Hawaii; it has no `center` / `rotation` concept for fitbounds to target. |
| `'craig'` and `'satellite'` | The internal scale heuristic that drives `fitbounds` compares data bounds against world bounds in the projected plane, which is unreliable for these projections' non-linear (and, for satellite, perspective-dependent) mapping. Auto-fit would zoom incorrectly, so v4 skips it. |

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

*Implemented in [#7536](https://github.com/plotly/plotly.js/pull/7536).*

In v4, Plotly's internal color processing was switched from
[tinycolor2](https://github.com/bgrins/TinyColor) to
[color](https://github.com/Qix-/color). The new library is actively maintained
and supports modern CSS Color 4 syntax, but a handful of behaviors changed in
the process.

### Color string inputs that no longer work

**`hsv()` color strings are no longer accepted.**

```js
// Before
{ marker: { color: 'hsv(200, 80%, 80%)' } }

// After — convert to hsl, hwb, hex, or rgb
{ marker: { color: 'hsl(200, 67%, 47%)' } }
```

A color in the unsupported format will fall back to the attribute's default.

**`rgb()` / `rgba()` strings with 0–1 decimal fractions are no longer
accepted.**

```js
// Before — tinycolor parsed this as 0–1 fractions
'rgb(0.5, 0.5, 0.5)'  // → rgb(128, 128, 128)

// After — the underlying library reads them as integer 0–255 (truncated)
'rgb(0.5, 0.5, 0.5)'  // → rgb(1, 1, 1)
```

Convert any inputs of the form `rgb(0.5, 0.5, 0.5)` to `rgb(128, 128, 128)`
(or any other supported color string) before passing them to Plotly.

Mixed-format strings where at least one component is `>= 1` (e.g. `rgb(255,
0.0, 0.0)`) continue to render correctly: the new parser treats the `0.0`
components as integer `0`.

**Numeric color inputs are now rejected.**

```js
// Before — silently accepted, rendered as near-black
{ marker: { color: 42 } }

// After — falls back to the attribute default
```

If you were relying on numeric color values being coerced, convert them to
color strings before passing them to Plotly.

### Color computation output changes

A handful of Plotly's derived colors shift by a few RGB units. Visible places
where output shifts:

| Where | Example |
|---|---|
| Heatmap auto-contrast text | Cells in the mid-luminance range flip between dark grey and white on colorscales like Viridis or Jet |
| Auto-generated `insidetextfont` color on bars/waterfall | Same threshold shift around mid-luminance backgrounds |
| Sankey default hover color (dark BG) | RGB channels shift by 1 unit per channel vs v3 |

Example — the four cells with `z` values 55, 56, and 60 (both occurrences)
shift their text from white in v3 to dark grey in v4 on a Viridis heatmap,
because the underlying color library computes cell luminance with a slightly
different formula.

| Before (v3) | After (v4) |
|---|---|
| ![v3 Viridis heatmap with white text on mid-luminance cells](/all_static/images/whats-new-in-v4/color_heatmap_v3.png) | ![v4 Viridis heatmap with dark text on those cells](/all_static/images/whats-new-in-v4/color_heatmap_v4.png) |

### New color formats you can now use

The new library accepts CSS Color 4 syntax that wasn't possible with
tinycolor. All of these are now valid anywhere Plotly accepts a color string:

```js
'#ff0000aa'          // 8-digit hex with alpha
'#f00a'              // 4-digit short hex with alpha
'rgb(255 0 0)'       // space-separated rgb
'rgba(255 0 0 / 0.5)' // slash-alpha rgba
'hsl(0 100% 50% / 0.5)' // slash-alpha hsl
'hsla(0, 100%, 50%, 0.5)' // hsla
'hwb(0, 0%, 0%)'     // hwb (hue-whiteness-blackness)
```

See
[test/image/mocks/color_syntax_formats.json](https://github.com/plotly/plotly.js/blob/master/test/image/mocks/color_syntax_formats.json)
for a working example using each format.

#### Browser compatibility

All of these are parsed by Plotly in JavaScript and normalized to legacy
`rgb(...)` / `rgba(...)` before being written to the DOM, so the browser never
sees the modern syntax — your figures render the same in any browser that ran
v3. The note below only matters if you also mirror these strings into your own
stylesheets or template literals.

Native CSS support:

| Format | First supported |
|---|---|
| `#rrggbbaa`, `#rgba` | Chrome 62 (2017), Firefox 49 (2016), Safari 9.1 (2016) |
| `rgb(r g b)`, `rgb(r g b / a)`, `hsl(h s l / a)` (space + slash-alpha) | Chrome 65 (2018), Firefox 52 (2017), Safari 12.1 (Mar 2019) |
| `hsla()` | Universal since IE9 |
| `hwb()` | Chrome 101 (Apr 2022), Firefox 96 (Jan 2022), Safari 15 (Sep 2021) |

`hwb()` is the only format here that won't parse in browsers from ~2020 or
earlier. Everything else is safe in any browser shipped in the last seven
years.

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
`icon-color`.

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

*Implemented in [#7891](https://github.com/plotly/plotly.js/pull/7891).*

`layout.geo.fitbounds: 'locations'` (and `'geojson'`) now correctly frames
choropleth and scattergeo location traces containing features that cross the
±180° antimeridian — Russia, Fiji, Antarctica, New Zealand, and the Aleutian
Islands portion of Alaska. In v3 these were mis-framed because the underlying
bounding-box computation (`@turf/bbox`) reported a bogus whole-globe span
(`[-180°, 180°]`) for any such feature, and the fit zoomed the map out to
match. In v4, `computeBbox` uses `d3-geo.geoBounds`' widest-gap longitude
algorithm on the feature's vertices and returns the compact crossing range
(with `east > 180°` when the range wraps).

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

### `Plots.graphJson()` signature simplified

*See [#7829](https://github.com/plotly/plotly.js/pull/7829).*

`Plotly.Plots.graphJson()` previously accepted a `mode` argument that was
Chart Studio–specific. It has been dropped:

```js
// Before
const json = Plotly.Plots.graphJson(gd, opts, mode);

// After
const json = Plotly.Plots.graphJson(gd, opts);
```

If you were passing the third argument (typically `'keepdata'` or
`'keepall'`), remove it — that behavior was only meaningful when uploading
to Chart Studio.

---

## Mapbox traces and subplots removed

*Implemented in [#7860](https://github.com/plotly/plotly.js/pull/7860).*

The legacy mapbox-gl-js–based traces and subplot type have been removed. The
MapLibre-based `map` family that has shadowed them since v2 is now the only
map implementation. For deeper background on the switch, see [Mapbox to
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

The schema for `map` mirrors `mapbox` attribute-for-attribute (`domain`,
`style`, `center`, `zoom`, `bearing`, `pitch`, `bounds`, `layers[...]`), so
the migration is usually a rename.

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
    // mapboxAccessToken removed — MapLibre needs no token for the
    // built-in styles
}
```

### Built-in style values

Every built-in `style` name that worked on `mapbox` still works on `map`, but
the tiles backing them differ — visual output **will change** even when no
other figure changes:

| Style name | Old (`mapbox`) | New (`map`) |
|---|---|---|
| `basic`, `streets`, `outdoors` | mapbox.com vector tiles (required token) | Carto Voyager |
| `light` | mapbox.com light | Carto Positron |
| `dark` | mapbox.com dark | Carto Dark Matter |
| `satellite`, `satellite-streets` | mapbox.com satellite | ArcGIS World Imagery |
| `white-bg`, `open-street-map` | unchanged | unchanged |
| `carto-*`, `carto-*-nolabels` | n/a (already open) | unchanged |

The three Stamen styles (`stamen-terrain`, `stamen-toner`,
`stamen-watercolor`) are gone — Stamen tiles now require a Stadia API key.
Users who need them can supply a custom `style` URL.

### Custom style URLs

Custom MapLibre / Mapbox-style JSON URLs continue to work. The
`mapbox://styles/mapbox/...` short form is no longer resolved, since it
requires authenticating to mapbox.com. Substitute the full URL of an
equivalent open style, or self-host the style JSON.

---

## Minimum Node.js version

*Implemented in [#7861](https://github.com/plotly/plotly.js/pull/7861).*

Plotly.js now requires Node.js v22 or newer. The previous floor was v18, which
has reached end-of-life.

This only affects you if:

| Scenario | Why |
|---|---|
| You build Plotly.js from source | Contributors and custom bundles |
| You run Plotly.js in a Node.js runtime | Server-side rendering via jsdom, validation scripts, image export pipelines, etc. |
| You install via `yarn` or `pnpm` | Both enforce `engines` strictly (`npm` prints a warning but installs) |

Consumers who only load the pre-built browser bundle (`plotly.min.js` or a
partial bundle like `plotly-basic.min.js`) are unaffected — the bundle runs in
browsers, not Node.

If you're on Node 18 or 20, upgrade to 22 LTS. `npm` will print a warning on
install but won't fail; `yarn` and `pnpm` will refuse to install unless your
environment satisfies `engines.node >= 22.0.0`.

---
