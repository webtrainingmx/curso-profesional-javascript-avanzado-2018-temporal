(function(global) {
  'use strict';

  var Webtraining = global.Webtraining || {};

  // Module
  Webtraining.chat = (function() {

    var _data = [];

    function _privateMethod() {
      console.log('>> _privateMethod');
    }

    return {
      start: function() {
        _privateMethod();
        console.log('>> chat start');
      },
      render: function() {
        console.log('>> chat render');
      },
      items: [2, 3, 4]
    };

  })();

  if (typeof global.Webtraining === 'undefined') {
    global.Webtraining = Webtraining;
  }

})(window);
