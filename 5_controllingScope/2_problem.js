// what's wrong with this?
function hello() {
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log('inner', i);
}

hello();
console.log('outer', i); // WAIT WHAT?!
