/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window Binding - if nonoe of the other rules apply the this keyword defaults to the window binding ( the world )
* 2.  Implicit Binding - Most common rule, only applies to objects with methods ( left of dot)
* 3.  Explicit Binding - You can force a function call to us a specific object without putting a property reference on the object.
* 4.  New Binding - Creates a new object and the this keyword points to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function world() {
  console.log(this.me);
}

var me = 'The 🌎 is a big place!';

world();

// Principle 2

// code example for Implicit Binding
let myInfo = {
  name: 'Walter',
  age: 40,
  info: function(){
    console.log(`My age is ${this.age}`);
  }
}

myInfo.info();

// Principle 3

// code example for New Binding

function Dog(barking){
  this.thing = barking;
}

let myDog = new Dog('Zeus the American Bulldog');

console.log(myDog.thing);

// Principle 4

// code example for Explicit Binding

function animalSound() {
  console.log(`${this.name} says ${this.sound}`);  
}

const animal = {
  name: 'Bob',
  sound: 'Moo',
  species: 'Cow'  
}

animalSound.call(animal);