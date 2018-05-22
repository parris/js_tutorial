class Greeter {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  helloWorld() {
    console.log(`Hello ${this.getName()}`);
  }
}

(new Greeter('Pepper')).helloWorld();
