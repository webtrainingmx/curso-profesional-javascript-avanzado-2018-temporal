(function(global) {
  'use strict';

  var genericUser = {
    name: '',
    addAttribute: function() {
      console.log('>> addAttribute()');
    },
    getAttribute: function() {
      console.log('>> getAttribute()');
    }
  };

  var esmeralda = Object.create(genericUser, {
    'name': {
      value: 'Esmeralda',
      enumerable: true
    },
    'email': {
      value: 'e@web.com',
      enumerable: false
    }
  });

  console.log(esmeralda, esmeralda.addAttribute())
;
})(window);
