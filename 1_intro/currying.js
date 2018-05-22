function curry(fn) {
  let currentArgs = [];
  let innerCurry = (...args) => {
    currentArgs = currentArgs.concat(args);
    if (currentArgs.length >= fn.length) {
      return fn(...currentArgs);
    } else {
      return innerCurry;
    }
  };

  return innerCurry;
}

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

// ruby can't do this and python can almost do it but requires a "nonlocal" keyword
// which allows parent function scopes to be accessed
const curriedAdd = curry(addThreeNumbers);
console.log(curriedAdd(1)(2)(3));

const curriedAdd2 = curry(addThreeNumbers);
console.log(curriedAdd2(1)(2, 3));

const curriedAdd3 = curry(addThreeNumbers);
console.log(curriedAdd2(1, 2, 3));
