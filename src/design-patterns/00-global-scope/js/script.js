// Immediately Invoked Function Expression
console.log(this);

(function(global) {
  'use strict';

  var cat = 'Tom';
  var dog;

  function f1() {
    var cat = 'Félix';
  }

  function f2() {
    cat = 'Garfield';
    dog = 'Beethoven';
  }

  f1();
  f2();

  global.f1 = f1;

})(window);

dog = 'Tom';

// Syntatic sugar!!!
var Person = function() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function() {
    return this.name;
  };
  return Person;
}();

var esmeralda = new Person('Esmeralda');
esmeralda.getName();

var luis = new Person('Luis');
luis.getName();
