function hello() {
  var j = "Hello World";
  console.log('outer', j);

  function inner() {
    console.log('inner', j);
  }

  inner();
}

hello();
