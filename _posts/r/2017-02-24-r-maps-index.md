---
description: Plotly's R graphing library makes interactive, publication-quality graphs
  online. Examples of maps.
display_as: maps
language: r
layout: langindex
name: Maps
page_type: example_index
permalink: r/maps/
thumbnail: thumbnail/mixed.jpg
---

<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">

			<div class="--body">
				<h1>Plotly R Library Maps</h1>
				<p>{{page.description}}</p>
        {% include layouts/page-another-language.html %}
				{% include layouts/dashplug.html %}
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","maps" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}
