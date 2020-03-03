// Init the search box
$(function(config) {
  'use strict';

  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");
  var modal = document.getElementById("myModal");
  var primarySearchResults = document.getElementById('primary-search-results');
  var schemaSearchResults = document.getElementById('schema-search-results');

  var emptyResult = '<div class="text-center">No results found matching <strong>{{query}}</strong> Try the search on <a target="_blank" href="https://www.google.com/search?q=site%3Aplot.ly+{{query}}">Google</a>.</div>';

  var search = instantsearch({
    // Replace with your own values
    appId: config.applicationId,
    apiKey: config.apiKey,
    indexName: config.indexName,
    urlSync: false,
    searchFunction: function (helper) {
      if (helper.state.query === '') {
        primarySearchResults.innerHTML = '';
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
      container: '#primary-search-results',
      templates: {
        empty: emptyResult,
        item: document.getElementById('algolia__template').innerHTML,
      },
      transformData: {
        item: function(hit) {
          hit.raw = JSON.stringify(hit, null, 2);
          return hit;
        }
      }
    }),
  );

  var secondarySearch = instantsearch({
    appId: config.applicationId,
    apiKey: config.apiKey,
    indexName: 'schema',
    urlSync: false,
    searchFunction: function (helper) {
      if (helper.state.query === '') {
        schemaSearchResults.innerHTML = '';
        return;
      }
      helper.search();
    }
  });

  secondarySearch.addWidget(
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

  secondarySearch.addWidget(
    instantsearch.widgets.hits({
      container: '#schema-search-results',
      templates: {
        empty: emptyResult,
        item: document.getElementById('algolia__secondary-template').innerHTML,
      },
      transformData: {
        item: function(hit) {
          hit.raw = JSON.stringify(hit, null, 2);
          return hit;
        }
      }
    }),
  );

  searchInput.addEventListener("input", function (event){
    if (searchInput.value == ""){
      searchResults.style.zIndex = -99;

    } else {
      searchResults.style.zIndex = 99;
    }
  });

  modal.addEventListener("focus", function(e){
    searchInput.focus();
  });

  search.start();
  secondarySearch.start();

}(window.ALGOLIA_CONFIG));