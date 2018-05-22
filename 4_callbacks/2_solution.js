class Greeter {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  helloWorld() {
    // arrow functions - are scoped differently!
    setTimeout(() => {
      console.log(`Hello ${this.getName()}`);
    }, 4);
  }
}

(new Greeter('Onion')).helloWorld();
