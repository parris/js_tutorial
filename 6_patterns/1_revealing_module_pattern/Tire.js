window.Brigade = window.Brigade || {};

// You'll see most JS files wrapped with an iife thanks to babel + webpack.
// When you execute code in a script tag, by default everything within it is global.
// Below is what folks used to do for every file in their code base manually. This prevented
// leaking into the global scope while still allowing access to their modules.

// Tire.js
(function () {
  class Tire {}

  Brigade.Tire = Tire;
})();
