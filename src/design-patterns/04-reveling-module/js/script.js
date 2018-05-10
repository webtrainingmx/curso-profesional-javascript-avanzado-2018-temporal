(function(global) {
  'use strict';

  var Webtraining = global.Webtraining || {};

  // Module
  Webtraining.chat = (function() {

    var _data = [];

    function _privateMethod() {
      console.log('>> _privateMethod');
    }

    function _render() {
      console.log('>> chat render');
    }

    function start() {
      _privateMethod();
      _render();
      console.log('>> chat start');
    }

    return {
      start: start
    };

  })();

  if (typeof global.Webtraining === 'undefined') {
    global.Webtraining = Webtraining;
  }

})(window);
