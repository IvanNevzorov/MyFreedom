// function Foo() {
//   this.bar = 10;
// }

// Foo.voise = function (obj) {
//   console.log(obj);
// };
// Foo.lolkek = "asdasda";
// Foo.prototype.bar = 42;

// let dasha = {
//   name: "Dasha",
//   prototype: {},
// };

// dasha.prototype.constructor = dasha;
// dasha.age = 18;

// console.log(dasha);

// var foo = new Foo();
// console.log(foo);
// console.log(foo.bar);

// // delete foo.bar;
// console.log(foo);
// console.log(foo.bar);

// // delete Foo.prototype.bar;
// console.log(foo);
// console.log(foo.bar);

// let FooPrototype = {
//   study: true,
// };

// let slava = Foo();
// let ivan = Foo();

// Object.setPrototypeOf(slava, FooPrototype);
// Object.setPrototypeOf(ivan, FooPrototype);

// slava.age = 20;

// console.log(slava);
// console.log(ivan);

// let objPrototype = { name: "Ivan", age: 20 };
// let obj = { name: "Slava" };

// Object.setPrototypeOf(obj, objPrototype);
// console.log(obj);

class Animal {
  constructor({ name, age, run }) {
    this.name = name;
    this.age = age;
    this.run = function () {
      return run;
    };
    this.counter = 0;
    Animal.counter++;
  }

  voise() {
    console.log(true);
  }

  foo() {
    this.counter++;
    console.log(this.counter);
  }

  walk() {
    console.log(true);
  }

  static foo(obj) {
    console.log(this.counter);
  }
}
Animal.counter = 0;

let dog = new Animal({ name: "some", age: 20, run: true });
console.log("Animal");
Animal.foo();
console.log("dog");
dog.foo();

let dog1 = new Animal({ name: "some", age: 20, run: true });
console.log("Animal");
Animal.foo();
console.log("dog1");
dog1.foo();

let dog2 = new Animal({ name: "some", age: 20, run: true });
console.log("Animal");
Animal.foo();
console.log("dog2");
dog2.foo();

let dog3 = new Animal({ name: "some", age: 20, run: true });
console.log("Animal");
Animal.foo();
console.log("dog3");
dog3.foo();

let dog4 = new Animal({ name: "some", age: 20, run: true });
console.log("Animal");
Animal.foo();
console.log("dog4");
dog4.foo();
