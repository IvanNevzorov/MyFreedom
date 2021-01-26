class Test {
  constructor() {
    this.name = "test";
    console.log("constructor", this);
    this.option = "some";
  }
  number = 5;

  method() {
    console.log("method");
    console.log(this);
  }

  static methodClass() {
    console.log("methodClass");
    console.log(this);
  }
}

// function Test() {
//   this.name = "test";
//   this.option = "some";
// }
// Test.prototype.method = function () {
//   console.log("method");
// };
// Test.prototype.method1 = function () {
//   console.log("method");
// };

// Test.methodClass = function () {
//   console.log("methodClass");
// };

// Test.prototype.method = function () {
//   console.log("something else");
// };

const test = new Test();

console.log("Test.prototype", test.__proto__ === Test.prototype);
console.log("Test", test.__proto__ === Test);

let obj = {};
obj.name = "Ivan";
let ObjIvan = obj;

ObjIvan.age = 123;
console.log(obj);
console.log(ObjIvan);
console.log(obj === ObjIvan);
console.log(test);
