'use strict';

window.Brigade = window.Brigade || {};

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
