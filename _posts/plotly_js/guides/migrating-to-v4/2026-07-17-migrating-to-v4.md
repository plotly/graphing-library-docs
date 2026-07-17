---
description: Learn about the changes in Plotly.js version 4.
display_as: guide
language: plotly_js
layout: base
name: Migrating to Plotly.js v4
order: 1
page_type: u-guide
permalink: javascript/guides/migrating-to-v4/
redirect_from:
- javascript/migrating-to-v4/
sitemap: false
thumbnail: thumbnail/mixed.jpg
---
# Migrating to Plotly.js v4

This guide covers breaking changes between v3 and v4 and how to update your code.
Most figures will render without changes; the items below call out where output
or accepted input has changed.

## Contents

- [Minimum Node.js version](#minimum-nodejs-version)
- [Color library swap (tinycolor2 → color)](#color-library-swap)
- [Chart Studio APIs removed](#chart-studio-apis-removed)
- [Mapbox traces and subplots removed](#mapbox-traces-and-subplots-removed)
- [Country name lookup (country-regex → country-iso-search)](#country-name-lookup)
- [TypeScript types](#typescript-types)
- [Scattermap icon defaults](#scattermap-icon-defaults)
- [Map subplots auto-frame to data](#map-subplots-auto-frame-to-data)
- [Geo subplots auto-frame by default](#geo-subplots-auto-frame-by-default)
- [Geo `fitbounds` framing for antimeridian features](#geo-fitbounds-framing-for-antimeridian-features)
- [Geo subplot zoom limits](#geo-subplot-zoom-limits)
- [Shape legend marker outlines honor `line.dash`](#shape-legend-marker-outlines-honor-linedash)
- [Overlaying axis `tickmode` defaults to `'sync'`](#overlaying-axis-tickmode-defaults-to-sync)
- [Sankey layout algorithm update](#sankey-layout-algorithm-update)

---

## Minimum Node.js version

*Implemented in [#7861](https://github.com/plotly/plotly.js/pull/7861).*

Plotly.js now requires Node.js v22 or newer. The previous floor was v18,
which has reached end-of-life.

This only affects you if you:

- build Plotly.js from source (contributors, custom bundles)
- run Plotly.js in a Node.js runtime (server-side rendering via jsdom,
  validation scripts, image export pipelines, etc.)
- install via a package manager that enforces `engines` strictly
  (`yarn`, `pnpm`)

Consumers who only load the pre-built browser bundle
(`plotly.min.js` or a partial bundle like `plotly-basic.min.js`) are
unaffected — the bundle runs in browsers, not Node.

If you're on Node 18 or 20, upgrade to 22 LTS. `npm` will print a
warning on install but won't fail; `yarn` and `pnpm` will refuse to
install unless your environment satisfies `engines.node >= 22.0.0`.

---

## Color library swap

*Implemented in [#7536](https://github.com/plotly/plotly.js/pull/7536).*

In v4, Plotly's internal color processing was switched from
[tinycolor2](https://github.com/bgrins/TinyColor) to
[color](https://github.com/Qix-/color). The new library is actively
maintained and supports modern CSS Color 4 syntax, but a handful of
behaviors changed in the process.

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

Mixed-format strings where at least one component is `>= 1` (e.g.
`rgb(255, 0.0, 0.0)`) continue to render correctly: the new parser treats
the `0.0` components as integer `0`.

**Numeric color inputs are now rejected.**

```js
// Before — silently accepted, rendered as near-black
{ marker: { color: 42 } }

// After — falls back to the attribute default
```

If you were relying on numeric color values being coerced, convert them
to color strings before passing them to Plotly.

### Color computation output changes

A handful of Plotly's derived colors shift by a few RGB units. Visible
places where output shifts:

| Where | Example |
|---|---|
| Heatmap auto-contrast text | A `Jet` colorscale heatmap shows text flipping between dark grey and white on mid-luminance cells in the teal/cyan band |
| Auto-generated `insidetextfont` color on bars/waterfall | Same threshold shift around teal/cyan-ish backgrounds |
| Sankey default hover color (dark BG) | RGB channels shift by 1 unit per channel vs v3 |

### New color formats you can now use

The new library accepts CSS Color 4 syntax that wasn't possible with
tinycolor. All of these are now valid anywhere Plotly accepts a color
string:

```js
'#ff0000aa'          // 8-digit hex with alpha
'#f00a'              // 4-digit short hex with alpha
'rgb(255 0 0)'       // space-separated rgb
'rgba(255 0 0 / 0.5)' // slash-alpha rgba
'hsl(0 100% 50% / 0.5)' // slash-alpha hsl
'hsla(0, 100%, 50%, 0.5)' // hsla
'hwb(0, 0%, 0%)'     // hwb (hue-whiteness-blackness)
```

See [test/image/mocks/color_syntax_formats.json](https://github.com/plotly/plotly.js/blob/master/test/image/mocks/color_syntax_formats.json)
for a working example using each format.

#### Browser compatibility

All of these are parsed by Plotly in JavaScript and normalized to legacy
`rgb(...)` / `rgba(...)` before being written to the DOM, so the browser
never sees the modern syntax — your figures render the same in any
browser that ran v3. The note below only matters if you also mirror these
strings into your own stylesheets or template literals.

Native CSS support:

| Format | First supported |
|---|---|
| `#rrggbbaa`, `#rgba` | Chrome 62 (2017), Firefox 49 (2016), Safari 9.1 (2016) |
| `rgb(r g b)`, `rgb(r g b / a)`, `hsl(h s l / a)` (space + slash-alpha) | Chrome 65 (2018), Firefox 52 (2017), Safari 12.1 (Mar 2019) |
| `hsla()` | Universal since IE9 |
| `hwb()` | Chrome 101 (Apr 2022), Firefox 96 (Jan 2022), Safari 15 (Sep 2021) |

`hwb()` is the only format here that won't parse in browsers from ~2020
or earlier. Everything else is safe in any browser shipped in the last
seven years.

---

## Chart Studio APIs removed

*Implemented in [#7812](https://github.com/plotly/plotly.js/pull/7812).*

The legacy "Edit in Chart Studio" link, related config options, and the
streaming token attribute have been removed. The `sendDataToCloud` modebar
button and config option are retained — only the duplicate
`editInChartStudio` button and the on-graph "Edit chart" link are gone.

### Removed config options

`Plotly.newPlot(gd, data, layout, config)` no longer accepts:

| Removed | What it did | Replacement |
|---|---|---|
| `showLink` | Drew an "Edit chart" link at the bottom-right of the plot | None — remove the option |
| `linkText` | Text for the `showLink` link | None — remove the option |
| `sendData` | Whether the link uploaded data or just linked to a file | None — remove the option |
| `showSources` | Hook that drew custom source links next to `showLink` | None — remove the option |
| `showEditInChartStudio` | Pencil-icon variant of `sendDataToCloud` | Use `showSendToCloud` |

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

`editInChartStudio` is no longer a built-in modebar button. If you were
adding it explicitly via `modeBarButtonsToAdd`, switch to `sendDataToCloud`:

```js
// Before
{ modeBarButtonsToAdd: ['editInChartStudio'] }

// After
{ modeBarButtonsToAdd: ['sendDataToCloud'] }
```

### Removed trace attribute

The undocumented `stream` attribute (`stream.token`, `stream.maxpoints`)
has been removed from every trace type. It was a hook for the Chart
Studio streaming service, which is no longer reachable. If you have
figures containing `stream: { token: '...', maxpoints: N }` in their
trace objects, delete those properties — they're now schema-rejected.

---

## Mapbox traces and subplots removed

*Implemented in [#7860](https://github.com/plotly/plotly.js/pull/7860).*

The legacy mapbox-gl-js–based traces and subplot type have been removed.
The MapLibre-based `map` family that has shadowed them since v2 is now
the only map implementation.

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
`style`, `center`, `zoom`, `bearing`, `pitch`, `bounds`, `layers[...]`),
so the migration is usually a rename.

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

Every built-in `style` name that worked on `mapbox` still works on `map`,
but the tiles backing them differ — visual output **will change** even
when no other figure changes:

| Style name | Old (`mapbox`) | New (`map`) |
|---|---|---|
| `basic`, `streets`, `outdoors` | mapbox.com vector tiles (required token) | Carto Voyager |
| `light` | mapbox.com light | Carto Positron |
| `dark` | mapbox.com dark | Carto Dark Matter |
| `satellite`, `satellite-streets` | mapbox.com satellite | ArcGIS World Imagery |
| `white-bg`, `open-street-map` | unchanged | unchanged |
| `carto-*`, `carto-*-nolabels` | n/a (already open) | unchanged |

The three Stamen styles (`stamen-terrain`, `stamen-toner`,
`stamen-watercolor`) are gone — Stamen tiles now require a Stadia API
key. Users who need them can supply a custom `style` URL.

### Custom style URLs

Custom MapLibre / Mapbox-style JSON URLs continue to work. The
`mapbox://styles/mapbox/...` short form is no longer resolved, since it
requires authenticating to mapbox.com. Substitute the full URL of an
equivalent open style, or self-host the style JSON.

### Static export

The Mapbox logo previously injected into static SVG / PNG exports of
mapbox subplots is no longer drawn — MapLibre has no equivalent
trademark requirement. Attribution provided by tile sources (Carto,
OpenStreetMap, ArcGIS) is still rendered inside the map canvas.

---

## Country name lookup

*Implemented in [#7856](https://github.com/plotly/plotly.js/pull/7856).*

`locationmode: 'country names'` on `choropleth` and `scattergeo` traces is
now resolved by [country-iso-search](https://github.com/plotly/country-iso-search)
instead of [country-regex](https://github.com/etpinard/country-regex). The
attribute name, accepted values list, and ISO-3 output are unchanged —
the difference is in *how* a name string is matched to an alpha-3 code.

The old library walked a table of country-specific regular expressions
and returned the first match. That made it lenient (substring matches
worked) but ambiguity-prone — strings like `'Republic of'` could
resolve to whichever entry's regex hit first. The new library does a
sanitized exact lookup against a curated alias table, which is stricter
about ambiguous input but accepts many more legitimate forms.

### Names that resolved before but no longer do

Strings that only matched because of overly broad regex fragments now
fall back to the unrecognized-name log message and the location is
skipped. In practice this hits inputs that weren't really country
names — partial phrases, generic descriptors, or strings containing a
country name as a substring of something else (e.g.
`'Republic of Foo'`, `'Not Iran'`). If you were relying on a
non-canonical form, switch to the country's name, an alias, or the
ISO-3 / ISO-2 code.

### Names and forms that now resolve

The alias table is larger and the input is normalized before lookup,
so a number of forms that previously failed now work:

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

Matching is case-insensitive. Sanitization also collapses internal
whitespace, drops `.` `()` `,`, maps `&` → `and`, and turns `-` / `–` /
`—` into spaces — so cosmetic punctuation differences in your input
data no longer block a match.

### Disputed-territory codes are retained

The user-assigned alpha-3 codes Plotly historically recognized for
disputed regions still work:

| Code | Region |
|---|---|
| `XAC` | Aksai Chin |
| `XAP` | Arunachal Pradesh |
| `XBT` | Bir Tawil |
| `XHT` | Halaib Triangle |
| `XJK` | Jammu and Kashmir |

These are layered on top of the standard ISO 3166-1 records via
[src/lib/custom_country_codes.ts](https://github.com/plotly/plotly.js/blob/master/src/lib/custom_country_codes.ts).
Whether a feature for them appears on the rendered map still depends
on the topojson resolution in use.

---

## TypeScript types

*Implemented in [#7680](https://github.com/plotly/plotly.js/pull/7680) and [#7868](https://github.com/plotly/plotly.js/pull/7868).*

Plotly.js now ships its own TypeScript type definitions. `package.json`
points `"types"` at `lib/index.d.ts`, so the types are picked up
automatically — no separate `@types/*` install is needed.

### Importing

The package exports a default namespace, named exports, and a global
`Plotly` namespace:

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

**Trace data** — `Data` (the union of every trace's typed data object),
plus per-trace interfaces like `ScatterData`, `BarData`, `HeatmapData`,
`ChoroplethData`, etc. Each per-trace interface narrows on `type`, so
using `Data[]` in your figure lets TypeScript pick the right trace
shape from the literal `type` value:

```ts
const data: Data[] = [
    { type: 'bar', x: ['a', 'b'], y: [1, 2] },     // checked as BarData
    { type: 'scatter', x: [1, 2], mode: 'lines' }, // checked as ScatterData
];
```

Other exports:

- **Layout** — `Layout` (the full layout interface), `LayoutAxis`,
  `Legend`, `Annotation`, `Shape`, `Slider`, `UpdateMenu`, `Scene`, and
  the rest of the component interfaces. Pass `Partial<Layout>` to
  `newPlot` / `react` since most fields are optional.

- **Config** — `Config`, `ToImgopts`, `ToImageButtonOptions`,
  `DownloadImgopts`, `ModeBarDefaultButtons`, `ModeBarButton`, `Icon`.

- **Trace/layout enums** — string-literal unions like `TraceType`,
  `AxisType`, `Calendar`, `Dash`, `PatternShape`, `XRef`, `YRef`,
  `MarkerSymbol`, `HoverInfo`, etc. Use these instead of bare `string`
  to get narrowing on attribute values.

- **Shared sub-interfaces** — `Font`, `ColorBar`, `HoverLabel`,
  `Pattern`, `Domain`, `LegendGroupTitle`, `TickFormatStops`, etc.,
  used wherever the schema reuses the same sub-attribute tree.

- **Events** — `PlotMouseEvent`, `PlotHoverEvent`, `PlotSelectionEvent`,
  `PlotRelayoutEvent`, `PlotRestyleEvent`, `LegendClickEvent`,
  `SliderChangeEvent`, etc., plus `PlotlyEventName` for the union of
  event names accepted by `on()` / `once()` / `removeListener()`.

- **Animation & frames** — `AnimationOpts`, `Frame`, `Transition`,
  `TransitionEasing`.

- **Templates** — `Template` interface (and `TemplateFigure`,
  `ValidateTemplateResult` from the template utilities).

- **DOM** — `PlotlyHTMLElement` (the typed `Plotly.newPlot` graph
  div), `Datum`, `TypedArray`, `Color`, `ColorScale`.

### Notes on a few types

**`Data` vs per-trace interfaces.** Prefer the `Data` union for figure
literals (TypeScript discriminates on `type`); use the per-trace
interface only when you have a value that is *guaranteed* to be one
trace type — e.g. a helper that builds a `BarData` to push into a
`Data[]`.

**`Layout` is the input shape, not the resolved shape.** It mirrors
what you pass to `newPlot`. The post-coerce internal shape used inside
Plotly's own code (often called "FullLayout") is intentionally not
exported. Likewise `Data` is the input shape; resolved trace state
("FullData") is internal.

**`PlotType` is an alias for `TraceType`.** Both name the same
string-literal union of trace type names; existing code that imports
`PlotType` keeps compiling. New code should prefer `TraceType`.

---

## Scattermap icon defaults

*Implemented in [#7825](https://github.com/plotly/plotly.js/pull/7825).*

If you used `scattermap` or `scattermapbox` in v3, three rendering details
have changed by the time you land on `scattermap` in v4:

### Marker icons now respect `marker.color`

`marker.color` on a scattermap trace is now applied to the icon by
setting `icon-color` (plus a small `icon-halo` so the colored edges
read cleanly). In v3 the property was set on the layer but the
underlying icons weren't SDF sprites, so the color had no visible
effect — coloring was effectively a no-op.

In v4 the Maki icons are loaded with `{sdf: true}` and tinted with
`marker.color`. Figures relying on the icon retaining its original
artwork color will now render in the trace color. If you need the
original tint, pick a Maki icon already in that color and set
`marker.color: 'white'` (which becomes the identity tint for SDF
sprites).

| Before (v3) | After (v4) |
|---|---|
| ![v3 scattermap icons uncolored](/all_static/images/migrating-to-v4/migration_scattermap_iconcolor_v3.png) | ![v4 scattermap icons tinted red](/all_static/images/migrating-to-v4/migration_scattermap_iconcolor_v4.png) |

### Maki icon set updated to v8 (via jsDelivr)

The icon CDN and version have changed:

- **v3**: `https://unpkg.com/maki@2.1.0/icons/<name>.svg`
- **v4**: `https://cdn.jsdelivr.net/npm/@mapbox/maki@8.2.0/icons/<name>.svg`

A handful of icon names removed between Maki 2.1 and 8.2 will now
silently fail to load (HTTP 404). If you were using one of the dropped
icons, swap it for the nearest Maki 8 equivalent (see
[Maki 8 icon list](https://labs.mapbox.com/maki-icons/)).

### Legend swatch always renders as a circle

`scattermap` legend swatches now always draw a circle, regardless of
`marker.symbol`. In v3 the swatch went through the same code path as
cartesian traces, which only understands the
[Plotly-supported symbol names](https://github.com/plotly/plotly.js/blob/master/src/components/drawing/symbol_defs.js).
On map traces, that produced inconsistent output: symbols with names
that don't overlap the Plotly set (Maki-only names like `'airport'`,
`'cafe'`) rendered as filled circles, while other symbols (`'square'`,
`'star'`, etc.) rendered as broken/empty paths in the legend even
though they draw correctly on the map. The v4 circle fallback makes
the swatch consistent across every scattermap trace.

| Before (v3) | After (v4) |
|---|---|
| ![v3 scattermap legend inconsistent](/all_static/images/migrating-to-v4/migration_scattermap_legendsymbol_v3.png) | ![v4 scattermap legend all circles](/all_static/images/migrating-to-v4/migration_scattermap_legendsymbol_v4.png) |

If you were styling the legend swatch path directly based on
`marker.symbol`, that selector will now always match a circle path on
map traces.

---

## Map subplots auto-frame to data

*Implemented in [#7884](https://github.com/plotly/plotly.js/pull/7884).*

`map` subplots now auto-frame the view to fit the trace data. In v3, the
same layout produced a world view centered at `(0, 0)` with `zoom: 1`,
requiring the user to supply `center` and `zoom` (or drag/scroll) to see
their data.

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
| ![v3 map with world view](/all_static/images/migrating-to-v4/migration_map_autofit_v3.png) | ![v4 map framed on cities](/all_static/images/migrating-to-v4/migration_map_autofit_v4.png) |

Auto-framing runs on the initial render and again on data-only updates
(`Plotly.restyle` of `lon`/`lat`, `Plotly.addTraces`, `Plotly.deleteTraces`)
whenever the user hasn't overridden the view. Once the user pans, zooms,
rotates, or tilts the map — or explicitly sets `center` / `zoom` / `bearing`
/ `pitch` in the layout — auto-framing steps aside and preserves the
chosen view across further data changes.

### Opting out

Two ways to disable auto-framing.

**Set `map.fitbounds: false`** — recommended for intentional opt-out;
explicit and independent of the view values.

```js
{ map: { fitbounds: false } }
```

**Set `map.center` or `map.zoom` explicitly** — any value counts as
user intent, including `zoom: 0` and `center: { lon: 0, lat: 0 }`.

```js
// Keep the v3 world view:
{ map: { center: { lon: 0, lat: 0 }, zoom: 1 } }
```

### Which traces contribute

Each `map` subplot auto-frames independently, using only the
`scattermap` and `densitymap` traces assigned to it (via the trace's
`subplot` attribute). Each contributing trace's `lon` / `lat` arrays
feed the frame, with non-finite entries skipped. Traces belonging to
a different subplot (`map2`, `polar`, etc.) are framed by their own
subplot, not this one; traces with `visible !== true` are ignored
entirely.

**`choroplethmap` traces skip auto-framing** because they carry
`locations` / `geojson` rather than point lon/lat, so their extent
can't be included without geojson bbox handling. When a visible
`choroplethmap` sits on the subplot, the view falls back to the v3
default. Set `map.center` and `map.zoom` explicitly to frame the choropleth.

### Antimeridian data

For data that straddles the antimeridian (points on both sides of ±180°),
the auto-frame picks the compact crossing range rather than the
long-way-around view. For example, `lon: [131.8855, -179]` frames as
`[131.8855, 181]` (a ~49° span across the antimeridian) instead of the
naive `[-179, 131.8855]` (~311° the wrong way).

### `map.bounds` is unaffected

The `map.bounds` layout attribute (which restricts panning) is a
separate concern and continues to work as in v3. Auto-framing computes
the *initial* view; `bounds` constrains *interactive* view movement.
Both can coexist.

### Relationship to `layout.geo.fitbounds`

Both `map` and `geo` subplots now expose a `fitbounds` layout attribute,
but the shapes differ:

| | `map.fitbounds` | `geo.fitbounds` |
|---|---|---|
| Type | boolean | enumerated |
| Values | `true` / `false` | `false` / `'locations'` / `'geojson'` |
| Default | `true` | `'locations'` (was `false` in v3 — see [Geo subplots auto-frame by default](#geo-subplots-auto-frame-by-default)) |
| Re-fits on data updates | yes, until user overrides view | yes, every render |

If you use both subplot types in one figure, note that `map.fitbounds` is
a straight on/off toggle, while `geo.fitbounds` also selects *what*
contributes to the frame (visible `locations` only, vs. the entire trace
`geojson`).

---

## Geo subplots auto-frame by default

*Implemented in [#7895](https://github.com/plotly/plotly.js/pull/7895).*

`layout.geo.fitbounds` now defaults to `'locations'` (v3 default: `false`).
`geo` subplots — used by `scattergeo`, `choropleth`, and any other
location-based geo trace — now auto-frame their initial view to fit the
trace data, matching the behavior of `map` subplots. Figures that previously
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
| ![v3 geo world view](/all_static/images/migrating-to-v4/migration_geo_autofit_v3.png) | ![v4 geo framed on Canada+Mexico](/all_static/images/migrating-to-v4/migration_geo_autofit_v4.png) |

### How to opt out

Two paths:

**Explicit:** set `layout.geo.fitbounds: false` to restore the v3 default view.

```js
Plotly.newPlot(gd, [/* ... */], {
    geo: { fitbounds: false }  // world view / scope-default view, as in v3
});
```

**Implicit:** setting any of the view attributes that auto-fit would
otherwise compute automatically disables auto-fit for that figure. Which
attributes count depends on the projection:

| Projection kind | Projection-specific opt-out attributes |
|---|---|
| Any non-`world` scope (checked first, even if the projection is also clipped) | `center.lon`, `center.lat`, `projection.scale` |
| World scope + clipped projection (orthographic, azimuthal equal area, etc.) | `center.lon`, `center.lat`, `projection.scale`, `projection.rotation.lon`, `projection.rotation.lat` |
| World scope, non-clipped projection (miller, robinson, mercator, etc.) | `center.lon`, `center.lat`, `projection.scale`, `projection.rotation.lon` |

In addition to the projection-specific set above, setting either
`lonaxis.range` or `lataxis.range` always disables auto-fit for that
figure, regardless of projection type. Even for projections where
fitbounds doesn't overwrite the ranges directly, the fitted
`center`/`scale` would visually override whatever framing the ranges
imply, so we treat setting a range as opt-out intent.

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

Three projection types skip auto-fit and render with the schema default
view even when `fitbounds` is unset (i.e., defaulted to `'locations'`):

- `'albers usa'` — a fixed composite projection with predetermined insets
  for Alaska and Hawaii; it has no `center`/`rotation` concept for fitbounds
  to target.
- `'craig'` and `'satellite'` — the internal scale heuristic that drives
  `fitbounds` compares data bounds against world bounds in the projected
  plane, which is unreliable for these projections' non-linear (and,
  for satellite, perspective-dependent) mapping. Auto-fit would zoom
  incorrectly, so v4 skips it.

For these projections `layout.geo.fitbounds` is silently forced to `false`
in the resolved layout even if you leave it at the default. To fit
locations under one of these projections, supply the view attributes
yourself (`center`, `projection.rotation`, `projection.scale`, etc.).

### Reset button behavior

The modebar's Reset view button restores the auto-fit view when
`fitbounds` is active, not the schema default. Prior to v4 there was no
auto-fit default, so Reset simply restored the schema default; in v4 the
initial view captured for reset is the fitted view.

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
(see [Geo subplots auto-frame by default](#geo-subplots-auto-frame-by-default)),
figures that never set `fitbounds` explicitly now participate in auto-fit
too — so this antimeridian fix reaches many more figures than it would
have as a standalone change.

### Which figures shift

A figure sees a visible change when **both** of the following hold:

- `layout.geo.fitbounds` is active — either explicitly set to `'locations'` /
  `'geojson'`, or left at the v4 default (see the opt-out list in the
  auto-fit-default section above), and
- The figure contains a `choropleth` or `scattergeo` trace with `locations`
  where at least one location resolves to a feature that crosses ±180°.

Figures that opt out of auto-fit (`fitbounds: false`, an explicit view
attribute, or one of the projections listed as skipping auto-fit), or that
don't include an antimeridian-crossing feature, render identically to v3
as far as this fix is concerned.

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
| ![v3 Russia mis-framed with empty space](/all_static/images/migrating-to-v4/migration_antimeridian_v3.png) | ![v4 Russia tightly framed](/all_static/images/migrating-to-v4/migration_antimeridian_v4.png) |

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

The defaults preserve v3 behavior — figures that don't set these
attributes are unaffected.

One init-time wrinkle: if `projection.scale` falls outside
`[minscale, maxscale]`, Plotly now dispatches a synthetic zoom event on
first plot to clamp it back into range. That emits a
`plotly_relayout` event that v3 wouldn't have fired. If you have a
listener that distinguishes user-driven zooms from programmatic ones,
make sure it tolerates a single extra event at startup for figures
whose initial `projection.scale` is outside the configured bounds.

---

## Shape legend marker outlines honor `line.dash`

*Implemented in [#7845](https://github.com/plotly/plotly.js/pull/7845).*

Shapes rendered in the legend as filled markers (e.g. `type: 'rect'`,
`'circle'`, or filled paths with `showlegend: true`) now draw the
marker's outline using the shape's `line.dash` value. In v3 the marker
outline was always solid regardless of the shape's dash style, so the
swatch didn't match the shape on the plot. (Line-only shapes —
`type: 'line'` — already drew their swatch dashed in v3; only the
filled-marker path was hardcoded to solid.)

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
| ![v3 shape legend outlines solid](/all_static/images/migrating-to-v4/migration_shape_legend_swatch_v3.png) | ![v4 shape legend outlines dashed](/all_static/images/migrating-to-v4/migration_shape_legend_swatch_v4.png) |

---

## Overlaying axis `tickmode` defaults to `'sync'`

*Implemented in [#7684](https://github.com/plotly/plotly.js/pull/7684).*

An axis that overlays another axis (`layout.xaxis2.overlaying: 'x'`,
`layout.yaxis2.overlaying: 'y'`, etc.) now defaults its `tickmode` to
`'sync'` instead of `'auto'`. The overlay axis draws tick marks and
gridlines at the same positions as its base axis, computing labels to
match — rather than picking its own auto-fit tick positions.

In v3 the two axes drew independent auto-tick grids, producing
staggered gridlines that were hard to read and left no visual
association between a gridline and a specific axis. Sync eliminates
that overlap.

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
| ![v3 staggered overlay ticks](/all_static/images/migrating-to-v4/migration_tickmode_v3.png) | ![v4 sync'd overlay ticks](/all_static/images/migrating-to-v4/migration_tickmode_v4.png) |

### Exception: categorical / multicategory base axes

When the overlaid (base) axis is `type: 'category'` or `'multicategory'`,
`tickmode` continues to default to `'auto'` on the overlaying axis.
Sync'ing tick positions to category slots is almost never the intent.

### Opting out

Set `tickmode: 'auto'` (or any other explicit value) on the overlaying
axis to restore v3 behavior:

```js
{ yaxis2: { overlaying: 'y', side: 'right', tickmode: 'auto' } }
```

### Incidental bugfix

`showexponent`, `showtickprefix`, and `showticksuffix` values of
`'first'` and `'last'` were previously ignored on axes rendered with
`tickmode: 'sync'`. Any workaround for that (e.g., forcing `'all'` on
overlay axes) is no longer needed in v4.

---

## Sankey layout algorithm update

*Implemented in [#7830](https://github.com/plotly/plotly.js/pull/7830).*

`@plotly/d3-sankey` has been upgraded from 0.7.2 to 0.12.3. The schema
and API surface for `sankey` traces are unchanged — every attribute
that worked in v3 still works in v4 — but the underlying layout
algorithm was rewritten upstream across these versions, so node and
link positions for the same figure shift.

The most visible effect is that links tend to be straighter and cross
each other less: the new relaxation step gives more weight to
minimizing link travel between columns, so flows that previously
swooped across the diagram now run closer to horizontal. Node
y-positions within a column shift to accommodate this, and exact node
heights / paddings can differ by a few pixels.

| Before (v3) | After (v4) |
|---|---|
| ![v3 sankey with crossing links](/all_static/images/migrating-to-v4/migration_sankey_v3.png) | ![v4 sankey with rewritten layout](/all_static/images/migrating-to-v4/migration_sankey_v4.png) |
