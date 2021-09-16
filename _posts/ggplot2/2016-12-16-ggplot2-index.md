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
{% include posts/thumb.html path='aesthetics' keyword='aes_colour_fill_alpha' %}
{% include posts/thumb.html path='aesthetics' keyword='aes_group_order' %}
{% include posts/thumb.html path='aesthetics' keyword='aes_linetype_size_shape' %}
{% include posts/thumb.html path='aesthetics' keyword='aes_position' %}

<h1 class="gg-big">Scales</h2>
{% include posts/thumb.html path='Scales' keyword='expand_limits' %}
{% include posts/thumb.html path='Scales' keyword='expansion' %}
{% include posts/thumb.html path='Scales' keyword='labs' %}
{% include posts/thumb.html path='Scales' keyword='lims' %}
{% include posts/thumb.html path='Scales' keyword='scale_alpha' %}
{% include posts/thumb.html path='Scales' keyword='scale_binned' %}
{% include posts/thumb.html path='Scales' keyword='scale_brewer' %}
{% include posts/thumb.html path='Scales' keyword='scale_colour_continuous' %}
{% include posts/thumb.html path='Scales' keyword='scale_colour_discrete' %}
{% include posts/thumb.html path='Scales' keyword='scale_continuous' %}
{% include posts/thumb.html path='Scales' keyword='scale_date' %}
{% include posts/thumb.html path='Scales' keyword='scale_discrete' %}
{% include posts/thumb.html path='Scales' keyword='scale_gradient' %}
{% include posts/thumb.html path='Scales' keyword='scale_grey' %}
{% include posts/thumb.html path='Scales' keyword='scale_hue' %}
{% include posts/thumb.html path='Scales' keyword='scale_identity' %}
{% include posts/thumb.html path='Scales' keyword='scale_linetype' %}
{% include posts/thumb.html path='Scales' keyword='scale_manual' %}
{% include posts/thumb.html path='Scales' keyword='scale_shape' %}
{% include posts/thumb.html path='Scales' keyword='scale_size' %}
{% include posts/thumb.html path='Scales' keyword='scale_steps' %}
{% include posts/thumb.html path='Scales' keyword='scale_viridis' %}

<h1 class="gg-big">Guides axes and legends</h2>
{% include posts/thumb.html path='Guides axes and legends' keyword='guide_axis' %}
{% include posts/thumb.html path='Guides axes and legends' keyword='guide_bins' %}
{% include posts/thumb.html path='Guides axes and legends' keyword='guide_colourbar' %}
{% include posts/thumb.html path='Guides axes and legends' keyword='guide_coloursteps' %}
{% include posts/thumb.html path='Guides axes and legends' keyword='guide_legend' %}
{% include posts/thumb.html path='Guides axes and legends' keyword='guides' %}
{% include posts/thumb.html path='Guides axes and legends' keyword='sec_axis' %}

<h1 class="gg-big">Facetting</h2>
{% include posts/thumb.html path='Facetting' keyword='facet_grid' %}
{% include posts/thumb.html path='Facetting' keyword='facet_wrap' %}
{% include posts/thumb.html path='Facetting' keyword='vars' %}

<h1 class="gg-big">Coordinate systems</h2>
{% include posts/thumb.html path='Coordinate systems' keyword='coord_cartesian' %}
{% include posts/thumb.html path='Coordinate systems' keyword='coord_fixed' %}
{% include posts/thumb.html path='Coordinate systems' keyword='coord_flip' %}
{% include posts/thumb.html path='Coordinate systems' keyword='coord_map' %}

<h1 class="gg-big">Themes</h2>
{% include posts/thumb.html path='Themes' keyword='element' %}
{% include posts/thumb.html path='Themes' keyword='theme' %}
{% include posts/thumb.html path='Themes' keyword='theme_get' %}
{% include posts/thumb.html path='Themes' keyword='theme_grey' %}

<h1 class="gg-big">Autoplot and fortify</h2>
{% include posts/thumb.html path='Autoplot and fortify' keyword='map_data' %}

<h1 class="gg-mega">More Examples</h1>

{% assign languagelist = site.posts | where:"language","ggplot2"  | sort: "order"  %}

{% include posts/documentation_eg.html %}
