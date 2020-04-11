function time_ago(time) {

    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, 'seconds', 1], // 60
      [120, '1 minute ago', '1 minute from now'], // 60*2
      [3600, 'minutes', 60], // 60*60, 60
      [7200, '1 hour ago', '1 hour from now'], // 60*60*2
      [86400, 'hours', 3600], // 60*60*24, 60*60
      [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
      [604800, 'days', 86400], // 60*60*24*7, 60*60*24
      [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
      [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
      [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
      [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
      [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
      token = 'ago',
      list_choice = 1;
  
    if (seconds == 0) {
      return 'Just now'
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'from now';
      list_choice = 2;
    }
    var i = 0,
      format;
    while (format = time_formats[i++])
      if (seconds < format[0]) {
        if (typeof format[2] == 'string')
          return format[list_choice];
        else
          return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    return time;
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

ready(function(event) {
  let time_str = document.getElementById("time-ago-span").getAttribute("time");
  document.getElementById("time-ago-span").innerHTML = time_ago(time_str);
  
  // algolia search
  const renderHits = (renderOptions, isFirstRender) => {
    const { results, widgetParams } = renderOptions;
    let mainCount = 0;
    let extraCount = 0;
    if (results && results.query) {
      const hits = results.hits;
      if (hits.length > 0) {
        document.getElementById('pagination').style.display = 'block';
        document.getElementById('hits-per-page-selector').style.visibility = 'visible';
      }
      mainCount = hits.filter(app => app.bucket === 'main').length;  
      extraCount = hits.filter(app => app.bucket === 'extra').length;

      var renderedResults = hits.map(app => {
        if (app.bucket === 'main') {
          return `<div class="box">
            <div class="level">
              <div class="level-left">
                <div class="level-item has-text-left">${app.name}</div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <a class="button is-link is-outlined" href=${app.url}>
                    Check bucket
                  </a>
                </div>
                <div class="level-item">
                    <span class="tag is-primary is-medium">
                      <span class="is-size-6">${app.bucket}</span>
                    </span>
                </div>
              </div>
            </div>
          </div>`;
        } else if (app.bucket === 'extra') {
          return `<div class="box">
            <div class="level">
              <div class="level-left">
                <div class="level-item has-text-left">${app.name}</div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <a class="button is-link is-outlined" href=${app.url}>
                    Check bucket
                  </a>
                </div>
                <div class="level-item">
                    <span class="tag is-info is-medium">
                      <span class="is-size-6">${app.bucket}</span>
                    </span>
                </div>
              </div>
            </div>
          </div>`;
        }
      }).join('');
    }
    widgetParams.container.innerHTML = 
      results && results.query
      ? `
      <div class="container" style="margin-top: 5px; max-width: 480px">
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Main</p>
              <p class="title">${mainCount}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Extra</p>
              <p class="title">${extraCount}</p>
            </div>
          </div>
        </div>
        ${renderedResults} 
      </div>`
      : `<div></div>`;  
  };
  const search = instantsearch({
    appId: '0SE031NDB2',
    apiKey: 'c9330c10501187df6fd9f8aa77f8a931',
    indexName: 'prod_scoop_search',
    routing: true
  });

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list',
      attributeName: 'name'
    })
  );

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
    })
  );

  const customHits = instantsearch.connectors.connectHits(
    renderHits
  );

  search.addWidgets([
    customHits({
      container: document.querySelector('#hits'),
    })
  ]);

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      maxPages: 20,
      scrollTo: false
    })
  );

  search.addWidget(
    instantsearch.widgets.hitsPerPageSelector({
      container: '#hits-per-page-selector',
      items: [
        {value: 10, label: '10 per page', default: true},
        {value: 20, label: '20 per page'},
      ]
    })
  );

  search.start();
});
