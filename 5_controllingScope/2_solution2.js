'use strict';
// ^ babel adds this automatically

function hello() {
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log('inner', i);
}

hello();
console.log('outer', i); // WAIT WHAT?!
