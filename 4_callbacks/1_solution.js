class Greeter {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  helloWorld() {
    setTimeout(function () {
      console.log(`Hello ${this.getName()}`);
    }.bind(this), 4);
  }
}

(new Greeter('Onion')).helloWorld();
