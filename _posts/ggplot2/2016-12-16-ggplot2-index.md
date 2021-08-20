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
<h2 class="gg-sub">Geoms</h3>
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_abline' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_bar' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_bin_2d' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_boxplot' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_contour' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_count' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_crossbar' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_density' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_dotplot' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_function' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_hex' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_histogram' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_jitter' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_map' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_path' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_point' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_polygon' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_quantile' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_ribbon' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_rug' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_segment' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_smooth' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_spoke' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_text' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_tile' %}
{% include posts/thumb1.html path='layers' subpath='geoms' keyword='geom_violin' %}

<h2 class="gg-sub">Stats</h3>
{% include posts/thumb1.html path='layers' subpath='Stats' keyword='after_stat' %}
{% include posts/thumb1.html path='layers' subpath='Stats' keyword='stat_ecdf' %}
{% include posts/thumb1.html path='layers' subpath='Stats' keyword='stat_ellipse' %}
{% include posts/thumb1.html path='layers' subpath='Stats' keyword='stat_identity' %}
{% include posts/thumb1.html path='layers' subpath='Stats' keyword='stat_summary_2d' %}
{% include posts/thumb1.html path='layers' subpath='Stats' keyword='stat_summary' %}
{% include posts/thumb1.html path='layers' subpath='Stats' keyword='stat_unique' %}

<h2 class="gg-sub">Position adjustment</h3>
{% include posts/thumb1.html path='layers' subpath='Position adjustment' keyword='position_dodge' %}
{% include posts/thumb1.html path='layers' subpath='Position adjustment' keyword='position_jitter' %}
{% include posts/thumb1.html path='layers' subpath='Position adjustment' keyword='position_stack' %}

<h2 class="gg-sub">Annotations</h3>
{% include posts/thumb1.html path='layers' subpath='Annotations' keyword='annotate' %}
{% include posts/thumb1.html path='layers' subpath='Annotations' keyword='annotation_raster' %}
{% include posts/thumb1.html path='layers' subpath='Annotations' keyword='borders' %}

<h1 class="gg-big">Aesthetics</h2>

<h1 class="gg-mega">More Examples</h1>

{% assign languagelist = site.posts | where:"language","ggplot2"  | sort: "order"  %}

{% include posts/documentation_eg.html %}
