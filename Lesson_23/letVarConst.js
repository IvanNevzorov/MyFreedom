for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

let str = "asd " + number + " sdad";

function foo() {
  let obj2 = {
    b: 123,
  };
  let obj1 = {
    a: obj2,
  };

  return obj1;
}

let obj = foo();

console.log(obj.a);

function first() {
  function second() {
    third();
  }

  function third() {}

  second();
}
first();

function counter() {
  let count = 0;
  return function () {
    count++;
  };
}

let couterFirst = counter();
couterFirst();
let couterSecond = counter();
couterFirst();
