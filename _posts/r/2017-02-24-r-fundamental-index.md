---
description: Plotly's R graphing library makes interactive, publication-quality graphs
  online. Tutorials and tips about fundamental features of Plotly's R API.
display_as: file_settings
language: r
layout: langindex
name: Fundamentals
page_type: example_index
permalink: r/plotly-fundamentals/
redirect_from:
  - r/fundamentals/
  - r/style-options/
  - r/layout-options/
thumbnail: thumbnail/mixed.jpg
---

<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">

			<div class="--body">
				<h1>Plotly R Library Fundamentals</h1>
				<p>{{page.description}}</p><br>
        {% include layouts/page-another-language.html %}
				{% include layouts/dashplug.html %}
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","file_settings" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}
