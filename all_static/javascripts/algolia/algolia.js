// Init the search box
$(function(config) {
  'use strict';

  var search = instantsearch({
    // Replace with your own values
    appId: config.applicationId,
    apiKey: config.apiKey,
    indexName: config.indexName,
    urlSync: false,
    searchFunction: function (helper) {
      if (helper.state.query === '') {
        document.getElementById('search-results').innerHTML = '';
        return;
      }

      helper.search();
    }
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: "#search-input",
      magnifier: false,
      reset: false,
      queryHook: function(query, search) {
        if (query === "") {
          search();
        } else {
          search(query);
        }
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#search-results',
      hitsPerPage: 10,
      templates: {
        empty: '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>',
        item: '<pre class="hit">{{permalink}}</pre>'
      },
      transformData: {
        item: function(hit) {
          hit.raw = JSON.stringify(hit, null, 2);
          console.log(hit)
          return hit;
        }
      }
    })
  );

  search.start();

}(window.ALGOLIA_CONFIG));
