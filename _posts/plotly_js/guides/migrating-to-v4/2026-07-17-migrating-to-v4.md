---
description: Quick checklist of code changes to update existing Plotly.js v3 charts for v4.
display_as: guide
language: plotly_js
layout: base
name: Migrating to Plotly.js v4
order: 2
page_type: u-guide
permalink: javascript/guides/migrating-to-v4/
redirect_from:
- javascript/migrating-to-v4/
sitemap: false
thumbnail: thumbnail/mixed.jpg
---
# Migrating to Plotly.js v4

This is a quick checklist of code changes needed to update existing Plotly.js
v3 charts for v4. For full detail on every new feature and breaking change,
see [What's New in Plotly.js
v4](/javascript/guides/whats-new-in-v4/).

Most figures will render without changes. The items below call out where
existing code or input needs to be updated.

## Contents

- [Minimum Node.js version](#minimum-nodejs-version)
- [Removed color inputs](#removed-color-inputs)
- [Removed Chart Studio APIs](#removed-chart-studio-apis)
- [Removed mapbox traces and subplots](#removed-mapbox-traces-and-subplots)
- [Country name lookup](#country-name-lookup)
- [Auto-fitting on `map` and `geo` subplots](#auto-fitting-on-map-and-geo-subplots)
- [Scattermap rendering changes](#scattermap-rendering-changes)
- [Shape legend `line.dash`](#shape-legend-line-dash)
- [Overlaying axis `tickmode`](#overlaying-axis-tickmode)
- [`splom.axis.matches` default](#splomaxismatches-default)
- [Sankey layout](#sankey-layout)
- [MathJax v2 dropped](#mathjax-v2-dropped)

---

## Minimum Node.js version

Plotly.js now requires Node.js v22 or newer. Upgrade if you build from source,
run Plotly in a Node runtime (SSR via jsdom, image export pipelines,
validation scripts), or use `yarn` / `pnpm` (which enforce `engines`
strictly).

Consumers of the pre-built browser bundle are unaffected.

---

## Removed color inputs

Plotly.js colors now conform thoroughly to the [CSS standard](https://www.w3.org/TR/css-color-4/). As a result
the following color-input formats no longer behave as before. `hsv()` and bare-hex
inputs are now invalid and fall back to the attribute's default; fractional
`rgb()` is no longer rescaled and now renders near-black instead of the
intended color:

| Input | What to do |
|---|---|
| `hsv()` / `hsva()` strings | Convert to `hsl()`, `hwb()`, hex, or `rgb()` |
| `hsl()` / `hsla()` strings without percent units on saturation and lightness (e.g. `'hsl(0, 100, 40)'`, `'hsl(0 100 40)'`) | Add the units (e.g. `'hsl(0, 100%, 40%)'`) |
| `rgb()` / `rgba()` strings with 0–1 decimal fractions | Convert `'rgb(0.5, 0.5, 0.5)'` to `'rgb(128, 128, 128)'` (or any supported string form) |
| Hex strings without a leading `#` (e.g. `'fff'`, `'F00'`) | Add the `#` (e.g. `'#fff'`, `'#F00'`) |

Note that these formats only affect *string* colors. Numeric color arrays
used for color mapping (e.g. `marker.color: [1, 2, 3, 4]` paired with a
`colorscale`) are unchanged and remain valid. For the full list of formats
Plotly.js accepts, see [Specifying Colors](/javascript/colors/).

Auto-computed contrast colors (heatmap text, `insidetextfont` on
bars/waterfall, sankey hover on dark BG) may also shift by a few RGB units
around mid-luminance backgrounds.

---

## Removed Chart Studio APIs

Config options removed from `Plotly.newPlot(gd, data, layout, config)`:

| Removed | Replacement |
|---|---|
| `showLink`, `linkText`, `sendData`, `showSources` | None — remove them |
| `showEditInChartStudio` | `showSendToCloud` |

The `editInChartStudio` modebar button is gone — switch to `showSendToCloud`.

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

The **"Share with Plotly Cloud" button (`sendChartToCloud`) is now on by
default**. If you don't want the button visible, it can be turned off as follows:

```js
Plotly.newPlot(gd, data, layout, { showSendToCloud: false });
```

---

## Removed mapbox traces and subplots

The legacy Mapbox-based traces and subplot type are gone. Rename to the
MapLibre-based `map` family. For more information, see [Mapbox
to MapLibre migration](https://plotly.com/python/mapbox-to-maplibre/).

| Removed | Replacement |
|---|---|
| `scattermapbox` | `scattermap` |
| `choroplethmapbox` | `choroplethmap` |
| `densitymapbox` | `densitymap` |
| `layout.mapbox` (and `mapbox2`, `mapbox3`, …) | `layout.map` (and `map2`, `map3`, …) |
| `layout.mapbox.accesstoken`, `config.mapboxAccessToken` | None — MapLibre uses open tile providers |
| `plotly-mapbox.min.js` partial bundle | `plotly-map.min.js` |
| Modebar buttons `zoomInMapbox`, `zoomOutMapbox`, `resetViewMapbox` | `zoomInMap`, `zoomOutMap`, `resetViewMap` |
| `scrollZoom: 'mapbox'` (e.g. `'mapbox+cartesian'`) | `'map'` |

The attribute shape is unchanged — usually a straight rename works:

```js
// Before
{
    data: [{ type: 'scattermapbox', lon: [...], lat: [...] }],
    layout: { mapbox: { style: 'open-street-map', center: {...}, zoom: 2 } },
    config: { mapboxAccessToken: 'pk.eyJ1...' },
}

// After
{
    data: [{ type: 'scattermap', lon: [...], lat: [...] }],
    layout: { map: { style: 'open-street-map', center: {...}, zoom: 2 } },
    // mapboxAccessToken removed
}
```

Built-in style names still work but use different tile providers (Carto,
ArcGIS, OpenStreetMap), so the visual appearance will change. Stamen styles
(`stamen-terrain`, `-toner`, `-watercolor`) are no longer built in — they now
require a Stadia API key. The `mapbox://styles/mapbox/...` short-form URL is
no longer supported.

---

## Country name lookup

`locationmode: 'country names'` (on `choropleth` and `scattergeo` traces) now
uses a different library for looking up names. The vast majority of country
names are handled exactly the same with the new library; a small number of
legacy entries have been removed. If a name isn't matching in a plot, switch
to a [canonical country name, an alias, or an ISO-3 / ISO-2 code](https://github.com/plotly/country-iso-search/blob/878c3a8a140aade85e109088d3e8edbc34fcda9d/src/countries.ts).

---

## Auto-fitting on `map` and `geo` subplots

Both subplot types now auto-fit their initial view to trace data.

**For `map` subplots** (`scattermap`, `densitymap`): set `map.fitbounds:
false`, or set `map.center` / `map.zoom` explicitly, to disable auto-fit.

**For `geo` subplots** (`scattergeo`, `choropleth`): `layout.geo.fitbounds`
now defaults to `'locations'` (previously `false`). Set `fitbounds: false`, or
set any view attribute (`center`, `projection.rotation`, `projection.scale`,
`lonaxis.range`, `lataxis.range`), to disable auto-fit.

Figures that already supply view attributes render unchanged.

```js
// Restore v3 world view for a map subplot
{ map: { fitbounds: false } }

// Restore v3 world view for a geo subplot
{ geo: { fitbounds: false } }
```

---

## Scattermap rendering changes

| Change | Detail |
|---|---|
| Marker icons now respect `marker.color` | To maintain the v3 behavior, pass `marker.color: 'black'` |
| Maki icons updated from v2.1 to 8.2 | A handful of icon names were removed between v2.1 and v8.2. See the [list](https://labs.mapbox.com/maki-icons/) of available icons. |
| Legend swatches always draw a circle | Regardless of `marker.symbol`. In v3, symbols whose names overlap the Plotly set (`'square'`, `'star'`, …) drew broken or empty swatch paths; those now render as circles, consistent with every other scattermap trace. |

---

## Overlaying axis `tickmode`

An axis that overlays another axis (`layout.xaxis2.overlaying: 'x'`,
`layout.yaxis2.overlaying: 'y'`, etc.) now defaults its `tickmode` to `'sync'`
— the overlay draws its ticks at the base axis's positions with its own
range's labels. Set `tickmode: 'auto'` on the overlay to restore v3's
independent-grid behavior:

```js
{ yaxis2: { overlaying: 'y', side: 'right', tickmode: 'auto' } }
```

---

## `splom.axis.matches` default

`splom` (scatter plot matrix) traces now default `axis.matches` to `true`, so
axes on the same row/column are linked and pan/zoom together. In v3 the
default was `false` (each cell independent). To restore v3 behavior on a
specific splom, set `matches: false` on its axes explicitly.

---

## Sankey layout

`@plotly/d3-sankey` was upgraded from 0.7.2 to 0.12.3. Node y-positions and link paths may  change slightly.

---

## MathJax v2 support removed

Plotly.js now supports **MathJax v3 and v4** for LaTeX rendering. **MathJax
v2 support has been removed**. If your page bundles MathJax v2, upgrade to v3 or v4:

```html
<!-- v3 -->
<script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<!-- or v4 -->
<script src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js"></script>
```
