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
        item: document.getElementById('algolia__template').innerHTML,
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

  document.getElementById("search-results").style.zIndex = -99;
  document.getElementById("search-input").addEventListener("input", function (event){
    if (document.getElementById("search-input").value == ""){
      document.getElementById("search-results").style.zIndex = -99;

    } else{
      document.getElementById("search-results").style.zIndex = 99;
    }
  })

  search.start();

}(window.ALGOLIA_CONFIG));

