---
permalink: /ggplot2/
name: ggplot2 Graphing Library
description: With ggplotly() by Plotly, you can convert your ggplot2 figures into interactive ones powered by plotly.js, ready for embedding into Dash applications.
layout: langindex
language: ggplot2
redirect_from: ggplot2/reference/
---

{% include posts/ggplotly_header.html %}

<h2>Plot basics</h2>

<h2>Layers</h2>

<h3>Geoms</h3>

<h3>Stats</h3>

<h2>Aesthetics</h2>

<h1>More Examples</h1>

{% assign languagelist = site.posts | where:"language","ggplot2"  | sort: "order"  %}

{% include posts/documentation_eg.html %}
