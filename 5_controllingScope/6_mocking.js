// this is more or less how sinon/jest.mock work
function mocker(cls, fn, mock) {
  const info = {
    oldFn: cls.prototype[fn], // for simplicity I've decided to just always rely on prototype
    callCount: 0,
  };

  cls.prototype[fn] = function mocked() {
    info.callCount++;
    return mock();
  }

  function restore() {
    cls.prototype[fn] = info.oldFn;
  }

  return {
    info,
    restore,
  };
}

class Tire {
  toString() {
    return 'tire';
  }
}

class Car {
  getTire() {
    const tire = new Tire();
    console.log(tire.toString());
  }
}

class Test {
  testA() {
    (new Car()).getTire(); // will log tire
  }
  testB() {
    const mock = mocker(Tire, 'toString', function () { return 'mocked tire'; });

    const car = new Car();
    car.getTire();
    console.log(mock.info.callCount);

    mock.restore();
  }
}

new Test().testA();
new Test().testB();

// ... wait why doesn't jest.mock work sometime?
// the answer is almost always the reference is wrong, operations are happening out of order
// or you an object literal is getting produced which is impossible to mock.
// example:


`
// fileA.js
module.exports = function cantMockThis() {
  return {
    'yo'
  }
}

// fileB.js
const fileA = require('./fileA');
module.exports = function() {
  fileA();
}

// testFile.js
const fileA = require('./fileA'); // how do you mock this? you can't
const fileB = require('./fileB');
(function() {
  // by the time this test file runs fileB already has a reference to fileA an there is no way
  // fileA = () => {} ... this just changes the local reference
  // at this point you may think "oh I'll just replace return an "object" instead of a function
  // yea sometimes that'll work, sometimes it won't. You'll definitely need to refactor.

  // my recommendation - don't mock or use prototype or mock something really low level/global
  // that you can indeed mock
}());
`
