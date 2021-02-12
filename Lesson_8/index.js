// useScript;

// function checkThis() {
//   console.log(this);
// }

// let ivan = {
//   name: "Ivan",
// };

// let person = {
//   name: "Slava",
//   getFunc: checkThis,
// };

// person.getFunc();

function Person(name = "ivan", age) {
  this.age = age;
  this.name = name;
}

Person.prototype.getAge = function () {
  console.log(this.age);
};

Person.getName = function () {
  console.log(this.name);
};

let obj = {};
let person = new Person("Slava", 20);

let dasha = new Person("Dasha", 20);

let ivan = new Person("Ivan", 20);

let sergey = new Person("Sergey", 20);

let denis = new Person("Denis", 20);

// console.log(Person.prototype);
// console.log(Object.prototype);

class PersonSlavik {
  constructor(age) {
    this.name = "Slavik";
    this.age = age;
  }

  getAge = function () {
    console.log(this.age);
  };

  getName = function () {
    console.log(this.name);
  };
}

let slavik = new PersonSlavik(20);

function Privet(name = "Sergey", age = 25) {
  this.name = name;
  this.age = age;
}

let obj2 = Object.assign({}, slavik, { name: "Slava" });

let aleksandr = {
  name: "Sasha",
};
let ivanProto = {};
// ivanProto.__proto__ = aleksandr;
// Object.setPrototypeOf(ivanProto, aleksandr);

let array = [1, 2, 3, 4];
let newArray = Array.of(...array);
// array = [...array];
newArray.push(5);

function func() {
  this.name = '1'
  return 1
}

console.log(func());
console.log(new func());

let exampleFunc = ()=>{

}


console.log(new exampleFunc());