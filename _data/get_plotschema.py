import json
from urllib.request import urlopen
import sys

version = sys.argv[1]

orders = json.load(open("orderings.json", "r"))

schema = json.load(
    urlopen(
        "https://raw.githubusercontent.com/plotly/plotly.js/v%s/dist/plot-schema.json"
        % version
    )
)
# schema = json.load(open("plot-schema.json", "r"))

def reorder_keys(parent, target, order):
    original = parent[target]
    parent[target] = {}
    for k in order:
        if k in original:
            parent[target][k] = original[k]
    for k in original.keys():
        if k not in parent[target]:
            parent[target][k] = original[k]
            print("missing key in %s: %s" % (target, k))


reorder_keys(schema, "traces", orders["traces"])
reorder_keys(schema["layout"], "layoutAttributes", orders["layout"])

for trace in schema["traces"].values():
    reorder_keys(trace, "attributes", orders["trace_attr_order"])


def make_underscore(path, section, value):
    if section == "layout":
        patterns = dict(
            xaxis="xaxes",
            yaxis="yaxes",
            scene="scenes",
            coloraxis="coloraxes",
            geo="geos",
            mapbox="mapboxes",
            ternary="ternaries",
            polar="polars",
        )
        item_patterns = dict(
            shapes="shapes", images="layout_images", annotations="annotations",
        )
        if len(path) > 0 and path[0] in patterns:
            if len(path) > 1:
                return (
                    "fig.update_"
                    + patterns[path[0]]
                    + "("
                    + "_".join(path[1:])
                    + "="
                    + value
                    + ")"
                )
            return "fig.update_" + patterns[path[0]] + "(...)"
        elif len(path) > 0 and path[0] in item_patterns:
            if len(path) > 3:
                return (
                    "fig.update_"
                    + item_patterns[path[0]]
                    + "("
                    + "_".join(path[3:])
                    + "="
                    + value
                    + ")"
                )
            return "fig.update_" + item_patterns[path[0]] + "(...)"
        elif len(path) > 0:
            return "fig.update_layout(" + "_".join(path) + "=" + value + ")"
        return "fig.update_layout(...)"
    else:
        if len(path) > 0:
            return (
                "fig.update_traces("
                + "_".join(path)
                + "="
                + value
                + ", selector=dict(type='"
                + section
                + "'))"
            )
        return "fig.update_traces(..., selector=dict(type='" + section + "'))"


def underscores(attr, path, section):
    if "items" not in attr or (
        len(path) > 0 and path[0] in ["shapes", "annotations", "images"]
    ):
        if "_deprecated" in attr:
            del attr["_deprecated"]
        for k in attr:
            if type(attr[k]) == dict and not k.endswith("src"):
                underscores(attr[k], path + [k], section)

        if len(path) == 0 or path[-1] != "items":
            if attr.get("role") == "object":
                attr["magic_underscores"] = make_underscore(path, section, "dict(...)")
            else:
                attr["magic_underscores"] = make_underscore(path, section, "&lt;VALUE&gt;")
    elif len(path) == 0 or path[-1] != "items":
        attr["magic_underscores"] = make_underscore(path, section, "list(...)")


underscores(schema["layout"]["layoutAttributes"], [], "layout")
for trace_type in schema["traces"]:
    underscores(schema["traces"][trace_type]["attributes"], [], trace_type)

json.dump(schema, open("plotschema.json", "w"), indent=2)
json.dump(dict(version=version), open("jsversion.json", "w"), indent=2)
