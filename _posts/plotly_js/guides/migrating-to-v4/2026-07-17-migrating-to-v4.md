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
v3 charts for v4. For full detail on every new feature and breaking change
(with images, background, and edge cases), see [What's New in Plotly.js
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
- [Sankey layout](#sankey-layout)

---

## Minimum Node.js version

Plotly.js now requires Node.js v22 or newer. Upgrade if you build from source,
run Plotly in a Node runtime (SSR via jsdom, image export pipelines,
validation scripts), or use `yarn` / `pnpm` (which enforce `engines`
strictly).

Consumers of the pre-built browser bundle are unaffected.

---

## Removed color inputs

Three color-input formats no longer work — invalid inputs fall back to the
attribute's default:

| Input | What to do |
|---|---|
| `hsv()` strings | Convert to `hsl()`, `hwb()`, hex, or `rgb()` |
| `rgb()` / `rgba()` strings with 0–1 decimal fractions | Convert `'rgb(0.5, 0.5, 0.5)'` to `'rgb(128, 128, 128)'` (or any supported string form) |
| Numeric color values (e.g. `color: 42`) | Convert to a color string |

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

The `editInChartStudio` modebar button is gone — switch to `sendDataToCloud`.
The undocumented `stream: { token, maxpoints }` trace attribute is removed and
now schema-rejected.

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

---

## Removed mapbox traces and subplots

The legacy `mapbox`-based traces and subplot type are gone. Rename to the
MapLibre-based `map` family. For deeper background on the switch, see [Mapbox
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
ArcGIS, OpenStreetMap) — visual output will shift. Stamen styles
(`stamen-terrain`, `-toner`, `-watercolor`) are no longer built in — they now
require a Stadia API key. The `mapbox://styles/mapbox/...` short-form URL is
no longer resolved.

---

## Country name lookup

`locationmode: 'country names'` on `choropleth` and `scattergeo` traces now
uses a stricter matcher. Strings that only matched previously via broad regex
fragments (e.g. `'Republic of'`, `'Not Iran'`) no longer resolve — locations
are skipped. Switch to a canonical country name, an alias, or an ISO-3 / ISO-2
code.

---

## Auto-fitting on `map` and `geo` subplots

Both subplot types now auto-fit their initial view to fit trace data.

**For `map` subplots** (`scattermap`, `densitymap`): set `map.fitbounds:
false`, or set `map.center` / `map.zoom` explicitly, to opt out.

**For `geo` subplots** (`scattergeo`, `choropleth`): `layout.geo.fitbounds`
now defaults to `'locations'` (previously `false`). Set `fitbounds: false`, or
set any view attribute (`center`, `projection.rotation`, `projection.scale`,
`lonaxis.range`, `lataxis.range`), to opt out.

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
| Marker icons now respect `marker.color` | To keep icons in their original artwork color, set `marker.color: 'white'`. |
| Maki icons load from `@mapbox/maki@8.2.0` via jsDelivr | A handful of icon names dropped between Maki 2.1 and 8.2 will 404 — swap to the nearest Maki 8 equivalent. |
| Legend swatches always draw a circle | Regardless of `marker.symbol`. Selectors that styled the swatch path based on symbol name will now match a circle on map traces. |

---

## Shape legend `line.dash`

Filled-shape legend markers (`type: 'rect'`, `'circle'`, or filled paths with
`showlegend: true`) now draw their outline using the shape's `line.dash`
value, matching the on-plot shape. No code change needed unless you had output
locked to the v3 solid-outline behavior.

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

Categorical / multicategory base axes are exempt — overlays over them keep
defaulting to `'auto'`.

---

## Sankey layout

`@plotly/d3-sankey` was upgraded from 0.7.2 to 0.12.3. The schema is
unchanged, but node y-positions and link paths shift for the same figure. No
code change needed unless you had output locked to specific pixel positions.

To pin node/link order (for animation or side-by-side comparisons), use the
new `sankey.node.sort` and `sankey.link.sort` attributes with `'input'`.
Defaults preserve v3-equivalent auto ordering.
