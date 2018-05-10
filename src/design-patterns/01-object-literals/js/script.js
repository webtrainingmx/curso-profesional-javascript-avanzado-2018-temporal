(function() {
  'use strict';

  var app = {
    data: [],
    start: function() {
      console.log('>> start');
    },
    render: function() {
      console.log('>> render');
    }
  };


  // Module (Object Literals)
  var chat = {
    start: function() {
      console.log('>> chat start');
    },
    render: function() {
      console.log('>> chat render');
    }
  };

  app.start();
  app.render();

  chat.start();
  chat.render();

})();
