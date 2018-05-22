const throttle = (fn, wait) => {
  let isCalled = false;

  return (...args) => {
    if (isCalled === false) {
      fn(...args); // the old school way - fn.apply(null, arguments);
      isCalled = setTimeout(() => {
        isCalled = false;
      }, wait);
    }
  };
}

const throttledClickHandler = throttle((value) => console.log(value), 1000);

throttledClickHandler(1);
throttledClickHandler(2);
throttledClickHandler(3);
throttledClickHandler(4);

setTimeout(() => {
  throttledClickHandler(5);
  throttledClickHandler(6);
}, 1500);
