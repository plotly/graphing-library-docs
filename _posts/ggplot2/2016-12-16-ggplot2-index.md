---
permalink: /ggplot2/
name: ggplot2 Graphing Library
description: With ggplotly() by Plotly, you can convert your ggplot2 figures into interactive ones powered by plotly.js, ready for embedding into Dash applications.
layout: langindex
language: ggplot2
display_as: false
redirect_from: ggplot2/reference/
---

<header class="--welcome">
  <div class="--welcome-body">
    <!--div.--wrap-inner-->
    <div class="--title">
      
      <div class="--body">
        <h1>Plotly ggplot2 Library</h1>
        <p>{{page.description}}</p>
      </div>
    </div>
  </div>
</header>

{% assign languagelist = site.posts | where:"page_type","example_index" | where:"language","ggplot2"  | sort: "order"  %}

{% include posts/documentation_eg.html %}
