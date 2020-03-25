# Contribute to Plotly's [Julia Documentation](https://plotly.com/julia/)
## Initial Steps:
0. Clone the repo.:

  ```
  $ git clone git@github.com:plotly/graphing-library-docs.git
  $ cd graphing-library-docs
  ```
1. Check Ruby version `$ ruby --version`. We recommend using `version 2.3.3` or the same ruby version as gh-pages: https://pages.github.com/versions/. Note [RVM](https://rvm.io/rvm/install) is helpful for installing and managing ruby versions.

2. Install bundler and a couple dependencies from the gemfile:

  ```
  $ gem install bundler
  $ bundle install

  ```
<b>IMPORTANT</b> -If not using bundler and the gemfile, [install the same jekyll version that GitHub Pages is using](https://pages.github.com/versions/).

## Create Julia Documentation:
Our Julia tutorials are written in HTML files with embedded plot examples.
##### In `documentation/_posts/julia`
1. Create a folder titled with the chart type or topic you're adding to the documentation (i.e. `bar`)  
2. `cd` into the folder you created and create an html index file labeled: `yyyy-mm-dd-chart_type_julia_index.html`. Copy the index file template below and replace with the necessary information pertaining to the doc you are creating.
  ```
  ---
  title: Julia Add-Chart-Type-or-Topic | Examples | Plotly
  name: Add-Chart-Type-or-Topic
  permalink: julia/add-chart-type-or-topic/
  description: How to make a add-chart-type-or-topic in Julia. Add an additional sentence summarizing chart-type or topic.
  layout: base
    thumbnail: thumbnail/add-chart-type-or-topic.jpg *MORE INFO ON ADDING THUMBNAILS BELOW
  language: julia
  page_type: example_index
  display_as: **SEE BELOW
  order: ***SEE BELOW
  ---
  {% assign examples = site.posts | where:"language","julia" | where:"suite","add-chart-type-or-topic"**** | sort: "order" %}
  {% include posts/auto_examples.html examples=examples %}
  ```
  - **`display_as` sets where your tutorial is displayed
      - 'basic' = https://plotly.com/julia/#basic-charts
      - 'statistical' = https://plotly.com/julia/#statistical-charts
      - 'scientific' = https://plotly.com/julia/#scientific-charts
      - 'financial' = https://plotly.com/julia/#financial-charts
      - 'maps' = https://plotly.com/julia/#maps
      - '3d_charts' = https://plotly.com/julia/#3d-charts
      - See additional options [HERE](https://github.com/plotly/graphing-library-docs/blob/master/_includes/documentation_eg.html#L1)
  - *** `order` defines the order in which the tutorials appear in each section on plotly.com/julia. Please take a look at https://plotly.com/julia/ and order your tutorial next to similar chart types. <b>Note</b> `order` can be a float.

3. Create an example and save it on https://plotly.com/.

4. Add an HTML file (`yyyy-mm-dd-example-name.html`) for each example. The HTML file should have a header (template below), followed by the Julia code used to create the example.
  ```
  ---
  name: Basic Bar Chart **
  plot_url: https://plotly.com/~PlotBot/39
  language: julia
  suite: bar
  order: 1 **
  sitemap: false
  arrangement: horizontal
  ---
  # Learn about API authentication here: https://plotly.com/julia/getting-started
  # Find your api_key here: https://plotly.com/settings/api

  using Plotly


  data = [
    [
      "x" => ["giraffes", "orangutans", "monkeys"],
      "y" => [20, 14, 23],
      "type" => "bar"
    ]
  ]
  response = Plotly.plot(data, ["filename" => "basic-bar", "fileopt" => "overwrite"])
  plot_url = response["url"]
  ```

6. Best Practices:
  - <b>Now we have an awesome navigation bar on the left side of our tutorial pages.</b> The navigation bar displays the `name`** in the `order`** so add a `name` for each example and try to make `name`s as informative and concise as possible. Ex: `Basic Bar Chart`
  - `order` examples from basic -> advanced.
  - Try to use "real" data, to make the examples realistic and interesting. Avoid including large datablocks in the tutorial by uploading the datafile to https://github.com/plotly/datasets. Importing data rather than pasting a large chunk of data in the tutorial creates a cleaner example. (Using random data is okay for some examples too :) )

8. Add Thumbnail Images
  - Thumbnail images should named `your-tutorial-chart.jpg` and be *EXACTLY* 160px X 160px
  - Thumbnail images should be clear and interesting. You do not need to capture the ENTIRE chart, but rather focus on the most interesting part of the chart.
  - Use images.plotly.com for adding new images.
    - Log-in here: https://661924842005.signin.aws.amazon.com/console
    - Username: Plotly_Editors
    - From the <b>Amazon Web Services Console</b> select <b>S3 (Scalable Storage in the Cloud)</b> then select <b>plotly-tutorials</b> -> <b>plotly-documentation</b> -> <b>thumbnail</b>
    - Now from <b>All Buckets /plotly-tutorials/plotly-documentation/thumbnail</b> select the <b>Actions</b> dropdown and <b>upload</b> your .jpg file

##### In the terminal in the `documentation` repo
9. Commit and Push your tutorial
  - `git add` your .html files
  - `git commit -m "include a message about the tutorial you're adding"`
  - `git push origin master`

10. To proof your work, serve the pages locally by running: `bundle exec jekyll serve --config _config_dev.yml` from the root of the documentation repo.
For more information see these steps: https://github.com/plotly/graphing-library-docs/blob/master/Contributing.md

11. Deploy changes by running `bundle exec rake deploy` from the root of the documentation repo.

##### At https://plotly.com/julia
12. Check your Tutorial!!!! This is a <b>very important</b> step.
  <b>PLEASE</b> visit https://plotly.com/julia/your-tutorial and make sure everything looks correct :)

  - Some common problems that you should check for:
    - Make sure all plots/codepen embeds appear! (*you may want to sign out of your Plotly/codepen account to ensure you didn't accidentally embed private plots)
    - The thumbnail image appears on: https://plotly.com/julia/

Thanks for contributing to our documentation!!
