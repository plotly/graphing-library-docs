---
permalink: /ggplot2/
name: ggplot2 Graphing Library
description: With ggplotly() by Plotly, you can convert your ggplot2 figures into interactive ones powered by plotly.js, ready for embedding into Dash applications.
layout: langindex
language: ggplot2
redirect_from: ggplot2/reference/
---

<h1 class="gg-mega"><code>ggplotly</code> Reference</h1>

<h1 class="gg-big">Plot basics</h2>

{% include posts/thumb.html path='plot-basics' keyword='ggplot' %}
{% include posts/thumb.html path='plot-basics' keyword='aes' %}
{% include posts/thumb.html path='plot-basics' keyword='gg-add' %}
{% include posts/thumb.html path='plot-basics' keyword='qplot' %}

<h1 class="gg-big">Layers</h2>

<h2 class="gg-sub">. . .  Geoms</h3>

<h2 class="gg-sub">. . .  Stats</h3>

<h1 class="gg-big">Aesthetics</h2>

<h1 class="gg-mega">More Examples</h1>

{% assign languagelist = site.posts | where:"language","ggplot2"  | sort: "order"  %}

{% include posts/documentation_eg.html %}
