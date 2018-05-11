(function(global, $) {
  'use strict';

  var App = global.App || {};
  var utils = App.utils || {};

  utils.http = (function() {
    function sendAJAX(params) {
      // Promise A+
      // Deferred!!!!
      return $.ajax({
        url: params.url,
        data: params.data,
        method: params.method
      });

    }

    function buildParamsObject(url, method, data) {
      return {
        url: url,
        data: data,
        method: method
      };
    }

    return {
      // Facade for GET requests
      get: function(url, data) {
        var params = buildParamsObject(url, 'GET', data);
        return sendAJAX(params);
      },
      // Facade for POST requests
      post: function(url, data) {
        var params = buildParamsObject(url, 'POST', data);
        return sendAJAX(params);
      }
    };
  })();

  App.utils = utils;

  if (typeof global.App === 'undefined') {
    global.App = App;
  }
})(window, jQuery);
