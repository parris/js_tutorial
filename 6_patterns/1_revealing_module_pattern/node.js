'use strict';
// AKA how to avoid globals in the browser

// I don't recommend this in node - you should just use "require" or "import"
const Brigade = {};

// You'll see most JS files wrapped with an iife thanks to babel + webpack.
// When you execute code in a script tag, by default everything within it is global.
// Below is what folks used to do for every file in their code base manually. This prevented
// leaking into the global scope while still allowing access to their modules.

// Tire.js
(function () {
  class Tire {}

  Brigade.Tire = Tire;
})();

// Car.js
(function () {
  class Car {
    constructor() {
      this.tires = [
        new Brigade.Tire(),
        new Brigade.Tire(),
        new Brigade.Tire(),
        new Brigade.Tire(),
      ];
    }
  }

  Brigade.Car = Car;
})();

// In a browser without webpack and friends you'd need to load this next file last
// main.js
(function () {
  const car = new Brigade.Car();
  console.log(car.tires);
})();
