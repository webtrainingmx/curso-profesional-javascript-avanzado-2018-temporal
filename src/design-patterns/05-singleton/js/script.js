(function() {
  'use strict';

  var Chat = (function() {
    var _instance = false;

    function _init() {
      console.log('>> init');
      debugger;
      return {
        messages: ['Hey! how is everything going?']
      };

    }

    return {
      getInstance: function() {
        if (!_instance) {
          _instance = _init();
        }

        return _instance;
      }
    };
  })();

  var chatOne = Chat.getInstance();
  var chatTwo = Chat.getInstance();

  console.log(chatOne);
  console.log(chatTwo);

})();
