(function(global, axios) {

  var Company = global.Company || {};

  var app = (function() {
    var _privateData = [];

    function _getData(url) {
      return axios.get(url);
    }

    function start() {

      return new Promise(function(resolve, reject) {
        var url = './data/jobs.json';

        _getData(url).then(function(response) {

          _privateData = response.data;

          resolve(_privateData);

        }).catch(function(error) {
          console.error(error);
          reject();
        });
      });

    }

    function render(options) {
      var element = options.el || false;
      var data = options.data || [];

      var $domElement = document.querySelector(element);

      if (!!$domElement) {
        var items = ['<ul>'];

        data.forEach(function(jobPosition) {
          items.push('<li>' + jobPosition.title + '</li>');
        });

        items.push('<ul/>');

        $domElement.innerHTML = items.join('');
      }
    }

    return {
      start: start,
      render: render
    };

  })();

  Company.app = app;

  if (typeof global.Company === 'undefined') {
    global.Company = Company;
  }
})(window, axios);
