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
        document.getElementById('primary-search-results').innerHTML = '';
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
        empty: '<div class="text-center">No results found matching <strong>{{query}}</strong> Try the search on <a target="_blank" href="https://www.google.com/search?q=site%3Aplot.ly+{{query}}">Google</a>.</div>',
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
    // Replace with your own values
    appId: config.applicationId,
    apiKey: config.apiKey,
    indexName: 'schema',
    urlSync: false,
    searchFunction: function (helper) {
      if (helper.state.query === '') {
        document.getElementById('secondary-search-results').innerHTML = '';
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
      container: '#secondary-search-results',
      templates: {
        empty: '<div class="text-center">No results found matching <strong>{{query}}</strong> Try the search on <a target="_blank" href="https://www.google.com/search?q=site%3Aplot.ly+{{query}}">Google</a>.</div>',
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


  document.getElementById("search-results").style.zIndex = -99;
  document.getElementById("search-input").addEventListener("input", function (event){
    if (document.getElementById("search-input").value == ""){
      document.getElementById("search-results").style.zIndex = -99;

    } else{
      document.getElementById("search-results").style.zIndex = 99;
    }
  })
  document.getElementById("search-input").addEventListener("click", function (event){
    document.getElementById("search-results").style.zIndex = 99;
  })

  function hideOnClickOutside(element) {
    const outsideClickListener = event => {
        if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
          element.style.zIndex = -99;
        }
    }

    document.addEventListener('click', outsideClickListener)
  }

  const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length ) // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js 
  hideOnClickOutside(document.getElementById("search-results"));
  search.start();
  secondarySearch.start();

}(window.ALGOLIA_CONFIG));

