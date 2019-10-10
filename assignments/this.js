/* The four principles of "this";
 * in your own words. explain the four principles for the "this" keyword below.
 *
 * 1. The Window/Global Object Binding is the one that refers to the default context in the global scope, which is the window.
 * 2. The object that is standing before the dot is what this keyword will be bound to.
 * 3. When the new keyword is used(a constructor), this is bound to the new object being created.
 * 4. We can set the value of this explicitly with call(), bind(), and apply().
 *
 * write out a code example of each explanation above
 */

//-------------------------------------------------------------------------------------------------------------

// Principle 1

// code example for Window Binding
var myFunction = function() {
  // console.log(this);
};

myFunction(); // Window

//-------------------------------------------------------------------------------------------------------------

// Principle 2

// code example for Implicit Binding

function beer() {
  console.log(this.a);
}

var obj = {
  a: 2,
  beer: beer
};

obj.beer();

//-------------------------------------------------------------------------------------------------------------

// Principle 3

// code example for New Binding

function Wine() {
  //  var this = {};

  this.name = 'Merlot';
  this.say = function() {
    return 'I am ' + this.name;
  };
  console.log(this.say());
  // return this;
}

var name = 'Pinot Noir';
var result = new Wine();
console.log(result.name);

//-------------------------------------------------------------------------------------------------------------

// Principle 4

// code example for Explicit Binding

function greet() {
  console.log(this.name);
}

var person = {
  name: 'Daniel'
};

greet.call(person);
