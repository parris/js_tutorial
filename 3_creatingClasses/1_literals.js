function createGreeter(name) {
  return {
    name: name,
    getName: function() {
      return name;
    },
    helloWorld: function() {
      // this references the object that contains this function
      console.log(`Hello ${this.getName()}`);
    }
  };
}

(createGreeter('Mushrooms')).helloWorld();
