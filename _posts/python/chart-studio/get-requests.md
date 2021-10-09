---
jupyter:
  jupytext:
    notebook_metadata_filter: all
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.1'
      jupytext_version: 1.1.7
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
  language_info:
    codemirror_mode:
      name: ipython
      version: 3
    file_extension: .py
    mimetype: text/x-python
    name: python
    nbconvert_exporter: python
    pygments_lexer: ipython3
    version: 3.6.5
  plotly:
    description: How to download plotly users's public graphs and data with python.
    display_as: chart_studio
    language: python
    layout: base
    name: Get Requests
    order: 8
    permalink: python/get-requests/
    thumbnail: thumbnail/spectral.jpg
    v4upgrade: true
---

#### Get and Change a Public Figure1

```python
import chart_studio.plotly as py
# Learn about API authentication here: https://plotly.com/python/getting-started
# Find your api_key here: https://plotly.com/settings/api

fig = py.get_figure("https://plotly.com/~PlotBot/5")

fig['layout']['title'] = "Never forget that title!"

py.iplot(fig, filename="python-change_plot")
```

#### Get Data and Change Plot

```python
import chart_studio.plotly as py
import plotly.graph_objects as go
# Learn about API authentication here: https://plotly.com/python/getting-started
# Find your api_key here: https://plotly.com/settings/api

data = py.get_figure("https://plotly.com/~PythonPlotBot/3483").data
distance = [d['y'][0] for d in data]  # check out the data for yourself!

fig = go.Figure()
fig.add_histogram(y=distance, name="flyby distance", histnorm='probability')
xaxis = dict(title="Probability for Flyby at this Distance")
yaxis = dict(title="Distance from Earth (Earth Radii)")
fig.update_layout(title="data source: https://plotly.com/~AlexHP/68", xaxis=xaxis, yaxis=yaxis)

plot_url = py.plot(fig, filename="python-get-data")
```

#### Get and Replot a Public Figure with URL

```python
import chart_studio.plotly as py
# Learn about API authentication here: https://plotly.com/python/getting-started
# Find your api_key here: https://plotly.com/settings/api

fig = py.get_figure("https://plotly.com/~PlotBot/5")

plot_url = py.plot(fig, filename="python-replot1")
```

#### Get and Replot a Public Figure with ID

```python
import chart_studio.plotly as py
# Learn about API authentication here: https://plotly.com/python/getting-started
# Find your api_key here: https://plotly.com/settings/api

fig = py.get_figure("PlotBot", 5)

plot_url = py.plot(fig, filename="python-replot2")
```

```python

```
