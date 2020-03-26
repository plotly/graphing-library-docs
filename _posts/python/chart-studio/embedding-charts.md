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
    description: How to embed plotly graphs with an iframe in HTML.
    display_as: chart_studio
    language: python
    layout: base
    name: Embedding Graphs in HTML
    order: 6
    permalink: python/embedding-plotly-graphs-in-HTML/
    thumbnail: thumbnail/embed.jpg
    v4upgrade: true
---

Plotly graphs can be embedded in any HTML page. This includes [IPython notebooks](https://plotly.com/ipython-notebooks/), [Wordpress sites](https://wordpress.org/plugins/wp-plotly), dashboards, blogs, and more.

For more on embedding Plotly graphs in HTML documents, [see our tutorial](https://plotly.com/how-to-embed-plotly-graphs-in-websites).

From Python, you can generate the HTML code to embed Plotly graphs with the `plotly.tools.get_embed` function.


```python
import chart_studio.tools as tls

tls.get_embed('https://plotly.com/~chris/1638')
```

```python

```
