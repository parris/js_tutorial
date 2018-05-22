'use strict';

function hello() {
  const hi = 'yo';

  // Yes - curly braces can both represent blocks and object literals.
  // You can't judge a book by its cover - it's what's on the inside that counts.
  {
    const meow = 'meow';
    console.log('inner', meow);
  }

  console.log('outer', hi);
  console.log('outer2', meow); // <-- this is undefined!
}

hello();
