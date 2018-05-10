(function(global) {
  'use strict';

  var Webtraining = global.Webtraining || {};

  Webtraining.chat = {
    start: function() {
      console.log('>> chat start');
    },
    render: function() {
      console.log('>> chat render');
    }
  };

  if (typeof global.Webtraining === 'undefined') {
    global.Webtraining = Webtraining;
  }

})(window);

(function(global) {
  'use strict';

  var Webtraining = global.Webtraining || {};

  Webtraining.videoPlayer = {
    pause: function() {
      console.log('>> pause');
    }
  };

  if (typeof global.Webtraining === 'undefined') {
    global.Webtraining = Webtraining;
  }

})(window);
