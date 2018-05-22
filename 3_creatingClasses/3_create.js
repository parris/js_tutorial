const greeterMethods = {
  getName: function () {
    return this.name;
  },
  helloWorld: function () {
    // this references the object that contains this function
    console.log(`Hello ${this.getName()}`);
  }
};

(Object.create(greeterMethods, {
  name: {
    writable: true,
    configurable: true,
    value: 'Olive'
  },
})).helloWorld();
