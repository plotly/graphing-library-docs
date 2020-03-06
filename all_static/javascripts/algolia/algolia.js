// Init the search box
$(function(config) {
  'use strict';

  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");
  var modal = document.getElementById("myModal");
  var primarySearchResults = document.getElementById('primary-search-results');
  var schemaSearchResults = document.getElementById('schema-search-results');
  var modalContent = document.getElementById('modal-content');

  var lang = window.plotly_doc_language;
  if (lang == "plotly_js"){
    lang = "javascript"
  }

  var emptyResult = '<div class="text-center"><br><br>No results found matching <strong>{{query}}</strong>.<br><br> Click here to <a class="algolia__result-link" target="_blank" href="https://www.google.com/search?q=plotly+' + lang + '+{{query}}">search for "plotly ' + lang + ' {{query}}" on Google</a>.</div>';
 
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
    })
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
    })
  );

  searchInput.addEventListener("input", function (event){
    if (searchInput.value == "" && !navigator.userAgent.match(/Trident.*rv:11\./)){
      searchResults.style.zIndex = -99;
      modalContent.style.background = "none";
      modalContent.style.border = "none";

    } else {
      searchResults.style.zIndex = 99;
      modalContent.style.background = "#fff";
      modalContent.style.border = "1px solid rgba(0,0,0,.2)";
    }
  });

  modal.addEventListener("focus", function(e){
    searchInput.focus();
  });

  search.start();
  secondarySearch.start();

}(window.ALGOLIA_CONFIG));