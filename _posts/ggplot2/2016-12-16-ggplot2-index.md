---
permalink: /ggplot2/
name: ggplot2 Graphing Library
description: With ggplotly() by Plotly, you can convert your ggplot2 figures into interactive ones powered by plotly.js, ready for embedding into Dash applications.
layout: langindex
language: ggplot2
redirect_from: ggplot2/reference/
---

<h1 class="gg_mega"><code>ggplotly</code> Reference</h1>

<h1 class="gg_big">Plot basics</h2>

<h1 class="gg_big">Layers</h2>

<h2 class="gg_sub">. . .  Geoms</h3>

<h2 class="gg_sub">. . .  Stats</h3>

<h1 class="gg_big">Aesthetics</h2>

<h1 class="gg_mega">More Examples</h1>

{% assign languagelist = site.posts | where:"language","ggplot2"  | sort: "order"  %}

{% include posts/documentation_eg.html %}
