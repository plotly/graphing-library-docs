# Contribute to Plotly's [R Documentation](https://plotly.com/r/)

The R tutorial content displayed on https://plotly.com/r/ and https://plotly.com/ggplot2/ is **not** authored in this repository. It lives in [plotly/plotly.r-docs](https://github.com/plotly/plotly.r-docs) and is fetched into this repo at build time by `make fetch_upstream_files`.

## Where to make changes

- **Tutorial content (Rmd files, chart examples, prose):** edit the source files in [plotly/plotly.r-docs](https://github.com/plotly/plotly.r-docs). See that repo's README for authoring instructions.
- **The R landing/index pages** that appear on https://plotly.com/r/ (sidebar, categories, etc.) — for example `2015-07-30-r-index.md` and the various `*-index.md` files in this directory: edit those files directly in this repository under `_posts/r/`.

## Building locally

To preview R documentation locally, follow the setup steps in the main [README.md](https://github.com/plotly/graphing-library-docs/blob/master/README.md#how-to-get-the-application-working-locally), then run:

```sh
make fetch_upstream_files
bundle exec jekyll serve --config _config_dev.yml
```

`fetch_upstream_files` clones the latest built R and ggplot2 content into `_posts/r/md/` and `_posts/ggplot2/md/`. Without it, the R tutorial pages will not render locally.

## Pull requests

Open a pull request against the `master` branch of [plotly/graphing-library-docs](https://github.com/plotly/graphing-library-docs) for changes to the R landing pages, or against [plotly/plotly.r-docs](https://github.com/plotly/plotly.r-docs) for changes to tutorial content. A Plotly maintainer will review.

## Search

Search on https://plotly.com/r/ is powered by an Algolia index that is updated separately. See the [Search indices section of the main README](https://github.com/plotly/graphing-library-docs/blob/master/README.md#search-indices) for how to update the R search index.
