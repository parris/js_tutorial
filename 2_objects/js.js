// this is old school but still valid
function Greeter(name) {
  this.name = name;
}

Greeter.prototype.getName = function() {
  return this.name;
};

Greeter.prototype.helloWorld = function() {
  console.log(`Hello ${this.getName()}`);
}; // semi-colons are important

(new Greeter('Olive')).helloWorld();
