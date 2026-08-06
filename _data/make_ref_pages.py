import json

schema = json.load(open("plotschema.json"))


# Only Python and JavaScript are regenerated. The MATLAB, R, Julia, and F# reference
# pages are frozen at whatever schema they were last built from: those languages are no
# longer maintained, and their pages load pinned older plotly.js bundles (R/ggplot2 on
# 1.58.4, Julia/MATLAB on 2.35.3 — see _includes/layouts/head.html), so regenerating them
# from a current schema would document attributes their bundles don't have and drop ones
# they do. Their existing files under _posts/reference_pages/<lang>/ are left untouched.
for upperlang in ["Python", "JavaScript"]:
    lang = upperlang.lower()
    lang = "fsharp" if lang == "f#" else lang
    lang = "csharp" if lang == "c#" else lang
    langcode = "plotly_js" if lang == "javascript" else lang
    for attr in [
        "xaxis", "yaxis", "coloraxis", "scene", "polar", "ternary", "smith", "geo", "map",
        "sliders", "updatemenus", "annotations", "shapes", "images","selections", "global"
    ]:
        fullattr = "layout" + ("." + attr if attr != "global" else "")
        extra = "" if attr != "global" else """
{%- for trace in site.data.plotschema.traces -%}
{% if trace[1].layoutAttributes %}
{% assign attribute=trace[1].layoutAttributes %}
{% include posts/reference-block.html parentlink="layout" block="layout" parentpath="layout" %}
{% endif %}
{%- endfor -%}
    """
        with open(f"../_posts/reference_pages/{lang}/2020-07-20-{attr}.html" , 'w') as f:
            f.write(
f"""---
permalink: /{lang}/reference/{fullattr.replace(".", "/")}/
layout: langindex
page_type: reference
language: {langcode}
name: {fullattr}
description: Figure attribute reference for Plotly's {upperlang} open-source graphing library.
---

<h2>{upperlang} Figure Reference: <code>{fullattr}</code></h2>

<div class="row">
  <div class="eight columns" style="max-width: 900px;">

    {{% assign attribute=site.data.plotschema.layout.layoutAttributes %}}
    {{% include posts/reference-block.html parentlink="layout" block="layout" parentpath="layout" mustmatch="{attr}" %}}
    {extra}
  </div>
</div>
"""
)


    for trace in schema["traces"]:
        with open(f"../_posts/reference_pages/{lang}/2020-07-20-{trace}.html" , 'w') as f:
            f.write(
f"""---
permalink: /{lang}/reference/{trace}/
layout: langindex
page_type: reference
language: {langcode}
name: {trace} Traces
description: Figure attribute reference for Plotly's {upperlang} open-source graphing library.
---

<h2>{upperlang} Figure Reference: <code>{trace}</code> Traces</h2>

<div class="row">
  <div class="eight columns" style="max-width: 900px;">

    {{% include posts/reference-trace.html trace_name="{trace}" trace_data=site.data.plotschema.traces.{trace} %}}

  </div>
</div>
"""
)
