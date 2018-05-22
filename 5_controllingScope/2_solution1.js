function hello() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log('inner', i);
}

hello();
console.log('outer', i);
