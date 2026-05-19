# Contribute to Plotly's [Julia Documentation](https://plotly.com/julia/)

The Julia tutorial content displayed on https://plotly.com/julia/ is **not** authored in this repository. It lives in [plotly/plotlyjs.jl-docs](https://github.com/plotly/plotlyjs.jl-docs) and is fetched into this repo at build time by `make fetch_upstream_files`.

## Where to make changes

- **Tutorial content (chart examples, prose, etc.):** edit the source files in [plotly/plotlyjs.jl-docs](https://github.com/plotly/plotlyjs.jl-docs). See that repo's README for authoring instructions.
- **The Julia landing/index pages** that appear on https://plotly.com/julia/ (sidebar, categories, etc.): edit the corresponding files in this repository under `_posts/julia/` and the include files under `_includes/`.

## Building locally

To preview Julia documentation locally, follow the setup steps in the main [README.md](https://github.com/plotly/graphing-library-docs/blob/master/README.md#how-to-get-the-application-working-locally), then run:

```sh
make fetch_upstream_files
bundle exec jekyll serve --config _config_dev.yml
```

`fetch_upstream_files` clones the latest built Julia content into `_posts/julia/html/`. Without it, the Julia pages will not render locally.

## Pull requests

Open a pull request against the `master` branch of [plotly/graphing-library-docs](https://github.com/plotly/graphing-library-docs) for changes to the Julia landing pages, or against [plotly/plotlyjs.jl-docs](https://github.com/plotly/plotlyjs.jl-docs) for changes to tutorial content. A Plotly maintainer will review.
