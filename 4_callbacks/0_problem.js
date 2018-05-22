class Greeter {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  helloWorld() {
    setTimeout(function() {
      console.log(`Hello ${this.getName()}`);
    }, 4);
  }
}

(new Greeter('Onion')).helloWorld();
