---
description: Plotly's R graphing library makes interactive, publication-quality graphs
  online. Examples of how to make statistical charts.
display_as: statistical
language: r
layout: langindex
name: Statistical Charts
page_type: example_index
permalink: r/statistical-charts/
thumbnail: thumbnail/mixed.jpg
---

<header class="--welcome">
	<div class="--welcome-body">
		<!--div.--wrap-inner-->
		<div class="--title">

			<div class="--body">
				<h1>Plotly R Library Statistical Charts</h1>
				<p>{{page.description}}</p>
        {% include layouts/page-another-language.html %}
				{% include layouts/dashplug.html %}
			</div>
		</div>
	</div>
</header>

		{% assign languagelist = site.posts | where:"language","r" | where:"display_as","statistical" | where: "layout","base" | sort: "order" %}
        {% include posts/documentation_eg.html %}
